import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.7bbae714.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.bc4d92f5.js"), true ? ["assets/multiselect.bc4d92f5.js","assets/index.7bbae714.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.65e7c76c.js"), true ? ["assets/slider.65e7c76c.js","assets/index.7bbae714.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
