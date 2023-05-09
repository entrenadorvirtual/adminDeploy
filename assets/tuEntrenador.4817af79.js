import { _ as _sfc_main$2 } from "./VPlaceholderPage.fdd007d5.js";
import { _ as _sfc_main$1 } from "./ViewEntrenador.bf848ce7.js";
import { e as onValue, r as ref$1, d as database } from "./config.dae7a527.js";
import { u as useViewWrapper } from "./viewWrapper.3e84b41c.js";
import { G as GET_ENTRENADORES_VALIDOS } from "./entrenador.bd4d49ce.js";
import { g as getDatosDeportista, O as OBTENER_PLAN_DEPORTISTA } from "./deportista.f81b0247.js";
import { G as GET_SOLICITUDES_DEPORTISTA, V as VERIFICAR_MATCH } from "./match.2b9f1df2.js";
import { y as defineComponent, a as useUserSession, z as ref, ay as withAsyncContext, A as onMounted, o as openBlock, i as createElementBlock, D as unref, f as createBlock } from "./index.4254dce5.js";
import "./ModalCancelar.10d8eef4.js";
import "./VModal.03d398a2.js";
import "./VAvatar.fc27fd88.js";
import "./main.666cbe61.js";
import "./general.c2c525e5.js";
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
      onValue(
        ref$1(database, "users/" + userSession.userId + "/plan/solicitudesEnviadas"),
        (snapshot) => {
          if (snapshot.exists()) {
            contadorSolicitudes.value = snapshot.val();
          } else {
            contadorSolicitudes.value = null;
          }
        }
      );
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
