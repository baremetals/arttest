<template>
  <div id="">
    <!-- Slider -->
    <div v-if="contest">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      
    >
    
      <!-- Text slides with image -->
      <!-- Slides 1 -->
      <b-carousel-slide img-src="@/assets/images/banner.jpg" >
        <h4>{{ contest.category }}</h4>
        
        <h1>{{ contest.title }}</h1>
        
        
        <b-row>
          <b-col class="att-pt-35">
            <div style="width: 250px; margin: 0 auto">
              <b-button variant="outline-light" v-b-modal.modal-1
                >ENTER CONTEST</b-button
              >
            </div>
          </b-col>
        </b-row>
        <div class="left">
          <b-list-group-item class="att-list-group-item">
            <b-avatar
              href="#bar"
              src="@/assets/images/projectxchange-logo.png"
            ></b-avatar>
            {{contest.hostName}}
          </b-list-group-item>
        </div>
        <div class="right">
          
            <a href="javascript:void(0);" class="share_btn">
            <fa-icon :icon="['fas', 'share-alt']" />
          </a>
          
        </div>
        <div></div>
      </b-carousel-slide>
    </b-carousel>
    <!-- Slider Ends -->
    <!-- Contest Profile boxes -->
    <b-navbar class="att-bg-white" toggleable="lg" type="light">
      <b-collapse id="nav-collapse" is-nav>
        <b-col cols="3"> </b-col>
        <b-col cols="6">
          <b-navbar-nav class="ml-auto ">
             
            <b-col>
              <b-nav-item href="#details" style="color: #000000; font-weight: 800">
                Details
              </b-nav-item>
            </b-col>
            <b-col>
              <b-nav-item href="#rules" style="color: #00000; font-weight: 800">
                Rules
              </b-nav-item>
            </b-col>
            <b-col>
              <b-nav-item href="#prizes" style="color: #000000; font-weight: 800">
                Prizes
              </b-nav-item>
            </b-col>
            <b-col>                
              <b-nav-item href="#judges" style="color: #000000; font-weight: 800">
                Judges
              </b-nav-item>
            </b-col>
            <b-col>                
              <b-nav-item href="#subs" style="color: #000000; font-weight: 800">
                Submissions
              </b-nav-item>
            </b-col>          
          </b-navbar-nav>
        </b-col>
      </b-collapse>
    </b-navbar>
    <b-container id="details" fluid class="bv-example-row att-padding-container att-pt-100">
      <b-row>
        <b-card-group deck>
          <b-card>
            <b-img class="bgimg" src="@/assets/images/clockimg.png"></b-img>
            <br />
            <b-card-text
              style="
                font-size: 30px;
                font-weight: bolder;
                text-align: center;
                color: #1fc5b9;
              "
            >
            {{ contest.entryEndDate | moment("h:mm:ss a")}}
              <!-- {{ contest.entryEndDate | moment("from", "Jan. 11th, 1985") }} -->
            </b-card-text>
            <b-card-text
              style="
                font-size: 30px;
                font-weight: bolder;
                text-align: center;
                color: #1fc5b9;
              "
            >
            
              23:44:19
            </b-card-text>
            <b-card-text style="text-align: center; font-weight: 800">
              remaining
            </b-card-text>
          </b-card>
          <b-card>
            <b-img
              class="bgimg"
              src="@/assets/images/image-gallery.png"
            ></b-img>
            <br />
            <b-card-text
              style="
                font-size: 30px;
                font-weight: bolder;
                text-align: center;
                color: #1fc5b9;
              "
            >
              {{ contest.totalEntryCount }}
            </b-card-text>
            <b-card-text
              style="text-align: center; font-size: 20px; font-weight: 800"
            >
              Submissions
            </b-card-text>
            <b-card-text style="text-align: center; font-weight: 800">
              vote from
            </b-card-text>
            <b-card-text style="text-align: center; font-weight: 800">
              {{ contest.entryEndDate | moment("Do MMMM YYYY") }}
            </b-card-text>
          </b-card>
          <b-card>
            <b-img class="bgimg" src="@/assets/images/like.png"></b-img>
            <br />
            <b-card-text
              style="text-align: center; font-size: 20px; font-weight: 800"
            >
              Judged based on creativity, organality and accordance to the theme
            </b-card-text>
          </b-card>
          <b-card>
            <b-img class="bgimg" src="@/assets/images/credit-card.png"></b-img>
            <br />
            <b-card-text
              style="
                text-align: center;
                font-size: 30px;
                font-weight: 800;
                color: #1fc5b9;
              "
            >
              {{contest.entryFee ? contest.entryFee : 'Free'  }}
            </b-card-text>
            <b-card-text style="text-align: center; font-weight: 800">
              Entry fee<br />
              Maximum number of submissions for entry fee:{{ contest.maxNumSubsPerFee }}<br />
              Fee per additional entry: £{{ contest.feePerAdditionalEntry}}<br />
              Total Number of submissions : {{ contest.totalNumberOfSubmissionsPerUser }}
            </b-card-text>
            <br />
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <br />
    <b-container fluid class="bv-example-row att-padding-container">
      <div style="background: transparent">
        <b-row class="att-pt-50 att-pb-35">
          <b-col sm="12" md="6" lg="6" xl="6">
            <b-container fluid class="bv-example-row att-p-50">
              <h2>Contest Description</h2>
              <p style="font-size: 18px">
                {{ contest.description}}
              </p>
            </b-container>
          </b-col>
          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="example hoverable">
              <b-img
                style="width: 100%"
                src="@/assets/images/contestimg1.png"
              ></b-img>
            </div>
          </b-col>
        </b-row>
        <hr solid class="solid" />
      </div>
    </b-container>
    <br />
    <b-container id="rules" fluid class="bv-example-row att-padding-container att-pt-100">
      <div>
        <b-row>
          <b-col sm="12" md="6" lg="6" xl="6">
            <div>
              <b-img
                style="width: 100%"
                src="@/assets/images/contestimg2.png"
              ></b-img>
            </div>
          </b-col>
          <b-col sm="12" md="6" lg="6" xl="6">
            <b-container>
              <h2>Submission Rules</h2>
              <br />
              <p style="font-size: 18px">{{ contest.rules }}</p>
            </b-container>
          </b-col>
        </b-row>
      </div>
      <hr solid class="solid" />
    </b-container>
    <b-container id="prizes" fluid class="bv-example-row att-padding-container att-pt-100">
      <div>
        <div class="att-text-align-center att-pb-35">
          <h3>Contest Prizes</h3>
        </div>
        <b-row>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <b-img
                class="bgimg"
                src="@/assets/images/gold-medal1.png"
              ></b-img>
              <h2 style="text-align: center">1st Place</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                {{contest.firstPositionPrizeTitle}}
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.firstPositionPrizeInfo }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <br />
              <b-img
                class="bgimg"
                src="@/assets/images/gold-medal1.png"
              ></b-img>
              <h2 style="text-align: center">2nd Place</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                {{ contest.secondPositionPrizeTitle }}
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.secondPositionPrizeInfo }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <br />
              <b-img
                class="bgimg"
                src="@/assets/images/gold-medal1.png"
              ></b-img>
              <h2 style="text-align: center">3rd Place</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                {{ contest.thirdPositionPrizeTitle }}
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.thirdPositionPrizeInfo }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container fluid class="bv-example-row att-padding-container att-pt-100">
      <hr solid class="solid" />
    </b-container>
    <b-container id="judges" fluid class="bv-example-row att-padding-container att-pt-100">
      <div>
        <div class="att-text-align-center att-pb-35"><h3>Judges</h3></div>
        <b-row>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <h2 style="text-align: center">{{ contest.judgeOneName }}</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                Title, company
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.judgeOneDescription }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <h2 style="text-align: center">{{ contest.judgeTwoName }}</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                Title, company
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.judgeTwoDescription }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
          <b-col>
            <div style="text-align: center">
              <b-avatar
                style="border: 10px solid #fff"
                class="att-mb-25"
                src="https://placekitten.com/300/300"
                size="14rem"
              ></b-avatar>
              <h2 style="text-align: center">{{ contest.judgeThreeName }}</h2>
              <h4 class="bgimg" style="color: #28c7bb; text-align: center">
                Title, company
              </h4>
              <p
                class="bgimg"
                style="text-align: center; font-size: 16px; max-width: 50%"
              >
                {{ contest.judgeThreeDescription }}
              </p>
              <br />
              <br />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    </div>
  </div>
</template>

<script>
import { formatDistance } from 'date-fns'
const moment = require('moment')
export default {
    name: "ContestDetails-Page",
    computed: {
    contest() {
        return this.$store.getters.contestFromId(this.$route.params.contestId);
    },
    data() {
        return {
            moment:moment
        }
    }
  },
  filters: {
     relativeDate(value) {
      return formatDistance(value, new Date())
    } 
  },
}
</script>

<style scoped>
.navvy {
    position: fixed;
}
</style>
