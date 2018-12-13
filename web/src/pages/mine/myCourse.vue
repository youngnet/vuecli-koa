<template>
  <div class="container">
    <div class="navigator">
      <router-link
        class="link"
        to="/mine/course/needLearn"
      >待上课</router-link>
      <router-link
        class="link"
        to="/mine/course/learned"
      >往期回放</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  metaInfo: { title: '我的课程' }
}
</script>
<style scoped lang='less'>
.container {
  background-color: #fff;
  min-height: 100vh;
  .navigator {
    display: flex;
    font-size: 0.32rem;
    height: 0.88rem;
    align-items: center;
    text-align: center;
    background-color: #f3f3f3;
    .link {
      position: relative;
      line-height: 0.88rem;
      flex: 1;
      color: #747474;
      background-color: #eee;
      &.router-link-active {
        color: #fd4c4e;
        background-color: #fff;
        &::after {
          content: "";
          position: absolute;
          width: 0.6rem;
          height: 0.04rem;
          background-color: #fd4c4e;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          border-radius: 0.02rem;
        }
      }
    }
  }
}
</style>