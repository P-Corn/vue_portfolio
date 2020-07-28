<template>
    <div>
        <b-navbar toggleable="lg" variant="">
            <b-container>
            <b-navbar-brand>
                <router-link to="/ ">Logo</router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <router-link to="/services">Services</router-link>
                </b-nav-item>
                <b-nav-item href="#">Portfolio</b-nav-item>
                <b-nav-item href="#">Contact</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'TheNavBar',
}
</script>

<style scoped>
    .navbar {
        background-color: var(--cool-gray4);
    }
</style>