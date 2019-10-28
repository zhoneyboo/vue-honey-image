
import Vue from 'vue';
import App from './App.vue'
import './components';
import router from './router'
const app = new Vue({
    el: "#app",
    template: "<app></app>",
    components: {App},
    router
})
