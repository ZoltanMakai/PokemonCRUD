<template>
  <div :class="{ 'ml-48': drawerOpen }">
    <div>Add Pokemon</div>
  </div>
</template>

<script setup>
const { drawerOpen } = inject("drawer");
</script>
