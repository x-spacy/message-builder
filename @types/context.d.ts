/// <reference path="data.d.ts" />

declare module '@vyrnnstudios/messages/build/ContextBuilder' {
  import { Context } from '@vyrnnstudios/messages/data';

  export class ContextBuilder {
    public static newBuilder(): ContextBuilder

    public static builder(): ContextBuilder

    public messageId(messageId: string): ContextBuilder

    public build(): Context
  }
}
