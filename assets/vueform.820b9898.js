import { d as definePlugin, K as defineAsyncComponent, _ as __vitePreload } from "./index.7277f539.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.0643a308.js"), true ? ["assets/multiselect.0643a308.js","assets/index.7277f539.js","assets/index.29428edd.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.2b7fa7fa.js"), true ? ["assets/slider.2b7fa7fa.js","assets/index.7277f539.js","assets/index.29428edd.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
