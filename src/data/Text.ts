export class Text {
  #body: string;

  public set body(body: string) {
    this.#body = body;
  }

  public get body(): string {
    return this.#body;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['body'] = this.#body;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
