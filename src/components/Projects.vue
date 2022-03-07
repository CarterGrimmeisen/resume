<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const projectCount = computed(() => (messages.value as Messages)?.en?.projects?.length)
</script>

<template>
  <Title>
    {{ t('label.projects') }}
  </Title>
  <section v-for="index in projectCount" :key="index" m="b-1em">
    <section flex="~" align="items-center" justify="between" text="underline" print:text="no-underline">
      <SubTitle hover:text="red-800">
        <a :href="t(`projects[${index - 1}].github`)" target="_blank">
          {{ t(`projects[${index - 1}].name`) }}
        </a>
      </SubTitle>
      <SubTitle print:display="hidden">
        <a :href="t(`projects[${index - 1}].github`)" target="_blank">
          <bi-github text="black" dark:text="white" m="l-1" />
        </a>
      </SubTitle>
    </section>

    <Headline>
      Made with
      {{ t(`projects[${index - 1}].technologies`) }}
    </Headline>
    <Paragraph v-html="t(`projects[${index - 1}].description`)" />
  </section>
</template>
