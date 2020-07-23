<template>
    <TheSection>
        <div class="contact-section">
            <div class="contact-text">
                <h4>Contact Us</h4>
                <h1>We'll respond if we aren't asleep</h1>
            </div>
            <div class="contact-form-container">
                <form @submit.prevent="sendEmail">
                    <fieldset>
                        <div class="small-input-container">
                            <input type="text" id="firstName" placeholder="First Name">
                            <input type="text" id="lastName" placeholder="Last Name">
                        </div>
                        <div class="company-container">
                            <input type="text" id="company" placeholder="Company Name">
                        </div>
                        <div class="small-input-container">
                            <input type="text" id="email" placeholder="Email">
                            <input type="text" id="phoneNumber" placeholder="Phone Number">
                        </div>
                        <div class="textarea-container">
                            <textarea name="message"/>
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
// import emailjs from 'emailjs-com'
import TheSection from './TheSection.vue'

export default {
  name: 'TheContactSection',
  components: {
    TheSection,
  },
    data() {
        return {
            form: {
            email: '',
            name: '',
            food: null,
            checked: []
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
            }
        },
        created() {
            let ckeditor = document.createElement('script');
            // let emailjsFunction = document.createElement('script');
                ckeditor.setAttribute('src',"https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js");
                document.head.appendChild(ckeditor);
        },
        methods: {
        // sendEmail: (e) => {
        // emailjs.sendForm('gmail', 'template_ZMxbSGEd', e.target, 'user_9uUk2CarKyhfbMdeVcx4V')
        //     .then((result) => {
        //         console.log('SUCCESS!', result.status, result.text);
        //     }, (error) => {
        //         console.log('FAILED...', error);
        //     });
        // },
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
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