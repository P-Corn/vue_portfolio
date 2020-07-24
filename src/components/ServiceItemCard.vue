<template>
    <div class="service-card__container">
      <div class="service-card__image">
        <img :src="imgSrc" alt="">
      </div>
      <div class="service-card__title">
        <h3>{{imgTitle}}</h3>
      </div>
      <div class="service-card__text">
        <p>{{imgText}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceItemCard',
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

</style>