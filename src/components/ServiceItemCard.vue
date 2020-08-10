<template>
  <div>
    <div class="service-card-container">
      <div class="service-card-icon">
        <v-icon>{{iconSrc}}</v-icon>
      </div>
      <div class="service-card-title">
        <h3>{{imgTitle}}</h3>
      </div>
      <div class="hr-container">
        <hr>
      </div>
      <div class="service-card-text">
        <p>{{imgText}}</p>
      </div>
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


.service-card-container {
  text-align: center;
  /* border: 1px solid black; */
  padding: var(--size5);
  box-shadow: var(--boxshadow2);
  /* border-top-left-radius: var(--border-radius-card);
  border-bottom-right-radius: var(--border-radius-card); */
  border-radius: var(--border-radius-card);
  background-color: white;
}

.service-card-title h3 {
  font-weight: var(--font-weight1);
  font-size: var(--font-size6);
  /* color: var(--primary1); */
}

.service-card-icon {
  margin-bottom: var(--size1);
}

.v-icon.v-icon {
  font-size: var(--font-size8);
  padding: var(--size4);
  background-color: var(--secondary-light);
  border-radius: 100px;
  color: var(--secondary-dark);
  box-shadow: var(--boxshadow1);
}

.hr-container {
  width: 100%;
  margin: var(--size0) 0;
}

hr {
  border: 2px solid #c2ffc8;
  max-width: var(--size7);
  margin: 0 auto;
  /* border-radius: 200px; */
}

.service-card-text p {
  color: var(--cool-gray1);
  margin: 0;
  font-size: var(--font-size4);
}


@media only screen and (max-width: 960px){
 
  }

@media only screen and (min-width: 1200px){

    .service-card-title h3 {
      font-size: var(--font-size7);
    }
    .service-card-text p {
      font-size: var(--font-size5);
    }
  }

</style>