declare module '@x-spacy/message-builder' {
  import { Context } from '@x-spacy/message-builder';

  export class ContextBuilder {
    public static newBuilder(): ContextBuilder

    public static builder(): ContextBuilder

    public messageId(messageId: string): ContextBuilder

    public build(): Context
  }
}
