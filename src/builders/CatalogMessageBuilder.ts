import { CatalogMessage, CatalogMessageParameter } from '@x-spacy/message-builder/data/Interactive';

export class CatalogMessageBuilder {
  private catalogMessage: CatalogMessage;

  constructor() {
    this.catalogMessage = new CatalogMessage();
  }

  public static newBuilder(): CatalogMessageBuilder {
    return new CatalogMessageBuilder();
  }

  public static builder(): CatalogMessageBuilder {
    return CatalogMessageBuilder.newBuilder();
  }

  public append(catalogMessage: CatalogMessage): CatalogMessageBuilder {
    this.catalogMessage = catalogMessage;
    return this;
  }

  public name(name: string): CatalogMessageBuilder {
    this.catalogMessage.name = name;
    return this;
  }

  public parameters(parameters: CatalogMessageParameter | ((builder: CatalogMessageParameterBuilder) => void)): CatalogMessageBuilder {
    const catalogMessageParameterBuilder = CatalogMessageParameterBuilder.newBuilder();

    if (parameters instanceof CatalogMessageParameter) {
      catalogMessageParameterBuilder.append(parameters);
    }

    if (parameters instanceof Function) {
      parameters(catalogMessageParameterBuilder);
    }

    this.catalogMessage.parameters = catalogMessageParameterBuilder.build();

    return this;
  }

  public build(): CatalogMessage {
    return this.catalogMessage;
  }
}

export class CatalogMessageParameterBuilder {
  private catalogMessageParameter: CatalogMessageParameter;

  constructor() {
    this.catalogMessageParameter = new CatalogMessageParameter();
  }

  public static newBuilder(): CatalogMessageParameterBuilder {
    return new CatalogMessageParameterBuilder();
  }

  public static builder(): CatalogMessageParameterBuilder {
    return CatalogMessageParameterBuilder.newBuilder();
  }

  public append(catalogMessageParameter: CatalogMessageParameter): CatalogMessageParameterBuilder {
    this.catalogMessageParameter = catalogMessageParameter;
    return this;
  }

  public thumbnailProductRetailerId(thumbnailProductRetailerId: string): CatalogMessageParameterBuilder {
    this.catalogMessageParameter.thumbnailProductRetailerId = thumbnailProductRetailerId;
    return this;
  }

  public build(): CatalogMessageParameter {
    return this.catalogMessageParameter;
  }
}
