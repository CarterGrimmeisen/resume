<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Title>{{ t('label.profile') }}</Title>
  <Paragraph>
    {{ t('info.profile') }}
  </Paragraph>
</template>
