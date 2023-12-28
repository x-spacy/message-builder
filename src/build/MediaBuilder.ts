import { Media } from '@vyrnnstudios/messages/data/Media';

export class MediaBuilder {
  private media: Media;

  constructor() {
    this.media = new Media();
  }

  public static newBuilder(): MediaBuilder {
    return new MediaBuilder();
  }

  public static builder(): MediaBuilder {
    return MediaBuilder.newBuilder();
  }

  public append(media: Media): MediaBuilder {
    this.media = media;
    return this;
  }

  public id(id: string): MediaBuilder {
    this.media.id = id;
    return this;
  }

  public link(link: string): MediaBuilder {
    this.media.link = link;
    return this;
  }

  public caption(caption: string): MediaBuilder {
    this.media.caption = caption;
    return this;
  }

  public fileName(fileName: string): MediaBuilder {
    this.media.fileName = fileName;
    return this;
  }

  public provider(provider: string): MediaBuilder {
    this.media.provider = provider;
    return this;
  }

  public build(): Media {
    return this.media;
  }
}
