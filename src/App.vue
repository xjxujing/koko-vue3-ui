<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png"/>-->
  <!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
  <router-view></router-view>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {provide, ref} from "vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 600);
    provide("asideVisible", asideVisible);
  },
}
</script>
