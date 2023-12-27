declare module '@vyrnnstudios/messages/build/BodyBuilder' {
  import { Body } from '@vyrnnstudios/messages/data';

  export class BodyBuilder {
    public static newBuilder(): BodyBuilder

    public static builder(): BodyBuilder

    public append(body: Body): BodyBuilder

    public text(text: string): BodyBuilder

    public build(): Body
  }
}
