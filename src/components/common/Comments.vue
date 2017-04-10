<template lang='pug'>
.comments
	.closeBtn
	.commentWrap
		md-layout.top
			md-layout.title(md-flex="70")
			md-layout.date(md-flex="30") Oct 10
				.head
		.diaWrap
			md-layout.dialog
				md-layout(md-flex="10")
					img.photo(src='')
				md-layout(md-flex="90") Martin
					span.time Jan 12 at 10:05
					.paragraph 廠商A樣品品質不佳，不考慮合作，廠商B和廠商C尚待對方寄樣品
		.bottom
			input
			md-layout.iconWrap
				md-layout(md-flex="25") photo
				md-layout(md-flex="25") photo
				md-layout(md-flex="25") photo
				md-layout(md-flex="25") photo
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

.comments {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: $white_90;
	z-index: 2;
}
</style>
