// import {
//     SET_BLOGS,
//     LOADING_BLOGS
// } from '@/store/MutationTypes';
import axios from 'axios';
import config from '@/config/config'

const state = {
    blogposts: [],
    loading: false
}

// const mutations = {
//     [SET_BLOGS] (state, payload) {
//         state.loading = false;
//         state.blogposts = payload;
//     },
//     [LOADING_BLOGS] (state) {
//         state.loading = true;
//     }
// }

const mutations = {
    SET_BLOGS (state, payload) {
        state.loading = false;
        state.blogposts = payload;
    },
    LOADING_BLOGS (state) {
        state.loading = true;
    }
}

const actions = {
    getAllBlogPosts({ commit }) {
        axios.get(`${config.prodUrlEndpoint}/blogposts`)
        .then((res) => {
            commit('SET_BLOGS', res.data)
        })
        .catch((err) => console.log(err));
    }
}

const getters = {
    blogposts: state => state.blogposts,
    blogpostsFromId: (state) => (blogpostsId) => {
        return state.blogposts.find(post => post.blogpostsId === blogpostsId)
    }
}

const blogsModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default blogsModule;