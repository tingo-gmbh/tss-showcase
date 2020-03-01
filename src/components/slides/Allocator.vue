<template>
  <div class="tss-allocator" id="allocator">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-4 mb-10">
            3. Allocator
          </h1>
        </v-col>
        <v-col cols="7">
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'left'
            }"
          >
            <ul>
              <li class="headline font-weight-light pb-6">
                Logik für Show-Buchung
              </li>
              <li class="headline font-weight-light pb-6">
                <span class="font-weight-black">Fixes Zeitraster</span> vs
                <span class="font-weight-black">Flexibles Zeitraster</span>
              </li>
              <li class="headline font-weight-light pb-6">
                Eine Buchung hat folgende Parameter:
                <span class="font-weight-black">
                  Datum, Uhrzeit, Anzahl Personen, Sprache, Modus
                </span>
              </li>
              <li class="headline font-weight-light pb-6">
                3 verschiedene Buchungsmodi:
                <span class="font-weight-black">
                  Standard, Premium, VIP
                </span>
              </li>
            </ul>
          </section>
        </v-col>
        <v-col cols="5">
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'right'
            }"
          >
            <img src="/images/allocator.png" />
          </section>
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
.tss-allocator {
  padding-top: 100px;
  color: #1d232b;
  position: relative;

  img {
    margin-top: -30px;
    width: 80%;
    margin-left: 20%;
  }
}
</style>
