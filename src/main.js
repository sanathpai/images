import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';// no need to add index.Webpack will auto identify
import AuthHandler from './components/AuthHandler';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',//says to use browser router mode and not hash router
    routes: [
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});


new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app');