import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.695461b3.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.ae791d17.js"), true ? ["assets/multiselect.ae791d17.js","assets/index.695461b3.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.f0e42cc2.js"), true ? ["assets/slider.f0e42cc2.js","assets/index.695461b3.js","assets/index.dc006aab.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
