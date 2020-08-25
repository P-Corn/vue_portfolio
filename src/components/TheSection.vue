<template>
    <section>
        <v-container>
          <slot></slot>
        </v-container>
    </section>
</template>

<script>
export default {
  name: 'TheSection',
}
</script>

<style scoped>

  section {
    padding: var(--size7) var(--size2);
    display: flex;
    align-items: center;
  }

  .container {
    height: 100%;
    max-width: 1300px;
  }
</style>