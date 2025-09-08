import { d as definePlugin, K as defineAsyncComponent, _ as __vitePreload } from "./index.5859d3e2.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.1419fa47.js"), true ? ["assets/multiselect.1419fa47.js","assets/index.5859d3e2.js","assets/index.29428edd.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.23b5a461.js"), true ? ["assets/slider.23b5a461.js","assets/index.5859d3e2.js","assets/index.29428edd.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
