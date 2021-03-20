import { SET_BLOGS, LOADING_BLOGS, GET_ALL_BLOG_POST, GET_BLOGS, SET_BLOG } from '@/store/MutationTypes';

import axios from 'axios';
import config from '@/config/config';

export const blogs = {
	state: {
		blogposts: [],
		loading: false
	},

	mutations: {
		[SET_BLOGS] (state, payload)  {
			state.loading = true;
			state.blogposts = payload;
		},
		[LOADING_BLOGS] (state) {
			state.loading = true;
		}
	},

	actions: {
		[GET_ALL_BLOG_POST]: ({ commit }) => {
			axios
				.get(`${config.prodUrlEndpoint}/blogposts`)
				.then((res) => {
					commit(SET_BLOGS, res.data);
				})
				.catch((err) => console.log(err));
		}
	},

	getters: {
		[GET_BLOGS]: (state) => state.blogposts,
		[SET_BLOG]: (state) => (blogpostsId) => {
			return state.blogposts.find((post) => post.blogpostsId === blogpostsId);
		}
	}
};
