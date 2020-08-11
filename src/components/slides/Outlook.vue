<template>
  <div class="tss-outlook" id="outlook">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-3 mb-10 text-uppercase">
            7. Ausblick
          </h1>
        </v-col>
        <v-col cols="12">
          <ul>
            <li class="display-2 font-weight-light pb-6">
              REST Crestron Modul (SIMPL#)
            </li>
            <li class="display-2 font-weight-light pb-6">Statistikmodul</li>
            <li class="display-2 font-weight-light pb-6">
              Update für Version 4.0.0
            </li>
            <li class="display-2 font-weight-light pb-6">Showcase Website</li>
            <li class="display-2 font-weight-light pb-6">
              Demo-Umgebung für Kunden
            </li>
            <li class="display-2 font-weight-light pb-6">
              Handbuch
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss">
.tss-outlook {
  padding-top: 100px;
  color: #1d232b;
  position: relative;

  ul {
    list-style-type: square;
    margin-left: 24px;

    li {
      color: #3b3b3b;
    }
  }
}
</style>
