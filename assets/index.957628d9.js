import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.34bc3412.js";
import { y as defineComponent, a as useUserSession, a6 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.420249be.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import "./ModalOptions.77d0f432.js";
import "./VModal.ba9a13a9.js";
import "./PlanGratuito.b1ccd312.js";
import "./rutinas.94460818.js";
import "./VInput.8bd6418e.js";
import "./VLabel.82cb8353.js";
import "./VControl.fa82c9c6.js";
import "./VOption.54ccc991.js";
import "./index.1fbd2b5e.js";
import "./main.981fd68f.js";
import "./config.3d78ff49.js";
import "./fechas.a424fa09.js";
import "./VField.20e6a090.js";
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
