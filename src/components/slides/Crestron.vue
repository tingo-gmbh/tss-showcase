<template>
  <div class="tss-crestron" id="crestron">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <h1 class="display-4 mb-8">
            4. Crestron
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
                Zustände:
                <span class="font-weight-black">
                  Aus, Timeslot, Manuell, Service, Evakuierung
                </span>
              </li>
              <li class="headline font-weight-light pb-6">
                Ausgehende Befehle:
                <span class="font-weight-black">
                  Show starten, Steuerung von Lift und Türen
                </span>
              </li>
              <li class="headline font-weight-light pb-6">
                Kommunikation über TCP oder HTTP
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
            <pre>
            'out' => [
                'info' => 'tss_ct_pre_info',
                'liftstatus' => 'tss_ct_pre_lift_status',
                'rescheduled' => 'tss_ct_pre_moved',
                'ch' => 'tss_ct_pre_load_de-ch',
                'de' => 'tss_ct_pre_load_de',
                'it' => 'tss_ct_pre_load_it',
                'en' => 'tss_ct_pre_load_en',
                'fr' => 'tss_ct_pre_load_fr',
                'unlock' => 'tss_ct_pre_unlock_lift',
            ],
            
            'in' => [
                'timeslot' => 'ct_tss_timeslot',
                'off' => 'ct_tss_aus',
                'manual' => 'ct_tss_manuell',
                'service' => 'ct_tss_service',
                'evacuation' => 'ct_tss_evak',
                'started' => 'ct_tss_pre_started',
                'liftready' => 'ct_tss_pre_lift_ready',
                'liftnotready' => 'ct_tss_pre_lift_notready',
                'weigl' => 'ct_tss_pre_weigl_started',
                'ended' => 'ct_tss_pre_ended',
            ],
            </pre>
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
.tss-crestron {
  padding-top: 100px;
  color: #1d232b;
  position: relative;
}
</style>
