<template>
    <TheSection class="section">
      <h2 class="section-title">OUR PROJECTS</h2>
      <b-row cols="1" cols-md="1" cols-lg="2" class="portfolio-section-grid">
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
          imgTitle: "Casa Ole",
          imgText: "A mexican restaurant chain with stuff. Filler text yeah yeah.",
          imgSrc: require("@/assets/images/img0.png"),
        },
        {
          imgTitle: "Acatea",
          imgText: "We actually never finished this site. We dun learnt tho.",
          imgSrc: require("@/assets/images/img1.png"),
        },
        {
          imgTitle: "Fyresite",
          imgText: "We definitely didn't build this site.",
          imgSrc: require("@/assets/images/img2.png"),
        },
        {
          imgTitle: "Raine's Logo Design",
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

.section {
  border: var(--bootstrap-card-border);
}

  .section-title {
    text-align: center;
    margin-bottom: var(--size7);
    font-weight: var(--font-weight1);
    word-spacing: var(--size0);
  }

    .portfolio-section-grid {
    display: flex;
    justify-content: space-around;
     } 

  .portfolio-section-card {
    margin-bottom: var(--size5);
    max-width: 570px;
  }
  /*
  .portfolio-section-card:last-of-type {
    margin-bottom: 0;
  } */


  @media only screen and (max-width: 576px) {
     
  }

  @media only screen and (min-width: 576px) (max-width: 768px){

  }

  @media only screen and (min-width: 768px) (max-width: 992px){

  }

  @media only screen and (max-width: 992px){
    .portfolio-section-card {
      margin-bottom: var(--size7);
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px){

  }

  @media only screen and (min-width: 1200px){

  } 

</style>