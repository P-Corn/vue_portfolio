<template>
            <div class="contact-form-container">
                <v-form name="contact-form" @submit.prevent="sendEmail">
                        <v-row>
                            <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            sm="6"
                            >
                                <v-text-field
                                name="name"
                                label="Name"
                                class="small-input"
                                outlined
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            sm="6">
                                <v-text-field
                                name="companyName"
                                label="Company"
                                class="small-input"
                                
                                 outlined
                                required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <!-- <div class="small-input-container"> -->
                        <v-row>
                            <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            sm="6">
                                <v-text-field
                                    name="email"
                                    label="Email"
                                    class="small-input"
                                    
                                     outlined
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            sm="6">
                                <v-text-field
                                    name="phoneNumber"
                                    label="Phone Number"
                                    class="small-input"
                                    
                                     outlined
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <!-- </div> -->
                        <v-row class="text-area-container">
                            <v-col>
                                <v-textarea
                                name="message"
                                label="Message"
                                
                                 outlined
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row class="submit-button-container" justify="end">
                            <v-col
                            cols="auto"
                            >
                                <v-btn x-large color="white" class="header-text-button">Send message</v-btn>
                            </v-col>
                        </v-row>
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
                    store.changeComponent('ContactNotificationSuccess')

                }, (error) => {
                    console.log('FAILED...', error);
                    store.changeComponent('ContactNotificationError')
                    //need to put error notification here!
                });
        },
    },
}
</script>

<style scoped>

    .v-btn.v-btn {
        color: var(--light-btn-text);
    }


    /* MEDIA */

    @media only screen and (min-width: 576px) {

    }

    @media only screen and (min-width: 768px) {
        .contact-form-container {
            padding: 36px;
        }
    }

    @media only screen and (min-width: 992px){

    }

    @media only screen and (min-width: 1200px){

    }
</style>