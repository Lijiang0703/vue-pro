<template>
	<div class="search">
		<div class="search_input">
			<input type="text" placeholder="输入你想搜索的">
		</div>
		<div class="search_recommend">
			<p class="title">热门搜索</p>
			<div class="keywords">
				<p class="item">无条件</p>
				<p class="item">双世宠妃</p>
				<p class="item">无条件</p>
				<p class="item">林忆莲</p>
				<p class="item">无条件</p>
			</div>
		</div>
		<div class="search_history">
			<div class="title">
				<p>搜索历史</p>
				<span></span>
			</div>
			<div class="hist_list">
				<ul>
					<li>
						<a href="#">双世宠妃</a>
						<span>x</span>
					</li>
				</ul>
			</div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	
</script>

<style lang="stylus">
@import '~common/style/variable'
.search
	padding:20px
.search_input
	margin-bottom:15px
	input
		box-sizing:border-box
		background:$background_content
		width:100%
		border-radius:5px
		color:$font_normal_color
		font-size:$font_title_size
		padding:10px 
.search_recommend
	margin-bottom:15px
	.title
		color:$font_highlight_color
		font-size:$font_navbar_size
		margin-bottom:15px
	.keywords
		display:flex
		flex-wrap:wrap
		p.title
			color:$font_normal_color
		p.item
			padding:5px 10px
			border-radius: 5px
			margin:10px 20px 0 0
			color:$font_normal_color
			background:$font_content_color
.search_history
	.title
		// color:$font_normal_color
		color:$font_highlight_color
		font-size:$font_navbar_size
		margin-bottom:15px
	.hist_list
		position:relative
		a
			color:$font_normal_color
			font-size:$font_title_size
		span
			position:absolute
			top:0
			right:0
			color:$font_normal_color
			font-size:$font_navbar_size
</style>