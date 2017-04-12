<template lang='pug'>
section.projects
  h1 專案
  .content
    .name Ann Cheng 的專案
    ul.foldWrap
      each val, index in ['創新產品', '海外拓展', '替代役招聘', '美國市場調查', '資金募集', '產學合作']
        li(@click='changePage')
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
          .mine= index+1
      li
        .folder
          .add +
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    changePage: function () {
      this.$emit('page', 'project')
    }
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
        margin-right: 30px;
        margin-bottom: 30px;
        position: relative;
        .folder {
          background-image: url('../../assets/img/projects.svg');
          background-size: auto 100%;
          background-repeat: no-repeat;
          border-radius: 5px;
          padding: 60px 30px 15px 30px;
          width: 190px;
          height: 175px;
          box-sizing: content-box;
          transition: 0.5s;
          cursor: pointer;
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
            margin-top: 70px;
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
        .mine {
          width: 40px;
          height: 40px;
          background-color: $primary;
          color: $white;
          font-weight: bold;
          border-radius: 25px;
          font-size: 20px;
          text-align: center;
          line-height: 40px;
          position: absolute;
          right: 5px;
          top: 10px;
          transition: .5s;
        }
        .add {
          margin-top: 55px;
          font-size: 60px;
          text-align: center;
          color: $primary;
          transition: .5s;
        }
        &:hover {
          .folder {
            background-image: url('../../assets/img/projects_hover.png');
          }
          .mine {
            transform: scale(1.2);
            background-color: $gray1;
          }
          .add {
            transform: rotate(180deg);
            color: $gray1;
          }
        }
      }
    }
  }
}
</style>
