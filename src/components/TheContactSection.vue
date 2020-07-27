<template>
    <TheSection class="bg-color">
        <div class="contact-section">
            <div class="contact-text">
                <h4>Contact Us</h4>
                <h2>We'll respond if we aren't asleep</h2>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    </TheSection>
</template>

<script>
import TheSection from './TheSection.vue'
import ContactForm from './ContactForm'

export default {
    name: 'TheContactSection',
    components: {
        TheSection,
        ContactForm
    },
    data: function() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

    .bg-color {
        background-color: var(--cool-gray5);
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
    .contact-text h2{
        font-weight: var(--font-weight1);
        font-size: var(--font-size8);
    }
    .contact-text h4 {
        font-weight: var(--font-weight0);
        font-size: var(--font-size6);
        margin-bottom: var(--size3);
    }
</style>