<script setup lang="ts">

const { data } = await useFetch('/api/date')
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is {{data}}
    </AppAlert>
  </div>
</template>