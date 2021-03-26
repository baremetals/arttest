<template>
  <div class="parent-sec">
      <div class="hero-image-section">
         <b-img class="contain-banner mt-5" src="@/assets/images/poem.png" fluid></b-img>
         <b-button class="whiteCircleBtn mt-2" variant="outline-success">
            <b-icon icon="share-fill"></b-icon>
         </b-button> 
      </div>
    <div class="hero-banner-section">
      <b-img
        class="banner-logo"
        src="@/assets/images/projectxchange-logo.png"
      ></b-img>
      <div class="main-bannner">
         <p class="h4 banner-title mt-3">Project X Change</p>
         <b-row class="social-follow mt-3">
            <b-col cols="4">
            <p class="h6 white-font centered-font">Entries</p>
            <p class="h2 centered-font customized-font">2</p>
            </b-col>
            <b-col cols="4"> 
               <p class="h6 white-font centered-font">Following</p>
               <p class="h2 centered-font customized-font">40</p>
            </b-col>
            <b-col cols="4"> 
               <p class="h6 white-font centered-font">Followers</p>
               <p class="h2 centered-font customized-font">28</p>
            </b-col>
            <b-button class="customized-btn mt-5" pill variant="outline-info">Edit Profile</b-button>
         </b-row>
      </div>
    </div>
    <div class="subnav-for-content">
         <b-navbar class="centered-navbar" type="light" variant="light">
            <b-navbar-nav>
               <b-nav-item v-for="(l, index) in list" :key="index" @click="makeActiveNav(l, index)" v-bind:class="{ selected : l.isSelected, notselected : !l.isSelected }">{{l.item}}</b-nav-item>
            </b-navbar-nav>
         </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
   data(){
      return{
         list : [
            {key : "0", item : "Home", isSelected : true},
            {key : "1", item : "About", isSelected : false},
            {key : "2", item : "Posts", isSelected : false},
            {key : "3", item : "People", isSelected : false},
            {key : "4", item : "Videos", isSelected : false}
         ]
      }
   },
   methods : {
      makeActiveNav : function(l, index){
         console.log(l);
         console.log(index);
         for(var i = 0; i < this.list.length; i ++){
            this.list[i].isSelected = false;
         }
         l.isSelected = true;
      }
   }
};
</script>

<style>
.parent-sec {
  position: relative;
}
.hero-image-section {
  height: 24.875rem;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-banner-section {
  height: 25rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.banner-logo {
  position: absolute;
  width: 13.1875rem;
  height: 12.9375rem;
  border: 3px solid white;
  border-radius: 50%;
  top: 40%;
}
.banner-title {
  color: white;
  /* margin-top: 36%; */
  font-size: 26px;
}
.social-follow {
  width: 100%;
}
.main-bannner{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   /* padding-top: 7.8125rem; */
   padding-top: 125px;
}
.white-font{
   color: white;
}
.black-font{
   color: black !important;
}
.centered-font{
   text-align: center;
}
.customized-font{
   color: #1FC5B9;
   font-size: 23px;
}
.customized-btn{
   color: #1FC5B9;
   border-color: #1FC5B9;
   border: 3px solid;
   background-color: transparent;
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 133px;
   height: 35px;
   font-size: 16px;
   font-weight: 700;
   padding: 2px 2px;
}
.centered-navbar{
   display: flex;
   justify-content: center;
}
.centered-navbar ul li a{
   font-weight: 700;
   color: #000000;
}
.contain-banner{
   display: block;
   margin-right: auto;
   margin-left: auto;
   width: 24.125rem;
   height: 13.9375rem;
}
.whiteCircleBtn{
   color:white;
   border: 1px solid white;
   border-radius: 50%;
   height: 2.5625rem;
   width: 2.5625rem;
   padding: 7px 8px;  
}
.selected{
   border-bottom: 2px solid #1FC5B9;
}
</style>