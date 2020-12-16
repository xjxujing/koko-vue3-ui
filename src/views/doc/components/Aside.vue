<template>
  <aside class="aside" v-show="asideVisible">
    <h2>文档</h2>
    <ol>
      <li>介绍</li>
      <li>安装</li>
    </ol>
    <h2>组件</h2>
    <ul>
      <li>组件1</li>
      <li>组件2</li>
      <li>组件3</li>
      <li>组件4</li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.aside {
  width: 150px;
  outline: 1px solid pink;
}
</style>