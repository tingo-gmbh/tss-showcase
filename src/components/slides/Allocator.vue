<template>
  <div class="tss-allocator" id="allocator">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-3 mb-10 text-uppercase">
            3. Allocator
          </h1>
        </v-col>
        <v-col cols="7">
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'left',
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
                <ul>
                  <li>
                    <span class="font-weight-black">
                      Datum
                    </span>
                  </li>
                  <li>
                    <span class="font-weight-black">
                      Uhrzeit
                    </span>
                  </li>
                  <li>
                    <span class="font-weight-black">
                      Anzahl Personen
                    </span>
                  </li>
                  <li>
                    <span class="font-weight-black">
                      Sprache
                    </span>
                  </li>
                  <li>
                    <span class="font-weight-black">
                      Modus
                    </span>
                  </li>
                </ul>
              </li>
              <li class="headline font-weight-light pb-6">
                Modi:
                <ul>
                  <li>
                    <span class="font-weight-black">
                      Standard:
                    </span>
                    Nächstmöglicher Zeitslot, dürfen geschoben werden, Normalfall am Terminal
                  </li>
                  <li>
                    <span class="font-weight-black">
                      Premium:
                    </span>
                    Standardbuchungen werden geschoben, VIP hingegen nicht, bspw. bei Carreisen
                  </li>
                  <li>
                    <span class="font-weight-black">
                      VIP:
                    </span>
                    Alle Vorstellungen (inkl. VIP) weden geschoben, bspw. bei hohem Besuch
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </v-col>
        <v-col cols="5">
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'right',
            }"
          >
            <img src="/tss-showcase/images/allocator.png" />
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
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

    ul {
      list-style-type: square;

      li {
        ul {
          list-style: none;
          li:before {
            content: "\203A";
            margin-left: -20px;
            margin-right: 10px;
            font-size: 32px;
          }
        }
      }
    }
  }
</style>
