<template>
  <div class="top-nav">
    <div class="logo-wrapper" @click="toggleAside">LOGO</div>

    <ul class="menu">
      <li>文档</li>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
      console.log('点击', asideVisible.value)
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eaecef;
  border-bottom-color: rgb(234, 236, 239);

  .logo-wrapper {
    cursor: pointer;
  }

  .menu {
    display: flex;

    > li {
      margin: 0 1em;
    }
  }
}
</style>
