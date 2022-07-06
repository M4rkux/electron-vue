import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });

  it("renders properly 2", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest 2" } });
    expect(wrapper.text()).toContain("Hello Vitest 2");
  });
});
