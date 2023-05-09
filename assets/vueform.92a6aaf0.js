import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.4254dce5.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.ff7b1bcc.js"), true ? ["assets/multiselect.ff7b1bcc.js","assets/index.4254dce5.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.59ea4d66.js"), true ? ["assets/slider.59ea4d66.js","assets/index.4254dce5.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
