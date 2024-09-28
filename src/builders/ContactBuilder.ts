import {
  ContactAddressType,
  ContactEmailType,
  ContactPhoneType,
  ContactUrlType
} from '@x-spacy/message-builder/enums';

import {
  Contact,
  ContactAddress,
  ContactEmail,
  ContactName,
  ContactOrg,
  ContactPhone,
  ContactUrl
} from '@x-spacy/message-builder/data/Contact';

export class ContactBuilder {
  private contact: Contact;

  constructor() {
    this.contact = new Contact();
  }

  public static newBuilder(): ContactBuilder {
    return new ContactBuilder();
  }

  public static builder(): ContactBuilder {
    return ContactBuilder.newBuilder();
  }

  public append(contact: Contact): ContactBuilder {
    this.contact = contact;
    return this;
  }

  public addresses(addresses: ContactAddress | ((builder: ContactAddressBuilder) => void)): ContactBuilder {
    const contactAddressBuilder = ContactAddressBuilder.newBuilder();

    if (addresses instanceof ContactAddress) {
      contactAddressBuilder.append(addresses);
    }

    if (addresses instanceof Function) {
      addresses(contactAddressBuilder);
    }

    this.contact.addresses = contactAddressBuilder.build();

    return this;
  }

  public birthday(birthday: string): ContactBuilder {
    this.contact.birthday = birthday;
    return this;
  }

  public emails(emails: ContactEmail | ((builder: ContactEmailBuilder) => void)): ContactBuilder {
    const contactEmailBuilder = ContactEmailBuilder.newBuilder();

    if (emails instanceof ContactEmail) {
      contactEmailBuilder.append(emails);
    }

    if (emails instanceof Function) {
      emails(contactEmailBuilder);
    }

    this.contact.emails = contactEmailBuilder.build();

    return this;
  }

  public name(name: ContactName | ((builder: ContactNameBuilder) => void)): ContactBuilder {
    const contactNameBuilder = ContactNameBuilder.newBuilder();

    if (name instanceof ContactName) {
      contactNameBuilder.append(name);
    }

    if (name instanceof Function) {
      name(contactNameBuilder);
    }

    this.contact.name = contactNameBuilder.build();

    return this;
  }

  public org(org: ContactOrg | ((builder: ContactOrgBuilder) => void)): ContactBuilder {
    const contactOrgBuilder = ContactOrgBuilder.newBuilder();

    if (org instanceof ContactOrg) {
      contactOrgBuilder.append(org);
    }

    if (org instanceof Function) {
      org(contactOrgBuilder);
    }

    this.contact.org = contactOrgBuilder.build();

    return this;
  }

  public phones(phones: ContactPhone | ((builder: ContactPhoneBuilder) => void)): ContactBuilder {
    const contactPhoneBuilder = ContactPhoneBuilder.newBuilder();

    if (phones instanceof ContactPhone) {
      contactPhoneBuilder.append(phones);
    }

    if (phones instanceof Function) {
      phones(contactPhoneBuilder);
    }

    this.contact.phones = contactPhoneBuilder.build();

    return this;
  }

  public urls(urls: ContactUrl | ((builder: ContactUrlBuilder) => void)): ContactBuilder {
    const contactUrlBuilder = ContactUrlBuilder.newBuilder();

    if (urls instanceof ContactUrl) {
      contactUrlBuilder.append(urls);
    }

    if (urls instanceof Function) {
      urls(contactUrlBuilder);
    }

    this.contact.urls = contactUrlBuilder.build();

    return this;
  }

  public build(): Contact {
    return this.contact;
  }
}

export class ContactAddressBuilder {
  private contactAddress: ContactAddress;

  constructor() {
    this.contactAddress = new ContactAddress();
  }

  public static newBuilder(): ContactAddressBuilder {
    return new ContactAddressBuilder();
  }

  public static builder(): ContactAddressBuilder {
    return ContactAddressBuilder.newBuilder();
  }

  public append(address: ContactAddress): ContactAddressBuilder {
    this.contactAddress = address;
    return this;
  }

  public street(street: string): ContactAddressBuilder {
    this.contactAddress.street = street;
    return this;
  }

  public city(city: string): ContactAddressBuilder {
    this.contactAddress.city = city;
    return this;
  }

  public state(state: string): ContactAddressBuilder {
    this.contactAddress.state = state;
    return this;
  }

  public zip(zip: string): ContactAddressBuilder {
    this.contactAddress.zip = zip;
    return this;
  }

  public country(country: string): ContactAddressBuilder {
    this.contactAddress.country = country;
    return this;
  }

  public countryCode(countryCode: string): ContactAddressBuilder {
    this.contactAddress.countryCode = countryCode;
    return this;
  }

  public type(type: ContactAddressType): ContactAddressBuilder {
    this.contactAddress.type = type;
    return this;
  }

  public build(): ContactAddress {
    return this.contactAddress;
  }
}

export class ContactEmailBuilder {
  private contactEmail: ContactEmail;

  constructor() {
    this.contactEmail = new ContactEmail();
  }

  public static newBuilder(): ContactEmailBuilder {
    return new ContactEmailBuilder();
  }

  public static builder(): ContactEmailBuilder {
    return ContactEmailBuilder.newBuilder();
  }

  public append(email: ContactEmail): ContactEmailBuilder {
    this.contactEmail = email;
    return this;
  }

  public email(email: string): ContactEmailBuilder {
    this.contactEmail.email = email;
    return this;
  }

  public type(type: ContactEmailType): ContactEmailBuilder {
    this.contactEmail.type = type;
    return this;
  }

  public build(): ContactEmail {
    return this.contactEmail;
  }
}

export class ContactNameBuilder {
  private contactName: ContactName;

  constructor() {
    this.contactName = new ContactName();
  }

  public append(name: ContactName): ContactNameBuilder {
    this.contactName = name;
    return this;
  }

  public static newBuilder(): ContactNameBuilder {
    return new ContactNameBuilder();
  }

  public static builder(): ContactNameBuilder {
    return ContactNameBuilder.newBuilder();
  }

  public formattedName(formattedName: string): ContactNameBuilder {
    this.contactName.formattedName = formattedName;
    return this;
  }

  public firstName(firstName: string): ContactNameBuilder {
    this.contactName.firstName = firstName;
    return this;
  }

  public lastName(lastName: string): ContactNameBuilder {
    this.contactName.lastName = lastName;
    return this;
  }

  public middleName(middleName: string): ContactNameBuilder {
    this.contactName.middleName = middleName;
    return this;
  }

  public prefix(prefix: string): ContactNameBuilder {
    this.contactName.prefix = prefix;
    return this;
  }

  public suffix(suffix: string): ContactNameBuilder {
    this.contactName.suffix = suffix;
    return this;
  }

  public build(): ContactName {
    return this.contactName;
  }
}

export class ContactOrgBuilder {
  private contactOrg: ContactOrg;

  constructor() {
    this.contactOrg = new ContactOrg();
  }

  public static newBuilder(): ContactOrgBuilder {
    return new ContactOrgBuilder();
  }

  public static builder(): ContactOrgBuilder {
    return ContactOrgBuilder.newBuilder();
  }

  public append(org: ContactOrg): ContactOrgBuilder {
    this.contactOrg = org;
    return this;
  }

  public company(company: string): ContactOrgBuilder {
    this.contactOrg.company = company;
    return this;
  }

  public department(department: string): ContactOrgBuilder {
    this.contactOrg.department = department;
    return this;
  }

  public title(title: string): ContactOrgBuilder {
    this.contactOrg.title = title;
    return this;
  }

  public build(): ContactOrg {
    return this.contactOrg;
  }
}

export class ContactPhoneBuilder {
  private contactPhone: ContactPhone;

  constructor() {
    this.contactPhone = new ContactPhone();
  }

  public static newBuilder(): ContactPhoneBuilder {
    return new ContactPhoneBuilder();
  }

  public static builder(): ContactPhoneBuilder {
    return ContactPhoneBuilder.newBuilder();
  }

  public append(phone: ContactPhone): ContactPhoneBuilder {
    this.contactPhone = phone;
    return this;
  }

  public phone(phone: string): ContactPhoneBuilder {
    this.contactPhone.phone = phone;
    return this;
  }

  public type(type: ContactPhoneType): ContactPhoneBuilder {
    this.contactPhone.type = type;
    return this;
  }

  public waId(waId: string): ContactPhoneBuilder {
    this.contactPhone.waId = waId;
    return this;
  }

  public build(): ContactPhone {
    return this.contactPhone;
  }
}

export class ContactUrlBuilder {
  private contactUrl: ContactUrl;

  constructor() {
    this.contactUrl = new ContactUrl();
  }

  public static newBuilder(): ContactUrlBuilder {
    return new ContactUrlBuilder();
  }

  public static builder(): ContactUrlBuilder {
    return ContactUrlBuilder.newBuilder();
  }

  public append(url: ContactUrl): ContactUrlBuilder {
    this.contactUrl = url;
    return this;
  }

  public url(url: string): ContactUrlBuilder {
    this.contactUrl.url = url;
    return this;
  }

  public type(type: ContactUrlType): ContactUrlBuilder {
    this.contactUrl.type = type;
    return this;
  }

  public build(): ContactUrl {
    return this.contactUrl;
  }
}
