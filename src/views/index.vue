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
  async created() {
    // request.matches();
    let params = {};
    let data = { email: "string", password: "string", user_name: "string" };
    let res = await this.$api.project.project_post(params, data);
    console.log(res);
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