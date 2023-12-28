/// <reference path="text.d.ts" />
/// <reference path="interactive.d.ts" />
/// <reference path="header.d.ts" />
/// <reference path="body.d.ts" />
/// <reference path="footer.d.ts" />
/// <reference path="template.d.ts" />
/// <reference path="context.d.ts" />
/// <reference path="contact.d.ts" />
/// <reference path="media.d.ts" />
/// <reference path="location.d.ts" />

declare module '@vyrnnstudios/messages/build' {
  export * from '@vyrnnstudios/messages/build/HeaderBuilder';
  export * from '@vyrnnstudios/messages/build/BodyBuilder';
  export * from '@vyrnnstudios/messages/build/FooterBuilder';

  export * from '@vyrnnstudios/messages/build/TextBuilder';

  export * from '@vyrnnstudios/messages/build/InteractiveBuilder';

  export * from '@vyrnnstudios/messages/build/TemplateBuilder';

  export * from '@vyrnnstudios/messages/build/ContextBuilder';

  export * from '@vyrnnstudios/messages/build/ContactBuilder';

  export * from '@vyrnnstudios/messages/build/LocationBuilder';

  export * from '@vyrnnstudios/messages/build/MediaBuilder';
}
