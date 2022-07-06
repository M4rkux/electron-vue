import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";
import { createI18n } from "vue-i18n";
import { enUS, ptBR } from "@/locales";

const i18n = createI18n({
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "pt-BR": ptBR,
  },
});

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [i18n],
      },
      props: { msg: "Hello Vitest" },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });

  it("renders properly 2", () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [i18n],
      },
      props: { msg: "Hello Vitest 2" },
    });
    expect(wrapper.text()).toContain("Hello Vitest 2");
  });
});
