import { 
    SET_ALL_USERS,
    LOADING_ALL_USERS,
    SET_USERNAMES,
    LOADING_USER,
    SET_USER,
    FOLLOW_USER,
    UNFOLLOW_USER,
    LOADING_DATA,
    SET_ENTRIES,
    SET_USERS_TIMELINE
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config';
import { db } from '@/db'

export const usersModule = {
    state: {
        loading: false,
        users: [],
        usernames: [],
        userDetails: {},
        timeline: []

    },

    mutations: {
        [SET_USERNAMES](state, payload) {
            state.usernames = payload
        },

        [SET_ALL_USERS] (state, payload) {
            state.users = payload
        },
        [LOADING_ALL_USERS]  (state) {
            state.loading = false;
        },
        [SET_USER] (state, payload) {
            state.userDetails = payload
        },
        [FOLLOW_USER] (state, payload) {
            let index = state.users.findIndex(
                (user) => user.userId === payload.userId
              );
              state.entries[index] = payload;
              if (state.user.userId === payload.userId) {
                state.user = payload;
              }
              return {
                ...state
              };  
        },
        [UNFOLLOW_USER] (state, payload) {
            let index = state.users.findIndex(
                (user) => user.userId === payload.userId
              );
              state.entries[index] = payload;
              if (state.user.userId === payload.userId) {
                state.user = payload;
              }
              return {
                state
              };  
        },
        [SET_USERS_TIMELINE] (state, payload) {
            state.timeline = payload;
        }

    },

    actions: {  
        getTimeline({ commit, state }) {
            const userId = state.userDetails.credentials.userId
            db.collection(`/users/${userId}/timeline`).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
              var timelineData = [];
              querySnapshot.forEach(doc => {
                timelineData.push(doc.data());
              });
              commit('SET_USERS_TIMELINE', timelineData)
            })
        },

        async getAllUsers({ commit }) {
            commit(LOADING_ALL_USERS)
            await axios
                .get(`${config.prodUrlEndpoint}/users`)
                .then((res) => {
                    commit(SET_ALL_USERS, res.data);
                })
                .catch((err) => console.log(err))
        },
        async getUserDetails({ commit }, userId) {
            commit(LOADING_USER)
            await axios
                .get(`${config.prodUrlEndpoint}/user/${userId}`)
                .then((res) => {
                    commit(SET_USER, res.data)
                })
                .catch((err) => console.log(err));
        },
        async FOLLOW_USER({ commit }, userId) {
            await axios
            .get(`${config.prodUrlEndpoint}/user/${userId}/follow`, userId)
            .then((res) => {
                commit(FOLLOW_USER, res.data)
            })
            .catch((err) => console.log(err));
        },
        async UNFOLLOW_USER({ commit }, userId) {
            await axios
            .get(`${config.prodUrlEndpoint}/user/${userId}/unfollow`, userId)
            .then((res) => {
                commit(UNFOLLOW_USER, res.data)
            })
            .catch((err) => console.log(err));
        },
        getUserEntries({ commit }, userId) {
            commit(LOADING_DATA);
            axios
              .get(`${config.prodUrlEndpoint}/user/${userId}`)
              .then((res) => {
                commit(SET_ENTRIES, res.data.entries);
              })
              .catch(() => {
                commit(SET_ENTRIES, null);
              });
        },
    },
     getters: {
        getUsers: state => state.users,
        getUserDetails: state => state.userDetails,
        timelines: state => state.timeline,
    }

};