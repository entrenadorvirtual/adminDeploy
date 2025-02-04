import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.a70cc630.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.72b1b18e.js"), true ? ["assets/multiselect.72b1b18e.js","assets/index.a70cc630.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.e808df87.js"), true ? ["assets/slider.e808df87.js","assets/index.a70cc630.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
