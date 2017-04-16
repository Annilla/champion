<template lang='pug'>
.myTasksProject
  .taskWrap
    .col
      .group 創新產品
      ul.tasks
        li(v-for="(col, index) in col1", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Oct {{ index*10+1 }}
            .reply 5
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 21 19.8", xml:space="preserve")
                path.st0(d="M10.5,0C4,0,0,3.3,0,8.7c-0.1,3.2,1.7,6.2,4.5,7.5c-0.1,0.7-0.4,1.4-0.8,1.9l-1.2,1.7h2c0.1,0,0.2,0,0.3,0c2,0,4-0.9,5.4-2.4c0.1,0,0.1,0,0.2,0c6.6,0,10.5-3.3,10.5-8.7C21,3.3,17,0,10.5,0z M6.1,14.6c-2.5-0.8-4.1-3.3-4-5.9c0-4.2,3.1-6.6,8.4-6.6c5.3,0,8.4,2.5,8.4,6.6c0,2.5-1.1,6.6-8.4,6.6c-0.2,0-0.4,0-0.5,0l-0.6,0L9,15.8c-0.7,0.9-1.6,1.5-2.6,1.8c0.2-0.6,0.3-1.2,0.4-1.8l0.1-0.8L6.1,14.6z")
    .col
      .group 海外拓展
      ul.tasks
        li(v-for="(col, index) in col2", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Nov {{ index*3+1 }}
            .reply 5
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 21 19.8", xml:space="preserve")
                path.st0(d="M10.5,0C4,0,0,3.3,0,8.7c-0.1,3.2,1.7,6.2,4.5,7.5c-0.1,0.7-0.4,1.4-0.8,1.9l-1.2,1.7h2c0.1,0,0.2,0,0.3,0c2,0,4-0.9,5.4-2.4c0.1,0,0.1,0,0.2,0c6.6,0,10.5-3.3,10.5-8.7C21,3.3,17,0,10.5,0z M6.1,14.6c-2.5-0.8-4.1-3.3-4-5.9c0-4.2,3.1-6.6,8.4-6.6c5.3,0,8.4,2.5,8.4,6.6c0,2.5-1.1,6.6-8.4,6.6c-0.2,0-0.4,0-0.5,0l-0.6,0L9,15.8c-0.7,0.9-1.6,1.5-2.6,1.8c0.2-0.6,0.3-1.2,0.4-1.8l0.1-0.8L6.1,14.6z")
    .col
      .group 產學合作
      ul.tasks
        li(v-for="(col, index) in col3", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Dec {{ index*7+1 }}
            .reply 5
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 21 19.8", xml:space="preserve")
                path.st0(d="M10.5,0C4,0,0,3.3,0,8.7c-0.1,3.2,1.7,6.2,4.5,7.5c-0.1,0.7-0.4,1.4-0.8,1.9l-1.2,1.7h2c0.1,0,0.2,0,0.3,0c2,0,4-0.9,5.4-2.4c0.1,0,0.1,0,0.2,0c6.6,0,10.5-3.3,10.5-8.7C21,3.3,17,0,10.5,0z M6.1,14.6c-2.5-0.8-4.1-3.3-4-5.9c0-4.2,3.1-6.6,8.4-6.6c5.3,0,8.4,2.5,8.4,6.6c0,2.5-1.1,6.6-8.4,6.6c-0.2,0-0.4,0-0.5,0l-0.6,0L9,15.8c-0.7,0.9-1.6,1.5-2.6,1.8c0.2-0.6,0.3-1.2,0.4-1.8l0.1-0.8L6.1,14.6z")
</template>

<script>
export default {
  data: function () {
    return {
      col1: [
        { name: '找相關產品資料' },
        { name: '分析需求' },
        { name: '討論伺服器架構' }
      ],
      col2: [
        { name: '準備研討會事宜' },
        { name: '整理會議筆記' }
      ],
      col3: [
        { name: '製作員工大會簡報' },
        { name: '採購設備' },
        { name: '備份檔案' },
        { name: '通知合作廠商' }
      ]
    }
  },
  methods: {
    openComments: function (taskTitle) {
      this.$emit('popup', 'comments')
      this.$emit('tasktitle', taskTitle)
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.myTasksProject {
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  .taskWrap {
    padding: 40px 0 40px 40px;
    height: 100%;
    width: 150%;
    .col {
      float: left;
      margin-right: 40px;
      height: 100%;
      overflow: hidden;
      .group {
        @include pageH2;
      }
      ul.tasks {
        height: calc(100% - 60px);
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        @include scrollBar;
        &::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
        }
        li {
          list-style: none;
          display: block;
          width: 340px;
          background-color: $white;
          border-radius: 5px;
          padding: 20px 30px;
          cursor: pointer;
          transition: all .5s;
          overflow: hidden;
          margin-top: 10px;
          .title {
            margin-bottom: 20px;
            .complete {
              width: 30px;
              height: 30px;
              float: right;
              border: 1px solid $primary;
              border-radius: 15px;
              box-sizing: border-box;
              cursor: pointer;
              background-color: $primary;
              transform-origin: 50% 50%;
              transform: translateX(30px);
              opacity: 0;
              transition: all .5s;
              svg {
                display: block;
                transform-origin: 50% 50%;
                transform: rotate(360deg);
                transition: all .5s;
                .st0 {
                  fill: $white;
                }
              }
              &:hover {
                background-color: $white;
                svg {
                  .st0 {
                    fill: $primary;
                  }
                }
              }
            }
          }
          .time {
            color: $gray1;
            .reply {
              float: right;
              color: $warn;
              line-height: 27px;
              svg {
                width: 18px;
                height: 18px;
                margin-top: -3px;
                margin-left: 10px;
                fill: $warn;
              }
            }
          }
        }
        li:hover {
          box-shadow: 0 3px 6px $accent_30;
          .title {
            .complete {
              transform: translateX(0);
              opacity: 1;
              svg {
                transform: rotate(0);
              }
            }
          }
        }
      }
    }
  }
}
</style>
