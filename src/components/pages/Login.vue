<template lang='pug'>
  main.login
    .loginWrap
      .icon
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 100 100.4", xml:space="preserve")
          path(d="M64.1,31.2c0-0.5,0-1,0-1.5v-1.5H35.8v1.5c0,0.5,0,1,0,1.5h-7.7v1.5c0,16.1,12.2,20,13.7,20.4c1.2,1.5,2.5,2.6,3.6,3.5c2.2,1.9,3.3,3,3.3,5.3v4.5c-2.1,0.2-4.1,1.1-4.8,2.9H41c-1.5,0.1-2.7,1.4-2.6,2.9h23.2c0.1-1.5-1.1-2.8-2.6-2.9h-2.9c-0.7-1.8-2.8-2.6-4.8-2.9v-4.5c0-2.3,1.1-3.4,3.3-5.3h0c1.1-1,2.3-2,3.6-3.5c1.6-0.4,13.7-4.3,13.7-20.4v-1.5H64.1z M30.7,34.1H36c0.4,6.8,1.6,11.4,3.2,14.7C35.9,46.9,31.2,42.7,30.7,34.1z M53,54.3c-1.1,0.9-2.2,2-3,3.1c-0.9-1.2-1.9-2.2-3-3.1c-3.5-3.1-8.3-7.2-8.6-23.1h23.2C61.3,47,56.5,51.2,53,54.3z M60.8,48.8c1.6-3.3,2.9-8,3.2-14.8h5.2C68.8,42.8,64.1,47,60.8,48.8z")
      .formWrap
        .title 歡迎回來 Champion !
        form
          md-input-container
            label 帳號
            md-input(placeholder="帳號")
          md-input-container(md-has-password)
            label 密碼
            md-input(placeholder="密碼", type="password")
          md-button.forgot 忘記密碼?
          md-button.md-raised.md-primary.loginBtn(@click.native='changePage') 登入
          .signin 還沒有帳號嗎？ 趕快來
            a(href='#') 註冊
            | 吧！
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    changePage: function () {
      this.$emit('page', 'MyTasks')
      this.$emit('nav', 'hasNav')
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/variables.scss';

.login {
  width: 100vw;
  height: 100vh;
  background-color: $gray3;
  background-image: url('../../assets/img/loginbg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10%;
  .loginWrap {
    width: 600px;
    margin: 0 auto;
    position: relative;
    padding-top: 100px;
    .icon {
      width: 200px;
      height: 200px;
      margin: 0 200px;
      background-color: $primary;
      border-radius: 100px;
      position: absolute;
      top: 0;
      animation: fadeInDown 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      svg {
        path {
          fill: $white;
        }
      }
    }
    .formWrap {
      background-color: $white;
      border-radius: 30px;
      padding: 130px 0 0 0;
      .title {
        font-size: 40px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 50px;
        animation: fadeInUp 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      form {
        padding: 0 90px 50px 90px;
        .forgot {
          margin: -20px 0 50px 0;
          float: right;
          color: $gray1;
        }
        .loginBtn {
          width: 100%;
          font-size: 21px;
          font-weight: bold;
          line-height: 60px;
          border-radius: 30px;
          margin: 0 0 30px 0;
        }
        .signin {
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: $gray1;
          a {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
