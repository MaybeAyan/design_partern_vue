<template>
  <div>
    <div class="mb-2">订阅者组件</div>
    <p v-if="eventData">{{ eventData.message }}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import eventBus from './Bus';

const eventData = ref<{ message: string } | null>(null);

const handleEvent = (data: { message: string }) => {
  eventData.value = data;
};

onMounted(() => {
  eventBus.subscribe('custom-event', handleEvent);
});

onUnmounted(() => {
  eventBus.unsubscribe('custom-event', handleEvent);
});
</script>

<style lang="less" scoped></style>
