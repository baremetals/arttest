import { 
    SET_ERRORS,   
    CLEAR_ERRORS, 
    LOADING_UI, 
    STOP_LOADING_UI,
    // SET_EMAIL_ERROR,
    // SET_PASSWORD_ERROR,
    SET_GENERAL_ERROR,
    LOADING_DATA
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
        [LOADING_DATA] (state) {
            state.loading = true;
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
        getErrors: state => state.errors,
        getLoading: state => state.loading,
        // emailErrors: state => state.emailError,
        // passwordErrors: state => state.passwordErrors,
        generalError: state => state.generalError
    }

};