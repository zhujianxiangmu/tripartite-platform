<template>
  <div>
    <div class="titleStyle">
      <el-row class="header">
        <el-col :span="6">
          <div style="margin-left:10%">
            <span>logo</span>
            <span class="logoStyle">南瓜·开放平台</span>
          </div>
        </el-col>
        <el-col :span="12"
                style="margin-top:3px;">
          <el-row>
            <el-col :span="6"
                    class="textAlign wireStyle">
              <span>首页</span>
            </el-col>
            <el-col :span="6"
                    class="textAlign wireStyle">
              <span class="wireStyle">资源</span>
            </el-col>
            <el-col :span="6"
                    class="textAlign wireStyle">
              <span class="wireStyle">管理</span>
            </el-col>
            <el-col :span="6"
                    class="textAlign wireStyle">
              <span class="wireStyle">文档</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6"
                style="text-align:right;margin-top:3px;">
          <el-row>
            <el-col :span="14"
                    style="color:#ccc;text-align:right;">
              <span class="login"
                    @click="loginClick">登录 <i v-if="iconFlag"
                   class="el-icon-arrow-down"></i><i v-if="!iconFlag"
                   class="el-icon-arrow-up"></i></span>
            </el-col>
            <el-col :span="10"
                    style="text-align:left;color:#ccc">
              <span style="padding:20px;cursor:pointer;">申请合作</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
const iconFlag = ref(true)
const loginClick = () => {
  iconFlag.value = !iconFlag.value
}
</script>

<style lang='scss' scoped>
.login {
  padding: 20px;
  cursor: pointer;
}
.header {
  height: 60px;
  line-height: 60px;
  background: #1a2131;
}
.titleStyle {
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #eaecef;
}
.logoStyle {
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
}
.wireStyle {
  cursor: pointer;
}
.wireStyle:hover {
  background: #34405c;
  color: #fff;
}
.textAlign {
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
}
.el-col {
  margin: 0 !important;
}
</style>
