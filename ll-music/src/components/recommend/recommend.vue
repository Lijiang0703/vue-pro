<template>
	<div class="recommendWrap">
		<Scroll class="recommend_content" ref="scroll" :data="recommendlist">
			<div class="recommend">
				<div class="slider_wrap" v-if="sliderlink.length">
					<slider>
						<div v-for="item in sliderlink">
							<a :href="item.linkUrl">
								<img :src="item.picUrl" @load="refreshImage">
							</a>
						</div>
					</slider>
				</div>	
				<div class="recommend_list">
					<p class="hg_title">热门歌单推荐</p>
					<div class="list">
						<ul class="list_container">
							<li v-for="item in recommendlist" class="list_item">
								<div class="item_wrap" @click="toDetail(item)">
									<div class="left">
										<img v-lazy="item.imgurl" alt="" width="60" height="60">
									</div>
									<div class="right">
										<p class="title" v-text="item.creator.name"></p>
										<p class="content" v-text="item.dissname"></p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="loadcontainer" v-show="!recommendlist.length">
				<load></load>
			</div>
		</Scroll>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/banner'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Load from 'base/load/load'

export default{
	data(){
		return {
			sliderlink:[],
			recommendlist:[],
			imageLoad:false
		}
	},
	created : function(){
		this.banner();
		this.recommends();
	},
	mounted: function(){

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
		toDetail: function(item){
			this.$router.push({
				name:'recommend_detail',
				params:{
					id:item.dissid,
					showIndex:false
				}
			})
		},
		refreshImage:function(){
			if(!this.imageLoad){
				// this.$refs.scroll.refresh();
				// this.imageLoad = true;
			}
		}
	},
	components:{
		Slider,
		Scroll,
		Load
	}
}
</script>

<style lang="stylus">
@import '~common/style/variable'
.recommend_content
	height:100%
.recommend
	.recommend_list
		padding:20px
		position:relative
		.hg_title
			margin-bottom:20px
			text-align: center
			color: $font_highlight_color
			font-weight: bold
		.list
			min-height:1px
			// position:relative
		.list_item
			height:70px
		.item_wrap
			display:flex
			margin-bottom:15px
			.left 
				flex-grow:0
				flex-shrink:1
				img
					background-color:#fff
			.right
				padding-left:15px
				flex-grow:4
				flex-shrink:1
				p
					&.title
						padding-top:5px
						color:$font_normal_color
						text-align:left
						font-size:$font_title_size
						padding-bottom:5px
					&.content
						color:$font_content_color
						text-align:left
						font-size:$font_normal_size
						line-height:20px
</style>