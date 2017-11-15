<template>
	<div class="singer">

	</div>
</template>

<script type="text/javascript">
import * as api from 'common/js/singer'
export default{
	data(){
		return{
			singerlist:[]
		}
	},
	created:function(){
		var $this = this;
		api.getSinger().then(function(data){
			if(data.code == 0){
				$this.singerlist = $this.serializeSinger(data.data.list);
			}
		})
	},
	methods:{
		serializeSinger:function(singerlist){
			 //处理数据
			const HOTINDEX = 10;
			let map = {}; //按字母顺序排列
			let hot = {
				title: 'HOT',
				data: []
			};
			for(let i=0;i<singerlist.length;i++){
				let list = singerlist[i];
				let index = list.Findex;
				let d = this.getBasic(list);
				if(i<HOTINDEX){
					//热门歌手
					hot.data.push(d);
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

			this.singerlist = res;
		},
		getBasic:function(singer){
			const avatar = "https://y.gtimg.cn/music/photo_new/T001R300x300M000"+singer.Fsinger_mid+".jpg?max_age=2592000"
			return {
				name:singer.Fsinger_name,
				id:singer.Fsinger_id,
				avatar:avatar
			};
		}
	},
	components:{
		// detail
	}
}
</script>
	
<style lang="stylus">
	
</style>