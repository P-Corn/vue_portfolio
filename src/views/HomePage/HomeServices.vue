<template>
    <TheSection>
      <ul class="services-section__grid">
        <li v-for="imageObject in imageObjects" :key="imageObject.id">
          <ServiceItemCard 
            :imgSrc="imageObject.imgSrc" 
            :imgTitle="imageObject.imgTitle"
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
          imgSrc: require("@/assets/images/img0.png"),
        },
        {
          imgTitle: "Title 2",
          imgText: "This is a paragraph as well",
          imgSrc: require("@/assets/images/img1.png"),
        },
        {
          imgTitle: "Title 3",
          imgText: "This is paragraph 3",
          imgSrc: require("@/assets/images/img2.png"),
        },
        {
          imgTitle: "Title 4",
          imgText: "This is a paragraph 4",
          imgSrc: require("@/assets/images/img3.png"),
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>