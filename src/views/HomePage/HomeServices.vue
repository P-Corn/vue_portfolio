<template>
    <TheSection class="section">
      <!-- <h4>Our services</h4> -->
      <h2 class="section-title">What we do<span class="section-title-span">.</span></h2>
        <v-row
        class="flex-wrap"
        >
          <v-col
          cols="10"
          sm="5"
          lg="3"
          xlg="3"
          class="col"
          >
            <ServiceItemCard 
              class="service-item-card"
              iconSrc="web" 
              imgText="This is our bread and butter. Web development is the core of what we do. We can make your business come to life."
              imgTitle="Web development"   />
          </v-col>
          <v-col
          cols="10"
          sm="5"
          lg="3"
          xlg="3"
          class="col"
          >
            <ServiceItemCard
              class="middle-card service-item-card"
              iconSrc="dns" 
              imgText="Do you know how to host a website? Do you even know what that means? We do, no worries. We gotchu fam."
              imgTitle="Hosting"   />
          </v-col>
          <v-col
          class="col"
          cols="10"
          sm="5"
          lg="3"
          xlg="3"
          >
              <ServiceItemCard 
              class="service-item-card"
              iconSrc="smartphone" 
              imgText="There's a 52% chance you're browsing on your phone now. Most people do. We ensure your site is mobile friendly."
              imgTitle="Responsive design"   />
          </v-col>
          <v-col
          class="col"
          cols="10"
          sm="5"
          lg="3"
          xlg="3"
          >
            <ServiceItemCard
              class="service-item-card"
              iconSrc="build" 
              imgText="We maintain your site with monthly updates and stuff like adding new content. You don't have to worry about a thing."
              imgTitle="Maintenance"
              />
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
          imgTitle: "Maintenance",
          imgText: "This is a paragraph but I'm making this one extra long for testing reasons so yeah here it",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Hosting",
          imgText: "This is a paragraph as well. More text lorem yeah yeah test test 123 adding test text.",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Web development",
          imgText: "This is paragraph 3. We make cool sites isn't that obvious by the awesome stuff we have here?",
          iconSrc: "circle-fill",
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