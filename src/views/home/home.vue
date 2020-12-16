<template>
  <div>
    <TopNav></TopNav>
    <!-- TODO 主页也需要有aside -->
    <!--    <Aside></Aside> -->

    <main class="home-main">
      <h1>vue3 test</h1>
      <h2>
        <router-link to="/doc">文档</router-link>
      </h2>
    </main>
  </div>

</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import Aside from "../components/Aside.vue";
  import {inject, provide, ref, Ref} from "vue";

  export default {
    components: {TopNav, Aside},

  };
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
