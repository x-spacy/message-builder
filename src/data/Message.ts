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
import { Template } from '@x-spacy/message-builder/data/Template';
import { Text } from '@x-spacy/message-builder/data/Text';

import { InvalidMessageType } from '@x-spacy/message-builder/exceptions/InvalidMessageType';

export class Message {
  #to: string;
  #type?: MessageType = MessageType.TEXT;

  #recipientType?: RecipientType;

  #text?: Text;
  #interactive?: Interactive;
  #image?: Media;
  #audio?: Media;
  #document?: Media;
  #sticker?: Media;

  #location?: Location;

  #template?: Template;

  #contacts?: Contact;
  #context?: Context;

  #bizOpaqueCallbackData?: string;
  #messagingProduct: MessagingProduct;
  #status?: string;
  #previewUrl?: boolean;

  public set to(to: string) {
    this.#to = to;
  }

  public get to(): string {
    return this.#to;
  }

  public set type(type: MessageType) {
    this.#type = type;
  }

  public get type(): MessageType | undefined {
    return this.#type;
  }

  public set recipientType(recipientType: RecipientType) {
    this.#recipientType = recipientType;
  }

  public get recipientType(): RecipientType | undefined {
    return this.#recipientType;
  }

  public set text(text: Text) {
    if (this.#type !== MessageType.TEXT) {
      throw new InvalidMessageType();
    }

    this.#text = text;
  }

  public get text(): Text {
    return this.text;
  }

  public set interactive(interactive: Interactive) {
    if (this.#type !== MessageType.INTERACTIVE) {
      throw new InvalidMessageType();
    }

    this.#interactive = interactive;
  }

  public get interactive(): Interactive | undefined {
    return this.#interactive;
  }

  public set image(image: Media) {
    if (this.#type !== MessageType.IMAGE) {
      throw new InvalidMessageType();
    }

    this.#image = image;
  }

  public get image(): Media | undefined {
    return this.#image;
  }

  public set audio(audio: Media) {
    if (this.#type !== MessageType.AUDIO) {
      throw new InvalidMessageType();
    }

    this.#audio = audio;
  }

  public get audio(): Media | undefined {
    return this.#audio;
  }

  public set document(document: Media) {
    if (this.#type !== MessageType.DOCUMENT) {
      throw new InvalidMessageType();
    }

    this.#document = document;
  }

  public get document(): Media | undefined {
    return this.#document;
  }

  public set sticker(sticker: Media) {
    if (this.#type !== MessageType.STICKER) {
      throw new InvalidMessageType();
    }

    this.#sticker = sticker;
  }

  public get sticker(): Media | undefined {
    return this.#sticker;
  }

  public set location(location: Location) {
    if (this.#type !== MessageType.LOCATION) {
      throw new InvalidMessageType();
    }

    this.#location = location;
  }

  public get location(): Location | undefined {
    return this.#location;
  }

  public set template(template: Template) {
    if (this.#type !== MessageType.TEMPLATE) {
      throw new InvalidMessageType();
    }

    this.#template = template;
  }

  public get template(): Template | undefined {
    return this.#template;
  }

  public set contacts(contacts: Contact) {
    if (this.#type !== MessageType.CONTACTS) {
      throw new InvalidMessageType();
    }

    this.#contacts = contacts;
  }

  public get contacts(): Contact | undefined {
    return this.#contacts;
  }

  public set context(context: Context) {
    this.#context = context;
  }

  public get context(): Context | undefined {
    return this.#context;
  }

  public set bizOpaqueCallbackData(bizOpaqueCallbackData: string) {
    this.#bizOpaqueCallbackData = bizOpaqueCallbackData;
  }

  public get bizOpaqueCallbackData(): string | undefined {
    return this.#bizOpaqueCallbackData;
  }

  public set messagingProduct(messagingProduct: MessagingProduct) {
    this.#messagingProduct = messagingProduct;
  }

  public get messagingProduct(): MessagingProduct {
    return this.#messagingProduct;
  }

  public set status(status: string) {
    this.#status = status;
  }

  public get status(): string | undefined {
    return this.#status;
  }

  public set previewUrl(previewUrl: boolean) {
    this.#previewUrl = previewUrl;
  }

  public get previewUrl(): boolean | undefined {
    return this.#previewUrl;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['to'] = this.#to;

    if (this.#type) {
      record['type'] = this.#type;
    }

    if (this.#recipientType) {
      record['recipient_type'] = this.#recipientType;
    }

    if (this.#text) {
      record['text'] = this.#text;
    }

    if (this.#interactive) {
      record['interactive'] = this.#interactive;
    }

    if (this.#image) {
      record['image'] = this.#image;
    }

    if (this.#audio) {
      record['audio'] = this.#audio;
    }

    if (this.#document) {
      record['document'] = this.#document;
    }

    if (this.#location) {
      record['location'] = this.#location;
    }

    if (this.#template) {
      record['template'] = this.#template;
    }

    if (this.#contacts) {
      record['contacts'] = this.#contacts;
    }

    if (this.#context) {
      record['context'] = this.#context;
    }

    if (this.#bizOpaqueCallbackData) {
      record['biz_opaque_callback_data'] = this.#bizOpaqueCallbackData;
    }

    if (this.#messagingProduct) {
      record['messaging_product'] = this.#messagingProduct;
    }

    if (this.#status) {
      record['status'] = this.#status;
    }

    if (this.#previewUrl) {
      record['preview_url'] = this.#previewUrl;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
