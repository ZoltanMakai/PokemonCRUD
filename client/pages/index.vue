<template>
  <div>
    <div :class="['flex justify-center p-5', drawerOpen ? 'ml-48' : '']">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search based on name..."
        class="p-2 border rounded w-1/4 transition-margin-left duration-300 ease"
      />
    </div>

    <div
      v-if="filteredPokemons.length > 0"
      :class="[
        drawerOpen ? 'ml-48' : '',
        'flex flex-wrap gap-5 justify-start pl-5 pt-5',
      ]"
    >
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>

    <div v-else class="text-gray-500 text-xl text-center w-full pt-5">
      No match
    </div>
  </div>
</template>

<script setup>
import API from "../src/api";
const { drawerOpen } = inject("drawer");

const pokemons = ref([]);
const searchQuery = ref("");

onMounted(async () => {
  try {
    pokemons.value = await API.getAllPokemons();
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
});
const filteredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
