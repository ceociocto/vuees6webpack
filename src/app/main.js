import Vue from 'vue';
// don't worry, we haven't created this yet!
import AppComponent from './components/app-component/app-component';

new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent
  }
});