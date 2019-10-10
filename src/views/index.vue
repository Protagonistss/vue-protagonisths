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
    return {}
  },
  async created() {
    // request.matches();
    // let params = {}
    let data = { email: 'string3', password: 'string3', user_name: 'string3' }
    // let res = await this.$api.project.project_post(params, data)
    // console.log(res)
    let query = 1
    this.$api.user.user_put(query, data)
  }
}
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