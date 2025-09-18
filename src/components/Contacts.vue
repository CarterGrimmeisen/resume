<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Title>{{ t('label.contact') }}</Title>
  <div class="contact-line">
    <bi-telephone-fill dark:text="white" />
    <Paragraph
      class="contact"
      dark:hover:text="blue-400"
      hover:text="blue-500"
      print:text="no-underline"
      text="underline"
    >
      <a href="tel:+18607266992">(860) 726-6992</a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-envelope-fill dark:text="white" />
    <Paragraph
      class="contact"
      dark:hover:text="blue-400"
      hover:text="blue-500"
      print:text="no-underline"
      text="underline"
    >
      <a href="mailto:cpgrimmeisen@gmail.com">cpgrimmeisen@gmail.com</a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-github dark:text="white" />
    <Paragraph
      class="contact"
      dark:hover:text="blue-400"
      hover:text="blue-500"
      print:text="no-underline"
      text="underline"
    >
      <a href="https://github.com/CarterGrimmeisen" target="_blank">CarterGrimmeisen</a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-linkedin dark:text="white" />
    <Paragraph
      class="contact"
      dark:hover:text="blue-400"
      hover:text="blue-500"
      print:text="no-underline"
      text="underline"
    >
      <a href="https://linkedin.com/in/carter-grimmeisen" target="_blank">carter-grimmeisen</a>
    </Paragraph>
  </div>
</template>

<style scoped>
.contact-line {
  @apply flex my-0 mx-auto items-center;
}
.contact {
  @apply pl-1em m-[0.25em];
}
</style>
