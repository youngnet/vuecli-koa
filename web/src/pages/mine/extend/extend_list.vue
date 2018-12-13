<template>
  <div class="container">
    <div class="base-list">
      <router-link
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">2018年10月</div>
        <div class="item-mid">15节课</div>
        <i class="item-right"></i>
      </router-link>
      <router-link
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">2018年9月</div>
        <div class="item-mid">1节课</div>
        <i class="item-right"></i>
      </router-link>
      <router-link
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">2018年1月</div>
        <div class="item-mid">5节课</div>
        <i class="item-right"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  metaInfo: { title: '我的推广课程' }
}
</script>
<style scoped lang='less'>
.container {
  padding-top: 0.3rem;
}
</style>