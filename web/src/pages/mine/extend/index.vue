<template>
  <div>
    <img
      src="/static/images/extend_banner.png"
      alt=""
      class="banner"
    >
    <div class="base-list first">
      <router-link to="/mine/extend_month_list" class="list-item">
        <div class="item-left">我的推广课程</div>
        <div class="item-mid">15节课</div>
        <i class="item-right"></i>
      </router-link>
      <div class="list-item">
        <div class="item-left">我的团队</div>
        <div class="item-mid">2个</div>
        <i class="item-right"></i>
      </div>
      <div class="list-item">
        <div class="item-left">我的团队-推广课程</div>
        <div class="item-mid">15节课</div>
        <i class="item-right"></i>
      </div>
    </div>

    <div class="base-list sec">
      <div class="list-item">
        <div class="item-left">我的推广业绩</div>
        <div class="item-mid">¥1500.00</div>
      </div>
      <div class="list-item">
        <div class="item-left">我的团队推广业绩</div>
        <div class="item-mid">¥1500.00</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style scoped lang='less'>
.banner {
  width: 100%;
}
.sec {
  margin-top: 0.3rem;
}
</style>