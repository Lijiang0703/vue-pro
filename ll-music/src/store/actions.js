import * as api from 'common/js/banner'

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
	}
}
export default actions