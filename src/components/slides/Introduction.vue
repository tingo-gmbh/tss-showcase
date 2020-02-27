<template>
  <div class="tss-introduction" id="introduction">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="8">
          <h1 class="display-4 mb-3"><b>Timeslot</b> System</h1>

          <section
            v-scroll-reveal.reset="{
              delay: 500,
              distance: '500px',
              origin: 'left'
            }"
          >
            <h2 class="display-1 font-weight-light ml-10 mb-4">
              Buchungsystem &amp; Mediensteuerung
            </h2>
          </section>
        </v-col>
        <v-col cols="7">
          <section
            v-scroll-reveal.reset="{
              delay: 500,
              distance: '500px',
              origin: 'right'
            }"
          >
            <ol class="mt-5">
              <li
                v-for="(item, index) in contents"
                :key="index"
                class="display-1 pb-3"
              >
                {{ item }}
              </li>
            </ol>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import slides from "./../../slides";
export default {
  data: () => ({
    slides
  }),

  computed: {
    contents() {
      let items = [...slides];
      items.shift();
      return items.map(item => {
        return item.title;
      });
    }
  }
};
</script>

<style lang="scss">
.tss-introduction {
  padding-top: 100px;
  color: #1d232b;
}
</style>
