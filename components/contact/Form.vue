<template>
  <form
    @submit.prevent="handleFormSubmit"
    ref="form"
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
    <AtomsButton
      :disabled="submission.isBeingSubmitted"
      custom-class="flex justify-center mt-4"
      type="submit"
      :isLoading="submission.isBeingSubmitted"
      >{{ $t('contact.form.send') }}</AtomsButton
    >
    <div
      class="my-4 flex items-center justify-between rounded-sm"
      v-if="submission.submissionStatus"
    >
      <p>
        {{ submission.submissionMessage }}
      </p>
      <client-only v-if="submission.submissionStatus === 'success'">
        <Vue3Lottie
          animationLink="contact-success-animation.json"
          :height="100"
          :width="100"
        />
      </client-only>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, maxLength, helpers } from '@vuelidate/validators'

  type SubmissionStatus = null | 'success' | 'error'

  const client = useSupabaseClient()

  const form = ref()

  const submission = ref({
    isBeingSubmitted: false,
    submissionStatus: null as SubmissionStatus,
    submissionMessage: '',
  })

  const { t } = useI18n()
  const formData = ref({
    email: '',
    subject: '',
    message: '',
  })

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
      sendData()
    }
  }

  const sendData = async () => {
    submission.value.isBeingSubmitted = true
    const { data, error } = await client
      .from('form_submissions')
      .insert({ ...formData.value, seen: false })

    submission.value.isBeingSubmitted = false

    if (error) {
      submission.value.submissionStatus = 'error'
      submission.value.submissionMessage = t('contact.form.validations.error')
      return
    }

    submission.value.submissionStatus = 'success'
    submission.value.submissionMessage = t('contact.form.validations.success')
    form.value.reset()
  }
</script>

<style scoped></style>
