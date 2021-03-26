<template>
  <card class="shadow">
    <h5>Followers</h5>
    <b-list-groups>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center w-50 float-left"
      >
        <b-row align-v="center">
          <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
            <a href="javascript:;" class="avatar avatar-xl rounded-circle">
              <img
                alt="Image placeholder"
                src="@/assets/images/image/Ellipse 48.png"
              />
            </a>
          </b-col>
          <b-col sm="5" md="5" lg="5" xl="5">
            <h6 class="mb-0">OO_Seth</h6>
            <p class="text-sm text-muted mb-0" style="font-size: 12px">
              @OO_Seth
            </p>
          </b-col>
          <b-col xl="5" lg="5" md="5" sm="5">
            <b-button
              variant="outline-turquoise-rounded"
              style="padding: 5px 10px; min-width: 100px"
              >Follow</b-button
            >
            <b-button
              variant="outline-turquoise-rounded-solid"
              style="padding: 5px 10px; min-width: 100px"
              >Following</b-button
            >
          </b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center w-50 float-left"
      >
        <b-row align-v="center">
          <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
            <a href="javascript:;" class="avatar avatar-xl rounded-circle">
              <img
                alt="Image placeholder"
                src="@/assets/images/image/Ellipse 48.png"
              />
            </a>
          </b-col>
          <b-col sm="5" md="5" lg="5" xl="5">
            <h6 class="mb-0">OO_Seth</h6>
            <p class="text-sm text-muted mb-0" style="font-size: 12px">
              @OO_Seth
            </p>
          </b-col>
          <b-col xl="5" lg="5" md="5" sm="5">
            <b-button
              variant="outline-turquoise-rounded"
              style="padding: 5px 10px; min-width: 100px"
              >Follow</b-button
            >
            <b-button
              variant="outline-turquoise-rounded-solid"
              style="padding: 5px 10px; min-width: 100px"
              >Following</b-button
            >
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-groups>

    <b-card-footer
      style="background: none; border: none"
      class="text-center att-font-700"
    >
      <a href="" style="color: #1fc5b9; text-decoration: underline"
        >view more</a
      >
    </b-card-footer>
    <br />
  </card>
</template>

<script>
export default {
    name: 'FollowersTabCard'
};
</script>

<style>
</style>