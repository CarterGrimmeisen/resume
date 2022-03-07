<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <component :is="props.href ? 'a' : 'div'" :href="props.href" target="_blank">
    <button
      bg="transparent"
      border="none"
      cursor="pointer"
      w="auto"
      h="auto"
      p="10px"
      m="10px r-[-10px]"
    >
      <slot />
    </button>
  </component>
</template>
