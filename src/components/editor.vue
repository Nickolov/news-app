<template>
  <editor-content :editor="editor"  />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps({
    modelValue: ""
})

const emit = defineEmits(['update:modelValue'])


const editor = useEditor({

  extensions: [
    StarterKit,
  ],
  content: props.modelValue,
    onUpdate: ({editor}) => {
        emit('update:modelValue', editor.getJSON())
    }
})




</script>