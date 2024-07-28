import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.e9744070.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.38e3bc28.js"), true ? ["assets/multiselect.38e3bc28.js","assets/index.e9744070.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.f5b77678.js"), true ? ["assets/slider.f5b77678.js","assets/index.e9744070.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
