<template>
  <div>Editor</div>
    <InputText v-model:text="title" placeholder="Title" />
        <InputText v-model:text="summary" placeholder="Summary" />
    <Editor v-model="editor" />
    <ActionButton @click="pushArticle">
        Publish
    </ActionButton>
</template>

<script setup lang="ts">

const editor = ref<any>("");
const title = ref("");
const summary = ref("");
const toast = useToast();

// push title, summary and body to the server in 'api/publish' using nuxt api


const pushArticle = async ()=> {
    console.log("tryingf to publishdss");
    await useFetch('api/publish', {
        method: 'POST',
        body: {
            title: title.value,
            summary: summary.value,
            body: editor.value
        },
        onResponse(res) {
          if(res.response.status == 200 ) { 
            toast.add({description: "Article published", title: "demo" });
          }
        }
    })
    
}


definePageMeta({
  layout: 'empty'
})
</script>