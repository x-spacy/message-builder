import {
  ContactAddressType,
  ContactEmailType,
  ContactPhoneType,
  ContactUrlType
} from '@x-spacy/message-builder/enums';

export class Contact {
  #addresses?: ContactAddress;
  #birthday?: string;
  #emails?: ContactEmail;
  #name?: ContactName;
  #org?: ContactOrg;
  #phones?: ContactPhone;
  #urls?: ContactUrl;

  public set addresses(addresses: ContactAddress) {
    this.#addresses = addresses;
  }

  public get addresses(): ContactAddress | undefined {
    return this.#addresses;
  }

  public set birthday(birthday: string) {
    this.#birthday = birthday;
  }

  public get birthday(): string | undefined {
    return this.#birthday;
  }

  public set emails(emails: ContactEmail) {
    this.#emails = emails;
  }

  public get emails(): ContactEmail | undefined {
    return this.#emails;
  }

  public set name(name: ContactName) {
    this.#name = name;
  }

  public get name(): ContactName | undefined {
    return this.#name;
  }

  public set org(org: ContactOrg) {
    this.#org = org;
  }

  public get org(): ContactOrg | undefined {
    return this.#org;
  }

  public set phones(phones: ContactPhone) {
    this.#phones = phones;
  }

  public get phones(): ContactPhone | undefined {
    return this.#phones;
  }

  public set urls(urls: ContactUrl) {
    this.#urls = urls;
  }

  public get urls(): ContactUrl | undefined {
    return this.#urls;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#addresses) {
      record['addresses'] = this.#addresses;
    }

    if (this.#birthday) {
      record['birthday'] = this.#birthday;
    }

    if (this.#emails) {
      record['emails'] = this.#emails;
    }

    if (this.#name) {
      record['name'] = this.#name;
    }

    if (this.#org) {
      record['org'] = this.#org;
    }

    if (this.#phones) {
      record['phones'] = this.#phones;
    }

    if (this.#urls) {
      record['urls'] = this.#urls;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactAddress {
  #street?: string;
  #city?: string;
  #state?: string;
  #zip?: string;
  #country?: string;
  #countryCode?: string;
  #type?: ContactAddressType;

  public set street(street: string) {
    this.#street = street;
  }

  public get street(): string | undefined {
    return this.#street;
  }

  public set city(city: string) {
    this.#city = city;
  }

  public get city(): string | undefined {
    return this.#city;
  }

  public set state(state: string) {
    this.#state = state;
  }

  public get state(): string | undefined {
    return this.#state;
  }

  public set zip(zip: string) {
    this.#zip = zip;
  }

  public get zip(): string | undefined {
    return this.#zip;
  }

  public set country(country: string) {
    this.#country = country;
  }

  public get country(): string | undefined {
    return this.#country;
  }

  public set countryCode(countryCode: string) {
    this.#countryCode = countryCode;
  }

  public get countryCode(): string | undefined {
    return this.#countryCode;
  }

  public set type(type: ContactAddressType) {
    this.#type = type;
  }

  public get type(): ContactAddressType | undefined {
    return this.#type;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#street) {
      record['street'] = this.#street;
    }

    if (this.#city) {
      record['city'] = this.#city;
    }

    if (this.#state) {
      record['state'] = this.#state;
    }

    if (this.#zip) {
      record['zip'] = this.#zip;
    }

    if (this.#country) {
      record['country'] = this.#country;
    }

    if (this.#countryCode) {
      record['country_code'] = this.#countryCode;
    }

    if (this.#type) {
      record['type'] = this.#type;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactEmail {
  #email?: string;
  #type?: ContactEmailType;

  public set email(email: string) {
    this.#email = email;
  }

  public get email(): string | undefined {
    return this.#email;
  }

  public set type(type: ContactEmailType) {
    this.#type = type;
  }

  public get type(): ContactEmailType | undefined {
    return this.#type;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#email) {
      record['email'] = this.#email;
    }

    if (this.#type) {
      record['type'] = this.#type;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactName {
  #formattedName: string;
  #firstName?: string;
  #lastName?: string;
  #middleName?: string;
  #prefix?: string;
  #suffix?: string;

  public set formattedName(formattedName: string) {
    this.#formattedName = formattedName;
  }

  public get formattedName(): string {
    return this.#formattedName;
  }

  public set firstName(firstName: string) {
    this.#firstName = firstName;
  }

  public get firstName(): string | undefined {
    return this.#firstName;
  }

  public set lastName(lastName: string) {
    this.#lastName = lastName;
  }

  public get lastName(): string | undefined {
    return this.#lastName;
  }

  public set middleName(middleName: string) {
    this.#middleName = middleName;
  }

  public get middleName(): string | undefined {
    return this.#middleName;
  }

  public set prefix(prefix: string) {
    this.#prefix = prefix;
  }

  public get prefix(): string | undefined {
    return this.#prefix;
  }

  public set suffix(suffix: string) {
    this.#suffix = suffix;
  }

  public get suffix(): string | undefined {
    return this.#suffix;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    record['formatted_name'] = this.#formattedName;

    if (this.#firstName) {
      record['first_name'] = this.#firstName;
    }

    if (this.#lastName) {
      record['last_name'] = this.#lastName;
    }

    if (this.#middleName) {
      record['middle_name'] = this.#middleName;
    }

    if (this.#prefix) {
      record['prefix'] = this.#prefix;
    }

    if (this.#suffix) {
      record['suffix'] = this.#suffix;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactOrg {
  #company?: string;
  #department?: string;
  #title?: string;

  public set company(company: string) {
    this.#company = company;
  }

  public get company(): string | undefined {
    return this.#company;
  }

  public set department(department: string) {
    this.#department = department;
  }

  public get department(): string | undefined {
    return this.#department;
  }

  public set title(title: string) {
    this.#title = title;
  }

  public get title(): string | undefined {
    return this.#title;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#company) {
      record['company'] = this.#company;
    }

    if (this.#department) {
      record['department'] = this.#department;
    }

    if (this.#title) {
      record['title'] = this.#title;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactPhone {
  #phone?: string;
  #type?: ContactPhoneType;
  #waId?: string;

  public set phone(phone: string) {
    this.#phone = phone;
  }

  public get phone(): string | undefined {
    return this.#phone;
  }

  public set type(type: ContactPhoneType) {
    this.#type = type;
  }

  public get type(): ContactPhoneType | undefined {
    return this.#type;
  }

  public set waId(waId: string) {
    this.#waId = waId;
  }

  public get waId(): string | undefined {
    return this.#waId;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#phone) {
      record['phone'] = this.#phone;
    }

    if (this.#type) {
      record['type'] = this.#type;
    }

    if (this.#waId) {
      record['wa_id'] = this.#waId;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}

export class ContactUrl {
  #url?: string;
  #type?: ContactUrlType;

  public set url(url: string) {
    this.#url = url;
  }

  public get url(): string | undefined {
    return this.#url;
  }

  public set type(type: ContactUrlType) {
    this.#type = type;
  }

  public get type(): ContactUrlType | undefined {
    return this.#type;
  }

  public toJSON(): Record<string, unknown> {
    const record: Record<string, unknown> = {};

    if (this.#url) {
      record['url'] = this.#url;
    }

    if (this.#type) {
      record['type'] = this.#type;
    }

    return record;
  }

  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }
}
