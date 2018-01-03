import {jsonp} from 'src/api/datarequest'
import DEFAULT from 'src/api/config'
import axios from 'axios'

export function getCD(id){
	const common = {
		format:'jsonp',
		disstid:id,
		type:1,
		json:1,
		utf8:1,
		onlysong:0,
		platform:'yqq',
		hostUin:0,
		needNewCode:0
	}
	const data = Object.assign({},common,DEFAULT)
	return axios.get('/api/getsinger',{
		params:data
	}).then((response)=>{
		return Promise.resolve(response.data);
	})
}

class Song{
	constructor(songData){
		this.id = songData.id;
		this.mid = songData.mid;
		this.singer = songData.singer;
		this.name = songData.name;
		this.album = songData.album;
		this.duration = songData.duration;
		this.image = songData.image;
		this.url = songData.url;
	}
}

export function createSong(data){
	return new Song({
		id:data.id,
		mid:data.mid,
		singer:data.singer[0].name,
		name:data.name,
		album:data.album.name,
		duration:data.interval,
		image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album.mid}.jpg?max_age=2592000`,
		url:`https://thirdparty.gting.com/${data.mid}.m4a?fromtag=38`
	})
}