declare module '@vyrnnstudios/messages' {
  import { Body } from '@vyrnnstudios/messages';

  export class BodyBuilder {
    public static newBuilder(): BodyBuilder

    public static builder(): BodyBuilder

    public text(text: string): BodyBuilder

    public build(): Body
  }
}
