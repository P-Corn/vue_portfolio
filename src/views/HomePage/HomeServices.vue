<template>
    <TheSection>
      <ul class="services-section__grid">
        <li class="services-section__grid-card" v-for="imageObject in imageObjects" :key="imageObject.id">
          <ServiceItemCard 
            :imgSrc="imageObject.imgSrc" 
            :imgText="imageObject.imgText"
            :imgTitle="imageObject.imgTitle"   />
        </li>
      </ul>
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
  padding: 0;
  width: 100%;
  display: grid;
  list-style: none;

  /* COULDNT USE OUR CSS SHEET FOR SIZING HERE. GIVES AN ERROR USING VAR. IS THERE A SOLUTION FOR THIS?? */
  grid-template-columns: repeat(auto-fill, 265px);

  grid-gap: var(--size6);
}

.services-section__grid-card {
}

</style>