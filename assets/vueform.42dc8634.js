import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.420249be.js";
var vueform = definePlugin(({ app }) => {
  app.component("Multiselect", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./multiselect.c028a68c.js"), true ? ["assets/multiselect.c028a68c.js","assets/index.420249be.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
  app.component("Slider", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./slider.de93a4aa.js"), true ? ["assets/slider.de93a4aa.js","assets/index.420249be.js","assets/index.5a661602.css"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
});
export { vueform as default };
