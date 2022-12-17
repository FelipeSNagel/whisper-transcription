export interface TranscriptionInterface {
    modelType: string;
    text: string;
    words: string[];
    time: number;
    errors: number[];
}