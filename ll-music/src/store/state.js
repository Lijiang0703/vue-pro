import {mode} from 'common/js/config'

const state = {
	singer:{},
	showPlayer:true,
	play:false,  //是否播放
	currentIndex:-1,	//当前播放歌曲的index
	songlist:[],  //播放列表
	fullScreen:false, //是否全屏
	mode: mode.sequence 	// 播放模式
}
export default state