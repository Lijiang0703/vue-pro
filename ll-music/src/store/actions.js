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
		context.state.playlist.push(payload);
	},
	setplaying:({commit,state},{playlist,index})=>{
		commit(type.SETPlAYLIST,playlist);
		commit(type.SETSEQUENCELIST,playlist);
		commit(type.setCURRENTINDEX,index);
		commit(type.SETFULLSCREEN,true)
		commit(type.SETPLAYING,true)
	}
}
export default actions