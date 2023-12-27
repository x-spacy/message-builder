export class Context {
  private _messageId: string;

  public set messageId(messageId: string) {
    this._messageId = messageId;
  }

  public get messageId(): string {
    return this._messageId;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['message_d'] = this._messageId;

    return record;
  }
}
