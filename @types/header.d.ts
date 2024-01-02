declare module '@vyrnnstudios/messages' {
  import {
    Header,
    HeaderImage,
    HeaderVideo,
    HeaderDocument,
    HeaderType
  } from '@vyrnnstudios/messages';

  export class HeaderBuilder {
    public static newBuilder(): HeaderBuilder

    public static builder(): HeaderBuilder

    public type(type: HeaderType): HeaderBuilder

    public text(text: string): HeaderBuilder

    public image(image: HeaderImage): HeaderBuilder

    public video(video: HeaderVideo): HeaderBuilder

    public document(document: HeaderDocument): HeaderBuilder

    public build(): Header
  }
}
