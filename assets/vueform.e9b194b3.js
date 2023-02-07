import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.3437b938.js";
var vueform = definePlugin(({ app }) => {
  app.component("Multiselect", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./multiselect.07ab68bf.js"), true ? ["assets/multiselect.07ab68bf.js","assets/index.3437b938.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
  app.component("Slider", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./slider.ba49edf7.js"), true ? ["assets/slider.ba49edf7.js","assets/index.3437b938.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
});
export { vueform as default };
