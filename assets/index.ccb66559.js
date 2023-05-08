import { _ as _sfc_main$1 } from "./SemanaComodin.bd9b2205.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.695461b3.js";
import "./ModalOptions.5fb65b8b.js";
import "./VModal.7c444508.js";
import "./rutinas.3c679119.js";
import "./VInput.03d7c4f0.js";
import "./VLabel.1dcb2a03.js";
import "./VControl.fa8e3192.js";
import "./VOption.026578aa.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.666cbe61.js";
import "./config.dae7a527.js";
import "./fechas.a424fa09.js";
import "./VField.60664af0.js";
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
