import * as api from 'common/js/banner'

const actions = {
	getsinger:(context)=>{

	},
	getsong:(context,payload)=>{
		// return new Promise(function(resolve){
		// 	api.getSongList(payload).then(function(data){
		// 		if(data.code == 0){
		// 			var result = data.cdlist[0];
		// 			resolve&&resolve(result);
		// 		}
		// 	})
		// })
		return api.getSongList(payload).then(function(data){
			if(data.code == 0){
				var result = data.cdlist[0];
				return Promise.resolve(result);
			}
		})
	}
}
export default actions