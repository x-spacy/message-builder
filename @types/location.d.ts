declare module '@x-spacy/message-builder' {
  import { Location } from '@x-spacy/message-builder';

  export class LocationBuilder {
    public static newBuilder(): LocationBuilder

    public static builder(): LocationBuilder

    public longitude(longitude: number): LocationBuilder

    public latitude(latitude: number): LocationBuilder

    public name(name: string): LocationBuilder

    public address(address: string): LocationBuilder

    public build(): Location
  }
}
