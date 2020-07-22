<template>
    <footer class="footer">
        <b-container>
            <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
            </ul>
        </b-container>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: auto 0;
    }
    .footer{
        height: 120px;
        width: 100%;
        background-color: var(--cool-gray4);
    }
</style>