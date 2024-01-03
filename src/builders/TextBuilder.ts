import { Text } from '@vyrnnstudios/messages/data/Text';

export class TextBuilder {
  private text: Text;

  constructor() {
    this.text = new Text();
  }

  public static newBuilder(): TextBuilder {
    return new TextBuilder();
  }

  public static builder(): TextBuilder {
    return TextBuilder.newBuilder();
  }

  public append(text: Text): TextBuilder {
    this.text = text;
    return this;
  }

  public body(body: string): TextBuilder {
    this.text.body = body;
    return this;
  }

  public build(): Text {
    return this.text;
  }
}
