<template>
  <!-- NavBar -->
  <div :class="{ 'ml-48': drawerOpen }">
    <nav class="bg-gray-100 shadow-xl">
      <div class="mx-auto px-4">
        <div class="flex items-center h-20">
          <button
            @click="toggleDrawer"
            class="text-gray-600 hover:ring-2 hover:ring-gray-400 hover:ring-opacity-50 rounded-full mx-3"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <NuxtLink to="/">
            <span class="text-gray-600 text-xl font-bold ml-7"
              >Application</span
            >
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
  <!-- Sidebar -->
  <transition>
    <div
      v-show="drawerOpen"
      class="fixed inset-y-0 left-0 w-48 bg-white h-full z-50 border-r border-gray-200"
    >
      <div class="border-b border-gray-200 p-4">
        <div class="flex">
          <div>
            <h3 class="text-lg font-semibold">Pokemon App</h3>
            <p class="text-sm text-gray-500">Mike PokeApp v1.0.0</p>
          </div>
        </div>
      </div>

      <div>
        <ul class="text-gray-900">
          <li v-for="(item, i) in items" :key="i">
            <NuxtLink :to="item.link">
              <div class="flex items-center mt-4 hover:bg-gray-200">
                <span v-html="item.icon"></span>
                <span class="text-sm pl-4">{{ item.title }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </transition>
  <div class="mx-auto px-4">
    <div>asdasda</div>
  </div>
</template>

<script setup>
const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};

const items = ref([
  {
    title: "Home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-3"><path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" /><path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" /></svg>`,
    link: "/",
  },
  {
    title: "Add Pokemon",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-3">  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" /></svg>`,
    link: "/add-pokemon",
  },
  {
    title: "About",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-3">  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /></svg>`,
    link: "/about",
  },
]);
</script>
