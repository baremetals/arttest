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
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  mounted() {
    // if (this.$store.getters.authenticated) {
      
    //   this.$store.dispatch('getTimelineData');
    // }
    this.$store.dispatch('getAllEvents');
    this.$store.dispatch('getAllBlogPosts');
    this.$store.dispatch('getAllContests'); 
  },
}
</script>

<style >
  
</style>