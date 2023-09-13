import { d as definePlugin, L as defineAsyncComponent, _ as __vitePreload } from "./index.a7fc5dec.js";
var vueform = definePlugin(({ app }) => {
  app.component(
    "Multiselect",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./multiselect.20310e11.js"), true ? ["assets/multiselect.20310e11.js","assets/index.a7fc5dec.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => __vitePreload(() => import("./slider.840b6ec2.js"), true ? ["assets/slider.840b6ec2.js","assets/index.a7fc5dec.js","assets/index.d36e51c3.css"] : void 0).then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export { vueform as default };
