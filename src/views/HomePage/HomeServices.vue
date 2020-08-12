<template>
    <TheSection class="section">
      <h2 class="section-title">What we do<span class="section-title-span">.</span></h2>
        <v-row
        class="flex-wrap">

        <v-col
          v-for="item in imageObjects"
          :key="item.imgTitle"
          cols="10"
          sm="5"
          lg="3"
          xlg="3"
          class="col">
            <ServiceItemCard
              class="service-item-card"
              :class="{ middleCard: toggleClass}"
              :iconSrc="item.iconSrc" 
              :imgText="item.imgText"
              :imgTitle="item.imgTitle"   />
          </v-col>

        </v-row>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import ServiceItemCard from '@/components/ServiceItemCard.vue'

export default {
  name: 'HomeServices',
  components: {
    TheSection,
    ServiceItemCard
  },
  data: function() {
    return {
      imageObjects: [
        {
          iconSrc: "web",
          imgText: "This is our bread and butter. Web development is the core of what we do. We can make your business come to life.",
          imgTitle: "Web development",
        },
        {
          iconSrc: "dns",
          imgText: "Do you know how to host a website? Do you even know what that means? We do, no worries. We gotchu fam.",
          imgTitle: "Hosting",
          toggleClass: true
        },
        {
          iconSrc: "smartphone",
          imgText: "There's a 52% chance you're browsing on your phone now. Most people do. We ensure your site is mobile friendly.",
          imgTitle: "Responsive design",
        },
        {
          iconSrc: "build",
          imgText: "We maintain your site with monthly updates and stuff like adding new content. You don't have to worry about a thing.",
          imgTitle: "Maintenance",
        },
      ]
    }
  }
}
</script>

<style scoped>

  .section {
    padding-top: 0;
    background-color: var(--cool-gray5);
  }

  .row {
    justify-content: space-around;
  }

  .col {
    max-width: 400px;
  }


  .service-item-card {
    max-width: 350px;
  } 
  

/* MEDIA QUERIES */

  @media only screen and (min-width: 600px) {
  
  }

  @media only screen and (min-width: 960px){
    .row {
      justify-content: space-evenly;
    }
  }

  


</style>