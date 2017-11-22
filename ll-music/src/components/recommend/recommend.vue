<template>
	<div class="recommendWrap">
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
			<div class="recommend_list" v-if="recommendlist.length">
				<p class="hg_title">热门歌单推荐</p>
				<list :lists="recommendlist" @checked="toDetail"></list>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/banner'
import Slider from 'base/slider/slider'
import List from 'base/list/list'
import BScroll from 'better-scroll'

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
	mounted: function(){
		// let bsScroll = new BScroll('.recommendWrap');
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
		},
		toDetail: function(id){
			// console.log(id);
			this.$router.push({
				name:'recommend_detail',
				params:{
					id:id,
					showIndex:false
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
.recommendWrap
	position:fixed
	top:96px
	left:0
	width:100%
.recommend
	.recommend_list
		padding-top:20px
		.hg_title
			text-align: center
			color: $font_highlight_color
			font-weight: bold
		
</style>