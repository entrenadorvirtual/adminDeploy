import { e as onValue, r as ref$1, d as database } from "./config.28ac5e58.js";
import { b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./superentrenador.0814834f.js";
import { x as defineComponent, y as ref, M as onBeforeMount, o as openBlock, g as createElementBlock, t as toDisplayString } from "./index.7277f539.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.4c182eb4.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export { _sfc_main as _, _sfc_main$1 as a };
