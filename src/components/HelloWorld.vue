<template>
  <div>
    <h1>
      <a href="https://vitejs.dev/guide/features.html"> Vite </a>
      +
      <a href="https://v3.vuejs.org/">Vue</a>
      +
      <a href="https://www.typescriptlang.org/docs/"> Typescript </a>
      +
      <a href="https://eslint.org/docs/user-guide/"> ESLint </a>
      +
      <a href="https://prettier.io/docs/en/index.html"> Prettier </a>
    </h1>
    <div class="card">
      <button type="button" @click="addCount">count is {{ store.state.count }}</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();

defineProps<{ msg: string }>();

const addCount = () => {
  store.commit('addCount');
};
</script>
<style lang="scss" scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 5px;
  margin-inline: 5px;
  border-radius: 4px;
  color: #304455;
}
</style>
