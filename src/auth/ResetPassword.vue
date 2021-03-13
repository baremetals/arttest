<template>
  <div>
    <b-container
      style="background-color: #eee"
      fluid
      class="mt--8 pb-5 att-padding-container"
    >
      <b-row class="justify-content-center">
        <b-col class="att-form" lg="6" md="8">
          <b-card no-body class="border-0">
            <div>
              <h4  class="text-black">Reset Password</h4>
            </div>
            <hr style="border-top: 2px solid #1fc5b9">
            <b-form @submit="onSubmit" v-if="show" class="att-form-body">
              
              <b-form-group
                id="password-group"
                label-for="password"    
              >
                <b-form-input
                  id="password"
                  v-model="model.password"
                  type="password"
                  placeholder="Enter pasword"
                  required                 
                >                
                </b-form-input>
                <fa-icon class="att-f-icons" :icon="['fas', 'lock']"/>
              </b-form-group> 
              <b-form-group
                id="confirmPassword-group"
                label-for="confirmPassword"
              >
                <b-form-input
                  id="confirmPassword"
                  v-model="model.confirmPassword"
                  type="password"
                  placeholder="Confirm paswword"
                  required
                ></b-form-input>
                <fa-icon class="att-f-icons" :icon="['fas', 'lock']"/>
              </b-form-group>           
              
              <b-button type="submit" variant="outline-turquoise">Change password</b-button>
            </b-form>
            <div>
              <p><span class="text-muted">Bact to <router-link to="/auth-login">Signin</router-link></span></p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        password: "",
        confirmPassword: "",
      },
      
      show: true,
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
<style scoped>
.att-form {
  padding-top: 130px;
}
.att-form-body {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
h4, p {
  text-align: center;
  padding-top: 20px;
}
a:link, a:visited {
  color: #1fc5b9;
}
checkbox:checked {
  background-color: #1fc5b9
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
input {
  padding-left: 40px;
}
</style>