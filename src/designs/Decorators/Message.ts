// 定义一个消息类
export class Message {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

function formatDate(date: Date): string {
  var year = date.getFullYear()
  var month = format(date.getMonth() + 1)
  var da = format(date.getDate())
  return year + '-' + month + '-' + da
}

function format(val:number) {
  return Number(val) < 10 ? '0' + val : '' + val
}

// 定义装饰器函数
export function withTimestamp(message: Message): Message {
  const originalContent = message.getContent();
  const timestamp = formatDate(new Date());
  const newContent = `${timestamp} ${originalContent}`;
  return new Message(newContent);
}

export function withAuthor(message: Message, author: string): Message {
  const originalContent = message.getContent();
  const newContent = `${originalContent} - ${author}`;
  return new Message(newContent);
}
