<template>
  <v-card class="v-card-footer" height="150">
    <v-footer
      absolute
      color="var(--vuetify-blue)"
      class="font-weight-medium footer"
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
        height: 100%;
        margin: 0;
        background-color: black;
    }


</style>