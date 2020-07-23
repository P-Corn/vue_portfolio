<template>
  <a href="#">
    <div class="grid-image-card__container">
      <img :src="imgSrc" alt="">
      <h3>{{ imgTitle }}</h3>
      <p>{{imgText}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'GridImageCard',
  props: {
      imgSrc: String,
      imgTitle: String,
      imgText: String
  }
}
</script>

<style scoped>
  img {
    max-height: 354px;
    width: 100%;
  }
</style>