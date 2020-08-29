<template>
    <TheSection class="bg-color">
        <h2 class="section-title"><span class="section-title-span">Contact</span></h2>
        <v-row class="contact-section">
            <v-col cols="12"
            lg="5" 
            md="4"
            sm="12"
            class="contact-text">
                <h3 class="section-text-info"><v-icon>call</v-icon>555-555-5544</h3>
                <h3 class="section-text-info"><v-icon>email</v-icon>contact@apdesign.com</h3>
                <h3 class="section-text-info"><v-icon>facebook</v-icon>@apdesign</h3>
            </v-col>
            <v-col cols="12"
            lg="5"
            md="6"
            sm="12"
            class="contact-form">
                <!-- <ContactForm /> -->
                <component :is="storeState.dynamicComponent"></component>
            </v-col>
        </v-row>
    </TheSection>
</template>

<script>
import { store } from '@/store.js'
import TheSection from '@/components/TheSection.vue'
import ContactForm from '@/components/ContactForm'
import ContactFormAnimation from '@/components/ContactFormAnimation.vue'
import ContactNotificationSuccess from '@/components/ContactNotificationSuccess.vue'
import ContactNotificationError from '@/components/ContactNotificationError.vue'

export default {
    name: 'HomeContactSection',
    components: {
        TheSection,
        ContactForm,
        ContactFormAnimation,
        ContactNotificationSuccess,
        ContactNotificationError
    },
    data: function() {
        return {
            storeState: store.state
        }
    },
    created(){
        store.changeComponent('ContactForm')
    }
}
</script>

<style scoped>


    .contact-section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .contact-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contact-text h3 {
        font-weight: var(--font-weight0);
        font-size: var(--font-size5);
        margin-bottom: var(--size5);
        color: white;
    }

    .section-title {
        color: white;
        text-align: center;
        margin-bottom: var(--size6);
    }

    .section-title .section-title-span {
        text-decoration-color: white;
    }

    .section-text-info .v-icon.v-icon {
        font-size: var(--font-size8);
        padding: var(--size2);
        background-color: white;
        border-radius: 100px;
        color: var(--vuetify-blue);
        margin-right: var(--size1);
        /* box-shadow: var(--boxshadow1); */
    }

    .contact-form {
        border: 2px solid #f5f5f5;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        box-shadow: var(--boxshadow3);
        background-color: white;
    }

    /* MEDIA QUERIES */

  @media only screen and (min-width: 576px){

  }

  @media only screen and (min-width: 768px){

  }

  @media only screen and (min-width: 960px){
    .contact-section {
        flex-direction: row-reverse;
    }

    .contact-text h3 {
        font-size: var(--font-size6);
        margin-bottom: var(--size6);
    }

    .contact-text {
        /* padding: var(--size7); */
        justify-content: center;
    }

    .section-text-info .v-icon.v-icon {
        margin-right: var(--size5);
        /* box-shadow: var(--boxshadow1); */
    }
  }

  @media only screen and (min-width: 1200px){

  }
</style>