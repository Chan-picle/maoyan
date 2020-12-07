<template>
  <section>
    <h3>最受好评电影</h3>
    <div class="ul-wrap">
      <ul>
        <li v-for="item in resultList" :key="item.id">
          <a href="#">
            <div class="box">
              <img v-bind:src="item.imgUrl" alt="" />
              <p v-if="Boolean(item.score)">
                <span>观众评分</span><span class="score">{{ item.score }}</span>
              </p>
              <p v-if="Boolean(item.wishNum)">
                <span>{{ item.wishNum }}想看</span>
              </p>
            </div>
            <h5>{{ item.title }}</h5>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
// import BScroll from "better-scroll";
import BetterScroll from "better-scroll";
export default {
  props: {
    resultList: Array
  },
  data() {
    return {};
  },
  watch: {
    async resultList() {
      await this.$nextTick();
      new BetterScroll(".ul-wrap", {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  },
  mounted() {
    // let bs = new BetterScroll(".wraper",{
    //   scrollX:true,
    //   scrollY:false,
    //   click:true,
    //   pullUpLoad:true
    // });
    // bs.on("pullingUp",()=>{
    //   console.log(1);
    // })
  }
};
</script>
<style lang="scss" scoped>
section {
  background-color: #fff;
  height: 200px;
  overflow: hidden;
  padding: 0 12px;
  // margin: 0 12px 12px 12px;
  margin-bottom: 12px;
  h3 {
    font-size: 18px;
    font-weight: normal;
    margin: 15px 0;
  }
  ul {
    display: inline-flex;
    // overflow-y: hidden;
    // overflow-x: auto;
    height: 145px;
    flex-direction: row;
    justify-content: space-between;
    li {
      // flex-shrink: 0;
      height: 140px;
      width: 85px;
      margin-right: 10px;
      a {
        display: block;
        .box {
          position: relative;
          img {
            width: 85px;
            height: 112px;
            display: block;
          }
          p {
            position: absolute;
            width: 100%;
            bottom: 0;
            color: orange;
            font-weight: bolder;
            font-size: 10px;
            box-sizing: border-box;
            // background-color: rgba(0, 0, 0, 0.4);
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1)
            );
            font-size: 13px;
            height: 20px;
            padding: 0px 2px;
            display: flex;
            align-items: flex-end;
          }
        }
        h5 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          color: #000;
          font-size: 15px;
          line-height: 35px;
        }
      }
    }
  }
}
</style>
