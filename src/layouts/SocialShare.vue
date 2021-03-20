<template>
  <div>
        <div class="att-form" >
          <ShareNetwork 
            class="att-sicon"
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{ backgroundColor: network.color }"
            :url="sharing.url"
            :title="sharing.title"
            :description="sharing.description"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags"
            :twitterUser="sharing.twitterUser"
          >
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
          </ShareNetwork>
        </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      sharing: {
        url: "https://news.vuejs.org/issues/180",
        title:
          "Say hi to Vite! A brand new, extremely fast development setup for Vue.",
        description:
          'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: "The hot reload is so fast it's near instant. - Evan You",
        hashtags: "vuejs,vite,javascript",
        twitterUser: "youyuxi",
      },
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg facebook-f",
          color: "#1877f2",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
        {
          network: "pinterest",
          name: "Pinterest",
          icon: "fab fah fa-lg fa-pinterest",
          color: "#bd081c",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg twitter",
          color: "#1da1f2",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
        {
          network: "fakeblock",
          name: "Custom Network",
          icon: "fab fah fa-lg fa-vuejs",
          color: "#41b883",
        },
      ],
    };
  },
};
</script>

<style scoped>
.att-form {
  padding-top: 230px;
  text-align: center;
}
a {
    color: white;
}
.att-sicon {
    
    margin-left: 15px;
    margin-right: 15px;
    
}
</style>