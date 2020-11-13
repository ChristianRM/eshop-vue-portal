<template>
  <div class="container">
    <p class="pt-5 text-h4 font-weight-medium text-center">
      Frequently asked questions
    </p>
    <Questions class="pa-10"/>
    <p class="font-weight-medium text-center">
      If you could not find the answer to your specific question try contacting us
      via email.
    </p>
    <ContactForm class="mx-16 pa-6"/>
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
import ContactForm from "../components/ContactForm.vue";
export default {
  components: { Questions, ContactForm },
};
</script>

<style>
</style>