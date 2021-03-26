import { 
  SET_EVENTS, 
  LOADING_EVENTS, 
  SET_AN_EVENT, 
  LIKE_AN_EVENT, 
  UNLIKE_AN_EVENT, 
  SUBMIT_COMMENT,
  CLEAR_ERRORS,
    SET_ERRORS 
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config'

export const eventModule = {

    state: {
        events: [],
        event: {},
        loading: false
    },

    mutations: {
        [SET_EVENTS] (state, payload) {
            state.loading = false;
            state.events = payload;
        },
        [SET_AN_EVENT] (state, payload) {
            state.event = payload;
        },
        [LOADING_EVENTS] (state) {
            state.loading = true;
        },
        [LIKE_AN_EVENT] (state, payload) {
            let index = state.events.findIndex(
                (event) => event.eventId === payload.eventId
              );
              state.events[index] = payload;
              if (state.event.eventId === payload.eventId) {
                state.event = payload;
              }
              return {
                ...state
              }; 
        },
        [UNLIKE_AN_EVENT] (state, payload) {
            let index = state.events.findIndex(
                (event) => event.eventId === payload.eventId
              );
              state.events[index] = payload;
              if (state.event.eventId === payload.eventId) {
                state.event = payload;
              }
              return {
                ...state
              };
        },
        [SUBMIT_COMMENT] (state, payload) {
            return {
                ...state,
                event: {
                  ...state.event,
                  comments: [payload, ...state.event.eventComments]
                }
              }; 
        },
    },

    actions: {
        getAllEvents({ commit }) {
            axios.get(`${config.prodUrlEndpoint}/events`)
            .then((res) => {
                commit('SET_EVENTS', res.data)
            })
            .catch((err) => console.log(err));
        },
        getEventData({ commit }, eventId) {
            commit(LOADING_EVENTS);
            axios
                .get(`${config.prodUrlEndpoint}/event/${eventId}`)
                .then((res) => {
                    commit(SET_AN_EVENT, res.data);
                })
                .catch((err) => console.log(err));
        },
        likeEvent({ commit }, eventId) {
            axios
              .get(`${config.prodUrlEndpoint}/event/${eventId}/like`)
              .then((res) => {
                commit(LIKE_AN_EVENT, res.data);
              })
              .catch((err) => console.log(err));
          },
          unLikeEvent({ commit }, eventId) {
            axios
              .get(`${config.prodUrlEndpoint}/event/${eventId}/unlike`)
              .then((res) => {
                commit(UNLIKE_AN_EVENT, res.data);
              })
              .catch((err) => console.log(err));
          },
          submitEventComment({ commit }, eventId, commentData) {
            axios
              .post(`${config.prodUrlEndpoint}/event/${eventId}/comment`, commentData)
              .then((res) => {
                commit(SUBMIT_COMMENT, res.data);
                commit(CLEAR_ERRORS);
              })
              .catch((err) => {
                commit(SET_ERRORS, err.response.data);
              });
          },
    },

    getters: {
        events: state => state.events,
        event: state => state.event,
        eventFromId: (state) =>  (eventId) => {
            return state.events.find(event => event.eventId === eventId)
        }
    }

};