<template>
  <!-- layout -->
  <div class="grid grid-rows-[0fr_9fr_0fr] grid-cols-1 min-h-screen">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>