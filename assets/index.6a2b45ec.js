import { _ as _sfc_main$1 } from "./SemanaComodin.b04c9914.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.4254dce5.js";
import "./ModalOptions.41366621.js";
import "./VModal.03d398a2.js";
import "./rutinas.379fafdf.js";
import "./VInput.d3fefb7e.js";
import "./VLabel.3ba45fcc.js";
import "./VControl.d27e572e.js";
import "./VOption.bb3a8094.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.666cbe61.js";
import "./config.dae7a527.js";
import "./fechas.a424fa09.js";
import "./VField.30db8514.js";
import "./DeportesDisponibles.778c1af8.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_SemanaComodin = _sfc_main$1;
      return unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_SemanaComodin, {
        key: 0,
        opcioncrudplanes: unref(ENOpcionesCru).CREAR,
        crear: "",
        ver: "",
        editar: "",
        eliminar: ""
      }, null, 8, ["opcioncrudplanes"])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };