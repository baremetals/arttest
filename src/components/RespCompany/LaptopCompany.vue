<template>
    <div>
        <div class="companyBg">
            <b-img src="@/assets/images/coverbg.jpg" fluid class="img-center"></b-img>
            <b-button class="btn-share-customize mr-5">
                <b-icon icon="share-fill"></b-icon>
            </b-button>
        </div>
        <b-container fluid class="bv-example-row pt-pb-pr-pl-0">
            <b-navbar toggleable="lg" type="light" style="background-color: #000000 !important;">
                <b-collapse id="nav-collapse" is-nav>
                    <b-container>
                        <b-img src="@/assets/images/projectxchange-logo.png" style="position:absolute; top: -2rem;left : 3rem;z-index:100; width:207px; height: 207px;border-radius:50%;border:5px solid white;"></b-img>
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
                                        <p class="black-color bold-font">Home</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('about')" class="about black-color">
                                        <p class="black-color bold-font">About</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('posts')" class="photos black-color">
                                        <p class="black-color bold-font">Posts</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('people')" class="follows black-color">
                                        <p class="black-color bold-font">People</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col>
                                    <b-nav-item href="#" v-on:click="makeActive('videos')" class="follows black-color">
                                        <p class="black-color bold-font">Videos</p>
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
        
        <b-container fluid class="bv-example-row">
            <b-row class="mt-4">
                <b-col cols="12" md="6" sm="12" lg="3">
                    <card class="shadow-lg mt-5">
                        <b-container><h5 style="font-size:16px">@projectxchange</h5></b-container>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col md="auto" sm="auto" lg="auto" cols="auto">
                                        <b-icon icon="calendar2-date"></b-icon>
                                    </b-col>
                                    <b-col class="ml--2" style="margin-left:-15px">
                                        <h6 class="mb-0" style="font-size:12px">
                                            London, England
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col md="auto" sm="auto" lg="auto" cols="auto">
                                        <b-icon icon="calendar2-date"></b-icon>
                                    </b-col>
                                    <b-col class="ml--2" style="margin-left:-15px">
                                        <h6 class="mb-0" style="font-size:12px">
                                            danieismith.com
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col md="auto" sm="auto" lg="auto" cols="auto">
                                        <b-icon icon="calendar2-date"></b-icon>
                                    </b-col>
                                    <b-col class="ml--2" style="margin-left:-15px">
                                        <h6 class="mb-0" style="font-size:12px">
                                            joined january, 2021
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col class="ml--2">
                                        <h6 class="mb-0" style="font-size:12px">
                                            Photographer/Editor/Creative
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col class="ml--2">
                                        <h6 class="mb-0" style="font-size:12px">
                                            There is no limitation, the limit we set on ourself
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <br>
                    <card class="shadow-lg">
                        <h5 style="font-size:16px">Follow Suggestions</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>

                        </b-list-group>
                    </card>
                    <b-card-footer style="background-color:black;font-size:12px;" class="shadow-lg">
                        <a href="" style="color:#1FC5B9">Show more</a>
                    </b-card-footer>
                    <br>
                    <card class="shadow-lg">
                        <h5 style="font-size:16px">Top Artist This Week</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                   <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col lg="2" md="2" sm="2" cols="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <h6 class="mb-0" style="font-size:12px">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5" cols="5">
                                        <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <b-card-footer style="background-color:black;font-size:12px;" class="shadow-lg">
                        <a href="" style="color:#1FC5B9">Show more</a>
                    </b-card-footer>
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="6" v-if="active=='home'">
                    <card class="shadow-lg mt-4">
                        <b-container>
                            <b-row align-v="center">
                                <b-col lg="1" md="2" sm="2" cols="2" class="p-2">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col lg="10" md="8" sm="8" cols="8">
                                    <h6 class="mb-0">
                                        William Henry
                                    </h6>
                                    <p class="text-sm text-muted mb-0">35 min ago</p>
                                </b-col>
                                <b-col lg="1" md="2" sm="2" cols="2">
                                    <b-icon icon="list"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row>
                                <p class="h6" style="padding:1px 15px; font-family:sans-serif">Many desktop publishing packages and webpage editors nwo use lorem lpsum as their default model text, and a search for lorem lpsum will uncover many web sites still in their infancy</p>
                            </b-row>
                        </b-container>
                        <br>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4"> 
                                <!-- src="https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4 -->
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col lg="1" md="" sm="" cols="">
                                    <img class="mb-2" src="@/assets/images/image/Fill-1.png" alt="">
                                </b-col>
                                <b-col lg="6" md="" sm="" cols="">
                                    <p class="text-sm text-muted mb-2">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="2" md="" sm="" cols="">
                                    <div class="d-flex">
                                        <img class="mt-3" src="@/assets/images/image/Path 562.png" style="width:20px;height:20px" alt="">
                                        <p class="p-2 mt-1">2.5k</p>
                                    </div>
                                </b-col>
                                <b-col lg="2" md="" sm="" cols="">
                                    <div class="d-flex">
                                        <img class="mt-3" src="@/assets/images/image/tik-tok-1.png" style="width:20px;height:20px" alt="">
                                        <p class="p-2 mt-1">2.5k</p>
                                    </div>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="">
                                    <b-icon class="mb-2" icon="share-fill"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                    </card>
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="6" v-else-if="active=='posts'">
                    posts
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="6" v-else-if="active=='about'">
                    <card class="shadow-lg mt-4">
                        <b-container>
                            <p class="h4 mt-4">Project X Change presents, A Visial Poem in collaboration with: The Stephen Lawrence Day Foundation X pineapple performancing Arts Schools</p>
                            <p class="h5 mt-3">In collaboration with Pineapple School Perfoming Arts, We will encourage young writers of underrepresented backgrounds in London are, to write a piece that speaks to the importance of equality for all,</p>
                            <p class="h5 mt-3">In collaboration with Pineapple School Perfoming Arts, We will encourage young writers of underrepresented backgrounds in London are, to write a piece that speaks to the importance of equality for all,</p>
                        </b-container>
                    </card>
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="6" v-else-if="active=='people'">
                    people
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="6" v-else-if="active=='videos'">
                    videos
                </b-col>
                <b-col cols="12" md="6" sm="12" lg="3" class="mt-2">
                    <card class="shadow-lg">
                        <h5 style="font-size:16px">Live Contests</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-col cols="7">
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                    <h6 class="mb-0" style="font-size:12px">
                                        Contest Name
                                    </h6>
                                </b-col>
                                <b-col cols="5">
                                    <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                                </b-col>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-col cols="7">
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                    <h6 class="mb-0" style="font-size:12px">
                                        Contest Name
                                    </h6>
                                </b-col>
                                <b-col cols="5">
                                    <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                                </b-col>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-col cols="7">
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                    <h6 class="mb-0" style="font-size:12px">
                                        Contest Name
                                    </h6>
                                </b-col>
                                <b-col cols="5">
                                    <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                                </b-col>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-col cols="7">
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                    <h6 class="mb-0" style="font-size:12px">
                                        Contest Name
                                    </h6>
                                </b-col>
                                <b-col cols="5">
                                    <b-button class="btn-outline-customize" variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                                </b-col>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-col cols="7">
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                    <h6 class="mb-0" style="font-size:12px">
                                        Contest Name
                                    </h6>
                                </b-col>
                                <b-col cols="5">
                                    <b-button variant="outline-success" class="btn-outline-customize" pill style="padding: 5px 20px">Vote</b-button>        
                                </b-col>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <b-card-footer style="background-color:black;font-size:12px;" class="shadow-lg">
                        <a href="" style="color:#1FC5B9">Show All Live Contests</a>
                    </b-card-footer>
                    <br>
                    <card class="shadow-lg">
                        <h5 style="font-size:16px;color:black;font-weight">Recent Notifications</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col cols="4" lg="3" md="3" sm="4">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color fit-fontsize">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">5 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col cols="4" lg="3" md="3" sm="4">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -89.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color fit-fontsize">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">10 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col cols="4" lg="3" md="3" sm="4">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -69.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color fit-fontsize">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">18 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col cols="4" lg="3" md="3" sm="4">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -70.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color fit-fontsize">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">25 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col cols="4" lg="3" md="3" sm="4">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -75.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color fit-fontsize">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">39 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <br>
                    <card class="shadow-lg">
                        <h5 style="font-size:16px">Advertisement</h5>
                        <b-img class="mt-4" src="https://picsum.photos/400/400/?image=20" fluid-grow></b-img>
                    </card>
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
.companyBg{
    width: 100%;
    height: 25rem;
    background-color: #222222;
}
.btn-outline-customize{
    color: #1FC5B9;
    background-color: white;
    border-color: #1FC5B9;
}
.bold-font{
    font-weight: 700;
}
.black-color{
    color: black;
}
.fit-fontsize{
    font-size: 12px;
}
.img-center{
    /* display: block; */
    display: table-cell;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
}
.btn-share-customize{
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    padding: 7px 5px;
    height: 41px;
    width: 41px;
    position: static;
    float: right;
}
</style>
