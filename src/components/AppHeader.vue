<template>
  <div class="navbar navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Image Storage</a>

    <ul class="navbar-nav ml-auto">
      <li class="nav item">
        <div v-if="isLoggedIn" class="text-white horizontal">
          <a class="nav-link text-white" href="#">Galleries</a>
          <a class="nav-link text-white" href="#">Upload</a>
          <a class="nav-link text-white" href="#">Logout</a>
        </div>
        <!--v else should be right after vif-->
        <a v-else class="nav-link" href="#" @click="login">Login</a>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex"; //mapactions is a functions automatically connects diff actions

export default {
  name: "AppHeader",
  methods: mapActions(["login"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>


<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>