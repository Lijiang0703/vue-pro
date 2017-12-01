<template>
	<div class="singer">
		<div class="loadcontainer" v-show="!singerlist.length">
			<load></load>
		</div>
		<Scroll class="singerlist" :data="singerlist" ref="singerlist" :probeType="3" @scroll="scrollEvent">
			<ul ref="listwrap">
				<li v-for="item in singerlist" class="list">
					<p class="title" v-text="item.title"></p>
					<div class="items">
						<ul>
							<li v-for="data in item.data">
								<img v-lazy="data.avatar" alt="" class="avatar" width="60" height="60">
								<p class="name" v-text="data.name" @click="toSingerDetail"></p>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</Scroll>
		<div class="rightbar" @touchmove.prevent.stop="moveTolist" @touchstart.stop="toList">
				<ul ref="titlelist">
					<li v-for="(item,key) in titlelist" v-text="item.slice(0,1)" :class="{active:current == key}" :data-index="key" ></li>
				</ul>
			</div>
		<div class="fixed_title">
			<p class="title" v-text="getCurrentTitle()"></p>
		</div>
	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/singer'
import Scroll from 'base/scroll/scroll'
import Load from 'base/load/load'

export default{
	data(){
		return{
			singerlist:[],
			titlelist:[],
			current:0
		}
	},
	created:function(){
		const $this = this;
		this.touch = {};
		api.getSinger().then(function(data){
			if(data.code == 0){
				$this.serializeSinger(data.data.list);
				$this.getTitle();
			}
		})
	},
	methods:{
		serializeSinger:function(singerlist){
			 //处理数据
			const HOTINDEX = 10;
			let map = {}; //按字母顺序排列
			let hot = [{
				title: '热门',
				data: []
			}];
			for(let i=0;i<singerlist.length;i++){
				let list = singerlist[i];
				let index = list.Findex;
				let d = this.getBasic(list);
				if(i<HOTINDEX){
					//热门歌手
					hot[0].data.push(d);
				}
				if(!map[index]) 
			 		map[index] = {
				 		title: index,
				 		data: []
				 	}
				 map[index].data.push(d);
			}
			//有序排序
			let res=[];
			for(let key in map){
				let val = map[key];
				if(val.title.match(/[a-zA-Z]/)!=null){
					res.push(val);
				}
			}
			res.sort(function(a,b){
				return a.title.charCodeAt(0)-b.title.charCodeAt(0);
			})
			this.singerlist = hot.concat(res);
		},
		getTitle:function(){
			if(this.singerlist.length){
				let $this = this;
				this.singerlist.forEach(function(list){
					$this.titlelist.push(list.title);
				})
			}
		},
		getBasic:function(singer){
			const avatar = "https://y.gtimg.cn/music/photo_new/T001R300x300M000"+singer.Fsinger_mid+".jpg?max_age=2592000"
			return {
				name:singer.Fsinger_name,
				id:singer.Fsinger_id,
				avatar:avatar
			};
		},
		toList:function(e){
			const target = e.target;
			const index = target.getAttribute('data-index');
			
			this.touch.y1 = e.touches[0].pageY;
			this.touch.index = index;
			if(Number(index)){	
				this.scrollTo(index);
			}
		},
		moveTolist:function(e){
			const touch = e.touches[0];

			const y = touch.pageY - this.touch.y1;
			const item_height = this.$refs.titlelist.querySelector('li').clientHeight;

			const dur = parseInt(y /item_height) || 0;

			if(dur>=1){				
				const index = Number(this.touch.index) + Number(dur);
				this.scrollTo(index);
			}
		},
		scrollTo:function(index){
			const list = this.$refs.listwrap.children;

			if(index!=undefined && this.current != index){
				this.current = Number(index);
				this.$refs.singerlist.scrollToElement(list[index],0);
			}
		},
		getCurrentTitle:function(){
			const current = this.titlelist[this.current];
			return current;
		},
		scrollEvent:function(position){
			const y = position.y;
			const lists = this.$refs.listwrap.children;
			let scrolly = 0;
			for(let i=0;i<lists.length;i++){
				const height = lists[i].clientHeight;
				if(Math.abs(y) < height+scrolly){
					this.current = i;
					break;
				}else scrolly+= height;
			}
		},
		toSingerDetail:function(){

		}
	},   
	components:{
		Scroll,
		Load
	},
	watch:{
		current:function(val){

		}
	}
}
</script>
	
<style lang="stylus">
@import '~common/style/variable'
.singerlist
	height:100%
	.title
		background:$background_content
		padding:5px 10px 5px 20px 
		font-size:$font_title_size
		color:$font_normal_color
	.items
		li
			display:flex
			align-items:center
			padding:10px 20px
			.avatar
				border-radius:50%
				margin-right:10px
			.name
				text-align:left
.fixed_title
	position:absolute
	top:0
	left:0
	width:100%
	.title
		background:$background_content
		padding:5px 10px 5px 20px 
		font-size:$font_title_size
		color:$font_normal_color
.rightbar
	position:fixed
	text-align:center
	right:5px
	background:$backround_color
	color:$font_normal_color
	top:50%
	transform:translateY(-50%)
	font-size:13px
	font-weight:$font_bold_weight
	border-radius:5px
	margin:20px 0
	cursor:pointer
	li
		padding-top:5px
	& .active
		color:$font_highlight_color
</style>