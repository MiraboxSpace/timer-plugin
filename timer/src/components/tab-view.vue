<!-- 请勿修改此文件 -->
<script setup lang="ts">
  defineProps<{ label: string; width?: string; alignItems?: string }>();
</script>

<template>
  <div class="tab-wrap" :style="{ alignItems }">
    <div class="label" :style="{ width }" :title="label">{{ label }}</div>
    <div class="value">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tab-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    .label {
      text-align: end;
      padding-left: 4px;
      margin-right: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
