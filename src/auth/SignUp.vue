<template>
  <div>
    <!-- model start -->
    <b-modal v-model="modalShow" title="Thanks for registering with arttest">
      Please check the email address you provided to verify your account!
    </b-modal>
    <!-- model end -->

    <b-row>
      <b-col sm="12" md="6" lg="4" xl="6" class="padding-0">
        <div class="hero-image-left"></div>
      </b-col>
      <b-col>
        <b-container
          style="background-color: #fff; height: 100vh; margin: 10% auto"
          fluid
          class="mt--8 pb-5 att-padding-container"
        >
          <b-row class="justify-content-center">
            <b-col class="att-form" lg="11" md="11">
              <div>
                <b-tabs @input="changeTab" content-class="mt-3" fill>
                  <b-tab class="active-tab-class" title="Sign Up">
                    <!-- REGISTRTION SECTION START -->
                    <ValidationObserver ref="signupObserver">
                      <b-form
                        slot-scope="{ validate }"
                        @submit.prevent="validate().then(onRegister)"
                        class="att-form-body"
                      >
                        <div
                          v-if="generalError"
                          class="alert alert-danger"
                          role="alert"
                        >
                          The email address provided is already in use.
                        </div>
                        <ValidationProvider name="email" rules="required|email">
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="email-group"
                            label-for="email"
                            description=""
                          >
                            <b-form-input
                              id="email"
                              v-model.trim="newUserData.email"
                              :state="errors[0] ? false : valid ? true : null"
                              type="email"
                              placeholder="Email Address"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider
                          name="username"
                          rules="required|min:4|max:15|customUsername|uniqueUsername"
                        >
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="username-group"
                            label-for="username"
                            prepend=""
                          >
                            <b-form-input
                              v-bind:style="{ color: 'checkUsername' }"
                              id="username"
                              v-model.trim="newUserData.username"
                              :state="errors[0] ? false : valid ? true : null"
                              type="text"
                              placeholder="Username"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        
                        <br />

                        <b-form-group
                          id="dob-group"
                          label="Date of Birth:"
                          label-for="dob"
                        >
                          <b-row>
                            <b-col sm="4">
                              <b-form-select
                                v-model="newUserData.date_selected"
                                :options="date_options"
                                class="form-control dob-style"
                              ></b-form-select
                            ></b-col>
                            <b-col sm="4"
                              ><b-form-select
                                v-model="newUserData.month_selected"
                                :options="month_options"
                                class="form-control dob-style"
                              ></b-form-select
                            ></b-col>
                            <b-col sm="4"
                              ><b-form-select
                                @change="dobCheck()"
                                id="year"
                                v-model="newUserData.year_selected"
                                :options="year_options"
                                class="form-control dob-style"
                              ></b-form-select
                            ></b-col>
                          </b-row>
                        </b-form-group>
                        
                        <ValidationProvider name="dobCheck" :rules="{ required: { allowFalse: false } }" v-if="showDobChcekBox">
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="confirmDob-group"
                          >
                            <b-form-checkbox
                              v-model="newUserData.dobCheck"
                              id="confirmDob"                              
                              :checked="newUserData.dobCheck"
                              :state="errors[0] ? false : (valid ? true : null)"
                              @change="checkchanged"
                              >Please confirm you have parental
                              consent</b-form-checkbox
                            >
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider
                          name="password"
                          rules="required"
                          vid="password"
                        >
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="password-group"
                            label-for="password"
                          >
                            <b-form-input
                              id="password"
                              v-model.trim="newUserData.password"
                              :state="errors[0] ? false : valid ? true : null"
                              type="password"
                              placeholder="Enter Password"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider
                          name="confirm Password"
                          rules="required|confirmed:password"
                        >
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="confirmPassword-group"
                            label-for="confirmPassword"
                          >
                            <b-form-input
                              id="confirmPassword"
                              v-model.trim="newUserData.confirmPassword"
                              :state="errors[0] ? false : valid ? true : null"
                              type="password"
                              placeholder="Confirm Password"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>

                        <ValidationProvider
                          name="acceptedTerms"
                          rules="required"
                        >
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="terms-group"
                          >
                            <b-form-checkbox
                              value="acceptedTerms"
                              v-model="newUserData.terms"
                              :state="errors[0] ? false : (valid ? true : null)"
                              @change="checkterms"
                              id="terms"
                              ><p class="prtxt">
                                By clicking Sign Up, you agree to our
                                <span class="text-primary"
                                  ><router-link to="/terms"
                                    >Terms</router-link
                                  ></span
                                >, Learn how we collect, use and share your data
                                in our<span class="text-primary"
                                  ><router-link to="/privacy">
                                    Data Policy</router-link
                                  ></span
                                >
                                and how we use cookies and similar technology in
                                our
                                <span class="text-primary"
                                  ><router-link to="/privacy"
                                    >Cookies policy</router-link
                                  ></span
                                >
                                . You may receive SMS notification from us and
                                can opt at any time.
                              </p>
                            </b-form-checkbox>
                          </b-form-group>
                        </ValidationProvider>
                        <b-button
                          @click="onRegister(newUserData)"
                          type="submit"
                          variant="outline-turquoise-solid"
                          >CREATE ACCOUNT</b-button
                        >
                      </b-form>
                    </ValidationObserver>
                  </b-tab>
                  <!-- REGISTRTION SECTION END -->

                  <!-- LOGIN SECTION START -->

                  <b-tab title="Login">
                    <ValidationObserver ref="loginObserver">
                      <b-form
                        slot-scope="{ validate }"
                        @submit.prevent="validate().then(onLogin)"
                        class="att-form-body"
                      >
                        <ValidationProvider name="email" rules="required|email">
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="email-group"
                            label-for="email"
                            description=""
                          >
                            <b-form-input
                              id="login-email"
                              v-model.trim="userData.email"
                              :state="errors[0] ? false : valid ? true : null"
                              type="email"
                              placeholder="Enter email"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider name="password" rules="required">
                          <b-form-group
                            slot-scope="{ valid, errors }"
                            id="password-group"
                            label-for="password"
                          >
                            <b-form-input
                              id="login-password"
                              v-model.trim="userData.password"
                              :state="errors[0] ? false : valid ? true : null"
                              type="password"
                              placeholder="Enter pasword"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </ValidationProvider>
                        <div
                          class="alert alert-danger"
                          role="alert"
                          v-if="generalError"
                        >
                          Email and Password Do not match
                        </div>

                        <b-button
                          @click="onLogin(userData)"
                          type="submit"
                          variant="outline-turquoise-solid"
                          :disabled="disabled"
                          >LOGIN
                          <!-- <b-spinner aria-disabled="true" variant="info" label="Text Centered"></b-spinner> -->
                          <b-spinner
                            v-if="loading"
                            type="grow"
                            label="Text Centered"
                          ></b-spinner>
                        </b-button>
                      </b-form>
                    </ValidationObserver>
                    <!-- LOGIN SECTION END -->
                    <div>
                      <p>
                        <span class="text-muted"
                          ><router-link to="/auth-forgotpassword"
                            >Forgot Password?</router-link
                          ></span
                        >
                      </p>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Validator } from "vee-validate/dist/vee-validate";
import { db } from '@/db'

var errorMessage = "hello"

Validator.extend("customUsername", {
  message: field => "The " + `${field}` + errorMessage,
  validate: value => {
    var theseCharacters = /^[a-zA-Z0-9\d_]*$/  
    var containsRequiredChars = theseCharacters.test(value);
    if (containsRequiredChars) {
      return true;
    } else {
      if (!containsRequiredChars) {
        errorMessage = ' contains forbidden characters: " ' + " ' ? & / < > or space";
      } else {
        errorMessage = " The username field may contain alpha-numeric characters and underscores";
      }
      return false;
    }  
  } 
});
const isUnique = async (value) => {
  const query = await db.collection('users').where('username', '==', value).get();
  let isValid
  let msg
  if (!query.empty) {
    isValid = false
    msg = " already exist"
  } else {
    isValid = true
    msg = " is available"
  }
  return {
    valid: isValid,
      data: {
      message: value + msg
    }
  };
};
Validator.extend('uniqueUsername', {
  validate: isUnique,
  getMessage: (field, params, data) => {
    return data.message;
  }
});

import {
  date_options,
  month_options,
  year_options,
} from "@/utils/DateSelector.js";
import moment from 'moment';
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SignUp-Page",
  components: {

  },
  computed: {
    ...mapActions(["signUpUser", "loginUser", "resetGeneralError"]),
    ...mapGetters(["getLoading", "generalError"])
  },
  data() {
    return {
      newUserData: {
        email: "",
        username: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
        dobCheck: null,
        terms: null,
        date_selected: null,
        month_selected: null,
        year_selected: null,
      },
      date_options: date_options,
      month_options: month_options,
      year_options: year_options,

      userData: {
        email: "",
        password: "",
      },
      loading: false,
      disabled: false,
      modalShow: false,
      showDobChcekBox: false,
      tooYoung: false,
    };
  },
  methods: {
    changeTab() {
      if (this.generalError) { // Reset errors from vuex
        this.$store.dispatch('resetGeneralError')
      }
    },
    checkchanged() {      
      this.newUserData.dobCheck = this.newUserData.dobCheck ? true : null
    },
    checkterms() {
      this.newUserData.terms = this.newUserData.terms ? true : null
    },
    dobCheck() {
      const birthYear = parseInt(this.newUserData.year_selected)
      const currentYear = moment().year()
      const underAge = currentYear - birthYear
      if (underAge < 16) {
        this.showDobChcekBox = true
      } else {
        this.showDobChcekBox = false;
      }    
    },
    resetForm() {
      this.newUserData.email = "";
      this.newUserData.username = "";
      this.newUserData.password = "";
      this.newUserData.confirmPassword = "";
      this.newUserData.date_selected = null;
      this.newUserData.month_selected = null;
      this.newUserData.year_selected = null;
    },
    async onRegister() {      
      const isValid = await this.$refs.signupObserver.validate();
      if (isValid) {
        this.loading = true;
        this.disabled = true;
        this.newUserData.dateOfBirth =
        this.newUserData.date_selected +
        "/" +
        this.newUserData.month_selected +
        "/" +
        this.newUserData.year_selected;
        this.$store.dispatch('signUpUser', this.newUserData);
        // console.log(this.newUserData.date_selected +'/'+ this.newUserData.month_selected +'/'+ this.newUserData.year_selected)
        this.modalShow = true;
        console.log(this.newUserData.username);
        this.loading = false;
        this.disabled = false;
        this.resetForm()
      }      
    },
    async onLogin() {
      const isValid = await this.$refs.loginObserver.validate();

      if (!isValid) {
        console.log("it's not valid")
          alert("Please fix errors first!");
      } else {
        this.loading = true;
        this.disabled = true;
        let response = await this.$store.dispatch('loginUser', this.userData);
        this.loading = false;
        this.disabled = false;
        if (response) {
          // console.log(this.userData.email + " signed in with password " + this.userData.password);
          this.userData.email = "";
          this.userData.password = "";
          this.$bvToast.toast("You are logged in", {
            title: "welcome",
            autoHideDelay: 5000,
            variant: "info",
            solid: true,
            name: "b-toaster-top-center",
          });
          this.$router.push('/creator-profile')
        }        
      }
      // try {
      //   // this.loading = true;
      //   // this.disabled = true;
      //   console.log(this.userData);
      //   // this.$store.dispatch(loginUser, this.userData);
      //   this.$bvToast.toast("You are logged in", {
      //     title: "welcome",
      //     autoHideDelay: 5000,
      //     variant: "info",
      //     solid: true,
      //     name: "b-toaster-top-center",
      //   });
      //   this.loading = false;
      //   this.disabled = false;
      // } catch (e) {
      //   console.log(e);
      // }
    },
  },
};
</script>

<style scoped>
.arttest {
  color: red;
}
.arttest-trill {
  color: #1fc5b9;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border: none !important;
  border-bottom: 5px solid #1fc5b9 !important;
  color: #000 !important;
}

p.prtxt {
  margin: 0;
  padding: 0px !important;
  font-weight: 400;
  line-height: 24px;
  text-align: left !important;
}
.nav-link:hover {
  border-color: #0000ff00 !important;
}
.nav-tabs .nav-link {
  font-size: 32px;
  font-weight: 700;
  color: #bcbcbc;
  font-family: "Bellinzobold" !important;
}

@font-face {
  font-family: Bellinzobold;
  src: url(../assets/fonts/Bellinzo-Bold.ttf) format("ttf");
  src: url(../assets/fonts/Bellinzo-Bold.otf) format("otf");
  src: url(../assets/fonts/BellinzoBoldBold.eot);
  src: url(../assets/fonts/BellinzoBoldBold.eot?#iefix)
      format("embedded-opentype"),
    url(../assets/fonts/BellinzoBoldBold.woff2) format("woff2"),
    url(../assets/fonts/BellinzoBoldBold.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  font-weight: bold;
}

.nav-link {
  display: inline-block !important;
  padding: 6px 0px !important;
}

.nav-tabs {
  border-bottom: none !important;
}
.nav-fill .nav-item,
.nav-fill > .nav-link {
  flex: 0.1 0 auto !important;
}
</style>
<style scoped>
.att-form {
  padding-top: 130px;
  max-width: 580px;
}
.att-form-body {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
h4,
p {
  text-align: center;
  padding-top: 20px;
}
a:link,
a:visited {
  color: #1fc5b9;
}
checkbox:checked {
  background-color: #1fc5b9;
}
.att-f-icons {
  padding: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #1fc5b9;
  width: 1em;
  height: 1em;
  font-size: 200%;
  vertical-align: text-bottom;
  display: inline-block;
  text-align: center;
  position: relative;
  bottom: 35px;
}
.att-f-icons:hover {
  color: #1fc5b9;
}
.att-f-icons_white {
  color: #fff;
}
.att-f-icons_white:hover {
  color: #1fc5b9;
}

.col,
.padding-0 {
  padding: 0 !important;
}
.btn-outline-turquoise-solid {
  color: #fff;
  background-color: #1fc5b9;
  border-color: #1fc5b9;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 15px 25px;
  font-weight: bolder;
  text-align: center;
}
.btn-outline-turquoise-solid:hover {
  color: #fff;
  border-color: #000;
  background-color: black;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 15px 25px;
  font-weight: bolder;
  text-align: center;
}
input[data-v-5538c0d6] {
  height: 60px;
}
.form-control {
  font-weight: 400;
  line-height: 1.5;
  color: #bcbcbc;
  background-color: #fff;
  background-clip: padding-box;
  border: 3px solid #000;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: "Bellinzobold" !important;
  font-size: 18px;
  height: 60px;
}
.dob-style {
  height: 60px;
  font-size: 14px;
  padding: 0 15px 0 15px !important;
  margin: 0;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  border-bottom: 5px solid #000 !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.nav-fill .nav-item,
.nav-fill > .nav-link {
  flex: 1 1 auto;
  text-align: left;
}
.active-tab-class {
  color: #000;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
}
.active-tab-class h1 {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
}
.hero-image-left {
  background-image: url("../assets/images/arttest-login-sign-up-image.jpg");
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 680px) {
  .hero-image-left {
    background-image: url("../assets/images/arttest-login-sign-up-image.jpg");
    background-color: #cccccc;
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>