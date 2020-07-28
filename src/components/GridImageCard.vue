<template>
    <a @mouseover="hoverHide = true" @mouseleave="hoverHide = false" class="grid-image-card__container" href="#">
      <img :class="[hoverHide ? 'zoom-out' : 'zoom-in']" :src="imgSrc" alt="">
        <div :class="[hoverHide ? 'hide' : 'show']" class="grid-image-card__text">
          <h3>{{ imgTitle }}</h3>
          <p>{{imgText}}</p>
        </div>
      <div :class="[hoverHide ? 'hide' : 'show']" class="dark-overlay"></div>
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

/* ANIMATION CLASSES */
  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
  }

  .zoom-in {
    transform: scale(1.15);
  }

  .zoom-out {
    transform: scale(1);
  }

/* ---------------- */

  .dark-overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient( rgba(0,0,0,0.6), rgba(0, 0, 0, 0.6) );
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    transition: all ease .4s;
  }

  .grid-image-card__container {
    text-decoration: inherit;
    color: inherit;
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 100%;
  }

  .grid-image-card__text {
    position: absolute;
    bottom: 0;
    padding: var(--size4);
    color: #fff;
    z-index: 4;
    transition: ease .35s;
  }

  h3 {
    font-size: var(--font-size8);
    font-weight: var(--font-weight1);
  }

  p {
    font-size: var(--font-size3);
  }

  img {
    width: 100%;
    transition: all ease .4s;
  }

  /* MEDIA */

  @media only screen and (max-width: 576px) {
    .grid-image-card__text {
      padding: var(--size2);
    }
  }
</style>