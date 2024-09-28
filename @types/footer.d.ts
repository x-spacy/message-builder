declare module '@x-spacy/message-builder' {
  import { Footer } from '@x-spacy/message-builder';

  export class FooterBuilder {
    public static newBuilder(): FooterBuilder

    public static builder(): FooterBuilder

    public text(text: string): FooterBuilder

    public build(): Footer
  }
}
