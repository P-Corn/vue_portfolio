<template>
    <TheSection class="section">
      <div class="header-row">
          <div class="text-container">
              <div class="header-text">
                  <h1 class="header-text-title">A/P Web Design
                  </h1>
                  <div class="header-text-paragraph">
                    <p class="section-paragraph">We are a team who designs, develops, and maintains your website all in one place.</p>
                  </div>
                  <div class="header-button-container">
                    <v-btn x-large color="white" class="header-button">Hire us</v-btn>
                    <v-btn x-large color="white" outlined class="header-button">view projects</v-btn>
                  </div>
              </div>
          </div>     
          <div class="header-image">
            <HeaderSVG />
          </div>
      </div>
      <!-- <svg class="bg-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.7 1057.5"><defs></defs><path class="cls-1" d="M795.5,530.5" transform="translate(1.2 1)"/><path class="b-cls-2" d="M-1,855.49c26.29,11.22,63.84,26.76,109.15,43.73C465.72,1033.15,770.72,1056.1,959.5,1056c393.91-.2,723.62-101,960.5-202" transform="translate(1.2 1)"/><path class="b-cls-3" d="M-.5,750.5h1920" transform="translate(1.2 1)"/><path class="b-cls-4" d="M.5-.5H1920L1919.61,852c-236.82,89-566.44,177.79-960.25,178-188.72.09-493.65-20.13-851.12-138.13-45.3-15-82.84-28.64-109.13-38.53" transform="translate(1.2 1)"/></svg> -->
      <!-- <svg class="bg-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.5 1052.45"><defs></defs><path class="bg-cls-1" d="M.5,26.5h1920q.26,465.26.5,930.5c-210.55,74.32-383.07,91.68-498.5,94.5-440.33,10.76-665-175-1124-127a1564.38,1564.38,0,0,0-298,61Z" transform="translate(-0.5 0.5)"/><path class="bg-cls-2" d="M.5-.5h1920q.24,465.26.5,930.5c-209.54,66.5-380.75,82.69-494,86C988.74,1028.79,766.52,867.62,299,908A1862.85,1862.85,0,0,0,.5,958.5Z" transform="translate(-0.5 0.5)"/></svg> -->
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import HeaderSVG from '@/components/HeaderSVG.vue'

export default {
  name: 'HomeHeaderSection',
  components: {
    TheSection,
    HeaderSVG
  },
  data: function() {
    return {
    }
  }
}
</script>

<style scoped>

.section {
  background: linear-gradient(180deg,#1867c0,#5cbbf6);
  min-height: 80vh;
  padding: var(--size6) 0;
}

.header-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 10%; */

  /* THIS MIGHT BE RELEVANT TO SVG HEADER */
  /* position: relative;
  z-index: 1; */
}

.section-paragraph {
  font-size: var(--font-size4);
}

.text-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--size5);
}

.header-text-title {
  font-size: var(--font-size9);
  font-weight: var(--font-weight-300);
  color: white;
  line-height: var(--line-height-1);
  padding-bottom: var(--size4);
}

.header-text-paragraph {
    color: var(--paragraph-light);
    padding-bottom: var(--size5);
    display: flex;
    justify-content: center;
}

.header-text-paragraph p {
  margin: 0;
} 

.header-button-container {
  margin-left: -8px;
}

.header-button {
  margin: 8px;
}


.header-image {
    display: flex;
    align-items: center;
    width: 100%;
    /* padding: var(--size4) 0; */
}

svg {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

/* MEDIA */

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 600px) { 
  .header-text-paragraph {
    padding-bottom: var(--size6);
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .header-row {
    flex-direction: row;
  }

  .text-container {
    margin-bottom: unset;
  }

  .header-image {
    width: 90%;
    /* padding: var(--size4) 0; */
}
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 960px) {
  .header-text-title {
    font-size: var(--font-size10);
  }

  .section-paragraph {
  font-size: var(--font-size5);
}
}

/* // Extra large devices (large desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

</style>