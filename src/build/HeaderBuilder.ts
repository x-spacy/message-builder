import {
  Header,
  HeaderDocument,
  HeaderImage,
  HeaderProvider,
  HeaderVideo
} from '@vyrnnstudios/messages/data/Header';

import { HeaderType } from '@vyrnnstudios/messages/enums';

export class HeaderBuilder {
  private header: Header;

  constructor() {
    this.header = new Header();
  }

  public static newBuilder(): HeaderBuilder {
    return new HeaderBuilder();
  }

  public static builder(): HeaderBuilder {
    return HeaderBuilder.newBuilder();
  }

  public append(header: Header): HeaderBuilder {
    this.header = header;
    return this;
  }

  public type(type: HeaderType): HeaderBuilder {
    this.header.type = type;
    return this;
  }

  public text(text: string): HeaderBuilder {
    this.header.text = text;
    return this;
  }

  public image(image: HeaderImage): HeaderBuilder {
    this.header.image = image;
    return this;
  }

  public video(video: HeaderVideo): HeaderBuilder {
    this.header.video = video;
    return this;
  }

  public document(document: HeaderDocument): HeaderBuilder {
    this.header.document = document;
    return this;
  }

  public build(): Header {
    return this.header;
  }
}

export class HeaderImageBuilder {
  private readonly image: HeaderImage;

  constructor() {
    this.image = new HeaderImage();
  }

  public static newBuilder(): HeaderImageBuilder {
    return new HeaderImageBuilder();
  }

  public static builder(): HeaderImageBuilder {
    return HeaderImageBuilder.newBuilder();
  }

  public id(id: string): HeaderImageBuilder {
    this.image.id = id;
    return this;
  }

  public link(link: string): HeaderImageBuilder {
    this.image.link = link;
    return this;
  }

  public provider(provider: HeaderProvider): HeaderImageBuilder {
    this.image.provider = provider;
    return this;
  }

  public build(): HeaderImage {
    return this.image;
  }
}

export class HeaderVideoBuilder {
  private readonly video: HeaderVideo;

  constructor() {
    this.video = new HeaderVideo();
  }

  public static newBuilder(): HeaderVideoBuilder {
    return new HeaderVideoBuilder();
  }

  public static builder(): HeaderVideoBuilder {
    return HeaderVideoBuilder.newBuilder();
  }

  public id(id: string): HeaderVideoBuilder {
    this.video.id = id;
    return this;
  }

  public link(link: string): HeaderVideoBuilder {
    this.video.link = link;
    return this;
  }

  public provider(provider: HeaderProvider): HeaderVideoBuilder {
    this.video.provider = provider;
    return this;
  }

  public build(): HeaderVideo {
    return this.video;
  }
}

export class HeaderDocumentBuilder {
  private readonly document: HeaderDocument;

  constructor() {
    this.document = new HeaderDocument();
  }

  public static newBuilder(): HeaderDocumentBuilder {
    return new HeaderDocumentBuilder();
  }

  public static builder(): HeaderDocumentBuilder {
    return HeaderDocumentBuilder.newBuilder();
  }

  public id(id: string): HeaderDocumentBuilder {
    this.document.id = id;
    return this;
  }

  public link(link: string): HeaderDocumentBuilder {
    this.document.link = link;
    return this;
  }

  public provider(provider: HeaderProvider): HeaderDocumentBuilder {
    this.document.provider = provider;
    return this;
  }

  public build(): HeaderDocument {
    return this.document;
  }
}

export class HeaderProviderBuilder {
  private readonly provider: HeaderProvider;

  constructor() {
    this.provider = new HeaderProvider();
  }

  public static newBuilder(): HeaderProviderBuilder {
    return new HeaderProviderBuilder();
  }

  public static builder(): HeaderProviderBuilder {
    return HeaderProviderBuilder.newBuilder();
  }

  public name(name: string): HeaderProviderBuilder {
    this.provider.name = name;
    return this;
  }

  public build(): HeaderProvider {
    return this.provider;
  }
}
