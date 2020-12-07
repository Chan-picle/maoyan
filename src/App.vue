<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  data() {
    return {
      msg: "hello world"
    };
  },
  components: {
    Home
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}
body {
  background-color: #f5f5f5;
}
</style>
