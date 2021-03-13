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
              <h4  class="text-black">Forgot Password</h4>              
            </div>
            <div class="reset-text">
              <p>Please enter the email address associated with your account and
                we will email you a link to reset your password. </p>
            </div>
            <hr style="border-top: 2px solid #1fc5b9">
            <b-form @submit="onSubmit" v-if="show" class="att-form-body">
                    
              <b-form-group
                id="email-group"
                label-for="email"
              >             
                <b-form-input
                  id="email"
                  v-model="model.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
                <fa-icon class="att-f-icons" :icon="['fas', 'at']"/>
              </b-form-group> 

                   
              <b-button type="submit" variant="outline-turquoise">Reset Password</b-button>
            </b-form>
            <div>
              <p><span class="text-muted">Back? <router-link to="/auth-login">sigin in</router-link></span></p>
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
        email: "",
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
.reset-text {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: auto;
}
p {
  text-align: center;
  padding-top: 2px;
}
h4 {
  text-align: center;
  padding-top: 20px;
}
a:link, a:visited {
  color: #1fc5b9;
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
input {
  padding-left: 40px;
}
</style>