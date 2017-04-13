<template lang='pug'>
.members
  .name 專案成員
    span.numbers 25
  .memberWrap
    md-layout
      md-layout(md-flex="25")
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
          .tr
            .td
              img
              | Alex
            .td ann8534621@gmail.com
            .td 成員
            .td
              .remove -
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
    .input {
      width: 100%;
      background-color: $white;
      padding: 5px 25px 5px 40px;
      margin-bottom: 25px;
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
  }
}
</style>
