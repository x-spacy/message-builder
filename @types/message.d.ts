/// <reference path="data.d.ts" />
/// <reference path="text.d.ts" />
/// <reference path="interactive.d.ts" />
/// <reference path="enums.d.ts" />
/// <reference path="build.d.ts" />

declare module '@vyrnnstudios/messages' {
  import {
    Message,
    Text,
    Interactive
  } from '@vyrnnstudios/messages/data';

  import { TextBuilder } from '@vyrnnstudios/messages/build/TextBuilder';
  import { InteractiveBuilder } from '@vyrnnstudios/messages/build/InteractiveBuilder';

  import { MessageType } from '@vyrnnstudios/messages/enums';

  export class MessageBuilder {
    public static newBuilder(): MessageBuilder

    public static builder(): MessageBuilder

    public to(to: string): MessageBuilder

    public type(type: MessageType): MessageBuilder

    public text(text: Text | ((builder: TextBuilder) => void)): MessageBuilder

    public interactive(interactive: Interactive | ((builder: InteractiveBuilder) => void)): MessageBuilder

    public build(): Message
  }

  export * from '@vyrnnstudios/messages/data';

  export * from '@vyrnnstudios/messages/build';

  export * from '@vyrnnstudios/messages/enums';
}
