export class Currency {
  #code: string;
  #amount1000: number;

  public set code(code: string) {
    this.#code = code;
  }

  public get code(): string {
    return this.#code;
  }

  public set amount1000(amount1000: number) {
    this.#amount1000 = amount1000;
  }

  public get amount1000(): number {
    return this.#amount1000;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['code'] = this.#code;
    record['amount_1000'] = this.#amount1000;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
