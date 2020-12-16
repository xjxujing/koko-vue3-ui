<template>
  <div class="top-nav">
    <span class="aside-button" @click="toggleAside">三</span>

    <div class="logo">
      <router-link to="/">LOGO</router-link>
    </div>

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
  props: {
    hasAsideButton: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
      console.log("点击", asideVisible.value);
    };
    return {toggleAside};
  },
};
</script>

<style lang="scss" scoped>
@import "styles/_var.scss";

.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid $border-color;
  border-bottom-color: rgb(234, 236, 239);

  > .aside-button {
    display: none;
  }

  .logo {
    cursor: pointer;
  }

  .menu {
    display: flex;

    > li {
      padding: 0 1em;
    }
  }


  @media (max-width: 600px) {
    > .aside-button {
      display: inline-block;
      cursor: pointer;
    }

    > .logo {
      display: inline-block;
      margin: 0 auto;
    }

    > .menu {
      display: none;
    }
  }
}
</style>
