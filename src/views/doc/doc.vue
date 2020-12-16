<template>
  <TopNav></TopNav>

  <main>
    <Aside></Aside>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
  import Aside from "../components/Aside.vue";
  import TopNav from "../components/TopNav.vue";

  export default {
    components: {Aside, TopNav},

  };
</script>

<style lang="scss" scoped>
  .main-content {
    margin-left: 150px;
    padding: 32px
  }
</style>
