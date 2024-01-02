export class Location {
  #longitude: number;
  #latitude: number;
  #name: string;
  #address: string;

  public set longitude(longitude: number) {
    this.#longitude = longitude;
  }

  public get longitude(): number {
    return this.#longitude;
  }

  public set latitude(latitude: number) {
    this.#latitude = latitude;
  }

  public get latitude(): number {
    return this.#latitude;
  }

  public set name(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public set address(address: string) {
    this.#address = address;
  }

  public get address(): string {
    return this.#address;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['longitude'] = this.#longitude;
    record['latitude'] = this.#latitude;
    record['name'] = this.#name;
    record['address'] = this.#address;

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
