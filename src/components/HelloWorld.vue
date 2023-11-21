<template>
  <div>
    <div class="card">
      {{ msg }}
      <n-button type="info" class="code" text @click="addCount"> count is {{ baseStore.count }} </n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useBaseStore } from '@/store';

const baseStore = useBaseStore();

defineProps<{
  msg?: string;
}>();

const addCount = () => {
  baseStore.increment();
};
</script>
<style lang="less" scoped>
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
