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
    max-width: 1200px;
  }

  @media only screen and (max-width: 1200px){
    .container {
      padding: 0 var(--size4);
    }
  }
</style>