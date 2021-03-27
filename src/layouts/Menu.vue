

<template>
  <b-navbar
   v-if="userData"
    toggleable="lg"
    class="att-black"
    type="dark"
    style="z-index: 10; padding: 0rem 1.5rem"
  >
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

    <b-collapse id="nav-collapse" class="navigation menu" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"> </b-nav-item>
        <b-navbar-nav class="attnav-container">
          <b-nav-item>
            <b-button @click="logout" variant="outline-info" class="mb-2"></b-button>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.261"
              height="35.141"
              viewBox="0 0 41.261 35.141"
            >
              <g
                id="Group_1017"
                data-name="Group 1017"
                transform="translate(117.768 1755.837)"
              >
                <g id="home">
                  <path
                    id="Path_610"
                    data-name="Path 610"
                    d="M-90.835-1743.743h0l-11.25-11.25a2.539,2.539,0,0,0-3.59,0h0l-11.243,11.242-.011.014a2.537,2.537,0,0,0,.007,3.588,2.537,2.537,0,0,0,1.682.737h.526v8.275a2.975,2.975,0,0,0,2.971,2.971h4.4a.808.808,0,0,0,.808-.808h0v-6.49a1.357,1.357,0,0,1,1.356-1.355h2.6a1.357,1.357,0,0,1,1.355,1.355v6.49a.808.808,0,0,0,.808.808h4.4a2.974,2.974,0,0,0,2.969-2.971v-8.274h.416a2.538,2.538,0,0,0,2.542-2.535,2.541,2.541,0,0,0-.742-1.8Zm-1.144,2.446a.916.916,0,0,1-.653.271h-1.223a.808.808,0,0,0-.808.808h0v9.081a1.357,1.357,0,0,1-1.355,1.355h-3.593v-5.678a2.975,2.975,0,0,0-2.971-2.971h-2.6a2.975,2.975,0,0,0-2.971,2.971v5.682h-3.589a1.356,1.356,0,0,1-1.356-1.358h0v-9.081a.808.808,0,0,0-.808-.808h-1.238a.92.92,0,0,1-.906-.937.917.917,0,0,1,.27-.637h0l11.247-11.251a.923.923,0,0,1,1.3,0l11.251,11.245.005.005A.925.925,0,0,1-91.979-1741.3Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_611"
                    data-name="Path 611"
                    d="M-96.017-1728.066h-4.4a.909.909,0,0,1-.908-.908v-6.49a1.259,1.259,0,0,0-1.255-1.254h-2.6a1.258,1.258,0,0,0-1.256,1.254v6.49a.909.909,0,0,1-.908.908h-4.4a3.079,3.079,0,0,1-3.071-3.071v-8.175h-.426a2.634,2.634,0,0,1-1.753-.766,2.64,2.64,0,0,1-.007-3.729l11.254-11.257a2.626,2.626,0,0,1,1.866-.773h0a2.62,2.62,0,0,1,1.865.773l11.21,11.21h0l.04.04a2.626,2.626,0,0,1,.772,1.869,2.641,2.641,0,0,1-2.639,2.635h-.319v8.174A3.08,3.08,0,0,1-96.017-1728.066Zm-9.162-8.853h2.6a1.458,1.458,0,0,1,1.455,1.455v6.49a.709.709,0,0,0,.708.708h4.4a2.88,2.88,0,0,0,2.87-2.871v-8.374h.519a2.442,2.442,0,0,0,2.439-2.435,2.425,2.425,0,0,0-.68-1.693l-.037-.033-11.25-11.25a2.421,2.421,0,0,0-1.724-.714h0a2.422,2.422,0,0,0-1.724.713l-11.244,11.243a2.447,2.447,0,0,0,0,3.46,2.432,2.432,0,0,0,1.616.708h.622v8.375a2.879,2.879,0,0,0,2.871,2.871h4.4a.709.709,0,0,0,.708-.708v-6.49A1.46,1.46,0,0,1-105.179-1736.919Zm-2.874,7.242h-3.689a1.461,1.461,0,0,1-1.457-1.459v-9.082a.708.708,0,0,0-.707-.707h-1.239a1.024,1.024,0,0,1-1.005-1.041,1.011,1.011,0,0,1,.3-.705l11.247-11.251a1.024,1.024,0,0,1,1.441,0l11.251,11.246a1.028,1.028,0,0,1,0,1.45h0a1.022,1.022,0,0,1-.721.3h-1.225a.708.708,0,0,0-.708.707v9.081a1.46,1.46,0,0,1-1.456,1.455h-3.692v-5.778a2.882,2.882,0,0,0-2.872-2.871h-2.6a2.88,2.88,0,0,0-2.87,2.871Zm-7.053-11.449h1.2a.909.909,0,0,1,.907.908v9.081a1.26,1.26,0,0,0,1.257,1.259h3.489v-5.582a3.079,3.079,0,0,1,3.07-3.071h2.6a3.082,3.082,0,0,1,3.072,3.071v5.578h3.492a1.259,1.259,0,0,0,1.255-1.255v-9.081a.91.91,0,0,1,.909-.908h1.224a.826.826,0,0,0,.581-.241h0a.826.826,0,0,0,0-1.163l-11.255-11.25a.825.825,0,0,0-1.159,0l-11.246,11.251a.812.812,0,0,0-.241.567.821.821,0,0,0,.807.836Z"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>

            <p style="font-size: 10px; color: white; margin-bottom: 0">Home</p>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.261"
              height="35.141"
              viewBox="0 0 41.261 35.141"
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
                text-align: center;
              "
              class="contst"
            >
              Add Contest
            </p>
          </b-nav-item>
          <b-nav-item
            class="attnav-item-li col-2"
            href="#"
            style="margin-left: -13px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.51"
              height="35.127"
              viewBox="0 0 31.51 35.127"
            >
              <g
                id="Group_1026"
                data-name="Group 1026"
                transform="translate(176.453 1792.534)"
              >
                <path
                  id="vote"
                  d="M-151.538-1784.905l-1.177.538-4.344-4.938a8.594,8.594,0,0,0-7.668-2.842l-4.894.688v-1.075h-6.832v12.8h6.831v-1.678h1.282a7.043,7.043,0,0,0,3.117,2.759l-1.476.674,3.457,7.567h-7.672v1.847h25.971v-1.847Zm-19.93,3.326h-3.139v-9.109h3.139Zm4.5-1.169-.255-.51h-2.4v-6.338l5.151-.723a6.753,6.753,0,0,1,6.025,2.233l3.977,4.521-1.4.638a3.094,3.094,0,0,0-2.508-1.285h-4.39v1.847h4.393a1.248,1.248,0,0,1,1.247,1.247v1.247h-5.187a5.176,5.176,0,0,1-4.655-2.877Zm2.715,5.681,2.1-.958h6.873v-3.138l2.827-1.294,5.5,12.046h-14.259Z"
                  fill="#fff"
                />
              </g>
            </svg>
            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: 8px;
              "
            >
              Vote
            </p>
          </b-nav-item>
          <b-nav-item
            class="attnav-item-li col-2"
            href="#"
            style="margin-left: -13px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.818"
              height="36.467"
              viewBox="0 0 26.818 36.467"
            >
              <g
                id="Group_1028"
                data-name="Group 1028"
                transform="translate(96.913 1820.128)"
              >
                <path
                  id="Path_546"
                  data-name="Path 546"
                  d="M-71.675-1802.1v5.94H-95.446v-5.94a1.189,1.189,0,0,1,1.223-1.154,1.188,1.188,0,0,1,1.154,1.154v3.566h19.017v-3.566a1.189,1.189,0,0,1,1.223-1.154A1.188,1.188,0,0,1-71.675-1802.1Zm-17.216-12.06,4.145-2.48v13.426a1.189,1.189,0,0,0,1.223,1.154,1.188,1.188,0,0,0,1.154-1.154v-13.428l4.14,2.482a1.189,1.189,0,0,0,1.643-.356,1.188,1.188,0,0,0-.355-1.643c-.021-.014-.043-.027-.065-.039l-6.554-3.928-6.554,3.932a1.188,1.188,0,0,0-.507,1.6,1.188,1.188,0,0,0,1.6.507A1.252,1.252,0,0,0-88.891-1814.162Z"
                  fill="#fff"
                />
              </g>
            </svg>

            <p
              style="
                font-size: 10px;
                color: white;
                margin-bottom: 0;
                margin-left: -7px;
              "
            >
              Uploads
            </p>
          </b-nav-item>
          <b-nav-item
            class="attnav-item-li col-2"
            href="#"
            style="margin-left: -10px"
          >
            <base-dropdown
              menu-on-right
              class="nav-item"
              tag="li"
              title-tag="a"
              title-classes="nav-link pr-0"
            >
              <a
                href="#"
                class="nav-link pr-0"
                @click.prevent
                slot="title-container"
                style="margin-top: -9px; margin-left: -15px"
              >
                <b-media no-body class="align-items-center have-notification">
                  <span class="avatar avatar-sm rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41.61"
                      height="36.906"
                      viewBox="0 0 41.61 36.906"
                    >
                      <g
                        id="Group_1030"
                        data-name="Group 1030"
                        transform="translate(30.689 1841.643)"
                      >
                        <path
                          id="iconfinder_Notification_4737445"
                          data-name="iconfinder Notification 4737445"
                          d="M-.587-1826.271l-.49-.394a1.125,1.125,0,0,1-.422-.878v-4.55a8.445,8.445,0,0,0-6.806-8.282,1.69,1.69,0,0,0-2.058-1.214,1.688,1.688,0,0,0-1.213,1.214,8.443,8.443,0,0,0-6.813,8.282v4.549a1.131,1.131,0,0,1-.422.878l-.49.394a5.066,5.066,0,0,0-1.9,3.942v.935a2.252,2.252,0,0,0,2.252,2.252h4.648a4.5,4.5,0,0,0,5.488,3.222,4.5,4.5,0,0,0,3.222-3.222H-.939a2.252,2.252,0,0,0,2.252-2.252h0v-.923a5.067,5.067,0,0,0-1.9-3.952Zm-9.358,8.254a2.254,2.254,0,0,1-1.937-1.126h3.877A2.255,2.255,0,0,1-9.945-1818.017Zm9.008-3.378H-18.953v-.923a2.812,2.812,0,0,1,1.058-2.2l.49-.394a3.381,3.381,0,0,0,1.267-2.635v-4.546a6.191,6.191,0,0,1,6.2-6.19,6.193,6.193,0,0,1,6.191,6.19v4.549a3.376,3.376,0,0,0,1.267,2.641l.49.394a2.815,2.815,0,0,1,1.058,2.19Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <p
                      style="
                        font-size: 10px;
                        color: white;
                        margin-bottom: 0;
                        margin-left: -7px;
                      "
                    >
                      Notification
                    </p>
                  </span>
                </b-media>
              </a>
              <template>
                <b-dropdown-item to="/profile" style="font-size: 13px">
                  <div class="row">
                    <div class="col-md-10 col-10">
                      <h6 style="" class="dropdown-header p-0">Notification</h6>
                    </div>
                    <div class="col-md-2 col-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                        />
                        <path
                          d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div class="row">
                    <div
                      class="col-md-2 col-sm-2 col-3"
                      style="padding-right: 65px"
                    >
                      <img
                        src="@/assets/images/clockimg.png"
                        width="70"
                        height="70"
                        alt="Images"
                      />
                    </div>
                    <div class="col-md-6 col-sm-5 col-9 textfontsize">
                      <p class="p-0"><strong>Robart</strong> and 35 other</p>
                      <p class="p-0">people reacted to your photo</p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12 pt-xsm-2 textfontsize">
                      <p class="p-0">25 Apr 2019</p>
                    </div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div class="row">
                    <div
                      class="col-md-2 col-sm-2 col-3"
                      style="padding-right: 65px"
                    >
                      <img
                        src="@/assets/images/clockimg.png"
                        width="70"
                        height="70"
                        alt="Images"
                      />
                    </div>
                    <div class="col-md-6 col-sm-5 col-9 textfontsize">
                      <p class="p-0"><strong>Robart</strong> and 35 other</p>
                      <p class="p-0">people reacted to your photo</p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12 pt-xsm-2 textfontsize">
                      <p class="p-0">25 Apr 2019</p>
                    </div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <a style="color: #000; font-size: 15px" href="#"
                        >See all in messsager</a
                      >
                    </div>
                    <div class="col-md-6 col-6 text-right">
                      <a style="color: #000; font-size: 15px" href="#"
                        >Mark all read</a
                      >
                    </div>
                  </div>
                </b-dropdown-item>
              </template>
            </base-dropdown>
          </b-nav-item>
          <b-nav-item class="attnav-item-li col-2" href="#">
            <base-dropdown
              menu-on-right
              class="nav-item profile-dropdown"
              tag="li"
              title-tag="a"
              title-classes="nav-link pr-0"
            >
              <a
                href="#"
                class="nav-link pr-0"
                @click.prevent
                slot="title-container"
                style="margin-top: -19px; margin-left: -22px"
              >
                <b-media no-body class="align-items-center drophover">
                  <span class="avatar avatar-sm rounded-circle">
                    <img
                    
                      class="drophover"
                      alt="Image placeholder"
                      :src="userData.imageUrl"
                      style="width: 56px"
                    />
                  </span>
                </b-media>
              </a>
              <template>
                <b-dropdown-header class="noti-title">
                  <h6
                    class="text-overflow m-0"
                    style="font-weight: 700; color: #000000"
                  >
                    Madison Howard
                  </h6>
                  <p class="mt-2">{{userData.email}}</p>
                  <div class="dropdown-divider"></div>
                </b-dropdown-header>
                <b-dropdown-item to="/creator-profile" style="font-size: 13px">
                  <b-icon icon="person"></b-icon>
                  <span class="ml-3">Profile</span>
                </b-dropdown-item>
                <b-dropdown-item to="/inbox" style="font-size: 13px">
                  <b-icon icon="inboxes"></b-icon>
                  <span class="ml-3">Inbox</span>
                </b-dropdown-item>
                <b-dropdown-item to="/activity" style="font-size: 13px">
                  <b-icon icon="card-list"></b-icon>
                  <span class="ml-3">Activity</span>
                </b-dropdown-item>
                <div class="dropdown-divider"></div>
                <b-dropdown-item to="/support" style="font-size: 13px">
                  <b-icon icon="gear-fill"></b-icon>
                  <span class="ml-3">Support</span>
                </b-dropdown-item>
                <b-dropdown-item style="font-size: 13px">
                <b-button @click="logout" variant="outline-info" class="mb-2"></b-button>
                  <!-- <b-icon  icon="unlock"></b-icon> -->
                  <span class="ml-3">Sign out</span>
                </b-dropdown-item>
              </template>
            </base-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
    <b-modal id="modal-1" size="xl" hide-footer hide-header>
      <b-button
        class="closeBtn"
        @click="$root.$emit('bv::hide::modal', 'modal-1', $event.target)"
      ></b-button>
      <b-tabs
        card
        content-class="mt-3"
        fill
        active-nav-item-class="text-success"
      >
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
import WriteStory from "@/components/WriteStory.vue";
import UploadVideo from "@/components/UploadVideo.vue";
import UploadFile from "@/components/UploadFile.vue";
import { mapGetters } from "vuex";
// let isUser;
export default {
  name: "main-header",
  // props: ['userData'],
  computed: {
    ...mapGetters(['getUserDetails']),
    userData () {
      return this.getUserDetails.credentials;
    }
  },
  components: {
    UploadImage,
    WriteStory,
    UploadVideo,
    UploadFile,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["modal-tabs-btn"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    // test() {
    //   user = {}
    // },
    userinfoToggle(e) {
      console.log(e);
    },
    logout() {
      this.$router.push('/auth-signup') 
      return this.$store.dispatch('logOutUser')
    },
    
  },
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

.closeBtn {
  position: absolute;
  right: -20px;
  top: -24px;
  border-radius: 50%;
  width: 51px;
  height: 51px;
  background: #1fc5b9 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
}
.dropdown-menu {
  min-width: 22rem !important;
}

.drophover:hover ul.dropdown-menu.dropdown-menu-right {
  display: block !important;
}
</style>

<style scoped>
/*  24-03-2021 start */

ul.navbar-nav.ml-auto a.nav-link {
  font-size: 10px;
  color: white;
}
.profile-dropdown .dropdown-menu-right {
  top: 84px !important;
}

.dropdown-menu-right {
  top: 74px;
}
p.contst {
  position: absolute;
}

ul.navbar-nav.attnav-container {
  justify-content: space-around;
}

a.nav-link:hover svg * {
  fill: #1fc5b9 !important;
}
li.nav-item.attnav-item-li.col-2 a.nav-link:hover {
  color: #1fc5b9 !important;
}
a.nav-link:hover p {
  color: #1fc5b9 !important;
}

ul.navbar-nav.attnav-container p:hover {
  color: #1fc5b9 !important;
}

img.drophover {
  margin-top: 7px;
}

.have-notification span.avatar.avatar-sm.rounded-circle:after {
  content: ".";
  position: absolute;
  top: -30px;
  right: 0;
  color: #1fc5b9;
  font-size: 35px;
  transform: translate(0%, 0%);
}

/*  24-03-2021 end */

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}

ul.dropdown-menu.show.dropdown-menu-right {
  min-width: max-content;
}

.dropdown-header {
  color: #000;
  font-weight: 600;
  font-size: 16px;
}

.textfontsize {
  padding-left: 25px;
  font-size: 16px;
  line-height: 12px;
}

.attnav-container {
  padding-right: 0px !important;
}
.attnav-item-li {
  padding-left: 25px !important;
}
</style>