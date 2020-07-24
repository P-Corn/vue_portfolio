<template>
    <main>
        <h1 class="text-center">This is the home page!</h1>
        <HomePortfolio />
        <HomeServices />
        <TheContactSection />
        <TheFooter />
    </main>
</template>

<script>
import HomePortfolio from './HomePortfolio.vue'
import TheContactSection from '@/components/TheContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomePage',
  components: {
      HomePortfolio,
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