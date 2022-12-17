/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState, useRef } from 'react';
import { FaMicrophone } from 'react-icons/fa'

import useRecorder from "hooks/useRecorder";
import { UseRecorder } from "types/recorder";

import WaitingSvg from 'assets/waiting.svg'

import { Button, Card } from 'components';
import { sweetAlert } from 'utils';

import { transcriptionRequest } from 'services/api'

import { ButtonsWrap, CardRecordFooter, HomeWrap, MicrophoneWrap, RowColumns, WrapTranscriptions, ResultWrap } from './styles';

import type { TranscriptionInterface } from './interface'

const Home = () => {

  const { recorderState, ...handlers }: UseRecorder = useRecorder();
  const { audio, blob } = recorderState;

  const [isTranscriptionsLoading, setIsTranscriptionsLoading] = useState(false);
  const [transcriptions, setTranscriptions] = useState<TranscriptionInterface[]>([]);
  const [modelType, setModelType] = useState("tiny");

  const [timer, setTimer] = useState(0);
  const timerRef = useRef(timer);


  let interval: NodeJS.Timeout;
  const initTimer = () => {
    timerRef.current = 0;

    interval = setInterval(() => {
      timerRef.current = timerRef.current + 100;
      setTimer(timerRef.current)

    }, 100);
  }

  const stopTimer = () => {
    clearInterval(interval);
  }

  const onCancel = () => {
    setTranscriptions([]);

    handlers.cancelRecording();
    stopTimer();
    setTimer(0);
  }

  const getFormattedTime = (receivedTime: number) => {
    const minutes = String(Math.floor(receivedTime / 60000)).padStart(2, "0");
    const seconds = String(((receivedTime % 60000) / 1000).toFixed(0)).padStart(2, "0");
    const miliseconds = String(Number(((receivedTime % 60000) % 1000).toFixed(0)) / 10).padStart(2, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  const handleSubmit = async () => {
    if (blob !== undefined) {
      try {

        setIsTranscriptionsLoading(true);
        initTimer();

        const { data } = await transcriptionRequest(blob, modelType);

        stopTimer();

        let transcriptionReceived = data?.results?.[0]?.transcript;

        if (transcriptionReceived[0] === " ") {
          transcriptionReceived = transcriptionReceived.slice(1);
        }

        setTranscriptions((state) => [...state, { text: transcriptionReceived, words: transcriptionReceived?.split(" "), errors: [], time: timerRef.current, modelType: data?.results?.[0]?.model_type }]);

        sweetAlert.fire({
          title: "Transcrição", text: "Transcrição realizada com sucesso!", icon: "success"
        });


      } catch (err) {

        sweetAlert.fire({
          title: "Transcrição", text: "Falhao ao realizar a transcrição!", icon: "error"
        });
      } finally {
        setIsTranscriptionsLoading(false);
      }
    }
  }

  const handleDeleteTranscription = (index: number) => {
    setTranscriptions(state => state.filter((_, i) => i !== index));
  }

  const downloadAudio = () => {
    if (audio !== null) {
      const tempLink = document.createElement('a');
      tempLink.href = audio;
      tempLink.setAttribute('download', 'audio.webm');
      tempLink.click();
    }
  }

  const getErrorByIndex = (transcriptionIndex: number, wordIndex: number) => {
    const editingTranscription = transcriptions[transcriptionIndex];

    return editingTranscription.errors.includes(wordIndex);
  }

  const handleErrorByIndex = (transcriptionIndex: number, wordIndex: number) => {
    const editingTranscription = transcriptions[transcriptionIndex];

    if (getErrorByIndex(transcriptionIndex, wordIndex)) {
      editingTranscription.errors = editingTranscription.errors.filter((errorIndex) => errorIndex !== wordIndex);
    } else {
      editingTranscription.errors = [...editingTranscription.errors, wordIndex];
    }

    setTranscriptions(state => state.map((transcription, index) => (index === transcriptionIndex ? editingTranscription : transcription)));
  }

  const calculatePercentResult = (transcriptionIndex: number) => {
    const editingTranscription = transcriptions[transcriptionIndex];

    return ((editingTranscription?.words?.length - editingTranscription?.errors?.length) / editingTranscription?.words?.length * 100).toFixed(2)
  }

  const calculateResult = (transcriptionIndex: number) => {
    const editingTranscription = transcriptions[transcriptionIndex];

    return `${editingTranscription?.words?.length - editingTranscription?.errors?.length}/${editingTranscription?.words?.length}`;
  }

  const contentCardRecord = useMemo(() => {
    if (recorderState.initRecording) {
      return <MicrophoneWrap>
        <FaMicrophone />
      </MicrophoneWrap>
    }

    if (audio) {
      return <div>
        <audio controls src={audio} />

        <div className="buttons-model">
          <span className="title">Selecione o modelo de transcrição:</span>

          <Button size="small" variation={modelType === "tiny" ? "primary" : "light"}
            onClick={() => setModelType("tiny")}
          >
            Tiny
          </Button>

          <Button size="small" variation={modelType === "base" ? "primary" : "light"}
            onClick={() => setModelType("base")}
          >
            Base
          </Button>

          <Button size="small" variation={modelType === "medium" ? "primary" : "light"}
            onClick={() => setModelType("medium")}
          >
            Medium
          </Button>
          <Button size="small" variation={modelType === "large" ? "primary" : "light"}
            onClick={() => setModelType("large")}
          >
            Large
          </Button>
        </div>
      </div>
    }

    return <div>Nenhum áudio foi gravado</div>

  }, [audio, modelType, recorderState]);


  return (
    <HomeWrap>


      <RowColumns>

        <Card headerTitle="Gravação de Áudio"
          headerSubTitle='Clique em "Começar" para iniciar a gravação'
          footer={
            <CardRecordFooter>
              <div>
                {isTranscriptionsLoading ? getFormattedTime(timer) : ''}
              </div>

              <ButtonsWrap>
                {audio && (
                  <Button onClick={downloadAudio} style={{ marginRight: '1rem' }} >
                    Download
                  </Button>
                )}

                {audio && (
                  <Button onClick={handleSubmit} variation="secondary" style={{ marginRight: '1rem' }} isLoading={isTranscriptionsLoading}>
                    Enviar
                  </Button>
                )}

                {(recorderState.initRecording || audio) && !isTranscriptionsLoading && (
                  <Button onClick={onCancel} variation="danger" style={{ marginRight: !audio ? '1rem' : 0 }}>
                    Cancelar
                  </Button>
                )}

                {!audio && (
                  <Button onClick={recorderState.initRecording ? handlers.saveRecording : handlers.startRecording} >
                    {recorderState.initRecording ? 'Salvar' : 'Começar'}
                  </Button>
                )}
              </ButtonsWrap>

            </CardRecordFooter>
          }
        >

          {contentCardRecord}
        </Card>



        <Card headerTitle="Resultado"
          headerSubTitle={transcriptions?.length < 1 ? 'Aguardando transcrição' : "Confira abaixo"}
        >
          <ResultWrap>

            {transcriptions?.length < 1 ? (
              <div />
            ) : (
              <div className="content">
                {transcriptions?.map((transcription, index) => (
                  <div key={index}>
                    <h2>Modelo: <strong>{transcription.modelType}</strong></h2>
                    <h3>{calculateResult(index)}</h3>
                    <h4>Acertos: <strong>{calculatePercentResult(index)}%</strong></h4>
                    <h5>Tempo: <strong>{getFormattedTime(transcription.time)}</strong></h5>
                  </div>
                ))}
              </div>
            )}

            <img src={WaitingSvg} className={isTranscriptionsLoading ? "shake" : ""} alt="Imagem de um bixinho redondo ouvindo música" />
          </ResultWrap>

        </Card>
      </RowColumns>

      {transcriptions?.map((transcription, transcriptionIndex) => (
        <Card key={transcriptionIndex} headerTitle={`Transcrição - ${transcription.modelType[0].toUpperCase() + transcription.modelType.substring(1)}`} style={{ marginTop: "1rem" }}
          headerSubTitle="Clique em uma palavra para marcar como erro"
          headerToolbar={
            <Button onClick={() => handleDeleteTranscription(transcriptionIndex)} variation="danger" size="small">x</Button>
          }
        >
          <WrapTranscriptions>
            {transcription?.words?.map((word, wordIndex) => (
              <Button key={wordIndex} onClick={() => handleErrorByIndex(transcriptionIndex, wordIndex)} size="small"    variation={getErrorByIndex(transcriptionIndex, wordIndex) ? "danger" : "light"} style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                {word}
              </Button>
            ))}
          </WrapTranscriptions>
        </Card>
      ))}
    </HomeWrap>
  );
};

export default Home;
