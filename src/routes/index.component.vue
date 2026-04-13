<script setup lang="ts">
import { useLoaderData, useRouter } from '@tanstack/vue-router'
import { updateCount } from './index'

const router = useRouter()
const state = useLoaderData({ from: '/' }) as number

</script>

<template>
  <button @click="() => updateCount({ data: 1 }).then(() => {
      router.invalidate()
    })">
    Add 1 to {{ state }}?
  </button>
</template>
