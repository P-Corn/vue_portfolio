<template>
    <div>
        <v-app-bar
        absolute
        color="white"
        >
        <v-container>
            <v-toolbar-title><router-link to="/" class="brand">{{ appTitle }}</router-link></v-toolbar-title>

            <v-spacer></v-spacer>

                <v-btn
                class="nav-link hidden-sm-and-down"
                icon
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path">
                    <v-icon>mdi-{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
        </v-container>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group>

            <v-list-item-content>
                <v-list-item-title class="title">LOGO</v-list-item-title>
                <v-spacer></v-spacer>
                <v-list-item-title class="title">THE WEBSITE DUDES!</v-list-item-title>
                <v-spacer></v-spacer>
                <v-list-item-subtitle>WE MAKES YOUR SITE REAL GUD</v-list-item-subtitle>
            </v-list-item-content>

            <v-divider></v-divider>

            <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
                <v-list-item-icon>
                <v-icon>mdi-{{ item.icon }}</v-icon>
                </v-list-item-icon>
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
        appTitle: 'Awesome App',
        drawer: false,
        menuItems: [
          { title: 'About', path: '/about', icon: 'face' },
          { title: 'Services', path: '/services', icon: 'face' },
          { title: 'Portfolio', path: '/portfolio', icon: 'wrench' }
     ]
    }
  },
}
</script>

<style scoped>
    .brand {
        color: inherit;
        text-decoration: none;
    }
    .nav-link {
        margin: 0 var(--size6);
    }
    i {
        margin: 0 var(--size2);
    }
    .container {
        height: 100%;
        max-width: 1600px;
        display: flex;
        align-items: center;
    }
</style>