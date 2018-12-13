<template>
  <div class="container">
    <div class="userInfo">
      <img
        src="/static/images/face.gif"
        alt=""
        class="header-img"
      > <span>下午好，young</span>
    </div>
    <div class="function-enter">
      <router-link
        to="/mine/course/needLearn"
        class="box"
      >
        <img
          class="item-icon"
          src="/static/images/mine/course-icon.png"
          alt=""
        >
        <span class="box-title">我的课程</span>
      </router-link>
      <router-link
        to="/mine/wallet"
        class="box"
      >
        <img
          class="item-icon"
          src="/static/images/mine/wallet-icon.png"
          alt=""
        >
        <span class="box-title">我的钱包</span>
      </router-link>
      <router-link
        to="/mine/extend"
        class="box"
      >
        <img
          class="item-icon"
          src="/static/images/mine/extend-icon.png"
          alt=""
        >
        <span class="box-title">推广中心</span>
      </router-link>
      <router-link
        to="/mine/setting"
        class="box"
      >
        <img
          class="item-icon"
          src="/static/images/mine/setting-icon.png"
          alt=""
        >
        <span class="box-title">账户设置</span>
      </router-link>
    </div>
    <input
      type="text"
      v-model="msg"
      name=""
      id=""
    >
    <button @click="submit">submit</button>
    <div class="bottom-fill1"></div>
    <div class="bottom-fill2"></div>
  </div>
</template>
<script>
import weixin from '@/utils/weixin';
export default {
  async created() {
    let res = await this.$ajax.post('/mine/userinfo')
    console.log("​created -> res", res)

    // weixin.config({})

    // let pay = await weixin.initPay();
    // console.log("​created -> pay", pay)
    this.ws()
  },
  data() {
    return {
      msg: '',
      sock: null
    }
  },
  metaInfo: {
    title: '我的账户'
  },
  methods: {
    ws() {
      console.log(222)
      this.sock = new WebSocket('ws://127.0.0.1:6060/ws/test');
      console.log(111)
      this.sock.onopen = () => {
        this.sock.send('hhh');
        console.log('opensend')
      }
      this.sock.onmessage = function (res) {
        console.log(res.data, 'onmessage')
      }
      this.sock.onclose = function () {
        console.log('close')
      }
    },
    submit() {
      this.sock.send(this.msg)
    }
  }
}
</script>
<style scoped lang='less'>
.container {
  background-color: #f3f3f3;
  min-height: 100vh;
  .userInfo {
    margin: 0 0.3rem;
    padding: 0.7rem 0;
    .header-img {
      width: 1.2rem;
      height: 1.2rem;
    }
    span {
      font-size: 0.4rem;
      font-weight: bold;
      color: #606060;
    }
  }
  .function-enter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .box {
      flex-shrink: 0;
      border-radius: 0.08rem;
      float: left;
      background-color: #fff;
      color: #606060;
      font-size: 0.34rem;
      width: 3.3rem;
      height: 2.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 0.3rem;
      &:nth-child(odd) {
        margin-right: 0.3rem;
      }

      .item-icon {
        width: 1.2rem;
        height: 1.2rem;
        margin-bottom: 0.36rem;
      }
    }
  }
  .bottom-fill1 {
    width: 3.24rem;
    height: 3.24rem;
    border-radius: 50%;
    position: fixed;
    right: -0.8rem;
    bottom: -1.18rem;
    background-image: linear-gradient(to bottom right, #ff585b, #fe6c2c);
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