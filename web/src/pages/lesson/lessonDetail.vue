<template>
  <div class="container">
    <div class="banner">
      <img
        class="banner-img"
        src="/static/images/lesson/lessonBanner.png"
      />
      <img
        src="/static/images/lesson/lesson-booked.png"
        alt=""
        class="booked"
      >
    </div>
    <div class="lesson">
      <div class="lesson-title">West World</div>
      <div class="lesson-body">
        <div class="lesson-line">
          <div class="name">
            <i class="date"></i>
            <span>课程时间</span>
          </div>
          <div
            class="text"
            style="font-weight:500;"
          >2018.10.20 星期六 14:00-16:00</div>
        </div>
        <div class="lesson-line">
          <div class="name">
            <i class="wallet"></i>
            <span>课程价格</span>
          </div>
          <div
            class="text"
            style="font-weight:500;"
          >50元新币<span style="color:#FD4C4E;">（251.64人民币）</span></div>
        </div>
        <div class="lesson-line">
          <div class="name">
            <i class="book"></i>
            <span>课程简介</span>
          </div>
          <div class="text">每本书会设置5－6部分，分别为：<br>
            · Read Think and write,<br>
            · Recollections from the story,<br>
            · True or Flase statement,<br>
            · Point of view,<br>
            · Comprehension and Analysis,<br>
            · Character Traits/Deion，<br>
            · Unscramble letters to make new words
          </div>
        </div>
      </div>
    </div>
    <a
      href="javascript:;"
      class="default-btn cancel"
    >取消预约</a>
    <a href="javascript:;" class="bottom-btn">立即预定</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  metaInfo: { title: '课程详情' }
}
</script>
<style scoped lang='less'>
.container {
  .banner {
    position: relative;
    padding-bottom: 0.3rem;
    font-size: 0;
    .banner-img {
      width: 100%;
    }
    .booked {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.83rem;
      height: 0.68rem;
    }
  }
  .lesson {
    background-color: #fff;
    padding-left: 0.3rem;
    .lesson-title {
      font-weight: 500;
      font-size: 0.4rem;
      color: #2f2f2f;
      height: 1.2rem;
      line-height: 1.2rem;
      border-bottom: 1px solid #ddd;
    }
    .lesson-body {
      padding-top: 0.3rem;
      .lesson-line {
        padding: 0 0.3rem 0.3rem 0;
        display: flex;
        align-items: flex-start;
        .name {
          line-height: 0.42rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          color: #979797;
          font-size: 0.3rem;
          i {
            display: inline-block;
            width: 0.32rem;
            height: 0.3rem;
            background-size: contain;
            margin-right: 0.2rem;
          }
          .date {
            background-image: url(/static/images/icons/date.png);
          }
          .book {
            background-image: url(/static/images/icons/book.png);
          }
          .wallet {
            background-image: url(/static/images/icons/wallet.png);
          }
        }
        .text {
          padding-left: 0.2rem;
          font-size: 0.3rem;
          line-height: 0.42rem;
        }
      }
    }
  }
  .bottom-btn {
    width: 100%;
    height: 0.88rem;
    background-color: #fd4c4e;
    color: #fff;
    font-size: 0.34rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    line-height: 0.88rem;
  }
}
</style>