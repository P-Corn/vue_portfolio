<template>
        <footer>
            <b-container>
                <div>
                    <h5>FOOTER</h5>
                    <ul>
                        <!-- <li v-for="link in links"><router-link>{{ link.title }}</router-link></li> -->
                    </ul>
                </div>
            </b-container>
        </footer>
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