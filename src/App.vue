<template>
  <div>
    <Header /> 
      <router-view></router-view>   
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
// import Menu from '@/layouts/Menu.vue'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Menu,
    Footer,
  }
}
</script>

<style >
  
</style>
