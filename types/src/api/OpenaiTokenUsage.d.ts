/// <reference types="node" />
import EventEmitter from 'events';
import type { CreateChatCompletionResponse, CreateCompletionResponse, CreateEditResponse } from 'openai';
/**
 * For monitoring openai api token usage.
 */
export declare class OpenaiTokenUsage {
    static readonly prices: {
        completion: {
            in: number;
            out: number;
        };
        chat: {
            in: number;
            out: number;
        };
        chat16k: {
            in: number;
            out: number;
        };
        editText: {
            in: number;
            out: number;
        };
        editCode: {
            in: number;
            out: number;
        };
    };
    readonly events: EventEmitter;
    readonly usage: {
        completion: {
            in: {
                tokens: number;
                USD: number;
            };
            out: {
                tokens: number;
                USD: number;
            };
        };
        chat: {
            in: {
                tokens: number;
                USD: number;
            };
            out: {
                tokens: number;
                USD: number;
            };
        };
        chat16k: {
            in: {
                tokens: number;
                USD: number;
            };
            out: {
                tokens: number;
                USD: number;
            };
        };
        editText: {
            in: {
                tokens: number;
                USD: number;
            };
            out: {
                tokens: number;
                USD: number;
            };
        };
        editCode: {
            in: {
                tokens: number;
                USD: number;
            };
            out: {
                tokens: number;
                USD: number;
            };
        };
    };
    readonly total: {
        total_tokens: number;
        total_USD: number;
    };
    /**
     * Submit usage data from an openai api response.
     */
    submit(endpoint: 'completion' | 'chat' | 'chat16k' | 'editText' | 'editCode', data: CreateCompletionResponse | CreateChatCompletionResponse | CreateEditResponse): void;
}
//# sourceMappingURL=OpenaiTokenUsage.d.ts.map