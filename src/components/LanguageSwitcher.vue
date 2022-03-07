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
      class="unselectable-text"
      p="10px"
      w="auto"
      border="none"
      bg="transparent"
      cursor="pointer"
      text="center"
      display="flex"
      align="items-center"
      hover:bg="black/10"
      dark:hover:bg="white/10"
      hover:transition="all duration-500 ease-out"
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
      pos="absolute"
      bg="gray-200"
      dark:bg="gray-800"
      w="100px"
      shadow="lg black/20"
      dark:shadow="white/20"
    >
      <button
        v-for="lang in availableLocales.slice().reverse()"
        :key="lang"
        class="unselectable-text"
        text="left"
        border="solid b-1 b-black/10"
        dark:border="b-white/10"
        last:border="none"
        bg="gray-200"
        dark:bg="gray-800"
        cursor="pointer"
        w="full"
        p="x-10px y-12px"
        hover:bg="black/10"
        dark:hover:bg="white/10"
        hover:transition="all duration-500 ease-out"
        @click.capture="selectLanguage(lang)"
      >
        <Paragraph :class="{ 'current-language': currentLocale === lang }" cursor="pointer" p="l-5px" font="600">
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
