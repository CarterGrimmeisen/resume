<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const certificationCount = computed(() => (messages.value as Messages)?.en?.certifications?.length)
</script>

<template>
  <Title>{{ t('label.certifications') }}</Title>

  <div v-for="index in certificationCount" :key="index" align="items-center" flex="~">
    <carbon-circle-solid dark:text="white" m="r-8px l-8px" w="8px" />
    <Paragraph class="certification" m="[0.25em]" p="l-1em">
      {{ t(`certifications[${index - 1}]`) }}
    </Paragraph>
  </div>
</template>
