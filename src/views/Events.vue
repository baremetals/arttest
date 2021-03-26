<template>
  <div>
    
    <b-container
    style="background-color: #eee"
    fluid
    class="bv-example-row att-padding-container"
  ><div>
      <b-jumbotron header="" lead="Bootstrap v4 Components for Vue.js 2">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid-grow alt="Responsive image"></b-img>
      </b-jumbotron>
    </div>
    <h4
      class="att-pb-35 att-pt-100 att-text-align-left att-black-color"
      style="padding-bottom: 35px; padding-top: 0px"
    >
      Current | <a style="color: #000;" href="#">Events</a>
    </h4>
    <div class="overflow-auto">
      <b-row>
      <b-col
      sm="12"
      md="6"
      lg="4"
      xl="3"
      v-for="contest in contests"
      v-bind:key="contest.id"
    >
      <div class="att-pb-20">
      <EventsCard 
      id="event-card" 
      :items="contests"
      :contest="contest"
      :per-page="perPage"
      :current-page="currentPage" 
      />
      </div>
    </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="event-card"
    ></b-pagination>
    </div>
    
  </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { contests } from "@/utils/data";
import EventsCard from "@/components/EventsCard.vue"
export default {
  name: "Events-Page",
  components: {
    EventsCard
  },
  data() {
    return {
      perPage: 1,
      currentPage: 1,
      items: ["contests"],
    };
  },
  computed: {
    ...mapGetters(["contests"]),
    rows() {
        return this.items.length
      }
  },
};
</script>



