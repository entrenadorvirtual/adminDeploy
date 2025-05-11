import { _ as _sfc_main$3 } from "./VModal.72068d4c.js";
import { V as _export_sfc, y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, v as withModifiers, Y as withDirectives, a1 as vModelText, q as createVNode, w as withCtx, F as Fragment, s as renderList, t as toDisplayString, ap as vModelCheckbox, Z as vModelRadio, ae as pushScopeId, af as popScopeId, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.7ac0c9d2.js";
import { u as useNotyf } from "./useNotyf.edf649d6.js";
import { e as onValue, r as ref$1, d as database } from "./config.cf3a8941.js";
import { L as LISTAR_DOCUMENTOS_REALTIME, E as ELIMINAR_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME, C as CREAR_DOCUMENTO_REALTIME } from "./main.abb91ed8.js";
import { u as useViewWrapper } from "./viewWrapper.22429616.js";
import "./useThemeColors.31c9a907.js";
var AdminPlanes_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0ee21f82"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "contenedor" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "input-group" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "nombrePersonalizado" }, "Nombre del Plan:", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "caracteresChat" }, "Caracteres Chat:", -1));
const _hoisted_6 = { class: "input-group" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "precio" }, "Precio:", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "maximoFotos" }, "M\xE1ximo Fotos:", -1));
const _hoisted_9 = { class: "input-group" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "maximoVideos" }, "M\xE1ximo Videos:", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "periodoActualizacion" }, "Periodo Actualizaci\xF3n:", -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "planificacion" }, "Planificaci\xF3n:", -1));
const _hoisted_13 = { class: "button-container" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Crear Plan");
const _hoisted_15 = { class: "pollito" };
const _hoisted_16 = { class: "pollitoHijo" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Nombre plan")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Caracteres Permitidos")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "M\xE1ximo Fotos")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "M\xE1ximo Videos")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Per\xEDodo Actualizaci\xF3n")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Planificaci\xF3n")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Precio")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Editar")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Eliminar")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Activo")
    ])
  ])
], -1));
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onUpdate:modelValue"];
const _hoisted_21 = ["onSubmit"];
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "caracteresChat" }, " Chat: Caracteres Permitidos", -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "precio" }, "Precio:", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "maximoFotos" }, "M\xE1ximo Fotos:", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "maximoVideos" }, "M\xE1ximo Videos:", -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "periodoActualizacion" }, "Periodo Actualizaci\xF3n:", -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "planificacion" }, "Planificaci\xF3n:", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "activacion" }, "Disponibilidad:", -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "disponibilidad-true" }, "Activo", -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "disponibilidad-false" }, "Inactivo", -1));
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Confirmar");
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Esta seguro que desea Eliminar El Plan", -1));
const _hoisted_33 = /* @__PURE__ */ createTextVNode("Confirm");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const deportistas = ref([]);
    const confirmOpen = ref(false);
    const planEliminar = ref("");
    const planes = ref([]);
    const centeredActionsOpen = ref(false);
    const rutaDocumento = "Planes";
    const nombrePersonalizado = ref("");
    const notif = useNotyf();
    const planEditado = ref(null);
    const datosCrear = ref({
      caracteresChat: 0,
      maximoFotos: 0,
      maximoVideos: 0,
      periodoActualizacion: 0,
      planificacion: "",
      precio: 0,
      disponibilidad: true
    });
    onMounted(async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        if (snapshot.exists()) {
          const snapshott = snapshot.val();
          Object.keys(snapshott).forEach((Deportista) => {
            const entre = snapshott[Deportista];
            if (entre.rol === "Deportista") {
              arreglo.push({
                id: Deportista,
                UserID: entre.UserID,
                nombre: entre.plan.nombre
              });
            }
          });
        }
        deportistas.value = arreglo;
      });
    });
    const validarNumeroEnteroMayorACero = (event) => {
      const input = event.target;
      let valor = input.value;
      valor = valor.replace(/,/g, "");
      const numero = Number(valor);
      if (Number.isInteger(numero) && numero > 0)
        ;
      else {
        input.value = "";
      }
    };
    const eliminarPlan = async (id) => {
      const planAsignado = deportistas.value.some((deportista) => deportista.nombre === id);
      if (planAsignado) {
        notif.error(
          `No se puede eliminar el plan "${id}" porque est\xE1 asignado a un deportista.`
        );
      } else {
        try {
          await ELIMINAR_DOCUMENTO_REALTIME(rutaDocumento, id);
          notif.success(`Plan "${id}" eliminado exitosamente.`);
          planes.value = planes.value.filter((plan) => plan.id !== id);
        } catch (error) {
          console.error("Error al eliminar el plan:", error);
          notif.error("Error al eliminar el plan.");
        }
      }
    };
    const mostrarInfo = (plan) => {
      centeredActionsOpen.value = true;
      datosCrear.value = { ...plan };
      planEditado.value = { ...plan };
    };
    const mostrarInfo1 = (id) => {
      confirmOpen.value = true;
      planEliminar.value = id;
    };
    const abrirVModal = (plan) => {
      mostrarInfo(plan);
      centeredActionsOpen.value = true;
    };
    onMounted(async () => {
      try {
        const rutaDocumentos = "Planes";
        const datos = await LISTAR_DOCUMENTOS_REALTIME(rutaDocumentos);
        planes.value = datos;
      } catch (error) {
        console.error("Error al obtener los documentos:", error);
      }
    });
    async function crearDocumento() {
      try {
        const nombre = nombrePersonalizado.value;
        const data = { ...datosCrear.value };
        const datos = await LISTAR_DOCUMENTOS_REALTIME(rutaDocumento);
        const planesExistente = datos.map((plan) => plan.id);
        if (planesExistente.includes(nombre)) {
          notif.error(`El plan "${nombre}" ya existe. Por favor, elija un nombre diferente.`);
          return;
        }
        if (planEditado.value) {
          const idDocumento = planEditado.value.id;
          await ACTUALIZAR_DOCUMENTO_REALTIME(rutaDocumento, idDocumento, data);
          notif.success(`Plan "${nombre}" actualizado exitosamente.`);
          const planIndex = datos.findIndex((plan) => plan.id === idDocumento);
          if (planIndex !== -1) {
            datos[planIndex] = { id: idDocumento, ...data };
          }
        } else {
          await CREAR_DOCUMENTO_REALTIME(rutaDocumento, nombre, data);
          notif.success(`Plan "${nombre}" creado exitosamente.`);
          datos.push({ id: nombre, ...data });
        }
        planes.value = datos;
        datosCrear.value = {
          caracteresChat: 0,
          maximoFotos: 0,
          maximoVideos: 0,
          periodoActualizacion: 0,
          planificacion: "",
          precio: 0,
          disponibilidad: true
        };
        planEditado.value = null;
        centeredActionsOpen.value = false;
        nombrePersonalizado.value = "";
      } catch (error) {
        console.error("Error al crear o actualizar el plan:", error);
        throw error;
      }
    }
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VModal = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          createBaseVNode("form", {
            class: "styled-form",
            onSubmit: withModifiers(crearDocumento, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nombrePersonalizado.value = $event),
                type: "text",
                required: "",
                placeholder: "Escribe nombre del plan"
              }, null, 512), [
                [vModelText, nombrePersonalizado.value]
              ]),
              _hoisted_5,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosCrear.value.caracteresChat = $event),
                type: "number",
                required: "",
                placeholder: "Ejemplo: 1000",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.caracteresChat]
              ]),
              createBaseVNode("div", _hoisted_6, [
                _hoisted_7,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosCrear.value.precio = $event),
                  type: "number",
                  required: "",
                  placeholder: "precio",
                  inputmode: "numeric",
                  pattern: "[0-9]*",
                  onInput: validarNumeroEnteroMayorACero
                }, null, 544), [
                  [vModelText, datosCrear.value.precio]
                ])
              ]),
              _hoisted_8,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosCrear.value.maximoFotos = $event),
                type: "number",
                inputmode: "numeric",
                pattern: "[0-9]*",
                required: "",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.maximoFotos]
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosCrear.value.maximoVideos = $event),
                type: "number",
                inputmode: "numeric",
                pattern: "[0-9]*",
                required: "",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.maximoVideos]
              ]),
              _hoisted_11,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosCrear.value.periodoActualizacion = $event),
                type: "number",
                required: "",
                placeholder: "Ejemplo: 60",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.periodoActualizacion]
              ]),
              _hoisted_12,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosCrear.value.planificacion = $event),
                type: "number",
                required: "",
                placeholder: "Planificar tu plan",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.planificacion]
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createVNode(_component_VButton, {
                class: "styled-button",
                color: "success",
                type: "submit"
              }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ])
          ], 40, _hoisted_2)
        ]),
        createBaseVNode("div", _hoisted_15, [
          createBaseVNode("table", _hoisted_16, [
            _hoisted_17,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(planes.value, (plan, index) => {
                return openBlock(), createElementBlock("tr", { key: index }, [
                  createBaseVNode("td", null, toDisplayString(plan.id), 1),
                  createBaseVNode("td", null, toDisplayString(plan.caracteresChat), 1),
                  createBaseVNode("td", null, toDisplayString(plan.maximoFotos), 1),
                  createBaseVNode("td", null, toDisplayString(plan.maximoVideos), 1),
                  createBaseVNode("td", null, toDisplayString(plan.periodoActualizacion) + " d\xEDas", 1),
                  createBaseVNode("td", null, toDisplayString(plan.planificacion), 1),
                  createBaseVNode("td", null, toDisplayString(plan.precio), 1),
                  createBaseVNode("td", null, [
                    createBaseVNode("button", {
                      class: "edit-button",
                      onClick: ($event) => abrirVModal(plan)
                    }, "Editar", 8, _hoisted_18)
                  ]),
                  createBaseVNode("td", null, [
                    createBaseVNode("button", {
                      class: "delete-button",
                      onClick: ($event) => mostrarInfo1(plan.id ? plan.id : "")
                    }, " Eliminar ", 8, _hoisted_19)
                  ]),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => plan.disponibilidad = $event,
                      type: "checkbox"
                    }, null, 8, _hoisted_20), [
                      [vModelCheckbox, plan.disponibilidad]
                    ])
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Actualizar Plan",
          noscroll: "",
          actions: "center",
          size: "small",
          onClose: _cache[15] || (_cache[15] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("form", {
              class: "styled-form",
              onSubmit: withModifiers(crearDocumento, ["prevent"])
            }, [
              _hoisted_22,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosCrear.value.caracteresChat = $event),
                type: "number",
                required: "",
                placeholder: "Ejemplo: 1000",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.caracteresChat]
              ]),
              _hoisted_23,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosCrear.value.precio = $event),
                type: "number",
                required: "",
                placeholder: "Precio",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.precio]
              ]),
              _hoisted_24,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosCrear.value.maximoFotos = $event),
                type: "number",
                required: "",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.maximoFotos]
              ]),
              _hoisted_25,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => datosCrear.value.maximoVideos = $event),
                type: "number",
                required: "",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.maximoVideos]
              ]),
              _hoisted_26,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => datosCrear.value.periodoActualizacion = $event),
                type: "number",
                required: "",
                placeholder: "Ejemplo: 60",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.periodoActualizacion]
              ]),
              _hoisted_27,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => datosCrear.value.planificacion = $event),
                type: "number",
                required: "",
                placeholder: "Planificar tu plan",
                inputmode: "numeric",
                pattern: "[0-9]*",
                onInput: validarNumeroEnteroMayorACero
              }, null, 544), [
                [vModelText, datosCrear.value.planificacion]
              ]),
              _hoisted_28,
              withDirectives(createBaseVNode("input", {
                id: "disponibilidad-true",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => datosCrear.value.disponibilidad = $event),
                type: "radio",
                name: "disponibilidad",
                value: "true",
                required: ""
              }, null, 512), [
                [vModelRadio, datosCrear.value.disponibilidad]
              ]),
              _hoisted_29,
              withDirectives(createBaseVNode("input", {
                id: "disponibilidad-false",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => datosCrear.value.disponibilidad = $event),
                type: "radio",
                name: "disponibilidad",
                value: "false",
                required: ""
              }, null, 512), [
                [vModelRadio, datosCrear.value.disponibilidad]
              ]),
              _hoisted_30
            ], 40, _hoisted_21)
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: crearDocumento
            }, {
              default: withCtx(() => [
                _hoisted_31
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_component_VModal, {
          open: confirmOpen.value,
          title: "Eliminar Plan",
          noscroll: "",
          actions: "center",
          size: "small",
          onClose: _cache[17] || (_cache[17] = ($event) => confirmOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_32
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[16] || (_cache[16] = ($event) => (eliminarPlan(planEliminar.value.toString()), confirmOpen.value = false))
            }, {
              default: withCtx(() => [
                _hoisted_33
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0ee21f82"]]);
const _sfc_main = {
  setup() {
    const pageTitle = ref("Administracion de Planes");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: pageTitle.value });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AdminPlanes = __unplugin_components_0;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_AdminPlanes)
  ]);
}
var Adminplan = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Adminplan as default };
