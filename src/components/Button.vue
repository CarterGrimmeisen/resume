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
      h="auto"
      hover:bg="black/10"
      hover:transition="all duration-500 ease-out"
      m="10px"
      p="10px"
      w="auto"
    >
      <slot />
    </button>
  </component>
</template>
