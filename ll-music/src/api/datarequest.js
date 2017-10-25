//主要用来做数据的请求
import originJsonp from 'jsonp'

export function jsonp(url,data,param){
	data = concatData(data);
	url = geturl(url,data);

	return new Promise(function(resolve,reject){
		originJsonp(url,param,function(error,data){
			if(!error){
				resolve && resolve(data);
			}else{
				reject && reject();
			}
		})
	})
}
function geturl(url,data) {
	var param = url.indexOf('?')==-1? '?'+data : data;
	return url + param;
}

function concatData(data) {
	let result = '';
	for(let key in data){
		result += (data[key]!=undefined) ? ('&'+key+'='+data[key]):'';
	}
	return result.substring(1);
}