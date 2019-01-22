<template>
    <header>
        <h1> <router-link to="/">{{ newTitle }}</router-link></h1>
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
    }
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
</style>