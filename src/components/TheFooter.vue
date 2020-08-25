<template>
  <v-card class="v-card-footer" height="150">
    <v-footer
      absolute
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

    .footer {
      background-color: black;
    }

    footer{
        height: 100%;
        margin: 0;
        background-color: black;
    }

    .v-card-footer {
      background-color: black;
    }

    template {
      background-color: black;
    }


</style>