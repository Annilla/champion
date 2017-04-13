<template lang='pug'>
.comments
  .closeBtn(@click='closePopup')
    svg(version="1.1", xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
      polygon.st0(points="40,3 37,0 20,17 3,0 0,3 17,20 0,37 3,40 20,23 37,40 37,40 40,37 23,20 ")
  .commentWrap
    md-layout.top
      md-layout.title(md-flex="80") {{ this.title }}
      md-layout.date(md-align="end") Oct 10
        .head
          img(src='../../assets/img/head1.jpg', width='100%', height='auto')
    .diaWrap
      md-layout.dialog
        md-layout(md-flex="5")
          img.photo(src='../../assets/img/head2.jpg', width='100%', height='auto')
        md-layout.txt
          span.name Martin
          span.time Jan 12 at 10:05
          .paragraph 廠商A樣品品質不佳，不考慮合作，廠商B和廠商C尚待對方寄樣品
      md-layout.dialog
        md-layout(md-flex="5")
          img.photo(src='../../assets/img/head1.jpg', width='100%', height='auto')
        md-layout.txt
          span.name Alex
          span.time Jan 20 at 13:32
          .paragraph C廠商樣品已收到，附件為安全合格證
            a.attatch C廠商安全合格證.pdf
      md-layout.dialog
        md-layout(md-flex="5")
          img.photo(src='../../assets/img/head2.jpg', width='100%', height='auto')
        md-layout.txt
          span.name Martin
          span.time Jan 30 at 11:40
          .paragraph C廠商樣品不錯，B廠商樣品可以在星期五前拿到嗎?
    md-layout.bottom
      md-layout(md-flex="65")
        md-input-container
          label 輸入訊息 ∙∙∙∙∙∙
          md-textarea
      md-layout
        md-layout.icon(md-flex="25")
          img(src='../../assets/img/commentcamera.svg')
        md-layout.icon(md-flex="25")
          img(src='../../assets/img/commentphoto.svg')
        md-layout.icon(md-flex="25")
          img(src='../../assets/img/commentemoji.svg')
        md-layout.icon(md-flex="25")
          img(src='../../assets/img/commentattach.svg')
</template>

<script>
export default {
  data: function () {
    return {
      title: this.initTitle
    }
  },
  props: {
    initTitle: String
  },
  methods: {
    closePopup: function () {
      this.$emit('popup', '')
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.comments {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $white_90;
  z-index: 2;
  overflow: hidden;
  animation: fadeInUp 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  .closeBtn {
    width: 40px;
    height: 40px;
    float: right;
    margin: 20px 20px 0 0;
    cursor: pointer;
    transition: all .5s;
    svg {
      .st0 {
        fill: $gray1;
        transition: all .5s;
      }
    }
    &:hover {
      transform: rotate(180deg);
      svg {
        .st0 {
          fill: $primary;
        }
      }
    }
  }
  .commentWrap {
    width: 1024px;
    padding: 0 12px;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    .top {
      padding: 110px 0 20px 0;
      border-bottom: 1px solid $gray3;
      .title {
        font-size: 40px;
        font-weight: bold;
      }
      .date {
        font-size: 20px;
        line-height: 50px;
        .head {
          margin-left: 20px;
          img {
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 25px;
          }
        }
      }
    }
    .diaWrap {
      background-color: $white;
      height: calc(100vh - 181px - 106px - 120px);
      overflow-y: scroll;
      @include scrollBar;
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
      }
      .dialog {
        margin-top: 40px;
        .photo {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }
        .txt {
          margin-left: 20px;
          .name {
            font-size: 22px;
            color: $black;
            font-weight: bold;
          }
          .time {
            color: $gray1;
            margin-left: 30px;
          }
          .paragraph {
            width: 100%;
            margin-top: 10px;
            a.attatch {
              display: block;
              color: $primary;
              margin-top: 10px;
              &:before {
                content: '';
                display: block;
                float: left;
                margin-right: 10px;
                width: 18px;
                height: 18px;
                background-image: url('../../assets/img/commentattachinner.svg');
                background-repeat: no-repeat;
                background-position: center;
              }
            }
          }
        }
      }
    }
    .bottom {
      background-color: $white;
      padding: 10px 40px 20px 40px;
      position: absolute;
      bottom: 0;
      width: calc(1000px - 80px);
      box-sizing: content-box;
      .icon {
        height: 60px;
        cursor: pointer;
        transition: all .5s;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
