import Vue from 'vue';
import VueRouter from 'vue-router';
// don't worry, we haven't created this yet!
import AppComponent from './components/app-component/app-component';

Vue.use(VueRouter)

const Foo = {template: '<div>foo</div>'}

const Bar = {template: '<div>bar</div>'}

const com = AppComponent

const routes = [
	{path: '/foo', component: Foo},
	{path: '/bar', component: Bar},
	{path: '/twitter', component: com}
]

const router = new VueRouter({
	routes
})


const app = new Vue({
	el: '#app',
  router
})

/*
new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent
  }
}).use(VueRouter);*/