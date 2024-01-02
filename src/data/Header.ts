import { HeaderType } from '@vyrnnstudios/messages/enums';

export class Header {
  #type: HeaderType;
  #text?: string;
  #image?: HeaderImage;
  #video?: HeaderVideo;
  #document?: HeaderDocument;

  public set type(type: HeaderType) {
    this.#type = type;
  }

  public get type(): HeaderType {
    return this.#type;
  }

  public set text(text: string) {
    this.#text = text;
  }

  public get text(): string | undefined {
    return this.#text;
  }

  public set image(image: HeaderImage) {
    this.#image = image;
  }

  public get image(): HeaderImage | undefined {
    return this.#image;
  }

  public set video(video: HeaderVideo) {
    this.#video = video;
  }

  public get video(): HeaderVideo | undefined {
    return this.#video;
  }

  public set document(document: HeaderDocument) {
    this.#document = document;
  }

  public get document(): HeaderDocument | undefined {
    return this.#document;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['type'] = this.#type;

    if (this.#text) {
      record['text'] = this.#text;
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

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class HeaderProvider {
  #name: string;

  public set name(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['name'] = this.#name;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class HeaderImage {
  #id?: string;

  #link?: string;

  #provider?: HeaderProvider;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string | undefined {
    return this.#id;
  }

  public set link(link: string) {
    this.#link = link;
  }

  public get link(): string | undefined {
    return this.#link;
  }

  public set provider(provider: HeaderProvider) {
    this.#provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this.#provider;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#id) {
      record['id'] = this.#id;
    }

    if (this.#link) {
      record['link'] = this.#link;
    }

    if (this.#provider) {
      record['provider'] = this.#provider;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class HeaderVideo {
  #id?: string;

  #link?: string;

  #provider?: HeaderProvider;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string | undefined {
    return this.#id;
  }

  public set link(link: string) {
    this.#link = link;
  }

  public get link(): string | undefined {
    return this.#link;
  }

  public set provider(provider: HeaderProvider) {
    this.#provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this.#provider;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#id) {
      record['id'] = this.#id;
    }

    if (this.#link) {
      record['link'] = this.#link;
    }

    if (this.#provider) {
      record['provider'] = this.#provider;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class HeaderDocument {
  #id?: string;

  #link?: string;
  #provider?: HeaderProvider;

  #fileName?: string;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string | undefined {
    return this.#id;
  }

  public set link(link: string) {
    this.#link = link;
  }

  public get link(): string | undefined {
    return this.#link;
  }

  public set provider(provider: HeaderProvider) {
    this.#provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this.#provider;
  }

  public set fileName(fileName: string) {
    this.#fileName = fileName;
  }

  public get fileName(): string | undefined {
    return this.#fileName;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#id) {
      record['id'] = this.#id;
    }

    if (this.#link) {
      record['link'] = this.#link;
    }

    if (this.#provider) {
      record['provider'] = this.#provider;
    }

    if (this.#fileName) {
      record['filename'] = this.#fileName;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
