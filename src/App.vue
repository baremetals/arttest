<template>
  <div>
     <Header v-if="!LOGIN_USER" /> 
    <Menu v-if="LOGIN_USER"/>
      <router-view></router-view>   
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Menu from '@/layouts/Menu.vue'
import Footer from '@/layouts/Footer.vue'
import { GET_ALL_BLOG_POST, LOGIN_USER } from '@/store/MutationTypes'
import { mapGetters } from "vuex";
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
  },
  computed: {
    ...mapGetters([LOGIN_USER]),
  },
  mounted() {
    this.$store.dispatch(GET_ALL_BLOG_POST);
    this.$store.dispatch('getAllContests');
  },
}
</script>

<style >
  
</style>
