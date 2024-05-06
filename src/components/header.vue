<template>
  <header>
    <nav class="nav">
      <ul>
        <li><NuxtLink class="nav-default" active-class="nav-active" to="/">Latest Trends</NuxtLink></li>
        <li><button class="nav-default" @click="showMenu" >Explore Section</button></li>
        <li>
          <div :style="{ display: (isActive ? 'block' : 'none')}" class="absolute">

            conditional rendering
          </div>
        </li>
      </ul>
    </nav>
   
  </header>
</template>
<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const showMenu = () => isActive.value = !isActive.value

 
</script>
<style>
.nav > ul> li {
  @apply inline-block;
}
.nav > ul {
  @apply inline-block;
}

.nav {
/* center nav childs */
  @apply flex justify-center;
}

.nav-default {

}

</style>