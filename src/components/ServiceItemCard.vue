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
      </div>
      <div class="service-card-text">
        <p>{{imgText}}</p>
      </div>
      <div class="service-card-link">
        <a href="#">Learn more<v-icon class="link-icon">navigate_next</v-icon></a>
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
  text-align: left;
  /* border: 1px solid black; */
  padding: var(--size5);
  box-shadow: var(--boxshadow2);
  border-top-left-radius: var(--border-radius-card);
  border-bottom-right-radius: var(--border-radius-card);
  /* border-radius: var(--border-radius-card); */
  background-color: white;
  transition: all .3s;
}

.service-card-container:hover {
  box-shadow: var(--boxshadow4);
}

.service-card-link .v-icon.v-icon {
  color: var(--icon-yellow-dark);
}

.service-card-link {
  margin-top: var(--size4);
}

.service-card-link a{
  font-size: var(--font-size4);
  color: var(--icon-yellow-dark);
}

.service-card-title {
  margin: var(--size1) 0;
}

.service-card-title h3 {
  font-weight: var(--font-weight2);
  font-size: var(--font-size6);
  /* color: var(--primary1); */
}

.service-card-text p {
  color: var(--cool-gray1);
  margin: var(--size1) 0;
  font-size: var(--font-size4);
}

.service-card-icon {
  margin-bottom: var(--size3);
}

.service-card-icon .v-icon.v-icon {
  font-size: var(--font-size7);
  padding: var(--size3);
  background-color: var(--icon-yellow);
  border-radius: 100px;
  color: var(--icon-yellow-dark);
  /* box-shadow: var(--boxshadow1); */
}


@media only screen and (max-width: 960px){
 
  }

@media only screen and (min-width: 1200px){

    .service-card-title h3 {
      font-size: var(--font-size6);
    }
    .service-card-text p {
      font-size: var(--font-size4);
    }
  }

</style>