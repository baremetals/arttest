import {
    GET_TOKEN,
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_ERRORS,
    SET_GENERAL_ERROR,
    STOP_LOADING_UI,
    MARK_NOTIFICATIONS_READ,
    FOLLOW_USER,
    UNFOLLOW_USER,
    UNLIKE_A_CONTEST,
    LIKE_A_CONTEST,
    UNLIKE_AN_EVENT,
    LIKE_AN_EVENT,
    UNLIKE_A_BLOGPOST,
    LIKE_A_BLOGPOST,
    UNLIKE_AN_ENTRY,
    LIKE_AN_ENTRY,
    ENTRY_VOTE,
    SET_AN_ENTRY
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config';

export const authModule = {

    state: {
        authenticated: false,
        loading: false,
        credentials: {},
        token: localStorage.getItem('FBIdToken') || null,
        followers: [],
        following: [],
        entryLikes: [],
        blogpostLikes: [],
        contestLikes: [],
        eventLikes: [],
        entryVotes: [],
        entry: []
    },

    mutations: {

        [SET_AUTHENTICATED](state, token) {
            state.authenticated = true;
            state.token = token
        },

        [SET_UNAUTHENTICATED](state) {
            state.authenticated = false;
            state.token = null;
        },

        [SET_USER](state, payload) {
            state.loading = false;
            state.credentials = payload
        },

        [SET_AN_ENTRY](state, payload) {
            state.loading = false;
            state.entry = payload
        },

        [GET_TOKEN](state, token) {
            state.token = token
        },

        [LOADING_USER](state) {
            state.loading = false;
        },
        [MARK_NOTIFICATIONS_READ](state) {
            state.notifications.forEach((not) => (not.read = true));
        },
        [FOLLOW_USER](state, payload) {
            state.following = [
                {
                    username: state.credentials.username,
                    entryId: payload.userId
                }
            ]
        },
        [UNFOLLOW_USER](state, payload) {
            state.following = state.following.filter(
                (follow) => follow.userId !== payload.userId)
        },
        [ENTRY_VOTE](state, payload) {
            state.entryVotes = [
                {
                    username: state.credentials.username,
                    entryId: payload.entryId
                }
            ]
        },
        [LIKE_AN_ENTRY](state, payload) {
            state.entryLikes = [
                {
                    username: state.credentials.username,
                    entryId: payload.entryId
                }
            ]
        },
        [UNLIKE_AN_ENTRY](state, payload) {
            state.entryLikes = state.entryLikes.filter(
                (entryLike) => entryLike.entryId !== payload.entryId)
        },
        [LIKE_A_BLOGPOST](state, payload) {
            state.blogpostLikes = [
                {
                    username: state.credentials.username,
                    entryId: payload.blogpostId
                }
            ]
        },
        [UNLIKE_A_BLOGPOST](state, payload) {
            state.blogpostLikes = state.blogpostLikes.filter(
                (blogpostLike) => blogpostLike.blogpostId !== payload.blogpostId)
        },
        [LIKE_AN_EVENT](state, payload) {
            state.eventLikes = [
                {
                    username: state.credentials.username,
                    entryId: payload.eventId
                }
            ]
        },
        [UNLIKE_AN_EVENT](state, payload) {
            state.eventLikes = state.eventLikes.filter(
                (eventLike) => eventLike.eventId !== payload.eventId)
        },
        [LIKE_A_CONTEST](state, payload) {
            state.contestLikes = [
                {
                    username: state.credentials.username,
                    entryId: payload.contestId
                }
            ]
        },
        [UNLIKE_A_CONTEST](state, payload) {
            state.contestLikes = state.contestLikes.filter(
                (contestLike) => contestLike.contestId !== payload.contestId)
        },
    },

    actions: {

        async loginUser({ commit, dispatch }, userData) {
            commit(LOADING_UI)
            await axios.post(`${config.prodUrlEndpoint}/signin`, userData)
                .then((res) => {
                    const FBIdToken = res.data.token
                    localStorage.setItem('FBIdToken', FBIdToken);
                    commit(GET_TOKEN)
                    commit(SET_AUTHENTICATED)
                    axios.defaults.headers.common['Authorization'] = "Bearer " + FBIdToken;
                    dispatch('getUserData')
                    commit(CLEAR_ERRORS)
                    // this.$router.push("/creator-profile");
                })
                .catch((err) => {
                    commit(SET_GENERAL_ERROR, err.response)
                })
        },
        async signUpUser({ commit }, newUserData) {
            commit(LOADING_UI)
            await axios.post(`${config.prodUrlEndpoint}/signup`, newUserData)
                .then(() => {
                    commit(CLEAR_ERRORS)
                })
                .catch((err) => {
                    commit(SET_GENERAL_ERROR, err.response)
                })
        },
        logOutUser({ commit }) {
            localStorage.removeItem('FBIdToken')
            delete axios.defaults.headers.common['Authorization']
            commit(SET_UNAUTHENTICATED)
            commit(SET_USER, {})
        },
        async getUserData({ commit }) {
            commit(LOADING_USER)
            await axios.get(`${config.prodUrlEndpoint}/user`)
                .then((res) => {
                    commit(SET_USER, res.data)
                })
                .catch((err) => console.log(err));
        },
        async forgotPassword({ commit }, email) {
            commit(LOADING_UI)
            await axios.post(`${config.prodUrlEndpoint}/reset-password`, email)
                .then(() => {
                    commit(STOP_LOADING_UI)
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data)
                })
        },
        async uploadImage({ commit, dispatch }, formData) {
            commit(LOADING_USER)
            await axios.post(`${config.prodUrlEndpoint}/user/image`, formData)
                .then(() => {
                  dispatch('getUserData');
                })
                .catch((err) => console.log(err));
        },
        async editUserDetails({ commit, dispatch }, userDetails) {
            commit(LOADING_USER)
            await axios
                .post(`${config.prodUrlEndpoint}/user`, userDetails)
                .then(() => {
                  dispatch('getUserData');
                })
                .catch((err) => console.log(err));
        },
        async markNotificationsRead({ commit }, notificationIds) {
            await axios
                .post(`${config.urlEndPoint}/notifications`, notificationIds)
                .then(() => {
                    commit(MARK_NOTIFICATIONS_READ)
                })
                .catch((err) => console.log(err));
        },

        async updateEmailAddress({ commit, dispatch }, email) {
            commit(LOADING_USER)
            await axios
                .post(`${config.prodUrlEndpoint}/update-email`, email)
                .then((res) => {
                  dispatch('getUserData')
                  commit(SET_USER, res.data)
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data)
                })
        }, async updatePassword({ commit, dispatch }, newPassword) {
            commit(LOADING_USER)
            await axios
                .post(`${config.prodUrlEndpoint}/update-password`, newPassword)
                .then((res) => {
                    dispatch('getUserData')
                    commit(SET_USER, res.data)
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data)
                })
        },
        async followUser({ commit }, userId) {
            await axios
                .get(`${config.prodUrlEndpoint}/user/${userId}/follow`, userId)
                .then((res) => {
                    commit(FOLLOW_USER, res.data)
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data)
                })
        },
        async unFollowUser({ commit }, userId) {
            await axios
                .get(`${config.prodUrlEndpoint}/user/${userId}/unfollow`, userId)
                .then((res) => {
                    commit(UNFOLLOW_USER, res.data)
                })
                .catch((err) => {
                    commit(SET_ERRORS, err.response.data)
                })
        },
        setAuthentication({ commit }) {
            commit(SET_AUTHENTICATED);
        }
    },

    getters: {
        loggedInUser: (state) => {
            return state.token !== null
        },
        credentials: state => state.credentials,
        followers: state => state.followers,
        following: state => state.following,
        entryLikes: state => state.entryLikes,
        blogpostLikes: state => state.blogpostLikes,
        contestLikes: state => state.contestLikes,
        eventLikes: state => state.eventLikes,
        entryVotes: state => state.entryVotes,
        authenticated: state => state.authenticated,
        // userInfo: state =>  {
        //     return ({
        //         email: state.credentials.credentials,
        //         imageUrl: state.credentials.credentials
        //     })
        // },
        // userD: state => state.credentials.credentials,
        userData: state =>  ({
            email: state.credentials.email,
            imageUrl: state.credentials.imageUrl,
            fullname: state.credentials.fullname,
            username: state.credentials.username,
            followersCount: state.credentials.followersCount,
            followingCount: state.credentials.followingCount,
            totalContestsEntered: state.credentials.totalContestsEntered,
            location: state.credentials.location,
            bio: state.credentials.bio,
            createdAt: state.credentials.createdAt,
            dateOfbirth: state.credentials.dateOfbirth,
            role: state.credentials.role,
            website: state.credentials.website,
            specialSkill: state.credentials.specialSkill,
            backgroundImage: state.credentials.backgroundImage,
        }),

           
        
    }
};