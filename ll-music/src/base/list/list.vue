<template>
<div class="songlist">
	<div class="loadcontainer" v-show="!lists.length">
		<load></load>
	</div>
	<ul>
		<li v-for="(item,key) in lists" @click="selectItem(item,key)">
			<div class="listitem">
				<div class="left" v-if="showIndex">
					<p class="index" v-text="key"></p>
				</div>
				<div class="right" @click="palyImmediate(item.id)">
					<p class="title" v-text="item.title"></p>
					<p class="content" v-text="item.singer[0].title"></p>
				</div>
			</div>
		</li>
	</ul>
</div>
</template>
<script type="text/javascript">
import Load from 'base/load/load'
import Scroll from 'base/scroll/scroll'

export default{
	props:{
		lists:{
			type:Array,
			default:[]
		},
		showIndex:{
			type:Boolean,
			default:false
		},
		listenScroll:{
			type:Boolean,
			default:false
		},
		probeType:{
			type:Number,
			default:1
		}
	},
	created: function(){

	},
	mounted:function(){
		
	},
	methods:{
		palyImmediate:function(id){

		},
		selectItem:function(item,key){
			this.$emit('selectItem',item,key);
		}
	},
	components:{
		Load,
		Scroll
	}
}	
</script>
<style lang='stylus'>
@import '~common/style/variable'
ptop = 10px
listh = 60px
.songlist			
	// overflow:hidden
	ul 
		padding:20px
	.listitem
		display:flex
		height:listh
		.left
			flex-grow:1
			text-align:center
			color:$font_highlight_color
			p
				margin-top:50%
				transform:translateY(-50%)
				-webkit-transform:translateY(-50%)
				height:20px
				line-height:20px
				font-size:$font_navbar_size
				font-weight:400
		.right
			flex-grow:3
			flex-shrink:1
			.title
				margin-top:5px
				color:$font_normal_color
				font-size:$font_title_size
			.content
				font-size:$font_navbar_size
				margin-top:ptop
				color:$font_content_color
				font-size:$font_normal_size
</style>