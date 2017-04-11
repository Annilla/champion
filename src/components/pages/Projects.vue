<template lang='pug'>
section.projects
  h1 專案
  .content
    .name Ann Cheng 的專案
    ul.foldWrap
      each val in ['創新產品', '創新產品', '創新產品']
        li
          .folder
            .title= val
            .date 建立日期&nbsp;&nbsp;&nbsp;&nbsp;2017 / 06 / 03
            .detail
              .img
                img(src='../../assets/img/projectstask.svg')
              .num 23
              .img.member
                img(src='../../assets/img/projectsmember.svg')
              .num 5
          .mine 4
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.projects {
  padding-top: 20px;
  h1 {
    margin-left: 40px;
    @include pageH1;
    margin-bottom: 60px;
  }
  .content {
    background-color: $gray3;
    padding: 0 40px; 
    height: calc(100vh - 137px);
    .name {
      padding-top: 40px;
      @include pageH2;
    }
    ul.foldWrap {
      height: calc(100% - 84px - 20px);
      width: 100%;
      overflow: auto;
      padding: 0;
      @include scrollBar;
      li {
        margin: 0;
        list-style: none;
        display: block;
        float: left;
        margin-right: 35px;
        .folder {
          background-color: $white;
          border-radius: 5px;
          padding: 40px 25px 15px 25px;
          width: 200px;
          height: 180px;
          box-sizing: content-box;
          .title {
            font-size: 25px;
            margin-bottom: 10px;
          }
          .date {
            color: $warn;
            font-size: 14px;
          }
          .detail {
            overflow: hidden;
            margin-top: calc(230px - 145px);
            div {
              float: left;
            }
            .img {
              width: 18px;
              height: 18px;
              opacity: 0.3;
              &.member {
                margin-left: 20px;
              }
            }
            .num {
              color: $gray1;
              line-height: 1.8em;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
