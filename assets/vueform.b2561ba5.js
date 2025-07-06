import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.5c29604d.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.6c883c4b.js"), true ? ["assets/multiselect.6c883c4b.js","assets/index.5c29604d.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.7fe15148.js"), true ? ["assets/slider.7fe15148.js","assets/index.5c29604d.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
