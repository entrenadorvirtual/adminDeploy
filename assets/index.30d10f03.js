import { _ as _sfc_main$4 } from "./ModalOptions.41366621.js";
import { _ as _sfc_main$3 } from "./SemanaComodin.b04c9914.js";
import { y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, F as Fragment, s as renderList, j as createBaseVNode, t as toDisplayString, f as createBlock, w as withCtx, l as createCommentVNode, q as createVNode, m as createTextVNode, a3 as _sfc_main$2, a as useUserSession, D as unref } from "./index.4254dce5.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { l as LISTAR_RUTINAS_COMODIN, m as ELIMINAR_RUTINA_COMODIN } from "./rutinas.379fafdf.js";
import "./VModal.03d398a2.js";
import "./VOption.bb3a8094.js";
import "./VLabel.3ba45fcc.js";
import "./VControl.d27e572e.js";
import "./VInput.d3fefb7e.js";
import "./VField.30db8514.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./DeportesDisponibles.778c1af8.js";
import "./main.666cbe61.js";
import "./config.dae7a527.js";
import "./fechas.a424fa09.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "column" };
const _hoisted_3 = { class: "column" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Ver ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Editar ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Eliminar ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    ver: { type: Boolean },
    editar: { type: Boolean },
    eliminar: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const planes = ref([]);
    const planAnterior = ref();
    const opcionActual = ref(ENOpcionesCru.CREAR);
    const planEliminarId = ref("");
    const mostrarCofirmarEliminar = ref(false);
    const listarSemanasComodin = async () => {
      planes.value = await LISTAR_RUTINAS_COMODIN() || [];
    };
    const verPlan = (rutina) => {
      opcionActual.value = ENOpcionesCru.VER;
      planAnterior.value = { ...rutina };
    };
    const editarPlan = (rutina) => {
      opcionActual.value = ENOpcionesCru.EDITAR;
      planAnterior.value = { ...rutina };
    };
    const seleccionarEliminarPlan = (idRutina) => {
      planEliminarId.value = idRutina;
      mostrarCofirmarEliminar.value = true;
    };
    const eliminarPlan = async () => {
      await ELIMINAR_RUTINA_COMODIN(planEliminarId.value);
      await listarSemanasComodin();
      mostrarCofirmarEliminar.value = false;
    };
    const cerrarPlan = () => {
      opcionActual.value = ENOpcionesCru.VER;
      planAnterior.value = void 0;
    };
    const planActualizado = async () => {
      planAnterior.value = void 0;
      await listarSemanasComodin();
    };
    onMounted(() => {
      listarSemanasComodin();
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_SemanaComodin = _sfc_main$3;
      const _component_ModalOptions = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        !planAnterior.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(planes.value, (rutina, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("h5", null, toDisplayString(rutina.deporte_rutina), 1),
                createBaseVNode("p", null, "vam " + toDisplayString(rutina.vam), 1)
              ]),
              createBaseVNode("div", _hoisted_3, [
                props.ver ? (openBlock(), createBlock(_component_VButton, {
                  key: 0,
                  color: "warning",
                  onClick: () => verPlan(rutina)
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                props.editar ? (openBlock(), createBlock(_component_VButton, {
                  key: 1,
                  color: "success",
                  onClick: () => editarPlan(rutina)
                }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                props.eliminar ? (openBlock(), createBlock(_component_VButton, {
                  key: 2,
                  color: "danger",
                  onClick: ($event) => seleccionarEliminarPlan(rutina.id)
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createBlock(_component_SemanaComodin, {
          key: 1,
          opcioncrudplanes: opcionActual.value,
          crear: false,
          ver: props.ver,
          editar: props.editar,
          eliminar: props.eliminar,
          plananterior: planAnterior.value,
          onCancelar: cerrarPlan,
          onActualizarComodin: planActualizado
        }, null, 8, ["opcioncrudplanes", "ver", "editar", "eliminar", "plananterior"])),
        createVNode(_component_ModalOptions, {
          title: "Confirmaci\xF3n",
          subtitle: "Desea Eliminar este plan",
          mostrar: mostrarCofirmarEliminar.value,
          classconfirm: "danger",
          "confirm-msm": "Eliminar Plan",
          onAceptar: eliminarPlan,
          onCancelar: _cache[0] || (_cache[0] = ($event) => mostrarCofirmarEliminar.value = false)
        }, null, 8, ["mostrar"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_ListadoRutinasComodin = _sfc_main$1;
      return unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_ListadoRutinasComodin, {
        key: 0,
        ver: "",
        editar: "",
        eliminar: ""
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
