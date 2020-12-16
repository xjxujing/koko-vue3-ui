<template>
  <TopNav></TopNav>
  <Aside></Aside>
</template>

<script>
import Aside from "./components/Aside.vue";
import TopNav from "../components/TopNav.vue";
import { provide, ref } from "vue";

export default {
  components: { Aside, TopNav },

  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
  }, 
};
</script>

<style>
</style>
