<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const certificationCount = computed(() => (messages.value as Messages)?.en?.certifications?.length)
</script>

<template>
  <Title>{{ t('label.certifications') }}</Title>

  <div v-for="index in certificationCount" :key="index" align="items-center" flex="~">
    <carbon-circle-solid m="r-8px l-8px" w="8px" dark:text="white" />
    <Paragraph class="certification">
      {{ t(`certifications[${index - 1}]`) }}
    </Paragraph>
  </div>
</template>

<style scoped>
.certification {
  padding-left: calc(1em - 8px);
  margin: 0.25em;
}
</style>
