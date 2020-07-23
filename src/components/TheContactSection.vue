<template>
    <TheSection>
        <div class="contact-section">
            <div class="contact-text">This part is going to be the content on the left of the Form</div>
            <div class="contact-form-container">
                <form action="#">
                    <fieldset>
                        <div>
                            <input type="text" id="firstName" value="First Name">
                            <input type="text" id="lastName" value="Last Name">
                        </div>
                        <div>
                            <input type="text" id="email" value="Email">
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </TheSection>
</template>

<script>
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
        methods: {
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
    .contact-section{
        margin: 100px 0;
        display: flex;
    }
    .contact-text{
        margin: auto 0;
    }
    .contact-form-container{
        margin: 0 auto;
    }
</style>