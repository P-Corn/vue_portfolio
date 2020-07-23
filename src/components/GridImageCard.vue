<template>
    <a @mouseover="hoverHide = true" @mouseleave="hoverHide = false" class="grid-image-card__container" href="#">
      <img :src="imgSrc" alt="">
      <transition class="fade">
        <div v-show="!hoverHide" class="grid-image-card__text">
          <h3>{{ imgTitle }}</h3>
          <p>{{imgText}}</p>
        </div>
      </transition>
      <div v-show="!hoverHide" class="dark-overlay"></div>
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

.fade-enter-active, .fade-leave-active {
  transition: all 3s;
}

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