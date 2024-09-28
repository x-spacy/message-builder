# Message Builder

## Description

A fully typed message builder created using TypeScript. A better way to creating messages for consume the [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/api/messages).

## Installation

```bash
npm install @x-spacy/message-builder
```

## Usage

```typescript
import { MessageBuilder, MessageType } from '@x-spacy/message-builder';

const message = MessageBuilder.newBuilder()
  .to('000000000000')
  .type(MessageType.TEXT)
  .text((builder) => {
    builder.body('Hello world!');
  })
  .build();
```

## License

X-Spacy LTDA is [MIT Licensed](LICENSE).
