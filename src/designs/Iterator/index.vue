<template>
  <div>
    <div class="text-violet-600 mb-2">迭代器模式示例</div>
    <ul>
      <li v-for="(message, index) in displayedMessages" :key="index">
        {{ message.getContent() }}
      </li>
    </ul>
    <button @click="loadMoreMessages" :disabled="!hasMoreMessages">
      加载更多消息
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Message, MessageCollection } from './IteratorMessage';

const messageCollection = new MessageCollection();
messageCollection.addMessage(new Message('Hello, World!'));
messageCollection.addMessage(new Message('Hello, Vue!'));
messageCollection.addMessage(new Message('Hello, Node!'));
messageCollection.addMessage(new Message('Hello, Cpp!'));

const iterator = messageCollection.createIterator();
const displayedMessages = ref<Message[]>([]);

const loadMoreMessages = () => {
  const messagesToLoad = 2;
  for (let i = 0; i < messagesToLoad; i++) {
    const message = iterator.next();
    if (message) {
      displayedMessages.value.push(message);
    } else {
      break;
    }
  }
};

const hasMoreMessages = ref(iterator.hasNext());

const updateHasMoreMessages = () => {
  hasMoreMessages.value = iterator.hasNext();
};

loadMoreMessages();
updateHasMoreMessages();
</script>

<style lang="less" scoped></style>
