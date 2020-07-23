<template>
    <TheSection>
      <ul class="portfolio-section__grid">
        <li class="grid-image-card" v-for="imageObject in imageObjects" :key="imageObject.id">
          <GridImageCard 
            :imgSrc="imageObject.imgSrc" 
            :imgTitle="imageObject.imgTitle"
            :imgText="imageObject.imgText"   />
        </li>
      </ul>
    </TheSection>
</template>

<script>
import TheSection from './TheSection.vue'
import GridImageCard from './GridImageCard.vue'

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
          imgText: "This is a paragraph",
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
  .grid-image-card {
    margin: var(--size1);
    flex: 30%;
    max-height: 354px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>