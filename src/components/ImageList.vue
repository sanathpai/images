<template>
  <div>
    <img :src="image.link" v-for="image in allImages" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    //life cycle method auto called
    this.fetchImages();
  }
};
</script>


<style scoped>
</style>