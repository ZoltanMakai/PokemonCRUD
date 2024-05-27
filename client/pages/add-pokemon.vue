<template>
  <div :class="{ 'ml-48': drawerOpen }">
    <div class="max-w-md mx-auto mt-8">
      <form ref="form" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="text-gray-700 font-bold mb-2">Name</label>
          <input
            v-model="pokemon.name"
            type="text"
            id="name"
            name="name"
            class="form-input w-full"
          />
          <div v-if="showErrorMessage && !pokemon.name" class="text-red-500">
            Please fill out this field
          </div>
        </div>
        <div class="mb-4">
          <label for="type" class="text-gray-700 font-bold mb-2">Type</label>
          <input
            v-model="pokemon.type"
            type="text"
            id="type"
            name="type"
            class="form-input w-full"
          />
          <div v-if="showErrorMessage && !pokemon.type" class="text-red-500">
            Please fill out this field
          </div>
        </div>
        <div class="mb-4">
          <label for="hp" class="text-gray-700 font-bold mb-2">HP</label>
          <input
            v-model.number="pokemon.hp"
            type="number"
            id="hp"
            name="hp"
            class="form-input w-full"
          />
          <div
            v-if="showErrorMessage && (!pokemon.hp || isNaN(pokemon.hp))"
            class="text-red-500"
          >
            Please fill out this field with a number
          </div>
        </div>
        <div class="mb-4">
          <label for="attack" class="text-gray-700 font-bold mb-2"
            >Attack</label
          >
          <input
            v-model.number="pokemon.attack"
            type="number"
            id="attack"
            name="attack"
            class="form-input w-full"
          />
          <div
            v-if="
              showErrorMessage && (!pokemon.attack || isNaN(pokemon.attack))
            "
            class="text-red-500"
          >
            Please fill out this field with a number
          </div>
        </div>
        <div class="mb-4">
          <label for="defense" class="text-gray-700 font-bold mb-2"
            >Defense</label
          >
          <input
            v-model.number="pokemon.defense"
            type="number"
            id="defense"
            name="defense"
            class="form-input w-full"
          />
          <div
            v-if="
              showErrorMessage && (!pokemon.defense || isNaN(pokemon.defense))
            "
            class="text-red-500"
          >
            Please fill out this field with a number
          </div>
        </div>
        <div class="mb-4">
          <label for="speed" class="text-gray-700 font-bold mb-2">Speed</label>
          <input
            v-model.number="pokemon.speed"
            type="number"
            id="speed"
            name="speed"
            class="form-input w-full"
          />
          <div
            v-if="showErrorMessage && (!pokemon.speed || isNaN(pokemon.speed))"
            class="text-red-500"
          >
            Please fill out this field with a number
          </div>
        </div>
        <div class="mb-4">
          <label for="image" class="text-gray-700 font-bold mb-2">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            @change="handleImageUpload"
          />
          <div v-if="showErrorMessage && !pokemon.image" class="text-red-500">
            Please select an image
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Pokémon
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import API from "../src/api";

const { drawerOpen } = inject("drawer");
const router = useRouter();

const pokemon = ref({
  name: "",
  type: "",
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  image: null,
});
const showErrorMessage = ref(false);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    pokemon.value.image = file;
  }
};

const submitForm = async () => {
  showErrorMessage.value = true;
  if (
    !pokemon.value.name ||
    !pokemon.value.type ||
    !pokemon.value.hp ||
    isNaN(pokemon.value.hp) ||
    !pokemon.value.attack ||
    isNaN(pokemon.value.attack) ||
    !pokemon.value.defense ||
    isNaN(pokemon.value.defense) ||
    !pokemon.value.speed ||
    isNaN(pokemon.value.speed) ||
    !pokemon.value.image
  ) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append("name", pokemon.value.name);
    formData.append("type", pokemon.value.type);
    formData.append("hp", pokemon.value.hp);
    formData.append("attack", pokemon.value.attack);
    formData.append("defense", pokemon.value.defense);
    formData.append("speed", pokemon.value.speed);
    formData.append("image", pokemon.value.image);

    await API.addPokemon(formData);
    router.push({
      path: "/",
      query: { message: "Pokemon created successfully!" },
    });
  } catch (error) {
    console.error("Error adding Pokémon:", error);
  }
};
</script>
