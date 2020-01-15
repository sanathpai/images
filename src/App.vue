<template>
  <div>
    <AppHeader></AppHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader: AppHeader
  }
};
</script>

<style scoped>
</style>
