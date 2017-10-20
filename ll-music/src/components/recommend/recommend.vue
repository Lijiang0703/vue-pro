<template>
	<div>
		推荐页面
	</div>	
</template>

<script type="text/javascript">
import getBanner from 'common/js/banner'

export default{
	created : function(){
		banner();
	},
	methods : {
		banner: function(){
			getBanner().then(function(data){
				console.log(data);
			})	
		}
	}
}
</script>

<style lang="stylus">
	
</style>