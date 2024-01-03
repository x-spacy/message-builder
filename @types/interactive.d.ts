declare module '@vyrnnstudios/messages' {
  import {
    Interactive,
    Header,
    Body,
    Footer,
    List,
    ReplyButton,
    ReplyButtonRow,
    Product,
    ProductList,
    CatalogMessage,
    Flow,
    ListSection,
    ListSectionRow,
    ReplyButtonRowReply,
    ProductListSectionProductItem,
    ProductListSection,
    CatalogMessageParameter,
    FlowParameterFlowActionPayload,
    FlowParameter,
    HeaderBuilder,
    BodyBuilder,
    FooterBuilder,
    InteractiveType
  } from '@vyrnnstudios/messages';

  export class InteractiveBuilder {
    public static newBuilder(): InteractiveBuilder

    public static builder(): InteractiveBuilder

    public type(type: InteractiveType): InteractiveBuilder

    public header(builder: Header | ((builder: HeaderBuilder) => void)): InteractiveBuilder

    public body(body: Body | ((builder: BodyBuilder) => void)): InteractiveBuilder

    public footer(footer: Footer | ((builder: FooterBuilder) => void)): InteractiveBuilder

    public list(list: List | ((builder: ListBuilder) => void)): InteractiveBuilder

    public replyButton(replyButton: ReplyButton | ((builder: ReplyButtonBuilder) => void)): InteractiveBuilder

    public product(product: Product | ((builder: ProductBuilder) => void)): InteractiveBuilder

    public productList(productList: ProductList | ((builder: ProductListBuilder) => void)): InteractiveBuilder

    public catalogMessage(catalogMessage: CatalogMessage | ((builder: CatalogMessageBuilder) => void)): InteractiveBuilder

    public flow(flow: Flow | ((builder: FlowBuilder) => void)): InteractiveBuilder

    public action(action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow): InteractiveBuilder

    public build(): Interactive
  }

  export class ListBuilder {
    public static newBuilder(): ListBuilder

    public static builder(): ListBuilder

    public button(button: string): ListBuilder

    public sections(sections: Array<ListSection> | ((builder: ListSectionBuilder) => void)): ListBuilder

    public build(): List
  }

  export class ListSectionBuilder {
    public static newBuilder(): ListSectionBuilder

    public static builder(): ListSectionBuilder

    public next(): ListSectionBuilder

    public title(title: string): ListSectionBuilder

    public rows(rows: Array<ListSectionRow> | ((builder: ListSectionRowsBuilder) => void)): ListSectionBuilder

    public build(): Array<ListSection>
  }

  export class ListSectionRowsBuilder {
    public static newBuilder(): ListSectionRowsBuilder

    public static builder(): ListSectionRowsBuilder

    public next(): ListSectionRowsBuilder

    public id(id: string | number): ListSectionRowsBuilder

    public title(title: string): ListSectionRowsBuilder

    public description(description: string): ListSectionRowsBuilder

    public build(): Array<ListSectionRow>
  }

  export class ReplyButtonBuilder {
    public static newBuilder(): ReplyButtonBuilder

    public static builder(): ReplyButtonBuilder

    public buttons(buttons: ReplyButtonRow[] | ((builder: ReplyButtonRowsBuilder) => void)): ReplyButtonBuilder

    public build(): ReplyButton
  }

  export class ReplyButtonRowsBuilder {
    public static newBuilder(): ReplyButtonRowsBuilder

    public static builder(): ReplyButtonRowsBuilder

    public next(): ReplyButtonRowsBuilder

    public type(type: 'reply'): ReplyButtonRowsBuilder

    public reply(reply: ReplyButtonRowReply | ((builder: ReplyButtonRowReplyBuilder) => void)): ReplyButtonRowsBuilder

    public build(): Array<ReplyButtonRow>
  }

  export class ReplyButtonRowReplyBuilder {
    public static newBuilder(): ReplyButtonRowReplyBuilder

    public static builder(): ReplyButtonRowReplyBuilder

    public id(id: string | number): ReplyButtonRowReplyBuilder

    public title(title: string): ReplyButtonRowReplyBuilder

    public build(): ReplyButtonRowReply
  }

  export class ProductBuilder {
    public static newBuilder(): ProductBuilder

    public static builder(): ProductBuilder

    public id(id: string | number): ProductBuilder

    public productRetailerId(productRetailerId: string): ProductBuilder

    public build(): Product
  }

  export class ProductListBuilder {
    public static newBuilder(): ProductListBuilder

    public static builder(): ProductListBuilder

    public catalogId(catalogId: string): ProductListBuilder

    public sections(sections: ProductListSection[] | ((builder: ProductListSectionBuilder) => void)): ProductListBuilder

    public build(): ProductList
  }

  export class ProductListSectionBuilder {
    public static newBuilder(): ProductListSectionBuilder

    public static builder(): ProductListSectionBuilder

    public next(): ProductListSectionBuilder

    public title(title: string): ProductListSectionBuilder

    public productItems(productItems: ProductListSectionProductItem[] | ((builder: ProductListSectionProductItemBuilder) => void)): ProductListSectionBuilder

    public build(): Array<ProductListSection>
  }

  export class ProductListSectionProductItemBuilder {
    public static newBuilder(): ProductListSectionProductItemBuilder

    public static builder(): ProductListSectionProductItemBuilder

    public next(): ProductListSectionProductItemBuilder

    public productRetailerId(productRetailerId: string): ProductListSectionProductItemBuilder

    public build(): Array<ProductListSectionProductItem>
  }

  export class CatalogMessageBuilder {
    public static newBuilder(): CatalogMessageBuilder

    public static builder(): CatalogMessageBuilder

    public name(name: string): CatalogMessageBuilder

    public parameters(parameters: CatalogMessageParameter | ((builder: CatalogMessageParameterBuilder) => void)): CatalogMessageBuilder

    public build(): CatalogMessage
  }

  export class CatalogMessageParameterBuilder {
    public static newBuilder(): CatalogMessageParameterBuilder

    public static builder(): CatalogMessageParameterBuilder

    public thumbnailProductRetailerId(thumbnailProductRetailerId: string): CatalogMessageParameterBuilder

    public build(): CatalogMessageParameter
  }

  export class FlowBuilder {
    public static newBuilder(): FlowBuilder

    public static builder(): FlowBuilder

    public name(name: string): FlowBuilder

    public parameters(parameters: FlowParameter | ((builder: FlowParameterBuilder) => void)): FlowBuilder

    public build(): Flow
  }

  export class FlowParameterBuilder {
    public static newBuilder(): FlowParameterBuilder

    public static builder(): FlowParameterBuilder

    public flowMessageVersion(flowMessageVersion: string): FlowParameterBuilder

    public flowToken(flowToken: string): FlowParameterBuilder

    public flowId(flowId: string): FlowParameterBuilder

    public flowCTA(flowCTA: string): FlowParameterBuilder

    public flowAction(flowAction: string): FlowParameterBuilder

    public flowActionPayload(flowActionPayload: FlowParameterFlowActionPayload | ((builder: FlowParameterFlowActionPayloadBuilder) => void)): FlowParameterBuilder

    public build(): FlowParameter
  }

  export class FlowParameterFlowActionPayloadBuilder {
    public static newBuilder(): FlowParameterFlowActionPayloadBuilder

    public static builder(): FlowParameterFlowActionPayloadBuilder

    public screen(screen: string): FlowParameterFlowActionPayloadBuilder

    public data(data: Record<string, unknown> | ((builder: Record<string, unknown>) => void)): FlowParameterFlowActionPayloadBuilder

    public build(): FlowParameterFlowActionPayload
  }
}
