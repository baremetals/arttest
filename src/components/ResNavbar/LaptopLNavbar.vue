<template>
  <b-navbar toggleable="lg" class="att-black" type="dark" style="z-index: 10; padding: 0rem 1.5rem;">
    <b-navbar-brand href="#">
      <img src="@/assets/images/attest-logo-white.svg" />
    </b-navbar-brand>
    <b-navbar-brand href="#" style="display: flex">
      <div class="serch_con">
        <input type="text" placeholder="Search" />
        <img src="@/assets/images/ic_search.svg" />
      </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"> </b-nav-item>
        <b-navbar-nav class="attnav-container">
          <b-nav-item class="attnav-item-li col-2">
            <b-img src="@/assets/images/home.png" alt="Right image"></b-img>
            <p style="font-size: 10px; color: white; margin-bottom: 0; margin-top: 3px;">Home</p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24.075" height="24.075" viewBox="0 0 24.075 24.075" >
              <g id="Group_940" data-name="Group 940" transform="translate(-917 -17)">
                <path id="Path_547" data-name="Path 547" d="M19.776,0H4.3A4.3,4.3,0,0,0,0,4.3V19.776a4.3,4.3,0,0,0,4.3,4.3H19.776a4.3,4.3,0,0,0,4.3-4.3V4.3A4.3,4.3,0,0,0,19.776,0Zm2.579,19.776a2.579,2.579,0,0,1-2.579,2.579H4.3A2.579,2.579,0,0,1,1.72,19.776V4.3A2.579,2.579,0,0,1,4.3,1.72H19.776A2.579,2.579,0,0,1,22.355,4.3Z" transform="translate(917 17)" fill="#fff"></path>
                <path id="Path_548" data-name="Path 548" d="M145.991,140.832h-3.439v-3.439a.86.86,0,0,0-1.72,0v3.439h-3.439a.86.86,0,1,0,0,1.72h3.439v3.439a.86.86,0,1,0,1.72,0v-3.439h3.439a.86.86,0,1,0,0-1.72Z" transform="translate(787.346 -112.654)" fill="#fff"></path>
              </g>
            </svg>
            <p style="font-size: 10px; color: white; margin-bottom: 0; margin-left: -17px; margin-top: 3px;">
              Add Contest
            </p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2" href="#" style="margin-left: -13px" >
            <b-img src="@/assets/images/vote.png" alt="Right image"></b-img>
            <p style="font-size: 10px; color: white; margin-bottom: 0; margin-left: 2px; margin-top: 3px;">
              Vote
            </p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2" href="#" style="margin-left: -13px">
            <b-img src="@/assets/images/Path -3.png" alt="Right image"></b-img>
            <p style="  font-size: 10px; color: white; margin-bottom: 0; margin-left: -7px; margin-top: 3px;"> Uploads</p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2" href="#" style="margin-left: -10px" >
            <base-dropdown  menu-on-right class="nav-item" tag="li" title-tag="a" title-classes="nav-link pr-0">
              <a href="#" class="nav-link pr-0" @click.prevent slot="title-container" style="margin-top:-9px;margin-left:-15px">
                <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="@/assets/images/iconfinder_Notification_-1.png">
                    <p style="font-size: 10px; color: white; margin-bottom: 0; margin-left: -17px; margin-top: 3px;">Notification</p>
                  </span>
                </b-media>
              </a>
              <template>
                <div></div>
              </template>
            </base-dropdown>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2" href="#">
             <base-dropdown menu-on-right class="nav-item" tag="li" title-tag="a" title-classes="nav-link pr-0">
                <a href="#" class="nav-link pr-0" @click.prevent slot="title-container" style="margin-top:-19px;margin-left:-22px">
                  <b-media no-body class="align-items-center">
                    <span class="avatar avatar-sm rounded-circle">
                      <img alt="Image placeholder" src="@/assets/images/Ellipse -3.png" style="width:56px">
                    </span>
                  </b-media>
                </a>
                <template>
                  <b-dropdown-header class="noti-title">
                    <h6 class="text-overflow m-0" style="font-weight:700;color:#000000">Madison Howard</h6>
                    <p class="mt-2">mailname@gmail.com</p>
                    <div class="dropdown-divider"></div>
                  </b-dropdown-header>
                  <b-dropdown-item to="/profile" style="font-size:13px">
                    <b-icon icon="person"></b-icon>
                    <span class="ml-3">Profile</span>
                  </b-dropdown-item>
                  <b-dropdown-item to="/inbox" style="font-size:13px">
                    <b-icon icon="inboxes"></b-icon>
                    <span class="ml-3">Inbox</span>
                  </b-dropdown-item>
                  <b-dropdown-item to="/activity" style="font-size:13px">
                    <b-icon icon="card-list"></b-icon>
                    <span class="ml-3">Activity</span>
                  </b-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <b-dropdown-item to="/support" style="font-size:13px">
                    <b-icon icon="gear-fill"></b-icon>
                    <span class="ml-3">Support</span>
                  </b-dropdown-item>
                  <b-dropdown-item to="/signout" style="font-size:13px">
                    <b-icon icon="unlock"></b-icon>
                    <span class="ml-3">Sign out</span>
                  </b-dropdown-item>
                </template>
              </base-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
    <b-modal id="modal-1" size="xl" hide-footer hide-header>
      <b-button class="closeBtn" @click="$root.$emit('bv::hide::modal', 'modal-1', $event.target)"></b-button>
        <b-tabs card content-class="mt-3" fill active-nav-item-class="text-success">
          <b-tab title="Upload Images" :title-link-class="linkClass(0)" active>
            <UploadImage />
          </b-tab>
          <b-tab title="Upload Videos" :title-link-class="linkClass(0)">
            <UploadVideo />
          </b-tab>
          <b-tab title="Upload files" :title-link-class="linkClass(0)">
            <UploadFile />
          </b-tab>
          <b-tab title="Write a story one" :title-link-class="linkClass(0)">
            <WriteStory />
          </b-tab>    
      </b-tabs>
    </b-modal>
  </b-navbar>
</template>
<script>
import UploadImage from "@/components/UploadImage.vue";
import WriteStory  from "@/components/WriteStory.vue";
import UploadVideo from "@/components/UploadVideo.vue";
import UploadFile  from "@/components/UploadFile.vue";

export default {
    name : 'main-header',
    components : {
      UploadImage, WriteStory, UploadVideo, UploadFile
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['modal-tabs-btn']
        } else {
          return ['bg-light', 'text-info']
        }
      },
      userinfoToggle(e){
        console.log(e);
      }
    }
};
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

    .closeBtn{
      position: absolute;
      right: -20px;
      top: -24px;
      border-radius: 50%;
      width: 51px;
      height: 51px;
      background: #1FC5B9 0% 0% no-repeat padding-box;
      opacity: 1;
      border: none;
    }
    .dropdown-menu{
      min-width: 22rem !important;
    }
</style>


