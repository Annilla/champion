<template lang='pug'>
section.teamMembers
  h1
    img(src='../../assets/img/iconkingston.jpg')
    | Kingston
  .content
    .membersTeam
      .name 團隊成員
        span.numbers 5
      .memberWrap
        md-layout(md-gutter="24")
          md-layout.inputWrap(md-flex="25")
            md-layout.input.search(md-flex="100")
              md-layout
                md-input-container
                  label 使用者帳號
                  md-input(placeholder="搜尋團隊成員 ∙∙∙∙∙∙")
              md-layout(md-flex="15", md-align="end")
                .icon
                  svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                    path.st0(d="M12.9,22.3c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S18.1,22.3,12.9,22.3zM12.9,4.9c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S17.3,4.9,12.9,4.9z")
                    path.st0(d="M25.4,26.5L18.9,20l1-1l6.5,6.5L25.4,26.5")
            md-layout.input.addMember(md-flex="100")
              md-layout
                md-input-container
                  label 接收邀請的信箱
                  md-input(placeholder="新增團隊成員 ∙∙∙∙∙∙")
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
                .td 離開團隊
            .memWrap
              .table
                .tr(v-for='(member, index) in members')
                  .td
                    img(:src='member.img', width='100%', height='auto')
                    | {{ member.name }}
                  .td {{ member.account }}
                  .td
                    md-input-container
                      label(:for='"role"+index')
                      md-select(:name='"role"+index', :id='"role"+index', v-model='selects[index].role')
                        md-option(value="成員") 成員
                        md-option(value="專案經理") 專案經理
                        md-option(value="領導者") 領導者
                  .td
                    .remove
                      svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 595.3 568.4", xml:space="preserve")
                        path.st0(d="M421,400.9l116.8-116.7L421,167.4l28.8-28.7l145.5,145.5L449.8,429.7L421,400.9")
                        path.st0(d="M566.5,262.3v43.7H107.4v-43.7H566.5z")
                        path.st0(d="M0,502.8V65.6C0,29.4,29.4,0,65.6,0h393.5v43.7H65.6c-12.1,0-21.9,9.8-21.9,21.9v437.2c0,12.1,9.8,21.9,21.9,21.9h393.5v43.7H65.6C29.4,568.4,0,539.1,0,502.8")
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
      ],
      selects: [
        { role: '成員' },
        { role: '成員' },
        { role: '專案經理' },
        { role: '領導者' },
        { role: '成員' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.teamMembers {
  padding-top: 10px;
  h1 {
    margin-left: 40px;
    @include pageH1;
    margin-bottom: 33px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      transform: translateY(-10px);
    }
  }
  .content {
    background-color: $gray3;
    padding: 0px; 
    height: calc(100vh - 137px);
    .membersTeam {
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
                color: $gray1;
                width: 128px;
                padding: 0;
              }
              &:nth-child(4) {
                text-align: center;
                padding-right: 20px;
                width: 20%;
              }
              .remove {
                display: inline-block;
                width: 20px;
                cursor: pointer;
                svg {
                  .st0 {
                    fill: $gray1;
                    transition: .5s;
                  }
                }
                &:hover {
                  svg {
                    .st0 {
                      fill: $warn;
                    }
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

  }
}
</style>
