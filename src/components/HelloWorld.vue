<template>

<div>
  <!-- Header -->
 <b-navbar toggleable="lg" class="att-black" type="dark">
    <b-navbar-brand href="#"><img src="@/assets/images/attest-logo-white.svg" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="attnav-container">
        <b-nav-item class="attnav-item-li" href="#">Home</b-nav-item>
        <b-nav-item class="attnav-item-li"  href="#">Contests</b-nav-item>
        <b-nav-item class="attnav-item-li"  href="#">Events</b-nav-item>
        <b-nav-item class="attnav-item-li" href="#">Explore</b-nav-item>
        <b-nav-item class="attnav-item-li"  href="#">Blog</b-nav-item>
        <b-nav-item class="attnav-item-li"  href="#">Votes</b-nav-item>
      </b-navbar-nav>
      <b-nav-item href="#"><b-button variant="outline-light">HOST A CONTEST</b-button></b-nav-item>
      <b-nav-item href="#"><b-button variant="outline-light">LOGIN / SIGN UP</b-button></b-nav-item>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 <!-- Header -->

 <!-- Slider -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- Slides 1 -->
      <b-carousel-slide img-src="@/assets/images/arttest-home-slide-1.jpg">
        <h4>Creator of the day</h4>
        <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
        <div class="top-right"><a href="javascript:void(0);" class="share_btn"><fa-icon :icon="['fas', 'share-alt']" /></a></div>
        <div class="right"><b-button variant="outline-light">VIEW CONTEST</b-button></div>
       <div class="left"><b-list-group-item><b-avatar href="#bar" src="@/assets/images/projectxchange-logo.png"></b-avatar> ProjectXChange</b-list-group-item></div>
<div>
    <b-icon icon="share-fill" style="width: 120px; height: 120px;"></b-icon>
  </div>
      </b-carousel-slide>

<!-- Slides 1 Ends -->
      
       <!-- Slides 2 -->
      <b-carousel-slide img-src="@/assets/images/arttest-home-slide-1.jpg">
        <h4>Creator of the day</h4>
        <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
        <div class="top-right"><a href="javascript:void(0);" class="share_btn"><fa-icon :icon="['fas', 'share-alt']" /></a></div>
       <div class="right"><b-button variant="outline-light">VIEW CONTEST</b-button></div>
       <div class="left"><b-list-group-item><b-avatar href="#bar" src="@/assets/images/projectxchange-logo.png"></b-avatar> ProjectXChange</b-list-group-item></div>
      </b-carousel-slide>
      <!-- Slides 2 Ends -->

      <!-- Slides 3 -->
      <b-carousel-slide img-src="@/assets/images/arttest-home-slide-1.jpg">
        <h4>Creator of the day</h4>
        <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
        <div class="top-right"><a href="javascript:void(0);" class="share_btn"><fa-icon :icon="['fas', 'share-alt']" /></a></div>
       <div class="right"><b-button variant="outline-light">VIEW CONTEST</b-button></div>
       <div class="left"><b-list-group-item><b-avatar href="#bar" src="@/assets/images/projectxchange-logo.png"></b-avatar> ProjectXChange</b-list-group-item></div>
      </b-carousel-slide>
      <!-- Slides 3 Ends -->

       <!-- Slides 4 -->
      <b-carousel-slide img-src="@/assets/images/arttest-home-slide-1.jpg">
        <h4>Creator of the day</h4>
        <h1>The no1. platform for showcasing or finding creators &amp; innovators.</h1>
        <div><a href="javascript:void(0);" class="share_btn"><fa-icon :icon="['fas', 'share-alt']" /></a></div>
       <div class="right"><b-button variant="outline-light">VIEW CONTEST</b-button></div>
       <div class="left"><b-list-group-item><b-avatar href="#bar" src="@/assets/images/projectxchange-logo.png"></b-avatar> ProjectXChange</b-list-group-item></div>
      </b-carousel-slide>
<!-- Slides 4 Ends -->
    </b-carousel>
<!-- Slider Ends -->
  <b-container fluid>
  <b-row>
  <div style="width: 100%" class="atthomesection1">
    <h4 style="padding-bottom: 35px;">All  |  <a style="color: #000;" href="#">Live Contests</a> </h4>
 <b-card-group deck>
    <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top class="card-image card-img-top">
    <div class="card-avatar">
                        <div class="avatar"></div>
                    </div>
<b-row>
                <b-col style="color: #000;" cols="10"><h4>John Doe</h4></b-col>
                <b-col style="color: #000;" cols="2"><span>1</span><fa-icon :icon="['fas', 'heart']" /></b-col>
</b-row>
<b-row>
                <b-col style="color: #000;">@johnnydoe</b-col>
</b-row>
<b-row>
                <b-col class="att-pb-20"><b-card-text>
        <div style="color: #000; font-size: 14px; line-height: 20px">This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content.
        ...</div>
      </b-card-text></b-col>
</b-row>
<b-row>
<b-col><hr></b-col>
</b-row>
<b-row>
                <b-col style="font-size: 14px;" cols="8"><span style="font-weight: 700; color: #000;">Entry Deadline:</span><span style="color: #1FC5B9; font-weight: 700;"> 23hrs 40m 19s</span></b-col>
                <b-col style="font-size: 12px; text-align: right; color: #000;" cols="4">Dec 12, 2020</b-col>
</b-row>
    </b-card>
<b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top class="card-image card-img-top">
    <div class="card-avatar">
                        <div class="avatar"></div>
                    </div>
<b-row>
                <b-col cols="10"><h4>John Doe</h4></b-col>
                <b-col cols="2"><span>1</span><fa-icon :icon="['far', 'heart']" /></b-col>
</b-row>
<b-row>
                <b-col>@johnnydoe</b-col>
</b-row>
<b-row>
                <b-col class="att-pb-20"><b-card-text>
        <div style="color: #000; font-size: 14px; line-height: 20px">This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content.
        ...</div>
      </b-card-text></b-col>
</b-row>
<b-row>
<b-col><hr></b-col>
</b-row>
<b-row>
                <b-col style="font-size: 14px;" cols="8"><span style="font-weight: 700; color: #000;">Entry Deadline:</span><span style="color: #1FC5B9; font-weight: 700;"> 23hrs 40m 19s</span></b-col>
                <b-col style="font-size: 12px; text-align: right; color: #000;" cols="4">Dec 12, 2020</b-col>
</b-row>
    </b-card>
<b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top class="card-image card-img-top">
    <div class="card-avatar">
                        <div class="avatar"></div>
                    </div>
<b-row>
                <b-col cols="10"><h4>John Doe</h4></b-col>
                <b-col cols="2"><span>1</span><fa-icon :icon="['fas', 'heart']" /></b-col>
</b-row>
<b-row>
                <b-col>@johnnydoe</b-col>
</b-row>
<b-row>
                <b-col class="att-pb-20"><b-card-text>
        <div style="color: #000; font-size: 14px; line-height: 20px">This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content.
        ...</div>
      </b-card-text></b-col>
</b-row>
<b-row>
<b-col><hr></b-col>
</b-row>
<b-row>
                <b-col style="font-size: 14px;" cols="8"><span style="font-weight: 700; color: #000;">Entry Deadline:</span><span style="color: #1FC5B9; font-weight: 700;"> 23hrs 40m 19s</span></b-col>
                <b-col style="font-size: 12px; text-align: right; color: #000;" cols="4">Dec 12, 2020</b-col>
</b-row>
    </b-card>

  </b-card-group>
  
  </div>
  </b-row>
</b-container>
  </div>
</template>
<!-- Carousel Slider Css Start -->
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<!-- Carousel Slider Css Start -->

<!-- Creator Profile Card Css Start -->
<script>
 

</script>
<!-- Creator Profile Card Css Start -->

<!-- Header Css Start -->
<style>
.att-black {
background-color: #000;
}
.navbar {
    padding: 1rem 1.5rem;
}
.attnav-container {
padding-top: 13px; padding-left: 25px; padding-right: 35px;
}
.attnav-item-li {
font-weight: 900; font-size: 18px; padding-left: 45px;
}

</style>
<!-- Header Css Ends -->

<!-- Slider Css Start -->
<style>
h1, h2, h3, h4, h5, h6, h7 {
  font-family: 'Roboto', sans-serif;
}
h4 {
  font-size: 18px;
}
h1 {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;
  text-shadow: none;
}
h4 {
 text-shadow: none; 
}
.carousel-control-next, .carousel-control-prev {
    width: 10%;
    color: #000;
}
.btn-outline-light {
    color: #f8f9fa;
    border-color: #fff;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
}
.share_btn {
      border-radius: 50%;
      border: 3px solid #fff;
      padding: 20px;
      width: 100px;
      height: 20px;
      color: #fff;
}
.share_btn:hover {
      border-radius: 50%;
      border: 1px solid #fff;
      padding: 20px;
      width: 100px;
      height: 20px;
      color: #000;
      background: #fff;
}

.svg-inline--fa {
    display: inline-block;
    font-size: 24px;
    height: 1em;
    overflow: visible;
    vertical-align: -0.25em;
}
.top-right {
  position: absolute;
  top: -250%;
  right: -18%;
}
.right {
  position: absolute;
  right: -125px;
  bottom: 20px;
}
.left {
  position: absolute;
  left: -160px;
  bottom: 20px;
}
.b-carousel-slide {
margin-bottom: 50px;
}
.carousel-caption {
  padding-bottom: 50px;
}
.carousel-indicators li {
  height: 4px;
  margin-bottom: 20px;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: transparent;
    border: none;
    text-shadow: none;
}
</style>
<!-- Slider Css End -->

<!-- Creator Profile Card Css -->
<style scoped>
.atthomesection1 {
text-align: left; padding-top: 100px; padding-left: 50px; padding-right: 50px;
}
.att-pt-35 {
  padding-top: 35px;
}
.att-pb-20 {
  padding-bottom: 20px;
}
video {
    /* override other styles to make responsive */
    width: 100%    !important;
    height: 100%;
    object-fit: cover;
}
.btn:focus {
    box-shadow: none;
}
.card-image {
    width: 100%;
    max-height: 246px;
}
.card-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card-img-top {
    width: 100%;
    height: 246px;
    object-fit: cover;
}
.card-avatar{
    position: relative;
}
.avatar {
    width: 91px;
    height: 91px;
    background-color: #D1D1D1;
    border: 5px solid #FFFFFF;
    opacity: 1;
    border-radius: 100px;
    position: absolute;
    left: 0px;
    bottom: 5px;
}
.card-body {
    padding: 30px 19px 10px 19px;
}
.card {
    width: 363px;
    height: 508px;
    padding: 0px;
}
.card-like {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.card-text-like {
    margin-bottom: 0;
    line-height: normal;
}
.card-title {
    font-size: 16px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    font-weight: bold;
}
.card-subtitle {
    font-size: 14px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.card-text {
    margin-top: 20px;
    font-family: 'Proxima Nova';
    letter-spacing: 0px;
    font-weight: normal;
    color: #000000;
    opacity: 1;
    font-size: 12px;
    line-height: 120%;
}
.card-footer {
    padding: 10px 19px 33px 19px;
    background-color: transparent;
    border-top: 1px solid transparent;
    display: flex;
    justify-content: space-between;
}
.btn-turquoise {
    background-color: #ffffff;
    border-radius: 50px;
    border: 3px solid #1FC5B9;
    color: #1FC5B9;
    font-size: 18px;
    font-weight: bold;
    padding: 3px 40px;
}
.btn-turquoise:hover {
    background-color: #1FC5B9;
    border-radius: 50px;
    border: 3px solid #1FC5B9;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 3px 40px;
}
.btn-turquoise-follow {
    background-color: #1FC5B9;
    border-radius: 50px;
    border: 3px solid #1FC5B9;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 3px 40px;
}
.btn-turquoise-follow:hover {
    border-radius: 50px;
    border-color: #CA2055;
    background-color: #CA2055;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 3px 40px;
    text-decoration: none;
}
.btn-turquoise-follow:hover span {
    display: none;
}

.btn-turquoise-follow:hover:before {
   content: "Unfollow";
}

.btn-share {
    background-color: #ffffff;
    border-radius: 50px;
    color: #000000;
    border: 1px solid #000000;
    width: 30px;
    height: 30px;
    padding: 0;
}
.btn-share:hover {
    background-color: #1FC5B9;
    border-radius: 50px;
    color: #ffffff;
    border: 1px solid #1FC5B9;
    opacity: 1;
}
.btn-like {
    color: #1FC5B9;
}
.btn-like:hover {
    color: #1FC5B9;
}
.btn-turquoise-outline {
    color: #fff;
    background-color: #1FC5B9;
    border-color: #1FC5B9;
    font-weight: 500;
    width: 133px;
    display: flex;
    justify-content: center;
    height: 35px;
    border-radius: 50px;
    font-size: 18px;
    padding: 3px 40px;
}
.btn-turquoise-outline:hover {
    color: #fff;
    display: flex;
    justify-content: center;
    background-color: #1FC5B9;
    border-color: #1FC5B9;
    width: 133px;
    height: 35px;
    font-weight: 500;
    border-radius: 50px;
    font-size: 18px;
    padding: 3px 40px;
}
.btn-simple-outline {
    color: #000000;
    display: flex;
    justify-content: center;
    background-color: #EBEEF0;
    border-color: #EBEEF0;
    width: 133px;
    height: 35px;
    font-weight: 500;
    border-radius: 50px;
    font-size: 18px;
    padding: 3px 40px;
}
.fill-heart {
    display: none;
}
/*modal*/
.modal-unfollow {
    font: normal normal bold 16px/19px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-bottom: 20px;
}
.modal-description {
    text-align: center;
    font: normal normal normal 12px Proxima Nova;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.modal-body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.modal-content{
    padding: 5px;
    width: 322px;
    height: 243px
}
.modal-footer{
    border-top: 1px solid transparent;
    justify-content: center;
}
</style>
<!-- Creator Profile Card Css -->

<style scoped>
@media only screen and (max-width: 768px) {
 .top-right {
  position: absolute;
  top: -140%;
  right: -18%;
}
}

</style>