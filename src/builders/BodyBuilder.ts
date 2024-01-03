import { Body } from '@vyrnnstudios/messages/data/Body';

export class BodyBuilder {
  private body: Body;

  constructor() {
    this.body = new Body();
  }

  public static newBuilder(): BodyBuilder {
    return new BodyBuilder();
  }

  public static builder(): BodyBuilder {
    return BodyBuilder.newBuilder();
  }

  public append(body: Body): BodyBuilder {
    this.body = body;
    return this;
  }

  public text(text: string): BodyBuilder {
    this.body.text = text;
    return this;
  }

  public build(): Body {
    return this.body;
  }
}
