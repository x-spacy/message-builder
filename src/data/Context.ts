export class Context {
  #messageId: string;

  public set messageId(messageId: string) {
    this.#messageId = messageId;
  }

  public get messageId(): string {
    return this.#messageId;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['message_d'] = this.#messageId;

    return record;
  }
}
