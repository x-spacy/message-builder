export class Text {
  private _body: string;

  public set body(body: string) {
    this._body = body;
  }

  public get body(): string {
    return this._body;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['body'] = this._body;

    return record;
  }
}
