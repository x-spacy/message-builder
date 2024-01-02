declare module '@vyrnnstudios/messages' {
  import { Media } from '@vyrnnstudios/messages';

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
