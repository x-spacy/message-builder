export class Media {
  private _id?: string;
  private _link?: string;
  private _caption?: string;
  private _fileName?: string;
  private _provider?: string;

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

  public set caption(caption: string) {
    this._caption = caption;
  }

  public get caption(): string | undefined {
    return this._caption;
  }

  public set fileName(fileName: string) {
    this._fileName = fileName;
  }

  public get fileName(): string | undefined {
    return this._fileName;
  }

  public set provider(provider: string) {
    this._provider = provider;
  }

  public get provider(): string | undefined {
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

    if (this._caption) {
      record['caption'] = this._caption;
    }

    if (this._fileName) {
      record['filename'] = this._fileName;
    }

    if (this._provider) {
      record['provider'] = this._provider;
    }

    return record;
  }
}
