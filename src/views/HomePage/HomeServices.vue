<template>
    <TheSection>
      <b-row cols="1" cols-sm="2" cols-lg="3" class="services-section__grid">
        <b-col class="services-section__grid-card" v-for="imageObject in imageObjects" :key="imageObject.id">
          <ServiceItemCard 
            :imgSrc="imageObject.imgSrc" 
            :imgText="imageObject.imgText"
            :imgTitle="imageObject.imgTitle"   />
        </b-col>
      </b-row>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import ServiceItemCard from '@/components/ServiceItemCard.vue'

export default {
  name: 'HomePortfolio',
  components: {
    TheSection,
    ServiceItemCard
  },
  data: function() {
    return {
      imageObjects: [
        {
          imgTitle: "Maintenance",
          imgText: "This is a paragraph but I'm making this one extra long for testing reasons so yeah here it is",
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-section__grid {
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
}

.services-section__grid-card {
  justify-content: center;
  display: flex;
  margin-bottom: var(--size6);
}

/* MEDIA QUERIES */

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

</style>