<template>
  <div>
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
                <b-tabs content-class="mt-3" fill>
                  <b-tab class="active-tab-class" title="Sign Up">
                    <b-form @submit="onSubmit" class="att-form-body">
                      <b-form-group
                        id="email-group"
                        label-for="email"
                        description=""
                      >
                        <b-form-input
                          id="email"
                          v-model="model.email"
                          type="email"
                          placeholder="Email Address"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="username-group"
                        label-for="username"
                        prepend=""
                      >
                        <b-form-input
                          id="username"
                          v-model="model.username"
                          type="text"
                          placeholder="Username"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="dob-group"
                        label="Date of Birth:"
                        label-for="dob"
                      >
                        <b-row>
                          <b-col sm="4"
                            ><b-form-select
                              v-model="date_selected"
                              :options="date_options"
                              class="form-control dob-style"
                            ></b-form-select
                          ></b-col>
                          <b-col sm="4"
                            ><b-form-select
                              v-model="month_selected"
                              :options="month_options"
                              class="form-control dob-style"
                            ></b-form-select
                          ></b-col>
                          <b-col sm="4"
                            ><b-form-select
                              v-model="year_selected"
                              :options="year_options"
                              class="form-control dob-style"
                            ></b-form-select
                          ></b-col>
                        </b-row>
                      </b-form-group>

                      <b-form-group
                        id="confirmDob-group-4"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          v-model="model.checked"
                          id="confirmDob"
                          :aria-describedby="ariaDescribedby"
                        >
                          <b-form-checkbox
                            style="display: block"
                            value="dobConfirmed"
                            >Please confirm you have parental
                            consent</b-form-checkbox
                          >
                        </b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group id="password-group" label-for="password">
                        <b-form-input
                          id="password"
                          v-model="model.password"
                          type="password"
                          placeholder="Enter Password"
                          required
                        >
                        </b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="confirmPassword-group"
                        label-for="confirmPassword"
                      >
                        <b-form-input
                          id="confirmPassword"
                          v-model="model.confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="terms-group"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          v-model="model.terms"
                          id="terms"
                          :aria-describedby="ariaDescribedby"
                        >
                          <b-form-checkbox value="acceptedTerms"
                            ><p class="prtxt">
                              By clicking Sign Up, you agree to our
                              <span class="text-primary"
                                ><router-link to="/terms"
                                  >Terms</router-link
                                ></span
                              >, Learn how we collect, use and share your data
                              in our<span class="text-primary"
                                ><router-link to="/data-policy">
                                  Data Policy</router-link
                                ></span
                              >
                              and how we use cookies and similar technology in
                              our
                              <span class="text-primary"
                                ><router-link to="/terms"
                                  >Cookies policy</router-link
                                ></span
                              >
                              . You may receive SMS notification from us and can
                              opt at any time.
                            </p>
                          </b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-form-group>
                      <b-button type="submit" variant="outline-turquoise-solid"
                        >CREATE ACCOUNT</b-button
                      >
                    </b-form>
                    <div>
                      <p>
                        <span class="text-muted"
                          >Already have an account?
                          <router-link to="/auth-login"
                            >Login</router-link
                          ></span
                        >
                      </p>
                    </div>
                  </b-tab>
                  <b-tab title="Login">
                    <b-form @submit="onSubmit" class="att-form-body">
                      <b-form-group
                        id="email-group"
                        label-for="email"
                        description=""
                      >
                        <b-form-input
                          id="email"
                          v-model="model.email"
                          type="email"
                          placeholder="Enter email"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group id="password-group" label-for="password">
                        <b-form-input
                          id="password"
                          v-model="model.password"
                          type="password"
                          placeholder="Enter pasword"
                          required
                        >
                        </b-form-input>
                      </b-form-group>

                      <b-button type="submit" variant="outline-turquoise-solid"
                        >CREATE ACCOUNT</b-button
                      >
                    </b-form>
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
import {
  date_options,
  month_options,
  year_options,
} from "@/utils/DateSelector.js";
export default {
  data() {
    return {
      model: {
        email: "",
        username: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
        checked: false,
        terms: true,
      },

      date_selected: null,
      month_selected: null,
      year_selected: null,
      date_options: date_options,
      month_options: month_options,
      year_options: year_options,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
<style>
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