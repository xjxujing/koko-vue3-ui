<template>
  <aside class="aside" v-show="asideVisible">
    <h2>文档</h2>
    <ol>
      <li>介绍</li>
      <li>安装</li>
    </ol>
    <h2>组件</h2>
    <ul>
      <li>
        <router-link to="/doc/switch">Switch 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 组件</router-link>
      </li>
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
@import "styles/_var.scss";
.aside {
  position: absolute;
  z-index: 10;
  display: block;
  width: 150px;
  /*background-color: pink;*/
  border-right: 1px solid $border-color;;
}
</style>
