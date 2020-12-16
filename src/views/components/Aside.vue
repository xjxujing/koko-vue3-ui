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
  props: {
    asideVisibleProp: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return {asideVisible};
  },
};
</script>

<style lang="scss" scoped>
.aside {
  position: absolute;
  z-index: 10;
  display: block;
  width: 150px;
  background-color: pink;
}
</style>
