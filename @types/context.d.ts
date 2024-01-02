declare module '@vyrnnstudios/messages' {
  import { Context } from '@vyrnnstudios/messages';

  export class ContextBuilder {
    public static newBuilder(): ContextBuilder

    public static builder(): ContextBuilder

    public messageId(messageId: string): ContextBuilder

    public build(): Context
  }
}
