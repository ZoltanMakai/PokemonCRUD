<template>
  <div
    :class="[
      drawerOpen ? 'ml-48' : '',
      'flex flex-wrap gap-5 justify-start pl-5 pt-5',
    ]"
  >
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
  <div
    v-if="isSuccess"
    class="fixed bottom-10 right-0 bg-green-500 text-white p-4 rounded-lg"
  >
    Pokémon created successfully!
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import API from "../src/api";

const { drawerOpen } = inject("drawer");
const router = useRouter();

const pokemons = ref([]);
const isSuccess = ref(false);

onMounted(async () => {
  try {
    pokemons.value = await API.getAllPokemons();
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }

  const route = router.currentRoute.value;
  if (route.query.success) {
    isSuccess.value = true;
    setTimeout(() => {
      isSuccess.value = false;
      router.replace({ query: {} });
    }, 3000);
  }
});
</script>
