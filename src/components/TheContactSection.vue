<template>
    <TheSection>
        <div class="contact-section">
            <div class="contact-text">
                <h4>Contact Us</h4>
                <h1>We'll respond if we aren't asleep</h1>
            </div>
            <div class="contact-form-container">
                <form name="contact-form" v-bind:class="[loading ? 'hideAnimate' : '']" @submit.prevent="sendEmail">
                    <fieldset>
                        <div class="small-input-container">
                            <input type="text" name="firstName" placeholder="First Name">
                            <input type="text" name="lastName" placeholder="Last Name">
                        </div>
                        <div class="company-container">
                            <input type="text" name="company" placeholder="Company Name">
                        </div>
                        <div class="small-input-container">
                            <input type="text" name="email" id="email" placeholder="Email">
                            <input type="text" name="phoneNumber" placeholder="Phone Number(optional)">
                        </div>
                        <div class="textarea-container">
                            <textarea name="message"/>
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
        </div>
    </TheSection>
</template>

<script>
import emailjs from 'emailjs-com'
import TheSection from './TheSection.vue'

export default {
    name: 'TheContactSection',
    components: {
        TheSection,
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
    .contact-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    /* class of notification on submit */
    .notification {
        display: none;
        margin: auto var(--size4);
        text-align: center;
        background-color: var(--cool-gray2);
        padding: var(--size2) 0;
    }
    /* text section of container section */
    .contact-text {
        max-width: var(--size13);
        margin: auto 0;
    }
    .contact-text h1{
        font-weight: var(--font-weight1);
    }
    .contact-text h4 {
        font-weight: var(--font-weight0);
    }
    /* containers and inside of contact form */
    .contact-form-container {
        padding: var(--size4) var(--size0);
        background-color: var(--cool-gray4);
    }
    .small-input-container input {
        margin: var(--size4);
    }
    /* Company part of container */
    .company-container{
        margin: var(--size2) var(--size4);
    }
    .company-container input {
        width: 100%;
        margin: var(--size2) 0;
    }
    /* textarea part of form */
    textarea {
        width: 100%;
        height: var(--size8);
    }
    .textarea-container{
        margin: var(--size4) var(--size4);
    }

    button{
        width: 100%;
        margin: var(--size4) 0;
    }
    .button-container{
        margin: 0 var(--size4);
    }
</style>