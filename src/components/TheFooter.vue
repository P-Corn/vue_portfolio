<template>
  <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
    footer{
        height: var(--size10);
        background-color: var(--cool-gray5);
        margin: 0;
    }
</style>