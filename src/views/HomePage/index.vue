<template>
    <main>
        <h1 class="text-center">This is the home page!</h1>
        <HomePortfolio />
        <TheContactSection />
    </main>
</template>

<script>
import HomePortfolio from '@/components/HomePortfolio.vue'
import TheContactSection from '@/components/TheContactSection.vue'

export default {
  name: 'HomePage',
  components: {
      HomePortfolio,
      TheContactSection
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