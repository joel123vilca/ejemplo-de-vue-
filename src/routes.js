import Vue from 'vue';
import Router from 'vue-router';
import Movielist from './components/MovieList.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movie List',
            component:Movielist,
        }
    ]
})