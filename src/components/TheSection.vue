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
    padding: var(--size7) 0;
  }

  .container {
    padding-left: var(--size4);
    padding-right: var(--size4);
    height: 100%;
  }
</style>