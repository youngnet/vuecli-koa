<template>
  <div>
    <div class="date-picker">10月</div>
    <div class="base-list">
      <a
        href="javascript:;"
        class="list-item"
      >
        <div class="item-left">请选择年龄：</div>
        <div class="item-mid">18岁</div>
        <div class="item-right"></div>
      </a>
    </div>
    <div class="course-month">
      <div class="time-line"><span class="date">2018年9月</span><i class="fill-line"></i></div>
      <div class="course-list">
        <lesson-card type='read'/>
        <lesson-card type='write'/>
      </div>
    </div>
  </div>
</template>
<script>
import LessonCard from '@/components/LessonCard';
export default {
  data() {
    return {

    }
  },
  metaInfo: { title: '预定课程' },
  components: {
    LessonCard
  }
}
</script>
<style scoped lang='less'>
.base-list {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.course-month {
  padding: 0.3rem 0 0.01rem;
  background-color: #fff;
  .time-line {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
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
  }
}
</style>