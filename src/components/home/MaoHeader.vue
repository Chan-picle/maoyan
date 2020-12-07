<template>
  <header>
    <span class="iconfont icon-common_icon_left" v-if="flag"></span>
    <h3>猫眼电影</h3>
    <span class="iconfont icon-RectangleCopy"></span>
  </header>
</template>
<script>
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "MaoHeader",
  data() {
    return {
      flag: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/reset.scss";
@import "../../assets/style/var.scss";
header {
  height: 52px;
  background-color: $main-color;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  position: relative;
  h3 {
    font-size: 20px;
    font-weight: normal;
  }
  span {
    position: absolute;
    font-size: 25px;
  }
  .icon-common_icon_left {
    left: 8px;
  }
  .icon-RectangleCopy {
    right: 8px;
    font-weight: bold;
  }
}
</style>
