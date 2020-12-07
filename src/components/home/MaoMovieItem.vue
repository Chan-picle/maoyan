<template>
  <li>
    <div class="m-left">
      <img :src="item.img | delewh" alt="" />
    </div>
    <div class="m-content">
      <div class="m-mid">
        <div class="m-title">
          <p>{{ item.nm }}</p>
          <!-- 存在3d/2d -->
          <div v-if="!!item.version">
            <div class="p-tag" v-if="item.version == 'v3d imax'"></div>
            <div class="p-2dtag" v-else></div>
          </div>
          <!-- <div class="p-tag" v-else></div> -->
        </div>
        <p class="m-score" v-if="!!item.sc">
          观众评<span class="yellow">{{ item.sc }}</span>
        </p>
        <p class="m-wish" v-else>
          <span class="yellow">{{ item.wish }}</span
          >人想看
        </p>
        <p class="m-star">主演：{{ item.star }}</p>
        <p class="m-detail">{{ item.showInfo }}</p>
      </div>
      <div class="m-right">
        <a href="javsscript" v-if="item.showst === 3">购票</a>
        <a href="javascript" v-else class="preshow">预售</a>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  filters: {
    delewh(val) {
      return val.replace("w.h/", "");
    }
  },
  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/var.scss";
li {
  display: flex;
  font-size: 13px;
  color: #666;
  // padding: 12px;
  background-color: #fff;
  height: 115px;
  .m-left {
    flex-basis: 64px;
    height: 100%;
    padding: 12px;
    img {
      height: 100%;
      width: 64px;
    }
  }
  .m-content {
    border-bottom: 1px solid #f5f5f5;
    flex: 1;
    display: flex;
    .m-mid {
      flex: 1;
      padding: 12px;
      line-height: 23px;
      width: 200px;
      .m-title {
        justify-content: flex-start;
        font-size: 17px;
        font-weight: bolder;
        color: #333;
        line-height: 30px;
        display: flex;
        // position: relative;
        p {
          @include text-overflow;
        }
        .p-tag {
          margin-top: 20%;
          width: 40px;
          height: 15px;
          background: url("../../assets/img/3d.png") no-repeat 0px 0px/100%;
        }
        .p-2dtag {
          margin-top: 20%;
          width: 40px;
          height: 15px;
          background: url("../../assets/img/2d.png") no-repeat 0px 0px/100%;
        }
      }
      .yellow {
        color: #faaf00;
        font-weight: bolder;
        padding: 0 5px;
        font-size: 16px;
      }
      .m-star {
        @include text-overflow;
      }
    }
    .m-right {
      flex-basis: 50px;
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        display: block;
        height: 27px;
        border-radius: 5px;
        text-align: center;
        line-height: 27px;
        color: #fff;
        background-color: $main-color;
        &.preshow {
          background-color: #3c9fe6;
          margin-top: 50%;
        }
      }
    }
  }
}
</style>
