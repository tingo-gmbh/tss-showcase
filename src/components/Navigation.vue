<template>
  <v-app-bar app color="secondary" dark flat class="tss-navigation">
    <img alt="TSS Logo" src="./../assets/logo.png" class="tss-logo mr-4" />
    <v-toolbar-title>Showcase</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu bottom dark origin="center center" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="slide in slides"
          :key="slide.id"
          v-scroll-to="'#' + slide.id"
          link
        >
          <v-list-item-title>{{ slide.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import slides from "./../slides";
export default {
  data: () => ({
    slides
  })
};
</script>

<style lang="scss">
.tss-navigation {
  z-index: 1000;

  .tss-logo {
    height: 46px;
  }
}
</style>
