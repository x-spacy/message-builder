import { Exception } from '@x-spacy/exceptions';

export class InvalidMessageType extends Exception {
  constructor() {
    super(400, 'InvalidMessageType');
  }
}
