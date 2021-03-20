<template>
    <div style="margin-top: -64px">
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="340"
        >
            <b-carousel-slide img-src="@/assets/images/arttest-home-slide-narrow-1.jpg">
                <div class="right" style="height: 41px;width: 41px;border:1px solid white;border-radius: 50%;">
                    <b-icon icon="share-fill"></b-icon>
                </div>
            </b-carousel-slide>
        </b-carousel>
        <b-navbar toggleable="lg" type="light" class="shadow-lg">
            <b-collapse id="nav-collapse" is-nav>
                    <b-col cols="3"></b-col>
                    <b-col cols="6">
                        <b-navbar-nav class="ml-auto">
                            <b-col>
                                <b-nav-item href="#" class="timeline">
                                    Timeline
                                </b-nav-item>
                            </b-col>
                            <b-col>
                                <b-nav-item href="#" class="about">
                                    About
                                </b-nav-item>
                            </b-col>
                            <b-col>
                                <b-nav-item href="#" class="photos">
                                    Photos
                                </b-nav-item>
                            </b-col>
                            <b-col>
                                <b-nav-item href="#" class="follows">
                                    Follows
                                </b-nav-item>
                            </b-col>
                        </b-navbar-nav>
                    </b-col>
                    <b-col cols="3">
                        <b-container>
                            <b-button pill style="border-color:#1fc5b9;background-color:transparent;color:#1fc5b9;font-weight:700;margin-left:100px">Set Reminder</b-button>
                        </b-container>
                    </b-col>
            </b-collapse>
        </b-navbar>
        <br>
        <b-row>
            <b-col cols="3">
                <b-img src="@/assets/images/judgeimg.png" style="display:block;width:80%;margin-left;auto;margin-right;auto;margin-top:-150px;z-index:10000"></b-img>
                 <card class="shadow-lg">
                    <b-container><h5 style="font-size:16px">@dsmithy</h5></b-container>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
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
                                <b-col md="auto">
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
                                <b-col md="auto">
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
                                        There is no limitation, the limite we set on ourself
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
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
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
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2" style="margin-left:-15px">
                                    <h6 class="mb-0" style="font-size:12px">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                </b-col>
                                <b-col md="auto">
                                    <b-button variant="outline-success" pill style="padding: 5px 20px">Follow</b-button>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                    </b-list-group>
                </card>
                <b-card-footer style="background-color:black;font-size:12px;" class="shadow-lg">
                    <a href="" style="color:#1FC5B9">Show more</a>
                </b-card-footer>
            </b-col>
            <b-col cols="6">
                <card  class="shadow-lg">
                    <!-- Card body -->
                    <b-container>
                        <b-row align-v="center">
                            <b-col md="auto">
                            <!-- Avatar -->
                            <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                            </a>
                            </b-col>
                            <b-col class="ml--2">
                            <h6 class="mb-0">
                                <a href="javascript:;">Merry Waston</a>
                            </h6>
                            <p class="text-sm text-muted mb-0">20 min ago</p>
                            </b-col>
                            <b-col md="auto">
                            <b-icon icon="list"></b-icon>
                            </b-col>
                        </b-row>
                    </b-container>
                    <br>
                    <b-container>
                        <b-row>
                            <p class="h6" style="padding:1px 15px;font-family:sans-serif;">Many desktop publishing packages and webpage editors nwo use lorem lpsum as their default model text, and a search for lorem lpsum will uncover many web sites still in their infancy</p>
                        </b-row>
                    </b-container>
                    <br>
                    <b-container>
                        <b-img src="@/assets/images/merrybg.jpg" fluid></b-img>
                    </b-container>
                    <br>
                    <b-container>
                        <b-row align-v="center">
                            <b-col md="auto">
                                <b-icon icon="heart-fill"></b-icon>
                            </b-col>
                            <b-col class="ml--2">
                                <p class="text-sm text-muted mb-0">You and 207 peoples live this</p>
                            </b-col>
                            <b-col md="auto">
                                <b-icon icon="share-fill"></b-icon>
                            </b-col>
                            <b-col md="auto">
                                <p class="text-sm text-muted mb-0">2.5k</p>
                            </b-col>
                            <b-col md="auto">
                                <b-icon icon="share-fill"></b-icon>
                            </b-col>
                            <b-col md="auto">
                                <p class="text-sm text-muted mb-0">2.5k</p>
                            </b-col>
                            <b-col md="auto">
                                <b-icon icon="share-fill"></b-icon>
                            </b-col>
                        </b-row>
                    </b-container>
                </card>
                <br>
                <card  class="shadow-lg">
                    <b-container>
                        <b-row align-v="center">
                            <b-col md="auto">
                            <!-- Avatar -->
                            <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                            </a>
                            </b-col>
                            <b-col class="ml--2">
                            <h6 class="mb-0">
                                <a href="javascript:;">William Henry</a>
                            </h6>
                            <p class="text-sm text-muted mb-0">35 min ago</p>
                            </b-col>
                            <b-col md="auto">
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
                        <b-embed type="video" aspect="16by9" controls poster="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/generated-kartra-video-thumb-7865226_1581299091799WJ_4.0_VSL_v03.mp4.jpg">
                            <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                            <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4"> 
                        </b-embed>
                    </b-container>
                    <br>
                    <b-container>
                        <b-row align-v="center">
                            <b-col md="auto">
                                <img src="@/assets/images/image/Fill-1.png" alt="">
                            </b-col>
                            <b-col class="ml--2">
                                <p class="text-sm text-muted mb-0">You and 207 peoples live this</p>
                            </b-col>
                            <b-col md="auto">
                                <b-icon icon="share-fill"></b-icon>
                            </b-col>
                            <b-col md="auto">
                                <p class="text-sm text-muted mb-0">2.5k</p>
                            </b-col>
                            <b-col md="auto">
                                <img src="@/assets/images/tik-tok.png" style="width:16px" alt="">
                            </b-col>
                            <b-col md="auto">
                                <p class="text-sm text-muted mb-0">2.5k</p>
                            </b-col>
                            <b-col md="auto">
                                <b-icon icon="share-fill"></b-icon>
                            </b-col>
                        </b-row>
                    </b-container>
                </card>
            </b-col>
            <b-col cols="3" >
                <card class="shadow-lg">
                    <h5 style="font-size:16px">Live Contests</h5>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-col cols="8" md="auto">
                                <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                <h6 class="mb-0" style="font-size:12px">
                                    Contest Name
                                </h6>
                            </b-col>
                            <b-col cols="4" class="ml--2">
                                <b-button variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                            </b-col>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-col cols="8" md="auto">
                                <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                <h6 class="mb-0" style="font-size:12px">
                                    Contest Name
                                </h6>
                            </b-col>
                            <b-col cols="4" class="ml--2">
                                <b-button variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                            </b-col>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-col cols="8" md="auto">
                                <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                <h6 class="mb-0" style="font-size:12px">
                                    Contest Name
                                </h6>
                            </b-col>
                            <b-col cols="4" class="ml--2">
                                <b-button variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                            </b-col>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-col cols="8" md="auto">
                                <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                <h6 class="mb-0" style="font-size:12px">
                                    Contest Name
                                </h6>
                            </b-col>
                            <b-col cols="4" class="ml--2">
                                <b-button variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                            </b-col>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-col cols="8" md="auto">
                                <p class="text-sm text-muted mb-0" style="font-size:12px">Category</p>
                                <h6 class="mb-0" style="font-size:12px">
                                    Contest Name
                                </h6>
                            </b-col>
                            <b-col cols="4" class="ml--2">
                                <b-button variant="outline-success" pill style="padding: 5px 20px">Vote</b-button>        
                            </b-col>
                        </b-list-group-item>
                    </b-list-group>
                </card>
                <b-card-footer style="background-color:black;font-size:12px;" class="shadow-lg">
                    <a href="" style="color:#1FC5B9">Show All Live Contests</a>
                </b-card-footer>
                <br>
                <card class="shadow-lg">
                    <h5 style="font-size:16px">Recent Notifications</h5>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2">
                                    <h6 class="mb-0" style="font-size:12px">
                                        Anyone one can join with us if you want
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">5 Min Ago</p>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                                       <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -89.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2">
                                    <h6 class="mb-0" style="font-size:12px">
                                        Anyone one can join with us if you want
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">10 Min Ago</p>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                                       <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -69.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2">
                                    <h6 class="mb-0" style="font-size:12px">
                                        Anyone one can join with us if you want
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">18 Min Ago</p>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                                       <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -70.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2">
                                    <h6 class="mb-0" style="font-size:12px">
                                        Anyone one can join with us if you want
                                    </h6>
                                    <p class="text-sm text-muted mb-0" style="font-size:12px">25 Min Ago</p>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                                       <b-list-group-item class="d-flex justify-content-between align-items-center">
                            <b-row align-v="center">
                                <b-col md="auto">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -75.png">
                                    </a>
                                </b-col>
                                <b-col class="ml--2">
                                    <h6 class="mb-0" style="font-size:12px">
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
                    <br>
                    <b-img src="https://picsum.photos/400/400/?image=20" fluid></b-img>
                </card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
    .serch_con input[type="text"] {
        background: transparent;
        border: 0;
        padding: 7px 10px 7px 0;
        font-size: 16px;
        line-height: 21px;
        color: #fff;
        font-family: SegoeUIRegular;
    }

    .serch_con input::placeholder {
        font-family: inherit;
        font-size: 20px;
        font-weight: bolder;
        line-height: 21px;
        color: white;
    }

    .serch_con {
        position: relative;
        margin-left: 90px;
        width: 198px;
        border-bottom: 1px solid #707070 !important;
    }

    .serch_con img {
        position: absolute;
        right: 7px;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .modal-footer{
        display: none !important;
    }
</style>