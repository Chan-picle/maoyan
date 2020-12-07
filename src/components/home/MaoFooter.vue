<template>
  <footer>
    <ul>
      <li
        v-for="(item, index) in footerlist"
        :key="index"
        :class="{ active: acindex === index }"
        @click="handleclick(index)"
      >
        <span class="iconfont" :class="item.icon"></span>
        <h6>{{ item.title }}</h6>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      acindex: 0,
      footerlist: [
        { icon: "icon-dianying", title: "电影/影院" },
        { icon: "icon-shipin1", title: "视频" },
        { icon: "icon-shipin", title: "小视频" },
        { icon: "icon-piaoquan", title: "演出" },
        { icon: "icon-yonghu", title: "我的" }
      ]
    };
  },
  computed: {},

  mounted() {},

  methods: {
    handleclick(index) {
      this.acindex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/var.scss";
footer {
  position: fixed;
  width: 100%;
  height: 49px;
  bottom: 0;
  border-top: 1px solid #f5f5f5;
  ul {
    display: flex;
    height: 100%;
    font-size: 15px;
    li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: $text-color;
      .iconfont {
        font-size: 20px;
      }
      &.active {
        color: $main-color;
      }
    }
  }
}
</style>
