<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: "header",
    props: {
        title: String
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