<template>
  <div>
    <div class="text-violet-600 mb-2">装饰器模式示例</div>
    <p class="mb-2">原始消息: {{ originalMessage.getContent() }}</p>
    <p class="mb-2">带时间戳的消息: {{ timestampedMessage.getContent() }}</p>
    <p class="mb-2">带作者的消息: {{ authoredMessage.getContent() }}</p>
  </div>
</template>

<script lang="ts" setup>
import { Message, withAuthor, withTimestamp } from './Message';

const originalMessage = new Message('Hello, World!');
const timestampedMessage = withTimestamp(originalMessage);
const authoredMessage = withAuthor(originalMessage, 'Ayan');
</script>

<style lang="less" scoped></style>
