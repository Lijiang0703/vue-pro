import type from './mutation_type'

const mutations ={
	[type.SETSINGER] :(state,payload)=>{
		state.singer = payload
	},
	[type.SETSTATE] :(state,payload)=>{
		state[payload.key] = payload.value || !state[payload.key];
	},
	[type.SETFULL]:(state,payload)=>{
		state.fullScreen = !state.fullScreen;
	}

}

export default mutations