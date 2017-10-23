import {jsonp} from 'src/api/datarequest'

export default function getBanner() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

	const common = {
		g_tk: 502076345,
		format: 'jsonp',
		inCharset: 'utf-8',
		outCharset: 'utf-8',
		notice: 0,
		platform:'h5',
		uin:0,
		needNewCode:1
	}
	const param = {
		param:'jsonpCallback'
	}

	return jsonp(url,common,param);
}
