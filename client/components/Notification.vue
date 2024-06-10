<template>
  <div
    v-if="visible"
    class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg flex items-center justify-between"
  >
    <span>{{ message }}</span>
    <button @click="closeNotification" class="ml-4 text-white">X</button>
  </div>
</template>

<script setup>
const { visible, closeNotification } = useNotification();

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
