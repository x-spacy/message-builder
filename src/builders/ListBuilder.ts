import {
  List,
  ListSection,
  ListSectionRow
} from '@x-spacy/message-builder/data/Interactive';

export class ListBuilder {
  private list: List;

  constructor() {
    this.list = new List();
  }

  public static newBuilder(): ListBuilder {
    return new ListBuilder();
  }

  public static builder(): ListBuilder {
    return ListBuilder.newBuilder();
  }

  public append(list: List): ListBuilder {
    this.list = list;
    return this;
  }

  public button(button: string): ListBuilder {
    this.list.button = button;
    return this;
  }

  public sections(sections: Array<ListSection> | ((builder: ListSectionBuilder) => void)): ListBuilder {
    const listSectionBuilder = ListSectionBuilder.newBuilder();

    if (sections instanceof Array) {
      listSectionBuilder.append(sections);
    }

    if (sections instanceof Function) {
      sections(listSectionBuilder);
    }

    this.list.sections = listSectionBuilder.build();

    return this;
  }

  public build(): List {
    return this.list;
  }
}

export class ListSectionBuilder {
  private section: ListSection;

  private sections: Array<ListSection>;

  constructor() {
    this.section = new ListSection();

    this.sections = [];
  }

  public static newBuilder(): ListSectionBuilder {
    return new ListSectionBuilder();
  }

  public static builder(): ListSectionBuilder {
    return ListSectionBuilder.newBuilder();
  }

  public append(section: Array<ListSection>): ListSectionBuilder {
    this.sections.push(...section);
    return this;
  }

  public next(): ListSectionBuilder {
    this.sections.push(this.section);

    this.section = new ListSection();

    return this;
  }

  public title(title: string): ListSectionBuilder {
    this.section.title = title;
    return this;
  }

  public rows(rows: Array<ListSectionRow> | ((builder: ListSectionRowsBuilder) => void)): ListSectionBuilder {
    const listSectionRowsBuilder = ListSectionRowsBuilder.newBuilder();

    if (rows instanceof Array) {
      listSectionRowsBuilder.append(rows);
    }

    if (rows instanceof Function) {
      rows(listSectionRowsBuilder);
    }

    this.section.rows = listSectionRowsBuilder.build();

    return this;
  }

  public build(): Array<ListSection> {
    return this.sections;
  }
}

export class ListSectionRowsBuilder {
  private listSectionRow: ListSectionRow;

  private listSectionRows: Array<ListSectionRow>;

  constructor() {
    this.listSectionRow = new ListSectionRow();

    this.listSectionRows = [];
  }

  public static newBuilder(): ListSectionRowsBuilder {
    return new ListSectionRowsBuilder();
  }

  public static builder(): ListSectionRowsBuilder {
    return ListSectionRowsBuilder.newBuilder();
  }

  public append(rows: Array<ListSectionRow>): ListSectionRowsBuilder {
    this.listSectionRows.push(...rows);
    return this;
  }

  public next(): ListSectionRowsBuilder {
    this.listSectionRows.push(this.listSectionRow);

    this.listSectionRow = new ListSectionRow();

    return this;
  }

  public id(id: string): ListSectionRowsBuilder {
    this.listSectionRow.id = id;
    return this;
  }

  public title(title: string): ListSectionRowsBuilder {
    this.listSectionRow.title = title;
    return this;
  }

  public description(description: string): ListSectionRowsBuilder {
    this.listSectionRow.description = description;
    return this;
  }

  public build(): Array<ListSectionRow> {
    return this.listSectionRows;
  }
}
