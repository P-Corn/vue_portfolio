<template>
    <TheSection>
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
    /* @keyframes spin {
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
    } */
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
        font-size: var(--font-size7);
    }
    .contact-text h4 {
        font-weight: var(--font-weight0);
    }
</style>