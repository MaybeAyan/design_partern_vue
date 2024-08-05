<template>
  <div>
    <div class="text-violet-600 mb-2">代理模式示例</div>
    <p class="mb-2">消息内容: {{ messageContent }}</p>
    <input v-model="newContent" placeholder="输入新消息内容" class="mb-2" />
    <button @click="updateMessage" class="mb-2 ml-4">更新消息</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Message, MessageProxy } from './Message';

const message = new Message('Hello, Proxy!');
const messageProxy = new MessageProxy(message);
const messageContent = ref(messageProxy.getContent());
const newContent = ref('');

const updateMessage = () => {
  messageProxy.setContent(newContent.value);
  messageContent.value = messageProxy.getContent();
};
</script>

<style lang="less" scoped></style>
