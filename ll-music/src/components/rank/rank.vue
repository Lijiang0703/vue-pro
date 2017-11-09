<template>
	<div class="rank">
		<div class="rank_item">
			<div class="left">
				<img src="../../common/image/logo.png" alt="" width='100' height='100'>
			</div>
			<div class="right">
				<ul>
					<li><p>1 流行－李宇春</p></li>
					<li><p>2 爱你－林俊杰</p></li>
					<li><p>3 Sleep-王源</p></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style lang="stylus">
@import '~common/style/variable'
.rank_item
	padding:20px 10px
	display:flex
	.left
		img
			background:#fff
	.right
		flex-grow:2	
		padding:20px
		background:$background_content
		color:$font_normal_color
		li
			color:$font_normal_size
			line-height:$font_normal_lineheight
</style>