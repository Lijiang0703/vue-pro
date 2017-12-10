<template>
	<div class="scroll" ref="scroll">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default({
	props:{
		// direction:{
		// 	type: String,
		// 	default:'Y'
		// },
		data:{
			type: Array,
			default:null
		},
		probeType:{
			type: Number,
			default:1
		},
		click:{
			type: Boolean,
			default:true
		},
		listenScroll:{
			type: Boolean,
			default:false
		},
		pullingUp:{
			type: Boolean,
			default:false
		}
	},
	mounted:function(){
		var $this = this;
		setTimeout(function(){
			$this.initScroll();
		},20)
	},
	methods:{
		initScroll : function(){
			if(!this.$refs.scroll) return;
			const $this = this;

			this.scroll = new BScroll(this.$refs.scroll,{
				probeType: this.probeType,
				click: this.click
			});
			if(this.listenScroll)
				this.scroll.on('scroll',function(p){
					// console.log(p);
					$this.$emit("scroll",p);
				})
			if(this.pullingUp)
				this.scroll.on('pullingUp',function(p){
					$this.$emit('pullingUp',p);
				})
		},
		refresh : function(){
			this.scroll && this.scroll.refresh();
		},
		scrollToElement:function(el, time, offsetX, offsetY, easing){
			this.scroll && this.scroll.scrollToElement(el, time, offsetX, offsetY, easing);
		}
	},
	watch:{
		// data:function(){
		// 	setTimeout(()=>{
		// 		// this.refresh();
		// 	},20)
		// }
	}
})	
</script>
<style lang="stylus">
	
</style>