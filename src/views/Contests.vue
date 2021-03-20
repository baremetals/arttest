<template>
    <div>
      <b-container style="background-color: #eee" fluid class="bv-example-row att-padding-container">
    <h4 class="att-pb-35 att-pt-100 att-text-align-left att-black-color" style="padding-bottom: 35px;">All | <a style="color: #000;" href="#">Live Contests</a></h4>
    <b-row>
      <!-- Contest Card 1 -->
    <b-col sm="12" md="6" lg="4" xl="3" v-for="contest in contests" :key="contest.contestId">
        <div class="att-pb-20">
       <ForContestPage :contest="contest"/>
     </div>
    </b-col>
  </b-row>
    </b-container>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import ForContestPage from '@/components/ForContestPage.vue'
  export default {
    name: 'Contest-Page',
    computed: {
    ...mapGetters([
      'contests'
    ])
  },
  // created() {
  //   return this.$store.dispatch('getAllContests');
  // },
    components: {
      ForContestPage
    }

  }
</script>
