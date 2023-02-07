import { _ as _sfc_main$2 } from "./VPlaceholderPage.85847fc7.js";
import { _ as _sfc_main$1 } from "./ViewEntrenador.5354127e.js";
import { e as onValue, r as ref$1, d as database } from "./config.165bca36.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import { G as GET_ENTRENADORES_VALIDOS } from "./entrenador.ed7eb998.js";
import { g as getDatosDeportista, O as OBTENER_PLAN_DEPORTISTA } from "./deportista.87466242.js";
import { G as GET_SOLICITUDES_DEPORTISTA, V as VERIFICAR_MATCH } from "./match.bfe04cd6.js";
import { y as defineComponent, a as useUserSession, z as ref, at as withAsyncContext, A as onMounted, o as openBlock, i as createElementBlock, D as unref, f as createBlock } from "./index.3437b938.js";
import "./ModalCancelar.c90469ca.js";
import "./VModal.9b3adbf3.js";
import "./VAvatar.ca051eb6.js";
import "./main.06195782.js";
import "./general.34b73030.js";
var tuEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    let __temp, __restore;
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Tu Entrenador");
    const userSession = useUserSession();
    let entrenadores = ref([]);
    let entrenador = ref({});
    let solicitudes = ref([]);
    let resMatch = ref({});
    let datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    const plan = ([__temp, __restore] = withAsyncContext(() => OBTENER_PLAN_DEPORTISTA(userSession.userId)), __temp = await __temp, __restore(), __temp);
    const contadorSolicitudes = ref();
    onMounted(async () => {
      datosDeportista.value = await getDatosDeportista(userSession.userId);
      contadorSolicitudes.value = plan.solicitudesEnviadas;
      onValue(ref$1(database, "users"), (snapshot) => {
        if (snapshot.exists()) {
          entrenadores.value = GET_ENTRENADORES_VALIDOS(snapshot.val());
        } else {
          entrenadores = null;
        }
      });
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = GET_SOLICITUDES_DEPORTISTA(userSession.userId, snapshot.val());
          resMatch.value = VERIFICAR_MATCH(userSession.userId, snapshot.val());
          if (resMatch.value.match) {
            onValue(ref$1(database, "users/" + resMatch.value.entrenador), (snapshot2) => {
              if (snapshot2.exists()) {
                entrenador.value = snapshot2.val();
                entrenador.value.id = resMatch.value.entrenador;
              } else {
                console.log("no existe");
                entrenador = null;
              }
            });
          }
        } else {
          solicitudes = null;
        }
      });
      onValue(ref$1(database, "users/" + userSession.userId + "/plan/solicitudesEnviadas"), (snapshot) => {
        if (snapshot.exists()) {
          contadorSolicitudes.value = snapshot.val();
        } else {
          contadorSolicitudes.value = null;
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_ViewEntrenador = _sfc_main$1;
      const _component_VPlaceholderPage = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(resMatch).match ? (openBlock(), createBlock(_component_ViewEntrenador, {
          key: 0,
          data: unref(entrenador)
        }, null, 8, ["data"])) : (openBlock(), createBlock(_component_VPlaceholderPage, {
          key: 1,
          title: "No tienes un entrenador.",
          subtitle: "Cuando un entrenador acepte la solicitud, sus datos se mostraran aqu\xED.",
          larger: ""
        }))
      ]);
    };
  }
});
export { _sfc_main as default };
