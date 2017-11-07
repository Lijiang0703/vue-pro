import {jsonp} from 'src/api/datarequest'
import {DEFAULT} from 'src/api/config'
import axios from 'axios'

export function getBanner() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

	const common = {
		format: 'jsonp',
		platform:'h5',
		uin:0,
		needNewCode:1
	}

	const data = Object.assign({},common,DEFAULT);
	const param = {
		param:'jsonpCallback'
	}

	return jsonp(url,data,param);
}

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