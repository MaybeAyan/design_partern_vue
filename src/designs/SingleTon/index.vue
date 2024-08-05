<template>
  <div>
    <div class="text-violet-600 mb-4">单例模式示例</div>
    <p class="mb-6">计数: {{ count }}</p>
    <button class="mb-2" @click="increment">增加</button>
    <button class="mb-2" @click="decrement">减少</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CounterSingleton from './CounterSingleton';

const counter = CounterSingleton.getInstance();
const count = ref(counter.getCount());

const increment = () => {
  counter.increment();
  count.value = counter.getCount();
};

const decrement = () => {
  counter.decrement();
  count.value = counter.getCount();
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
