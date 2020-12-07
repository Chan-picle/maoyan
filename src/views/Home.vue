<template>
  <div>
    <section class="header">
      <mao-header />
      <mao-nav-tab />
    </section>
    <section class="main">
      <div>
        <mao-fav-comment :resultList="resultList" />
        <mao-movie-list :movieList="movieList" :isToBottom="isToBottom" />
      </div>
    </section>
    <mao-footer />
  </div>
</template>

<script>
import {
  getRatedListApi,
  getMovieListApi,
  getMovieMoreApi
} from "@/utils/api.js";
import BetterScroll from "better-scroll";
// import qs from "qs";
// @ is an alias to /src
import MaoHeader from "@/components/home/MaoHeader.vue";
import MaoNavTab from "@/components/home/MaoNavTab.vue";
import MaoFavComment from "@/components/home/MaoFavComment.vue";
import MaoMovieList from "@/components/home/MaoMovieList.vue";
import MaoFooter from "@/components/home/MaoFooter.vue";

export default {
  name: "Home",
  data() {
    return {
      resultList: [],
      movieList: [],
      datalength: 0,
      ids: [],
      start: 0,
      num: 5
      // isToBottom: false
    };
  },
  computed: {
    isToBottom() {
      return this.start > this.datalength;
    }
  },
  components: {
    MaoHeader,
    MaoNavTab,
    MaoFavComment,
    MaoMovieList,
    MaoFooter
  },
  mounted() {
    this.getfavList();
    this.getmovieList();
  },
  methods: {
    async getfavList() {
      const res = await getRatedListApi();
      if (res.status === 0) {
        this.resultList = res.result;
      }
    },
    async getmovieList() {
      const res = await getMovieListApi();
      if (res.status === 0) {
        this.movieList = res.result;
        this.datalength = res.count;
        this.ids = res.ids;
        this.start = res.result.length;
        // console.log(res);

        await this.$nextTick();
        let bs = new BetterScroll(".main", {
          scrollX: false,
          scrollY: true,
          click: true,
          pullUpLoad: true
        });
        bs.on("pullingUp", () => {
          console.log(1);
          //加载更多
          //数据整理
          const arr = this.ids.slice(this.start, this.start + this.num);
          this.start += this.num;
          let str = arr.join();
          // console.log(qs.stringify({ ids: str }));
          // fetch("http://pudge.wang:3080/api/movies/more", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/x-www-form-urlencoded"
          //   },
          //   body: qs.stringify({ ids: str })
          // })
          getMovieMoreApi({ ids: str })
            // .then(response => response.json())
            .then(res => {
              console.log(res);
              if (res.status === 0) {
                this.movieList = this.movieList.concat(res.result);
                this.$nextTick(() => {
                  //数据刷新
                  bs.refresh();
                  //可以再次下拉
                  if (this.start <= this.datalength) {
                    bs.finishPullUp();
                  }
                  //不能写在这里，不会更新
                  // else {
                  //   this.isToBottom = true;
                  // }
                });
              }
            });
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
section.header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
section.main {
  position: absolute;
  top: 96px;
  width: 100%;
  bottom: 50px;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>
