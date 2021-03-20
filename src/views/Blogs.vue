<template>
  <div >
     <b-container
      style="background-color: #000"
      fluid
      class="bv-example-row att-padding-container att-pt-100 att-pb-50"
    >
      <b-row>
        <b-col>
          <h3
            class="att-pb-35 att-pt-50 att-text-align-left att-white-color"
            style="padding-bottom: 35px"
          >
          
            <hr style="border-top: 3px solid #fff">
          
            <span style="font-size: 52px" class="att-font-weight-900">News & Insights</span>
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <!-- Latest News and Events Card 1 -->
        <b-col sm="12" md="6" lg="4" xl="3" v-for="post in GET_BLOGS" :key="post.blogpostsId"
          ><div class="att-pb-20">
            <Blogs :post="post"/>
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import { GET_ALL_BLOG_POST } from '@/store/MutationTypes'
import { mapGetters } from 'vuex';
import Blogs from '@/components/PostCard.vue'
export default {
  name: 'Blogs-Page',
  computed: {
    ...mapGetters([
      'GET_BLOGS'
    ])
  },
  // mounted() {
  //   this.$store.dispatch(GET_ALL_BLOG_POST);
  // },
  components: {
    Blogs
  },
}
</script>


<style>

</style>