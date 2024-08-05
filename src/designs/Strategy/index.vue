<template>
  <div>
    <div class="text-violet-600 mb-2">策略模式示例</div>
    <p class="mb-2">原价: {{ state.price }}</p>
    <p class="mb-2">折后价: {{ discountedPrice }}</p>
    <div class="flex flex-wrap">
      <button class="m-2" @click="applyNoDiscount">无折扣</button>
      <button class="m-2" @click="applyPercentageDiscount">
        百分比折扣 (10%)
      </button>
      <button class="m-2" @click="applyFixedDiscount">固定折扣 (20元)</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { DiscountContext } from './DiscountContext';
import {
  FixedDiscount,
  NoDiscount,
  PercentageDiscount,
} from './DiscountStrategy';

const state = reactive({
  price: 100,
  discountContext: new DiscountContext(new NoDiscount()),
});

const discountedPrice = computed(() =>
  state.discountContext.calculate(state.price)
);

const applyNoDiscount = () => {
  state.discountContext.setStrategy(new NoDiscount());
};

const applyPercentageDiscount = () => {
  state.discountContext.setStrategy(new PercentageDiscount(10));
};

const applyFixedDiscount = () => {
  state.discountContext.setStrategy(new FixedDiscount(20));
};
</script>

<style lang="less" scoped></style>
