import { Message } from '@vyrnnstudios/messages/data/Message';

import { Text } from '@vyrnnstudios/messages/data/Text';
import { Interactive } from '@vyrnnstudios/messages/data/Interactive';
import { Media } from '@vyrnnstudios/messages/data/Media';
import { Location } from '@vyrnnstudios/messages/data/Location';
import { Template } from '@vyrnnstudios/messages/data/Template';
import { Contact } from '@vyrnnstudios/messages/data/Contact';
import { Context } from '@vyrnnstudios/messages/data/Context';

import { TextBuilder } from '@vyrnnstudios/messages/builders/TextBuilder';
import { InteractiveBuilder } from '@vyrnnstudios/messages/builders/InteractiveBuilder';
import { MediaBuilder } from '@vyrnnstudios/messages/builders/MediaBuilder';
import { LocationBuilder } from '@vyrnnstudios/messages/builders/LocationBuilder';
import { TemplateBuilder } from '@vyrnnstudios/messages/builders/TemplateBuilder';
import { ContactBuilder } from '@vyrnnstudios/messages/builders/ContactBuilder';
import { ContextBuilder } from '@vyrnnstudios/messages/builders/ContextBuilder';

import {
  MessageType,
  MessagingProduct,
  RecipientType
} from '@vyrnnstudios/messages/enums';

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

  public recipientType(recipientType: RecipientType): MessageBuilder {
    this.message.recipientType = recipientType;
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

  public image(image: Media | ((builder: MediaBuilder) => void)): MessageBuilder {
    const mediaBuilder = MediaBuilder.newBuilder();

    if (image instanceof Media) {
      mediaBuilder.append(image);
    }

    if (image instanceof Function) {
      image(mediaBuilder);
    }

    this.message.image = mediaBuilder.build();

    return this;
  }

  public audio(audio: Media | ((builder: MediaBuilder) => void)): MessageBuilder {
    const mediaBuilder = MediaBuilder.newBuilder();

    if (audio instanceof Media) {
      mediaBuilder.append(audio);
    }

    if (audio instanceof Function) {
      audio(mediaBuilder);
    }

    this.message.audio = mediaBuilder.build();

    return this;
  }

  public document(document: Media | ((builder: MediaBuilder) => void)): MessageBuilder {
    const mediaBuilder = MediaBuilder.newBuilder();

    if (document instanceof Media) {
      mediaBuilder.append(document);
    }

    if (document instanceof Function) {
      document(mediaBuilder);
    }

    this.message.document = mediaBuilder.build();

    return this;
  }

  public sticker(sticker: Media | ((builder: MediaBuilder) => void)): MessageBuilder {
    const mediaBuilder = MediaBuilder.newBuilder();

    if (sticker instanceof Media) {
      mediaBuilder.append(sticker);
    }

    if (sticker instanceof Function) {
      sticker(mediaBuilder);
    }

    this.message.sticker = mediaBuilder.build();

    return this;
  }

  public location(location: Location | ((builder: LocationBuilder) => void)): MessageBuilder {
    const locationBuilder = LocationBuilder.newBuilder();

    if (location instanceof Location) {
      locationBuilder.append(location);
    }

    if (location instanceof Function) {
      location(locationBuilder);
    }

    this.message.location = locationBuilder.build();

    return this;
  }

  public template(template: Template | ((builder: TemplateBuilder) => void)): MessageBuilder {
    const templateBuilder = TemplateBuilder.newBuilder();

    if (template instanceof Template) {
      templateBuilder.append(template);
    }

    if (template instanceof Function) {
      template(templateBuilder);
    }

    this.message.template = templateBuilder.build();

    return this;
  }

  public contacts(contacts: Contact | ((builder: ContactBuilder) => void)): MessageBuilder {
    const contactBuilder = ContactBuilder.newBuilder();

    if (contacts instanceof Contact) {
      contactBuilder.append(contacts);
    }

    if (contacts instanceof Function) {
      contacts(contactBuilder);
    }

    this.message.contacts = contactBuilder.build();

    return this;
  }

  public context(context: Context | ((builder: ContextBuilder) => void)): MessageBuilder {
    const contextBuilder = ContextBuilder.newBuilder();

    if (context instanceof Context) {
      contextBuilder.append(context);
    }

    if (context instanceof Function) {
      context(contextBuilder);
    }

    this.message.context = contextBuilder.build();

    return this;
  }

  public bizOpaqueCallbackData(bizOpaqueCallbackData: string): MessageBuilder {
    this.message.bizOpaqueCallbackData = bizOpaqueCallbackData;
    return this;
  }

  public messagingProduct(messagingProduct: MessagingProduct): MessageBuilder {
    this.message.messagingProduct = messagingProduct;
    return this;
  }

  public status(status: string): MessageBuilder {
    this.message.status = status;
    return this;
  }

  public previewUrl(previewUrl: boolean): MessageBuilder {
    this.message.previewUrl = previewUrl;
    return this;
  }

  public build(): Message {
    return this.message;
  }
}
