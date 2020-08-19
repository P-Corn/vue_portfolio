<template>
    <TheSection class="section">
      <div class="header-row">
          <div class="text-container">
              <div class="header-text">
                  <h1 class="header-text-title">We are Developers.</h1>
                  <div class="header-text-paragraph">
                    <p>We make cool websites. You can tell because this website is cool. Here's some more text to fill this spot.</p>
                  </div>
                  <div class="header-button-container">
                    <v-btn x-large width="100%" color="var(--secondary-light)" class="header-text-button">Hire us</v-btn>
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
/* SVG DO NOT */
.cls-1{isolation:isolate;}.cls-11,.cls-2,.cls-26{fill:#a8c4e5;}.cls-2{opacity:0.4;}.cls-11,.cls-2{mix-blend-mode:multiply;}.cls-3{fill:#d7e8f7;}.cls-17,.cls-31,.cls-4,.cls-41{fill:#fff;}.cls-5{fill:#4367c7;}.cls-6{fill:#dcf1ff;}.cls-7{fill:#ebd265;}.cls-8{fill:#2c4482;}.cls-9{fill:#add5f7;}.cls-10{fill:#ff5c97;}.cls-12{fill:#27e0c0;}.cls-13{fill:#ffd22d;}.cls-14{fill:#ffc2b0;}.cls-15{fill:#88bdeb;}.cls-16{fill:#283d75;}.cls-17{opacity:0.46;}.cls-18{fill:#513554;}.cls-19{fill:#fcfeff;}.cls-20{fill:#dbefff;}.cls-21{fill:#715154;}.cls-22{fill:#dcefff;}.cls-23{fill:#21275e;}.cls-24{fill:#d0e7f4;}.cls-25{fill:#ea8a6c;}.cls-27{fill:#e1eaf4;}.cls-28{fill:#d84177;}.cls-29{fill:#a7d1e8;}.cls-30{fill:#ffe47c;}.cls-31{opacity:0.51;}.cls-32{fill:#5986ff;}.cls-33{fill:#dea749;}.cls-34{fill:#324d94;}.cls-35{fill:#ff619a;}.cls-36{fill:#ef487c;}.cls-37{fill:#50dec6;}.cls-38{fill:#45bfab;}.cls-39{fill:#8585ff;}.cls-40{fill:#36475c;}.cls-41{opacity:0.43;}.cls-42{fill:#4264bf;}.cls-43{fill:#715255;}.cls-44{fill:#e9e9ff;}.cls-45{fill:#a1a1e5;}.cls-46{fill:#565682;}.cls-47{fill:#6b6b9b;}.cls-48{fill:#45446c;}.cls-49{fill:#5366c4;}.cls-50{fill:#97cbff;}.cls-51{fill:#514677;}.cls-52{fill:#423a66;}.cls-53{fill:#bc4073;}

/* BACKGROUND SVG */
.b-cls-1,.b-cls-4{fill:#6961ff;}.b-cls-1,.b-cls-3{stroke:#000;}.b-cls-1,.b-cls-2,.b-cls-3,.b-cls-4{stroke-miterlimit:10;}.b-cls-2,.b-cls-3{fill:#d1cffc;}.b-cls-2,.b-cls-4{stroke:#d1cffc;}

/* BACKGROUND V2.0  */
.bg-cls-1{fill:#d1cffc;}.bg-cls-2{fill:#6961ff;}

/* DONT DELETE!! THIS IS BACKGROUND SVG FOR HEADER */
/* .bg-svg{
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0%;
  left: 0%;
} */

/* .section {
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  min-height: 95vh;
} */

.header-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 90vh;

  /* THIS MIGHT BE RELEVANT TO SVG HEADER */
  /* position: relative;
  z-index: 1; */
}

.text-container {
  display: flex;
  align-items: center;
}

.header-text-title {
  font-size: var(--font-size9);
  font-weight: var(--font-weight1);
  line-height: var(--size7);
}

.header-text-paragraph {
    font-size: var(--font-size4);
    color: var(--cool-gray1);
    padding: var(--size5) 0;
    display: flex;
    justify-content: center;
}

.header-text-button:first-of-type {
  color: var(--secondary-text);
}

.header-image {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--size1) 0;
}

svg {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

/* MEDIA */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>