import { V as _export_sfc, y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, v as withModifiers, $ as withDirectives, a3 as vModelText, q as createVNode, w as withCtx, ap as vModelCheckbox, F as Fragment, s as renderList, t as toDisplayString, a0 as vModelRadio, W as pushScopeId, X as popScopeId, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.5c29604d.js";
import { u as useViewWrapper } from "./viewWrapper.93f5013f.js";
import { _ as _sfc_main$3 } from "./VModal.785b6cae.js";
import { u as useNotyf } from "./useNotyf.e3af1d9e.js";
import { L as LISTAR_DOCUMENTOS_REALTIME, E as ELIMINAR_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME, C as CREAR_DOCUMENTO_REALTIME } from "./main.1a95f887.js";
import "./useThemeColors.37241be5.js";
import "./config.f3c9bc1b.js";
var CodigosDescuento_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-288409da"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "contenedor" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "input-group" };
const _hoisted_4 = { style: { "width": "50%" } };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "codigoDescuento" }, "C\xF3digo de descuento:", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "porcentajeDescuento" }, "Porcentaje de descuento (%):", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "usosDisponibles" }, "Usos disponibles:", -1));
const _hoisted_8 = { style: { "width": "50%" } };
const _hoisted_9 = { style: { "margin-bottom": "10px" } };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fechaInicio" }, "Fecha inicio:", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fechaFin" }, "Fecha fin:", -1));
const _hoisted_12 = { class: "button-container" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Guardar c\xF3digo ");
const _hoisted_14 = { style: { "display": "flex", "align-items": "center", "gap": "10px" } };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "usoUnico" }, "\xBFEs de un solo uso?", -1));
const _hoisted_16 = { class: "pollito" };
const _hoisted_17 = { class: "pollitoHijo" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "C\xF3digo"),
    /* @__PURE__ */ createBaseVNode("th", null, "Descuento"),
    /* @__PURE__ */ createBaseVNode("th", null, "Usos"),
    /* @__PURE__ */ createBaseVNode("th", null, "\xDAnico"),
    /* @__PURE__ */ createBaseVNode("th", null, "Inicio"),
    /* @__PURE__ */ createBaseVNode("th", null, "Fin"),
    /* @__PURE__ */ createBaseVNode("th", null, "Activo"),
    /* @__PURE__ */ createBaseVNode("th", null, "Editar"),
    /* @__PURE__ */ createBaseVNode("th", null, "Eliminar")
  ])
], -1));
const _hoisted_19 = ["onUpdate:modelValue"];
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Editar");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Eliminar");
const _hoisted_22 = ["onSubmit"];
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "porcentajeDescuento" }, "Porcentaje de descuento (%):", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "usosDisponibles" }, "Usos disponibles:", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "usoUnico" }, "\xBFEs de un solo uso?", -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fechaInicio" }, "Fecha inicio:", -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fechaFin" }, "Fecha fin:", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", null, "Disponibilidad:", -1));
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" Activo ");
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Inactivo ");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Confirmar");
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "\xBFEst\xE1 seguro que desea eliminar el c\xF3digo?", -1));
const _hoisted_33 = /* @__PURE__ */ createTextVNode(" Confirmar ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const confirmOpen = ref(false);
    const planEliminar = ref("");
    const codigos = ref([]);
    const centeredActionsOpen = ref(false);
    const codigoDescuento = ref("");
    const notif = useNotyf();
    const codigoEditado = ref(null);
    const rutaDocumento = "CodigosDescuento";
    const datosCrear = ref({
      id: "",
      porcentajeDescuento: 0,
      usosDisponibles: 1,
      usoUnico: false,
      fechaInicio: "",
      fechaFin: "",
      disponibilidad: true
    });
    onMounted(async () => {
      try {
        const datos = await LISTAR_DOCUMENTOS_REALTIME(rutaDocumento);
        codigos.value = datos;
      } catch (error) {
        console.error("Error al listar c\xF3digos:", error);
      }
    });
    function mostrarInfo1(id) {
      confirmOpen.value = true;
      planEliminar.value = id;
    }
    function abrirVModal(codigo) {
      datosCrear.value = { ...codigo };
      codigoEditado.value = codigo;
      centeredActionsOpen.value = true;
    }
    async function eliminarPlan(id) {
      try {
        await ELIMINAR_DOCUMENTO_REALTIME(rutaDocumento, id);
        notif.success(`C\xF3digo "${id}" eliminado correctamente.`);
        codigos.value = codigos.value.filter((c) => c.id !== id);
      } catch (error) {
        notif.error("Error al eliminar el c\xF3digo");
      }
    }
    async function crearDocumento() {
      try {
        const id = codigoDescuento.value;
        const data = { ...datosCrear.value };
        const datos = await LISTAR_DOCUMENTOS_REALTIME(rutaDocumento);
        const ids = datos.map((c) => c.id);
        if (!codigoEditado.value && ids.includes(id)) {
          notif.error(`El c\xF3digo "${id}" ya existe.`);
          return;
        }
        if (codigoEditado.value) {
          await ACTUALIZAR_DOCUMENTO_REALTIME(rutaDocumento, codigoEditado.value.id, data);
          notif.success(`C\xF3digo "${codigoEditado.value.id}" actualizado.`);
          const index = datos.findIndex((c) => {
            var _a;
            return c.id === ((_a = codigoEditado.value) == null ? void 0 : _a.id);
          });
          if (index !== -1)
            datos[index] = { id: codigoEditado.value.id, ...data };
        } else {
          await CREAR_DOCUMENTO_REALTIME(rutaDocumento, id, data);
          notif.success(`C\xF3digo "${id}" creado.`);
          datos.push({ id, ...data });
        }
        codigos.value = datos;
        datosCrear.value = {
          id: "",
          porcentajeDescuento: 0,
          usosDisponibles: 1,
          usoUnico: false,
          fechaInicio: "",
          fechaFin: "",
          disponibilidad: true
        };
        codigoEditado.value = null;
        centeredActionsOpen.value = false;
        codigoDescuento.value = "";
      } catch (error) {
        console.error("Error al crear/actualizar el c\xF3digo:", error);
        notif.error("Ocurri\xF3 un error");
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
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => codigoDescuento.value = $event),
                  type: "text",
                  required: "",
                  placeholder: "Ej. COD2024"
                }, null, 512), [
                  [vModelText, codigoDescuento.value]
                ]),
                _hoisted_6,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosCrear.value.porcentajeDescuento = $event),
                  type: "number",
                  required: "",
                  min: "1",
                  max: "100"
                }, null, 512), [
                  [vModelText, datosCrear.value.porcentajeDescuento]
                ]),
                _hoisted_7,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosCrear.value.usosDisponibles = $event),
                  type: "number",
                  required: "",
                  min: "1"
                }, null, 512), [
                  [vModelText, datosCrear.value.usosDisponibles]
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  _hoisted_10,
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosCrear.value.fechaInicio = $event),
                    type: "date",
                    required: ""
                  }, null, 512), [
                    [vModelText, datosCrear.value.fechaInicio]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_11,
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosCrear.value.fechaFin = $event),
                    type: "date",
                    required: ""
                  }, null, 512), [
                    [vModelText, datosCrear.value.fechaFin]
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_VButton, {
                style: { "width": "120px" },
                class: "styled-button",
                color: "success",
                type: "submit"
              }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_14, [
                _hoisted_15,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosCrear.value.usoUnico = $event),
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, datosCrear.value.usoUnico]
                ])
              ])
            ])
          ], 40, _hoisted_2)
        ]),
        createBaseVNode("div", _hoisted_16, [
          createBaseVNode("table", _hoisted_17, [
            _hoisted_18,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(codigos.value, (codigo, index) => {
                return openBlock(), createElementBlock("tr", { key: index }, [
                  createBaseVNode("td", null, toDisplayString(codigo.id), 1),
                  createBaseVNode("td", null, toDisplayString(codigo.porcentajeDescuento) + "%", 1),
                  createBaseVNode("td", null, toDisplayString(codigo.usosDisponibles), 1),
                  createBaseVNode("td", null, toDisplayString(codigo.usoUnico ? "S\xED" : "No"), 1),
                  createBaseVNode("td", null, toDisplayString(codigo.fechaInicio), 1),
                  createBaseVNode("td", null, toDisplayString(codigo.fechaFin), 1),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => codigo.disponibilidad = $event,
                      type: "checkbox"
                    }, null, 8, _hoisted_19), [
                      [vModelCheckbox, codigo.disponibilidad]
                    ])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "warning",
                      onClick: ($event) => abrirVModal(codigo)
                    }, {
                      default: withCtx(() => [
                        _hoisted_20
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "danger",
                      onClick: ($event) => mostrarInfo1(codigo.id)
                    }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Actualizar C\xF3digo",
          noscroll: "",
          actions: "center",
          size: "small",
          onClose: _cache[13] || (_cache[13] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("form", {
              class: "styled-form",
              onSubmit: withModifiers(crearDocumento, ["prevent"])
            }, [
              _hoisted_23,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosCrear.value.porcentajeDescuento = $event),
                type: "number",
                required: "",
                min: "1",
                max: "100"
              }, null, 512), [
                [vModelText, datosCrear.value.porcentajeDescuento]
              ]),
              _hoisted_24,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosCrear.value.usosDisponibles = $event),
                type: "number",
                required: "",
                min: "1"
              }, null, 512), [
                [vModelText, datosCrear.value.usosDisponibles]
              ]),
              _hoisted_25,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosCrear.value.usoUnico = $event),
                type: "checkbox"
              }, null, 512), [
                [vModelCheckbox, datosCrear.value.usoUnico]
              ]),
              _hoisted_26,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosCrear.value.fechaInicio = $event),
                type: "date",
                required: ""
              }, null, 512), [
                [vModelText, datosCrear.value.fechaInicio]
              ]),
              _hoisted_27,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => datosCrear.value.fechaFin = $event),
                type: "date",
                required: ""
              }, null, 512), [
                [vModelText, datosCrear.value.fechaFin]
              ]),
              _hoisted_28,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => datosCrear.value.disponibilidad = $event),
                type: "radio",
                value: "true"
              }, null, 512), [
                [vModelRadio, datosCrear.value.disponibilidad]
              ]),
              _hoisted_29,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => datosCrear.value.disponibilidad = $event),
                type: "radio",
                value: "false"
              }, null, 512), [
                [vModelRadio, datosCrear.value.disponibilidad]
              ]),
              _hoisted_30
            ], 40, _hoisted_22)
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
          title: "Eliminar C\xF3digo",
          noscroll: "",
          actions: "center",
          size: "small",
          onClose: _cache[15] || (_cache[15] = ($event) => confirmOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_32
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[14] || (_cache[14] = ($event) => (eliminarPlan(planEliminar.value.toString()), confirmOpen.value = false))
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
var CodigosDescuento = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-288409da"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administracion");
    useHead({
      title: "Codigos Descuento"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(CodigosDescuento)
      ]);
    };
  }
});
export { _sfc_main as default };
