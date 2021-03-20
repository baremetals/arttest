import { 
    SIGNUP_USER,
    SIGNIN_USER,
    GET_USER_DATA,
    LOGIN_USER,
    LOGOUT_USER,
    SET_USERNAMES,
    GET_USERNAMES, 
    GET_TOKEN,
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    GET_USERNAME,
    CLEAR_ERRORS,
    LOADING_UI,
    // SET_ERRORS,
    SET_GENERAL_ERROR
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config';

export const auth = {

    state: {
      authenticated: false,
      loading: false,
      credentials: {},
      usernames: [],
      token: localStorage.getItem('FBIdToken') || null,
    },

    mutations: {

        [SET_USERNAMES] (state, payload) {
            state.usernames = payload
        },

        [SET_AUTHENTICATED] (state, token) {
            state.authenticated = true;
            state.token = token           
        },

        [SET_UNAUTHENTICATED] (state) {
            state.authenticated = false;
            state.token = null;
        },

        [SET_USER] (state, payload) {
            state.authenticated = true;
            state.loading = false;
            state.credentials = payload
        },

        [GET_TOKEN] (state, token) {
            state.token = token
        },

        [LOADING_USER]  (state) {
            state.loading = false;
        },
    },

    actions: {

        async [GET_USERNAMES] ({ commit }) {
            await axios
                .get(`${config.prodUrlEndpoint}/usernames`)
                .then((res) => {
                    commit(SET_USERNAMES, res.data)
                })
                .catch((err) => console.log(err));
        },
        async [SIGNUP_USER]({ commit }, newUserData) {
            commit(LOADING_UI)
            await axios.post(`${config.prodUrlEndpoint}/signup`, newUserData)
                .then(() => {
                    commit(CLEAR_ERRORS)
                })
                .catch((err) => {
                    commit(SET_GENERAL_ERROR, err.response.data) 
                })
        },
        async [SIGNIN_USER] ({ commit, dispatch }, userData) {
            commit(LOADING_UI)
            await axios.post(`${config.prodUrlEndpoint}/signin`, userData)
                .then((res) => {
                    const FBIdToken = res.data.token
                    localStorage.setItem('FBIdToken', FBIdToken);
                    commit(GET_TOKEN)
                    commit(SET_AUTHENTICATED)
                    axios.defaults.headers.common['Authorization'] = "Bearer " + FBIdToken;                    
                    dispatch(GET_USER_DATA, FBIdToken)
                    commit(CLEAR_ERRORS)
                    this.$router.push("/creator-profile");
                })
                .catch((err) => {                    
                    commit(SET_GENERAL_ERROR, err.response.data)                   
                })
        },
        [LOGOUT_USER] ({ commit }) {
            localStorage.removeItem('FBIdToken')
            delete axios.defaults.headers.common['Authorization']
            commit(SET_UNAUTHENTICATED)
        },
        async [GET_USER_DATA] ({ commit }) {
            commit(LOADING_USER)
            await   axios.get(`${config.prodUrlEndpoint}/user`)
                .then((res) => {
                    commit(SET_USER, res.data)
                })
                  .catch((err) => console.log(err)); 
         },
        
    },

    getters: {
        [GET_USERNAME]: state => state.usernames,
        [LOGIN_USER]: (state) => {
            return state.token !== null
        },
    }
};