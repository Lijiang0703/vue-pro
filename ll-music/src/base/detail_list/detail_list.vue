<template>
	<div class="detail">
		<div class="topbanner" :style="{'background-image':'url('+logo+')'}">
			<div class="bar">
				<img src="../../common/image/back.png" alt="" class="back" @click="back">
				<span class="title" v-text="topTitle"></span>
			</div>
			<div class="play_random">
				<div class="wrap" @click="palyByRandom">
					<img src="../../common/image/play.png" alt="">
					<span>随机播放全部</span>
				</div>
			</div>
			<div class="mask"></div>
		</div>
		<Scroll :listenScroll="true" :probeType="3" @scroll="scroll" class="listwrap">
			<list :lists="lists"></list>
		</Scroll>
		<div class="backlayer" ref="backlayer"></div>
	</div>
</template>
<script type="text/javascript">
import * as api from 'common/js/banner'
import List from 'base/list/list'
import Scroll from 'base/scroll/scroll'

export default{
	data(){
		return {
			logo:"",
			topTitle:"",
			lists:[],
			scrollY:0
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
			let $this = this;
			this.$store.dispatch('getsong',this.$route.params.id).then(function(data){
				if(data){
					$this.logo = data.logo;
					$this.topTitle = data.dissname;
					$this.lists = data.songlist;
				}
			})
		},
		palyByRandom:function(){
			//随机播放
		},
		palyImmediate:function(id){
			//立即播放
		},
		scroll:function(pos){
			this.scrollY = pos.y;
		}
	},
	watch:{
		scrollY:function(val){
			const top = this.$refs.backlayer.offsetTop;
			this.$refs.backlayer.style.top =  top + val +'px';
		}
	},
	components:{
		List,
		Scroll
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
topH = 250px
.detail
	background:$backround_color
	display:flex
	flex-direction:row-reverse
	flex-wrap:wrap
	height:100%
	.backlayer
		width:100%
		height:100%
		position:absolute
		top:topH
		z-index:9
		background:$backround_color
	.listwrap
		width:100%
		position:fixed
		top:topH
		bottom:0
		z-index:10
	.topbanner
		width:100%
		// background:#666
		background-repeat:no-repeat
		background-size:cover
		height:topH
		position:relative
		.bar
			position:fixed
			z-index:2
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
			z-index:2
			width:100%
			margin-top:itop+ptop*2
			.wrap
				border:2px solid $font_highlight_color
				border-radius:20px
				// width:150px
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
</style>
