import { _ as _sfc_main$4 } from "./VerPerfilDeportista.ca555812.js";
import { _ as _sfc_main$3 } from "./Calendario.467576ba.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, F as Fragment, s as renderList, j as createBaseVNode, t as toDisplayString, q as createVNode, w as withCtx, l as createCommentVNode, f as createBlock, m as createTextVNode, Z as _sfc_main$2, R as _export_sfc } from "./index.420249be.js";
import { e as onValue, r as ref$1, d as database } from "./config.3d78ff49.js";
import { c as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./match.a9331782.js";
import "./ModalOptions.77d0f432.js";
import "./VModal.ba9a13a9.js";
import "./VField.20e6a090.js";
import "./VLabel.82cb8353.js";
import "./deportista.d647ed5b.js";
import "./general.b8dca58f.js";
import "./main.981fd68f.js";
import "./VBlock.68f81a1f.js";
import "./VAvatar.3dbb7ab0.js";
import "./rutinas.94460818.js";
import "./VInput.8bd6418e.js";
import "./VControl.fa82c9c6.js";
import "./VOption.54ccc991.js";
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
