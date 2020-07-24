<template>
    <TheSection>
        <div class="contact-section">
            <div class="contact-text">
                <h4>Contact Us</h4>
                <h1>We'll respond if we aren't asleep</h1>
            </div>
            <div class="contact-form-container">
                <form name="contact-form" @submit.prevent="sendEmail">
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
    methods: {
        sendEmail: (e) => {
            emailjs.sendForm('gmail', 'template_ZMxbSGEd', e.target, 'user_9uUk2CarKyhfbMdeVcx4V')
                .then((result) => {
                    var frm = document.getElementsByName('contact-form')[0];
                    var notification = document.getElementsByName('notification')[0];
                    
                    frm.reset();
                    console.log('SUCCESS!', result.status, result.text);
                    notification.style.display = "block";
                    //here i needs to add a notification
                }, (error) => {
                    console.log('FAILED...', error);
                    //here i need to put an error notification
                });
        }
    }
}
</script>

<style scoped>
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