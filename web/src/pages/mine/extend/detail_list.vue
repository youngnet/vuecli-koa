<template>
  <div class="container">
    <div class="base-list">
      <div
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">Number the Stars</div>
        <div class="item-mid">13300000001</div>
      </div>
      <div
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">West World</div>
        <div class="item-mid">18800000001</div>
      </div>
      <div
        to="/mine/extend_detail"
        class="list-item"
      >
        <div class="item-left">Game of Thrones</div>
        <div class="item-mid">15500000001</div>
      </div>
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