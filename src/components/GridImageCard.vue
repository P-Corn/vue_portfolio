<template>
    <a class="image-card__container" href="#">
      <!-- class="image-card"  THIS CLASS WAS ON THE CARD COMPONENT-->
      <v-card>
        <v-img :src="imgSrc"></v-img>
        <v-card-title>
          <h3>{{ imgTitle }}</h3>
        </v-card-title>
      </v-card>
    </a>
</template>

<script>
export default {
  name: 'GridImageCard',
  props: {
      imgSrc: String,
      imgTitle: String,
  },
  data: function() {
    return {
      hoverHide: false
      } 
  }
}
</script>

<style scoped>

.image-card__container {
  text-decoration: none;
}

.v-image {
  /* max-height: var(--size12); */
}

.v-card__title {
  padding-top: var(--size1);
  padding-bottom: var(--size1);
}

h3 {
  margin: 0;
  color: var(--cool-gray0);
  font-weight: var(--font-weight1);
  font-size: var(--font-size5);
  text-decoration: none;
  /* position: absolute; */
}

.image-card__icon {
  /* font-size: var(--font-size5); */
  color: var(--cool-gray1);
  font-size: var(--font-size5);
  font-weight: var(--font-weight1);
  position: absolute;
  right: 0;
  top: 51%;
  transform: translateY(-50%);
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