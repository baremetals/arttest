import { 
    SET_ENTRIES,
    SET_AN_ENTRY,
    LIKE_AN_ENTRY,
    UNLIKE_AN_ENTRY,
    ENTER_CONTEST,
    ENTRY_VOTE,
    SUBMIT_COMMENT,
    LOADING_ENTRIES,
    CLEAR_ERRORS,
    SET_ERRORS  
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config'

export const entryModule = {

    state: {
        entries: [],
        entry: {},
        loading: false
    },

    mutations: {
        [SET_ENTRIES] (state, payload) {
            state.loading = false;
            state.entries = payload;
        },
        [SET_AN_ENTRY] (state, payload) {
            state.entry = payload;
        },
        [LIKE_AN_ENTRY] (state, payload) {
            let index = state.entries.findIndex(
                (entry) => entry.entryId === payload.entryId
              );
              state.entries[index] = payload;
              if (state.entry.entryId === payload.entryId) {
                state.entry = payload;
              }
              return {
                ...state
              }; 
        },
        [UNLIKE_AN_ENTRY] (state, payload) {
            let index = state.entries.findIndex(
                (entry) => entry.entryId === payload.entryId
              );
              state.entries[index] = payload;
              if (state.entry.entryId === payload.entryId) {
                state.entry = payload;
              }
              return {
                ...state
              }; 
        },
        [ENTER_CONTEST] (state, payload) {
            return {
                ...state,
                entries: [payload, ...state.entries]
              }; 
        },
        [SUBMIT_COMMENT] (state, payload) {
            return {
                ...state,
                entry: {
                  ...state.entry,
                  comments: [payload, ...state.entry.entryComments]
                }
              };  
        },
        [ENTRY_VOTE] (state, payload) {
            let index = state.entries.findIndex(
                (entry) => entry.entryId === payload.entryId
              );
              state.entries[index] = payload;
              if (state.entry.entryId === payload.entryId) {
                state.entry = payload;
              }
              return {
                ...state
              };  
        }
    },

    actions: {
      getAllContestEntries( { commit }) {
        axios.get(`${config.prodUrlEndpoint}/submissions`)
            .then((res) => {
                commit('SET_ENTRIES', res.data)
            })
            .catch((err) => console.log(err));
      },
      getEntryData({ commit }, entryId) {
        commit(LOADING_ENTRIES);
        axios
            .get(`${config.prodUrlEndpoint}/submission/${entryId}`)
            .then((res) => {
                commit(SET_AN_ENTRY, res.data);
            })
            .catch((err) => console.log(err));
    },
      likeAnEntry({ commit }, entryId) {
        axios
          .get(`${config.prodUrlEndpoint}/submission/${entryId}/like`)
          .then((res) => {
            commit(LIKE_AN_ENTRY, res.data);
          })
          .catch((err) => console.log(err));
      },
      unLikeAnEntry({ commit }, entryId) {
        axios
          .get(`${config.prodUrlEndpoint}/submission/${entryId}/unlike`)
          .then((res) => {
            commit(UNLIKE_AN_ENTRY, res.data);
          })
          .catch((err) => console.log(err));
      },
      submitEntryComment({ commit }, entryId, commentData) {
        axios
          .post(`${config.prodUrlEndpoint}/submission/${entryId}`, commentData)
          .then((res) => {
            commit(SUBMIT_COMMENT, res.data);
            commit(CLEAR_ERRORS);
          })
          .catch((err) => {
            commit(SET_ERRORS, err.response.data);
          });
      },
      submitAVote({ commit }, entryId) {
        axios
            .get(`${config.prodUrlEndpoint}/submission/${entryId}/vote`, entryId)
            .then((res) => {
              commit(ENTRY_VOTE, res.data)
            })
            .catch((err) => {
              commit(SET_ERRORS, err.response.data);
            });
      },
      enterContest({ commit }, entryData) {
        axios
          .post(`${config.prodUrlEndpoint}/submissions`, entryData)
          .then((res) => {
            commit(ENTER_CONTEST, res.data);
            commit(CLEAR_ERRORS);
          })
          .catch((err) => {
            commit(SET_ERRORS, err.response.data);
          });
      }, 
    },

    getters: {
      entries: state => state.entries,
        entry: state => state.entry,  
    }

};