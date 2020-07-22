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
  name: 'TheAppFooter',
}
</script>

<style scoped>
    ul{
        list-style: none;
        padding: 0;
    }
    .footer{
        height: 150px;
        background-color: var(--cool-gray4);
    }
    .footer-content{
        margin: auto 0;
    }
</style>