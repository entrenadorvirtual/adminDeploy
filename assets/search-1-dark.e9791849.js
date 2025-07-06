import { f as formatDate } from "./general.505a96f7.js";
import { y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, t as toDisplayString } from "./index.5c29604d.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    fecha: String
  },
  setup(__props) {
    const props = __props;
    const fecha = ref();
    onMounted(async () => {
      fecha.value = await formatDate(props.fecha ? props.fecha : "");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(fecha.value), 1);
    };
  }
});
var _imports_0 = "/assets/search-1.78685bd5.svg";
var _imports_1 = "/assets/search-1-dark.2f181a27.svg";
export { _imports_0 as _, _imports_1 as a, _sfc_main as b };
