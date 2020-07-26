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
  section {
    margin: var(--size10) 0;
  }
</style>