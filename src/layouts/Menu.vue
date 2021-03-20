<template>
  <b-navbar toggleable="lg" class="att-black" type="dark">
    <b-navbar-brand href="#"
      ><img src="@/assets/images/attest-logo-white.svg"
    /></b-navbar-brand>
    <b-navbar-brand href="#" style="display: flex">
      <div class="serch_con">
        <input type="text" placeholder="Search" />
        <img src="@/assets/images/ic_search.svg" />
      </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"> </b-nav-item>
        <b-navbar-nav class="attnav-container">
          <b-nav-item to="/creator-profile" class="attnav-item-li">
            <b-img src="@/assets/images/home.png" alt="Right image"></b-img>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-top: 3px;
              "
            >
              Home
            </p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.075"
              height="24.075"
              viewBox="0 0 24.075 24.075"
            >
              <g
                id="Group_940"
                data-name="Group 940"
                transform="translate(-917 -17)"
              >
                <path
                  id="Path_547"
                  data-name="Path 547"
                  d="M19.776,0H4.3A4.3,4.3,0,0,0,0,4.3V19.776a4.3,4.3,0,0,0,4.3,4.3H19.776a4.3,4.3,0,0,0,4.3-4.3V4.3A4.3,4.3,0,0,0,19.776,0Zm2.579,19.776a2.579,2.579,0,0,1-2.579,2.579H4.3A2.579,2.579,0,0,1,1.72,19.776V4.3A2.579,2.579,0,0,1,4.3,1.72H19.776A2.579,2.579,0,0,1,22.355,4.3Z"
                  transform="translate(917 17)"
                  fill="#fff"
                ></path>
                <path
                  id="Path_548"
                  data-name="Path 548"
                  d="M145.991,140.832h-3.439v-3.439a.86.86,0,0,0-1.72,0v3.439h-3.439a.86.86,0,1,0,0,1.72h3.439v3.439a.86.86,0,1,0,1.72,0v-3.439h3.439a.86.86,0,1,0,0-1.72Z"
                  transform="translate(787.346 -112.654)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: -17px;
                margin-top: 3px;
              "
            >
              Add Contest
            </p>
          </b-nav-item>
          <b-nav-item
            class="attnav-item-li"
            to="/"
            style="margin-left: -13px"
          >
            <b-img src="@/assets/images/vote.png" alt="Right image"></b-img>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: 2px;
                margin-top: 3px;
              "
            >
              Vote
            </p>
          </b-nav-item>
          <b-nav-item
            v-b-modal.modal-1
            class="attnav-item-li"
            href="#"
            style="margin-left: -13px"
          >
            <b-img src="@/assets/images/Path -3.png" alt="Right image"></b-img>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: -7px;
                margin-top: 3px;
              "
            >
              Uploads
            </p>
          </b-nav-item>
          <b-nav-item
            class="attnav-item-li"
            href="#"
            style="margin-left: -10px"
          >
            <b-img
              src="@/assets/images/iconfinder_Notification_-1.png"
              alt="Right image"
            ></b-img>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: -17px;
                margin-top: 3px;
              "
            >
              Notification
            </p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li" >
            <b-img
              src="@/assets/images/Ellipse -3.png"
              alt="Right image"
              style="width: 38px"
            ></b-img>
            <!-- <p style="font-size:10px;color:white;margin-bottom:0">Home</p> -->
          </b-nav-item>
        </b-navbar-nav>
        <!-- <b-nav-item href="#">
                    <b-button variant="outline-turquoise">HOST A CONTEST</b-button>
                </b-nav-item> -->
        <b-nav-item href="#">
          <!-- <b-img src="@/assets/images/Ellipse -3.png" alt="Right image"></b-img> -->
        </b-nav-item>
        <b-nav-item>
          <b-button @click="logout" variant="outline-info" class="mb-2">
          <b-icon  icon="power" aria-hidden="true"></b-icon> Logout
      </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
       <b-modal id="modal-1" size="xl">
          <!-- <b-card no-body> -->
            <b-tabs card>
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
        <!-- </b-card> -->
    </b-modal>
  </b-navbar>
</template>
<script>
import UploadImage from "@/components/UploadImage.vue";
import WriteStory  from "@/components/WriteStory.vue";
import UploadVideo from "@/components/UploadVideo.vue";
import UploadFile  from "@/components/UploadFile.vue";
import { LOGOUT_USER } from "@/store/MutationTypes";
export default {
    name: 'Menu',
    components: {
      UploadImage,
      WriteStory,
      UploadVideo,
      UploadFile,
    },
    // computed: {
      
    // },
    
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
      logout() {
        return this.$store.dispatch(LOGOUT_USER)
    },
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
    .modal-footer{
        display: none !important;
    }
</style>


