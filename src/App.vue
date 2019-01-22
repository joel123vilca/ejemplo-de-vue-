<template>
  <div id="app" >
    <Header :title="title"/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'app',
  data() { 
    return {

        title: "Vue Movie DB",

    };
  },
  components: {

    Header,

  }
}
</script>

<style scoped>
h1 {
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
