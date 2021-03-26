<template>
    <div>
        <div class="hero-image-left">
            <b-button style="margin-top: 35px; position: relative; bottom: -75%; right: 2%;" class="btn-share-customize mr-5">
                <b-icon icon="share-fill" id="shareBtn"></b-icon>
            </b-button>
        </div>
        <!-- <b-img src="@assets/images/company.jpg" fluid-grow></b-img> -->
        <b-container fluid class="bv-example-row att-padding-container intro-banner">
            <b-row>
                <b-col sm="12" md="6" lg="3" xl="2" id="avatar-logo-parent">
                    <b-avatar id="avatar-logo" src="https://placekitten.com/300/300" size="13rem"></b-avatar>
                </b-col>
                <b-col sm="12" md="6" lg="3" xl="5">
                    <div id="project-x-change" style="color: #fff; font-size: 24px; font-weight: bold; margin: 20px 20px; padding-left: 20px; padding-right: 20px">Project X Change</div>
                </b-col>
               <b-col sm="12" md="6" lg="2" xl="2">
<!-- <div style="color: #fff; font-size: 28px; font-weight: bold; margin-top: 15px; margin-bottom: 15px; padding-left: 20px; padding-right: 20px"> <b-button style="max-width: 200px;" variant="outline-light">Analytics</b-button></div> -->
</b-col>
                <b-col id="follow-f" style="margin: 1% auto; position: absolute; right: -3%;" sm="12" md="6" lg="4" xl="3">
                    <b-row>
                        <!-- <b-col sm="12" md="6" lg="3" xl="3" cols="4">
                            <div style="color: #fff; text-align: center; font-size: 14px;">Entries</div>
                            <div style="color: #1FC5B9; font-weight: bold; text-align: center; font-size: 18px;">2</div>
                        </b-col> -->
                        <b-col sm="12" md="6" lg="3" xl="3" cols="3">
                            <div style="color: #fff; text-align: center; font-size: 14px;">Following</div>
                            <div style="color: #1FC5B9; font-weight: bold; text-align: center; font-size: 18px;">40</div>
                        </b-col>
                        <b-col sm="12" md="6" lg="3" xl="3" cols="4">
                            <div style="color: #fff; text-align: center; font-size: 14px;">Followers</div>
                            <div style="color: #1FC5B9; font-weight: bold; text-align: center; font-size: 18px;">28</div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="bv-example-row pt-pb-pr-pl-0 sub-navbar">
            <b-navbar toggleable="lg" type="light" style="padding-bottom:0px">
                <b-collapse id="nav-collapse" is-nav>
                        <b-col cols="3" sm="0"></b-col>
                        <b-col cols="12" sm="12">
                            <b-navbar-nav class="ml-auto c-navbar-nav">
                                <b-col style="margin: 0px 35px 0px 0px;" sm="12" md="6" lg="3" xl="1" v-bind:style="homeStyleObj">
                                    <b-nav-item href="#" v-on:click="makeActive('home')" class="black-color att-font-18">
                                        <p class="black-color bold-font text-place-center">Posts</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col style="margin: 0px 35px 0px 35px;" sm="12" md="6" lg="3" xl="1" v-bind:style="aboutStyleObj">
                                    <b-nav-item href="#" v-on:click="makeActive('about')" class="black-color att-font-18">
                                        <p class="black-color bold-font text-place-center">About</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col style="margin: 0px 35px 0px 35px;" sm="12" md="6" lg="3" xl="1" v-bind:style="postsStyleObj">
                                    <b-nav-item href="#" v-on:click="makeActive('posts')" class="black-color att-font-18">
                                        <p class="black-color bold-font text-place-center">Calls</p>
                                    </b-nav-item>
                                </b-col>
                                <b-col style="margin: 0px 0px 0px 35px;" sm="12" md="6" lg="3" xl="1" v-bind:style="peopleStyleObj">
                                    <b-nav-item href="#" v-on:click="makeActive('people')" class="black-color att-font-18">
                                        <p class="black-color bold-font text-place-center">People</p>
                                    </b-nav-item>
                                </b-col>
                                 <b-col cols="3">
                            <!-- <b-container>
                                <b-button style="max-width: 170px; position: absolute; right: -6%; top: 0px;" variant="outline-turquoise-rounded">Edit Profile</b-button>
                            </b-container> -->
                        </b-col>
                            </b-navbar-nav>
                        </b-col>
                </b-collapse>
            </b-navbar>
        </b-container>
        <b-container style="padding: 15px 50px;" fluid class="bv-example-row att-light-grey">
            <b-row>
                <b-col sm="12" md="6"  lg="3" xl="3">
                    <card class="shadow mt-4 att-pb-bottom">
                        <b-container class="mt-4"><h3 class="fix-h3">@projectxchange</h3></b-container>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col md="auto" sm="auto" lg="auto" cols="auto">
                                        <b-icon icon="calendar2-date"></b-icon>
                                    </b-col>
                                    <b-col class="ml--2" style="margin-left:-15px">
                                        <h6 class="mb-0">
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
                                        <h6 class="mb-0">
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
                                        <h6 class="mb-0">
                                            joined January, 2021
                                        </h6>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col class="ml--2">
                                        <h6 class="mb-0">
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
                                        <p>
                                            There is no limitation, the limit we set on ourself
                                        </p>
                                      
                                <b-button style="max-width: 100%; top: 0px;" variant="outline-turquoise-rounded">Follow</b-button>
                                <b-button style="max-width: 100%; top: 0px;" variant="outline-turquoise-rounded-solid">Following</b-button>
                         
                                    </b-col>
                                </b-row>
                                <b-row>
                                    
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <br>
                    <card class="shadow">
                        <h5>Followers</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding-left: 0px;" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col sm="5" md="5" lg="5" xl="5">
                                        <h6 class="mb-0">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col xl="5" lg="5" md="5" sm="5">
                                        <b-button variant="outline-turquoise-rounded" style="padding: 5px 10px; min-width: 100px">Follow</b-button>
                                        <b-button variant="outline-turquoise-rounded-solid" style="padding: 5px 10px; min-width: 100px">Following</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            
                        </b-list-group>
                    </card>
                    <b-card-footer style="background-color:black;" class="shadow-lg att-pl-35 att-font-700">
                        <a href="" style="color:#1FC5B9; text-decoration: underline;">Show more</a>
                    </b-card-footer>
                    <br>
                   
                </b-col>
                <b-col class="scroll-middle" cols="12" md="6" sm="12" lg="6" v-if="active=='home'">
                    <b-row>
                        <b-col>
                            <card class="shadow mt-4 att-pb-35">
                                <b-container>
                                    <h5 class="mt-4 turquoise-color att-font-700">Latest Call</h5>
                                    <p style="line-height: 1.4em" class="h4 mt-4">Project X Change presents, A Visual Poem in collaboration with: The Stephen Lawrence Day Foundation X Pineapple Performing Arts School.</p>
                                    <p style="line-height: 1.4em" class="mt-3">In collaboration with the Pineapple School for Perfoming Arts, we will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the importance of equality for all.</p>
                                <p style="line-height: 1.4em" class="mt-3">A nationwide casting call will be advertised on social media, with the objective of casting as inclusively and diversely as possible, to ensure that anyone from any background, class or faith will be given the opportunity to participate.</p>
                
                                <b-button class="mt-3" style="max-width: 250px; top: 0px;" variant="outline-turquoise-rounded-solid">Find out more</b-button>

                                </b-container>
                            </card>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-row>
                                
                      <card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-row class="att-mt-35">
                                <b-col xl="12" lg="12" md="12" sm="12" style="text-align: left; padding-left: 0px;">
                                <b-icon icon="instagram" scale="1.5"></b-icon><span class="att-font-700 att-pl-10 att-pb-20"> ContestCard</span>
                                </b-col>
                            </b-row>
                            <b-row>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                    <b-icon icon="heart" style="color:#1FC5B9;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>

                        <card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-row class="">
                               <b-img src="@/assets/images/image/Path 594.png" class="mt-3" style="height:21px"></b-img>
                                <p class="p-3" style="margin-bottom:0px; color:#1FC5B9;font-weight:700">BlogCard</p>
                                
                            </b-row>
                            <b-row>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                    <b-icon icon="heart" style="color:#1FC5B9;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>

<card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-row class="">
                               <b-img src="@/assets/images/image/Path 594.png" class="mt-3" style="height:21px"></b-img>
                                <p class="p-3" style="margin-bottom:0px; color:#1FC5B9;font-weight:700">NewsCard</p>
                                
                            </b-row>
                            <b-row>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                    <b-icon icon="heart" style="color:#1FC5B9;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>

                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="scroll-middle" cols="12" md="6" sm="12" lg="6" v-else-if="active=='posts'">
                  
                  <card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                           
                            <b-row>
                                  <p class="pt-3 pb-3" style="margin-bottom:0px; color:#1FC5B9;font-weight:700">Instagram</p>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>
                  
                   <card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                           
                            <b-row>
                                  <p class="pt-3 pb-3" style="margin-bottom:0px; color:#1FC5B9;font-weight:700">Blog</p>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>

                  <card class="shadow-lg mt-4">
                        <b-container style="padding-left: 0px;">
                            <b-row style="padding-left: 0px;" align-v="center">
                             <b-col xl="1" lg="1" md="1" sm="1">
                                    <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                        <img alt="Image placeholder" src="@/assets/images/image/Ellipse -82.png">
                                    </a>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9">
                                    <h6 class="mb-0">
                                        OO_Seth
                                    </h6>
                                    <p class="text-sm text-muted mb-0">5 min ago</p>
                                </b-col>
                                <b-col xl="2" lg="2" md="2" sm="2" style="font-size:35px; text-align: right;">
                                    <b-icon  class="hover-icon" icon="three-dots" style="font-size:35px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container>
                           
                            <b-row>
                                  <p class="pt-3 pb-3" style="margin-bottom:0px; color:#1FC5B9;font-weight:700">Blog</p>
                                <p class="h5">Project X Change presents, A Visual Poem In Collaboration with, The Stephen Lawrence Day Foundation</p>
                                <p>In collaboration with Pineapple School for performancing Arts, We will encourage young writers of underrepresented backgrounds in the London area, to write a piece that speaks to the important of equality for all</p>
                            </b-row>
                        </b-container>
                        <b-container>
                            <b-embed type="video" aspect="16by9" controls poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/webm">
                                <source src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0" type="video/mp4">
                            </b-embed>
                        </b-container>
                        <br>
                        <b-container>
                            <b-row align-v="center">
                                <b-col xl="1" lg="1" md="1" sm="1"  style="font-size:20px; ">
                                    <b-icon icon="heart-fill" style="color:red;font-size:20px"></b-icon>
                                </b-col>
                                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                                    <p class="text-sm text-muted mb-2 " style="font-size:13px; padding: 0px">You and 207 peoples live this</p>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:20px">
                                    <b-icon class="mb-2  hover-icon" icon="chat-square-dots" style="font-size:22px"></b-icon>
                                </b-col>
                                <b-col lg="1" md="" sm="" cols="" style="font-size:18px">
                                    <b-icon class="mb-2  hover-icon" icon="share-fill" style="font-size:18px"></b-icon>
                                </b-col>
                            </b-row>
                        </b-container>
                 </card>
                    
                    
                     

                    
                </b-col>




                <b-col class="scroll-middle" cols="12" md="6" sm="12" lg="6" v-else-if="active=='about'">
                    <card class="shadow-lg mt-4">
                        <b-container>
                            <p class="h4 mt-4">Project X Change presents, A Visial Poem in collaboration with: The Stephen Lawrence Day Foundation X pineapple performancing Arts Schools</p>
                            <p class="h5 mt-3">In collaboration with Pineapple School Perfoming Arts, We will encourage young writers of underrepresented backgrounds in London are, to write a piece that speaks to the importance of equality for all,</p>
                            <p class="h5 mt-3">In collaboration with Pineapple School Perfoming Arts, We will encourage young writers of underrepresented backgrounds in London are, to write a piece that speaks to the importance of equality for all,</p>
                        </b-container>
                    </card>
                </b-col>
                <b-col class="scroll-middle" cols="12" md="6" sm="12" lg="6" v-else-if="active=='people'">

                    <card class="shadow">
                        <h5>Followers</h5>
                        <b-list-groups>
                            <b-list-group-item class="d-flex justify-content-between align-items-center w-50 float-left">
                                <b-row align-v="center">
                                    <b-col style="padding-left: 0px;" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col sm="5" md="5" lg="5" xl="5">
                                        <h6 class="mb-0">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col xl="5" lg="5" md="5" sm="5">
                                        <b-button variant="outline-turquoise-rounded" style="padding: 5px 10px; min-width: 100px">Follow</b-button>
                                        <b-button variant="outline-turquoise-rounded-solid" style="padding: 5px 10px; min-width: 100px">Following</b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                              <b-list-group-item class="d-flex justify-content-between align-items-center w-50 float-left">
                                <b-row align-v="center">
                                    <b-col style="padding-left: 0px;" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col sm="5" md="5" lg="5" xl="5">
                                        <h6 class="mb-0">
                                            OO_Seth
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">@OO_Seth</p>
                                    </b-col>
                                    <b-col xl="5" lg="5" md="5" sm="5">
                                        <b-button variant="outline-turquoise-rounded" style="padding: 5px 10px; min-width: 100px">Follow</b-button>
                                        <b-button variant="outline-turquoise-rounded-solid" style="padding: 5px 10px; min-width: 100px">Following</b-button>
                                    </b-col>
                                </b-row>
                            
                            </b-list-group-item>

                        </b-list-groups>

                         <b-card-footer style="background:none; border:none;"  class=" text-center att-font-700">
                        <a href="" style="color:#1FC5B9; text-decoration: underline;">view more</a>
                    </b-card-footer>
                    <br>
                    </card>
                    

                </b-col>
                <b-col cols="12" md="6" sm="12" lg="3" class="mt-4">
                    
                    <card class="shadow">
                        <h5 style="color:black;font-weight">Recent Notifications</h5>
                        <b-list-group>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding: 0px" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse 48.png">
                                        </a>
                                    </b-col>
                                    <b-col cols="8" lg="9" md="9" sm="8">
                                        <h6 class="mb-0 bold-font black-color att-font-14">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">5 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding: 0px" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -89.png">
                                        </a>
                                    </b-col>
                                    <b-col xl="10" lg="10" md="10" sm="10">
                                        <h6 class="mb-0 bold-font black-color att-font-14">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">10 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding: 0px" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -69.png">
                                        </a>
                                    </b-col>
                                    <b-col xl="10" lg=10 md="10" sm="10">
                                        <h6 class="mb-0 bold-font black-color att-font-14">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">18 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding: 0px" xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -70.png">
                                        </a>
                                    </b-col>
                                    <b-col xl="10" lg="10" md="10" sm="10">
                                        <h6 class="mb-0 bold-font black-color att-font-14">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">25 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex justify-content-between align-items-center">
                                <b-row align-v="center">
                                    <b-col style="padding: 0px"  xl="2" lg="2" md="2" sm="2">
                                        <a href="javascript:;" class="avatar avatar-xl rounded-circle">
                                            <img alt="Image placeholder" src="@/assets/images/image/Ellipse -75.png">
                                        </a>
                                    </b-col>
                                    <b-col xl="10" lg="10" md="10" sm="10">
                                        <h6 class="mb-0 bold-font black-color att-font-14">
                                            Anyone one can join with us if you want
                                        </h6>
                                        <p class="text-sm text-muted mb-0" style="font-size:12px">39 Min Ago</p>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                    <card class="shadow mt-3">
                        <h5>Advertisement</h5>
                        <b-img class="mt-4" src="https://picsum.photos/400/400/?image=20" fluid-grow></b-img>
                    </card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
// import EntryCard from '@/components/TimelineCards/EntryCard.vue'
// import FollowersTabCard from '@/components/TimelineCards/FollowersTabCard.vue'
export default {
    name: 'Brand-Profile',
    // components: {
    //     EntryCard,
    // FollowersTabCard,
    // },
    data(){
        return{
            active1 : true,
            active : "home",
            homeStyleObj : {
                borderBottom : "5px solid #1FC5B9"
            },
            aboutStyleObj : {
                borderBottom : ""
            },
            postsStyleObj : {
                borderBottom : ""
            },
            peopleStyleObj : {
                borderBottom : ""
            },
            videoStyleObj : {
                borderBottom : ""
            }
        }
    },
    methods:{
        makeActive: function(item){
            this.active = item;
            if(item=="home"){
                this.homeStyleObj.borderBottom="5px solid #1FC5B9";
                this.aboutStyleObj.borderBottom="";
                this.postsStyleObj.borderBottom="";
                this.peopleStyleObj.borderBottom="";
                this.videoStyleObj.borderBottom="";
            }
            else if(item=="about"){
                this.homeStyleObj.borderBottom="";
                this.aboutStyleObj.borderBottom="5px solid #1FC5B9";
                this.postsStyleObj.borderBottom="";
                this.peopleStyleObj.borderBottom="";
                this.videoStyleObj.borderBottom="";
            }
            else if(item=="posts"){
                this.homeStyleObj.borderBottom="";
                this.aboutStyleObj.borderBottom="";
                this.postsStyleObj.borderBottom="5px solid #1FC5B9";
                this.peopleStyleObj.borderBottom="";
                this.videoStyleObj.borderBottom="";
            }
            else if(item=="people"){
                this.homeStyleObj.borderBottom="";
                this.aboutStyleObj.borderBottom="";
                this.postsStyleObj.borderBottom="";
                this.peopleStyleObj.borderBottom="5px solid #1FC5B9";
                this.videoStyleObj.borderBottom="";
            }
            else{
                this.homeStyleObj.borderBottom="";
                this.aboutStyleObj.borderBottom="";
                this.postsStyleObj.borderBottom="";
                this.peopleStyleObj.borderBottom="";
                this.videoStyleObj.borderBottom="5px solid #1FC5B9";
            }
        }
    }  
}
</script>
 
<style>
.att-font-14 {
    font-size: 14px;;
}
.att-font-18 {
    font-size: 18px;;
}
.att-light-grey {
    background-color: #F1F1F1;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
}
.att-p-20 {
padding: 20px;
}
.att-pl-10 {
padding-left: 10px;
}
.att-pl-20 {
  padding-left: 20px;
} 
.att-pl-35 {
  padding-left: 35px;
}
.att-pl-10 {
padding-right: 10px;
}
.att-pr-20 {
    padding-right: 20px;
} 
.att-pt-20 {
    padding-top: 20px;
} 
.att-pb-20 {
    padding-bottom: 20px;
} 

.att-pb-35 {
    padding-bottom: 35px;
} 
.att-mt-35 {
        margin-top: 12px;
    margin-bottom: 12px;
} 
.att-mb-35 {
    margin-bottom: 35px;
} 
.att-font-700 {
    font-weight: 700;
}
.turquoise-color {
    color: #1FC5B9;
}
.pt-pb-pr-pl-0 {
    padding: 0;
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
    height: 50px;
    width: 50px;
    position: static;
    float: right;
}
.hero-image-left {
  background-image: url('../assets/images/coverbg.jpg');
  background-color: #cccccc;
  height: 30rem;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-outline-light {
    color: #f8f9fa;
    border-color: #fff;
    width: 100%;
    max-width: 100%;
    border-radius: 50rem!important;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 8px;
    font-weight: bolder;
}
.btn-outline-turquoise-rounded {
    color: #1FC5B9;
    border-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 50rem!important;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;

}
.btn-outline-turquoise-rounded:hover {
    color: #fff;
    border-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 50rem!important;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
    background: #1FC5B9;
}
.btn-outline-turquoise-rounded-solid {
    color: #fff;
    border-color: #1FC5B9;
    background-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 50rem!important;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;

}
.btn-outline-turquoise-rounded-solid:hover {
    color: #fff;
    border-color: #000;
    background-color: #000;
    width: 100%;
    max-width: 100%;
    border-radius: 50rem!important;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem .5rem;
    background-color: transparent;
    border: none;
    text-shadow: none;
}
.text-place-center{
    text-align: center;
}
.scroll-middle{
    height: 100%;
    overflow-y: scroll;
}
.scroll-middle::-webkit-scrollbar{
    width: 3px;
}
.scroll-middle::-webkit-scrollbar-track{
    background-color: transparent;
}
.scroll-middle::-webkit-slider-thumb{
    background: rgb(34, 18, 18);
}
.scroll-middle::-webkit-scrollbar-thumb:hover{
    background: rgb(138, 77, 77);
}
.intro-banner{
    background-color: #1F1717;
    /* height: 800px !important; */
}
.editProfileBtn-parent{
    display: none;
}

@media screen and (min-width: 1200px) {
  .intro-banner {
    height: 80px;
  }
  #avatar-logo{
      margin-top: -55px;
      border: 5px solid #fff;
      margin-left: 50px;
      margin-right: 50px;
  }
}

.hover-icon:hover{
    color:#1FC5B9;
}
.txt-align-center{
margin-left: 0px;
    padding-left: 0px;
    margin-top: 5px;
	}
</style>
