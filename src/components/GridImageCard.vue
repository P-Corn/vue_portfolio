<template>
    <a class="image-card__container" href="#">
      <b-card
      class="image-card__image"
      :img-src="imgSrc"
      >
      <b-card-text class="image-card__text">
        <h3>{{imgTitle}}</h3>
        <b-icon class="image-card__icon" icon="chevron-right"></b-icon>
      </b-card-text>
      </b-card>
    </a>
</template>

<script>
export default {
  name: 'GridImageCard',
  props: {
      imgSrc: String,
      imgTitle: String,
      // imgText: String
  },
  data: function() {
    return {
      hoverHide: false
      } 
  }
}
</script>

<style scoped>

.grid-card__container {
  text-decoration: none;
}

.card-body {
  padding-top: var(--size2);
  padding-bottom: var(--size2);
}

.image-card__text {
  display: flex;
  justify-content: start;
  position: relative;
}

h3 {
  margin: 0;
  color: var(--cool-gray0);
  font-weight: var(--font-weight1);
  font-size: var(--font-size5);
}

.image-card__image img {
  max-height: var(--size12);
  border-bottom: var(--bootstrap-card-border);
}

.image-card__icon {
  /* font-size: var(--font-size5); */
  color: var(--cool-gray1);
  font-size: var(--font-size5);
  font-weight: var(--font-weight1);
  position: absolute;
  right: 0;
  top: 54%;
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