import type from './mutation_type'

const mutations ={
	[type.SETSINGER] :(state,payload)=>{
		state.singer = payload
	},
	[type.SETSTATE] :(state,payload)=>{
		for(let key in payload)
			state[key] = payload[key];
	},
	[type.SETFULL]:(state,payload)=>{
		state.fullScreen = !state.fullScreen;
	},
	[type.SETPlAYLIST]:(state,payload)=>{
		state.songlist = payload;
	}

}

export default mutations