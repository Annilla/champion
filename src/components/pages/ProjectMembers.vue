<template lang='pug'>
.members
  .name 專案成員
    span.numbers 5
  .memberWrap
    md-layout(md-gutter="24")
      md-layout.inputWrap(md-flex="25")
        md-layout.input.search(md-flex="100")
          md-layout
            md-input-container
              label 使用者帳號
              md-input(placeholder="搜尋專案成員 ∙∙∙∙∙∙")
          md-layout(md-flex="15", md-align="end")
            .icon
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.9,22.3c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S18.1,22.3,12.9,22.3zM12.9,4.9c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S17.3,4.9,12.9,4.9z")
                path.st0(d="M25.4,26.5L18.9,20l1-1l6.5,6.5L25.4,26.5")
        md-layout.input.addMember(md-flex="100")
          md-layout
            md-input-container
              label 使用者帳號
              md-input(placeholder="邀請使用者加入 ∙∙∙∙∙∙")
          md-layout(md-flex="10", md-align="end")
            .icon
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M6,14h18v2H6V14z")
                path.st0(d="M14,6h2v18h-2V6z")
      md-layout
        .table
          .tr.title
            .td 使用者
            .td 帳號
            .td 權限
            .td 退出專案
        .memWrap
          .table
            .tr(v-for='member in members')
              .td
                img(:src='member.img', width='100%', height='auto')
                | {{ member.name }}
              .td {{ member.account }}
              .td {{ member.role }}
              .td
                .remove
</template>

<script>
export default {
  data: function () {
    return {
      members: [
        {
          name: 'Alex',
          account: 'ann8534621@gmail.com',
          role: '成員',
          img: 'https://placeimg.com/60/60/people?1'
        },
        {
          name: 'Bob',
          account: 'abe3516315@gmail.com',
          role: '成員',
          img: 'https://placeimg.com/60/60/people?2'
        },
        {
          name: 'Cam',
          account: 'camdklul@gmail.com',
          role: '專案經理',
          img: 'https://placeimg.com/60/60/people?8'
        },
        {
          name: 'Dennis',
          account: 'clkji@gmail.com',
          role: '領導者',
          img: 'https://placeimg.com/60/60/people?4'
        },
        {
          name: 'Eason',
          account: 'eason@gmail.com',
          role: '成員',
          img: 'https://placeimg.com/60/60/people?5'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.members {
  padding: 0 40px;
  height: 100%;
  overflow: hidden; 
  .name {
    padding-top: 40px;
    @include pageH2;
    display: flex;
    align-items: center;
    .numbers {
      padding: 3px 20px;
      background-color: $white;
      color: $primary;
      font-size: 18px;
      border-radius: 15px;
      margin-left: 20px;
    }
  }
  .memberWrap {
    .inputWrap {
      height: 0px;
    }
    .input {
      width: 100%;
      background-color: $white;
      padding: 5px 25px 5px 40px;
      margin-bottom: 25px;
      border-radius: 5px;
    }
    .icon {
      width: 30px;
      height: 30px;
      margin: 20px 0 0 0;
      cursor: pointer;
      svg {
        .st0 {
          fill: $primary;
          transition: .5s;
        }
      }
      &:hover {
        svg {
          .st0 {
            fill: $gray1;
          }
        }
      }
    }
    .memWrap {
      width: 100%;
      height: calc(100% - 109px - 25px);
      overflow-y: scroll;
      @include scrollBar;
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .table {
      width: 100%;
      background-color: $white;
      display: table;
      .tr {
        display: table-row;
        transition: .5s;
        &:not(.title):hover {
          box-shadow: 0 3px 6px $accent_30;
          .td:first-child {
            &:after {
              content: '';
              display: block;
              width: 5px;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background-color: $primary;
            }
          }
        }
        .td {
          display: table-cell;
          padding-top: 10px;
          padding-bottom: 10px;
          position: relative;
          &:nth-child(1) {
            padding-left: 40px;
            color: $black;
            font-weight: bold;
            width: 30%;
            img {
              width: 60px;
              height: 60px;
              border-radius: 30px;
              margin-right: 20px;
            }
          }
          &:nth-child(3) {
            text-align: right;
            color: $gray1;
          }
          &:nth-child(4) {
            text-align: center;
            padding-right: 20px;
            width: 20%;
          }
          .remove {
            display: inline-block;
            text-align: center;
            padding: 3px 10px;
            border-radius: 20px;
            border: 1px solid $gray1;
            cursor: pointer;
            transition: .5s;
            &:before {
              content: '';
              display: inline-block;
              width: 10px;
              height: 1px;
              background-color: $gray1;
              transform: translateY(-5px);
            }
            &:hover {
              border: 1px solid $warn;
              background-color: $warn;
              &:before {
               background-color: $white;
              }
            }
          }
        }
        &.title {
          .td {
            font-size: 20px;
            color: $accent_50;
            font-weight: bold;
            padding-top: 30px;
            padding-bottom: 30px;
          }
        }
      }
    }
  }
}
</style>
