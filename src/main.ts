import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { enUS, ptBR } from "./locales";
import "./index.css";

const i18n = createI18n({
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "pt-BR": ptBR,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
