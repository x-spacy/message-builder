declare module '@vyrnnstudios/messages' {
  import { Footer } from '@vyrnnstudios/messages';

  export class FooterBuilder {
    public static newBuilder(): FooterBuilder

    public static builder(): FooterBuilder

    public text(text: string): FooterBuilder

    public build(): Footer
  }
}
