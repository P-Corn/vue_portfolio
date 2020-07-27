<template>
    <section>
        <b-container>
          <slot></slot>
        </b-container>
    </section>
</template>

<script>
export default {
  name: 'TheSection',
}
</script>

<style scoped>
  .bg-color {
    height: 100%;
  }

  section {
    padding: var(--size7) 0;
  }
</style>