declare module '@x-spacy/message-builder' {
  import { Body } from '@x-spacy/message-builder';

  export class BodyBuilder {
    public static newBuilder(): BodyBuilder

    public static builder(): BodyBuilder

    public text(text: string): BodyBuilder

    public build(): Body
  }
}
