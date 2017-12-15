import type from './mutation_type'

const mutations ={
	[type.SETSINGER] :(state,payload)=>{
		state.singer = payload
	},
	[type.SETSTATE] :(state,payload)=>{
		state[payload.key] = payload.value;
	}
}

export default mutations