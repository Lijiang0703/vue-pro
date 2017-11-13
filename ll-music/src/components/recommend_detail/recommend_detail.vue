<template>
	<div class="recom_detail">
		<detail></detail>
	</div>
</template>
<script type="text/javascript">
import Detail from 'base/detail_list/detail_list'
export default{
	created: function(){
		console.log('OK');
	},
	components:{
		Detail
	}	
}
</script>
<style lang="stylus">
@import '~common/style/variable'
.recom_detail
	background:$backround_color
	width:100%
	z-index:100
	position:fixed
	top:0
	left:0
</style>