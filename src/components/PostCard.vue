<template>
  <div>
    
            <b-card
              img-src="@/assets/images/arttest-lastest-news-placeholder-image.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 100%; background: transparent; box-shadow: none"
              class="mb-2 att-card-title"
            >
              <b-row>
                <b-col col lg="9">
                  <b-card-title class="att-font-weight-900 att-white-color">
                   {{ post.title }}
                  </b-card-title>
                  <div class="att-white-color att-pb-10">{{ post.author}}</div>
                </b-col>
                <b-col class="att-text-align-right att-white-color" col lg="3">

            <div><span style="padding-right: 5px">{{ post.likeCount}}</span><a href="javascript:void(0);" >
                    <fa-icon class="heart_icon_white" :icon="['far', 'heart']"/>
                    <fa-icon class="att-heart-icon-filled" :icon="['fas', 'heart']"/>
                </a></div>
            </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card-text class="att-white-color att-pb-20">
                     {{ post.shortDescription }}
                  </b-card-text>
                </b-col>
              </b-row>

              <!-- View All Follow Button Start -->
              <b-row>
                <b-col>
                  <div>
                    <b-button
                    to="/"
                      style="
                        margin-top: 5px;
                        margin-bottom: 20px;
                        padding: 15px;
                        max-width: 300px;
                      "
                      variant="outline-light"
                      >FIND OUT MORE</b-button
                    >
                  </div>
                </b-col>
              </b-row>
              <!-- View All Follow Button End -->
            </b-card>
          
  </div>
</template>

<script>
export default {
    name: 'PostCard',
    props: ['post'],
};
</script>

<style>
</style>