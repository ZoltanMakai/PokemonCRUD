<template>
  <nuxt-link :to="`/${pokemon.slug}`">
    <div
      class="bg-gray-300 border border-gray-400 rounded-lg overflow-hidden shadow-md w-64"
    >
      <img
        :src="`http://localhost:5000/${pokemon.image}`"
        alt="image"
        class="w-full h-48 object-cover"
      />
      <div class="px-4 py-2">
        <h2 class="text-xl font-semibold text-center text-gray-800">
          {{ pokemon.name }}
        </h2>
        <p class="text-base text-center text-gray-600">{{ pokemon.type }}</p>
        <div class="mt-4">
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">HP</span>
            <span class="text-sm font-semibold text-gray-800">{{
              pokemon.hp
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">Attack</span>
            <span class="text-sm font-semibold text-gray-800">{{
              pokemon.attack
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">Defense</span>
            <span class="text-sm font-semibold text-gray-800">{{
              pokemon.defense
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-500">Speed</span>
            <span class="text-sm font-semibold text-gray-800">{{
              pokemon.speed
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  pokemon: Object,
});
</script>
