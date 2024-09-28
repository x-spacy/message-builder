import { Location } from '@x-spacy/message-builder/data/Location';

export class LocationBuilder {
  private location: Location;

  constructor() {
    this.location = new Location();
  }

  public static newBuilder(): LocationBuilder {
    return new LocationBuilder();
  }

  public static builder(): LocationBuilder {
    return LocationBuilder.newBuilder();
  }

  public append(location: Location): LocationBuilder {
    this.location = location;
    return this;
  }

  public longitude(longitude: number): LocationBuilder {
    this.location.longitude = longitude;
    return this;
  }

  public latitude(latitude: number): LocationBuilder {
    this.location.latitude = latitude;
    return this;
  }

  public name(name: string): LocationBuilder {
    this.location.name = name;
    return this;
  }

  public address(address: string): LocationBuilder {
    this.location.address = address;
    return this;
  }

  public build(): Location {
    return this.location;
  }
}
