import { Media } from '@vyrnnstudios/messages/data/Media';
import { Currency } from '@vyrnnstudios/messages/data/Currency';
import { DateTime } from '@vyrnnstudios/messages/data/DateTime';

import { TemplateComponentParameterType, TemplateIndex } from '@vyrnnstudios/messages/enums';

export class Template {
  private _name: string;
  private _language: string;
  private _components: Array<TemplateComponent>;
  private _namespace?: string;

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set language(language: string) {
    this._language = language;
  }

  public get language(): string {
    return this._language;
  }

  public set components(components: Array<TemplateComponent>) {
    this._components = components;
  }

  public get components(): Array<TemplateComponent> {
    return this._components;
  }

  public set namespace(namespace: string) {
    this._namespace = namespace;
  }

  public get namespace(): string | undefined {
    return this._namespace;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['name'] = this._name;
    record['language'] = this._language;
    record['components'] = this._components;

    if (this._namespace) {
      record['namespace'] = this._namespace;
    }

    return record;
  }
}

export class TemplateComponent {
  private _type: string;
  private _subType?: string;
  private _parameters: Array<TemplateComponentParameter>;
  private _index: TemplateIndex;

  public set type(type: string) {
    this._type = type;
  }

  public get type(): string {
    return this._type;
  }

  public set subType(subType: string) {
    this._subType = subType;
  }

  public get subType(): string | undefined {
    return this._subType;
  }

  public set parameters(parameters: Array<TemplateComponentParameter>) {
    this._parameters = parameters;
  }

  public get parameters(): Array<TemplateComponentParameter> {
    return this._parameters;
  }

  public set index(index: TemplateIndex) {
    this._index = index;
  }

  public get index(): TemplateIndex {
    return this._index;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['type'] = this._type;

    if (this._subType) {
      record['sub_type'] = this._subType;
    }

    record['parameters'] = this._parameters;
    record['index'] = this._index;

    return record;
  }
}

export class TemplateComponentParameter {
  private _type: TemplateComponentParameterType;

  private _text?: string;
  private _currency?: Currency;
  private _dateTime?: DateTime;
  private _image?: Media;
  private _video?: Media;
  private _document?: Media;

  public set type(type: TemplateComponentParameterType) {
    this._type = type;
  }

  public get type(): TemplateComponentParameterType {
    return this._type;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get text(): string | undefined {
    return this._text;
  }

  public set currency(currency: Currency) {
    this._currency = currency;
  }

  public get currency(): Currency | undefined {
    return this._currency;
  }

  public set dateTime(dateTime: DateTime) {
    this._dateTime = dateTime;
  }

  public get dateTime(): DateTime | undefined {
    return this._dateTime;
  }

  public set image(image: Media) {
    this._image = image;
  }

  public get image(): Media | undefined {
    return this._image;
  }

  public set video(video: Media) {
    this._video = video;
  }

  public get video(): Media | undefined {
    return this._video;
  }

  public set document(document: Media) {
    this._document = document;
  }

  public get document(): Media | undefined {
    return this._document;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['type'] = this._type;

    if (this._text) {
      record['text'] = this._text;
    }

    if (this._currency) {
      record['currency'] = this._currency;
    }

    if (this._dateTime) {
      record['date_time'] = this._dateTime;
    }

    if (this._image) {
      record['image'] = this._image;
    }

    if (this._video) {
      record['video'] = this._video;
    }

    if (this._document) {
      record['document'] = this._document;
    }

    return record;
  }
}
