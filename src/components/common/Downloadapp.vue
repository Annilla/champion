<template lang='pug'>
	section.downloadapp
		.head
			.icon
				svg(version="1.1", xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 100 100.4", xml:space="preserve")
					path(d="M64.1,31.2c0-0.5,0-1,0-1.5v-1.5H35.8v1.5c0,0.5,0,1,0,1.5h-7.7v1.5c0,16.1,12.2,20,13.7,20.4c1.2,1.5,2.5,2.6,3.6,3.5c2.2,1.9,3.3,3,3.3,5.3v4.5c-2.1,0.2-4.1,1.1-4.8,2.9H41c-1.5,0.1-2.7,1.4-2.6,2.9h23.2c0.1-1.5-1.1-2.8-2.6-2.9h-2.9c-0.7-1.8-2.8-2.6-4.8-2.9v-4.5c0-2.3,1.1-3.4,3.3-5.3h0c1.1-1,2.3-2,3.6-3.5c1.6-0.4,13.7-4.3,13.7-20.4v-1.5H64.1z M30.7,34.1H36c0.4,6.8,1.6,11.4,3.2,14.7C35.9,46.9,31.2,42.7,30.7,34.1z M53,54.3c-1.1,0.9-2.2,2-3,3.1c-0.9-1.2-1.9-2.2-3-3.1c-3.5-3.1-8.3-7.2-8.6-23.1h23.2C61.3,47,56.5,51.2,53,54.3z M60.8,48.8c1.6-3.3,2.9-8,3.2-14.8h5.2C68.8,42.8,64.1,47,60.8,48.8z")
		.title Ooops!
		.description 抱歉，Champion 不支援行動裝置瀏覽器。
			br
			| 不過，我們有專用的應用程式。
			span 請去以下商店免費下載。
		md-layout.store(md-gutter='8')
			md-layout(md-flex-xsmall='100', md-flex-small='50')
				a(href='#')
					img(src='../../assets/img/appstore.svg')
			md-layout(md-flex-xsmall='100', md-flex-small='50')
				a(href='#')
					img(src='../../assets/img/googleplay.svg')
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/variables.scss';

.downloadapp {
	text-align: center;
	@media screen and (min-width: $pcWid) {
		display: none;
	}
	@media screen and (width: $pcWid) and (height: 1366px) {
		display: block; // ipadPro
	}
	.head {
		width: 100%;
		height: 30vh;
		background: linear-gradient(to bottom, $accent 80%, $accent_0 81%);
		position: relative;
		.icon {
			width: 30vw;
			height: 30vw;
			margin: 0 35vw;
			background-color: $primary;
			border-radius: 15vw;
			position: absolute;
			bottom: 0;
			@media screen and (min-width: $tbWid) {
				width: 25vw;
				height: 25vw;
				margin: 0 37.5vw;
			}
			svg {
				path {
					fill: $white;
				}
			}
		}
	}
	.title {
		font-size: 40px;
		color: $accent;
		line-height: 1.5em;
		margin-bottom: 20px;
		@media screen and (min-width: $tbWid) {
      font-size: 60px;
    }
	}
	.description {
		color: #95989A;
		line-height: 2em;
		margin-bottom: 20px;
		@media screen and (min-width: $tbWid) {
      font-size: 18px;
    }
		span {
			display: block;
			@media screen and (min-width: $tbWid) {
	      display: inline-block;
	    }
		}
	}
	.store {
		@media screen and (min-width: $tbWid) {
      padding: 0 150px;
    }
		a {
			display: block;
			width: 230px;
			margin: 0 auto 10px auto;
			@media screen and (min-width: $tbWid) {
	      width: 100%;
	      margin: 0;
	    }
		}
	}
}
</style>
