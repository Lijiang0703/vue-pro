<template>
	<div class="tab">
		<ul class="tab_list">
			<router-link tag= "li" to="./recommend" class="link-item">
				<span>推荐</span>
			</router-link>
			<router-link tag= "li" to="./singer" class="link-item">
				<span>歌手</span>
			</router-link>
			<router-link tag= "li" to="./rank" class="link-item">
				<span>排行</span>
			</router-link>
			<router-link tag= "li" to="./search" class="link-item">
				<span>搜索</span>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style lang="stylus">
@import '~common/style/variable'
.tab
	padding:10px
	height:36px
	// box-sizing:border-box
	.tab_list
		width:100%
		display:flex
		align-item:flex-end
		flex-wrap:no-wrap
	.link-item
		flex-grow:1
		text-align:center
		color : $font_normal_color
		span
			padding:5px 0
			font-size:$font_normal_size
		&.router-link-active 
			color: $font_highlight_color
			span
				border-bottom:2px solid $font_highlight_color

</style>