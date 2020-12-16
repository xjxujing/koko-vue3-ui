<template>
  <div>
    <TopNav></TopNav>
    <h1>vue3 test</h1>
    <h2>
      <router-link to="/doc">文档</router-link>
    </h2>
  </div>

</template>

<script>
  import TopNav from "../components/TopNav.vue";

  export default {
    components: {TopNav},
  };
</script>
