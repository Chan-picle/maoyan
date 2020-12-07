<template>
  <nav>
    <div>杭州</div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="handleclick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <span class="iconfont icon-sousuo"></span>
  </nav>
</template>
<script>
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  data() {
    return {
      list: ["热映", "影院", "待映", "经典电影"],
      activeIndex: 0
    };
  },
  methods: {
    handleclick(i) {
      this.activeIndex = i;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/var.scss";
nav {
  display: flex;
  height: 44px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
  padding: 0 8px;
  background-color: #fff;
  ul {
    font-weight: 900;
    display: flex;
    height: 100%;
    li {
      width: 52px;
      text-align: center;
      position: relative;
      line-height: 43px;
      &.active {
        font-size: 18px;
        &::after {
          content: "";
          width: 50%;
          background-color: $main-color;
          height: 3px;
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    li:nth-of-type(4) {
      width: 92px;
    }
  }
}
</style>
