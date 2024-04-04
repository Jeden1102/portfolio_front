<template>
  <form
    @submit.prevent="handleFormSubmit"
    class="flex w-full max-w-screen-sm flex-col"
  >
    <AtomsInput
      type="text"
      id="email"
      placeholder="name@flowbite.com"
      label="Your e-mail"
      v-model="formData.email"
      :error-msg="v$.email.$errors[0]?.$message"
      @on-value-change="v$.email.$touch"
    />
    <AtomsInput
      type="text"
      id="subject"
      placeholder="Just a question"
      label="Subject (optional)"
      v-model="formData.subject"
      :error-msg="v$.subject.$errors[0]?.$message"
      @on-value-change="v$.subject.$touch"
    />
    <AtomsTextarea
      id="message"
      placeholder="Hi! I'd like to ask for..."
      label="Message"
      :error-msg="v$.message.$errors[0]?.$message"
      v-model="formData.message"
      @on-value-change="v$.message.$touch"
    />
    <AtomsButton custom-class="flex justify-center mt-4" type="submit"
      >Send message</AtomsButton
    >
  </form>
</template>

<script setup lang="ts">
  const formData = ref({
    email: '',
    subject: '',
    message: '',
  })
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, maxLength, helpers } from '@vuelidate/validators'

  const rules = computed(() => {
    return {
      email: {
        required: helpers.withMessage('The email field is required', required),
        email: helpers.withMessage('Invalid email format', email),
      },
      subject: {
        maxLength: helpers.withMessage('Max length is 128', maxLength(128)),
      },
      message: {
        required: helpers.withMessage(
          'The message field is required',
          required,
        ),
        maxLength: helpers.withMessage('Max length is 2048', maxLength(2048)),
      },
    }
  })

  const v$ = useVuelidate(rules, formData)

  const handleFormSubmit = () => {
    v$.value.$validate()
    if (!v$.value.$error) {
      console.log('Here api request.')
    }
  }
</script>

<style scoped></style>
