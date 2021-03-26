<template>
  <div>
    <!-- model start -->
    <b-modal v-model="modalShow" title="Your request has been sent">
      Please check the email address for the reset password link. the link has
      an expiration date.
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
                <ValidationObserver ref="observer">
                  <b-form @submit.prevent="onSubmit" class="att-form-body">
                    <h2 style="font-weight: 600">Find your arttest account</h2>
                    <p class="forgot-txt">
                      Enter your email, and we'll send you a link get back into
                      your account.
                    </p>
                    <ValidationProvider name="email" rules="required|email">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        id="email-group"
                        label-for="email"
                        description=""
                      >
                        <b-form-input
                          id="email"
                          v-model="model.email"
                          :state="errors[0] ? false : valid ? true : null"
                          type="email"
                          placeholder="Enter email"
                          required
                          class="pl-2"
                        ></b-form-input>
                        <b-form-invalid-feedback id="inputLiveFeedback">
                          {{ errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </ValidationProvider>
                    <b-button type="submit" variant="outline-turquoise-solid"
                      >LOGIN
                      <b-spinner
                        v-if="loading"
                        type="grow"
                        label="Text Centered"
                      ></b-spinner>
                    </b-button>
                    <div></div>
                    <br />
                    <br />
                    <router-link to="/auth-signup">
                      <b-button
                        :disabled="disabled"
                        type="submit"
                        class="bck-btn"
                        >BACK TO LOGIN</b-button
                      >
                    </router-link>
                    <p></p>
                    <p></p>
                  </b-form>
                </ValidationObserver>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ForgotPassword-Page",
  computed: {
    ...mapActions(["forgotPassword"]),
  },
  data() {
    return {
      model: {
        email: "",
      },
      modalShow: false,
      loading: false,
      disabled: false,
    };
  },
  methods: {
    onSubmit() {
      this.disabled = true;
      this.loading = true;
      console.log(this.model.email);
      this.model.email = "";
      this.modalShow = true;
      // this.$store.dispatch('forgotPassword', this.model.email);
      this.loading = false;
      this.disabled = false;
    },
  },
};
</script>

<style>
.btn-outline-black {
  color: #000;
  border-color: #000;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
}
.btn-outline-black:hover {
  color: #fff;
  border-color: #000;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
  background: #000;
}
.bck-btn {
  width: 100%;
  background: #0000 !important;
  color: #000 !important;
  font-weight: 600 !important;
  border: 2px solid #000 !important;
  border-radius: 0px !important;
  padding: 10px 0px !important;
}
.bck-btn:hover {
  color: #fff;
  border-color: #000;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
  background: #1fc5b9;
}
</style>

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

