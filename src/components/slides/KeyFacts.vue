<template>
  <div class="tss-keyfacts" id="keyfacts">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-4 mb-8">
            Key Facts
          </h1>
        </v-col>
        <v-col cols="5">
          <section
            v-scroll-reveal.reset="{
              delay: 500,
              distance: '500px',
              origin: 'left'
            }"
          >
            <v-timeline>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">2018</span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Alles hat einen Anfang
                  </v-card-title>
                  <v-card-text>
                    Dani und Andy hatten da eine Idee...
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">2018</span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Emmentaler Schaukäserei
                  </v-card-title>
                  <v-card-text>
                    Mediensteuerung, Infoscreen, Thermodrucker...
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">2019</span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Omega Museum
                  </v-card-title>
                  <v-card-text>
                    Planetary Orbit und Insight Omega, Zählkamera...
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">2019</span>
                <v-card class="elevation-2">
                  <v-card-title>
                    ParaForum Nottwil
                  </v-card-title>
                  <v-card-text>
                    Mailer (ActiveMailer), Exporte, ohne Manuell-Modus...
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </section>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col>
          <v-card class="elevation-2">
            <v-card-text>
              <ul>
                <li class="title font-weight-normal">
                  Das Timeslot System wurde ursprünglich für die Emmentaler
                  Schaukäserei entwickelt.
                </li>
                <li class="title font-weight-normal">
                  Webapp mit diversen Features.
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tss-keyfacts {
  padding-top: 100px;
  color: #1d232b;
  position: relative;
}
</style>
