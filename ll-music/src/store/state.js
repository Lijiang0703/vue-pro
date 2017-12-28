import {mode} from 'common/js/config'

const state = {
	singer:{},
	playing:false,  //是否播放
	currentIndex:-1,	//当前播放歌曲的index
	playlist:[],  //播放列表
	sequenceList:[],  //歌曲列表，有序的
	fullScreen:false, //是否全屏
	mode: mode.sequence 	// 播放模式
}
export default state