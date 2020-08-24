<template>
    <TheSection class="section">
      <h2 class="section-title">What we do<span class="section-title-span">.</span></h2>
        <div class="item-row">
          <div
            v-for="(item, index) in imageObjects"
            :key="item.imgTitle"
            :class="{ hidden: index >= 3 && windowWidth <= 600}"
            class="item-container">
              <ServiceItemCard
                class="service-item-card"
                :color="item.color"
                :iconSrc="item.iconSrc"
                :imgText="item.imgText"
                :imgTitle="item.imgTitle"
                :backColor="item.backColor"
                :linkColor="item.linkColor"
                 />
          </div>
      </div>
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
          color: "var(--icon-yellow)",
          backColor: 'background-color: var(--icon-bg-yellow);',
          linkColor: "color: var(--icon-yellow);"
        },
        {
          iconSrc: "dns",
          imgText: "Do you know how to host a website? Do you even know what that means? We do, no worries. We gotchu fam.",
          imgTitle: "Hosting",
          color: "var(--icon-blue)",
          backColor: 'background-color: var(--icon-bg-blue);',
          linkColor: 'color: var(--icon-blue);'
        },
        {
          iconSrc: "smartphone",
          imgText: "There's a 52% chance you're browsing on your phone now. Most people do. We ensure your site is mobile friendly.",
          imgTitle: "Responsive design",
          color: "var(--icon-green)",
          backColor: 'background-color: var(--icon-bg-green);',
          linkColor: 'color: var(--icon-green);'
        },
        {
          iconSrc: "build",
          imgText: "We maintain your site with monthly updates and stuff like adding new content. You don't have to worry about a thing.",
          imgTitle: "Maintenance",
          color: "var(--icon-purple)",
          backColor: 'background-color: var(--icon-bg-purple);',
          linkColor: 'color: var(--icon-purple);'
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
    background: linear-gradient(to bottom, var(--cool-gray-1), var(--cool-gray-2));
  }

  .section-title {
    color: white;

  }

  .item-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .item-container {
    display: flex;
    justify-content: center;
    margin-bottom: var(--size7);
    max-width: var(--size-345);
  }

  .service-item-card {
    /* max-width: 350px; */
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