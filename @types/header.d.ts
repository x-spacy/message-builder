/// <reference path="enums.d.ts" />
/// <reference path="data.d.ts" />

declare module '@vyrnnstudios/messages/build/HeaderBuilder' {
  import {
    Header,
    HeaderImage,
    HeaderVideo,
    HeaderDocument
  } from '@vyrnnstudios/messages/data';

  import { HeaderType } from '@vyrnnstudios/messages/enums';

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
