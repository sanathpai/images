<template>
  <h3>Hello</h3>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ImageList",
  methods: mapActions(["fetchImages"]),
  created() {
    //life cycle method auto called
    this.fetchImages();
  }
};
</script>


<style scoped>
</style>