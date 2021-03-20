// import {
//     SET_AUTHENTICATED,
//     SET_UNAUTHENTICATED,
//     SET_USER,
//     // SET_TOKEN,
//     LOADING_USER,
//     ENTRY_VOTE,
//     LIKE_AN_ENTRY,
//     UNLIKE_AN_ENTRY,
//     LIKE_A_BLOGPOST,
//     MARK_NOTIFICATIONS_READ,
//     UNLIKE_A_BLOGPOST,
//     UNFOLLOW_USER,
//     UNLIKE_A_CONTEST,
//     SET_USERNAMES,
//     FOLLOW_USER,
//     LIKE_AN_EVENT,
//     UNLIKE_AN_EVENT,
//     LIKE_A_CONTEST,
//     CLEAR_ERRORS,
//     SET_ERRORS,
//     LOADING_UI,
//     LOADING_ALL_USERS,
//     SET_ALL_USERS,
//     STOP_LOADING_UI,
//     // LOGOUT_USER
// } from '@/store/MutationTypes';

// import axios from 'axios';
// import config from '@/config/config'


// const state = {
//   authenticated: false,
//   loading: false,
//   credentials: {},
//   followers: [],
//   following: [],
//   entryLikes: [],
//   blogpostLikes: [],
//   contestLikes: [],
//   eventLikes: [],
//   votesReceived: [],
//   votes: [],
//   usernames: [],
// //   token: null,
// }

// const mutations = {
//     [SET_AUTHENTICATED] (state) {
//         state.authenticated = true;
//     },
//     [SET_UNAUTHENTICATED] (state) {
//         state.authenticated = false;
//     },
//     [SET_USER] (state) {
//         state.authenticated = true;
//         state.loading = false;
//     },
//     [LOADING_USER]  (state) {
//         state.loading = false;
//     },
//     [ENTRY_VOTE] (state, payload) {
//         state.votes = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.entryId
//             }
//         ]        
//     },
//     [LIKE_AN_ENTRY] (state, payload) {
//         state.entryLikes = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.entryId
//             }
//         ]     
//     },
//     [UNLIKE_AN_ENTRY] (state, payload) {
//         state.entryLikes = state.entryLikes.filter(
//             (entryLike) => entryLike.entryId !== payload.entryId)
//     },
//     [LIKE_A_BLOGPOST] (state, payload) {
//         state.blogpostLikes = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.blogpostId
//             }
//         ]     
//     },
//     [UNLIKE_A_BLOGPOST] (state, payload) {
//         state.blogpostLikes = state.blogpostLikes.filter(
//             (blogpostLike) => blogpostLike.blogpostId !== payload.blogpostId)
//     },
//     [LIKE_AN_EVENT] (state, payload) {
//         state.eventLikes = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.eventId
//             }
//         ]     
//     },
//     [UNLIKE_AN_EVENT] (state, payload) {
//         state.eventLikes = state.eventLikes.filter(
//             (eventLike) => eventLike.eventId !== payload.eventId)
//     },
//     [LIKE_A_CONTEST] (state, payload) {
//         state.contestLikes = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.contestId
//             }
//         ]     
//     },
//     [UNLIKE_A_CONTEST] (state, payload) {
//         state.contestLikes = state.contestLikes.filter(
//             (contestLike) => contestLike.contestId !== payload.contestId)
//     },
//     [FOLLOW_USER] (state, payload) {
//         state.following = [
//             {
//                 username: state.credentials.username,
//                 entryId: payload.userId
//             }
//         ]     
//     },
//     [UNFOLLOW_USER] (state, payload) {
//         state.following = state.following.filter(
//             (follow) => follow.userId !== payload.userId)
//     },
//     [SET_USERNAMES] (state, payload) {
//         state.usernames = payload
//     },
//     [MARK_NOTIFICATIONS_READ] (state) {
//         state.notifications.forEach((not) => (not.read = true)); 
//     }
// }

// const actions = {
//     signUpUser( { commit }, newUserData, history ) {
//         commit(LOADING_UI)
//         axios.post(`${config.prodUrlEndpoint}/signup`, newUserData)
//         .then(() => {
//             commit(CLEAR_ERRORS)
//             history.push('/auth-login');
//         })
//         .catch((err) => {
//             commit(SET_ERRORS, err.response.data)
//         })
//     },
//     signInUser( { commit }, userData, history ) {
//         commit(LOADING_UI)
//         axios.post(`${config.prodUrlEndpoint}/signin`, userData)
//         .then((res) => {
//             this.setAuthorizationHeader(res.data.token)
//             commit('getUserData')
//             // commit(CLEAR_ERRORS)
//             commit(CLEAR_ERRORS)
//             history.push('/user-profile');
//         })
//         .catch((err) => {
//             commit(SET_ERRORS, err.response.data)
//         })
//     },
//     signOutUser({ commit }) {
//         localStorage.removeItem('FBIdToken')
//         delete axios.defaults.headers.common['Authorization']
//         commit(SET_UNAUTHENTICATED)
//     },
//     getUserData({ commit }) {
//         commit(LOADING_USER)
//         axios
//         .get(`${config.prodUrlEndpoint}/user`)
//         .then((res) => {
//         commit(SET_USER, res.data)
//       })
//       .catch((err) => console.log(err)); 
//     },
//     uploadImage({ commit }, formData) {
//         commit(LOADING_USER)
//         axios
//         .post(`${config.prodUrlEndpoint}/user/image`, formData)
//         .then(() => {
//         commit(this.getUserData());
//       })
//       .catch((err) => console.log(err));
//     },
//     editUserDetails({ commit }, userDetails) {
//         commit(LOADING_USER)
//         axios
//         .post(`${config.prodUrlEndpoint}/user`, userDetails)
//         .then(() => {
//         commit(this.getUserData());
//       })
//       .catch((err) => console.log(err));
//     },
//     markNotificationsRead({ commit } , notificationIds) {
//         axios
//         .post(`${config.urlEndPoint}/notifications`, notificationIds)
//         .then(() => {
//         commit(MARK_NOTIFICATIONS_READ)
//       })
//       .catch((err) => console.log(err));
//     },
//     setAuthorizationHeader(token) {
//         const FBIdToken = `Bearer ${token}`;
//         localStorage.setItem('FBIdToken', FBIdToken);
//         axios.defaults.headers.common['Authorization'] = FBIdToken; 
//     },
//     getAllUsers({ commit }) {
//         commit( LOADING_ALL_USERS)
//         axios
//         .get(`${config.prodUrlEndpoint}/users`)
//         .then((res) => {
//         commit(SET_ALL_USERS,res.data);
//       })
//       .catch((err) => console.log(err)) 
//     },
//     getUserDetails({ commit }, userId) {
//         commit( LOADING_USER)
//         axios
//         .get(`${config.prodUrlEndpoint}/user/${userId}`)
//          .then((res) => {
//         commit(SET_USER, res.data)
//       })
//       .catch((err) => console.log(err));
//     },
//     getUsernames({ commit }) {
//         axios
//         .get(`${config.prodUrlEndpoint}/usernames`)
//         .then((res) => {
//         commit(SET_USERNAMES, res.data)
//       })
//       .catch((err) => console.log(err));
//     },
//     updateUsername({ commit }, newUsername) {
//         commit( LOADING_USER)
//         axios
//         .post(`${config.prodUrlEndpoint}/user/username`, newUsername)
//         .then((res) => {
//         commit(this.getUserData())
//         commit(SET_USER, res.data)
//       })
//       .catch((err) => {
//         commit(SET_ERRORS, err.response.data)
//     })
//     },
//     updateEmailAddress({ commit }, email) {
//         commit( LOADING_USER)
//         axios
//         .post(`${config.prodUrlEndpoint}/update-email`, email)
//         .then((res) => {
//         commit(this.getUserData())
//         commit(SET_USER, res.data)
//       })
//       .catch((err) => {
//         commit(SET_ERRORS, err.response.data)
//     })
//     },
//     updatePassword({ commit }, newPassword) {
//         commit( LOADING_USER)
//         axios
//         .post(`${config.prodUrlEndpoint}/update-password`, newPassword)
//         .then((res) => {
//             commit(this.getUserData())
//             commit(SET_USER, res.data)
//           })
//           .catch((err) => {
//             commit(SET_ERRORS, err.response.data)
//         })
//     },
//     resetPassword({ commit }, email) {
//         commit( LOADING_UI)
//         axios
//         .post(`${config.prodUrlEndpoint}/reset-password`, email)
//         .then(() => {
//         commit(STOP_LOADING_UI)
//       })
//       .catch((err) => {
//         commit(STOP_LOADING_UI)
//         commit(SET_ERRORS, err.response.data)
//     })
//     },
//     followuser({ commit }, userId) {
//         axios
//         .get(`${config.prodUrlEndpoint}/user/${userId}/follow`, userId)
//         .then((res) => {
//         commit(FOLLOW_USER, res.data)
//       })
//       .catch((err) => {       
//         commit(SET_ERRORS, err.response.data)
//     })
//     },
//     unFollowuser({ commit } , userId) {
//         axios
//         .get(`${config.prodUrlEndpoint}/user/${userId}/unfollow`, userId)
//         .then((res) => {
//         commit(UNFOLLOW_USER, res.data)
//       })
//       .catch((err) => {
//         commit(SET_ERRORS, err.response.data)
//     })
//     }
// }

// const getters = {
//     uniqueName: state => [state.usernames.map((val) => val.username)],
//     credentials: state => state.credentials,
//     followers: state => state.followers,
//     following: state => state.following,
//     entryLikes: state => state.entryLikes,
//     blogpostLikes: state => state.blogpostLikes,
//     contestLikes: state => state.contestLikes,
//     eventLikes: state => state.eventLikes,
//     votesReceived: state => state.votesReceived,
//     votes: state => state.votes
// }

// const userModule = {
//     state,
//     mutations,
//     actions,
//     getters,
//     namespaced: true,
// }
  
// export default userModule;