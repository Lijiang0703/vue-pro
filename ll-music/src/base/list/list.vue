<template>
	<div class="list">
		<ul class="list_container">
			<li v-for="item in lists" class="list_item">
				<div class="item_wrap" @click="toDetail(item)">
					<div class="left">
						<!-- <img src="../../common/image/logo.png" alt="" width="60" height="60"> -->
						<img :src="item.imgurl" alt=""  width="60" height="60">
					</div>
					<div class="right">
						<p class="title" v-text="item.creator.name">还不是因为你长的好看</p>
						<p class="content" v-text="item.dissname">励志：纵使磨难虐我千遍，我依然微笑如初</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default{
	props:['lists'],
	created: function(){

	},
	mounted:function(){
		var $this = this;
		this.$nextTick(function(){
			// $this.setContentH();
			// $this.initScroll();
		})
	},
	methods:{
		toDetail:function(item){
			this.$emit('checked',item.dissid);
		},
		initScroll:function(){
			var $this = this;
			setTimeout(function(){
				if(!$this.scroll){
					$this.scroll = new BScroll('.list');
				}else{
					$this.scroll.refresh();
				}
			},20)
		},
		setContentH:function(){
			var size = this.getChildSize();
			var wrap = document.querySelector('.list_container');
			var $this = this;
			if(size)
			wrap.style.height = size.height * this.lists.length + 'px';
		},
		getChildSize:function(){
			var item = document.querySelector('.list_item');
			if(item){
				var height = item.offsetHeight;
				var width = item.offsetWidth;
				return {
					width:width,
					height:height
				}
			}
		}
	},
	watch:{
		lists:function(){
			 // this.setContentH();
		}
	}
}	
</script>
<style lang='stylus'>
@import '~common/style/variable'
.list
	padding:20px
	min-height:1px
	// height:350px
	// overflow:hidden
	box-sizing:border-box
.list_item
	height:70px
	box-sizing:border-box
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