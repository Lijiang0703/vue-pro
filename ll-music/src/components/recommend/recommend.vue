<template>
	<div class="recommend">
		<div class="slider_wrap" v-if="sliderlink.length">
			<slider>
				<div class="slider_item" v-for="item in sliderlink">
					<a :href="item.linkUrl">
						<img :src="item.picUrl">
					</a>
				</div>
			</slider>
		</div>	
		<div class="recommend_list">
			<p class="hg_title">热门歌单推荐</p>
			<div>
				<list :lists="recommendlist"></list>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/banner'
import Slider from 'base/slider/slider'
import List from 'base/list/list'

export default{
	data(){
		return {
			sliderlink:[],
			recommendlist:[]
		}
	},
	created : function(){
		this.banner();
		this.recommends();
	},
	methods : {
		banner: function(){
			var $this = this;
			api.getDataByJsonP({
				url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
				format: 'jsonp',
				platform:'h5',
				uin:0,
				needNewCode:1
			}).then(function(data){
				if(data.code == 0){
					$this.sliderlink = data.data.slider;
				}
			})
		},
		recommends: function(){
			var $this = this;
			api.getRecommend().then(function(data){
				if(data.code == 0){
					$this.recommendlist = data.data.list;
				}
			})
		}
	},
	components:{
		Slider,
		List
	}
}
</script>

<style lang="stylus">
@import '~common/style/variable'
.recommend
	.slider_wrap
		height:120px	
		overflow: hidden
		.slider_item 
			img
				width: 100%
				height:100%
	.recommend_list
		padding-top:20px
		.hg_title
			text-align: center
			color: $font_highlight_color
			font-weight: bold
	
		
</style>