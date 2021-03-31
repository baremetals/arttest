<template>
    <div id="app">
     <Header  v-if="!loggedInUser"/> 
    <Menu 
    v-if="loggedInUser"
    />
      <router-view></router-view>   
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Menu from '@/layouts/Menu.vue'
import Footer from '@/layouts/Footer.vue'
import { mapGetters } from "vuex";
// let userData; 
// import { db } from '@/db'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
  },
  computed: {
    ...mapGetters(['loggedInUser', 'userData']),
    // userData () {
    //   return this.userData.credentials;
    // }
  },
  mounted() {
    // const dbTimelines = db.collection(`/users/${this.userData.userId}/timeline`)
    // this.$store.dispatch('getTimeline', dbTimelines);
    if (this.loggedInUser) { 
      
      this.$store.dispatch('getTimeline');
    }
    this.$store.dispatch('getAllEvents');
    this.$store.dispatch('getAllBlogPosts');
    this.$store.dispatch('getAllContests'); 
  },
}
</script>

<style >
  
</style>