<template>
  <card class="shadow-lg mt-4">
    <b-container style="padding-left: 0px">
      <b-row style="padding-left: 0px" align-v="center">
        <b-col xl="1" lg="1" md="1" sm="1">
          <a href="javascript:;" class="avatar avatar-xl rounded-circle">
            <img
              alt="Image placeholder"
              :src="post.authorImg || 'https://firebasestorage.googleapis.com/v0/b/arttest-60d83.appspot.com/o/logo.svg?alt=media&token=4aa3ca2a-470c-4f1c-8fd2-296861a66243'"
            />
          </a>
        </b-col>
        <b-col xl="9" lg="9" md="9" sm="9">
          <h6 class="mb-0">{{post.author}}</h6>
          <p class="text-sm text-muted mb-0">{{post.createdAt | moment("from", "now")}}</p>
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
      <b-row class="">
        <b-img
          src="@/assets/images/image/Path 594.png"
          class="mt-3"
          style="height: 21px"
        ></b-img>
        <p
          class="p-3"
          style="margin-bottom: 0px; color: #1fc5b9; font-weight: 700"
        >
          Article
        </p>
      </b-row>
      <b-row>
        <p class="h5">
          {{post.title}}
        </p>
        <p>
          {{post.shortDescription.slice(0,200)}}....
        </p>
      </b-row>
    </b-container>
    <b-container>
      <b-embed
      v-if="post.embededVideoLink"
        type="iframe"
        aspect="16by9"
        controls
        poster=""
        :src="post.embededVideoLink"
        allowfullscreen
      >
        <source
          :src="post.embededVideoLink"
          type="video/webm"
        />
        <source
          :src="post.embededVideoLink"
          type="video/mp4"
        />
      </b-embed>
      <b-img v-else-if="!post.embededVideoLink"  :src="post.bannerUrl" fluid alt="Responsive image"></b-img>
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
            You and {{post.likeCount}} peoples like this
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
  name: 'BlogCard',
  props: ['post']
};
</script>

<style>
</style>