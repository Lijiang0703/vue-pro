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

export function getSongList(id){
	const common = {
		uin:0,
		format:'json',
		platform:'h5',
		needNewCode:1,
		new_format:1,
		pic:500,
		disstid:id,
		type:1,
		json:1,
		utf8:1,
		onlysong:0,
		picmid:1,
		nosign:1,
		song_begin:0,
		song_num:15
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getsonglist',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}

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