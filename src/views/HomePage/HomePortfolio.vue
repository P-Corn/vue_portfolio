<template>
    <TheSection>
      <b-row cols="1" cols-md="2" cols-lg="3" class="portfolio-section-grid">
        <b-col class="portfolio-section-card" v-for="imageObject in imageObjects" :key="imageObject.id">
          <GridImageCard 
            :imgSrc="imageObject.imgSrc" 
            :imgTitle="imageObject.imgTitle"
            :imgText="imageObject.imgText"   />
        </b-col>
      </b-row>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import GridImageCard from '@/components/GridImageCard.vue'

export default {
  name: 'HomePortfolio',
  components: {
    TheSection,
    GridImageCard
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
        },
        {
          imgTitle: "Title 5",
          imgText: "This is a paragraph 5",
          imgSrc: require("@/assets/images/img4.png"),
        },
        {
          imgTitle: "Title 6",
          imgText: "This is a paragraph 6",
          imgSrc: require("@/assets/images/img5.png"),
        },
      ]
    }
  }
}
</script>

<style scoped>

  .portfolio-section-grid {
    display: flex;
    justify-content: space-around;
  }

  .portfolio-section-card {
    max-width: var(--size13);
    margin-bottom: var(--size5);
  }

</style>