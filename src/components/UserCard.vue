<template>
  <div>
    <b-container style="background-color: #eee" fluid class="bv-example-row att-padding-container">
 <b-row> 
      <!-- Featured Creators Card 1 -->
    <b-col sm="12" md="6" lg="4" xl="3" v-for="user in users" :key="user.id">
        <div class="att-pb-20">
  <b-card
    img-src="@/assets/images/arttest-placeholder-image.jpg"
    img-alt="Image"
    img-top
    tag="article" 
    style="max-width: 100%;"
    class="mb-2 att-card-title"
  >
  <b-row>
      <b-col>
        <b-avatar style="margin-top: -100px; border: 5px solid #fff;" src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      </b-col>
  </b-row>
  <b-row>
  <b-col col lg="9">
  <b-card-title class="att-font-weight-900 att-black-color">
      John Doe
  </b-card-title>
  <div class="att-black-color att-pb-10">@johnnydoe</div>
  </b-col>
   <b-col class="att-text-align-right att-black-color" col lg="3">

     <div><span style="padding-right: 5px">1</span><a href="javascript:void(0);" class="heart_icon">
                    <fa-icon :icon="['far', 'heart']"/>
                </a></div>
  </b-col>
  </b-row>
  <b-row>
      <b-col>
<b-card-text class="att-black-color att-pb-20">
      A virtual Marathon / Cyclothon is a challenge you give yourself to reach a designated goal...
</b-card-text>
      </b-col>
  </b-row>

    <!-- View All Follow Button Start -->
       <b-row>
      <b-col>
       <div><b-button style="margin-top: 5px; margin-bottom: 20px; padding: 15px; max-width: 300px;" variant="outline-black">FOLLOW</b-button></div>   
      </b-col>
  </b-row>
  <!-- View All Follow Button End -->

  </b-card>
</div></b-col>

  </b-row>

  </b-container>
  </div>
</template>

<script>
import { users } from '@/utils/data'
export default {
    data () {
        return {
            users
        }
    }
}
</script>

<style scoped>
.atthomesection1 {
        text-align: left;
        padding-top: 100px;
        padding-left: 50px;
        padding-right: 50px;
}
.card-img, .card-img-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
    height: auto;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem 1rem 0 1rem;

}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid rgba(0,0,0,.125);
    box-shadow:3px 3px 10px #ddd;
    border-radius: 0;  
}

video {
        /* override other styles to make responsive */
        width: 100% !important;
        height: 100%;
        object-fit: cover;
}



    .btn-turquoise {
        background-color: #ffffff;
        border-radius: 50px;
        border: 3px solid #1FC5B9;
        color: #1FC5B9;
        font-size: 18px;
        font-weight: bold;
        padding: 3px 40px;
    }

    .btn-turquoise:hover {
        background-color: #1FC5B9;
        border-radius: 50px;
        border: 3px solid #1FC5B9;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        padding: 3px 40px;
    }

    .btn-turquoise-follow {
        background-color: #1FC5B9;
        border-radius: 50px;
        border: 3px solid #1FC5B9;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        padding: 3px 40px;
    }

    .btn-turquoise-follow:hover {
        border-radius: 50px;
        border-color: #CA2055;
        background-color: #CA2055;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        padding: 3px 40px;
        text-decoration: none;
    }

    .btn-turquoise-follow:hover span {
        display: none;
    }

    .btn-turquoise-follow:hover:before {
        content: "Unfollow";
    }

    .btn-share {
        background-color: #ffffff;
        border-radius: 50px;
        color: #000000;
        border: 1px solid #000000;
        width: 30px;
        height: 30px;
        padding: 0;
    }

    .btn-share:hover {
        background-color: #1FC5B9;
        border-radius: 50px;
        color: #ffffff;
        border: 1px solid #1FC5B9;
        opacity: 1;
    }

    .btn-like {
        color: #1FC5B9;
    }

    .btn-like:hover {
        color: #1FC5B9;
    }


    .btn-simple-outline {
        color: #000000;
        display: flex;
        justify-content: center;
        background-color: #EBEEF0;
        border-color: #EBEEF0;
        width: 133px;
        height: 35px;
        font-weight: 500;
        border-radius: 50px;
        font-size: 18px;
        padding: 3px 40px;
    }

    .fill-heart {
        display: none;
    }

    
</style>
