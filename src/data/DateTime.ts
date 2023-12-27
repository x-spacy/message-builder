import { CalendarType, DayOfWeek } from '@vyrnnstudios/messages/enums';

export class DateTime {
  private _component?: DateTimeComponent;
  private _unixEpoch?: DateTimeEpoch;

  public set component(component: DateTimeComponent) {
    this._component = component;
  }

  public get component(): DateTimeComponent | undefined {
    return this._component;
  }

  public set unixEpoch(unixEpoch: DateTimeEpoch) {
    this._unixEpoch = unixEpoch;
  }

  public get unixEpoch(): DateTimeEpoch | undefined {
    return this._unixEpoch;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._component) {
      record['component'] = this._component;
    }

    if (this._unixEpoch) {
      record['unix_epoch'] = this._unixEpoch;
    }

    return record;
  }
}

export class DateTimeComponent {
  private _calendar?: CalendarType;

  private _dayOfMonth: number;
  private _dayOfWeek?: DayOfWeek;

  private _year?: number;
  private _month: number;
  private _hour: number;
  private _minute: number;

  public set calendar(calendar: CalendarType) {
    this._calendar = calendar;
  }

  public get calendar(): CalendarType | undefined {
    return this._calendar;
  }

  public set dayOfMonth(dayOfMonth: number) {
    this._dayOfMonth = dayOfMonth;
  }

  public get dayOfMonth(): number {
    return this._dayOfMonth;
  }

  public set dayOfWeek(dayOfWeek: DayOfWeek) {
    this._dayOfWeek = dayOfWeek;
  }

  public get dayOfWeek(): DayOfWeek | undefined {
    return this._dayOfWeek;
  }

  public set year(year: number) {
    this._year = year;
  }

  public get year(): number | undefined {
    return this._year;
  }

  public set month(month: number) {
    this._month = month;
  }

  public get month(): number {
    return this._month;
  }

  public set hour(hour: number) {
    this._hour = hour;
  }

  public get hour(): number {
    return this._hour;
  }

  public set minute(minute: number) {
    this._minute = minute;
  }

  public get minute(): number {
    return this._minute;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._calendar) {
      record['calendar'] = this._calendar;
    }

    record['day_of_month'] = this._dayOfMonth;

    if (this._dayOfWeek) {
      record['day_of_week'] = this._dayOfWeek;
    }

    if (this._year) {
      record['year'] = this._year;
    }

    record['month'] = this._month;
    record['hour'] = this._hour;
    record['minute'] = this._minute;

    return record;
  }
}

export class DateTimeEpoch {
  private _timestamp: number;

  public set timestamp(timestamp: number) {
    this._timestamp = timestamp;
  }

  public get timestamp(): number {
    return this._timestamp;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['timestamp'] = this._timestamp;

    return record;
  }
}
