<template>
    <TheSection class="section">
      <h2 class="section-title">What we do<span class="section-title-span">.</span></h2>
        <v-row>
          <v-col
          cols="10"
          sm="5"
          lg="4"
          xlg="3"
          class="col"
          >
            <ServiceItemCard
              class="service-item-card"
              iconSrc="build" 
              imgText="This is a paragraph but I'm making this one extra long for testing reasons so yeah here it"
              imgTitle="Maintenance"   />
          </v-col>
          <v-col
          cols="10"
          sm="5"
          lg="4"
          xlg="3"
          class="col"
          >
            <ServiceItemCard
              class="middle-card service-item-card"
              iconSrc="dns" 
              imgText="This is a paragraph as well. More text lorem yeah yeah test test 123 adding test text."
              imgTitle="Hosting"   />
          </v-col>
          <v-col
          class="col"
          cols="10"
          sm="5"
          lg="4"
          xlg="3"
          >
            <ServiceItemCard 
              class="service-item-card"
              iconSrc="web" 
              imgText="This is paragraph 3. We make cool sites isn't that obvious by the awesome stuff we have here?"
              imgTitle="Web development"   />
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
    /* box-shadow: var(--boxshadow2); */
    /* background-color: var(--cool-gray5); */
  }

  .row {
    justify-content: space-around;
  }

  .col {
    max-width: var(--size13);
  }


  /* .service-item-card {
    max-width: 300px;
  } */
  

/* MEDIA QUERIES */

  @media only screen and (min-width: 600px) {
  
  }

  @media only screen and (min-width: 960px){
    .row {
      justify-content: space-evenly;
    }
  }

  


</style>