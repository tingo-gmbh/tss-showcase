<template>
  <v-app>
    <navigation />
    <v-content>
      <slide
        v-for="slide in slides"
        :key="slide.id"
        :background-color="slide.backgroundColor"
        :component="slide.component"
      />
    </v-content>
  </v-app>
</template>

<script>
import slides from "./slides";
import Navigation from "@/components/Navigation";
import Slide from "@/components/Slide";

export default {
  name: "App",

  components: {
    Navigation,
    Slide
  },

  data: () => ({
    slides
  }),

  mounted() {
    window.currentSlide = 0;

    window.addEventListener("keyup", event => {
      if (event.keyCode === 37) {
        this.scrollToPrev();
      } else if (event.keyCode === 39) {
        this.scrollToNext();
      }
    });
  },

  methods: {
    scrollToPrev() {
      if (window.currentSlide > 0) {
        window.currentSlide -= 1;
        this.$scrollTo("#" + this.slides[window.currentSlide].id);
      }
    },
    scrollToNext() {
      if (window.currentSlide + 1 < this.slides.length) {
        window.currentSlide += 1;
        this.$scrollTo("#" + this.slides[window.currentSlide].id);
      }
    }
  }
};
</script>

<style lang="scss">
.v-content {
  padding-top: 0px !important;
}
</style>
