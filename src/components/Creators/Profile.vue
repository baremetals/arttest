<template>
  <card  v-if="user" class="shadow mt-4 att-pb-bottom">
    <b-container class="mt-4"
      ><h3 class="fix-h3">@{{user.username}}</h3></b-container
    >
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <b-row align-v="center">
          <b-col md="auto" sm="auto" lg="auto" cols="auto">
            <b-icon icon="map-fill"></b-icon>
          </b-col>
          <b-col class="ml--2" style="margin-left: -15px">
            <h6 class="mb-0">{{user.location}}</h6>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <b-row align-v="center">
          <b-col md="auto" sm="auto" lg="auto" cols="auto">
            <b-icon icon="globe"></b-icon>
          </b-col>
          <b-col class="ml--2" style="margin-left: -15px">
            <h6 class="mb-0">{{user.website}}</h6>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <b-row align-v="center">
          <b-col md="auto" sm="auto" lg="auto" cols="auto">
            <b-icon icon="calendar2-date"></b-icon>
          </b-col>
          <b-col class="ml--2" style="margin-left: -15px">
            <h6 class="mb-0">Joined {{user.createdAt | moment('MMMM YYYY')}}</h6>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <b-row align-v="center">
          <b-col class="ml--2">
            <h6 class="mb-0">{{user.specialSkill}}</h6>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <b-row align-v="center">
          <b-col class="ml--2">
            <p >{{user.bio}}</p>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-list-group-item>
    </b-list-group>
  </card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Profile',
  computed: {
    ...mapGetters([
      'userData'
    ]),
    user() {
       return this.userData;
    } 
  },
};
</script>

<style>
</style>