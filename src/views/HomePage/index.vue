<template>
    <main>
        <HomeHeaderSection />
        <HomeServices />
        <HomePortfolio />
        <div class="vuetify-gradient">
            <HomeContactSection />
        <TheFooter />
        </div>
    </main>
</template>

<script>
import HomeHeaderSection from './HomeHeaderSection'
import HomePortfolio from './HomePortfolio.vue'
import HomeServices from './HomeServices.vue'
import HomeContactSection from './HomeContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomePage',
  components: {
      HomeHeaderSection,
      HomePortfolio,
      HomeServices,
      HomeContactSection,
      TheFooter
  }
}
</script>

<style scoped>
    .vuetify-gradient {
        background: linear-gradient(180deg,#5cbbf6, #1867c0);
    }
</style>