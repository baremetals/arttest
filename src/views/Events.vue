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
      <b-row id="event-card">
        <b-col sm="12" md="6" lg="4" xl="3" :key="index" v-for="(event, index) in paginatedItems">
          <div class="att-pb-20">
            <EventsCard
              :event="event"
            />
          </div>
        </b-col>
      </b-row>  
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>
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
      paginatedItems: [],
      currentPage: 1,
      perPage: 4
    };
  },
  computed: {
    ...mapGetters({items: 'events'}),
    totalRows () {
      return this.items.length
    }
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    }
  },
  mounted() {
    this.paginate(this.perPage, 0);
  }
};
</script>



