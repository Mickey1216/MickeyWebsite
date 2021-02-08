import { createStore } from 'vuex'

const moduleMusic = {
  state: {
    playingRid:'',
    playerStatus:''
  },
  mutations: {
    updatePlayingRid(state,rid){
      state.playingRid = rid
    },
    updatePlayerStatus(state,status){
      state.playerStatus = status
    }
  },
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleMusic
  }
})
