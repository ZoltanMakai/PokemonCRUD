<template>
  <div :class="{ 'ml-48': drawerOpen }">
    <div
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      class="pokemon-card bg-yellow-300 border border-gray-400 rounded-lg overflow-hidden shadow-md w-64"
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
  </div>
</template>

<script setup>
import API from "../src/api";

const { drawerOpen } = inject("drawer");

const pokemons = ref([]);

onMounted(async () => {
  try {
    pokemons.value = await API.getAllPokemons();
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
});
</script>
