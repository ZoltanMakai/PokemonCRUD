<template>
  <div
    :class="[
      drawerOpen ? 'ml-48' : '',
      'flex justify-center items-center w-screen pt-20',
    ]"
  >
    <div
      class="bg-gray-300 border border-gray-400 rounded-lg overflow-hidden shadow-md w-96 transform scale-130"
    >
      <img
        :src="`http://localhost:5000/${pokemon.image}`"
        alt="image"
        class="w-full h-72 object-cover transform scale-130"
      />
      <div class="px-6 py-4">
        <h2
          class="text-2xl font-semibold text-center text-gray-800 transform scale-130"
        >
          {{ pokemon.name }}
        </h2>
        <p class="text-lg text-center text-gray-600 transform scale-130">
          {{ pokemon.type }}
        </p>
        <div class="mt-6">
          <div class="flex justify-between">
            <span class="text-lg text-gray-500 transform scale-130">HP</span>
            <span
              class="text-lg font-semibold text-gray-800 transform scale-130"
              >{{ pokemon.hp }}</span
            >
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-lg text-gray-500 transform scale-130"
              >Attack</span
            >
            <span
              class="text-lg font-semibold text-gray-800 transform scale-130"
              >{{ pokemon.attack }}</span
            >
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-lg text-gray-500 transform scale-130"
              >Defense</span
            >
            <span
              class="text-lg font-semibold text-gray-800 transform scale-130"
              >{{ pokemon.defense }}</span
            >
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-lg text-gray-500 transform scale-130">Speed</span>
            <span
              class="text-lg font-semibold text-gray-800 transform scale-130"
              >{{ pokemon.speed }}</span
            >
          </div>
        </div>
      </div>
      <div class="flex justify-between px-6 py-6">
        <nuxt-link :to="`/edit-pokemon/${pokemon._id}`">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-md text-lg transform scale-130"
          >
            Edit
          </button>
        </nuxt-link>
        <button
          @click="deletePokemon(pokemon._id)"
          class="bg-red-500 text-white px-4 py-2 rounded-md text-lg transform scale-130"
        >
          Delete
        </button>
      </div>
      <div
        class="absolute bottom-0 w-full text-center text-gray-500 transform scale-130"
      >
        Created at: {{ pokemon.created }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { drawerOpen } = inject("drawer");
const router = useRouter();

import API from "../src/api";

const pokemon = ref({});
const route = useRoute();

onMounted(async () => {
  try {
    const response = await API.getPokemonById(route.params.id);
    pokemon.value = response;
  } catch (error) {
    console.error("Error fetching pokemon:", error);
  }
});

const deletePokemon = async (id) => {
  try {
    await API.deletePokemon(id);
    router.push({ path: "/" });
  } catch (error) {
    console.error("Error deleting pokemon:", error);
  }
};
</script>
