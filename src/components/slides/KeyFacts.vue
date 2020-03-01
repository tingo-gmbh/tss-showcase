<template>
  <div class="tss-keyfacts" id="keyfacts">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-3 mb-10 text-uppercase">
            1. Key Facts
          </h1>
        </v-col>

        <v-col>
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'left'
            }"
          >
            <ul>
              <li class="headline font-weight-light mb-4">
                Wurde ursprünglich für die
                <span class="font-weight-black">Emmentaler Schaukäserei</span>
                entwickelt.
              </li>
              <li class="headline font-weight-light mb-4">
                Mittlerweile ist das System
                <span class="font-weight-black">an 3 Standorten</span> im
                Einsatz.
              </li>
              <li class="headline font-weight-light mb-4">
                <span class="font-weight-black">Mandantenfähigkeit</span>: Eine
                Codebase, (kundenspezifische) Features können über
                Umgebungsvariablen zu- oder ausgeschaltet werden.
              </li>
              <li class="headline font-weight-light mb-4">
                Grosse Problematik: jeder Kunde verwendet das System auf seine
                eigene Weise.
              </li>
              <li class="headline font-weight-light mb-4">
                <span class="font-weight-black">Neue Features...</span>
                <ul>
                  <li>
                    werden exklusiv für Kunden entwickelt.
                  </li>
                  <li>
                    werden im TSS Core integriert und somit auch für andere
                    Kunden verfügbar gemacht.
                  </li>
                </ul>
              </li>
              <li class="headline font-weight-light mb-4">
                <span class="font-weight-black">Technologie</span>: Laravel 6.x
                (PHP), Vue, Vuetify, MySQL, Ubuntu Server
              </li>
            </ul>
          </section>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <section
            v-scroll-reveal.reset="{
              distance: '500px',
              origin: 'right'
            }"
          >
            <v-timeline>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">
                  Dezember, 2018
                </span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Emmentaler Schaukäserei
                  </v-card-title>
                  <v-card-subtitle class="font-weight-black">
                    Affoltern i.E.
                  </v-card-subtitle>
                  <v-card-text>
                    Terminal, Crestron Control, Infoscreens, Printer.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">
                  September, 2019
                </span>
                <v-card class="elevation-2">
                  <v-card-title>
                    ParaForum
                  </v-card-title>
                  <v-card-subtitle class="font-weight-black">
                    Nottwil
                  </v-card-subtitle>
                  <v-card-text>
                    Mailer (ActiveMailer), Exporte, kein Manuell-Modus...
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">
                  Oktober, 2019
                </span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Omega Museum
                  </v-card-title>
                  <v-card-subtitle class="font-weight-black">
                    Biel
                  </v-card-subtitle>
                  <v-card-text>
                    Planetary Orbit und Insight Omega, Zählkamera.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite" class="font-weight-black">
                  ab März, 2020
                </span>
                <v-card class="elevation-2">
                  <v-card-title>
                    Demoumgebung & Update
                  </v-card-title>
                  <v-card-text>
                    Showcase, Factsheets und Demoversion zur Kundenakquise.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </section>
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

  ul {
    list-style-type: square;

    li {
      ul {
        list-style: none;
        li:before {
          content: "...";
          margin-left: -20px;
          margin-right: 0px;
          font-size: 32px;
        }
      }
    }
  }
}
</style>
