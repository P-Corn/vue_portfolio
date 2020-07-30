<template>
    <TheSection class="bg-color">
        <b-row cols="1" cols-sm="2" cols-lg="2" class="services-section__grid">
          <b-col class="services-section__grid-card" v-for="imageObject in imageObjects" :key="imageObject.id">
            <ServiceItemCard 
              :imgSrc="imageObject.imgSrc" 
              :imgText="imageObject.imgText"
              :imgTitle="imageObject.imgTitle"   />
          </b-col>
        </b-row>
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
      imageObjects: [
        {
          imgTitle: "Maintenance",
          imgText: "This is a paragraph but I'm making this one extra long for testing reasons so yeah here it",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Hosting",
          imgText: "This is a paragraph as well. More text lorem yeah yeah test test 123 adding test text.",
          iconSrc: "circle-fill",
        },
        {
          imgTitle: "Web development",
          imgText: "This is paragraph 3. We make cool sites isn't that obvious by the awesome stuff we have here?",
          iconSrc: "circle-fill",
        },
      ]
    }
  }
}
</script>

<style scoped>

.bg-color {
  border: var(--bootstrap-card-border);
}

.services-section__grid {
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
}

.services-section__grid-card {
  max-width: var(--size-345);
}

.services-section__grid-card:last-of-type {
  margin-bottom: 0;
}

/* MEDIA QUERIES */

  @media only screen and (max-width: 576px) {
    .services-section__grid-card {
      margin-bottom: var(--size4);
    }
  }

  @media only screen and (min-width: 576px) (max-width: 768px){

  }

  @media only screen and (min-width: 768px) (max-width: 992px){

  }

  @media only screen and (min-width: 992px) and (max-width: 1200px){

  }

  @media only screen and (min-width: 1200px){
   
  }

  /* ------------ */

  @media only screen and (max-width: 992px) {
    .services-section__grid-card {
    max-width: var(--size-345);
  }
  }

  @media only screen and (max-width: 1200px){

  }


</style>