<template>
    <a @mouseover="hoverHide = true" @mouseleave="hoverHide = false" class="image-card__container" href="#">
      <!-- class="image-card"  THIS CLASS WAS ON THE CARD COMPONENT-->
      <v-card>
          <v-img :src="imgSrc"
          :class="[hoverHide ? 'zoom-out' : 'zoom-in']"
          class="align-end card-image"
          :aspect-ratio="5/4"
          
          >
          </v-img>
          <div
            :class="[hoverHide ? 'hide' : 'show']"
            class="card-title align-center justify-space-between"
            >
              <h3>{{ imgTitle }}</h3>
          </div>
      </v-card>
    </a>
</template>


<script>
//This goes on the v-img as an attribute
// :gradient="[hoverHide ? 'to bottom, rgba(0,0,0,0), rgba(0,0,0,0)' : 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)']"
export default {
  name: 'GridImageCard',
  props: {
      imgSrc: String,
      imgTitle: String,
      imgText: String
  },
  data: function() {
    return {
      hoverHide: false
      } 
  }
}
</script>

<style scoped>

/* --------- */
  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
  }

  .zoom-in {
    transform: scale(1.10);
  }

  .zoom-out {
    transform: scale(1.01);
  }
  .v-card .v-image .v-image__image {
    background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5)) !important;
    position: absolute;
  }

/* --------- */

.image-card__container {
  text-decoration: none;
  position: relative;
}

.v-sheet.v-card {
  box-shadow: var(--boxshadow3) !important;
  /* border-radius: var(--size0); */
  transition: all .3s;
  overflow: hidden;
}

.card-image {
  transition: all .3s;
}

.card-title {
  padding: var(--size2);
  transition: ease .35s;
  position: absolute;
  bottom: 0;
  
}

h3 {
  margin: 0;
  font-weight: var(--font-weight1);
  /* text-shadow: var(--text-shadow1); */
  font-size: var(--font-size6);
  text-decoration: none;
  color: white;
  /* position: absolute; */
}



  @media only screen and (max-width: 576px) {

  }

  @media only screen and (min-width: 576px) (max-width: 768px){

  }

  @media only screen and (min-width: 768px) (max-width: 992px){

  }

  @media only screen and (min-width: 992px) and (max-width: 1200px){

  }

  @media only screen and (min-width: 1200px){

  }
 
</style>