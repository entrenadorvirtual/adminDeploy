import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.7ac0c9d2.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.e88691a0.js"), true ? ["assets/multiselect.e88691a0.js","assets/index.7ac0c9d2.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.7ebacacd.js"), true ? ["assets/slider.7ebacacd.js","assets/index.7ac0c9d2.js","assets/index.37454f14.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
