<template>
	<div class="recommend">
		<div class="slider_wrap" v-if="sliderlink.length">
			<slider>
				<div v-for="item in sliderlink">
					<a :href="item.linkUrl">
						<img :src="item.picUrl">
					</a>
				</div>
			</slider>
		</div>	
		<div class="recommend_list">
			<p class="hg_title">热门歌单推荐</p>
			<div>
				<list></list>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/banner'
import Slider from 'base/slider/slider'
import List from 'base/list/list'
import axios from 'axios'

export default{
	data(){
		return {
			sliderlink:[]
		}
	},
	created : function(){
		this.banner();
		this.recommend();
	},
	methods : {
		banner: function(){
			var $this = this;
			api.getBanner().then(function(data){
				if(data.code == 0){
					$this.sliderlink = data.data.slider;
				}
			})
		},
		recommend: function(){
			api.getRecommend().then(function(response){
				console.log(response);
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
		// .slider_img
		// 	width: 100%
		// 	height:120px	
	.recommend_list
		.hg_title
			text-align: center
			color: $font_highlight_color
			font-weight: bold
	
		
</style>