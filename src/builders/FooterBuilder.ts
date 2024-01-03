import { Footer } from '@vyrnnstudios/messages/data/Footer';

export class FooterBuilder {
  private footer: Footer;

  constructor() {
    this.footer = new Footer();
  }

  public static newBuilder(): FooterBuilder {
    return new FooterBuilder();
  }

  public static builder(): FooterBuilder {
    return FooterBuilder.newBuilder();
  }

  public append(footer: Footer): FooterBuilder {
    this.footer = footer;
    return this;
  }

  public text(text: string): FooterBuilder {
    this.footer.text = text;
    return this;
  }

  public build(): Footer {
    return this.footer;
  }
}
