import Vue from 'vue'
import VueCookies from 'vue-cookies'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Dev from './serve.vue'

Vue.use(VueCookies)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    render: (h) => h(Dev),
}).$mount('#app');
