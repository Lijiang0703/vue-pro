<template>
	<div class="slider" ref="slider">
		<div class="slider_group" ref="sliderGroup">
			<slot></slot>
		</div>
		<div class="sliderdots">
			<span class="dot" v-for="item in dots"></span>
		</div>
	</div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
	data(){
		return {
			dots:1
		}
	},
	props:{//轮播图控制配置
		loop:{
			type:Boolean,
			default:true
		},
		autoPlay:{
			type:Boolean,
			default:true
		},
		duration:{
			type:Number,
			default:4000
		},
		speed:{
			type:Number,
			default:400
		}
	},
	created: function(){
	},
	mounted: function(){
		var $this = this;
		setTimeout(function(){
			$this._setGroupWidth();
			let scroll = new BScroll('.slider',{
				scrollX: true,
				// tap: true,
				snap: {
					loop: $this.loop,
					threshold: 0.1,
					speed: $this.duration
				}
			});
		},20)
	},
	methods:{
		_setGroupWidth:function(){
			let children = this.$refs.sliderGroup.children;
		
			let slider = this.$refs.slider;
			let _width = slider.clientWidth;
			let wrapWidth = 0;

			this.dots = children.length;
			for(let i=0;i<children.length;i++){
				let child = children[i];
				child.setAttribute("class","slider_item");
				child.style.width = _width+"px";
				wrapWidth += _width;
			}
			if(this.loop) wrapWidth += _width*2;
			this.$refs.sliderGroup.style.width = wrapWidth +'px';
		}
	}
}
</script>

<style lang="stylus">
@import '~common/style/variable.styl'
.slider
	height:150px	
	width:100%
	overflow:hidden
	position:relative
.slider_group
	height:100%
.slider_item
	float:left
	overflow:hidden
	img
		width: 100%
		height:100%
.sliderdots
	width:100%
	text-align:center
	position:absolute
	left:0
	bottom:10px
	.dot
		width:10px 
		height:10px
		display:inline-block
		border-radius:50%
		background-color:$font_normal_color
		margin-left:10px
		&.active
			background-color:$font_deep_color
</style>