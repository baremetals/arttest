<template>
    <div>
  <!-- Slider -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- Slides 1 -->
      <b-carousel-slide v-for="slide in slides" v-bind:key="slide.id"
      :img-src="slide.image" >
        <h4>{{ slide.title }}</h4>
        <h1>
          {{ slide.mainHeader }}
        </h1>
        <div class="top-right">
          <a href="javascript:void(0);" class="share_btn"
            ><fa-icon :icon="['fas', 'share-alt']"
          /></a>
        </div>
        <div class="right">
          <b-button variant="outline-light">VIEW CONTEST</b-button>
        </div>
        <div class="left">
          <b-list-group-item class="att-list-group-item"
            ><b-avatar
              href="#bar"
              :src="slide.hostImg"
            ></b-avatar>
            {{ slide.hostName }}</b-list-group-item
          >
        </div>
        
      </b-carousel-slide>

    </b-carousel>

    </div>
</template>

<script>
import { slides } from '@/utils/slider'
export default {
  
  data() {
    return {
      slide: 0,
      sliding: null,
      slides
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<!-- Slider Css Start -->
<style>

    .carousel-control-next, .carousel-control-prev {
        width: 10%;
        color: #000;
    }

    .share_btn {
        border-radius: 50%;
        border: 3px solid #fff;
        padding: 20px;
        width: 100px;
        height: 20px;
        color: #fff;
    }

    .share_btn:hover {
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 20px;
        width: 100px;
        height: 20px;
        color: #000;
        background: #fff;
    }
    .top-right {
        position: absolute;
        top: -250%;
        right: -18%;
    }
    .right {
        position: absolute;
        right: -125px;
        bottom: 20px;
    }
    .left {
        position: absolute;
        left: -160px;
        bottom: 20px;
    }
    .b-carousel-slide {
        margin-bottom: 50px;
    }
    .carousel-caption {
        padding-bottom: 50px;
    }
    .carousel-indicators li {
        height: 4px;
        margin-bottom: 20px;
    }
    .att-list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem !important;
        background: transparent !important;
        border: none !important;
        text-shadow: none !important;
    }
    /* .svg-inline--fa {
        display: inline-block;
        font-size: 24px;
        height: 1em;
        overflow: visible;
        vertical-align: -0.25em;
    } */
</style>