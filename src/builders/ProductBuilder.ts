import { Product } from '@x-spacy/message-builder/data/Interactive';

export class ProductBuilder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  public static newBuilder(): ProductBuilder {
    return new ProductBuilder();
  }

  public static builder(): ProductBuilder {
    return ProductBuilder.newBuilder();
  }

  public append(product: Product): ProductBuilder {
    this.product = product;

    return this;
  }

  public id(id: string): ProductBuilder {
    this.product.id = id;

    return this;
  }

  public productRetailerId(productRetailerId: string): ProductBuilder {
    this.product.productRetailerId = productRetailerId;

    return this;
  }

  public build(): Product {
    return this.product;
  }
}
