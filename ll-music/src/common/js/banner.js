import {jsonp} from 'src/api/datarequest'
import DEFAULT from 'src/api/config'
import axios from 'axios'

export function getRecommend(){
	const common = {
		picmid:1,
		rnd:0.4974960702154385,
		loginUin:0,
		hostUin:0,
		platform:'yqq',
		categoryId:10000000,
		sortId:5,
		sin:0,
		ein:29,
		format:'json'
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getlist',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}

// export function getRank(){
// 	const common ={
// 		page:'index',
// 		platform:'h5',
// 		format:'jsonp',
// 		tpl:'macv4',
// 		v8debug:1,
// 		jsonCallback:'jsonCallback'
// 	}
// 	const data = Object.assign({},common)
// 	return axios.get('/api/getrank',{
// 		params:data
// 	}).then((response)=>{
// 		return Promise.resolve(response);
// 	})
// }

export function getDataByJsonP(opt){
	const url = opt.url
	delete opt.url
	const common = {
		format: 'jsonp',
		platform:'yqq',
		needNewCode:0
	}
	const data = Object.assign({},common,opt,DEFAULT);
	const param = {
		param:'jsonpCallback'
	}

	return jsonp(url,data,param)
}