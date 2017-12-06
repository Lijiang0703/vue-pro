import {jsonp} from 'src/api/datarequest'
import DEFAULT from 'src/api/config'
import axios from 'axios'

export function getSinger(){
	const common = {
		channel:'singer',
		page:'list',
		key:'all_all_all',
		pagesize:100,
		pagenum:1,
		// jsonpCallback:GetSingerListCallback
		loginUin:0,
		hostUin:0,
		format:'json',
		platform:'yqq',
		needNewCode:0
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getsinger',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}
export function getSingerSong(id,num){
	const common = {
		format:'jsonp',
		platform:'yqq',
		needNewCode:0,
		singermid:id,
		order:'listen',
		begin:0,
		hostUin:0,
		num:num,
		songstatus:1
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getsingersong',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}