<template>
    <main>
        <HomeServices />
        <HomePortfolio />
        <TheContactSection />
        <TheFooter />
    </main>
</template>

<script>
import HomePortfolio from './HomePortfolio.vue'
import HomeServices from './HomeServices.vue'
import TheContactSection from '@/components/TheContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomePage',
  components: {
      HomePortfolio,
      HomeServices,
      TheContactSection,
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