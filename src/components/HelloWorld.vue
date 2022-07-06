<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const locale = ref(i18n.locale);

defineProps<{ msg: string }>();

const languages = computed(() => i18n.availableLocales);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{ $t("hello.project_created") }}
      <a target="_blank" href="https://www.electronjs.org/">Electron</a> +
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
      {{ $t("hello.whats_next") }}
    </h3>

    <div class="text-center text-black">
      <select v-model="locale">
        <option
          v-for="locale in languages"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
