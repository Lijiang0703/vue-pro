<template>
	<div class="detail">
		<div class="topbanner">
			<div class="bar">
				<img src="../../common/image/back.png" alt="" class="back" @click="back">
				<span class="title">广汽传祺 巅峰榜 流行指数</span>
			</div>
			<div class="play_random">
				<div class="wrap">
					<img src="../../common/image/play.png" alt="">
					<span>随机播放全部</span>
				</div>
			</div>
		</div>
		<div class="list">
			<ul>
				<li>
					<div class="listitem">
						<div class="left" v-if="showIndex">
							<p class="index">1</p>
						</div>
						<div class="right">
							<p class="title">爱如潮水</p>
							<p class="content">GAI.蒙面唱将猜猜猜第二季 第9期</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			showIndex :true
		}
	},
	methods:{
		back:function(){
			this.$router.go(-1);
		}
	}
}
</script>
<style lang="stylus">
@import '~common/style/variable'
itop = 40px
imgsize = 30px
ptop = 10px
pleft= 15px
.detail
	display:flex
	flex-direction:row-reverse
	flex-wrap:wrap
	.topbanner
		width:100%
		background:#666
		height:250px
		position:relative
		.bar
			position:fixed
			top:0
			left:0
			text-align:center
			width:100%
			height:itop
			display:flex
			padding:ptop pleft
			.back
				width:imgsize
				height:imgsize
			.title
				text-align:center
				flex-grow:1
				height:imgsize
				line-height:imgsize
				overflow:hidden
				white-space: nowrap
				text-overflow:ellipsis
				-webkit-text-overflow:ellipsis
				font-size:$font_navbar_size
		.play_random
			position:absolute
			bottom: pleft
			width:100%
			margin-top:itop+ptop*2
			.wrap
				border:2px solid $font_highlight_color
				border-radius:20px
				width:150px
				padding:5px ptop
				margin-left:50%
				transform:translateX(-50%)
				display:flex
				img
					width:imgsize
					height:imgsize
				span
					margin-left:ptop
					text-align:center
					height:imgsize
					line-height:imgsize
										
	.list			
		width:100%
		.listitem
			display:flex
			.left
				flex-grow:1
				text-align:center
				color:$font_highlight_color
				p
					margin-top:50%
					transform:translateY(-50%)
					font-size:$font_navbar_size
					font-weight:400
			.right
				flex-grow:3
				.title
					margin-top:5px
					color:$font_normal_color
					font-size:$font_title_size
				.content
					margin-top:ptop
					color:$font_content_color
					font-size:$font_normal_size
</style>
