require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'
import AppVue from './AppVue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate/src'
import store from './store'
import vuetify from './utils/vuetify'

import UIcomponents from './views/components/UI'
import CoreLayout from './layouts/CoreLayout'
import EmptyLayout from './layouts/EmptyLayout'
import Vue from 'vue'

Vue.component('core-layout', CoreLayout)
Vue.component('empty-layout', EmptyLayout)
Vue.component('app-vue', require('./AppVue.vue').default)
Vue.component('dynamic-textarea', UIcomponents)

Vue.use(VueRouter)
Vue.use(Vuelidate)

let app

app = new Vue({
    el: '#app',
    render: h => h(AppVue),
    router,
    store,
})

