<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const educationCount = computed(() => (messages.value as Messages)?.en?.education?.length)
</script>

<template>
  <Title>
    {{ t('label.education') }}
  </Title>
  <section v-for="index in educationCount" :key="index" last:m="b-0" m="b-2em">
    <Headline v-html="t(`education[${index - 1}].degree`)" />
    <Paragraph>
      <template v-if="t(`education[${index - 1}].completed`)">
      {{ t(`education[${index - 1}].completed`) }}
      -
      </template>
      {{ t(`education[${index - 1}].gpa`) }} GPA
    </Paragraph>
    <Paragraph>
      {{ t(`education[${index - 1}].institution`) }}
    </Paragraph>
  </section>
</template>
