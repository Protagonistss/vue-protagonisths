<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <div class="login">
        <img src="../assets/images/header/user.png" alt />
        <p class="title">登录</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.header {
  height: 60px;
  width: 100%;
  background-color: #909399;
  display: flex;
}
.header .left {
  flex: 0.8;
}
.header .right {
  flex: 0.2;
}
.header .right .login {
  height: 60px;
  width: 100px;
  position: relative;
}
.header .right .login img {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: 20px !important;
  margin-left: 10px !important;
}
.header .right .login .title {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 18px;
  font-size: 13px;
  color: #303133;
  top: 20px;
  left: 35px;
  cursor: pointer;
}
</style>