class Message {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }
}

class MessageProxy {
  private message: Message;

  constructor(message: Message) {
    this.message = message;
  }

  getContent(): string {
    console.log('Proxy: 获取消息内容');
    return this.message.getContent();
  }

  setContent(content: string): void {
    console.log('Proxy: 设置消息内容');
    this.message.setContent(content);
  }
}

export { Message, MessageProxy };
