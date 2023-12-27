export class Currency {
  private _code: string;
  private _amount1000: number;

  public set code(code: string) {
    this._code = code;
  }

  public get code(): string {
    return this._code;
  }

  public set amount1000(amount1000: number) {
    this._amount1000 = amount1000;
  }

  public get amount1000(): number {
    return this._amount1000;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['code'] = this._code;
    record['amount_1000'] = this._amount1000;

    return record;
  }
}
