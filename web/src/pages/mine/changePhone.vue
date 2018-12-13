<template>
  <div class="container">
    <div class="baseInput">
      <label class="input-item"><span class="label">旧手机号</span><input
          type="text"
          placeholder="请输入手机号"
        ></label>
      <label class="input-item"><span class="label">图形验证码</span><input
          type="text"
          placeholder="请输入图形验证码"
        >
        <img
          @click="changeCode"
          src="/static/images/identifyCode.png"
          alt=""
          class="item-right img-code"
        >
      </label>
      <label class="input-item"><span class="label">短信验证码</span><input
          type="text"
          placeholder="请输入短信验证码"
        >
        <a
          class="getCode item-right"
          href="javascript:;"
        >获取验证码</a>
      </label>
    </div>
    <a
      href="javascript:;"
      class="default-btn"
      @click="save"
    >保存</a>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  metaInfo: {
    title: '修改绑定手机号'
  },
  methods: {
    //   修改图形验证码
    changeCode() {

    },
    save() {

    },
    checkFields() {

    }
  }
}
</script>
<style scoped lang='less'>
.container {
  padding-top: 0.3rem;
  .label {
    width: 1.6rem;
  }
  .img-code {
    width: 1.4rem;
    height: 0.5rem;
  }
}
</style>