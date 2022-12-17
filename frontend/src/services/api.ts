import axios from 'axios';
import FormData from 'form-data';

const axiosApi = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 10 * 60 * 1000,
});

export const transcriptionRequest = async (fileBlob: Blob, modelType: string) => {
    const formData = new FormData();
    formData.append('files', fileBlob);
    formData.append('model_type', modelType);
    
    return axiosApi.post('transcription', formData);
}