<template>
	<div class="slider" ref="slider">
		<div class="slider_group" ref="sliderGroup">
			<slot></slot>
		</div>
		<div class="sliderdots">
			<span class="dot" v-for="(item,key) in dots" :class="{active:key == current}"></span>
		</div>
	</div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
	data(){
		return {
			dots:1,
			current:0
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
		interval:{
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
			let scroll = $this.scroll = new BScroll('.slider',{
				scrollX: true,
				scrollY: false,
				click: true,
				momentum: false,  //惯性
				snap: {
					loop: $this.loop,
					threshold: 0.3,
					// probeType:1,
					speed: $this.speed
				}
			});
			if($this.autoPlay){
				$this._autoPlay();
			}
			scroll.on('scrollEnd',function(){
				$this.current = this.getCurrentPage().pageX-1;
				if($this.autoPlay){
					$this._autoPlay();
				}		
			})
			scroll.on('beforeScrollStart',function(){
				if($this.Time) clearTimeout($this.Time);
			})
			window.addEventListener('resize',function(){
				if(!$this.scroll) return;
				$this._setGroupWidth(true);
				$this.scroll.refresh();
			},false)
		},20)
	},
	methods:{
		_setGroupWidth:function(isResize){
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
			if(this.loop && !isResize) wrapWidth += _width*2;
			this.$refs.sliderGroup.style.width = wrapWidth +'px';
		},
		_autoPlay:function(){
			const interval = this.interval;
			let $this = this;

			this.Time = setTimeout(function(){
				let next;
				let scroll = $this.scroll; 
				const current = scroll.getCurrentPage();

				if(current.pageX >= $this.dots){  //实际上会在左右两边多两个slideitem,为了实现无缝滚动
					next = 1;
				}else next = current.pageX +1;
				
				// $this.current = next-1;
				scroll.goToPage(next,0,$this.speed);

			},interval);

		}
	}
}
</script>

<style lang="stylus">
@import '~common/style/variable.styl'
.slider
	width:100%
	overflow:hidden
	position:relative
.slider_group
.slider_item
	float:left
	overflow:hidden
	img
		width: 100%
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
		transition:all 0.2s ease
		&.active
			width:20px
			border-radius:5px
			background-color:$font_title_color
</style>