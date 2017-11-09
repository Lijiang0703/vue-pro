<template>
	<div class="list">
		<ul class="list_container">
			<li class="">
				<div class="list_item">
					<div class="left">
						<img src="../../common/image/logo.png" alt="" width="60" height="60">
					</div>
					<div class="right">
						<p class="title">还不是因为你长的好看</p>
						<p class="content">励志：纵使磨难虐我千遍，我依然微笑如初</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang='stylus'>
@import '~common/style/variable'
.list
	padding:20px
.list_item
	display:flex
	.left 
		flex-grow:0
		flex-shrink:1
		img
			background-color:#fff
	.right
		padding-left:15px
		flex-grow:4
		flex-shrink:1
		p
			&.title
				padding-top:5px
				color:$font_normal_color
				text-align:left
				font-size:$font_title_size
				padding-bottom:10px
			&.content
				color:$font_content_color
				text-align:left
				font-size:$font_normal_size
				line-height:20px
</style>