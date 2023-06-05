import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.9c8f3b5c.js";
import { y as defineComponent, a as useUserSession, a6 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
import "./ModalOptions.d01294f5.js";
import "./VModal.61ebb5be.js";
import "./PlanGratuito.9bbe03f6.js";
import "./rutinas.68907f7b.js";
import "./VInput.fe703cdc.js";
import "./VLabel.a843cb32.js";
import "./VControl.a2f9c194.js";
import "./VOption.f0d0ae2d.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.3bd39e21.js";
import "./config.fc5b324a.js";
import "./fechas.a424fa09.js";
import "./VField.950615c2.js";
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
