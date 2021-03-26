<template>
  <card class="shadow-lg mt-4">
    <b-container style="padding-left: 0px">
      <b-row style="padding-left: 0px" align-v="center">
        <b-col xl="1" lg="1" md="1" sm="1">
          <a href="javascript:;" class="avatar avatar-xl rounded-circle">
            <img
              alt="Image placeholder"
              src="@/assets/images/image/Ellipse -82.png"
            />
          </a>
        </b-col>
        <b-col xl="9" lg="9" md="9" sm="9">
          <h6 class="mb-0">OO_Seth</h6>
          <p class="text-sm text-muted mb-0">5 min ago</p>
        </b-col>
        <b-col
          xl="2"
          lg="2"
          md="2"
          sm="2"
          style="font-size: 35px; text-align: right"
        >
          <b-icon
            class="hover-icon"
            icon="three-dots"
            style="font-size: 35px"
          ></b-icon>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="att-mt-35">
        <b-col
          xl="12"
          lg="12"
          md="12"
          sm="12"
          style="text-align: left; padding-left: 0px"
        >
          <b-icon icon="instagram" scale="1.5"></b-icon
          ><span class="att-font-700 att-pl-10 att-pb-20"> ContestCard</span>
        </b-col>
      </b-row>
      <b-row>
        <p class="h5">
          Project X Change presents, A Visual Poem In Collaboration with, The
          Stephen Lawrence Day Foundation
        </p>
        <p>
          In collaboration with Pineapple School for performancing Arts, We will
          encourage young writers of underrepresented backgrounds in the London
          area, to write a piece that speaks to the important of equality for
          all
        </p>
      </b-row>
    </b-container>
    <b-container>
      <b-embed
        type="video"
        aspect="16by9"
        controls
        poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg"
      >
        <source
          src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
          type="video/webm"
        />
        <source
          src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
          type="video/mp4"
        />
      </b-embed>
    </b-container>
    <br />
    <b-container>
      <b-row align-v="center">
        <b-col xl="1" lg="1" md="1" sm="1" style="font-size: 20px">
          <b-icon
            icon="heart-fill"
            style="color: red; font-size: 20px"
          ></b-icon>
          <b-icon icon="heart" style="color: #1fc5b9; font-size: 20px"></b-icon>
        </b-col>
        <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
          <p
            class="text-sm text-muted mb-2"
            style="font-size: 13px; padding: 0px"
          >
            You and 207 peoples live this
          </p>
        </b-col>
        <b-col lg="1" md="" sm="" cols="" style="font-size: 20px">
          <b-icon
            class="mb-2 hover-icon"
            icon="chat-square-dots"
            style="font-size: 22px"
          ></b-icon>
        </b-col>
        <b-col lg="1" md="" sm="" cols="" style="font-size: 18px">
          <b-icon
            class="mb-2 hover-icon"
            icon="share-fill"
            style="font-size: 18px"
          ></b-icon>
        </b-col>
      </b-row>
    </b-container>
  </card>
</template>

<script>
export default {
  name: 'ContestCard'
};
</script>

<style>
</style>