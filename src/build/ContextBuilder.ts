import { Context } from '@vyrnnstudios/messages/data/Context';

export class ContextBuilder {
  private context: Context;

  constructor() {
    this.context = new Context();
  }

  public static newBuilder(): ContextBuilder {
    return new ContextBuilder();
  }

  public static builder(): ContextBuilder {
    return ContextBuilder.newBuilder();
  }

  public append(context: Context): ContextBuilder {
    this.context = context;
    return this;
  }

  public messageId(messageId: string): ContextBuilder {
    this.context.messageId = messageId;
    return this;
  }

  public build(): Context {
    return this.context;
  }
}
