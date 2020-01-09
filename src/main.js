import Vue from 'vue';
import App from './App';
import store from './store';// no need to add index.Webpack will auto identify

new Vue({
    store: store,
    render: h => h(App)
}).$mount('#app');