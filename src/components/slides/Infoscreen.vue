<template>
  <div class="tss-infoscreen" id="infoscreen">
    <v-carousel
      class="tss-carousel"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <h1 class="display-4 mb-8">
      5. Infoscreen
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "/images/emmentaler.jpg"
      },
      {
        src: "/images/omega.jpg"
      },
      {
        src: "/images/sps.jpg"
      }
    ]
  })
};
</script>

<style lang="scss">
.tss-infoscreen {
  color: #1d232b;
  position: relative;

  h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 100;
    padding: 10px 30px;
    background: #1b3d61;
    color: white;
  }

  .tss-carousel {
    height: 100vh !important;

    .v-responsive {
      height: 100vh !important;
    }
  }
}
</style>
