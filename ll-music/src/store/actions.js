import * as api from 'common/js/banner'
import type from './mutation_type'

const actions = {
	getsinger:(context)=>{

	},
	getsong:(context,payload)=>{
		return api.getSongList(payload).then(function(data){
			if(data.code == 0){
				var result = data.cdlist[0];
				return Promise.resolve(result);
			}
		})
	},
	addToSonglist:(context,payload)=>{
		context.state.songlist.push(payload);
	},
	setplaying:({commit,state},{songlist,index})=>{
		commit(type.SETPlAYLIST,songlist);
		commit(type.SETSTATE,{sequenceList:songlist});
		commit(type.SETSTATE,{currentIndex:index});
		commit(type.SETSTATE,{fullScreen:true})
		commit(type.SETSTATE,{play:true})
	}
}
export default actions