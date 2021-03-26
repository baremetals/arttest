<template>
    <div style="margin-top: -64px">
        <b-container fluid class="bv-example-row pt-pb-pr-pl-0">
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
                <b-carousel-slide img-src="@/assets/images/banner.jpg">
                    <div class="right">
                        <b-button variant="outline-success" pill size="lg">
                            <b-icon icon="share-fill"></b-icon>
                        </b-button>
                    </div>
                </b-carousel-slide>
            </b-carousel>
        </b-container>
         <b-container fluid class="bv-example-row pt-pb-pr-pl-0">
            <b-navbar toggleable="lg" type="light" style="background-color: #000000 !important;">
                <b-collapse id="nav-collapse" is-nav>
                    <b-container>
                        <b-img src="@/assets/images/projectxchange-logo.png" style="position:absolute; top: -2rem;z-index:100; width:200px;border-radius:50%;border:5px solid white;"></b-img>
                        <b-row>
                            <b-col cols="2"></b-col>
                            <b-col cols="5">
                                <h4 class="ml-4" style="color:white; padding-top:1rem">Project X Change</h4>
                            </b-col>
                            <b-col cols="2">
                                <b-button variant="outline-light" pill>Analytics</b-button>
                            </b-col>
                            <b-col cols="1">
                                <h6 style="text-align:center;color:white">Entries</h6>
                                <h3 style="text-align:center;color:#1fc5b9">2</h3>
                            </b-col>
                            <b-col cols="1">
                                <h6 style="text-align:center;color:white">Following</h6>
                                <h3 style="text-align:center;color:#1fc5b9">40</h3>
                            </b-col>
                            <b-col cols="1">
                                <h6 style="text-align:center;color:white">Followers</h6>
                                <h3 style="text-align:center;color:#1fc5b9">28</h3>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-collapse>
            </b-navbar>
        </b-container>
        <b-container fluid class="bv-example-row pt-pb-pr-pl-0">
            <b-navbar toggleable="lg" type="light" class="shadow-lg">
                <b-collapse id="nav-collapse" is-nav>
                        <b-col cols="3"></b-col>
                        <b-col cols="6">
                            <b-navbar-nav class="ml-auto">
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('home')" class="timeline">
                                        Home
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('about')" class="about">
                                        About
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('posts')" class="photos">
                                        Posts
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('people')" class="follows">
                                        People
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('videos')" class="follows">
                                        Videos
                                    </b-nav-item>
                                </b-col>
                            </b-navbar-nav>
                        </b-col>
                        <b-col cols="3">
                            <b-container>
                                <b-button pill style="border-color:#1fc5b9;background-color:transparent;color:#1fc5b9;font-weight:700;margin-left:100px">Edit Profile</b-button>
                            </b-container>
                        </b-col>
                </b-collapse>
            </b-navbar>
        </b-container>
        <b-container fluid class="bv-example-row mt-6">
        <b-row class="mt-4">
            <b-col cols="12">
                <b-container>
                    <card class="mt-4 shadow-lg ">
                        <b-row align-v="center">
                            <b-col cols="8">
                                <h3 class="mb-0">
                                    Visitor Analytics
                                </h3>
                                <p class="text-sm text-muted mb-0" style="font-size:12px">All analytics dates and times are displayed in UTC</p>
                            </b-col>
                            <b-col cols="2">
                                
                            </b-col>
                            <b-col cols="2">
                                <b-button variant="outline-success" pill style="padding:6px 32px">Export</b-button>
                            </b-col>
                        </b-row>
                    </card>
                    <card class="mt-4 shadow-lg ">
                        <b-row align-v="center">
                            <b-col class="ml--2">
                             <h3 class="mb-0">
                                Visitor Highlight
                            </h3>
                            <p class="text-sm text-muted mb-0" style="font-size:12px">All analytics dates and times are displayed in UTC</p>
                            </b-col>
                        </b-row>
                        <b-container>
                            <b-row class="mt-3">
                                <b-col>
                                    <h4 style="text-align: left;">40
                                        <span style="font-size:15px;color:rgb(31, 197, 185);">
                                            <b-icon icon="arrow-up"></b-icon>
                                        </span>
                                        <span style="font-size:11px;color:rgb(31, 197, 185);">60%</span>
                                    </h4>
                                </b-col>
                                <b-col>
                                    <h4 style="text-align: center;">40
                                        <span style="font-size:15px;color:rgb(31, 197, 185);">
                                            <b-icon icon="arrow-up"></b-icon>
                                        </span>
                                        <span style="font-size:11px;color:rgb(31, 197, 185);">54%</span>
                                    </h4>
                                </b-col>
                                <b-col>
                                    <h4 style="text-align: right;">40
                                        <span style="font-size:15px;color:rgb(31, 197, 185);">
                                            <b-icon icon="arrow-up"></b-icon>
                                        </span>
                                    </h4>
                                </b-col>
                            </b-row>
                        </b-container>
                    </card>
                    <card class="mt-4 shadow-lg" style="height:500px">
                        <b-row align-v="center">
                            <b-col class="ml--2">
                            <h3 class="mb-0">
                                Visitor Analytics
                            </h3>
                            <p class="text-sm text-muted mb-0" style="font-size:12px">All analytics dates and times are displayed in UTC</p>
                            </b-col>
                            <b-col md="auto">
                                <b-button variant="outline-success" pill style="padding:6px 32px">Export</b-button>
                            </b-col>
                        </b-row>
                    </card>
                      <card class="mt-4 shadow-lg mb-4" style="height:500px">
                        <b-row align-v="center">
                            <b-col class="ml--2">
                            <h3 class="mb-0">
                                Visitor Demographic
                            </h3>
                            <p class="text-sm text-muted mb-0" style="font-size:12px">All analytics dates and times are displayed in UTC</p>
                            </b-col>
                            <b-col md="auto">
                                <b-button variant="outline-success" pill style="padding:6px 32px">Export</b-button>
                            </b-col>
                        </b-row>
                    </card>
                </b-container>
            </b-col>
        </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
  name: 'company-profile',
  data(){
    return{
        active : "home"
    }
  },
  methods:{
      makeActive: function(item){
          this.active = item
      }
  }  
}
</script>

<style>
.pt-pb-pr-pl-0 {
    padding: 0;
}
</style>