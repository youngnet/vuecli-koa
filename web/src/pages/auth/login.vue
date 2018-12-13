<template>
  <div class="container">
    <div class="info-put">
      <div class="phone">
        <span class="preNumber">+86</span>
        <div style="width:1px;height:0.4rem;background-color:#ddd;margin:0 0.2rem;"></div>
        <input
          type="number"
          placeholder="请输入手机号码"
          v-model="phone"
          @input="slice11"
        >
      </div>
      <div class="identifyCode">
        <input
          type="number"
          placeholder="请输入验证码"
          v-model="identifyCode"
          @input="slice6"
        >
        <a
          v-if="true"
          style="color:#3EBDEE;"
          class="countDown"
          href="javascript:;"
        >获取验证码</a>
        <span
          v-else
          class="countDown"
        >剩余60s</span>
      </div>
    </div>
    <a
      href="javascript:;"
      class="default-btn"
    >登录</a>
    <p class="allow-protocol">
      登录代表您已同意双语国际<a href="javascript:;">《注册协议》</a>内容
    </p>
    <a
      href="javascript:;"
      class="weixin-login"
    >
      <img
        src="/static/images/weixin-icon.png"
        alt=""
      >
      <span>微信登录</span>
    </a>
    <div class="bottom-fill1"></div>
    <div class="bottom-fill2"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
      identifyCode: ''
    }
  },
  metaInfo: {
    title: '登录'
  },
  methods: {
    slice11(e) {
      this.phone = e.target.value.slice(0, 11);
    },
    slice6(e) {
      this.identifyCode = e.target.value.slice(0, 6);
    },
    login() {

    },
    checkField() { }
  }

}
</script>
<style scoped lang='less'>
.container {
  .info-put {
    padding: 1rem 0.6rem 0;
    font-size: 0.32rem;
    .phone,
    .identifyCode {
      display: flex;
      align-items: center;
      height: 1.08rem;
      border-bottom: 1px solid #ddd;
      input {
        font-size: 0.32rem;
        height: 100%;
      }
      .countDown,
      .preNumber {
        flex-shrink: 0;
        height: 100%;
        line-height: 1.08rem;
      }
    }
  }
  .allow-protocol {
    font-size: 0.26rem;
    text-align: center;
    color: #979797;
  }
  .weixin-login {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: #606060;
    font-size: 0.26rem;
    align-items: center;
    img {
      width: 1rem;
      height: 0.8rem;
      margin-bottom: 0.15rem;
    }
  }
  .bottom-fill1 {
    background: linear-gradient(to bottom right, #ff585b, #fe6c2c);
    width: 3.24rem;
    height: 3.24rem;
    border-radius: 50%;
    position: fixed;
    right: -0.8rem;
    bottom: -1.18rem;
  }
  .bottom-fill2 {
    background: #ffc816;
    width: 2.27rem;
    height: 2.27rem;
    border-radius: 50%;
    position: fixed;
    right: 1.6rem;
    bottom: -1.3rem;
  }
}
</style>