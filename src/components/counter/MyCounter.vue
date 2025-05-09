<script lang="ts" setup>
import { useCounter } from '../../composables/useCounter';

interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

// import { computed, ref } from 'vue';

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<template>
  <section>
    <h3 data-vtest="counter-label">Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button data-vtest="increment-btn" class="btn" @click="counter++">+1</button>
      <button data-vtest="decrement-btn" class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<style scoped>

</style>
