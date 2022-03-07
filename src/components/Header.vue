<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
const { t } = useI18n()

const isProduction = process.env.NODE_ENV === 'production'

const doPrint = () => {
  const html = document.querySelector('html')
  const wasDark = html?.classList.contains('dark') ?? false
  html?.classList.remove('dark')

  window.print()

  if (wasDark)
    html?.classList.add('dark')
}

const handleKey = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === 'p') {
    event.preventDefault()
    doPrint()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <section
    flex="~"
    pos="absolute"
    w="full"
    align="items-center"
    print:display="hidden"
  >
    <LanguageSwitcher v-if="!isProduction" p="10px" m="r-[-20px]" />
    <div display="inline-flex">
      <Button
        m="r-[-10px]"
        @click="doPrint"
      >
        <bi-printer-fill font="leading-0" text="18px" dark:text="white" flex="~" align="items-center" />
      </Button>
      <Button
        m="r-[-10px]"
        @click="() => toggleDark()"
      >
        <bi-sun-fill v-if="isDark" font="leading-0" text="18px white" flex="~" align="items-center" />
        <bi-moon-fill v-else font="leading-0" text="18px" flex="~" align="items-center" />
      </Button>
      <Button href="https://github.com/CarterGrimmeisen/resume">
        <bi-github font="leading-0" text="18px" dark:text="white" flex="~" align="items-center" />
      </Button>
    </div>
  </section>

  <div class="box">
    <div class="person-info">
      <Title class="person-info-name">
        Carter Grimmeisen
      </Title>
      <SubTitle class="person-info-position">
        {{ t('info.title') }}
      </SubTitle>
    </div>
    <div class="person-photo">
      <img class="person-photo-image" src="../assets/profile.jpg" />
    </div>
  </div>
</template>

<style scoped>
section {
  justify-content: start;
}
.print-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-out;
}
.person-info {
  display: flex;
  flex-direction: column;
}
.person-info-name {
  margin-bottom: 0.25em;
  font-size: 2em;
}
.person-info-position {
  margin: 0;
}
.box {
  padding: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.person-photo-image {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

@media (max-width: 10cm) {
  section {
    display: none;
  }
}

@media (max-width: 21cm) {
  section {
    justify-content: space-between !important;
  }
  .box {
    padding-top: 20px;
    flex-direction: column-reverse;
  }
  .person-info {
    align-items: center;
    justify-content: center;
  }
  .person-photo {
    padding-bottom: 20px;
  }
  .person-info-name,
  .person-info-position {
    text-align: center;
  }
  .actions-section {
    width: 100%;
    justify-content: space-between;
  }
}
@media print {
  .box {
    padding-top: 0;
    flex-direction: column-reverse;
  }
}
</style>
