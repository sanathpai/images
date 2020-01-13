<template>
  <div>Please wait....</div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    //refer docx for lifecycles under vue instance in official vue.js docx
    this.finalizeLogin(window.location.hash); //window.location.has to get everything after # from url
  }
};
</script>


<style scoped>
</style>