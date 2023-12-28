/// <reference path="data.d.ts" />

declare module '@vyrnnstudios/messages/build/LocationBuilder' {
  import { Location } from '@vyrnnstudios/messages/data';

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
