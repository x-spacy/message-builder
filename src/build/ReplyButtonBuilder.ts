import { ReplyButton, ReplyButtonRow, ReplyButtonRowReply } from '@vyrnnstudios/messages/data/Interactive';

export class ReplyButtonBuilder {
  private replyButton: ReplyButton;

  constructor() {
    this.replyButton = new ReplyButton();
  }

  public static newBuilder(): ReplyButtonBuilder {
    return new ReplyButtonBuilder();
  }

  public static builder(): ReplyButtonBuilder {
    return ReplyButtonBuilder.newBuilder();
  }

  public append(replyButton: ReplyButton): ReplyButtonBuilder {
    this.replyButton = replyButton;
    return this;
  }

  public buttons(buttons: ReplyButtonRow[] | ((builder: ReplyButtonRowsBuilder) => void)): ReplyButtonBuilder {
    const replyButtonRowsBuilder = ReplyButtonRowsBuilder.newBuilder();

    if (buttons instanceof Array) {
      replyButtonRowsBuilder.append(buttons);
    }

    if (buttons instanceof Function) {
      buttons(replyButtonRowsBuilder);
    }

    this.replyButton.buttons = replyButtonRowsBuilder.build();
    return this;
  }

  public build(): ReplyButton {
    return this.replyButton;
  }
}

export class ReplyButtonRowsBuilder {
  private replyButtonRow: ReplyButtonRow;

  private replyButtonRows: ReplyButtonRow[];

  constructor() {
    this.replyButtonRows = [];

    this.replyButtonRow = new ReplyButtonRow();
  }

  public static newBuilder(): ReplyButtonRowsBuilder {
    return new ReplyButtonRowsBuilder();
  }

  public static builder(): ReplyButtonRowsBuilder {
    return ReplyButtonRowsBuilder.newBuilder();
  }

  public append(replyButtonRow: Array<ReplyButtonRow>): ReplyButtonRowsBuilder {
    this.replyButtonRows = replyButtonRow;
    return this;
  }

  public next(): ReplyButtonRowsBuilder {
    this.replyButtonRows.push(this.replyButtonRow);
    this.replyButtonRow = new ReplyButtonRow();
    return this;
  }

  public type(type: 'reply'): ReplyButtonRowsBuilder {
    this.replyButtonRow.type = type;
    return this;
  }

  public reply(reply: ReplyButtonRowReply | ((builder: ReplyButtonRowReplyBuilder) => void)): ReplyButtonRowsBuilder {
    const replyButtonRowReplyBuilder = ReplyButtonRowReplyBuilder.newBuilder();

    if (reply instanceof ReplyButtonRowReply) {
      replyButtonRowReplyBuilder.append(reply);
    }

    if (reply instanceof Function) {
      reply(replyButtonRowReplyBuilder);
    }

    this.replyButtonRow.reply = replyButtonRowReplyBuilder.build();

    return this;
  }

  public build(): Array<ReplyButtonRow> {
    if (this.replyButtonRows.indexOf(this.replyButtonRow) === -1) {
      this.replyButtonRows.push(this.replyButtonRow);
    }

    return this.replyButtonRows;
  }
}

export class ReplyButtonRowReplyBuilder {
  private replyButtonRowReply: ReplyButtonRowReply;

  constructor() {
    this.replyButtonRowReply = new ReplyButtonRowReply();
  }

  public static newBuilder(): ReplyButtonRowReplyBuilder {
    return new ReplyButtonRowReplyBuilder();
  }

  public static builder(): ReplyButtonRowReplyBuilder {
    return ReplyButtonRowReplyBuilder.newBuilder();
  }

  public append(replyButtonRowReply: ReplyButtonRowReply): ReplyButtonRowReplyBuilder {
    this.replyButtonRowReply = replyButtonRowReply;
    return this;
  }

  public id(id: string): ReplyButtonRowReplyBuilder {
    this.replyButtonRowReply.id = id;
    return this;
  }

  public title(title: string): ReplyButtonRowReplyBuilder {
    this.replyButtonRowReply.title = title;
    return this;
  }

  public build(): ReplyButtonRowReply {
    return this.replyButtonRowReply;
  }
}
