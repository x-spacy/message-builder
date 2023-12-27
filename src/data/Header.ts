import { HeaderType } from '@vyrnnstudios/messages/enums';

export class Header {
  private _type: HeaderType;
  private _text?: string;
  private _image?: HeaderImage;
  private _video?: HeaderVideo;
  private _document?: HeaderDocument;

  public set type(type: HeaderType) {
    this._type = type;
  }

  public get type(): HeaderType {
    return this._type;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get text(): string | undefined {
    return this._text;
  }

  public set image(image: HeaderImage) {
    this._image = image;
  }

  public get image(): HeaderImage | undefined {
    return this._image;
  }

  public set video(video: HeaderVideo) {
    this._video = video;
  }

  public get video(): HeaderVideo | undefined {
    return this._video;
  }

  public set document(document: HeaderDocument) {
    this._document = document;
  }

  public get document(): HeaderDocument | undefined {
    return this._document;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['type'] = this._type;

    if (this._text) {
      record['text'] = this._text;
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

export class HeaderProvider {
  private _name: string;

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['name'] = this._name;

    return record;
  }
}

export class HeaderImage {
  private _id?: string;

  private _link?: string;

  private _provider?: HeaderProvider;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set link(link: string) {
    this._link = link;
  }

  public get link(): string | undefined {
    return this._link;
  }

  public set provider(provider: HeaderProvider) {
    this._provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this._provider;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._id) {
      record['id'] = this._id;
    }

    if (this._link) {
      record['link'] = this._link;
    }

    if (this._provider) {
      record['provider'] = this._provider;
    }

    return record;
  }
}

export class HeaderVideo {
  private _id?: string;

  private _link?: string;

  private _provider?: HeaderProvider;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set link(link: string) {
    this._link = link;
  }

  public get link(): string | undefined {
    return this._link;
  }

  public set provider(provider: HeaderProvider) {
    this._provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this._provider;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._id) {
      record['id'] = this._id;
    }

    if (this._link) {
      record['link'] = this._link;
    }

    if (this._provider) {
      record['provider'] = this._provider;
    }

    return record;
  }
}

export class HeaderDocument {
  private _id?: string;

  private _link?: string;
  private _provider?: HeaderProvider;

  private _fileName?: string;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set link(link: string) {
    this._link = link;
  }

  public get link(): string | undefined {
    return this._link;
  }

  public set provider(provider: HeaderProvider) {
    this._provider = provider;
  }

  public get provider(): HeaderProvider | undefined {
    return this._provider;
  }

  public set fileName(fileName: string) {
    this._fileName = fileName;
  }

  public get fileName(): string | undefined {
    return this._fileName;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._id) {
      record['id'] = this._id;
    }

    if (this._link) {
      record['link'] = this._link;
    }

    if (this._provider) {
      record['provider'] = this._provider;
    }

    if (this._fileName) {
      record['filename'] = this._fileName;
    }

    return record;
  }
}
