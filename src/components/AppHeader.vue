<template>
  <div class="navbar navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Image Storage</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav item my-2 my-lg-0">
        <a class="nav-link" href="#" @click="login">Login</a>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapActions } from "vuex"; //mapactions is a functions automatically connects diff actions
export default {
  name: "AppHeader",
  methods: mapActions(["login"])
};
</script>


<style scoped>
</style>