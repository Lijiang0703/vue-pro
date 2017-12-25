<template>
	<div class="detail">
		<div class="bar" ref="bar">
			<img src="../../common/image/back.png" alt="" class="back" @click="back">
			<span class="title" v-text="topTitle"></span>
		</div>
		<div class="topbanner" :style="{'background-image':'url('+logo+')'}"  ref="baner">
			<div class="play_random">
				<div class="wrap" @click="palyByRandom">
					<img src="../../common/image/play.png" alt="">
					<span>随机播放全部</span>
				</div>
			</div>
			<div class="mask"></div>
		</div>
		<div class="backlayer" ref="backlayer"></div>
		<Scroll :listenScroll="true" :probeType="3" :pullingUp="true" @pullingUp="pullUp" @scroll="scroll" class="listwrap" >
			<list :lists="lists" @selectItem="playSong"></list>
		</Scroll>
	</div>
</template>
<script type="text/javascript">
import * as api from 'common/js/banner'
import List from 'base/list/list'
import Scroll from 'base/scroll/scroll'
import {mapActions} from 'vuex'

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
					$this.lists = $this.parseList(data.songlist);
				}
			})
		},
		parseList:function(lists){
			let newlists = [];
			for(let i=0;i<lists.length;i++){
				let list = lists[i];
				newlists.push({
					name:list.title
					// singer:
					// image:
				})
			}
		},
		palyByRandom:function(){
			//随机播放
		},
		palyImmediate:function(id){
			//立即播放
		},
		scroll:function(pos){
			this.scrollY = pos.y;
		},
		pullUp:function(p){
			console.log(p);
			this.scrollY = pos.y;
		},
		playSong:function(item,key){
			this.setplaying({
				songlist:this.lists,
				index:key
			})
			console.log(item);
		},
		...mapActions(['setplaying'])
	},
	watch:{
		scrollY:function(val){
			const top = this.$refs.backlayer.offsetTop;
			const bar = this.$refs.bar.clientHeight;
			const baner = this.$refs.baner.clientHeight;
			let index,scale;

			if(this.y== undefined) this.y = baner;
			if(val<0){
				const backheight = Math.max(this.y+val,bar);
				if(this.y+val < bar){
					index = 12;
					this.$refs.baner.style['padding-top'] = 0;
					this.$refs.baner.children[0].style.display ='none';
				}else {
					index = 0;
					this.$refs.baner.style['padding-top'] = '70%';
					this.$refs.baner.children[0].style.display ='block';
				}
				this.$refs.baner.style['z-index'] = index;
				this.$refs.baner.style.height = backheight +'px';
				this.$refs.backlayer.style.transform =  'translate3d(0,'+val+'px,0)';
			}else{
				//放大动画
				scale = val/this.y + 1;
				this.$refs.baner.style.transform = 'scale('+scale+')';
				this.$refs.baner.style['z-index'] = 12;				
				this.$refs.backlayer.style.transform =  'translate3d(0,'+val+'px,0)';
			}

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
		position:relative
		// top:topH
		// z-index:10
		background:$backround_color
	.listwrap
		width:100%
		position:fixed
		top:topH
		bottom:0
		z-index:10
	.bar
		position:fixed
		z-index:50
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
	.topbanner
		width:100%
		height:0
		padding-top:70%
		background-repeat:no-repeat
		background-size:cover
		// height:topH
		position:relative
		.play_random
			position:absolute
			bottom: 20px
			z-index:2
			width:100%
			// margin-top:itop+ptop*2
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
			position:absolute
			left:0
			top:0
			bottom:0
			background:rgba(0,0,0,0.6)
			z-index:0
			// opacity:0.6
</style>
