<template>
    <div>
        <v-app-bar
        fixed
        color="var(--vuetify-blue)"
        elevate-on-scroll
        height="64px"
        class="navbar"
        >
            <v-container>
                <v-toolbar-title><router-link to="/" class="brand">{{ appTitle }}</router-link></v-toolbar-title>

                <v-spacer></v-spacer>

                    <v-btn
                    class="nav-link hidden-sm-and-down"
                    text
                    color="white"
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.path">              
                        {{ item.title }}
                    </v-btn>

                <v-app-bar-nav-icon color="white" class="hamburger hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
            </v-container>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        >
            <v-list
            nav
            dense
            >
                <v-list-item-group class="side-bar-group">

                    <v-list-item-content>
                        <v-list-item-title class="title">LOGO</v-list-item-title>
                    </v-list-item-content>

                    <v-divider></v-divider>

                    <v-list-item
                    class="mobile-nav-item"
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.path">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'TheNavBar',
  data(){
    return {
        appTitle: 'A/P Web Design',
        drawer: false,
        menuItems: [
          { title: 'About', path: '/about' },
          { title: 'Services', path: '/services' },
          { title: 'Portfolio', path: '/portfolio' },
          { title: 'Contact', path: '/contact' }
     ]
    }
  },
}
</script>

<style scoped>

    .navbar {
        padding: 0;
    }

    .side-bar-group {
        text-align: center;
    }

    .mobile-nav-item {
        text-transform: capitalize;
    }

    .brand {
        color: white;
        text-decoration: none;
    }

    .hamburger {
        color: white;
    }

    .nav-link {
        margin-left: var(--size7);
        color: white;
        font-size: var(--font-size2);
        font-weight: var(--font-weight-300);
        letter-spacing: .1px;
    }
    .container {
        height: 100%;
        max-width: 1300px;
        display: flex;
        align-items: center;
    }
</style>