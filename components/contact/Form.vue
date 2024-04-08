<template>
  <form
    @submit.prevent="handleFormSubmit"
    class="flex w-full max-w-screen-sm flex-col"
  >
    <AtomsInput
      type="text"
      id="email"
      placeholder="name@flowbite.com"
      :label="$t('contact.form.labels.email')"
      v-model="formData.email"
      :error-msg="v$.email.$errors[0]?.$message"
      @on-value-change="v$.email.$touch"
    />
    <AtomsInput
      type="text"
      id="subject"
      :placeholder="$t('contact.form.placeholders.subject')"
      :label="$t('contact.form.labels.subject')"
      v-model="formData.subject"
      :error-msg="v$.subject.$errors[0]?.$message"
      @on-value-change="v$.subject.$touch"
    />
    <AtomsTextarea
      id="message"
      :placeholder="$t('contact.form.placeholders.message')"
      label="Message"
      :error-msg="v$.message.$errors[0]?.$message"
      v-model="formData.message"
      @on-value-change="v$.message.$touch"
    />
    <AtomsButton custom-class="flex justify-center mt-4" type="submit">{{
      $t('contact.form.send')
    }}</AtomsButton>
  </form>
</template>

<script setup lang="ts">
  const { t } = useI18n()
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
        required: helpers.withMessage(
          t('contact.form.validations.emailRequired'),
          required,
        ),
        email: helpers.withMessage(
          t('contact.form.validations.invalidEmail'),
          email,
        ),
      },
      subject: {
        maxLength: helpers.withMessage(
          t('contact.form.validations.maxLength', { length: 128 }),
          maxLength(128),
        ),
      },
      message: {
        required: helpers.withMessage(
          t('contact.form.validations.fieldRequired', { field: 'message' }),
          required,
        ),
        maxLength: helpers.withMessage(
          t('contact.form.validations.maxLength', { length: 2048 }),
          maxLength(2048),
        ),
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
