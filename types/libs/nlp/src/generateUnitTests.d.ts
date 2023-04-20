import 'dotenv/config';
import { CreateChatCompletionResponse } from 'openai';
export declare function generateUnitTests(sourceCode: string, dirname: string, exportName: string, append?: boolean): Promise<{
    data: CreateChatCompletionResponse;
    text: string;
} | void>;
//# sourceMappingURL=generateUnitTests.d.ts.map