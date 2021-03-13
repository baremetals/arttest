import axios from 'axios';
import config from '@/config/config'

const state = {
    contests: [],
    loading: false
}

const mutations = {
    SET_CONTESTS (state, payload) {
        state.loading = false;
        state.contests = payload;
    },
    LOADING_CONTESTS (state) {
        state.loading = true;
    }
}

const actions = {
    getAllContests({ commit }) {
        axios.get(`${config.prodUrlEndpoint}/contests`)
        .then((res) => {
            commit('SET_CONTESTS', res.data)
        })
        .catch((err) => console.log(err));
    }
}

const getters = {
    contests: state => state.contests,
    contestFromId: (state) =>  (contestId) =>{
        return state.contests.find(contest => contest.contestId === contestId)
    }
}

const contestModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default contestModule;