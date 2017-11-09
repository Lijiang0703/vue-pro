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
.slider_group
	overflow:hidden	
</style>