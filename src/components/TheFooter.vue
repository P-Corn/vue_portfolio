<template>
        <footer>
            <b-container>
                <div>
                    <h5>COMPANY NAME</h5>
                    <ul>
                        <!-- <li v-for="link in links"><router-link>{{ link.title }}</router-link></li> -->
                    </ul>
                </div>
            </b-container>
        </footer>
</template>

<script>
export default {
  name: 'TheContactSection',
}
</script>

<style scoped>
    footer{
        height: var(--size10);
        background-color: var(--cool-gray0);
        margin: 0;
    }
</style>