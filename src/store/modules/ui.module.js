import { 
    SET_ERRORS,   
    CLEAR_ERRORS, 
    GET_ERRORS,
    LOADING_UI, 
    STOP_LOADING_UI,
    GET_LOADING,
    // SET_EMAIL_ERROR,
    // SET_PASSWORD_ERROR,
    SET_GENERAL_ERROR
} from '@/store/MutationTypes';

export const uiModule = {

    state: {
        errors: {},
        loading: false,
        // emailError: "",
        // passwordError: "",
        generalError: "",

    },

    mutations: {
        [SET_ERRORS] (state, payload) {
            state.loading = false;
            state.errors = payload;
        },
        [CLEAR_ERRORS] (state) {
            state.loading = false;
            state.errors = {};
        },
        [LOADING_UI] (state) {
            state.loading = true;
        },
        [STOP_LOADING_UI] (state) {
            state.loading = false;
        },
        // [SET_EMAIL_ERROR] (state, emailError) {
        //     state.emailError = emailError
        // },
        // [SET_PASSWORD_ERROR] (state, passwordError) {
        //     state.passwordError = passwordError
        // },
        [SET_GENERAL_ERROR] (state, payload) {
            state.generalError = payload
        }

    },

     getters: {
        [GET_ERRORS]: state => state.errors,
        [GET_LOADING]: state => state.loading,
        // emailErrors: state => state.emailError,
        // passwordErrors: state => state.passwordErrors,
        generalError: state => state.generalError
    }

};