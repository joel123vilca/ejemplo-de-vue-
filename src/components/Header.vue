<template>
    <header>
        <h1>{{ newTitle }}</h1>
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
            name: "Scott"
        };
    },
    computed: {
        newTitle: function () {
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