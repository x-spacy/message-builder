declare module '@x-spacy/message-builder' {
  export class TextBuilder {
    public static newBuilder(): TextBuilder

    public static builder(): TextBuilder

    public body(body: string): TextBuilder

    public build(): Text
  }
}
