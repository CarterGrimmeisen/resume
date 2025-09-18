<script setup lang="ts">
import { Messages } from '../types'
const { t, messages } = useI18n()

const experienceCount = computed(() => (messages.value as Messages)?.en?.experience?.length)
const experienceDescriptionCounts = computed(() => Array.from({ length: experienceCount.value + 1 }, (_, i) => (messages.value as Messages)?.en?.experience?.[i - 1]?.description?.length))
const experienceDescriptions = computed(() => Array.from({ length: experienceCount.value + 1 }, (_, i) => Array.from({ length: experienceDescriptionCounts.value[i] }, (_, j) => t(`experience[${i - 1}].description[${j}]`))))

function experienceForIndex(index: number, prop: string) {
  return t(`experience[${index - 1}].${prop}`)
}
</script>

<template>
  <Title>
    {{ t('label.experience') }}
  </Title>
  <section v-for="index in experienceCount" :key="index" last:m="0" m="b-2em">
    <section align="items-center" flex="~" justify="between">
      <SubTitle p="r-45px">
        {{ experienceForIndex(index, 'position') }}
      </SubTitle>
      <SubTitle text="blue-500 14px uppercase right">
        {{ experienceForIndex(index, 'period') }}
      </SubTitle>
    </section>

    <Headline>
      {{ experienceForIndex(index, 'company') }}
    </Headline>
    <div class="bullets">
      <p
        v-for="(bullet, i) in experienceDescriptions[index]"
        :key="i"
        class="bullet"
        dark:text="gray-300"
        font="leading-22px"
        m="0"
        text="15px gray-800"
        v-html="'+ ' + bullet"
      />
    </div>
  </section>
</template>

<style scoped>
.bullets {
  padding-left: 15px;
}

.bullet {
  padding-right: 30px;
  text-indent: -15px;
}

@media (max-width: 25cm) {
  .bullet {
    padding-right: 0;
  }
}
</style>
