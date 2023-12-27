import {
  List,
  ListSection,
  ListSectionRow
} from '@vyrnnstudios/messages/data/Interactive';

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
    this.sections = section;
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
    if (this.sections.length === 0 || this.sections.indexOf(this.section) === -1) {
      this.sections.push(this.section);
    }

    return this.sections;
  }
}

export class ListSectionRowsBuilder {
  private row: ListSectionRow;

  private rows: Array<ListSectionRow>;

  constructor() {
    this.row = new ListSectionRow();

    this.rows = [];
  }

  public static newBuilder(): ListSectionRowsBuilder {
    return new ListSectionRowsBuilder();
  }

  public static builder(): ListSectionRowsBuilder {
    return ListSectionRowsBuilder.newBuilder();
  }

  public append(rows: Array<ListSectionRow>): ListSectionRowsBuilder {
    this.rows = rows;
    return this;
  }

  public next(): ListSectionRowsBuilder {
    this.rows.push(this.row);

    this.row = new ListSectionRow();

    return this;
  }

  public id(id: string): ListSectionRowsBuilder {
    this.row.id = id;
    return this;
  }

  public title(title: string): ListSectionRowsBuilder {
    this.row.title = title;
    return this;
  }

  public description(description: string): ListSectionRowsBuilder {
    this.row.description = description;
    return this;
  }

  public build(): Array<ListSectionRow> {
    if (this.rows.length === 0 || this.rows.indexOf(this.row) === -1) {
      this.rows.push(this.row);
    }

    return this.rows;
  }
}
