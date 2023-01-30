import { _ as _sfc_main$1 } from "./PlanGratuito.5b45c88b.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, o as openBlock, f as createBlock, D as unref } from "./index.9a2a8c84.js";
import "./ModalOptions.16732c8f.js";
import "./VModal.e6dd22f8.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_PlanGratuito = _sfc_main$1;
      return openBlock(), createBlock(_component_PlanGratuito, {
        opcioncrudplanes: unref(ENOpcionesCru).CREAR,
        crear: "",
        ver: "",
        editar: "",
        eliminar: ""
      }, null, 8, ["opcioncrudplanes"]);
    };
  }
});
export { _sfc_main as default };
