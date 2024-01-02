import { Media } from '@vyrnnstudios/messages/data/Media';
import { Currency } from '@vyrnnstudios/messages/data/Currency';
import { DateTime } from '@vyrnnstudios/messages/data/DateTime';

import { TemplateComponentParameterType, TemplateIndex } from '@vyrnnstudios/messages/enums';

export class Template {
  #name: string;
  #language: string;
  #components: Array<TemplateComponent>;
  #namespace?: string;

  public set name(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public set language(language: string) {
    this.#language = language;
  }

  public get language(): string {
    return this.#language;
  }

  public set components(components: Array<TemplateComponent>) {
    this.#components = components;
  }

  public get components(): Array<TemplateComponent> {
    return this.#components;
  }

  public set namespace(namespace: string) {
    this.#namespace = namespace;
  }

  public get namespace(): string | undefined {
    return this.#namespace;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['name'] = this.#name;
    record['language'] = this.#language;
    record['components'] = this.#components;

    if (this.#namespace) {
      record['namespace'] = this.#namespace;
    }

    return record;
  }
}

export class TemplateComponent {
  #type: string;
  #subType?: string;
  #parameters: Array<TemplateComponentParameter>;
  #index: TemplateIndex;

  public set type(type: string) {
    this.#type = type;
  }

  public get type(): string {
    return this.#type;
  }

  public set subType(subType: string) {
    this.#subType = subType;
  }

  public get subType(): string | undefined {
    return this.#subType;
  }

  public set parameters(parameters: Array<TemplateComponentParameter>) {
    this.#parameters = parameters;
  }

  public get parameters(): Array<TemplateComponentParameter> {
    return this.#parameters;
  }

  public set index(index: TemplateIndex) {
    this.#index = index;
  }

  public get index(): TemplateIndex {
    return this.#index;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['type'] = this.#type;

    if (this.#subType) {
      record['sub_type'] = this.#subType;
    }

    record['parameters'] = this.#parameters;
    record['index'] = this.#index;

    return record;
  }
}

export class TemplateComponentParameter {
  #type: TemplateComponentParameterType;

  #text?: string;
  #currency?: Currency;
  #dateTime?: DateTime;
  #image?: Media;
  #video?: Media;
  #document?: Media;

  public set type(type: TemplateComponentParameterType) {
    this.#type = type;
  }

  public get type(): TemplateComponentParameterType {
    return this.#type;
  }

  public set text(text: string) {
    this.#text = text;
  }

  public get text(): string | undefined {
    return this.#text;
  }

  public set currency(currency: Currency) {
    this.#currency = currency;
  }

  public get currency(): Currency | undefined {
    return this.#currency;
  }

  public set dateTime(dateTime: DateTime) {
    this.#dateTime = dateTime;
  }

  public get dateTime(): DateTime | undefined {
    return this.#dateTime;
  }

  public set image(image: Media) {
    this.#image = image;
  }

  public get image(): Media | undefined {
    return this.#image;
  }

  public set video(video: Media) {
    this.#video = video;
  }

  public get video(): Media | undefined {
    return this.#video;
  }

  public set document(document: Media) {
    this.#document = document;
  }

  public get document(): Media | undefined {
    return this.#document;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['type'] = this.#type;

    if (this.#text) {
      record['text'] = this.#text;
    }

    if (this.#currency) {
      record['currency'] = this.#currency;
    }

    if (this.#dateTime) {
      record['date_time'] = this.#dateTime;
    }

    if (this.#image) {
      record['image'] = this.#image;
    }

    if (this.#video) {
      record['video'] = this.#video;
    }

    if (this.#document) {
      record['document'] = this.#document;
    }

    return record;
  }
}
