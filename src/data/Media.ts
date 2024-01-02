export class Media {
  #id?: string;
  #link?: string;
  #caption?: string;
  #fileName?: string;
  #provider?: string;

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

  public set caption(caption: string) {
    this.#caption = caption;
  }

  public get caption(): string | undefined {
    return this.#caption;
  }

  public set fileName(fileName: string) {
    this.#fileName = fileName;
  }

  public get fileName(): string | undefined {
    return this.#fileName;
  }

  public set provider(provider: string) {
    this.#provider = provider;
  }

  public get provider(): string | undefined {
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

    if (this.#caption) {
      record['caption'] = this.#caption;
    }

    if (this.#fileName) {
      record['filename'] = this.#fileName;
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
