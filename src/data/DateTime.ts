import { CalendarType, DayOfWeek } from '@x-spacy/message-builder/enums';

export class DateTime {
  #component?: DateTimeComponent;
  #unixEpoch?: DateTimeEpoch;

  public set component(component: DateTimeComponent) {
    this.#component = component;
  }

  public get component(): DateTimeComponent | undefined {
    return this.#component;
  }

  public set unixEpoch(unixEpoch: DateTimeEpoch) {
    this.#unixEpoch = unixEpoch;
  }

  public get unixEpoch(): DateTimeEpoch | undefined {
    return this.#unixEpoch;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#component) {
      record['component'] = this.#component;
    }

    if (this.#unixEpoch) {
      record['unix_epoch'] = this.#unixEpoch;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class DateTimeComponent {
  #calendar?: CalendarType;

  #dayOfMonth: number;
  #dayOfWeek?: DayOfWeek;

  #year?: number;
  #month: number;
  #hour: number;
  #minute: number;

  public set calendar(calendar: CalendarType) {
    this.#calendar = calendar;
  }

  public get calendar(): CalendarType | undefined {
    return this.#calendar;
  }

  public set dayOfMonth(dayOfMonth: number) {
    this.#dayOfMonth = dayOfMonth;
  }

  public get dayOfMonth(): number {
    return this.#dayOfMonth;
  }

  public set dayOfWeek(dayOfWeek: DayOfWeek) {
    this.#dayOfWeek = dayOfWeek;
  }

  public get dayOfWeek(): DayOfWeek | undefined {
    return this.#dayOfWeek;
  }

  public set year(year: number) {
    this.#year = year;
  }

  public get year(): number | undefined {
    return this.#year;
  }

  public set month(month: number) {
    this.#month = month;
  }

  public get month(): number {
    return this.#month;
  }

  public set hour(hour: number) {
    this.#hour = hour;
  }

  public get hour(): number {
    return this.#hour;
  }

  public set minute(minute: number) {
    this.#minute = minute;
  }

  public get minute(): number {
    return this.#minute;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#calendar) {
      record['calendar'] = this.#calendar;
    }

    record['day_of_month'] = this.#dayOfMonth;

    if (this.#dayOfWeek) {
      record['day_of_week'] = this.#dayOfWeek;
    }

    if (this.#year) {
      record['year'] = this.#year;
    }

    record['month'] = this.#month;
    record['hour'] = this.#hour;
    record['minute'] = this.#minute;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class DateTimeEpoch {
  #timestamp: number;

  public set timestamp(timestamp: number) {
    this.#timestamp = timestamp;
  }

  public get timestamp(): number {
    return this.#timestamp;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['timestamp'] = this.#timestamp;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
