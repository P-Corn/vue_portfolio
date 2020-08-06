<template>
    <div class="loading-container">
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
        ></v-progress-circular>
    </div>
</template>

<script>
export default {
    name: 'ContactFormAnimation',
}
</script>

<style scoped>
    /* .loading-container{
        height: 440px;
    } */
</style>