<template>
    <TheSection class="section">
      <h2 class="section-title">What we <span class="section-title-span">do.</span></h2>
        <v-row>
          <v-col
          cols="10"
          sm="5"
          md="3"
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
          md="3"
          >
            <ServiceItemCard
              class="middle-card service-item-card"
              iconSrc="dns" 
              imgText="This is a paragraph as well. More text lorem yeah yeah test test 123 adding test text."
              imgTitle="Hosting"   />
          </v-col>
          <v-col
          cols="10"
          sm="5"
          md="3"
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
    box-shadow: var(--boxshadow2);
    padding: 200px;
  }

  .row {
    justify-content: space-around;
  }

  .middle-card {
    padding: 2rem;
  }

  /* .service-item-card {
    max-width: 300px;
  } */
  

/* MEDIA QUERIES */

  @media only screen and (min-width: 600px) {
    .middle-card {
      padding: 0;
    }
  }

  @media only screen and (min-width: 960px){
    .row {
      justify-content: space-between;
    }
  }

  


</style>