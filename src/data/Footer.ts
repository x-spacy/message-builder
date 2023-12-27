export class Footer {
  private _text: string;

  public set text(text: string) {
    this._text = text;
  }

  public get text(): string {
    return this._text;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['text'] = this._text;

    return record;
  }
}
