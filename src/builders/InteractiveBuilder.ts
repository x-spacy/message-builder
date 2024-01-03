import { Header } from '@vyrnnstudios/messages/data/Header';
import { Body } from '@vyrnnstudios/messages/data/Body';
import { Footer } from '@vyrnnstudios/messages/data/Footer';

import {
  CatalogMessage,
  Flow,
  Interactive,
  List,
  Product,
  ProductList,
  ReplyButton
} from '@vyrnnstudios/messages/data/Interactive';

import { ListBuilder } from '@vyrnnstudios/messages/builders/ListBuilder';
import { ReplyButtonBuilder } from '@vyrnnstudios/messages/builders/ReplyButtonBuilder';
import { ProductBuilder } from '@vyrnnstudios/messages/builders/ProductBuilder';
import { ProductListBuilder } from '@vyrnnstudios/messages/builders/ProductListBuilder';
import { CatalogMessageBuilder } from '@vyrnnstudios/messages/builders/CatalogMessageBuilder';
import { FlowBuilder } from '@vyrnnstudios/messages/builders/FlowBuilder';

import { InteractiveType } from '@vyrnnstudios/messages/enums';

export class InteractiveBuilder {
  private interactive: Interactive;

  constructor() {
    this.interactive = new Interactive();
  }

  public static newBuilder(): InteractiveBuilder {
    return new InteractiveBuilder();
  }

  public static builder(): InteractiveBuilder {
    return InteractiveBuilder.newBuilder();
  }

  public append(interactive: Interactive): InteractiveBuilder {
    this.interactive = interactive;
    return this;
  }

  public type(type: InteractiveType): InteractiveBuilder {
    this.interactive.type = type;
    return this;
  }

  public header(header: Header): InteractiveBuilder {
    this.interactive.header = header;
    return this;
  }

  public body(body: Body): InteractiveBuilder {
    this.interactive.body = body;
    return this;
  }

  public footer(footer: Footer): InteractiveBuilder {
    this.interactive.footer = footer;
    return this;
  }

  public list(list: List | ((builder: ListBuilder) => void)): InteractiveBuilder {
    const listBuilder = ListBuilder.newBuilder();

    if (list instanceof List) {
      listBuilder.append(list);
    }

    if (list instanceof Function) {
      list(listBuilder);
    }

    this.interactive.action = listBuilder.build();

    return this;
  }

  public replyButton(replyButton: ReplyButton | ((builder: ReplyButtonBuilder) => void)): InteractiveBuilder {
    const replyButtonBuilder = ReplyButtonBuilder.newBuilder();

    if (replyButton instanceof ReplyButton) {
      replyButtonBuilder.append(replyButton);
    }

    if (replyButton instanceof Function) {
      replyButton(replyButtonBuilder);
    }

    this.interactive.action = replyButtonBuilder.build();

    return this;
  }

  public product(product: Product | ((builder: ProductBuilder) => void)): InteractiveBuilder {
    const productBuilder = ProductBuilder.newBuilder();

    if (product instanceof Product) {
      productBuilder.append(product);
    }

    if (product instanceof Function) {
      product(productBuilder);
    }

    this.interactive.action = productBuilder.build();

    return this;
  }

  public productList(productList: ProductList | ((builder: ProductListBuilder) => void)): InteractiveBuilder {
    const productListBuilder = ProductListBuilder.newBuilder();

    if (productList instanceof ProductList) {
      productListBuilder.append(productList);
    }

    if (productList instanceof Function) {
      productList(productListBuilder);
    }

    this.interactive.action = productListBuilder.build();

    return this;
  }

  public catalogMessage(catalogMessage: CatalogMessage | ((builder: CatalogMessageBuilder) => void)): InteractiveBuilder {
    const catalogMessageBuilder = CatalogMessageBuilder.newBuilder();

    if (catalogMessage instanceof CatalogMessage) {
      catalogMessageBuilder.append(catalogMessage);
    }

    if (catalogMessage instanceof Function) {
      catalogMessage(catalogMessageBuilder);
    }

    this.interactive.action = catalogMessageBuilder.build();

    return this;
  }

  public flow(flow: Flow | ((builder: FlowBuilder) => void)): InteractiveBuilder {
    const flowBuilder = FlowBuilder.newBuilder();

    if (flow instanceof Flow) {
      flowBuilder.append(flow);
    }

    if (flow instanceof Function) {
      flow(flowBuilder);
    }

    this.interactive.action = flowBuilder.build();

    return this;
  }

  public action(action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow): InteractiveBuilder {
    this.interactive.action = action;
    return this;
  }

  public build(): Interactive {
    return this.interactive;
  }
}
