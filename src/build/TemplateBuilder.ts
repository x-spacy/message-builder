import { Template, TemplateComponent, TemplateComponentParameter } from '@vyrnnstudios/messages/data/Template';
import { Currency } from '@vyrnnstudios/messages/data/Currency';
import { DateTime } from '@vyrnnstudios/messages/data/DateTime';
import { Media } from '@vyrnnstudios/messages/data/Media';

import { TemplateComponentParameterType, TemplateIndex } from '@vyrnnstudios/messages/enums';

export class TemplateBuilder {
  private template: Template;

  constructor() {
    this.template = new Template();
  }

  public static newBuilder(): TemplateBuilder {
    return new TemplateBuilder();
  }

  public static builder(): TemplateBuilder {
    return TemplateBuilder.newBuilder();
  }

  public append(template: Template): TemplateBuilder {
    this.template = template;
    return this;
  }

  public name(name: string): TemplateBuilder {
    this.template.name = name;
    return this;
  }

  public language(language: string): TemplateBuilder {
    this.template.language = language;
    return this;
  }

  public components(components: Array<TemplateComponent> | ((builder: TemplateComponentBuilder) => void)): TemplateBuilder {
    const templateComponentBuilder = TemplateComponentBuilder.newBuilder();

    if (components instanceof Array) {
      templateComponentBuilder.append(components);
    }

    if (components instanceof Function) {
      components(templateComponentBuilder);
    }

    this.template.components = templateComponentBuilder.build();

    return this;
  }

  public namespace(namespace: string): TemplateBuilder {
    this.template.namespace = namespace;
    return this;
  }

  public build(): Template {
    return this.template;
  }
}

export class TemplateComponentBuilder {
  private templateComponents: Array<TemplateComponent>;

  private templateComponent: TemplateComponent;

  constructor() {
    this.templateComponents = [];

    this.templateComponent = new TemplateComponent();
  }

  public static newBuilder(): TemplateComponentBuilder {
    return new TemplateComponentBuilder();
  }

  public static builder(): TemplateComponentBuilder {
    return TemplateComponentBuilder.newBuilder();
  }

  public append(templateComponents: Array<TemplateComponent>): TemplateComponentBuilder {
    this.templateComponents.push(...templateComponents);
    return this;
  }

  public type(type: string): TemplateComponentBuilder {
    this.templateComponent.type = type;
    return this;
  }

  public subType(subType: string): TemplateComponentBuilder {
    this.templateComponent.subType = subType;
    return this;
  }

  public parameters(parameters: Array<TemplateComponentParameter> | ((builder: TemplateComponentParameterBuilder) => void)): TemplateComponentBuilder {
    const templateComponentParameterBuilder = TemplateComponentParameterBuilder.newBuilder();

    if (parameters instanceof Array) {
      templateComponentParameterBuilder.append(parameters);
    }

    if (parameters instanceof Function) {
      parameters(templateComponentParameterBuilder);
    }

    this.templateComponent.parameters = templateComponentParameterBuilder.build();

    return this;
  }

  public index(index: TemplateIndex): TemplateComponentBuilder {
    this.templateComponent.index = index;
    return this;
  }

  public build(): Array<TemplateComponent> {
    if (this.templateComponents.indexOf(this.templateComponent) === -1) {
      this.templateComponents.push(this.templateComponent);
    }

    return this.templateComponents;
  }
}

export class TemplateComponentParameterBuilder {
  private templateComponentParameters: Array<TemplateComponentParameter>;

  private templateComponentParameter: TemplateComponentParameter;

  constructor() {
    this.templateComponentParameters = [];

    this.templateComponentParameter = new TemplateComponentParameter();
  }

  public static newBuilder(): TemplateComponentParameterBuilder {
    return new TemplateComponentParameterBuilder();
  }

  public static builder(): TemplateComponentParameterBuilder {
    return TemplateComponentParameterBuilder.newBuilder();
  }

  public append(templateComponentParameters: Array<TemplateComponentParameter>): TemplateComponentParameterBuilder {
    this.templateComponentParameters.push(...templateComponentParameters);
    return this;
  }

  public type(type: TemplateComponentParameterType): TemplateComponentParameterBuilder {
    this.templateComponentParameter.type = type;
    return this;
  }

  public text(text: string): TemplateComponentParameterBuilder {
    this.templateComponentParameter.text = text;
    return this;
  }

  public currency(currency: Currency): TemplateComponentParameterBuilder {
    this.templateComponentParameter.currency = currency;
    return this;
  }

  public dateTime(dateTime: DateTime): TemplateComponentParameterBuilder {
    this.templateComponentParameter.dateTime = dateTime;
    return this;
  }

  public image(image: Media): TemplateComponentParameterBuilder {
    this.templateComponentParameter.image = image;
    return this;
  }

  public video(video: Media): TemplateComponentParameterBuilder {
    this.templateComponentParameter.video = video;
    return this;
  }

  public document(document: Media): TemplateComponentParameterBuilder {
    this.templateComponentParameter.document = document;
    return this;
  }

  public build(): Array<TemplateComponentParameter> {
    if (this.templateComponentParameters.indexOf(this.templateComponentParameter) === -1) {
      this.templateComponentParameters.push(this.templateComponentParameter);
    }

    return this.templateComponentParameters;
  }
}
