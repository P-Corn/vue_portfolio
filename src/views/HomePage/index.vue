<template>
    <main>
        <HomeServices />
        <HomePortfolio />
        <HomeContactSection />
        <TheFooter />
    </main>
</template>

<script>
import HomePortfolio from './HomePortfolio.vue'
import HomeServices from './HomeServices.vue'
import HomeContactSection from './HomeContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomePage',
  components: {
      HomePortfolio,
      HomeServices,
      HomeContactSection,
      TheFooter
  }
}
</script>

<style scoped>
    .hey {
        height: var(--size10);
        width: 100%;
        background-color: var(--cool-gray3);
    }
</style>