<template>
  <div>
    <div class="mb-2">发布者组件</div>
    <button @click="publishEvent">发布事件</button>
  </div>
</template>

<script lang="ts" setup>
import EventBus from './Bus';

const publishEvent = () => {
  EventBus.publish('custom-event', {
    message: 'Hello! 来自发布者',
  });
};
</script>

<style lang="less" scoped></style>
