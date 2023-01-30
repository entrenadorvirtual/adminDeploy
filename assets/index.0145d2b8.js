import { _ as _sfc_main$4 } from "./VerPerfilDeportista.c537587a.js";
import { _ as _sfc_main$3 } from "./Calendario.d2bdc99c.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, F as Fragment, s as renderList, j as createBaseVNode, t as toDisplayString, q as createVNode, w as withCtx, l as createCommentVNode, f as createBlock, m as createTextVNode, Y as _sfc_main$2, Q as _export_sfc } from "./index.9a2a8c84.js";
import { e as onValue, r as ref$1, d as database } from "./config.165bca36.js";
import { c as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./match.bfe04cd6.js";
import "./ModalOptions.16732c8f.js";
import "./VModal.e6dd22f8.js";
import "./VField.227f0b66.js";
import "./VLabel.66fea259.js";
import "./deportista.87466242.js";
import "./general.34b73030.js";
import "./main.06195782.js";
import "./VBlock.5273de38.js";
import "./VAvatar.2fd462f4.js";
import "./rutinas.d3cdd577.js";
import "./VInput.22932c5c.js";
import "./VControl.e65ff893.js";
import "./VOption.01e07734.js";
import "./index.1fbd2b5e.js";
import "./fechas.a424fa09.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "column" };
const _hoisted_3 = { class: "column" };
const _hoisted_4 = { class: "column" };
const _hoisted_5 = { class: "column" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Ver Calendario ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Ver Perfil ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserSession();
    const solicitudes = ref([]);
    const solicitudActual = ref();
    const mostrarVerPerfilDeportista = ref(false);
    const verSolicitud = async (solicitud) => {
      solicitudActual.value = solicitud;
    };
    const verPerfil = async (solicitud) => {
      solicitudActual.value = solicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    const cerrarPerfil = () => {
      mostrarVerPerfilDeportista.value = false;
      solicitudActual.value = void 0;
    };
    onMounted(async () => {
      solicitudActual.value = void 0;
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(userStore.userId, snapshot.val()).then((result) => {
            solicitudes.value = result;
          }).catch((err) => {
            console.log(err);
          });
        } else {
          solicitudes.value = [];
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_Calendario = _sfc_main$3;
      const _component_VerPerfilDeportista = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(solicitudes.value, (solicitud) => {
            return openBlock(), createElementBlock("div", {
              key: solicitud.id,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(solicitud.nombres), 1),
              createBaseVNode("div", _hoisted_3, toDisplayString(solicitud.deporte), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(solicitud.foto || "foto"), 1),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  color: "warning",
                  onClick: () => verSolicitud(solicitud)
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_component_VButton, {
                  color: "success",
                  onClick: () => verPerfil(solicitud)
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        solicitudActual.value && !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_Calendario, {
          key: 1,
          iddeportista: solicitudActual.value.id_deportista,
          identrenador: solicitudActual.value.id_entrenador,
          onClose: _cache[0] || (_cache[0] = ($event) => solicitudActual.value = void 0)
        }, null, 8, ["iddeportista", "identrenador"])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_VerPerfilDeportista, {
          key: 2,
          aprobado: false,
          iddeportista: solicitudActual.value.id_deportista,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_SolicitudesAprobadas = _sfc_main$1;
  return openBlock(), createBlock(_component_SolicitudesAprobadas);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
