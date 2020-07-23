<template>
    <a v-on:hover="hoverHide=true" class="grid-image-card__container" href="#">
      <img :src="imgSrc" alt="">
      <div v-show="!hoverHide" class="grid-image-card__text">
        <h3>{{ imgTitle }}</h3>
        <p>{{imgText}}</p>
      </div>
      <div class="dark-overlay"></div>
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

  .dark-overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient( rgba(0,0,0,0.6), rgba(0, 0, 0, 0.6) );
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .grid-image-card__container {
    text-decoration: inherit;
    color: inherit;
    position: relative;
    display: inline-block;
  }

  .grid-image-card__text {
    position: absolute;
    bottom: 0;
    padding: var(--size5);
    color: #fff;
    z-index: 2;
  }

  h3 {
    font-size: var(--size7);
    font-weight: var(--font-weight1);
  }

  img {
    width: 100%;
  }
</style>