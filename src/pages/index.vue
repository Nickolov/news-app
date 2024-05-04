<script setup lang="ts">

const { data } = await useFetch('/api/date')

const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})
</script>

<template>
  <div>
    <div v-motion :initial="initial" :enter="enter">
      <h1 class="text-blue-500">Welcome to the homepage</h1>
    </div>
    <AppAlert>
      This is {{data}}
    </AppAlert>
  </div>
</template>