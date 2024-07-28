import { e as onValue, r as ref$1, d as database } from "./config.88550180.js";
import { b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./superentrenador.96fece18.js";
import { y as defineComponent, z as ref, N as onBeforeMount, o as openBlock, i as createElementBlock, t as toDisplayString, A as onMounted } from "./index.e9744070.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.e26d3df4.js";
import { f as formatDate } from "./general.8a94768e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const solicitudes = ref([]);
    onBeforeMount(async () => {
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            props.id ? props.id : "",
            snapshot.val()
          );
        } else {
          solicitudes.value = [];
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(solicitudes.value.length), 1);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const planesGratuitos = ref([]);
    onBeforeMount(async () => {
      planesGratuitos.value = await LISTAR_RUTINAS_GRATUITAS_ENTRENADOR(
        props.id ? props.id : ""
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(planesGratuitos.value.length), 1);
    };
  }
});
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
export { _imports_0 as _, _imports_1 as a, _sfc_main as b, _sfc_main$1 as c, _sfc_main$2 as d };
