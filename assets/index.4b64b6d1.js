import { _ as _sfc_main$1 } from "./SemanaComodin.8417f31b.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.5117c21f.js";
import "./ModalOptions.d01294f5.js";
import "./VModal.61ebb5be.js";
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