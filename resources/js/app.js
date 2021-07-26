require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'
import AppVue from './AppVue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate/src'
import store from './store'
import vuetify from './utils/vuetify'
import { BootstrapVue, componentsPlugin, IconsPlugin } from 'bootstrap-vue'
import VueAnime from 'vue-animejs';

import UIcomponents from './views/components/UI'
import CoreLayout from './layouts/CoreLayout'
import EmptyLayout from './layouts/EmptyLayout'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('core-layout', CoreLayout)
Vue.component('empty-layout', EmptyLayout)
Vue.component('app-vue', require('./AppVue.vue').default)
UIcomponents.forEach(component => {
    Vue.component(component.name, component)
})

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAnime)
Vue.use(vuetify)

let app

app = new Vue({
    el: '#app',
    render: h => h(AppVue),
    router,
    store,
})

