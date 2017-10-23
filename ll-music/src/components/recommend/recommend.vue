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
			<p class="title">热门歌单推荐</p>
		</div>
	</div>
</template>

<script type="text/javascript">
import getBanner from 'common/js/banner'
import Slider from 'base/slider/slider'
import axios from 'axios'

export default{
	data(){
		return {
			sliderlink:[]
		}
	},
	created : function(){
		// this.banner();
		axios.get('/api/getlist',{
			// url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
			params:{
				g_tk: 502076345,
				inCharset: 'utf-8',
				outCharset: 'utf-8',
				notice: 0,
				platform:'h5',
				uin:0,
				needNewCode:1,
				format: 'json',
			}
		}).then((response)=>{
			console.log(response);
		})
	},
	methods : {
		banner: function(){
			var $this = this;
			getBanner().then(function(data){
				if(data.code == 0){
					$this.sliderlink = data.data.slider;
				}
			})
		}
	},
	components:{
		Slider
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
		.title
			text-align: center
			color: $font_highlight_color
			font-weight: bold
	
		
</style>