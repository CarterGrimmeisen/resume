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
      <SubTitle hover:dark:text="blue-300" hover:text="blue-800">
        <a :href="t(`projects[${index - 1}].github`)" print:text="!no-underline" style="text-decoration: underline" target="_blank">
          {{ t(`projects[${index - 1}].name`) }}
        </a>
      </SubTitle>
      <SubTitle>
        <a :href="t(`projects[${index - 1}].github`)" print:display="hidden" target="_blank">
          <bi-github dark:text="white" m="l-1" text="black" />
        </a>
        <a :href="t(`projects[${index - 1}].npm`)" m="l-1" print:display="hidden" target="_blank">
          <simple-icons-npm dark:text="white" m="l-1" text="black" />
        </a>

        <p display="hidden" font="normal tracking-normal" print:display="block" text="paragraph black normal-case">
          {{ t(`projects[${index - 1}].npm`) }}
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
