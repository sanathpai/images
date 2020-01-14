<template>
  <div class="navbar navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Image Storage</a>

    <ul class="navbar-nav ml-auto">
      <li class="nav item">
        <div v-if="isLoggedIn" class="text-white horizontal">
          <router-link to="/" class="nav-link text-white">Galleries</router-link>
          <!--causes full reload so avoid-->
          <router-link to="/upload" class="nav-link text-white">Upload</router-link>
          <a class="nav-link text-white" @click="logout">Logout</a>
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
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>


<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>