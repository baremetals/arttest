<template>
    <div id="app">
     <Header  v-if="!loggedInUser"/> 
    <Menu 
    :userData="userData"
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
    ...mapGetters(['loggedInUser', 'userData']),
  },
  mounted() {
    // if (this.$store.getters.authenticated) {
      
    //   // this.$store.dispatch('getUserData');
    // }
    // this.$store.dispatch('getAllBlogPosts');
    this.$store.dispatch('getAllContests');
    this.$store.dispatch('getUsernames'); 
  },
}
</script>

<style >
  
</style>