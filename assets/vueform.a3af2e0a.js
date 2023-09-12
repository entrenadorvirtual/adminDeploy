import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.0f5aa7c2.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.336fb7a7.js"), true ? ["assets/multiselect.336fb7a7.js","assets/index.0f5aa7c2.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.18614bd5.js"), true ? ["assets/slider.18614bd5.js","assets/index.0f5aa7c2.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
