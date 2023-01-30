import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.9a2a8c84.js";
var vueform = definePlugin(({ app }) => {
  app.component("Multiselect", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./multiselect.34c305cf.js"), true ? ["assets/multiselect.34c305cf.js","assets/index.9a2a8c84.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
  app.component("Slider", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./slider.df4203ca.js"), true ? ["assets/slider.df4203ca.js","assets/index.9a2a8c84.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
});
export { vueform as default };
