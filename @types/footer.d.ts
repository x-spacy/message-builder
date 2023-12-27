/// <reference path="data.d.ts" />

declare module '@vyrnnstudios/messages/build/FooterBuilder' {
  import { Footer } from '@vyrnnstudios/messages/data';

  export class FooterBuilder {
    public static newBuilder(): FooterBuilder

    public static builder(): FooterBuilder

    public append(footer: Footer): FooterBuilder

    public text(text: string): FooterBuilder

    public build(): Footer
  }
}
