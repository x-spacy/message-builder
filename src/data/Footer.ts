export class Footer {
  #text: string;

  public set text(text: string) {
    this.#text = text;
  }

  public get text(): string {
    return this.#text;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['text'] = this.#text;

    return record;
  }
}
