<template>
	<div class="scroll" ref="scroll">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default({
	props:{
		direction:{
			type: String,
			default:'Y'
		},
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

			this.scroll = new BScroll(this.$refs.scroll,{
				probeType: this.probeType,
				click: this.click
			});
		},
		refresh : function(){
			this.scroll && this.scroll.refresh();
		}
	},
	watch:{
		data:function(){
			setTimeout(()=>{
				this.refresh();
			},20)
		}
	}
})	
</script>
<style lang="stylus">
	
</style>