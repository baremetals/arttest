<template>
  <div>
    <Slider />

    <ContestCard />

  <b-row>
      <b-col>
       <div style="text-align: center;"><b-button style="margin-top: 50px; margin-bottom: 70px; padding: 15px; max-width: 300px;" variant="outline-black">VIEW All CONTESTS</b-button></div>   
      </b-col>
  </b-row>
  <UserCard />
  
    <b-row>
      <b-col>
       <div style="text-align: center;"><b-button style="margin-top: 50px; margin-bottom: 70px; padding: 15px; max-width: 300px;" variant="outline-black">VIEW All CREATORS</b-button></div>   
      </b-col>
  </b-row>

 <NewsCard />

  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import ContestCard from '@/components/ContestCard.vue'
import NewsCard from '@/components/NewsCard.vue'
import UserCard from '@/components/UserCard.vue'
export default {
  name: 'Home',
  components: {
    Slider,
    ContestCard,
    NewsCard,
    UserCard 
  },
  computed: {
    // ...mapGetters([
    //   'contestsSliced'
    // ])
  },
}
</script>

