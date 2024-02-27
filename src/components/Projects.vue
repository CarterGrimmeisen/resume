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
    <section align="items-center" flex="~" justify="between">
      <SubTitle hover:text="red-800" hover:dark:text="red-300">
        <a :href="t(`projects[${index - 1}].github`)" target="_blank" print:text="!no-underline" style="text-decoration: underline">
          {{ t(`projects[${index - 1}].name`) }}
        </a>
      </SubTitle>
      <SubTitle>
        <a :href="t(`projects[${index - 1}].github`)" target="_blank">
          <bi-github dark:text="white" m="l-1" print:display="hidden" text="black" />
        </a>

        <p display="hidden" font="normal tracking-normal" print:display="block" text="paragraph black normal-case">
          {{ t(`projects[${index - 1}].github`) }}
        </p>
      </SubTitle>
    </section>

    <Headline>
      Made with
      {{ t(`projects[${index - 1}].technologies`) }}
    </Headline>
    <Paragraph v-html="t(`projects[${index - 1}].description`)" />
  </section>
</template>
