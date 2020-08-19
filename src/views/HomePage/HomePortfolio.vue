<template>
    <TheSection class="section">
      <h2 class="section-title">Our projects<span class="section-title-span">.</span></h2>
      <v-row>
        <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        v-for="imageObject in imageObjects" 
        :key="imageObject.id"
        class="portfolio-grid-item">
          <GridImageCard
            :imgSrc="imageObject.imgSrc" 
            :imgTitle="imageObject.imgTitle"
            :imgText="imageObject.imgText"   />
        </v-col>
      </v-row>
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
          imgTitle: "Casa Ole",
          imgText: "A mexican restaurant chain with stuff. Filler text yeah yeah. Here's more text to see how the card looks.",
          imgSrc: require("@/assets/images/img0.png"),
        },
        {
          imgTitle: "Acatea",
          imgText: "We actually never finished this site. We dun learnt tho. Maybe the cards would look better if they had more text",
          imgSrc: require("@/assets/images/img1.png"),
        },
        {
          imgTitle: "Fyresite",
          imgText: "We definitely didn't build this site but we can one day.",
          imgSrc: require("@/assets/images/img2.png"),
        },
        {
          imgTitle: "Raine's Design",
          imgText: "This is a paragraph 4, also this is Netflix.",
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

  .portfolio-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3,33%);
    grid-template-rows: auto;
    grid-gap: var(--size7);
  }

  @media only screen and (min-width: 576px){

  }

  @media only screen and (min-width: 768px){

  }

  @media only screen and (max-width: 992px){
  }

  @media only screen and (min-width: 1200px){

  }

</style>