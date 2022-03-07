<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Title>{{ t('label.contact') }}</Title>
  <div class="contact-line">
    <bi-telephone-fill dark:text="white" />
    <Paragraph class="contact" text="underline" print:text="no-underline" hover:text="red-500" dark:hover:text="red-400">
      <a href="tel:+18607266992">
        (860) 726-6992
      </a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-envelope-fill dark:text="white" />
    <Paragraph class="contact" text="underline" print:text="no-underline" hover:text="red-500" dark:hover:text="red-400">
      <a href="mailto:cpgrimmeisen@gmail.com">
        cpgrimmeisen@gmail.com
      </a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-github dark:text="white" />
    <Paragraph class="contact" text="underline" print:text="no-underline" hover:text="red-500" dark:hover:text="red-400">
      <a href="https://github.com/CarterGrimmeisen" target="_blank">
        CarterGrimmeisen
      </a>
    </Paragraph>
  </div>
  <div class="contact-line">
    <bi-linkedin dark:text="white" />
    <Paragraph class="contact" text="underline" print:text="no-underline" hover:text="red-500" dark:hover:text="red-400">
      <a href="https://linkedin.com/in/carter-grimmeisen" target="_blank">
        carter-grimmeisen
      </a>
    </Paragraph>
  </div>
</template>

<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.contact {
  padding-left: 1em;
  margin: 0.25em;
}
</style>
