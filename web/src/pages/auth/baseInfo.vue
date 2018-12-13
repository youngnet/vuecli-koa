<template>
  <div class="container">
    <div class="baseInput">
      <label class="input-item"><span class="label">孩子姓名</span><input
          type="text"
          placeholder="请输入孩子姓名"
        ></label>
      <label class="input-item"><span class="label">孩子年龄</span><input
          type="text"
          placeholder="请输入孩子年龄"
        ></label>
      <label class="input-item"><span class="label">孩子学校</span><input
          type="text"
          placeholder="请输入孩子学校"
        ></label>
      <label class="input-item"><span class="label">父母姓名</span><input
          type="text"
          placeholder="请输入父母姓名"
        ></label>
      <label class="input-item"><span class="label">联系方式</span><input
          type="text"
          placeholder="请输入父母联系方式"
        ></label>
    </div>
    <a
      href="javascript:;"
      class="default-btn"
    >提交</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      childName: '',
      childAge: '',
      childSchool: '',
      parentName: '',
      parentPhone: ''
    }
  },
  metaInfo: {
    title: '填写基本信息'
  }
}
</script>
<style scoped lang='less'>
.container {
  padding-top: 0.3rem;
  background-color: #f3f3f3;
  height: 100vh;
  .baseInput {
    background-color: #fff;
  }
}
</style>