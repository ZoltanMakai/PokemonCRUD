<template>
  <div :class="{ 'ml-48': drawerOpen }">
    <div>About</div>
  </div>
</template>

<script setup>
const { drawerOpen } = inject("drawer");
</script>
