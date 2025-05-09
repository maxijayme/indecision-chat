<script setup lang="ts">

interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

defineProps<Props>();

function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

</script>

<template>
  <div v-if="itsMine" class="flex justify-end">
    <div data-vtest="mine-message" class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ capitalizeFirstLetter(message) }}
    </div>
  </div>

  <div v-else class="flex">
    <div data-vtest="other-user-message" class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="Capitalize">
        {{ capitalizeFirstLetter(message) }}
      </span>
      <img data-vtest="other-user-message-image" v-if="image" :src="image" alt="yes or no image" class="w-52 h-52 pbject-cover rounded-md" />
    </div>
  </div>
</template>


<style scoped>

</style>
