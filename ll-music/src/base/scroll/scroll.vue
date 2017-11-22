<template>
	<div class="scroll">
		<div class="scroll_wrap" ref="scrollwrap">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default({
	props:{
		direction:{
			type: String,
			default:'Y'
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
			this.scroll = new BScroll('.scroll');
		},
		init : function(){
			var dirct = this.direction;
			if(dirct == 'X'){
				this._initWidth();
			}else if(dirct == 'Y'){
				this._initHeight();
			}
		},
		_initWidth : function(){
			var item = this.$refs.scrollwrap.children;

		},
		_initHeight : function(){

		}
	}
})	
</script>
<style lang="stylus">
	
</style>