import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.26dd64d2.js";
import { y as defineComponent, a as useUserSession, a5 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.9a2a8c84.js";
import { u as useViewWrapper } from "./viewWrapper.8bde9c63.js";
import "./ModalOptions.16732c8f.js";
import "./VModal.e6dd22f8.js";
import "./PlanGratuito.5b45c88b.js";
import "./rutinas.d3cdd577.js";
import "./VInput.22932c5c.js";
import "./VLabel.66fea259.js";
import "./VControl.e65ff893.js";
import "./VOption.01e07734.js";
import "./index.1fbd2b5e.js";
import "./main.06195782.js";
import "./config.165bca36.js";
import "./fechas.a424fa09.js";
import "./VField.227f0b66.js";
import "./DeportesDisponibles.778c1af8.js";
import "./constantes.e793b8cd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes");
    useHead({
      title: "Planes"
    });
    return (_ctx, _cache) => {
      const _component_CrudPlanesGratuitos = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_CrudPlanesGratuitos, {
          ver: "",
          editar: false,
          eliminar: false,
          iddeportista: unref(userSession).userId
        }, null, 8, ["iddeportista"])
      ]);
    };
  }
});
export { _sfc_main as default };
