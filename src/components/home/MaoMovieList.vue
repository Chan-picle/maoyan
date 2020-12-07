<template>
  <div>
    <ul>
      <mao-movie-item
        v-for="(item, index) in movieList"
        :key="index"
        :item="item"
      />
    </ul>
    <p v-if="isToBottom">--我是有底线的--</p>
    <!-- <p>我是有底线的</p> -->
  </div>
</template>
<script>
import MaoMovieItem from "@/components/home/MaoMovieItem.vue";
export default {
  props: {
    movieList: Array,
    isToBottom: Boolean
  },
  components: {
    MaoMovieItem
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 15px;
}
</style>
