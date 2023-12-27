import { Exception } from '@somosprte/exceptions';

export class InvalidMessageType extends Exception {
  constructor() {
    super('InvalidMessageType', 400);
  }
}
