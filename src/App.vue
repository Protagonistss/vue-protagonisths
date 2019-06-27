<template>
  <div id="app">
    <headers></headers>
    <router-view/>
  </div>
</template>

<script>
import headers from "./components/header";
export default {
  data() {
    return {};
  },
  components: {
    headers
  }
};
</script>
<style>
* {
  padding: 0px !important;
  margin: 0px !important;
}
html,
body {
  min-width: 1366px !important;
  min-height: 668px !important;
  background-color: whitesmoke !important;
  display: flex;
  flex-direction: column;
}
#app {
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
