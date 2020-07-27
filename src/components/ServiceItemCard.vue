<template>
    <div class="service-card__container">
      <div class="service-card__icon">
        <b-icon class="service-card__icon-svg" icon="circle-fill"></b-icon>
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
  /* background-color: var(--cool-gray5); */
  text-align: center;
  
}

svg {
  /* Not the final color, this is a placeholder to show off the intent */
  fill: #B8EAFF;
  color: var(--cool-gray4);
  height: var(--size7);
  width: var(--size7);
  margin-bottom: var(--size3);
}

.service-card__title h3 {
  font-weight: var(--font-weight1);
  font-size: var(--font-size6);
}

.service-card__text p {
  color: var(--cool-gray1);
  margin: 0;
  font-size: var(--font-size3);
}

@media only screen and (max-width: 768px) {

}

</style>