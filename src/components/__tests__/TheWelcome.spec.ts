import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { mount } from "@vue/test-utils";
import TheWelcome from "../TheWelcome.vue";

describe("The Welcome", () => {
  it("renders properly", () => {
    const wrapper = mount(TheWelcome, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(wrapper.text()).toContain("Pinia");
  });
});
