/// <reference path="data.d.ts" />
/// <reference path="text.d.ts" />
/// <reference path="interactive.d.ts" />
/// <reference path="enums.d.ts" />
/// <reference path="build.d.ts" />

declare module '@vyrnnstudios/messages' {
  import {
    Message,
    Text,
    Interactive,
    Media,
    Context,
    Contact,
    Template
  } from '@vyrnnstudios/messages/data';

  import {
    TextBuilder,
    InteractiveBuilder,
    MediaBuilder,
    LocationBuilder,
    TemplateBuilder,
    ContactBuilder,
    ContextBuilder
  } from '@vyrnnstudios/messages/build';

  import {
    MessageType,
    MessagingProduct,
    RecipientType
  } from '@vyrnnstudios/messages/enums';

  export class MessageBuilder {
    public static newBuilder(): MessageBuilder

    public static builder(): MessageBuilder

    public to(to: string): MessageBuilder

    public type(type: MessageType): MessageBuilder

    public recipientType(recipientType: RecipientType): MessageBuilder

    public text(text: Text | ((builder: TextBuilder) => void)): MessageBuilder

    public interactive(interactive: Interactive | ((builder: InteractiveBuilder) => void)): MessageBuilder

    public image(image: Media | ((builder: MediaBuilder) => void)): MessageBuilder

    public audio(audio: Media | ((builder: MediaBuilder) => void)): MessageBuilder

    public document(document: Media | ((builder: MediaBuilder) => void)): MessageBuilder

    public sticker(sticker: Media | ((builder: MediaBuilder) => void)): MessageBuilder

    public location(location: Location | ((builder: LocationBuilder) => void)): MessageBuilder

    public template(template: Template | ((builder: TemplateBuilder) => void)): MessageBuilder

    public contacts(contact: Contact | ((builder: ContactBuilder) => void)): MessageBuilder

    public context(context: Context | ((builder: ContextBuilder) => void)): MessageBuilder

    public bizOpaqueCallbackData(bizOpaqueCallbackData: string): MessageBuilder

    public messagingProduct(messagingProduct: MessagingProduct): MessageBuilder

    public status(status: string): MessageBuilder

    public previewUrl(previewUrl: boolean): MessageBuilder

    public build(): Message
  }

  export * from '@vyrnnstudios/messages/data';

  export * from '@vyrnnstudios/messages/build';

  export * from '@vyrnnstudios/messages/enums';
}
