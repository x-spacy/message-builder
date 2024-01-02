import { Header } from '@vyrnnstudios/messages/data/Header';
import { Body } from '@vyrnnstudios/messages/data/Body';
import { Footer } from '@vyrnnstudios/messages/data/Footer';

import { HeaderBuilder } from '@vyrnnstudios/messages/build/HeaderBuilder';
import { BodyBuilder } from '@vyrnnstudios/messages/build/BodyBuilder';
import { FooterBuilder } from '@vyrnnstudios/messages/build/FooterBuilder';

import { InteractiveType } from '@vyrnnstudios/messages/enums';

export class Interactive {
  #type: InteractiveType;
  #header?: Header;
  #body: Body;
  #footer?: Footer;
  #action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow;

  public set type(type: InteractiveType) {
    this.#type = type;
  }

  public get type(): InteractiveType {
    return this.#type;
  }

  public set header(builder: Header | ((builder: HeaderBuilder) => void)) {
    const headerBuilder = HeaderBuilder.newBuilder();

    if (builder instanceof Header) {
      headerBuilder.append(builder);
    }

    if (builder instanceof Function) {
      builder(headerBuilder);
    }

    this.#header = headerBuilder.build();
  }

  public get header(): Header | undefined {
    return this.#header;
  }

  public set body(body: Body | ((builder: BodyBuilder) => void)) {
    const bodyBuilder = BodyBuilder.newBuilder();

    if (body instanceof Body) {
      bodyBuilder.append(body);
    }

    if (body instanceof Function) {
      body(bodyBuilder);
    }

    this.#body = bodyBuilder.build();
  }

  public get body(): Body {
    return this.#body;
  }

  public set footer(footer: Footer | ((builder: FooterBuilder) => void)) {
    const footerBuilder = FooterBuilder.newBuilder();

    if (footer instanceof Footer) {
      footerBuilder.append(footer);
    }

    if (footer instanceof Function) {
      footer(footerBuilder);
    }

    this.#footer = footerBuilder.build();
  }

  public get footer(): Footer | undefined {
    return this.#footer;
  }

  public set action(action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow) {
    this.#action = action;
  }

  public get action(): List | ReplyButton | Product | ProductList | CatalogMessage | Flow {
    return this.#action;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['type'] = this.#type;

    if (this.#header) {
      record['header'] = this.#header;
    }

    record['body'] = this.#body;

    if (this.#footer) {
      record['footer'] = this.#footer;
    }

    record['action'] = this.#action;

    return record;
  }
}

export class List {
  #button: string;
  #sections: Array<ListSection>;

  public set button(button: string) {
    this.#button = button;
  }

  public get button(): string {
    return this.#button;
  }

  public set sections(sections: Array<ListSection>) {
    this.#sections = sections;
  }

  public get sections(): Array<ListSection> {
    return this.#sections;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['button'] = this.#button;
    record['sections'] = this.#sections;

    return record;
  }
}

export class ListSection {
  #title?: string;
  #rows: Array<ListSectionRow>;

  public set title(title: string) {
    this.#title = title;
  }

  public get title(): string | undefined {
    return this.#title;
  }

  public set rows(rows: Array<ListSectionRow>) {
    this.#rows = rows;
  }

  public get rows(): Array<ListSectionRow> {
    return this.#rows;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#title) {
      record['title'] = this.#title;
    }

    record['rows'] = this.#rows;

    return record;
  }
}

export class ListSectionRow {
  #id: string;
  #title: string;
  #description?: string;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string {
    return this.#id;
  }

  public set title(title: string) {
    this.#title = title;
  }

  public get title(): string {
    return this.#title;
  }

  public set description(description: string) {
    this.#description = description;
  }

  public get description(): string | undefined {
    return this.#description;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['id'] = this.#id;
    record['title'] = this.#title;

    if (this.#description) {
      record['description'] = this.#description;
    }

    return record;
  }
}

export class ReplyButton {
  #buttons: Array<ReplyButtonRow>;

  public set buttons(buttons: Array<ReplyButtonRow>) {
    this.#buttons = buttons;
  }

  public get buttons(): Array<ReplyButtonRow> {
    return this.#buttons;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['buttons'] = this.#buttons;

    return record;
  }
}

export class ReplyButtonRow {
  #type: 'reply';
  #reply: ReplyButtonRowReply;

  public set type(type: 'reply') {
    this.#type = type;
  }

  public get type(): 'reply' {
    return this.#type;
  }

  public set reply(reply: ReplyButtonRowReply) {
    this.#reply = reply;
  }

  public get reply(): ReplyButtonRowReply {
    return this.#reply;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['type'] = this.#type;
    record['reply'] = this.#reply;

    return record;
  }
}

export class ReplyButtonRowReply {
  #id?: string;
  #title: string;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string | undefined {
    return this.#id;
  }

  public set title(title: string) {
    this.#title = title;
  }

  public get title(): string {
    return this.#title;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#id) {
      record['id'] = this.#id;
    }

    record['title'] = this.#title;

    return record;
  }
}

export class Product {
  #id: string;
  #productRetailerId: string;

  public set id(id: string) {
    this.#id = id;
  }

  public get id(): string {
    return this.#id;
  }

  public set productRetailerId(productRetailerId: string) {
    this.#productRetailerId = productRetailerId;
  }

  public get productRetailerId(): string {
    return this.#productRetailerId;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['id'] = this.#id;
    record['product_retailer_id'] = this.#productRetailerId;

    return record;
  }
}

export class ProductList {
  #catalogId: string;
  #sections: Array<ProductListSection>;

  public set catalogId(catalogId: string) {
    this.#catalogId = catalogId;
  }

  public get catalogId(): string {
    return this.#catalogId;
  }

  public set sections(sections: Array<ProductListSection>) {
    this.#sections = sections;
  }

  public get sections(): Array<ProductListSection> {
    return this.#sections;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['catalog_id'] = this.#catalogId;
    record['sections'] = this.#sections;

    return record;
  }
}

export class ProductListSection {
  #title: string;
  #productItems: Array<ProductListSectionProductItem>;

  public set title(title: string) {
    this.#title = title;
  }

  public get title(): string {
    return this.#title;
  }

  public set productItems(productItems: Array<ProductListSectionProductItem>) {
    this.#productItems = productItems;
  }

  public get productItems(): Array<ProductListSectionProductItem> {
    return this.#productItems;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['title'] = this.#title;
    record['product_items'] = this.#productItems;

    return record;
  }
}

export class ProductListSectionProductItem {
  #productRetailerId: string;

  public set productRetailerId(productRetailerId: string) {
    this.#productRetailerId = productRetailerId;
  }

  public get productRetailerId(): string {
    return this.#productRetailerId;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['product_retailer_id'] = this.#productRetailerId;

    return record;
  }
}

export class CatalogMessage {
  #name: string;
  #parameters: CatalogMessageParameter;

  public set name(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public set parameters(parameters: CatalogMessageParameter) {
    this.#parameters = parameters;
  }

  public get parameters(): CatalogMessageParameter {
    return this.#parameters;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['name'] = this.#name;
    record['parameters'] = this.#parameters;

    return record;
  }
}

export class CatalogMessageParameter {
  #thumbnailProductRetailerId: string;

  public set thumbnailProductRetailerId(thumbnailProductRetailerId: string) {
    this.#thumbnailProductRetailerId = thumbnailProductRetailerId;
  }

  public get thumbnailProductRetailerId(): string {
    return this.#thumbnailProductRetailerId;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['thumbnail_product_retailer_id'] = this.#thumbnailProductRetailerId;

    return record;
  }
}

export class Flow {
  #name: string;
  #parameters: FlowParameter;

  public set name(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public set parameters(parameters: FlowParameter) {
    this.#parameters = parameters;
  }

  public get parameters(): FlowParameter {
    return this.#parameters;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['name'] = this.#name;
    record['parameters'] = this.#parameters;

    return record;
  }
}

export class FlowParameter {
  #flowMessageVersion: string;
  #flowToken: string;
  #flowId: string;
  #flowCTA: string;
  #flowAction: string;
  #flowActionPayload: FlowParameterFlowActionPayload;

  public set flowMessageVersion(flowMessageVersion: string) {
    this.#flowMessageVersion = flowMessageVersion;
  }

  public get flowMessageVersion(): string {
    return this.#flowMessageVersion;
  }

  public set flowToken(flowToken: string) {
    this.#flowToken = flowToken;
  }

  public get flowToken(): string {
    return this.#flowToken;
  }

  public set flowId(flowId: string) {
    this.#flowId = flowId;
  }

  public get flowId(): string {
    return this.#flowId;
  }

  public set flowCTA(flowCTA: string) {
    this.#flowCTA = flowCTA;
  }

  public get flowCTA(): string {
    return this.#flowCTA;
  }

  public set flowAction(flowAction: string) {
    this.#flowAction = flowAction;
  }

  public get flowAction(): string {
    return this.#flowAction;
  }

  public set flowActionPayload(flowActionPayload: FlowParameterFlowActionPayload) {
    this.#flowActionPayload = flowActionPayload;
  }

  public get flowActionPayload(): FlowParameterFlowActionPayload {
    return this.#flowActionPayload;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['flow_message_version'] = this.#flowMessageVersion;
    record['flow_token'] = this.#flowToken;
    record['flow_id'] = this.#flowId;
    record['flow_cta'] = this.#flowCTA;
    record['flow_action'] = this.#flowAction;
    record['flow_action_payload'] = this.#flowActionPayload;

    return record;
  }
}

export class FlowParameterFlowActionPayload {
  #screen: string;
  #data?: Record<string, unknown>;

  public set screen(screen: string) {
    this.#screen = screen;
  }

  public get screen(): string {
    return this.#screen;
  }

  public set data(data: Record<string, unknown>) {
    this.#data = data;
  }

  public get data(): Record<string, unknown> | undefined {
    return this.#data;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['screen'] = this.#screen;

    if (this.#data) {
      record['data'] = this.#data;
    }

    return record;
  }
}
