<template>
  <div>
    <div class="text-violet-600 mb-4">观察者模式示例 - 天气系统</div>
    <input v-model.number="temperature" type="number" placeholder="设置温度" />
    <p class="mb-2">{{ phoneDisplay.temperature }}</p>
    <p class="mb-2">{{ windowDisplay.temperature }}</p>
    <button @click="setTemperature">更新温度</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import WeatherStation from './WeatherStation';
import { PhoneDisplay, WindowDisplay } from './Observer';

const temperature = ref(0);
const weatherStation = new WeatherStation();
const phoneDisplay = ref(new PhoneDisplay());
const windowDisplay = ref(new WindowDisplay());

onMounted(() => {
  weatherStation.addObserver(phoneDisplay.value);
  weatherStation.addObserver(windowDisplay.value);
});

onUnmounted(() => {
  weatherStation.removeObserver(phoneDisplay.value);
  weatherStation.removeObserver(windowDisplay.value);
});

const setTemperature = () => {
  weatherStation.setTemperature(temperature.value);
};
</script>

<style lang="less" scoped></style>
