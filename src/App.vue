<template>
  <div class="flex p-4 m-4 flex-wrap items-center justify-center">
    <div class="designs">
      <StrategyView />
    </div>
    <div class="designs">
      <SingletonView />
    </div>
    <div class="designs">
      <DecoratorView />
    </div>
    <div class="designs">
      <ProxyView />
    </div>
    <div class="designs">
      <IteratorView />
    </div>
    <div class="designs">
      <EventBusView />
    </div>
    <div class="designs">
      <FactoryView />
    </div>
    <div class="designs">
      <ObserverView />
    </div>
  </div>
</template>

<script setup lang="ts">
import StrategyView from './designs/Strategy/index.vue';
import SingletonView from './designs/SingleTon/index.vue';
import DecoratorView from './designs/Decorators/index.vue';
import ProxyView from './designs/Proxy/index.vue';
import IteratorView from './designs/Iterator/index.vue';
import EventBusView from './designs/EventBus/index.vue';
import FactoryView from './designs/Factory/index.vue';
import ObserverView from './designs/Observer/index.vue';
</script>

<style scoped lang="less">
.designs {
  @apply w-1/4 border m-4 p-4 rounded;
  height: 220px;
}
</style>
