declare module '@x-spacy/message-builder' {
  import {
    MessageType,
    RecipientType,
    HeaderType,
    MessagingProduct,
    TemplateIndex,
    TemplateComponentParameterType,
    CalendarType,
    DayOfWeek,
    ContactAddressType,
    ContactEmailType,
    ContactPhoneType,
    ContactUrlType,
    InteractiveType,
    HeaderBuilder,
    BodyBuilder,
    FooterBuilder
  } from '@x-spacy/message-builder';

  export class Message {
    public set to(to: string)

    public get to(): string

    public set type(type: MessageType)

    public get type(): MessageType | undefined

    public set recipientType(recipientType: RecipientType)

    public get recipientType(): RecipientType | undefined

    public set text(text: Text)

    public get text(): Text

    public set interactive(interactive: Interactive)

    public get interactive(): Interactive | undefined

    public set image(image: Media)

    public get image(): Media | undefined

    public set audio(audio: Media)

    public get audio(): Media | undefined

    public set document(document: Media)

    public get document(): Media | undefined

    public set sticker(sticker: Media)

    public get sticker(): Media | undefined

    public set location(location: Location)

    public get location(): Location | undefined

    public set template(template: Template)

    public get template(): Template | undefined

    public set contacts(contacts: Contact)

    public get contacts(): Contact | undefined

    public set context(context: Context)

    public get context(): Context | undefined

    public set bizOpaqueCallbackData(bizOpaqueCallbackData: string)

    public get bizOpaqueCallbackData(): string | undefined

    public set messagingProduct(messagingProduct: MessagingProduct)

    public get messagingProduct(): MessagingProduct

    public set status(status: string)

    public get status(): string | undefined

    public set previewUrl(previewUrl: boolean)

    public get previewUrl(): boolean | undefined
  }

  export class Media {
    public set id(id: string | number)

    public get id(): string | undefined

    public set link(link: string)

    public get link(): string | undefined

    public set caption(caption: string)

    public get caption(): string | undefined

    public set fileName(fileName: string)

    public get fileName(): string | undefined

    public set provider(provider: string)

    public get provider(): string | undefined
  }

  export class Location {
    public set longitude(longitude: number)

    public get longitude(): number

    public set latitude(latitude: number)

    public get latitude(): number

    public set name(name: string)

    public get name(): string

    public set address(address: string)

    public get address(): string
  }

  export class Template {
    public set name(name: string)

    public get name(): string

    public set language(language: string)

    public get language(): string

    public set components(components: Array<TemplateComponent>)

    public get components(): Array<TemplateComponent>

    public set namespace(namespace: string)

    public get namespace(): string | undefined
  }

  export class TemplateComponent {
    public set type(type: string)

    public get type(): string

    public set subType(subType: string)

    public get subType(): string | undefined

    public set parameters(parameters: Array<TemplateComponentParameter>)

    public get parameters(): Array<TemplateComponentParameter>

    public set index(index: TemplateIndex)

    public get index(): TemplateIndex
  }

  export class TemplateComponentParameter {
    public set type(type: TemplateComponentParameterType)

    public get type(): TemplateComponentParameterType

    public set text(text: string)

    public get text(): string | undefined

    public set currency(currency: Currency)

    public get currency(): Currency | undefined

    public set dateTime(dateTime: DateTime)

    public get dateTime(): DateTime | undefined

    public set image(image: Media)

    public get image(): Media | undefined

    public set video(video: Media)

    public get video(): Media | undefined

    public set document(document: Media)

    public get document(): Media | undefined
  }

  export class Currency {
    public set code(code: string)

    public get code(): string

    public set amount1000(amount1000: number)

    public get amount1000(): number
  }

  export class DateTime {
    public set component(component: DateTimeComponent)

    public get component(): DateTimeComponent | undefined

    public set unixEpoch(unixEpoch: DateTimeEpoch)

    public get unixEpoch(): DateTimeEpoch | undefined
  }

  export class DateTimeComponent {
    public set calendar(calendar: CalendarType)

    public get calendar(): CalendarType | undefined

    public set dayOfMonth(dayOfMonth: number)

    public get dayOfMonth(): number

    public set dayOfWeek(dayOfWeek: DayOfWeek)

    public get dayOfWeek(): DayOfWeek | undefined

    public set year(year: number)

    public get year(): number | undefined

    public set month(month: number)

    public get month(): number

    public set hour(hour: number)

    public get hour(): number

    public set minute(minute: number)

    public get minute(): number
  }

  export class DateTimeEpoch {
    public set timestamp(timestamp: number)

    public get timestamp(): number
  }

  export class Contact {
    public set addresses(addresses: ContactAddress)

    public get addresses(): ContactAddress | undefined

    public set birthday(birthday: string)

    public get birthday(): string | undefined

    public set emails(emails: ContactEmail)

    public get emails(): ContactEmail | undefined

    public set name(name: ContactName)

    public get name(): ContactName | undefined

    public set org(org: ContactOrg)

    public get org(): ContactOrg | undefined

    public set phones(phones: ContactPhone)

    public get phones(): ContactPhone | undefined

    public set urls(urls: ContactUrl)

    public get urls(): ContactUrl | undefined
  }

  export class ContactAddress {
    public set street(street: string)

    public get street(): string | undefined

    public set city(city: string)

    public get city(): string | undefined

    public set state(state: string)

    public get state(): string | undefined

    public set zip(zip: string)

    public get zip(): string | undefined

    public set country(country: string)

    public get country(): string | undefined

    public set countryCode(countryCode: string)

    public get countryCode(): string | undefined

    public set type(type: ContactAddressType)

    public get type(): ContactAddressType | undefined
  }

  export class ContactEmail {
    public set email(email: string)

    public get email(): string | undefined

    public set type(type: ContactEmailType)

    public get type(): ContactEmailType | undefined
  }

  export class ContactName {
    public set formattedName(formattedName: string)

    public get formattedName(): string

    public set firstName(firstName: string)

    public get firstName(): string | undefined

    public set lastName(lastName: string)

    public get lastName(): string | undefined

    public set middleName(middleName: string)

    public get middleName(): string | undefined

    public set prefix(prefix: string)

    public get prefix(): string | undefined

    public set suffix(suffix: string)

    public get suffix(): string | undefined
  }

  export class ContactOrg {
    public set company(company: string)

    public get company(): string | undefined

    public set department(department: string)

    public get department(): string | undefined

    public set title(title: string)

    public get title(): string | undefined
  }

  export class ContactPhone {
    public set phone(phone: string)

    public get phone(): string | undefined

    public set type(type: ContactPhoneType)

    public get type(): ContactPhoneType | undefined

    public set waId(waId: string)

    public get waId(): string | undefined
  }

  export class ContactUrl {
    public set url(url: string)

    public get url(): string | undefined

    public set type(type: ContactUrlType)

    public get type(): ContactUrlType | undefined
  }

  export class Context {
    public set messageId(messageId: string)

    public get messageId(): string
  }

  export class Text {
    public set body(body: string)

    public get body(): string
  }

  export class Interactive {
    public set type(type: InteractiveType)

    public get type(): InteractiveType

    public set header(builder: Header | ((builder: HeaderBuilder) => void))

    public get header(): Header | undefined

    public set body(body: Body | ((builder: BodyBuilder) => void))

    public get body(): Body

    public set footer(footer: Footer | ((builder: FooterBuilder) => void))

    public get footer(): Footer | undefined

    public set action(action: List | ReplyButton | Product | ProductList | CatalogMessage | Flow)

    public get action(): List | ReplyButton | Product | ProductList | CatalogMessage | Flow
  }

  export class Header {
    public set type(type: HeaderType)

    public get type(): HeaderType

    public set text(text: string)

    public get text(): string | undefined

    public set image(image: HeaderImage)

    public get image(): HeaderImage | undefined

    public set video(video: HeaderVideo)

    public get video(): HeaderVideo | undefined

    public set document(document: HeaderDocument)

    public get document(): HeaderDocument | undefined
  }

  export class HeaderProvider {
    public set name(name: string)

    public get name(): string
  }

  export class HeaderImage {
    public set id(id: string)

    public get id(): string | undefined

    public set link(link: string)

    public get link(): string | undefined

    public set provider(provider: HeaderProvider)

    public get provider(): HeaderProvider | undefined
  }

  export class HeaderVideo {
    public set id(id: string)

    public get id(): string | undefined

    public set link(link: string)

    public get link(): string | undefined

    public set provider(provider: HeaderProvider)

    public get provider(): HeaderProvider | undefined
  }

  export class HeaderDocument {
    public set id(id: string)

    public get id(): string | undefined

    public set link(link: string)

    public get link(): string | undefined

    public set provider(provider: HeaderProvider)

    public get provider(): HeaderProvider | undefined

    public set fileName(fileName: string)

    public get fileName(): string | undefined
  }

  export class Body {
    public set text(text: string)

    public get text(): string
  }

  export class Footer {
    public set text(text: string)

    public get text(): string
  }

  export class List {
    public set button(button: string)

    public get button(): string

    public set sections(sections: Array<ListSection>)

    public get sections(): Array<ListSection>
  }

  export class ListSection {
    public set title(title: string)

    public get title(): string | undefined

    public set rows(rows: Array<ListSectionRow>)

    public get rows(): Array<ListSectionRow>
  }

  export class ListSectionRow {
    public set id(id: string | number)

    public get id(): string

    public set title(title: string)

    public get title(): string

    public set description(description: string)

    public get description(): string | undefined
  }

  export class ReplyButton {
    public set buttons(buttons: Array<ReplyButtonRow>)

    public get buttons(): Array<ReplyButtonRow>
  }

  export class ReplyButtonRow {
    public set type(type: 'reply')

    public get type(): 'reply'

    public set reply(reply: ReplyButtonRowReply)

    public get reply(): ReplyButtonRowReply
  }

  export class ReplyButtonRowReply {
    public set id(id: string | number)

    public get id(): string | number | undefined

    public set title(title: string)

    public get title(): string
  }

  export class Product {
    public set id(id: string | number)

    public get id(): string | number

    public set productRetailerId(productRetailerId: string)

    public get productRetailerId(): string
  }

  export class ProductList {
    public set catalogId(catalogId: string | number)

    public get catalogId(): string | number

    public set sections(sections: Array<ProductListSection>)

    public get sections(): Array<ProductListSection>
  }

  export class ProductListSection {
    public set title(title: string)

    public get title(): string

    public set productItems(productItems: Array<ProductListSectionProductItem>)

    public get productItems(): Array<ProductListSectionProductItem>
  }

  export class ProductListSectionProductItem {
    public set productRetailerId(productRetailerId: string)

    public get productRetailerId(): string
  }

  export class CatalogMessage {
    public set name(name: string)

    public get name(): string

    public set parameters(parameters: CatalogMessageParameter)

    public get parameters(): CatalogMessageParameter
  }

  export class CatalogMessageParameter {
    public set thumbnailProductRetailerId(thumbnailProductRetailerId: string)

    public get thumbnailProductRetailerId(): string
  }

  export class Flow {
    public set name(name: string)

    public get name(): string

    public set parameters(parameters: FlowParameter)

    public get parameters(): FlowParameter
  }

  export class FlowParameter {
    public set flowMessageVersion(flowMessageVersion: string)

    public get flowMessageVersion(): string

    public set flowToken(flowToken: string)

    public get flowToken(): string

    public set flowId(flowId: string)

    public get flowId(): string

    public set flowCTA(flowCTA: string)

    public get flowCTA(): string

    public set flowAction(flowAction: string)

    public get flowAction(): string

    public set flowActionPayload(flowActionPayload: FlowParameterFlowActionPayload)

    public get flowActionPayload(): FlowParameterFlowActionPayload
  }

  export class FlowParameterFlowActionPayload {
    public set screen(screen: string)

    public get screen(): string

    public set data(data: Record<string, unknown>)

    public get data(): Record<string, unknown> | undefined
  }
}
