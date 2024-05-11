<script setup>

const res = await useFetch('/api/storage');

</script>

<template>
  <div>
    s3 result {{res}}
  </div>
</template>