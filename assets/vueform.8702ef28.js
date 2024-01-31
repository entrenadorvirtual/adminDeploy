import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.b73b5b5a.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.7bbcd0d8.js"), true ? ["assets/multiselect.7bbcd0d8.js","assets/index.b73b5b5a.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.d6b26ac4.js"), true ? ["assets/slider.d6b26ac4.js","assets/index.b73b5b5a.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
