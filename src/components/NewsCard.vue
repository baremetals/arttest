<template>
  <div>
    <b-container
      style="background-color: #000"
      fluid
      class="bv-example-row att-padding-container att-pt-50 att-pb-50"
    >
      <b-row>
        <b-col>
          <h3
            class="att-pb-35 att-pt-50 att-text-align-left att-white-color"
            style="padding-bottom: 35px"
          >
            <span class="att-font-weight-900">Latest News &amp; Events </span>
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <!-- Latest News and Events Card 1 -->
        <b-col sm="12" md="6" lg="4" xl="3" v-for="n in news" v-bind:key="n.id"
          ><div class="att-pb-20">
            <b-card
              img-src="@/assets/images/arttest-lastest-news-placeholder-image.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 100%; background: transparent; box-shadow: none"
              class="mb-2 att-card-title"
            >
              <b-row>
                <b-col col lg="9">
                  <b-card-title class="att-font-weight-900 att-white-color">
                    {{n.title}}
                  </b-card-title>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card-text class="att-white-color att-pb-20">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum
                    sociis....
                  </b-card-text>
                </b-col>
              </b-row>

              <!-- View All Follow Button Start -->
              <b-row>
                <b-col>
                  <div>
                    <b-button
                      style="
                        margin-top: 5px;
                        margin-bottom: 20px;
                        padding: 15px;
                        max-width: 300px;
                      "
                      variant="outline-light"
                      >FIND OUT MORE</b-button
                    >
                  </div>
                </b-col>
              </b-row>
              <!-- View All Follow Button End -->
            </b-card>
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { news } from "@/utils/data";
export default {
  data() {
    return {
      news,
    };
  },
};
</script>

<style>
</style>