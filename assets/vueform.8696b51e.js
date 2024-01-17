import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.5157bb01.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.34b755a8.js"), true ? ["assets/multiselect.34b755a8.js","assets/index.5157bb01.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.aeb0cfab.js"), true ? ["assets/slider.aeb0cfab.js","assets/index.5157bb01.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
