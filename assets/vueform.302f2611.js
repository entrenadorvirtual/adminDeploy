import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.aedac316.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.3b5f5817.js"), true ? ["assets/multiselect.3b5f5817.js","assets/index.aedac316.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.daa8532c.js"), true ? ["assets/slider.daa8532c.js","assets/index.aedac316.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
