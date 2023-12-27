declare module '@vyrnnstudios/messages/enums' {
  export enum MessageType {
    TEXT = 'text',
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    LOCATION = 'location',
    STICKER = 'sticker',
    TEMPLATE = 'template',
    CONTACTS = 'contacts',
    DOCUMENT = 'document',
    INTERACTIVE = 'interactive',
    UNKNOWN = 'unknown'
  }

  export enum RecipientType {
    INDIVIDUAL = 'individual'
  }

  export enum InteractiveType {
    LIST = 'list',
    BUTTON = 'button',
    PRODUCT = 'product',
    PRODUCT_LIST = 'product_list',
    CATALOG_MESSAGE = 'catalog_message',
    FLOW = 'flow'
  }

  export enum HeaderType {
    TEXT = 'text',
    IMAGE = 'image',
    VIDEO = 'video',
    DOCUMENT = 'document'
  }

  export enum TemplateIndex {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9
  }

  export enum TemplateComponentParameterType {
    TEXT = 'text',
    CURRENCY = 'currency',
    DATE_TIME = 'date_time',
    IMAGE = 'image',
    VIDEO = 'video',
    DOCUMENT = 'document'
  }

  export enum CalendarType {
    GREGORIAN = 'gregorian',
    SOLAR_HIJRI = 'solar_hijri'
  }

  export enum DayOfWeek {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7
  }

  export enum MessagingProduct {
    WHATSAPP = 'whatsapp'
  }

  export enum ContactAddressType {
    HOME = 'HOME',
    WORK = 'WORK'
  }

  export enum ContactEmailType {
    HOME = 'HOME',
    WORK = 'WORK'
  }

  export enum ContactOrgType {
    CELL = 'CELL',
    MAIN = 'MAIN',
    IPHONE = 'IPHONE',
    HOME = 'HOME',
    WORK = 'WORK'
  }

  export enum ContactUrlType {
    HOME = 'HOME',
    WORK = 'WORK'
  }
}
