import { Message } from './Message.js';

export class LocalMessage extends Message{
  constructor(name, text) {
    super(name, text);

    this.side = 'local';
  }
}
