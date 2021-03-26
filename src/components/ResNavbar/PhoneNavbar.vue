<template>
   <div>
      <b-container>
         <b-row style="height:66px; background-color:black; padding-top:17px">
            <b-col cols="2" style="margin-top:3px">
               <img src="@/assets/images/attest-logo-white.svg" />
            </b-col>
            <b-col cols="2" v-on:click="activeNav(DataList[0])">
               <svg xmlns="http://www.w3.org/2000/svg" width="28.093" height="27.775" viewBox="0 0 28.093 27.775" v-bind:class="{selectedNav : DataList[0].isSelected, notselectedNav : !DataList[0].isSelected}">
                  <path id="home" d="M27.331,11.994l0,0L16.081.744a2.538,2.538,0,0,0-3.59,0L1.248,11.986,1.237,12a2.537,2.537,0,0,0,1.689,4.325c.026,0,.052,0,.078,0h.448V24.6a2.975,2.975,0,0,0,2.971,2.971h4.4a.808.808,0,0,0,.808-.808v-6.49a1.357,1.357,0,0,1,1.356-1.355h2.6a1.357,1.357,0,0,1,1.355,1.355v6.49a.808.808,0,0,0,.808.808h4.4A2.974,2.974,0,0,0,25.119,24.6V16.326h.416a2.539,2.539,0,0,0,1.8-4.333ZM26.187,14.44a.917.917,0,0,1-.653.271H24.311a.808.808,0,0,0-.808.808V24.6a1.357,1.357,0,0,1-1.355,1.355H18.555V20.277a2.975,2.975,0,0,0-2.971-2.971h-2.6a2.975,2.975,0,0,0-2.971,2.971v5.682H6.424A1.357,1.357,0,0,1,5.068,24.6V15.519a.808.808,0,0,0-.808-.808h-1.2l-.038,0a.922.922,0,0,1-.636-1.574h0L13.633,1.886a.922.922,0,0,1,1.3,0L26.184,13.131l.005.005A.925.925,0,0,1,26.187,14.44Zm0,0" transform="translate(-0.24 0.1)" fill="#fff" stroke="#fff" stroke-width="0.2" v-bind:class="{selectedNav : DataList[0].isSelected, notselectedNav : !DataList[0].isSelected}"></path>
               </svg>
               <p style="color:white; font-size:7px;margin-left: 6px;" v-bind:class="{selectedNav : DataList[0].isSelected, notselectedNav : !DataList[0].isSelected}">home</p>
            </b-col>
            <b-col cols="2" v-on:click="activeNav(DataList[1])">
               <svg xmlns="http://www.w3.org/2000/svg" width="24.075" height="24.075" viewBox="0 0 24.075 24.075" v-bind:class="{selectedNav : DataList[1].isSelected, notselectedNav : !DataList[1].isSelected}">
                  <g id="Group_940" data-name="Group 940" transform="translate(-917 -17)" v-bind:class="{selectedNav : DataList[1].isSelected, notselectedNav : !DataList[1].isSelected}">
                     <path id="Path_547" data-name="Path 547" d="M19.776,0H4.3A4.3,4.3,0,0,0,0,4.3V19.776a4.3,4.3,0,0,0,4.3,4.3H19.776a4.3,4.3,0,0,0,4.3-4.3V4.3A4.3,4.3,0,0,0,19.776,0Zm2.579,19.776a2.579,2.579,0,0,1-2.579,2.579H4.3A2.579,2.579,0,0,1,1.72,19.776V4.3A2.579,2.579,0,0,1,4.3,1.72H19.776A2.579,2.579,0,0,1,22.355,4.3Z" transform="translate(917 17)" fill="#fff" v-bind:class="{selectedNav : DataList[1].isSelected, notselectedNav : !DataList[1].isSelected}"></path >
                     <path id="Path_548" data-name="Path 548" d="M145.991,140.832h-3.439v-3.439a.86.86,0,0,0-1.72,0v3.439h-3.439a.86.86,0,1,0,0,1.72h3.439v3.439a.86.86,0,1,0,1.72,0v-3.439h3.439a.86.86,0,1,0,0-1.72Z" transform="translate(787.346 -112.654)" fill="#fff" v-bind:class="{selectedNav : DataList[1].isSelected, notselectedNav : !DataList[1].isSelected}"></path>
                  </g>
               </svg>
               <p v-bind:class="{selectedNav : DataList[1].isSelected, notselectedNav : !DataList[1].isSelected}" style="color:white; font-size:7px;margin-top:2px;margin-left:-7px">AddContest</p>
            </b-col>
            <b-col cols="2" v-on:click="activeNav(DataList[2])">
                 <svg xmlns="http://www.w3.org/2000/svg" width="31.51" height="23.969" viewBox="0 0 31.51 23.969" v-bind:class="{selectedNav : DataList[2].isSelected, notselectedNav : !DataList[2].isSelected}">
                     <path id="vote" d="M24.915,68.9l-1.177.538L19.394,64.5a8.592,8.592,0,0,0-7.668-2.842l-4.894.688V61.271H0v12.8H6.831V72.393H8.113a7.048,7.048,0,0,0,3.117,2.759l-1.476.674,3.457,7.567H5.539V85.24H31.51V83.393ZM4.985,72.226H1.846V63.117H4.985Zm4.5-1.169-.255-.51h-2.4V64.209l5.151-.723a6.751,6.751,0,0,1,6.025,2.233l3.977,4.521-1.4.638a3.091,3.091,0,0,0-2.508-1.285H13.685V71.44h4.393a1.248,1.248,0,0,1,1.247,1.247v1.247H14.138A5.177,5.177,0,0,1,9.483,71.057ZM12.2,76.738l2.1-.958h6.873V72.687c0-.015,0-.03,0-.045L24,71.348l5.5,12.046H15.241Z" transform="translate(0 -61.271)" fill="#fff" v-bind:class="{selectedNav : DataList[2].isSelected, notselectedNav : !DataList[2].isSelected}"></path>
                  </svg>
               <p v-bind:class="{selectedNav : DataList[2].isSelected, notselectedNav : !DataList[2].isSelected}" style="color:white; font-size:7px; margin-top:2px;margin-left:7px">Votes</p>
            </b-col>
            <b-col cols="2" v-on:click="activeNav(DataList[3])">
               <svg xmlns="http://www.w3.org/2000/svg" width="22.521" height="25.853" viewBox="0 0 22.521 25.853" v-bind:class="{selectedNav : DataList[3].isSelected, notselectedNav : !DataList[3].isSelected}">
                  <path id="iconfinder_Notification_4737445" d="M24.618,16.41l-.49-.394a1.126,1.126,0,0,1-.422-.878V10.588A8.445,8.445,0,0,0,16.9,2.306a1.689,1.689,0,0,0-3.271,0,8.445,8.445,0,0,0-6.813,8.282v4.549a1.126,1.126,0,0,1-.422.878l-.49.394A5.067,5.067,0,0,0,4,20.351v.935a2.252,2.252,0,0,0,2.252,2.252H10.9a4.5,4.5,0,0,0,8.71,0h4.656a2.252,2.252,0,0,0,2.252-2.252v-.923a5.067,5.067,0,0,0-1.9-3.952ZM15.26,24.664a2.252,2.252,0,0,1-1.937-1.126H17.2A2.252,2.252,0,0,1,15.26,24.664Zm9.008-3.378H6.252v-.923a2.815,2.815,0,0,1,1.058-2.2l.49-.394a3.378,3.378,0,0,0,1.267-2.635V10.588a6.193,6.193,0,0,1,12.386,0v4.549a3.378,3.378,0,0,0,1.267,2.641l.49.394a2.815,2.815,0,0,1,1.058,2.19Z" transform="translate(-4 -1.039)" fill="#fff" v-bind:class="{selectedNav : DataList[3].isSelected, notselectedNav : !DataList[3].isSelected}"></path>
            </svg>
               <p v-bind:class="{selectedNav : DataList[3].isSelected, notselectedNav : !DataList[3].isSelected}" style="color:white; font-size:7px; margin-top:2px;margin-left:-7px">Notification</p>
            </b-col>
            <b-col cols="2" style="margin-left:-17px; margin-top: -4px">
               <img alt="Image placeholder" src="@/assets/images/Ellipse -3.png" style="width:47px">
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
export default {
   data(){
      return{
         DataList : [
            {key : "0", nav : "home", isSelected : true},
            {key : "1", nav : "add", isSelected : false},
            {key : "2", nav : "vote", isSelected : false},
            {key : "3", nav : "noti", isSelected : false}
         ]
      }
   },
   methods : {
      activeNav : function(key){
         for(var i = 0; i < this.DataList.length; i ++){
            this.DataList[i].isSelected = false
         }
         key.isSelected = true;
      }
   }

}
</script>

<style>
   .bg-dark{
      background-color: black !important;  
   }
   .selectedNav{
      color: #1fC5B9 !important;
      fill: #1fC5B9;
   }
   .notselectedNav{
      color: white;
      fill: white;
   }
</style>