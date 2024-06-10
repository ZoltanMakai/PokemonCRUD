<template>
  <div>
    <Notification v-if="notificationMessage" :message="notificationMessage" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { notificationMessage } = useNotification();
</script>
