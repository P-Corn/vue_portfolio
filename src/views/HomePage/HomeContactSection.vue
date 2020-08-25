<template>
    <TheSection class="bg-color">
        <v-row class="contact-section">
            <v-col cols="12"
            lg="5" 
            md="4"
            sm="12"
            class="contact-text">
                <!-- <h4 class="header-text-title">Contact Us</h4>
                <hr> -->
                <h2>Contact us</h2>
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

    .contact-text h4 {
        font-weight: var(--font-weight0);
        font-size: var(--font-size7);
        margin-bottom: 0;
        color: white;
    }

    .contact-text h2{
        font-weight: var(--font-weight-300);
        font-size: var(--font-size8);
        color: white;
        line-height: var(--line-height-1);
    }

    hr {
        width: var(--size8);
        padding: 1px 0;
        background-color: white;
        margin-top: var(--size2);
        margin-bottom: var(--size3);
    }

    /* MEDIA QUERIES */

  @media only screen and (min-width: 576px){

  }

  @media only screen and (min-width: 768px){

  }

  @media only screen and (min-width: 960px){
    .contact-section {
        flex-direction: row;
    }

    .contact-text h4 {
        font-size: var(--font-size8);
    }

    .contact-text h2 {
        font-size: var(--font-size9);
    }
  }

  @media only screen and (min-width: 1200px){

  }
</style>