<template>
    <div class="service-card__container">
      <div class="service-card__icon">
        <b-icon :icon="iconSrc"></b-icon>
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
      iconSrc: String,
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

.service-card__container {
  background-color: var(--cool-gray5);
  height: var(--size12);
}

.service-card__image {

}

</style>