<template>
  <div>
    <div class="text-violet-600 mb-4">工厂模式示例</div>
    <select v-model="selectedShape">
      <option value="circle">圆形</option>
      <option value="rectangle">矩形</option>
      <option value="triangle">三角形</option>
    </select>
    <button class="ml-4" @click="drawShape">绘制形状</button>
    <div class="mt-4">{{ res }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ShapeFactory from './ShapeFactory';

const selectedShape = ref('circle');
const res = ref('');

const drawShape = () => {
  const shape = ShapeFactory.createShape(selectedShape.value);
  if (shape) {
    res.value = shape.draw();
  } else {
    console.log('未知的形状类型');
  }
};
</script>

<style lang="less" scoped></style>
