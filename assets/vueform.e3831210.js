import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.81c578a3.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.ffa37b1e.js"), true ? ["assets/multiselect.ffa37b1e.js","assets/index.81c578a3.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.8f42e6e7.js"), true ? ["assets/slider.8f42e6e7.js","assets/index.81c578a3.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
