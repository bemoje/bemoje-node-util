import { LanguageCode } from '../../../types/LanguageCode';
export interface IOpenaiTranscribeRequest {
    filepath: string;
    language: LanguageCode;
    format: 'srt' | 'vtt';
}
//# sourceMappingURL=IOpenaiTranscribeRequest.d.ts.map