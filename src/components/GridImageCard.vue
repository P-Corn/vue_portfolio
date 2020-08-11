<template>
    <a class="image-card__container" href="#">
      <!-- class="image-card"  THIS CLASS WAS ON THE CARD COMPONENT-->
      <v-card>
          <v-img :src="imgSrc"
          gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.05)"
          height="400px"
          >
          </v-img>
          <v-card-title
          class="align-center justify-space-between"
          >
            <h3>{{ imgTitle }}</h3>
          </v-card-title>
        <v-card-text>
          <p>{{imgText}}</p>
          <div class="v-card__link">
            <a href="#">View site<v-icon class="link-icon">navigate_next</v-icon></a>
          </div>
        </v-card-text>
      </v-card>
    </a>
</template>

<script>
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

h3 {
  margin: 0;
  font-weight: var(--font-weight2);
  /* text-shadow: var(--text-shadow1); */
  font-size: var(--font-size6);
  text-decoration: none;
  /* position: absolute; */
}

.v-card__title {
  padding-bottom: var(--size1);
}

.v-card__text p {
  margin: 0;
  font-size: var(--font-size4);
  color: var(--cool-gray1);
}

.v-card__link {
  margin-top: var(--size4);
}

.v-card__text a {
  color: var(--secondary-light);
  font-size: var(--font-size4);
}

.v-card__text .v-icon.v-icon {
  color: var(--secondary-light);
}

.image-card__container {
  text-decoration: none;
}

.v-sheet.v-card {
  box-shadow: var(--boxshadow5) !important;
  /* border-radius: var(--size0); */
  transition: all .3s;
}

.v-sheet.v-card:hover {
  box-shadow: var(--boxshadow4) !important;
  /* transform: translateY(-1px); */
  /* border-radius: var(--size0); */
}

/* .v-image {
  height: var(--size-345);
} */
/* 
.v-card__title {
  padding-bottom: var(--size1);
} */

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