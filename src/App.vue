<template lang='pug'>
  #app
    img(src="./assets/logo.png")
    h1 {{ com }}
    md-button(class='md-primary') Primary
    md-button(class='md-accent') Accent
    md-button(class='md-warn') Warn
    md-button(class='md-primary' disabled) Disabled
    router-view
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      test: 'test'
    }
  },
  computed: {
    com: () => `${this.test} computed`
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
