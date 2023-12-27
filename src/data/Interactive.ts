import { Header } from '@vyrnnstudios/messages/data/Header';
import { Body } from '@vyrnnstudios/messages/data/Body';
import { Footer } from '@vyrnnstudios/messages/data/Footer';

import { HeaderBuilder } from '@vyrnnstudios/messages/build/HeaderBuilder';
import { BodyBuilder } from '@vyrnnstudios/messages/build/BodyBuilder';
import { FooterBuilder } from '@vyrnnstudios/messages/build/FooterBuilder';

import { InteractiveType } from '@vyrnnstudios/messages/enums';

export class Interactive {
  private _type: InteractiveType;
  private _header?: Header;
  private _body: Body;
  private _footer?: Footer;
  private _action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow;

  public set type(type: InteractiveType) {
    this._type = type;
  }

  public get type(): InteractiveType {
    return this._type;
  }

  public set header(builder: Header | ((builder: HeaderBuilder) => void)) {
    const headerBuilder = HeaderBuilder.newBuilder();

    if (builder instanceof Header) {
      headerBuilder.append(builder);
    }

    if (builder instanceof Function) {
      builder(headerBuilder);
    }

    this._header = headerBuilder.build();
  }

  public get header(): Header | undefined {
    return this._header;
  }

  public set body(body: Body | ((builder: BodyBuilder) => void)) {
    const bodyBuilder = BodyBuilder.newBuilder();

    if (body instanceof Body) {
      bodyBuilder.append(body);
    }

    if (body instanceof Function) {
      body(bodyBuilder);
    }

    this._body = bodyBuilder.build();
  }

  public get body(): Body {
    return this._body;
  }

  public set footer(footer: Footer | ((builder: FooterBuilder) => void)) {
    const footerBuilder = FooterBuilder.newBuilder();

    if (footer instanceof Footer) {
      footerBuilder.append(footer);
    }

    if (footer instanceof Function) {
      footer(footerBuilder);
    }

    this._footer = footerBuilder.build();
  }

  public get footer(): Footer | undefined {
    return this._footer;
  }

  public set action(action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow) {
    this._action = action;
  }

  public get action(): List | ReplyButton | Product | ProductList | CatalogMessage | Flow {
    return this._action;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['type'] = this._type;

    if (this._header) {
      record['header'] = this._header;
    }

    record['body'] = this._body;

    if (this._footer) {
      record['footer'] = this._footer;
    }

    record['action'] = this._action;

    return record;
  }
}

export class List {
  private _button: string;
  private _sections: Array<ListSection>;

  public set button(button: string) {
    this._button = button;
  }

  public get button(): string {
    return this._button;
  }

  public set sections(sections: Array<ListSection>) {
    this._sections = sections;
  }

  public get sections(): Array<ListSection> {
    return this._sections;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['button'] = this._button;
    record['sections'] = this._sections;

    return record;
  }
}

export class ListSection {
  private _title?: string;
  private _rows: Array<ListSectionRow>;

  public set title(title: string) {
    this._title = title;
  }

  public get title(): string | undefined {
    return this._title;
  }

  public set rows(rows: Array<ListSectionRow>) {
    this._rows = rows;
  }

  public get rows(): Array<ListSectionRow> {
    return this._rows;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._title) {
      record['title'] = this._title;
    }

    record['rows'] = this._rows;

    return record;
  }
}

export class ListSectionRow {
  private _id: string;
  private _title: string;
  private _description?: string;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get title(): string {
    return this._title;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get description(): string | undefined {
    return this._description;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['id'] = this._id;
    record['title'] = this._title;

    if (this._description) {
      record['description'] = this._description;
    }

    return record;
  }
}

export class ReplyButton {
  private _buttons: Array<ReplyButtonRow>;

  public set buttons(buttons: Array<ReplyButtonRow>) {
    this._buttons = buttons;
  }

  public get buttons(): Array<ReplyButtonRow> {
    return this._buttons;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['buttons'] = this._buttons;

    return record;
  }
}

export class ReplyButtonRow {
  private _type: 'reply';
  private _reply: ReplyButtonRowReply;

  public set type(type: 'reply') {
    this._type = type;
  }

  public get type(): 'reply' {
    return this._type;
  }

  public set reply(reply: ReplyButtonRowReply) {
    this._reply = reply;
  }

  public get reply(): ReplyButtonRowReply {
    return this._reply;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['type'] = this._type;
    record['reply'] = this._reply;

    return record;
  }
}

export class ReplyButtonRowReply {
  private _id?: string;
  private _title: string;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get title(): string {
    return this._title;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._id) {
      record['id'] = this._id;
    }

    record['title'] = this._title;

    return record;
  }
}

export class Product {
  private _id: string;
  private _productRetailerId: string;

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set productRetailerId(productRetailerId: string) {
    this._productRetailerId = productRetailerId;
  }

  public get productRetailerId(): string {
    return this._productRetailerId;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['id'] = this._id;
    record['product_retailer_id'] = this._productRetailerId;

    return record;
  }
}

export class ProductList {
  private _catalogId: string;
  private _sections: Array<ProductListSection>;

  public set catalogId(catalogId: string) {
    this._catalogId = catalogId;
  }

  public get catalogId(): string {
    return this._catalogId;
  }

  public set sections(sections: Array<ProductListSection>) {
    this._sections = sections;
  }

  public get sections(): Array<ProductListSection> {
    return this._sections;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['catalog_id'] = this._catalogId;
    record['sections'] = this._sections;

    return record;
  }
}

export class ProductListSection {
  private _title: string;
  private _productItems: Array<ProductListSectionProductItem>;

  public set title(title: string) {
    this._title = title;
  }

  public get title(): string {
    return this._title;
  }

  public set productItems(productItems: Array<ProductListSectionProductItem>) {
    this._productItems = productItems;
  }

  public get productItems(): Array<ProductListSectionProductItem> {
    return this._productItems;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['title'] = this._title;
    record['product_items'] = this._productItems;

    return record;
  }
}

export class ProductListSectionProductItem {
  private _productRetailerId: string;

  public set productRetailerId(productRetailerId: string) {
    this._productRetailerId = productRetailerId;
  }

  public get productRetailerId(): string {
    return this._productRetailerId;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['product_retailer_id'] = this._productRetailerId;

    return record;
  }
}

export class CatalogMessage {
  private _name: string;
  private _parameters: CatalogMessageParameter;

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set parameters(parameters: CatalogMessageParameter) {
    this._parameters = parameters;
  }

  public get parameters(): CatalogMessageParameter {
    return this._parameters;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['name'] = this._name;
    record['parameters'] = this._parameters;

    return record;
  }
}

export class CatalogMessageParameter {
  private _thumbnailProductRetailerId: string;

  public set thumbnailProductRetailerId(thumbnailProductRetailerId: string) {
    this._thumbnailProductRetailerId = thumbnailProductRetailerId;
  }

  public get thumbnailProductRetailerId(): string {
    return this._thumbnailProductRetailerId;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['thumbnail_product_retailer_id'] = this._thumbnailProductRetailerId;

    return record;
  }
}

export class Flow {
  private _name: string;
  private _parameters: FlowParameter;

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set parameters(parameters: FlowParameter) {
    this._parameters = parameters;
  }

  public get parameters(): FlowParameter {
    return this._parameters;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['name'] = this._name;
    record['parameters'] = this._parameters;

    return record;
  }
}

export class FlowParameter {
  private _flowMessageVersion: string;
  private _flowToken: string;
  private _flowId: string;
  private _flowCTA: string;
  private _flowAction: string;
  private _flowActionPayload: FlowParameterFlowActionPayload;

  public set flowMessageVersion(flowMessageVersion: string) {
    this._flowMessageVersion = flowMessageVersion;
  }

  public get flowMessageVersion(): string {
    return this._flowMessageVersion;
  }

  public set flowToken(flowToken: string) {
    this._flowToken = flowToken;
  }

  public get flowToken(): string {
    return this._flowToken;
  }

  public set flowId(flowId: string) {
    this._flowId = flowId;
  }

  public get flowId(): string {
    return this._flowId;
  }

  public set flowCTA(flowCTA: string) {
    this._flowCTA = flowCTA;
  }

  public get flowCTA(): string {
    return this._flowCTA;
  }

  public set flowAction(flowAction: string) {
    this._flowAction = flowAction;
  }

  public get flowAction(): string {
    return this._flowAction;
  }

  public set flowActionPayload(flowActionPayload: FlowParameterFlowActionPayload) {
    this._flowActionPayload = flowActionPayload;
  }

  public get flowActionPayload(): FlowParameterFlowActionPayload {
    return this._flowActionPayload;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['flow_message_version'] = this._flowMessageVersion;
    record['flow_token'] = this._flowToken;
    record['flow_id'] = this._flowId;
    record['flow_cta'] = this._flowCTA;
    record['flow_action'] = this._flowAction;
    record['flow_action_payload'] = this._flowActionPayload;

    return record;
  }
}

export class FlowParameterFlowActionPayload {
  private _screen: string;
  private _data?: Record<string, unknown>;

  public set screen(screen: string) {
    this._screen = screen;
  }

  public get screen(): string {
    return this._screen;
  }

  public set data(data: Record<string, unknown>) {
    this._data = data;
  }

  public get data(): Record<string, unknown> | undefined {
    return this._data;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['screen'] = this._screen;

    if (this._data) {
      record['data'] = this._data;
    }

    return record;
  }
}
