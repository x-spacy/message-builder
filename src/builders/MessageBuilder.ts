
import { ContactBuilder } from '@x-spacy/message-builder/builders/ContactBuilder';
import { ContextBuilder } from '@x-spacy/message-builder/builders/ContextBuilder';
import { InteractiveBuilder } from '@x-spacy/message-builder/builders/InteractiveBuilder';
import { LocationBuilder } from '@x-spacy/message-builder/builders/LocationBuilder';
import { MediaBuilder } from '@x-spacy/message-builder/builders/MediaBuilder';
import { TemplateBuilder } from '@x-spacy/message-builder/builders/TemplateBuilder';
import { TextBuilder } from '@x-spacy/message-builder/builders/TextBuilder';
import {
  MessageType,
  MessagingProduct,
  RecipientType
} from '@x-spacy/message-builder/enums';

import { Contact } from '@x-spacy/message-builder/data/Contact';
import { Context } from '@x-spacy/message-builder/data/Context';
import { Interactive } from '@x-spacy/message-builder/data/Interactive';
import { Location } from '@x-spacy/message-builder/data/Location';
import { Media } from '@x-spacy/message-builder/data/Media';
import { Message } from '@x-spacy/message-builder/data/Message';
import { Template } from '@x-spacy/message-builder/data/Template';
import { Text } from '@x-spacy/message-builder/data/Text';

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
