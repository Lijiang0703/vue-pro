<template>
	<transition name="detail">
		<div class="recom_detail">
			<detail></detail>
		</div>
	</transition>
</template>
<script type="text/javascript">
import Detail from 'base/detail_list/detail_list'
import {mapGetters} from 'vuex'

export default{
	created: function(){
		console.log(this.singer);
	},
	computed:{
		...mapGetters(['singer'])
	},
	components:{
		Detail
	}	
}
</script>
<style lang="stylus">
@import '~common/style/variable'
.recom_detail
	width:100%
	height:100%
	z-index:100
	position:fixed
	top:0
	left:0
.detail-enter-active,.detail-leave-active
	transition:all 0.3s
.detail-enter,.detail-leave-to
	transform: translate3d(100%,0,0)
</style>