import { Contact } from '@vyrnnstudios/messages/data/Contact';

import { Context } from '@vyrnnstudios/messages/data/Context';

import { Text } from '@vyrnnstudios/messages/data/Text';
import { Interactive } from '@vyrnnstudios/messages/data/Interactive';
import { Media } from '@vyrnnstudios/messages/data/Media';
import { Location } from '@vyrnnstudios/messages/data/Location';
import { Template } from '@vyrnnstudios/messages/data/Template';

import {
  MessageType,
  MessagingProduct,
  RecipientType
} from '@vyrnnstudios/messages/enums';

import { InvalidMessageType } from '@vyrnnstudios/messages/exceptions/InvalidMessageType';

export class Message {
  private _to: string;
  private _type?: MessageType = MessageType.TEXT;

  private _recipientType?: RecipientType;

  private _text?: Text;
  private _interactive?: Interactive;
  private _image?: Media;
  private _audio?: Media;
  private _document?: Media;
  private _sticker?: Media;

  private _location?: Location;

  private _template?: Template;

  private _contacts?: Contact;
  private _context?: Context;

  private _bizOpaqueCallbackData?: string;
  private _messagingProduct: MessagingProduct;
  private _status?: string;
  private _previewUrl?: boolean;

  public set to(to: string) {
    this._to = to;
  }

  public get to(): string {
    return this._to;
  }

  public set type(type: MessageType) {
    this._type = type;
  }

  public get type(): MessageType | undefined {
    return this._type;
  }

  public set recipientType(recipientType: RecipientType) {
    this._recipientType = recipientType;
  }

  public get recipientType(): RecipientType | undefined {
    return this._recipientType;
  }

  public set text(text: Text) {
    if (this._type !== MessageType.TEXT) {
      throw new InvalidMessageType();
    }

    this._text = text;
  }

  public get text(): Text {
    return this.text;
  }

  public set interactive(interactive: Interactive) {
    if (this._type !== MessageType.INTERACTIVE) {
      throw new InvalidMessageType();
    }

    this._interactive = interactive;
  }

  public get interactive(): Interactive | undefined {
    return this._interactive;
  }

  public set image(image: Media) {
    if (this._type !== MessageType.IMAGE) {
      throw new InvalidMessageType();
    }

    this._image = image;
  }

  public get image(): Media | undefined {
    return this._image;
  }

  public set audio(audio: Media) {
    if (this._type !== MessageType.AUDIO) {
      throw new InvalidMessageType();
    }

    this._audio = audio;
  }

  public get audio(): Media | undefined {
    return this._audio;
  }

  public set document(document: Media) {
    if (this._type !== MessageType.DOCUMENT) {
      throw new InvalidMessageType();
    }

    this._document = document;
  }

  public get document(): Media | undefined {
    return this._document;
  }

  public set sticker(sticker: Media) {
    if (this._type !== MessageType.STICKER) {
      throw new InvalidMessageType();
    }

    this._sticker = sticker;
  }

  public get sticker(): Media | undefined {
    return this._sticker;
  }

  public set location(location: Location) {
    if (this._type !== MessageType.LOCATION) {
      throw new InvalidMessageType();
    }

    this._location = location;
  }

  public get location(): Location | undefined {
    return this._location;
  }

  public set template(template: Template) {
    if (this._type !== MessageType.TEMPLATE) {
      throw new InvalidMessageType();
    }

    this._template = template;
  }

  public get template(): Template | undefined {
    return this._template;
  }

  public set contacts(contacts: Contact) {
    if (this._type !== MessageType.CONTACTS) {
      throw new InvalidMessageType();
    }

    this._contacts = contacts;
  }

  public get contacts(): Contact | undefined {
    return this._contacts;
  }

  public set context(context: Context) {
    this._context = context;
  }

  public get context(): Context | undefined {
    return this._context;
  }

  public set bizOpaqueCallbackData(bizOpaqueCallbackData: string) {
    this._bizOpaqueCallbackData = bizOpaqueCallbackData;
  }

  public get bizOpaqueCallbackData(): string | undefined {
    return this._bizOpaqueCallbackData;
  }

  public set messagingProduct(messagingProduct: MessagingProduct) {
    this._messagingProduct = messagingProduct;
  }

  public get messagingProduct(): MessagingProduct {
    return this._messagingProduct;
  }

  public set status(status: string) {
    this._status = status;
  }

  public get status(): string | undefined {
    return this._status;
  }

  public set previewUrl(previewUrl: boolean) {
    this._previewUrl = previewUrl;
  }

  public get previewUrl(): boolean | undefined {
    return this._previewUrl;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['to'] = this._to;

    if (this._type) {
      record['type'] = this._type;
    }

    if (this._recipientType) {
      record['recipient_type'] = this._recipientType;
    }

    if (this._text) {
      record['text'] = this._text;
    }

    if (this._interactive) {
      record['interactive'] = this._interactive;
    }

    if (this._image) {
      record['image'] = this._image;
    }

    if (this._audio) {
      record['audio'] = this._audio;
    }

    if (this._document) {
      record['document'] = this._document;
    }

    if (this._location) {
      record['location'] = this._location;
    }

    if (this._template) {
      record['template'] = this._template;
    }

    if (this._contacts) {
      record['contacts'] = this._contacts;
    }

    if (this._context) {
      record['context'] = this._context;
    }

    if (this._bizOpaqueCallbackData) {
      record['biz_opaque_callback_data'] = this._bizOpaqueCallbackData;
    }

    if (this._messagingProduct) {
      record['messaging_product'] = this._messagingProduct;
    }

    if (this._status) {
      record['status'] = this._status;
    }

    if (this._previewUrl) {
      record['preview_url'] = this._previewUrl;
    }

    return record;
  }
}
