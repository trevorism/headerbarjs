import Vue from 'vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
import Dev from './serve.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
