<template>
    <header>
        <h1> <router-link to="/">
            <img src="../assets/logo.svg"> 
        </router-link></h1>
        <transition name="fade">
        <h1 v-if="show">Animated</h1>
        </transition>
        <button @click="show = !show"> Show/Hide</button>
    </header>
</template>

<script>
export default {
    name: "header",
    props: {
        title: String
    },
    data() {
        return {
            show: false,
            name: "Vue Movie DB "
        };
    },
    computed: {
        newTitle: function () {
            if(this.title == 'hello'){
                return this.title;
            }
            return this.name;
        }
    },
    show: true
};
</script>
<style scoped>
header {
  background-color: #111;
  padding: 20px;
  color:white;
}
h1 {
    margin: 0px;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>