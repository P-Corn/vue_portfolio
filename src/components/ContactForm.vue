<template>
            <div class="contact-form-container">
                <v-form name="contact-form" @submit.prevent="sendEmail">
                        <div class="small-input-container">
                            <v-text-field
                                name="name"
                                label="Name"
                                class="small-input"
                                required
                            ></v-text-field>
                            <v-text-field
                                name="companyName"
                                label="Company"
                                class="small-input"
                                required
                            ></v-text-field>
                        </div>
                        <div class="small-input-container">
                            <v-text-field
                                name="email"
                                label="Email"
                                class="small-input"
                                required
                            ></v-text-field>
                            <v-text-field
                                name="phoneNumber"
                                label="Phone Number"
                                class="small-input"
                                required
                            ></v-text-field>
                        </div>
                        <div class="text-area-container">
                            <v-textarea
                                name="message"
                                label="Message"
                            ></v-textarea>
                        </div>
                        <div class="submit-button-container">
                            <v-btn rounded color="primary" type="submit" dark>Rounded Button</v-btn>
                        </div>
                </v-form>
            </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { store } from '@/store.js'

export default {
    name: 'ContactForm',
    methods: {
        sendEmail: e => {
            //changes component to animation when loading
            store.changeComponent('ContactFormAnimation')
            //sends email
            emailjs.sendForm('gmail', 'template_ZMxbSGEd', e.target, 'user_9uUk2CarKyhfbMdeVcx4V')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    store.changeComponent('ContactFormNotification')

                }, (error) => {
                    console.log('FAILED...', error);
                    //need to put error notification here!
                });
        },
    },
}
</script>

<style scoped>
    /* containers and inside of contact form */

    .small-input-container,
    .text-area-container,
    .submit-button-container {
        /* margin: var(--size2) 0; */
    }

    .small-input,
    .text-area,
    button {
        border: none;
    }

    .small-input-container {
        display: flex;
        justify-content: space-between;
    }

    .small-input {
        width: 46%;
        padding: var(--size3);
    }

    .text-area-container {
        padding: var(--size3);
    }

    .submit-button-container button{
        width: 100%;
        background-color: var(--cool-gray4);
        padding: var(--size0);
    }

    /* MEDIA */

    @media only screen and (max-width: 576px) {

        .small-input-container,
        .text-area-container,
        .submit-button-container {
            /* margin: var(--size5) 0; */
    }

        .small-input-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .small-input {
            width: 100%;
        }

        .small-input:first-of-type {
            /* margin-bottom: var(--size5) */
        }
    }

    @media only screen and (min-width: 576px) (max-width: 768px){

    }

    @media only screen and (min-width: 768px) (max-width: 992px){

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px){

    }

    @media only screen and (min-width: 1200px){

    }
</style>