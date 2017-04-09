<template lang='pug'>
.myTasks
  .taskWrap
    .col
      .group 今天
      ul.tasks
        li
          .title 聯絡代工廠商
            .complete
          .time
            .reply
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style lang='scss'>
@import '../../assets/scss/variables.scss';

.myTasks {
  background-color: $gray3;
  height: calc(100vh - 137px);
  .taskWrap {
    padding: 40px 0 40px 40px;
    height: 100%;
    overflow-x: scroll;
    .col {
      .group {
        font-size: 28px;
        font-weight: bold;
        color: $accent_50;
        margin-bottom: 40px;
      }
      ul.tasks {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          display: block;
        }
      }
    }
  }
}
</style>
