<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const experienceCount = computed(() => (messages.value as Messages)?.en?.experience?.length)
</script>

<template>
  <Title>
    {{ t('label.experience') }}
  </Title>
  <section v-for="index in experienceCount" :key="index" last:m="0" m="b-2em">
    <section align="items-center" flex="~" justify="between">
      <SubTitle p="r-45px">
        {{ t(`experience[${index - 1}].position`) }}
      </SubTitle>
      <SubTitle>
        {{ t(`experience[${index - 1}].period`) }}
      </SubTitle>
    </section>

    <Headline>
      {{ t(`experience[${index - 1}].company`) }}
    </Headline>
    <Paragraph v-html="t(`experience[${index - 1}].description`)" />
  </section>
</template>
