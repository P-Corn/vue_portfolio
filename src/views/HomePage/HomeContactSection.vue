<template>
    <TheSection class="bg-color">
        <b-row cols="1" cols-lg="2" class="contact-section">
            <b-col class="contact-text">
                <h4>Contact Us</h4>
                <h2>We'll respond if we aren't asleep</h2>
            </b-col>
            <b-col class="contact-form">
                <!-- <ContactForm /> -->
                <component :is="dynamicComponent" @changeComponent="changeComponent($event)" @changeComponent2="changeComponent($event)"></component>
            </b-col>
        </b-row>
    </TheSection>
</template>

<script>
import TheSection from '@/components/TheSection.vue'
import ContactForm from '@/components/ContactForm'
import ContactFormAnimation from '@/components/ContactFormAnimation.vue'
import ContactFormNotification from '@/components/ContactFormNotification.vue'

export default {
    name: 'TheContactSection',
    components: {
        TheSection,
        ContactForm,
        ContactFormAnimation,
        ContactFormNotification
    },
    data: function() {
        return {
            dynamicComponent: ContactForm
        }
    },
    methods: {
        changeComponent(value) {
            this.dynamicComponent = value;
            console.log(value);
        }
    }
}
</script>

<style scoped>

    .bg-color {
        background-color: var(--cool-gray5);
    }

    .contact-section {
        display: flex;
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
        margin-bottom: var(--size3);
    }

    .contact-text h2{
        font-weight: var(--font-weight1);
        font-size: var(--font-size42);
        margin-bottom: var(--size4);
    }

    .contact-form {
        /* max-width: var(--size14); */
    }

    .notification {
        display: none;
        margin: auto var(--size4);
        text-align: center;
        background-color: var(--cool-gray2);
        padding: var(--size2) 0;
    }

    /* MEDIA QUERIES */

    @media only screen and (max-width: 576px) {
        .contact-section {
            padding: 0 var(--size3);
        }
    }

    @media only screen and (max-width: 992px) {
  
    .contact-text h2 {
        font-size: var(--font-size8);
    }
    .contact-text h4 {
        font-size: var(--font-size6);
    }
    }

    @media only screen and (min-width: 1200px) {
    .contact-section {
        display: flex;
        justify-content: space-around;
    }
    .contact-form {
        max-width: var(--size14);
    }
}
</style>