<template>
	<div class="player">
		<div class="fullscreen">
			<div class="playerback" @click="fulldown">
				<img src="../../common/image/logo.png" alt="">
			</div>
			<div class="songinfo">
				<div class="packup">
					<img src="../../common/image/down.png" alt="">
				</div>
				<div class="playing-title">風化する教室</div>
				<div class="playing-singer">きのこ帝国 (蘑菇帝国)</div>
			</div>
			<div class="middle">
				<div class="playing-img">
					<div class="img-wrap" ref="imgWrap">
						<img src="../../common/image/logo.png" alt="" class="cd" style="">
					</div>
				</div>
				<div class="playing-lyrics">涙はうれしいときにこぼしたいな</div>
			</div>
			<div class="playcontrol">
				<div class="dots">
					<span class="dot active"></span>
					<span class="dot"></span>
				</div>
				<div class="playing-progress">
					<span class="current-time">3:00</span>
					<div class="progress-bar">
						<div class="progress"></div>
						<div class="progress-point"></div>
					</div>
					<span class="whole-time">3:45</span>
				</div>
				<div class="control">
					<div class="icon">
						<img src="../../common/image/sequence.png" alt="">
					</div>
					<div class="icon">
						<img src="../../common/image/backaway.png" alt="">
					</div>
					<div class="icon">
						<img src="../../common/image/play.png" alt="" class="center">
					</div>
					<div class="icon">
						<img src="../../common/image/forward.png" alt="">
					</div>
					<div class="icon">
						<img src="../../common/image/songlist.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="small"  v-if="false">
			<div class="s-playing-img">
				<img src="../../common/image/logo.png" alt="">
			</div>
			<div class="s-songinfo">
				<div class="s-playing-title">風化する教室</div>
				<div class="s-playing-singer">きのこ帝国 (蘑菇帝国)</div>
			</div>
			<div class="s-pause"></div>
			<div class="s-songlist"></div>
		</div>
		<div class="player-queue"  v-if="false">
			<div class="play-mode">
				<i></i>
				<span>单曲循环</span>
			</div>
			<div class="song-list">
				<ul>
					<li>
						<i></i>
						<span>Five(5)</span>
						<i></i>
						<i></i>
					</li>
				</ul>
			</div>
			<div class="addsong">
				<span>+ 添加歌曲到队列</span>
			</div>
			<div class="close-list">
				<span>关闭</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState} from 'Vuex'

export default{
	data(){
		return{

		}
	},
	mounted:function(){
		const $this = this;
		setTimeout(function(){
			// $this.refs.imgWrap.style.transform = 'rotate'
		},20)
	},
	methods:{
		fulldown:function(){

		}
	}
}
</script>
<style lang="stylus">
@import '~common/style/index'
showcenter(_width = 100%)
	width:_width
	margin-left:50%
	transform:translateX(-50%)
vendors = webkit moz o ms official
border-radius()
    // for vendor in vendors
    //     if vendor == official
    //         border-radius: arguments
    //     else
    //         -{vendor}-border-radius: arguments

.player
	width:100%
	// background:$background_content
	.fullscreen
		position:fixed
		top:0
		left:0
		right:0
		bottom:0
		.playerback
			position:absolute
			z-index:-1
			top:0
			bottom:0
			left:0
			right:0
			-webkit-filter:blur(20px)
			filter:blur(20px)
			opacity:0.6
			img
				width:100%
				height:100%
				display:block
		.songinfo
			margin-right:0
			margin-left:0
			.packup
				position:absolute
				left:5px
				top:5px
				img
					width:50px
			.playing-title,.playing-singer
				padding:10px 5px 5px
				text-align:center
			.playing-title
				font-size:$font_navbar_size
				font-weight:$font_nav_weight
			.playing-singer
				font-size:$font_title_size
		.middle
			margin-top:25px
			.playing-img,.playing-lyrics
				showcenter(80%)
			.playing-img
				img
					width:100%
					border-radius:50%
					border:10px solid rgba(255,255,255,0.098)
			.playing-lyrics
				margin-top:35px
				text-align:center
				color:$font_normal_color
		.playcontrol
			position:absolute
			width:100%
			bottom:50px
			.dots
				text-align:center
				margin-bottom:20px
				.dot
					background:$font_normal_color
					display:inline-block
					width:10px
					height:10px
					border-radius:50%
					margin-right:5px
					&.active
						width:20px
						background:#fff
						border-radius:5px
			.playing-progress
				showcenter(80%);
				display:flex
				align-items:center
				.current-time,.whole-time
					display:inline-block
					flex:0 0 30px
					font-size:$font_small_size
				.progress-bar
					height:5px
					flex:1
					position:relative
					display:inline-block
					background:rgba(0,0,0,0.3)
					.progress
						width:0
						height:100%
						background:$font_highlight_color
					.progress-point
						width:16px
						height:16px
						position:absolute
						top:50%
						transform:translateY(-50%)
						border:3px solid #fff
						border-radius:50%
						background-color:$font_highlight_color
				.current-time
					text-align:left
				.whole-time
					text-align:right
			.control
				display:flex
				align-items:center
				showcenter(80%);
				margin-top:30px
				.icon
					flex:1
					img
						width:40px
						// border:3px solid $font_highlight_color
						border-radius:50%
						padding:5px
						
						&.center
							width:50px
					// &.center
					// 	flex:2
	.small
		position:fixed
		width:100%
		bottom:0
		padding:10px 10px 10px 20px
		background:$background_content
		display:flex
		align-items:center
		.s-playing-img
			flex:0 0 40px
			img
				width:100%
				// background:#f09
		.s-songinfo
			padding-left:10px
			.s-playing-title
				color:$font_normal_color
				font-size:$font_normal_size
				font-weight:$font_nav_weight
				margin-bottom:10px
			.s-playing-singer
				color:$font_content_color
				font-size:$font_small_size
</style>