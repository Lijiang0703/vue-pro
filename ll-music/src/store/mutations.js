import type from './mutation_type'

const mutations ={
	[type.SETSINGER] :(state,payload)=>{
		state.singer = payload
	},
	[type.SETSTATE] :(state,payload)=>{
		for(let key in payload)
			state[key] = payload[key];
	},
	[type.SETPLAYING]:(state,payload)=>{
		state.playing = payload;
	},
	[type.SETCURRENTINDEX]:(state,payload)=>{
		state.currentIndex = payload;
	},
	[type.SETPlAYLIST]:(state,payload)=>{
		state.songlist = payload;
	},
	[type.SETSEQUENCELIST]:(state,payload)=>{
		state.sequenceList = payload;
	},
	[type.SETFULLSCREEN]:(state,payload)=>{
		state.fullScreen = !state.fullScreen;
	},
	[type.SETMODE]:(state,payload)=>{
		state.mode = payload;
	}
}

export default mutations