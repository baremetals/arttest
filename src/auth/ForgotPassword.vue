<template>
  <div>
    <b-row>
      <b-col sm="12" md="6" lg="4" xl="6" class="padding-0">
        <div class="hero-image-left">
 
  </div>
      </b-col>
    <b-col>
    <b-container style="background-color: #fff; height: 100vh; margin: 10% auto" fluid class="mt--8 pb-5 att-padding-container" >
      <b-row class="justify-content-center">
        <b-col class="att-form" lg="11" md="11">
          <div>    
            <b-form @submit="onSubmit" v-if="show" class="att-form-body">
              <h2 style="font-weight: 600;">Find your arttest account</h2>
              <p class="forgot-txt">Enter your email, and we'll send you a link get back into your account.</p>
                <b-form-group id="email-group" label-for="email" description="" >             
                  <b-form-input
                    id="email"
                    v-model="model.email"
                    type="email"
                    placeholder="Enter email"
                    required class="pl-2"
                  ></b-form-input>
                </b-form-group>
                
                <b-button type="submit" variant="outline-turquoise-solid">LOGIN</b-button>
                <div>            
              </div>
              <br> <br>
              <router-link to="/auth-login">
                <b-button type="submit" class="bck-btn">BACK TO LOGIN</b-button>
              </router-link>
              <p></p>
              <p></p>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
  </div>
</template>

<script>
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
        terms: true
      },
      
      show: true,
      date_selected: null,
      month_selected: null,
      year_selected: null,
      date_options: [
        { value: null, text: 'Select Date', disabled: true },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '23', text: '23' },
        { value: '24', text: '24' },
        { value: '25', text: '25' },
        { value: '26', text: '26' },
        { value: '27', text: '27' },
        { value: '28', text: '28' },
        { value: '29', text: '29' },
        { value: '30', text: '30' }
      ],
      month_options:[
        {value: null, text: 'Select Month', disabled: true},
        {value: 'Jan', text: 'Jan'},
        {value: 'Feb', text: 'Feb'},
        {value: 'March', text: 'March'},
      ],
      year_options:[
        {value: null, text: 'Select Year', disabled: true},
        {value: '2001', text: '2001'},
        {value: '2002', text: '2002'},
        {value: '2003', text: '2003'},
      ]
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
.btn-outline-black {
    color: #000;
    border-color: #000;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
    background: #000;
}
.bck-btn {
    width: 100%;
    background: #0000!important;
    color: #000!important;
    font-weight: 600!important;
    border: 2px solid #000!important;
    border-radius: 0px!important;
    padding: 10px 0px!important;
}
.bck-btn:hover {
    color: #fff;
    border-color: #000;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
    background: #000;
}
</style>

<style>
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    border: none!important;
    border-bottom: 5px solid #1fc5b9!important;
    color: #000!important;
}

p.prtxt {
    margin: 0;
    padding: 0px!important;
    font-weight: 400;
    line-height: 24px;
    text-align: left!important;
}
.nav-link:hover {
    border-color: #0000ff00!important;
}
.nav-tabs .nav-link {
    font-size: 32px;
    font-weight: 700;
    color: #BCBCBC;
    font-family: 'Bellinzobold'!important;
}


@font-face {
    font-family: Bellinzobold;
    src: url(../assets/fonts/Bellinzo-Bold.ttf) format('ttf'); 
    src: url(../assets/fonts/Bellinzo-Bold.otf) format('otf');     
    src: url(../assets/fonts/BellinzoBoldBold.eot);
    src: url(../assets/fonts/BellinzoBoldBold.eot?#iefix) format('embedded-opentype'),
        url(../assets/fonts/BellinzoBoldBold.woff2) format('woff2'),
        url(../assets/fonts/BellinzoBoldBold.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    font-weight: bold;
  }

  .nav-link {
    display: inline-block!important;
    padding: 6px 0px!important;
}

 
.nav-tabs {
     border-bottom: none!important; 
}
.nav-fill .nav-item, .nav-fill>.nav-link {
    flex: 0.1 0 auto!important;
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

.col, .padding-0 {
padding: 0 !important;
}
.btn-outline-turquoise-solid {
    color: #fff;
    background-color: #1FC5B9;
    border-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    color: #BCBCBC;
    background-color: #fff;
    background-clip: padding-box;
    border: 3px solid #000;
    border-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-family: 'Bellinzobold'!important;
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
.nav-fill .nav-item, .nav-fill>.nav-link {
    flex: 1 1 auto;
    text-align: left;
}
.active-tab-class {
    color: #000;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
}
.active-tab-class h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
}
.hero-image-left {
  background-image: url('../assets/images/arttest-login-sign-up-image.jpg'); 
  background-color: #cccccc; 
  height: 100%; 
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;  
}

@media screen and (max-width: 680px) {
  .hero-image-left {
  background-image: url('../assets/images/arttest-login-sign-up-image.jpg');
  background-color: #cccccc;
  height: 50vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
}
}
</style>

