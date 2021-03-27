<template>
  <card class="shadow-lg">
    <h5 style="font-size: 18px; margin-left: 12px">Open calls</h5>
    <b-list-group>
      <b-list-group-item
      v-for="contest in contestsSliced" v-bind:key="contest.contestId"
        class="d-flex justify-content-between align-items-center pl-0"
      >
        <b-col cols="7" >
          <p class="text-sm .category-text mb-0" style="font-size: 12px; color: #1FC5B9">
            {{contest.category}}
          </p>
          <h6 class="mb-0" style="font-size: 12px">{{contest.title}}</h6>
        </b-col>
        <b-col cols="5">
          <b-button
          :to="{name: 'ContestDetails-Page', params: { contestId: contest.contestId}, title: contest.title }"
            variant="outline-success"
            class="btn-outline-customize"
            pill
            style="padding: 5px 20px"
            >View</b-button
          >
        </b-col>
      </b-list-group-item>
    </b-list-group>
  </card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'OpenCalls',
  computed: {
    ...mapGetters([
      'contests'
    ]),
    contestsSliced () {
      return this.contests.slice(0,4)
    }
  },
};
</script>

<style scoped>
.category-text {
  color: #e14561;
}
</style>