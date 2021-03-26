import { 
  SET_BLOGS, 
  LOADING_BLOGS, 
  SET_A_BLOG, 
  SUBMIT_COMMENT, 
  LIKE_A_BLOGPOST, 
  UNLIKE_A_BLOGPOST,
  CLEAR_ERRORS,
  SET_ERRORS 
} from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config';

export const blogsModule = {
	state: {
		blogposts: [],
		blogpost: {},
		loading: false
	},

	mutations: {
		[SET_BLOGS] (state, payload)  {
			state.loading = true;
			state.blogposts = payload;
		},
		[SET_A_BLOG] (state, payload) {
            state.blogpost = payload;
        },
		[LOADING_BLOGS] (state) {
			state.loading = true;
		},
		[LIKE_A_BLOGPOST] (state, payload) {
            let index = state.blogposts.findIndex(
                (blogpost) => blogpost.blogpostId === payload.blogpostId
              );
              state.blogposts[index] = payload;
              if (state.blogpost.blogpostId === payload.blogpostId) {
                state.blogpost = payload;
              }
              return {
                ...state
              }; 
        },
        [UNLIKE_A_BLOGPOST] (state, payload) {
            let index = state.blogposts.findIndex(
                (blogpost) => blogpost.blogpostId === payload.blogpostId
              );
              state.blogposts[index] = payload;
              if (state.blogpost.blogpostId === payload.blogpostId) {
                state.blogpost = payload;
              }
              return {
                ...state
              };
        },
        [SUBMIT_COMMENT] (state, payload) {
            return {
                ...state,
                blogpost: {
                  ...state.blogpost,
                  comments: [payload, ...state.blogpost.blogpostComments]
                }
              }; 
        },
	},

	actions: { 
		getAllBlogPosts: ({ commit }) => {
			axios
				.get(`${config.prodUrlEndpoint}/blogposts`)
				.then((res) => {
					commit(SET_BLOGS, res.data);
				})
				.catch((err) => console.log(err));
		},
		getBlogData({ commit }, blogpostId) {
            commit(LOADING_BLOGS);
            axios
                .get(`${config.prodUrlEndpoint}/blogpost/${blogpostId}`)
                .then((res) => {
                    commit(SET_A_BLOG, res.data);
                })
                .catch((err) => console.log(err));
        },
        likeBlogPost({ commit }, blogpostId) {
            axios
              .get(`${config.prodUrlEndpoint}/blogpost/${blogpostId}/like`)
              .then((res) => {
                commit(LIKE_A_BLOGPOST, res.data);
              })
              .catch((err) => console.log(err));
          },
          unLikeBlogPost({ commit }, blogpostId) {
            axios
              .get(`${config.prodUrlEndpoint}/blogpost/${blogpostId}/unlike`)
              .then((res) => {
                commit(UNLIKE_A_BLOGPOST, res.data);
              })
              .catch((err) => console.log(err));
          },
          submitBlogPostComment({ commit }, blogpostId, commentData) {
            axios
              .post(`${config.prodUrlEndpoint}/blogpost/${blogpostId}/comment`, commentData)
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
		blogposts: state => state.blogposts,
		getBlogs: (state) => state.blogposts.slice,
		setBlogs: (state) => (blogpostsId) => {
			return state.blogposts.find((post) => post.blogpostsId === blogpostsId);
		}
	}
};
