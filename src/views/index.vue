<template>
  <div class="index">
    <div class="aside">hahah</div>
    <div class="content">content</div>
  </div>
</template>

<script>
// import request from "../api/matches/index";
export default {
  data() {
    return {};
  },
  created() {
    // request.matches();
    console.log(this.$api.project.project_get());
  }
};
</script>

<style>
.index {
  height: 100%;
  min-height: 400px;
  flex: 1;
  background-color: blue;
  margin: 50px !important;
  display: flex;
}
.index .aside {
  width: 100px;
  height: 100%;
  background-color: brown;
}
.index .content {
  height: 100%;
  flex: 1;
  background-color: aquamarine;
}
</style>