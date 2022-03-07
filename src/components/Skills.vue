<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const skillCount = computed(() => (messages.value as Messages)?.en?.skills?.length)
</script>

<template>
  <Title>{{ t('label.skills') }}</Title>

  <div v-for="index in skillCount" :key="index" m="b-3">
    <Headline>
      {{ t(`skills[${index - 1}].category`) }}
    </Headline>
    <Paragraph>
      {{ t(`skills[${index - 1}].items`) }}
    </Paragraph>
  </div>
</template>
