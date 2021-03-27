<template>
         
    <b-container style="background-color: #eee" fluid class="bv-example-row att-padding-container">
    <h4 class="att-pb-35 att-pt-100 att-text-align-left att-black-color" style="padding-bottom: 35px;">All | <a style="color: #000;" href="#">Live Contests</a></h4>
    <b-row>
      <!-- Contest Card 1 -->
    <b-col sm="12" md="6" lg="4" xl="3" v-for="contest in contestsSliced" v-bind:key="contest.contestId">
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
                    {{contest.title}}
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
        <b-row>
            <b-col col lg="12">
                <h5 class="att-pb-20"><span class="att-black-color att-font-weight-900"> Entry Deadline: </span><span style="font-size: 24px;" class="att-turquoise-color">23hrs 40m 19s</span></h5>
            </b-col>
            <b-col class="att-text-align-right att-black-color" col lg="3"></b-col>
        </b-row>
        <b-row>
            <b-col style="background-color: #000; padding: 20px 20px 20px 20px">
                <div><b-button style="padding: 10px;" variant="outline-light">VIEW CONTEST</b-button></div>
            </b-col>
        </b-row>
    </b-card>
     </div>
    </b-col>
  </b-row>
    </b-container>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'contests'
        ]),
        contestsSliced () {
            return this.contests.slice(0,4)
        }
    },
}
</script>


<!-- Slider Css Start -->
<style>

    .svg-inline--fa {
        display: inline-block;
        font-size: 24px;
        height: 1em;
        overflow: visible;
        vertical-align: -0.25em;
    }

</style>
<!-- Slider Css End -->

<!-- Creator Profile Card Css -->
<style scoped>
.att-padding-container {
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
}
    .atthomesection1 {
        text-align: left;
        padding-top: 100px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .att-pt-35 {
        padding-top: 35px;
    }
    .att-pt-50 {
        padding-top: 50px;
    }
     .att-pt-100 {
        padding-top: 100px;
    }
    .att-pb-10 {
        padding-bottom: 10px;
    }

    .att-pb-20 {
        padding-bottom: 20px;
    }
    .att-pb-35 {
        padding-bottom: 35px;
    }
    .att-pb-50 {
        padding-bottom: 50px;
    }
    .att-pb-50 {
        padding-bottom: 100px;
    }
    .att-pl-0 {
        padding-left: 0;
    }
    .att-pr-0 {
        padding-right: 0;
    }
    .att-text-align-left {
        text-align: left;
    }
     .att-text-align-right {
        text-align: right;
    }
     .att-text-align-center {
        text-align: center;
    }
    .att-black-color {
        color: #000;
    }
    .att-turquoise-color {
        color: #1FC5B9;
    }
    .att-font-weight-600 {
        font-weight: 600;
    }
    .att-font-weight-700 {
        font-weight: 700;
    }
      .att-font-weight-900 {
        font-weight: 900;
    }
    p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 14px;
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
.btn-outline-turquoise {
    color: #1FC5B9;
    border-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 5px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
}
.btn-outline-turquoise:hover {
    color: #fff;
    border-color: #1FC5B9;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-width: 4px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 8px 40px;
    font-weight: bolder;
    background: #1FC5B9;
}

    video {
        /* override other styles to make responsive */
        width: 100% !important;
        height: 100%;
        object-fit: cover;
    }

    .btn:focus {
        box-shadow: none;
    }
.att-card-title {
    text-align: left;
}

    .text-14 {
        font-size: 14px;
    }

    .text-16 {
        font-size: 16px;
    }

    .text-12 {
        font-size: 12px;
    }

    .text-15 {
        font-size: 15px;
    }
    .text-footer-card {
        color: #000000;
        font-weight: bold;
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

    .btn-turquoise-outline {
        color: #fff;
        background-color: #1FC5B9;
        border-color: #1FC5B9;
        font-weight: 500;
        width: 133px;
        display: flex;
        justify-content: center;
        height: 35px;
        border-radius: 50px;
        font-size: 18px;
        padding: 3px 40px;
    }

    .btn-turquoise-outline:hover {
        color: #fff;
        display: flex;
        justify-content: center;
        background-color: #1FC5B9;
        border-color: #1FC5B9;
        width: 133px;
        height: 35px;
        font-weight: 500;
        border-radius: 50px;
        font-size: 18px;
        padding: 3px 40px;
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

    /*modal*/
    .modal-unfollow {
        font: normal normal bold 16px/19px Segoe UI;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-bottom: 20px;
    }

    .modal-description {
        text-align: center;
        font: normal normal normal 12px Proxima Nova;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }

    .modal-body {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .modal-content {
        padding: 5px;
        width: 322px;
        height: 243px
    }

    .modal-footer {
        border-top: 1px solid transparent;
        justify-content: center;
    }
</style>
<!-- Creator Profile Card Css -->

<style scoped>
    @media only screen and (max-width: 768px) {
        .top-right {
            position: absolute;
            top: -140%;
            right: -18%;
        }
    }

</style>
