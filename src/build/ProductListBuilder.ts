import {
  ProductList,
  ProductListSection,
  ProductListSectionProductItem
} from '@vyrnnstudios/messages/data/Interactive';

export class ProductListBuilder {
  private productList: ProductList;

  constructor() {
    this.productList = new ProductList();
  }

  public static newBuilder(): ProductListBuilder {
    return new ProductListBuilder();
  }

  public static builder(): ProductListBuilder {
    return ProductListBuilder.newBuilder();
  }

  public append(productList: ProductList): ProductListBuilder {
    this.productList = productList;

    return this;
  }

  public catalogId(catalogId: string): ProductListBuilder {
    this.productList.catalogId = catalogId;
    return this;
  }

  public sections(sections: ProductListSection[] | ((builder: ProductListSectionBuilder) => void)): ProductListBuilder {
    const productListSectionBuilder = ProductListSectionBuilder.newBuilder();

    if (sections instanceof Array) {
      productListSectionBuilder.append(sections);
    }

    if (sections instanceof Function) {
      sections(productListSectionBuilder);
    }

    this.productList.sections = productListSectionBuilder.build();

    return this;
  }

  public build(): ProductList {
    return this.productList;
  }
}

export class ProductListSectionBuilder {
  private productListSections: ProductListSection[];

  private productListSection: ProductListSection;

  constructor() {
    this.productListSections = [];

    this.productListSection = new ProductListSection();
  }

  public static newBuilder(): ProductListSectionBuilder {
    return new ProductListSectionBuilder();
  }

  public static builder(): ProductListSectionBuilder {
    return ProductListSectionBuilder.newBuilder();
  }

  public append(productListSections: ProductListSection[]): ProductListSectionBuilder {
    this.productListSections.push(...productListSections);

    return this;
  }

  public next(): ProductListSectionBuilder {
    this.productListSections.push(this.productListSection);

    this.productListSection = new ProductListSection();

    return this;
  }

  public title(title: string): ProductListSectionBuilder {
    this.productListSection.title = title;
    return this;
  }

  public productItems(productItems: ProductListSectionProductItem[] | ((builder: ProductListSectionProductItemBuilder) => void)): ProductListSectionBuilder {
    const productItemBuilder = ProductListSectionProductItemBuilder.newBuilder();

    if (productItems instanceof Array) {
      productItemBuilder.append(productItems);
    }

    if (productItems instanceof Function) {
      productItems(productItemBuilder);
    }

    this.productListSection.productItems = productItemBuilder.build();

    return this;
  }

  public build(): Array<ProductListSection> {
    if (this.productListSections.indexOf(this.productListSection) === -1) {
      this.productListSections.push(this.productListSection);
    }

    return this.productListSections;
  }
}

export class ProductListSectionProductItemBuilder {
  private productListSectionProductItems: ProductListSectionProductItem[];

  private productListSectionProductItem: ProductListSectionProductItem;

  constructor() {
    this.productListSectionProductItems = [];

    this.productListSectionProductItem = new ProductListSectionProductItem();
  }

  public static newBuilder(): ProductListSectionProductItemBuilder {
    return new ProductListSectionProductItemBuilder();
  }

  public static builder(): ProductListSectionProductItemBuilder {
    return ProductListSectionProductItemBuilder.newBuilder();
  }

  public append(productListSectionProductItems: ProductListSectionProductItem[]): ProductListSectionProductItemBuilder {
    this.productListSectionProductItems.push(...productListSectionProductItems);

    return this;
  }

  public next(): ProductListSectionProductItemBuilder {
    this.productListSectionProductItems.push(this.productListSectionProductItem);

    this.productListSectionProductItem = new ProductListSectionProductItem();

    return this;
  }

  public productRetailerId(productRetailerId: string): ProductListSectionProductItemBuilder {
    this.productListSectionProductItem.productRetailerId = productRetailerId;
    return this;
  }

  public build(): Array<ProductListSectionProductItem> {
    if (this.productListSectionProductItems.indexOf(this.productListSectionProductItem) === -1) {
      this.productListSectionProductItems.push(this.productListSectionProductItem);
    }

    return this.productListSectionProductItems;
  }
}
