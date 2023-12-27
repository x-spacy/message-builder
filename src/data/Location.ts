export class Location {
  private _longitude: number;
  private _latitude: number;
  private _name: string;
  private _address: string;

  public set longitude(longitude: number) {
    this._longitude = longitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public set latitude(latitude: number) {
    this._latitude = latitude;
  }

  public get latitude(): number {
    return this._latitude;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get address(): string {
    return this._address;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['longitude'] = this._longitude;
    record['latitude'] = this._latitude;
    record['name'] = this._name;
    record['address'] = this._address;

    return record;
  }
}
