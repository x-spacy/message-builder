import { Message } from '@vyrnnstudios/messages/data/Message';

import { Text } from '@vyrnnstudios/messages/data/Text';
import { Interactive } from '@vyrnnstudios/messages/data/Interactive';

import { TextBuilder } from '@vyrnnstudios/messages/build/TextBuilder';
import { InteractiveBuilder } from '@vyrnnstudios/messages/build/InteractiveBuilder';

import { MessageType } from '@vyrnnstudios/messages/enums';

export class MessageBuilder {
  private readonly message: Message;

  constructor() {
    this.message = new Message();
  }

  public static newBuilder(): MessageBuilder {
    return new MessageBuilder();
  }

  public static builder(): MessageBuilder {
    return MessageBuilder.newBuilder();
  }

  public to(to: string): MessageBuilder {
    this.message.to = to;
    return this;
  }

  public type(type: MessageType): MessageBuilder {
    this.message.type = type;
    return this;
  }

  public text(text: Text | ((builder: TextBuilder) => void)): MessageBuilder {
    const textBuilder = TextBuilder.newBuilder();

    if (text instanceof Text) {
      textBuilder.append(text);
    }

    if (text instanceof Function) {
      text(textBuilder);
    }

    this.message.text = textBuilder.build();

    return this;
  }

  public interactive(interactive: Interactive | ((builder: InteractiveBuilder) => void)): MessageBuilder {
    const interactiveBuilder = InteractiveBuilder.newBuilder();

    if (interactive instanceof Interactive) {
      interactiveBuilder.append(interactive);
    }

    if (interactive instanceof Function) {
      interactive(interactiveBuilder);
    }

    this.message.interactive = interactiveBuilder.build();

    return this;
  }

  public build(): Message {
    return this.message;
  }
}
