<template>
    <TheSection>
      <ul class="services-section__grid">
        <li class="services-section__grid-card" v-for="imageObject in imageObjects" :key="imageObject.id">
          <ServiceItemCard 
            :imgSrc="imageObject.imgSrc" 
            :imgText="imageObject.imgText"   />
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
          imgTitle: "Title 1",
          imgText: "This is a paragraph but I'm making this one extra long for testing reasons so yeah here it is",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Title 2",
          imgText: "This is a paragraph as well",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Title 3",
          imgText: "This is paragraph 3",
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
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: var(--size6);
  /* grid-template-columns: 300px 300px 300px; */
}

.services-section__grid-card {
}

</style>