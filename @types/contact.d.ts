declare module '@x-spacy/message-builder' {
  import {
    Contact,
    ContactAddress,
    ContactEmail,
    ContactName,
    ContactOrg,
    ContactPhone,
    ContactUrl,
    ContactAddressType,
    ContactEmailType,
    ContactPhoneType,
    ContactUrlType
  } from '@x-spacy/message-builder';

  export class ContactBuilder {
    public static newBuilder(): ContactBuilder

    public static builder(): ContactBuilder

    public addresses(addresses: ContactAddress | ((builder: ContactAddressBuilder) => void)): ContactBuilder

    public birthday(birthday: string): ContactBuilder

    public emails(emails: ContactEmail | ((builder: ContactEmailBuilder) => void)): ContactBuilder

    public name(name: ContactName | ((builder: ContactNameBuilder) => void)): ContactBuilder

    public org(org: ContactOrg | ((builder: ContactOrgBuilder) => void)): ContactBuilder

    public phones(phones: ContactPhone | ((builder: ContactPhoneBuilder) => void)): ContactBuilder

    public urls(urls: ContactUrl | ((builder: ContactUrlBuilder) => void)): ContactBuilder

    public build(): Contact
  }

  export class ContactAddressBuilder {
    public static newBuilder(): ContactAddressBuilder

    public static builder(): ContactAddressBuilder

    public street(street: string): ContactAddressBuilder

    public city(city: string): ContactAddressBuilder

    public state(state: string): ContactAddressBuilder

    public zip(zip: string): ContactAddressBuilder

    public country(country: string): ContactAddressBuilder

    public countryCode(countryCode: string): ContactAddressBuilder

    public type(type: ContactAddressType): ContactAddressBuilder

    public build(): ContactAddress
  }

  export class ContactEmailBuilder {
    public static newBuilder(): ContactEmailBuilder

    public static builder(): ContactEmailBuilder

    public email(email: string): ContactEmailBuilder

    public type(type: ContactEmailType): ContactEmailBuilder

    public build(): ContactEmail
  }

  export class ContactNameBuilder {
    public static newBuilder(): ContactNameBuilder

    public static builder(): ContactNameBuilder

    public formattedName(formattedName: string): ContactNameBuilder

    public firstName(firstName: string): ContactNameBuilder

    public lastName(lastName: string): ContactNameBuilder

    public middleName(middleName: string): ContactNameBuilder

    public prefix(prefix: string): ContactNameBuilder

    public suffix(suffix: string): ContactNameBuilder

    public build(): ContactName
  }

  export class ContactOrgBuilder {
    public static newBuilder(): ContactOrgBuilder

    public static builder(): ContactOrgBuilder

    public company(company: string): ContactOrgBuilder

    public department(department: string): ContactOrgBuilder

    public title(title: string): ContactOrgBuilder

    public build(): ContactOrg
  }

  export class ContactPhoneBuilder {
    public static newBuilder(): ContactPhoneBuilder

    public static builder(): ContactPhoneBuilder

    public phone(phone: string): ContactPhoneBuilder

    public type(type: ContactPhoneType): ContactPhoneBuilder

    public waId(waId: string): ContactPhoneBuilder

    public build(): ContactPhone
  }

  export class ContactUrlBuilder {
    public static newBuilder(): ContactUrlBuilder

    public static builder(): ContactUrlBuilder

    public url(url: string): ContactUrlBuilder

    public type(type: ContactUrlType): ContactUrlBuilder

    public build(): ContactUrl
  }

}
