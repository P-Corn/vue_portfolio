<template>
  <div>
    <div class="service-card-container">
      <div class="service-card-icon">
        <v-icon :style="backColor" :color="color">{{iconSrc}}</v-icon>
      </div>
      <div class="card-text-container">
        <div class="service-card-title">
          <h3>{{imgTitle}}</h3>
        </div>
        <div class="service-card-text">
          <p>{{imgText}}</p>
        </div>
      </div>      
      <!-- <div class="service-card-link">
        <router-link :style="linkColor" to="#">LEARN MORE<v-icon :style="linkColor" class="link-icon">navigate_next</v-icon></router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItemCard',
  props: {
      iconSrc: String,
      imgTitle: String,
      imgText: String,
      color: String,
      backColor: String,
      linkColor: String
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
  padding: var(--size3);
  box-shadow: var(--boxshadow1);
  transition: all .2s;
  background-color: white;
  display: flex;
  /* border-radius: 10px; */
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: solid 3px #f5f5f5;
}

.service-card-container:hover {
  box-shadow: var(--boxshadow2);
  transform: translateY(-5px);
  border: solid 3px var(--vuetify-blue);
}

.service-card-link .v-icon.v-icon {
  font-size: var(--font-size2);
}

.service-card-title {
  margin: var(--size1) 0;
}

.service-card-title h3 {
  font-weight: var(--font-weight1);
  font-size: var(--font-size5);
  /* color: var(--primary1); */
}

.service-card-text p {
  color: var(--cool-gray1);
  margin: var(--size1) 0;
  font-size: var(--font-size2);
}

.service-card-icon {
  margin-bottom: var(--size3);
}

.service-card-link {
  margin-top: var(--size4);
}

.service-card-link a{
  font-size: var(--font-size2);
  color: inherit;
  letter-spacing: .1px;
}

.service-card-icon .v-icon.v-icon {
  font-size: var(--font-size8);
  padding: var(--size2);
  /* background-color: var(--icon-yellow); */
  border-radius: 100px;
  /* box-shadow: var(--boxshadow1); */
  margin-right: 1rem;
  margin-top: .7rem;
}



@media only screen and (min-width: 960px){
  .service-card-title h3 {
      font-size: var(--font-size6);
    }
    .service-card-text p {
      font-size: var(--font-size3);
    }

    .service-card-link a{
      font-size: var(--font-size3);
      color: inherit;
    }
  }

@media only screen and (min-width: 1200px){

    
  }

</style>