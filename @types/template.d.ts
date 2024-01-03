declare module '@vyrnnstudios/messages' {
  import {
    Template,
    TemplateComponent,
    TemplateComponentParameter,
    Currency,
    DateTime,
    Media,
    TemplateComponentParameterType,
    TemplateIndex
  } from '@vyrnnstudios/messages';

  export class TemplateBuilder {
    public static newBuilder(): TemplateBuilder

    public static builder(): TemplateBuilder

    public next(): TemplateBuilder

    public name(name: string): TemplateBuilder

    public language(language: string): TemplateBuilder

    public components(components: Array<TemplateComponent> | ((builder: TemplateComponentBuilder) => void)): TemplateBuilder

    public namespace(namespace: string): TemplateBuilder

    public build(): Template
  }

  export class TemplateComponentBuilder {
    public static newBuilder(): TemplateComponentBuilder

    public static builder(): TemplateComponentBuilder

    public type(type: string): TemplateComponentBuilder

    public subType(subType: string): TemplateComponentBuilder

    public parameters(parameters: Array<TemplateComponentParameter> | ((builder: TemplateComponentParameterBuilder) => void)): TemplateComponentBuilder

    public index(index: TemplateIndex): TemplateComponentBuilder

    public build(): Array<TemplateComponent>
  }

  export class TemplateComponentParameterBuilder {
    public static newBuilder(): TemplateComponentParameterBuilder

    public static builder(): TemplateComponentParameterBuilder

    public type(type: TemplateComponentParameterType): TemplateComponentParameterBuilder

    public text(text: string): TemplateComponentParameterBuilder

    public currency(currency: Currency): TemplateComponentParameterBuilder

    public dateTime(dateTime: DateTime): TemplateComponentParameterBuilder

    public image(image: Media): TemplateComponentParameterBuilder

    public video(video: Media): TemplateComponentParameterBuilder

    public document(document: Media): TemplateComponentParameterBuilder

    public build(): Array<TemplateComponentParameter>
  }
}
