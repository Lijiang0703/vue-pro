const getters = {
	singer:(state)=>{
		return state.singer;
	},
	currentSong:(state)=>{
		return state.songlist[state.currentIndex];
	}
}

export default getters