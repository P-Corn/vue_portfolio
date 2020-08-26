<template>
    <TheSection class="section">
      <div class="section-header-container">
        <h2 class="section-title">Our Skills</h2>
        <hr>
        <p class="section-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero laborum text filler yeah </p>
      </div>
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
      <div class="section-button-container">
        <v-btn large color="var(--vuetify-blue)" outlined dark>learn more</v-btn>
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
          imgText: "This is our bread and butter. Web development is the core of what we do. We can make your business come alive on the web.",
          imgTitle: "Web development",
          color: "var(--vuetify-blue)",
          backColor: 'background-color: var(--icon-bg-blue);',
          linkColor: "color: var(--vuetify-blue);"
        },
        {
          iconSrc: "dns",
          imgText: "Do you know how to host a website? Do you even know what that means? We do, no worries. We gotchu fam. Hosting is.",
          imgTitle: "Hosting",
          color: "var(--vuetify-blue)",
          backColor: 'background-color: var(--icon-bg-blue);',
          linkColor: "color: var(--vuetify-blue);"
        },
        {
          iconSrc: "smartphone",
          imgText: "There's a 52% chance you're browsing on your phone now. Most people do. We ensure your site is mobile friendly.",
          imgTitle: "Responsive design",
          color: "var(--vuetify-blue)",
          backColor: 'background-color: var(--icon-bg-blue);',
          linkColor: "color: var(--vuetify-blue);"
        },
        // {
        //   iconSrc: "build",
        //   imgText: "We maintain your site with monthly updates and stuff like adding new content. You don't have to worry about a thing.",
        //   imgTitle: "Maintenance",
        //   color: "var(--icon-purple)",
        //   backColor: 'background-color: var(--icon-bg-purple);',
        //   linkColor: 'color: var(--icon-purple);'
        // },
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

  .section {
    border-bottom: 1px solid #f5f5f5;  
  }

  .section-paragraph {
    text-align: center;
    max-width: var(--size15);
    margin: 0 auto;
  }

  .item-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .item-container {
    margin-bottom: var(--size4);
    max-width: var(--size15);
  }

  .item-container:last-of-type {
    margin-bottom: 0;
  }



/* MEDIA */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 600px) { 

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 768px) {

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 960px) {
  .item-container {
    max-width: var(--size13);
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .item-row {
    justify-content: space-between;
  }

  .item-container {
    margin-bottom: 0;
  }
}

  


</style>