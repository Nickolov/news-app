<template>
    <button @click="props.onClick">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    onClick: Function
});

</script>