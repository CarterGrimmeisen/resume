<script setup lang="ts">
const { locale, availableLocales } = useI18n()
const dropdownIsVisible = ref(false)

const currentLocale = computed(() => locale.value)

const toggleDropdown = () => dropdownIsVisible.value = !dropdownIsVisible.value
const clickOutsideDropdown = () => {
  if (dropdownIsVisible.value) toggleDropdown()
}

const selectLanguage = (lang: string) => {
  locale.value = lang
  toggleDropdown()
}

const languageNames = {
  en: 'English',
  de: 'Deutsch',
}
</script>

<template>
  <div flex="~ col">
    <button
      align="items-center"
      bg="transparent"
      border="none"
      class="unselectable-text"
      cursor="pointer"
      dark:hover:bg="white/10"
      display="flex"
      hover:bg="black/10"
      hover:transition="all duration-500 ease-out"
      p="10px"
      text="center"
      w="auto"
      @click="toggleDropdown"
    >
      <Headline p="l-5px" text="uppercase">
        {{ locale }}
      </Headline>
      <bi-chevron-down dark:text="white" m="l-2" />
    </button>
    <div
      v-if="dropdownIsVisible"
      v-click-outside="clickOutsideDropdown"
      bg="gray-200"
      dark:bg="gray-800"
      dark:shadow="white/20"
      pos="absolute"
      shadow="lg black/20"
      w="100px"
    >
      <button
        v-for="lang in availableLocales.slice().reverse()"
        :key="lang"
        bg="gray-200"
        border="solid b-1 b-black/10"
        class="unselectable-text"
        cursor="pointer"
        dark:bg="gray-800"
        dark:border="b-white/10"
        dark:hover:bg="white/10"
        hover:bg="black/10"
        hover:transition="all duration-500 ease-out"
        last:border="none"
        p="x-10px y-12px"
        text="left"
        w="full"
        @click.capture="selectLanguage(lang)"
      >
        <Paragraph :class="{ 'current-language': currentLocale === lang }" cursor="pointer" font="600" p="l-5px">
          {{ languageNames[lang as keyof typeof languageNames] }}
        </Paragraph>
      </button>
    </div>
  </div>
</template>

<style scoped>
.current-language {
  @apply text-red-500;
}
.unselectable-text {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
