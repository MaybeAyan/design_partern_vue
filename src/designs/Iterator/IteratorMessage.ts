class Message {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

class MessageCollection {
  private messages: Message[] = [];

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  createIterator(): MessageIterator {
    return new MessageIterator(this);
  }
}

class MessageIterator {
  private collection: MessageCollection;
  private index: number = 0;

  constructor(collection: MessageCollection) {
    this.collection = collection;
  }

  next(): Message | null {
    if (this.hasNext()) {
      return this.collection.getMessages()[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.collection.getMessages().length;
  }
}

export { Message, MessageCollection, MessageIterator };
