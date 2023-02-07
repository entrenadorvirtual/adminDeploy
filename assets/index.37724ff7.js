import { _ as _sfc_main$1 } from "./SemanaComodin.b68ffa4f.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.3437b938.js";
import "./ModalOptions.6cba5c68.js";
import "./VModal.9b3adbf3.js";
import "./rutinas.b7d2c94f.js";
import "./VInput.bb7a011d.js";
import "./VLabel.c9d776c3.js";
import "./VControl.c459fb91.js";
import "./VOption.1954103c.js";
import "./index.1fbd2b5e.js";
import "./main.06195782.js";
import "./config.165bca36.js";
import "./fechas.a424fa09.js";
import "./VField.40eec146.js";
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
