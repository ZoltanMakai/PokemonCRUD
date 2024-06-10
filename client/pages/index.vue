<template>
  <div>
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
  </div>
</template>

<script setup>
import API from "../src/api";
const { drawerOpen } = inject("drawer");

const pokemons = ref([]);
const { notify } = useNotification();
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  try {
    pokemons.value = await API.getAllPokemons();

    const message = route.query.message;
    if (message) {
      notify(message);
    }
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
});
</script>
