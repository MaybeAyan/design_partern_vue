<template>
  <div id="app">
    <div class="text-violet-600 mb-2">Vue 3 发布-订阅模式示例</div>
    <div class="flex">
      <PublisherComponent class="w-1/2" />
      <SubscriberComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PublisherComponent from './PublisherComp.vue';
import SubscriberComponent from './SubscriberComp.vue';
</script>

<style lang="less" scoped></style>
