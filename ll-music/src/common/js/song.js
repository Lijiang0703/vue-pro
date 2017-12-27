import {jsonp} from 'src/api/datarequest'
import DEFAULT from 'src/api/config'
import axios from 'axios'

export function getCD(id){
	const common = {
		format:'jsonp'
		disstid:id
		type:1
		json:1
		utf8:1
		onlysong:0
		platform:'yqq'
		hostUin:0
		needNewCode:0
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getsinger',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}