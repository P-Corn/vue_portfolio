<template>
    <TheSection class="section">
      <div class="section-header-container">
        <h2 class="section-title">Our <span class="section-title-span">Projects</span></h2>
        <!-- <hr> -->
        <p class="section-paragraph">We create anything from simple websites to complex applications.</p>
      </div>
      <v-carousel
        cycle
        continuous
        show-arrows-on-hover
        :show-arrows="true" 
        class="carousel"
        height="350"
      >
        <v-carousel-item
          v-for="imageObject in imageObjects"
          :key="imageObject.id"
          :src="imageObject.imgSrc"
          gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.55)"
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
        <v-btn x-large color="var(--vuetify-blue)" outlined dark>view all projects</v-btn>
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
      windowWidth: window.innerWidth,
      hoverHide: true,
      carouselHeight: 300,
      imageObjects: [
        {
          imgTitle: "Stripe",
          imgText: "A mexican restaurant chain with stuff. Filler text yeah yeah. Here's more text to see how the card looks.",
          imgSrc: require("@/assets/images/img0.png"),
        },
        {
          imgTitle: "AirBnB",
          imgText: "We actually never finished this site. We dun learnt tho. Maybe the cards would look better if they had more text",
          imgSrc: require("@/assets/images/img1.png"),
        },
        {
          imgTitle: "Fyresite",
          imgText: "We definitely didn't build this site but we can one day.",
          imgSrc: require("@/assets/images/img2.png"),
        },
        {
          imgTitle: "Google Domains",
          imgText: "This is a paragraph 4, also this is Netflix.",
          imgSrc: require("@/assets/images/img3.png"),
        },
        {
          imgTitle: "Pie in the Sky",
          imgText: "This is a paragraph 5",
          imgSrc: require("@/assets/images/img4.png"),
        },
        {
          imgTitle: "McDonalds",
          imgText: "This is a paragraph 6",
          imgSrc: require("@/assets/images/img5.png"),
        },
      ]
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth > 960) {
        this.carouselHeight = 10
      } else {
        this.carouselHeight = 900
      }
  }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },

  created() {
  window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
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
    margin-top: var(--size2);
  }

  .carousel-title {
    font-size: var(--font-size8);
    font-weight: var(--font-weight0);
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