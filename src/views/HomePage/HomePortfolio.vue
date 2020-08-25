<template>
    <TheSection class="section">
      <div class="section-header-container">
        <h2 class="section-title">Our Projects</h2>
        <hr>
        <p class="section-paragraph">We create anything from a simple static website to a complex web app. Heres more text to fill</p>
      </div>
      <v-carousel
        cycle
        show-arrows-on-hover
        :show-arrows="false"
        height="350px"
        class="carousel"
      >
        <v-carousel-item
          v-for="imageObject in imageObjects"
          :key="imageObject.id"
          :src="imageObject.imgSrc"
          gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.6)"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="carousel-title">{{imageObject.imgTitle}}</div>
            </v-row>
        </v-carousel-item>
      </v-carousel>
      <div class="section-button-container">
        <v-btn large color="var(--vuetify-blue)" outlined dark>view all projects</v-btn>
      </div>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'

export default {
  name: 'HomePortfolio',
  components: {
    TheSection,
  },
  data: function() {
    return {
      hoverHide: true,
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
          imgTitle: "Five Below",
          imgText: "This is a paragraph 5",
          imgSrc: require("@/assets/images/img4.png"),
        },
        {
          imgTitle: "Dollar Tree",
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
    border-top: 1px solid #f5f5f5;
  }

  .section-paragraph {
    text-align: center;
    max-width: var(--size15);
    margin: 0 auto;
  }

  .carousel-title {
    font-size: var(--font-size7);
    font-weight: var(--font-weight-300);
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 576px){

  }

  @media only screen and (min-width: 768px){

  }

  @media only screen and (min-width: 992px){

    .carousel-title {
      font-size: var(--font-size9);
    }
  }

  @media only screen and (min-width: 1200px){

  }

</style>