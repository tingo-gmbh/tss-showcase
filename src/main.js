import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueScrollTo from "vue-scrollto";
import VueScrollReveal from "vue-scroll-reveal";
import slides from "./slides";

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: element => {
    window.currentSlide = slides.findIndex(slide => slide.id === element.id);
  },
  onCancel: false,
  x: false,
  y: true
});

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 800,
  scale: 1,
  distance: "500px",
  mobile: false
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
