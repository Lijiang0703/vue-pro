<template>
	<div class="detail">
		<div class="topbanner" :style="{'background-image':'url('+logo+')'}">
			<div class="bar">
				<img src="../../common/image/back.png" alt="" class="back" @click="back">
				<span class="title" v-text="topTitle"></span>
			</div>
			<div class="play_random">
				<div class="wrap">
					<img src="../../common/image/play.png" alt="">
					<span>随机播放全部</span>
				</div>
			</div>
			<div class="mask"></div>
		</div>
		<div class="list">
			<ul>
				<li v-for="(item,key) in lists">
					<div class="listitem">
						<div class="left" v-if="showIndex">
							<p class="index" v-text="key"></p>
						</div>
						<div class="right">
							<p class="title" v-text="item.title"></p>
							<p class="content" v-text="item.singer[0].title"></p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import * as api from 'common/js/banner'
export default{
	data(){
		return {
			logo:"",
			topTitle:"",
			lists:[]
		}
	},
	props:['id'],
	computed:{
		showIndex :function(){
			return this.$route.params.showIndex;
		}
	},
	created:function(){
		this.getList();
	},
	methods:{
		back:function(){
			this.$router.go(-1);
		},
		getList:function(){
			var $this = this;
			api.getSongList(this.$route.params.id).then(function(data){
				if(data.code == 0){
					var _data = data.cdlist[0];
					$this.logo = _data.logo;
					$this.topTitle = _data.dissname
					$this.lists = _data.songlist;
				}
			});
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
listh = 60px
.detail
	display:flex
	flex-direction:row-reverse
	flex-wrap:wrap
	.topbanner
		width:100%
		background:#666
		background-repeat:no-repeat
		background-size:cover
		height:250px
		position:relative
		.bar
			position:fixed
			z-index:10
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
			z-index:10
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
		.mask
			width:100%
			height:100%
			position:absolute
			left:0
			top:0
			background:#000
			z-index:1
			opacity:0.6
										
	.list			
		width:100%
		.listitem
			display:flex
			height:listh
			.left
				flex-grow:1
				// flex-shrink:0
				// flex-basis:60px
				// width:60px
				text-align:center
				color:$font_highlight_color
				p
					margin-top:50%
					transform:translateY(-50%)
					-webkit-transform:translateY(-50%)
					height:20px
					line-height:20px
					font-size:$font_navbar_size
					font-weight:400
			.right
				flex-grow:3
				flex-shrink:1
				.title
					margin-top:5px
					color:$font_normal_color
					font-size:$font_title_size
				.content
					// width:100%
					// overflow:hidden
					// white-space: nowrap
					// text-overflow:ellipsis
					// -webkit-text-overflow:ellipsis
					font-size:$font_navbar_size
					margin-top:ptop
					color:$font_content_color
					font-size:$font_normal_size
</style>
