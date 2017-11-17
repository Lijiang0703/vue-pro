<template>
	<div class="slider" ref="slider">
		<div class="slider_group">
			<slot></slot>
		</div>
		<div class="sliderdots">
			
		</div>
	</div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
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
		}
	},
	created: function(){
	},
	mounted: function(){
		setTimeout(function(){
			let scroll = new BScroll('.slider',{
				scrollX: true,
				tap: true
			});
		},20)
	},
	methods:{

	}
}
</script>

<style lang="stylus">
.slider
	height:150px	
	width:100%
	overflow:hidden
.slider_group
	height:100%
.slider_item
	float:left
	overflow:hidden
	img
		width: 100%
		height:100%
</style>