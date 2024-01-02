declare module '@vyrnnstudios/messages' {
  export class TextBuilder {
    public static newBuilder(): TextBuilder

    public static builder(): TextBuilder

    public body(body: string): TextBuilder

    public build(): Text
  }
}
