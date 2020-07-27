<template>
            <div class="contact-form-container">
                <form name="contact-form" v-bind:class="[loading ? 'hideAnimate' : '']" @submit.prevent="sendEmail">
                    <fieldset>
                        <div class="small-input-container">
                            <input class="small-input" type="text" name="name" placeholder="Your name">
                            <input class="small-input" type="text" name="companyName" placeholder="Company name">
                        </div>
                        <div class="small-input-container">
                            <input class="small-input" type="text" name="email" id="email" placeholder="Email">
                            <input class="small-input" type="text" name="phoneNumber" placeholder="Phone number">
                        </div>
                        <div class="text-area-container">
                            <textarea class="text-area" name="message"/>
                        </div>
                        <div class="notification" name="notification">
                            Thank you for submitting! We will get back to you shortly.
                        </div>
                        <div class="button-container">
                            <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
                <transition
                     name="spin"
                     enter-active-class="loadAnimate"
                     leave-active-class="hideAnimate">
                     <b-icon-arrow-clockwise v-bind:class="[loading ? 'loadAnimate' : 'hideAnimate']"></b-icon-arrow-clockwise>
                </transition>
            </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'ContactForm',
    components: {

    },
    data: function() {
        return {
            loading: false,
        }
    },
    methods: {
        sendEmail: (e) => {
            // v-bind: :) to :(
            console.log(e);
            e.loading = true;
            emailjs.sendForm('gmail', 'template_ZMxbSGEd', e.target, 'user_9uUk2CarKyhfbMdeVcx4V')
                .then((result) => {
                    let frm = document.getElementsByName('contact-form')[0];
                    let notification = document.getElementsByName('notification')[0];

                    frm.style.display = "none"; //removes form from container

                    //removes text after submit is pressed
                    frm.reset();
                    console.log('SUCCESS!', result.status, result.text);
                    notification.style.display = "block";

                }, (error) => {
                    console.log('FAILED...', error);
                    //here i need to put an error notification
            });
            e.loading = false;
        }
    }
}
</script>

<style scoped>
    /* containers and inside of contact form */

    .contact-form-container {
        padding: 0 var(--size3);
        background-color: var(--cool-gray5);
    }

    .small-input-container,
    .text-area-container,
    .button-container {
        margin: var(--size6) 0;
    }

    .small-input,
    .large-input,
    .text-area,
    button {
        border: none;
    }

    .small-input-container {
        display: flex;
        justify-content: space-between;
    }

    .small-input {
        width: 48%;
    }

    textarea {
        width: 100%;
        height: var(--size8);
    }
    .textarea-container{

    }

    button{
        width: 100%;
    }
    .button-container{
    }

     @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .loadAnimate{
        animation: spin 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    .hideAnimate{
        display: none !important;
    }
    /* class of notification on submit */
    .notification {
        display: none;
        margin: auto var(--size4);
        text-align: center;
        background-color: var(--cool-gray2);
        padding: var(--size2) 0;
    }
</style>