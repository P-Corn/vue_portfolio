<template>
    <TheSection class="section">
      <h2 class="section-title">What we do<span class="section-title-span">.</span></h2>
        <v-row
        justify="center">

        <v-col
          v-for="(item, index) in imageObjects"
          :key="item.imgTitle"
          :class="{ hidden: index >= 3 && windowWidth <= 600}"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          xlg="3"
          class="col">
            <ServiceItemCard
              class="service-item-card"
              :iconSrc="item.iconSrc"
              :imgText="item.imgText"
              :imgTitle="item.imgTitle" />
          </v-col>

        </v-row>
        <div class="button-container">
          <v-btn color="warning" :class="{ hidden: windowWidth > 600}" dark>More</v-btn>
        </div>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import ServiceItemCard from '@/components/ServiceItemCard.vue'

export default {
  name: 'HomeServices',
  components: {
    TheSection,
    ServiceItemCard
  },
  data: function() {
    return {
      windowWidth: window.innerWidth,
      imageObjects: [
        {
          iconSrc: "web",
          imgText: "This is our bread and butter. Web development is the core of what we do. We can make your business come to life.",
          imgTitle: "Web development",
          color: "hsl(54, 100%, 88%)"
        },
        {
          iconSrc: "dns",
          imgText: "Do you know how to host a website? Do you even know what that means? We do, no worries. We gotchu fam.",
          imgTitle: "Hosting",
          color: "blue"
        },
        {
          iconSrc: "smartphone",
          imgText: "There's a 52% chance you're browsing on your phone now. Most people do. We ensure your site is mobile friendly.",
          imgTitle: "Responsive design",
          color: "green"
        },
        {
          iconSrc: "build",
          imgText: "We maintain your site with monthly updates and stuff like adding new content. You don't have to worry about a thing.",
          imgTitle: "Maintenance",
          color: "orange"
        },
      ]
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
  .hidden {
    display: none !important;
  }

  .section {
    /* padding-top: 0; */
    background-color: var(--cool-gray0);
  }

  .section-title {
    color: white;
  }

  .row {
    justify-content: space-around;
  }

  .col {
    display: flex;
    justify-content: center;
  }

  .service-item-card {
    max-width: 350px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: var(--size2);
  }

/* MEDIA */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

  


</style>