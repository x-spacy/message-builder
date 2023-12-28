import {
  ContactAddressType,
  ContactEmailType,
  ContactPhoneType,
  ContactUrlType
} from '@vyrnnstudios/messages/enums';

export class Contact {
  private _addresses?: ContactAddress;
  private _birthday?: string;
  private _emails?: ContactEmail;
  private _name?: ContactName;
  private _org?: ContactOrg;
  private _phones?: ContactPhone;
  private _urls?: ContactUrl;

  public set addresses(addresses: ContactAddress) {
    this._addresses = addresses;
  }

  public get addresses(): ContactAddress | undefined {
    return this._addresses;
  }

  public set birthday(birthday: string) {
    this._birthday = birthday;
  }

  public get birthday(): string | undefined {
    return this._birthday;
  }

  public set emails(emails: ContactEmail) {
    this._emails = emails;
  }

  public get emails(): ContactEmail | undefined {
    return this._emails;
  }

  public set name(name: ContactName) {
    this._name = name;
  }

  public get name(): ContactName | undefined {
    return this._name;
  }

  public set org(org: ContactOrg) {
    this._org = org;
  }

  public get org(): ContactOrg | undefined {
    return this._org;
  }

  public set phones(phones: ContactPhone) {
    this._phones = phones;
  }

  public get phones(): ContactPhone | undefined {
    return this._phones;
  }

  public set urls(urls: ContactUrl) {
    this._urls = urls;
  }

  public get urls(): ContactUrl | undefined {
    return this._urls;
  }
}

export class ContactAddress {
  private _street?: string;
  private _city?: string;
  private _state?: string;
  private _zip?: string;
  private _country?: string;
  private _countryCode?: string;
  private _type?: ContactAddressType;

  public set street(street: string) {
    this._street = street;
  }

  public get street(): string | undefined {
    return this._street;
  }

  public set city(city: string) {
    this._city = city;
  }

  public get city(): string | undefined {
    return this._city;
  }

  public set state(state: string) {
    this._state = state;
  }

  public get state(): string | undefined {
    return this._state;
  }

  public set zip(zip: string) {
    this._zip = zip;
  }

  public get zip(): string | undefined {
    return this._zip;
  }

  public set country(country: string) {
    this._country = country;
  }

  public get country(): string | undefined {
    return this._country;
  }

  public set countryCode(countryCode: string) {
    this._countryCode = countryCode;
  }

  public get countryCode(): string | undefined {
    return this._countryCode;
  }

  public set type(type: ContactAddressType) {
    this._type = type;
  }

  public get type(): ContactAddressType | undefined {
    return this._type;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._street) {
      record['street'] = this._street;
    }

    if (this._city) {
      record['city'] = this._city;
    }

    if (this._state) {
      record['state'] = this._state;
    }

    if (this._zip) {
      record['zip'] = this._zip;
    }

    if (this._country) {
      record['country'] = this._country;
    }

    if (this._countryCode) {
      record['country_code'] = this._countryCode;
    }

    if (this._type) {
      record['type'] = this._type;
    }

    return record;
  }
}

export class ContactEmail {
  private _email?: string;
  private _type?: ContactEmailType;

  public set email(email: string) {
    this._email = email;
  }

  public get email(): string | undefined {
    return this._email;
  }

  public set type(type: ContactEmailType) {
    this._type = type;
  }

  public get type(): ContactEmailType | undefined {
    return this._type;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._email) {
      record['email'] = this._email;
    }

    if (this._type) {
      record['type'] = this._type;
    }

    return record;
  }
}

export class ContactName {
  private _formattedName: string;
  private _firstName?: string;
  private _lastName?: string;
  private _middleName?: string;
  private _prefix?: string;
  private _suffix?: string;

  public set formattedName(formattedName: string) {
    this._formattedName = formattedName;
  }

  public get formattedName(): string {
    return this._formattedName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get firstName(): string | undefined {
    return this._firstName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get lastName(): string | undefined {
    return this._lastName;
  }

  public set middleName(middleName: string) {
    this._middleName = middleName;
  }

  public get middleName(): string | undefined {
    return this._middleName;
  }

  public set prefix(prefix: string) {
    this._prefix = prefix;
  }

  public get prefix(): string | undefined {
    return this._prefix;
  }

  public set suffix(suffix: string) {
    this._suffix = suffix;
  }

  public get suffix(): string | undefined {
    return this._suffix;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    record['formatted_name'] = this._formattedName;

    if (this._firstName) {
      record['first_name'] = this._firstName;
    }

    if (this._lastName) {
      record['last_name'] = this._lastName;
    }

    if (this._middleName) {
      record['middle_name'] = this._middleName;
    }

    if (this._prefix) {
      record['prefix'] = this._prefix;
    }

    if (this._suffix) {
      record['suffix'] = this._suffix;
    }

    return record;
  }
}

export class ContactOrg {
  private _company?: string;
  private _department?: string;
  private _title?: string;

  public set company(company: string) {
    this._company = company;
  }

  public get company(): string | undefined {
    return this._company;
  }

  public set department(department: string) {
    this._department = department;
  }

  public get department(): string | undefined {
    return this._department;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get title(): string | undefined {
    return this._title;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._company) {
      record['company'] = this._company;
    }

    if (this._department) {
      record['department'] = this._department;
    }

    if (this._title) {
      record['title'] = this._title;
    }

    return record;
  }
}

export class ContactPhone {
  private _phone?: string;
  private _type?: ContactPhoneType;
  private _waId?: string;

  public set phone(phone: string) {
    this._phone = phone;
  }

  public get phone(): string | undefined {
    return this._phone;
  }

  public set type(type: ContactPhoneType) {
    this._type = type;
  }

  public get type(): ContactPhoneType | undefined {
    return this._type;
  }

  public set waId(waId: string) {
    this._waId = waId;
  }

  public get waId(): string | undefined {
    return this._waId;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._phone) {
      record['phone'] = this._phone;
    }

    if (this._type) {
      record['type'] = this._type;
    }

    if (this._waId) {
      record['wa_id'] = this._waId;
    }

    return record;
  }
}

export class ContactUrl {
  private _url?: string;
  private _type?: ContactUrlType;

  public set url(url: string) {
    this._url = url;
  }

  public get url(): string | undefined {
    return this._url;
  }

  public set type(type: ContactUrlType) {
    this._type = type;
  }

  public get type(): ContactUrlType | undefined {
    return this._type;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const record: Record<string, unknown> = {};

    if (this._url) {
      record['url'] = this._url;
    }

    if (this._type) {
      record['type'] = this._type;
    }

    return record;
  }
}
