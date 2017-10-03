<template>
  <div id="app">
    <v-header> </v-header>
    <loading :show="loadingShow"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import loading from './components/loading/loading.vue'
  import {mapState} from 'vuex'
  import VHeader from './components/header/header.vue'
  export default {
    name: 'app',
    components: {
      VHeader,
      loading
    },
    data () {
      return {
        firstShow: true,
        show: true
      }
    },
    computed: {
      ...mapState([
        'loadingShow'
      ])
    },
    methods: {
      isShow () {
        this.show = !this.show
      },
      hideDetail () {
        this.detailShow = false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
