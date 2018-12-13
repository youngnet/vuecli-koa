<template>
  <div class="container">
    <div class="navigator">
      <a
        @click="changeType('all')"
        :class="['link',navigateType=='all'?'router-link-active':'']"
        href="javascript:;"
      >全部</a>
      <a
        @click="changeType('in')"
        :class="['link',navigateType=='in'?'router-link-active':'']"
        href="javascript:;"
      >收入</a>
      <a
        @click="changeType('out')"
        :class="['link',navigateType=='out'?'router-link-active':'']"
        href="javascript:;"
      >支出</a>
    </div>
    <div class="course-month">
      <div class="time-line"><span class="date">2018年9月</span><i class="fill-line"></i></div>
      <div class="course-list">
        <div class="course-item">
          <div class="course-time">
            <span class="date">购买课程权利的游戏</span>
            <span class="time">2018-11-03 16:32:23</span>
          </div>
          <div class="booked"><span>¥333.25</span></div>
        </div>
        <div class="course-item">
          <div class="course-time">
            <span class="date">购买课程russia</span>
            <span class="time">2018-11-03 16:32:23</span>
          </div>
          <div class="booked"><span>¥333.25</span></div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigateType: 'all'
    }
  },
  metaInfo: { title: '钱包明细' },
  methods: {
    async changeType(type) {
      if (type === this.navigateType) {
        return
      }
      this.navigateType = type;
    }
  }
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
  .course-month {
    padding-top: 0.3rem;
    .time-line {
      display: flex;
      align-items: center;
      .date {
        display: inline-block;
        width: 2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        background-color: #ffeded;
        color: #fd4c4e;
        padding-left: 0.22rem;
        border-radius: 0 0.25rem 0.25rem 0;
      }
      .fill-line {
        height: 1px;
        background-color: #ddd;
        flex: 1;
      }
      font-size: 0.3rem;
    }
    .course-list {
      padding-left: 0.3rem;
      .course-item {
        height: 1.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.3rem;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border-bottom: unset;
        }
        .course-time {
          display: flex;
          flex-direction: column;
          padding: 0.18rem;
          .date {
            color: #2f2f2f;
            font-size: 0.32rem;
            margin-bottom: 0.1rem;
          }
          .time {
            font-size: 0.26rem;
            color: #979797;
          }
        }
        .course-name {
          flex: 1;
          font-size: 0.32rem;
          color: #606060;
          padding-left: 0.3rem;
        }
        .booked {
          display: flex;
          align-items: center;
          padding-right: 0.2rem;
          font-size: 0.32rem;
          color: #2f2f2f;
        }
      }
    }
  }
}
</style>