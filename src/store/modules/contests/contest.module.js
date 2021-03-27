import { 
    SET_CONTESTS,
    SET_A_CONTEST, 
    LOADING_CONTESTS,
    LIKE_A_CONTEST,
    UNLIKE_A_CONTEST,
    SUBMIT_COMMENT,
    HOST_A_CONTEST,
    CLEAR_ERRORS,
    SET_ERRORS,
    LOADING_DATA 
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config'
import { db } from '@/db'
const dbContests = db.collection('contests')
export const contestModule = {
    state: {
        contests: [],
        contest: {},
        loading: false
    },

    mutations: {
        [SET_CONTESTS] (state, payload) {
            state.loading = false;
            state.contests = payload;
        },
        [SET_A_CONTEST] (state, payload) {
            state.contest = payload;
        },
        [LOADING_CONTESTS] (state) {
            state.loading = true;
        },
        [LIKE_A_CONTEST] (state, payload) {
            let index = state.contests.findIndex(
                (contest) => contest.contestId === payload.contestId
              );
              state.contests[index] = payload;
              if (state.contest.contestId === payload.contestId) {
                state.contest = payload;
              }
              return {
                ...state
              }; 
        },
        [UNLIKE_A_CONTEST] (state, payload) {
            let index = state.contests.findIndex(
                (contest) => contest.contestId === payload.contestId
              );
              state.contests[index] = payload;
              if (state.contest.contestId === payload.contestId) {
                state.contest = payload;
              }
              return {
                ...state
              };
        },
        [SUBMIT_COMMENT] (state, payload) {
            return {
                ...state,
                contest: {
                  ...state.contest,
                  comments: [payload, ...state.contest.contestComments]
                }
              }; 
        },
        [HOST_A_CONTEST] (state, payload) {
            return {
                ...state,
                contests: [payload, ...state.contests]
              };  
        }
    },

    actions: {
        getAllContests({ commit }) {
          dbContests.onSnapshot(querySnapshot => {
            var contestData = [];
            querySnapshot.forEach(doc => {
              contestData.push(doc.data());
            });
            commit('SET_CONTESTS', contestData)
          })
            // axios.get(`${config.prodUrlEndpoint}/contests`)
            // .then((res) => {
            //     commit('SET_CONTESTS', res.data)
            // })
            // .catch((err) => console.log(err));
        },
        createContest({ commit }, contestData) {
            axios
                .post(`${config.prodUrlEndpoint}/contests`, contestData)
                .then((res) => {
                    commit(HOST_A_CONTEST, res.data);
                    commit(CLEAR_ERRORS);
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data);
                })
        },
        updateContest({ commit }, contestData, constId) {
            axios
                .post(`${config.prodUrlEndpoint}/contest/${constId}`, contestData)
                .catch((err) => commit(SET_ERRORS, err.response.data));
        },
        getContestData({ commit }, contestId) {
            commit(LOADING_CONTESTS);
            axios
                .get(`${config.prodUrlEndpoint}/contest/${contestId}`)
                .then((res) => {
                    commit(SET_A_CONTEST, res.data);
                })
                .catch((err) => console.log(err));
        },
        likeContest({ commit }, contestId) {
            axios
              .get(`${config.prodUrlEndpoint}/contest/${contestId}/like`)
              .then((res) => {
                commit(LIKE_A_CONTEST, res.data);
              })
              .catch((err) => console.log(err));
          },
          unLikeContest({ commit }, contestId) {
            axios
              .get(`${config.prodUrlEndpoint}/contest/${contestId}/unlike`)
              .then((res) => {
                commit(UNLIKE_A_CONTEST, res.data);
              })
              .catch((err) => console.log(err));
          },
          submitContestComment({ commit }, contestId, commentData) {
            axios
              .post(`${config.prodUrlEndpoint}/contest/${contestId}/comment`, commentData)
              .then((res) => {
                commit(SUBMIT_COMMENT, res.data);
                commit(CLEAR_ERRORS);
              })
              .catch((err) => {
                commit(SET_ERRORS, err.response.data);
              });
          },
          getUserContestData({ commit }, userId) {
            commit(LOADING_DATA);
            axios
              .get(`${config.prodUrlEndpoint}/user/${userId}`)
              .then((res) => {
                commit(SET_CONTESTS, res.data.contests);
              })
              .catch(() => {
                commit(SET_CONTESTS, null);
              });
          }
    },
    getters: {
        contests: state => state.contests,
        contest: state => state.contest,
        contestsSliced: state => state.contests.slice(0,4),
        contestFromId: (state) =>  (contestId) => {
            return state.contests.find(contest => contest.contestId === contestId)
        }
    }

}