import {mode} from 'common/js/config'

const state = {
	singer:{},
	songlist:[],  //播放列表
	fullScreen:false, //是否全屏
	mode: mode.sequence, 	// 模式
	play:false,
	currentIndex:-1
}
export default state