import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.5117c21f.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.ed684102.js"), true ? ["assets/multiselect.ed684102.js","assets/index.5117c21f.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.61c9c431.js"), true ? ["assets/slider.61c9c431.js","assets/index.5117c21f.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
