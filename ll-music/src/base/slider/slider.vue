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
			let scroll = $this.scroll = new BScroll('.slider',{
				scrollX: true,
				snap: {
					loop: $this.loop,
					threshold: 0.1,
					probeType:1,
					speed: $this.duration
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
			scroll.on('touchEnd',function(){
				// let current = this.getCurrentPage().pageX;
				// let direct = this.movingDirectionX;
				// let next ;
				// if(direct<0){ //-1从左往右滑，后退
				// 	if(current <=1){
				// 		next = $this.dots-1;
				// 	}else next = current -2;
				// }else if(direct>0){
				// 	if(current >= $this.dots){
				// 		next = 0;
				// 	}else next = current;
				// }
				// $this.current = next;
			})
			scroll.on('beforeScrollStart',function(){
				if($this.Time) clearTimeout($this.Time);
			})
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
		},
		_autoPlay:function(){
			const duration = this.duration;
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

			},duration);

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
		transition:all 0.2s ease
		&.active
			width:20px
			border-radius:5px
			background-color:$font_title_color
</style>