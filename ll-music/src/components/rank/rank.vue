<template>
	<div class="rank">
		<div class="rank_item" v-for="item in ranks">
			<div class="left">
				<img :src="item.picUrl" alt="" width='100' height='100'>
			</div>
			<div class="right">
				<ul>
					<li v-for="(list,key) in item.songList">
						<p v-text="key+1+' '+list.songname+'-'+list.singername"></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/banner'
export default{
	data(){
		return {
			ranks:[]
		}
	},
	created: function(){
		this.getdata();
	},
	methods: {
		getdata:function(){
			var $this = this;
			api.getDataByJsonP({
				url:'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
			}).then(function(data){
				console.log(data);
				if(data.code == 0){
					$this.ranks = data.data.topList
				}
			})
		}
	}
}
</script>

<style lang="stylus">
@import '~common/style/variable'
.rank_item
	padding:20px 10px
	display:flex
	.left
		flex-basis:100px
		img
			background:#fff
	.right
		flex:1
		width:150px
		padding:20px
		background:$background_content
		color:$font_normal_color
		// ul
		// 	display:flex
		// 	flex-direction: column
		// 	flex:1
		// 	justify-content: center
		// 	overflow: hidden
		li
			font-size:$font_normal_size
			line-height:$font_normal_lineheight
			p
				overflow:hidden
				white-space: nowrap
				text-overflow:ellipsis
				-webkit-text-overflow:ellipsis
</style>