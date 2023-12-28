/// <reference path="data.d.ts" />

declare module '@vyrnnstudios/messages/build/MediaBuilder' {
  import { Media } from '@vyrnnstudios/messages/data';

  export class MediaBuilder {
    public static newBuilder(): MediaBuilder

    public static builder(): MediaBuilder

    public id(id: string): MediaBuilder

    public link(link: string): MediaBuilder

    public caption(caption: string): MediaBuilder

    public fileName(fileName: string): MediaBuilder

    public provider(provider: string): MediaBuilder

    public build(): Media
  }
}
