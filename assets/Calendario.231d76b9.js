import { _ as _sfc_main$a } from "./VModal.785b6cae.js";
import { y as defineComponent, z as ref, e as computed, A as onMounted, o as openBlock, f as createBlock, w as withCtx, j as createBaseVNode, i as createElementBlock, t as toDisplayString, q as createVNode, D as unref, l as createCommentVNode, s as renderList, m as createTextVNode, F as Fragment$1, O as _sfc_main$9, aq as createApp, h as h$1, V as _export_sfc, ar as withAsyncContext, r as reactive, E as onUnmounted, W as pushScopeId, X as popScopeId } from "./index.5c29604d.js";
import { _ as __unplugin_components_1, a as __unplugin_components_0$1 } from "./BloquesDistancia.63cb0029.js";
import { _ as _sfc_main$8 } from "./VTextarea.1b74e8e4.js";
import { _ as _sfc_main$6, a as _sfc_main$7 } from "./VOption.e40e322d.js";
import { _ as _sfc_main$5 } from "./VField.f8c867a3.js";
import { a as __unplugin_components_0 } from "./VControl.383acded.js";
import { _ as _sfc_main$4 } from "./VInput.d6498d97.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, T as TIPO_MEDICION_RUTINA } from "./globales.d54e5eed.js";
import { O as OBTENER_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.1a95f887.js";
import { N as Notyf, u as useThemeColors } from "./useThemeColors.37241be5.js";
import { _ as _sfc_main$d } from "./VFlex.6ebcaf24.js";
import { _ as _sfc_main$c } from "./VTag.c6e82d9e.js";
import { _ as _sfc_main$b } from "./VFlexItem.2c1366fa.js";
import { q as __extends, t as __assign, v as __spreadArray, e as onValue, r as ref$1, d as database } from "./config.f3c9bc1b.js";
import { C as CREAR_RUTINA_PERSONALIZADA, a as CREAR_DOCUMENTO_FIRESTORE, A as ACTUALIZAR_RUTINA_PERSONALIZADA, E as ELIMINAR_RUTINA_PERSONALIZADA, b as LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR, c as LISTAR_RUTINAS_DEPORTISTA } from "./rutinas.0b8f0138.js";
import { c as compareDates } from "./general.505a96f7.js";
import { f as getDatosDeportista } from "./deportista.ce37417f.js";
const _sfc_main$3 = {};
var SesionRutinaPersonalizada_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "columns" };
const _hoisted_2$2 = { class: "column is-12" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "T\xEDtulo", -1);
const _hoisted_4$2 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_5$2 = {
  key: 0,
  class: "help has-text-danger"
};
const _hoisted_6$2 = { class: "columns" };
const _hoisted_7$2 = { class: "column" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo esfuerzo", -1);
const _hoisted_9 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_10 = { class: "column" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo medici\xF3n", -1);
const _hoisted_12 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_13 = { class: "columns" };
const _hoisted_14 = { class: "column" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Descripci\xF3n", -1);
const _hoisted_16 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_17 = {
  key: 0,
  class: "help has-text-danger"
};
const _hoisted_18 = {
  key: 1,
  class: "help has-text-danger"
};
const _hoisted_19 = { class: "column" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Objetivos", -1);
const _hoisted_21 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_22 = {
  key: 0,
  class: "help has-text-danger"
};
const _hoisted_23 = {
  key: 1,
  class: "help has-text-danger"
};
const _hoisted_24 = { key: 2 };
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Crear Rutina");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Actualizar Rutina");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Eliminar Rutina");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    deportistaId: { default: void 0 },
    opcionactual: { default: void 0 },
    isOpen: { type: Boolean, default: void 0 },
    rutinaanterior: { default: void 0 }
  },
  emits: ["close", "crear-rutina", "actualizar-rutina", "eliminar-rutina"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const dFC = ref({});
    const dZR = ref({});
    const title = ref(null);
    const isLoading = ref(false);
    const notyf = new Notyf();
    const tiposIntensidad = GET_TIPOS_INTENSIDAD_RUTINAS();
    const tiposMedicion = TIPO_MEDICION_RUTINA;
    const datosRutina = ref({
      titulo: "",
      tipo_esfuerzo: "",
      tipo_medicion: "",
      descripcion: "",
      objetivos: "",
      bloques: [],
      id: "",
      fecha: new Date(),
      id_deportista: "",
      id_entrenador: "",
      comentarios: []
    });
    const validacionCrearRutina = ref(false);
    const isValidTitle = computed(() => {
      return datosRutina.value.titulo.length > 0 && datosRutina.value.titulo.length < 20 ? true : false;
    });
    const descShort = computed(() => {
      return datosRutina.value.descripcion.length < 4 ? true : false;
    });
    const descLong = computed(() => {
      return datosRutina.value.descripcion.length > 500 ? true : false;
    });
    const objShort = computed(() => {
      return datosRutina.value.objetivos.length < 4 ? true : false;
    });
    const objLong = computed(() => {
      return datosRutina.value.objetivos.length > 500 ? true : false;
    });
    const allValid = () => {
      return isValidTitle.value && !descShort.value && !descLong.value && !objShort.value && !objLong.value ? true : false;
    };
    onMounted(async () => {
      if (props.deportistaId) {
        dFC.value = await OBTENER_DOCUMENTO_REALTIME(`users/${props.deportistaId}/zonas`);
        dZR.value = await OBTENER_DOCUMENTO_REALTIME(`users/${props.deportistaId}/ritmos`);
      }
      if (props.opcionactual === "ver" || props.opcionactual === "editar") {
        datosRutina.value = { ...props.rutinaanterior };
      } else {
        datosRutina.value.tipo_esfuerzo = tiposIntensidad[0];
        datosRutina.value.tipo_medicion = tiposMedicion[1];
        title.value.reference.focus();
      }
    });
    const agregarBloque = (bloque) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.push({ ...bloque });
    };
    const eliminarBloque = (index) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.splice(index, 1);
    };
    const cerrarRutina = () => {
      datosRutina.value.titulo = "";
      datosRutina.value.descripcion = "";
      datosRutina.value.objetivos = "";
      datosRutina.value.bloques = [];
      emits("close");
    };
    const syncValidacionCrearRutina = (valor) => {
      validacionCrearRutina.value = valor;
    };
    const crearRutina = async () => {
      if (allValid()) {
        isLoading.value = true;
        emits("crear-rutina", datosRutina.value);
        isLoading.value = false;
      } else {
        title.value.reference.focus();
        notyf.error("Completa todos los campos");
      }
    };
    const actualizarRutina = () => {
      if (allValid()) {
        isLoading.value = true;
        emits("actualizar-rutina", datosRutina.value);
        isLoading.value = false;
      } else {
        title.value.reference.focus();
        notyf.error("Completa todos los campos");
      }
    };
    const eliminarRutina = () => {
      emits("eliminar-rutina", datosRutina.value.id);
    };
    const agregarComentarioBloque = (index) => {
      var _a;
      const bloque = (_a = datosRutina.value.bloques) == null ? void 0 : _a[index];
      bloque["comentarios"] = "";
    };
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$5;
      const _component_VOption = _sfc_main$6;
      const _component_VSelect = _sfc_main$7;
      const _component_VTextarea = _sfc_main$8;
      const _component_BloquesDistancia = __unplugin_components_1;
      const _component_BloquesTiempo = __unplugin_components_0$1;
      const _component_VButton = _sfc_main$9;
      const _component_VModal = _sfc_main$a;
      return openBlock(), createBlock(_component_VModal, {
        open: props.isOpen,
        title: "Rutina personalizada",
        size: "big",
        actions: "center",
        noscroll: "",
        onClose: cerrarRutina
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              _hoisted_3$2,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_4$2, toDisplayString(datosRutina.value.titulo ? datosRutina.value.titulo : "Rutina"), 1)) : (openBlock(), createBlock(_component_VField, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, {
                    "is-valid": unref(isValidTitle),
                    "has-error": !unref(isValidTitle)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VInput, {
                        ref_key: "title",
                        ref: title,
                        modelValue: datosRutina.value.titulo,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosRutina.value.titulo = $event),
                        class: "is-rounded",
                        type: "text",
                        placeholder: "T\xEDtulo",
                        required: ""
                      }, null, 8, ["modelValue"]),
                      !unref(isValidTitle) ? (openBlock(), createElementBlock("p", _hoisted_5$2, " El t\xEDtulo es requerido o es muy extenso ")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["is-valid", "has-error"])
                ]),
                _: 1
              }))
            ])
          ]),
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("div", _hoisted_7$2, [
              _hoisted_8$1,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_9, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_esfuerzo,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosRutina.value.tipo_esfuerzo = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment$1, null, renderList(unref(tiposIntensidad), (intensidad, index) => {
                        return openBlock(), createBlock(_component_VOption, {
                          key: index,
                          value: intensidad
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(intensidad), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_12, toDisplayString(datosRutina.value.tipo_medicion), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_medicion,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosRutina.value.tipo_medicion = $event),
                    disabled: datosRutina.value.bloques.length > 0
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment$1, null, renderList(unref(tiposMedicion), (deporte, index) => {
                        return openBlock(), createBlock(_component_VOption, {
                          key: index,
                          value: deporte
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(deporte), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ]),
                _: 1
              }))
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_16, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1)) : (openBlock(), createBlock(_component_VField, {
                key: 1,
                id: "descripcion"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: datosRutina.value.descripcion,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosRutina.value.descripcion = $event),
                        rows: "4",
                        placeholder: "Descripci\xF3n"
                      }, null, 8, ["modelValue"]),
                      unref(descShort) ? (openBlock(), createElementBlock("p", _hoisted_17, " La descripci\xF3n es muy corta ")) : createCommentVNode("", true),
                      unref(descLong) ? (openBlock(), createElementBlock("p", _hoisted_18, " La descripci\xF3n es muy extensa ")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_19, [
              _hoisted_20,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_21, toDisplayString(datosRutina.value.objetivos ? datosRutina.value.objetivos : "Sin Objetivos"), 1)) : (openBlock(), createBlock(_component_VField, {
                key: 1,
                id: "objetivos"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: datosRutina.value.objetivos,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosRutina.value.objetivos = $event),
                        rows: "4",
                        placeholder: "Objetivos"
                      }, null, 8, ["modelValue"]),
                      unref(objShort) ? (openBlock(), createElementBlock("p", _hoisted_22, " Los objetivos es muy corta ")) : createCommentVNode("", true),
                      unref(objLong) ? (openBlock(), createElementBlock("p", _hoisted_23, " Los objetivos es muy extensa ")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ])
          ]),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[1] ? (openBlock(), createBlock(_component_BloquesDistancia, {
            key: 0,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            "d-f-c": dFC.value,
            "d-z-r": dZR.value,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque,
            onComentario: agregarComentarioBloque
          }, null, 8, ["datosrutina", "opcionactual", "d-f-c", "d-z-r"])) : createCommentVNode("", true),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[0] ? (openBlock(), createBlock(_component_BloquesTiempo, {
            key: 1,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            "d-f-c": dFC.value,
            "d-z-r": dZR.value,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque,
            onComentario: agregarComentarioBloque
          }, null, 8, ["datosrutina", "opcionactual", "d-f-c", "d-z-r"])) : createCommentVNode("", true),
          __props.opcionactual !== "crear" ? (openBlock(), createElementBlock("div", _hoisted_24)) : createCommentVNode("", true)
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            rounded: "",
            raised: "",
            outlined: "",
            color: "warning",
            onClick: cerrarRutina
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.opcionactual === "ver" ? "Cerrar" : "Cancelar"), 1)
            ]),
            _: 1
          })
        ]),
        action: withCtx(() => [
          props.opcionactual === "crear" ? (openBlock(), createBlock(_component_VButton, {
            key: 0,
            rounded: "",
            outlined: "",
            raised: "",
            color: "primary",
            loading: isLoading.value,
            disabled: !validacionCrearRutina.value,
            onClick: crearRutina
          }, {
            default: withCtx(() => [
              _hoisted_25
            ]),
            _: 1
          }, 8, ["loading", "disabled"])) : createCommentVNode("", true),
          props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VButton, {
            key: 1,
            raised: "",
            outlined: "",
            rounded: "",
            color: "info",
            loading: isLoading.value,
            disabled: !validacionCrearRutina.value,
            onClick: actualizarRutina
          }, {
            default: withCtx(() => [
              _hoisted_26
            ]),
            _: 1
          }, 8, ["loading", "disabled"])) : createCommentVNode("", true),
          props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VButton, {
            key: 2,
            color: "danger",
            raised: "",
            rounded: "",
            outlined: "",
            onClick: eliminarRutina
          }, {
            default: withCtx(() => [
              _hoisted_27
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const _hoisted_1$1 = { class: "columns is-mobile is-desktop is-multiline is-centered" };
const _hoisted_2$1 = { class: "column is-full-desktop is-full-mobile" };
const _hoisted_3$1 = { class: "columns is-mobile is-desktop is-multiline is-centered" };
const _hoisted_4$1 = { class: "column is-half-desktop is-full-mobile" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = { key: 2 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-half-desktop is-full-mobile" }, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: Boolean,
    deportistaId: {
      type: String,
      required: true
    },
    opcionactual: {
      type: String,
      default: "ver"
    },
    rutinaSelect: {
      type: Object,
      required: true
    }
  },
  emits: ["close", "create-rutina", "update-rutina", "update-comments", "delete-rutina"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const isOpenModalRutina = ref(false);
    const isOpenModalComments = ref(false);
    const createRoutine = (rutina) => {
      emits("create-rutina", rutina);
    };
    const updateRoutine = (rutina) => {
      emits("update-rutina", rutina);
    };
    const deleteRoutine = (idRutina) => {
      emits("delete-rutina", idRutina);
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$9;
      const _component_VModal = _sfc_main$a;
      const _component_SesionRutinaPersonalizada = _sfc_main$2;
      const _component_ComentariosRutina = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment$1, null, [
        createVNode(_component_VModal, {
          open: props.isOpen,
          noscroll: "",
          size: "small",
          actions: "center",
          onClose: _cache[1] || (_cache[1] = ($event) => emits("close"))
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3$1, [
                  createBaseVNode("div", _hoisted_4$1, [
                    createVNode(_component_VButton, {
                      icon: "fas fa-eye",
                      color: "primary",
                      raised: "",
                      rounded: "",
                      fullwidth: "",
                      onClick: _cache[0] || (_cache[0] = ($event) => isOpenModalRutina.value = true)
                    }, {
                      default: withCtx(() => [
                        props.opcionactual === "ver" ? (openBlock(), createElementBlock("span", _hoisted_5$1, " Ver Rutina ")) : createCommentVNode("", true),
                        props.opcionactual === "crear" ? (openBlock(), createElementBlock("span", _hoisted_6$1, " Crear Rutina ")) : createCommentVNode("", true),
                        props.opcionactual === "editar" ? (openBlock(), createElementBlock("span", _hoisted_7$1, " Editar Rutina ")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_8
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["open"]),
        isOpenModalRutina.value ? (openBlock(), createBlock(_component_SesionRutinaPersonalizada, {
          key: 0,
          "deportista-id": props.deportistaId,
          opcionactual: __props.opcionactual,
          rutinaanterior: __props.rutinaSelect,
          "is-open": isOpenModalRutina.value,
          onClose: _cache[2] || (_cache[2] = ($event) => isOpenModalRutina.value = false),
          onCrearRutina: createRoutine,
          onActualizarRutina: updateRoutine,
          onEliminarRutina: deleteRoutine
        }, null, 8, ["deportista-id", "opcionactual", "rutinaanterior", "is-open"])) : createCommentVNode("", true),
        isOpenModalComments.value ? (openBlock(), createBlock(_component_ComentariosRutina, {
          key: 1,
          "is-open": isOpenModalComments.value,
          "rutina-select": __props.rutinaSelect,
          "deportista-id": props.deportistaId,
          onClose: _cache[3] || (_cache[3] = ($event) => isOpenModalComments.value = false)
        }, null, 8, ["is-open", "rutina-select", "deportista-id"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var n, l$1, u$1, t, r$1, o, f$1, e$1, c$1 = {}, s = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return p(l2, f2, t2, r2, null);
}
function p(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2 };
  return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function d() {
  return { current: null };
}
function _(n2) {
  return n2.children;
}
function k$1(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || g$2(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || g$2(n2, r2, l2[r2], u2[r2], i2);
}
function b$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function g$2(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || b$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || b$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? w$2 : m$1, r2) : n2.removeEventListener(l2, r2 ? w$2 : m$1, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function m$1(n2) {
  t = true;
  try {
    return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
  } finally {
    t = false;
  }
}
function w$2(n2) {
  t = true;
  try {
    return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
  } finally {
    t = false;
  }
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function A(n2, l2) {
  if (null == l2)
    return n2.__ ? A(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? A(n2) : null;
}
function P$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return P$1(n2);
  }
}
function C$1(n2) {
  t ? setTimeout(n2) : f$1(n2);
}
function T$1(n2) {
  (!n2.__d && (n2.__d = true) && r$1.push(n2) && !$$1.__r++ || o !== l$1.debounceRendering) && ((o = l$1.debounceRendering) || C$1)($$1);
}
function $$1() {
  var n2, l2, u2, i2, t2, o2, f2, e2;
  for (r$1.sort(function(n3, l3) {
    return n3.__v.__b - l3.__v.__b;
  }); n2 = r$1.shift(); )
    n2.__d && (l2 = r$1.length, i2 = void 0, t2 = void 0, f2 = (o2 = (u2 = n2).__v).__e, (e2 = u2.__P) && (i2 = [], (t2 = h({}, o2)).__v = o2.__v + 1, M(e2, o2, t2, u2.__n, void 0 !== e2.ownerSVGElement, null != o2.__h ? [f2] : null, i2, null == f2 ? A(o2) : f2, o2.__h), N(i2, o2), o2.__e != f2 && P$1(o2)), r$1.length > l2 && r$1.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }));
  $$1.__r = 0;
}
function H$1(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
  var h2, v2, y2, d2, k2, b2, g2, m2 = i2 && i2.__k || s, w2 = m2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d2 = u2.__k[h2] = null == (d2 = l2[h2]) || "boolean" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u2, d2.__b = u2.__b + 1, null === (y2 = m2[h2]) || y2 && d2.key == y2.key && d2.type === y2.type)
        m2[h2] = void 0;
      else
        for (v2 = 0; v2 < w2; v2++) {
          if ((y2 = m2[v2]) && d2.key == y2.key && d2.type === y2.type) {
            m2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      M(n2, d2, y2 = y2 || c$1, t2, r2, o2, f2, e2, a2), k2 = d2.__e, (v2 = d2.ref) && y2.ref != v2 && (g2 || (g2 = []), y2.ref && g2.push(y2.ref, null, d2), g2.push(v2, d2.__c || k2, d2)), null != k2 ? (null == b2 && (b2 = k2), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e2 = I$1(d2, e2, n2) : e2 = z$1(n2, d2, y2, m2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = A(y2));
    }
  for (u2.__e = b2, h2 = w2; h2--; )
    null != m2[h2] && ("function" == typeof u2.type && null != m2[h2].__e && m2[h2].__e == u2.__d && (u2.__d = L$1(i2).nextSibling), q(m2[h2], m2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      S(g2[h2], g2[++h2], g2[++h2]);
}
function I$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? I$1(i2, l2, u2) : z$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function j$2(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    j$2(n3, l2);
  }) : l2.push(n2)), l2;
}
function z$1(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function L$1(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = L$1(u2)))
        return i2;
  }
  return null;
}
function M(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d2, k2, b2, g2, m2, w2, A2, P2, C2, T2, $2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof $2) {
        if (b2 = u2.props, g2 = (s2 = $2.contextType) && t2[s2.__c], m2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? k2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in $2 && $2.prototype.render ? u2.__c = a2 = new $2(b2, m2) : (u2.__c = a2 = new x$1(b2, m2), a2.constructor = $2, a2.render = B$1), g2 && g2.sub(a2), a2.props = b2, a2.state || (a2.state = {}), a2.context = m2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != $2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h({}, a2.__s)), h(a2.__s, $2.getDerivedStateFromProps(b2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == $2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == $2.getDerivedStateFromProps && b2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(b2, m2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(b2, a2.__s, m2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = b2, a2.state = a2.__s, a2.__d = false), u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), w2 = 0; w2 < a2._sb.length; w2++)
              a2.__h.push(a2._sb[w2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(b2, a2.__s, m2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d2);
          });
        }
        if (a2.context = m2, a2.props = b2, a2.__P = n2, A2 = l$1.__r, P2 = 0, "prototype" in $2 && $2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, A2 && A2(u2), s2 = a2.render(a2.props, a2.state, a2.context), C2 = 0; C2 < a2._sb.length; C2++)
            a2.__h.push(a2._sb[C2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, A2 && A2(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++P2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h(h({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p2)), T2 = null != s2 && s2.type === _ && null == s2.key ? s2.props.children : s2, H$1(n2, Array.isArray(T2) ? T2 : [T2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), k2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = O(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function N(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function O(l2, u2, i2, t2, r2, o2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, e2 = false;
  }
  if (null === d2)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c$1).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (k$1(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_2 = u2.props.children, H$1(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && A(i2, 0), e2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && v$1(o2[_2]);
    e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && g$2(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && g$2(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function S(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function q(n2, u2, i2) {
  var t2, r2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || S(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && q(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D$1(u2, i2, t2) {
  var r2, o2, f2;
  l$1.__ && l$1.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], M(i2, u2 = (!r2 && t2 || i2).__k = y(_, null, [u2]), o2 || c$1, c$1, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), N(f2, u2);
}
function G$1(n2, l2) {
  var u2 = { __c: l2 = "__cC" + e$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, T$1(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = s.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, t = false, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u2), this.props)), n2 && h(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), T$1(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), T$1(this));
}, x$1.prototype.render = _, r$1 = [], f$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $$1.__r = 0, e$1 = 0;
var r, u, i, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w$1), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2);
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k), i2.__h.forEach(w$1), i2.__h = [])), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$1(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w$1(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function w(n2) {
  this.props = n2;
}
(w.prototype = new x$1()).isPureReactComponent = true, w.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var x = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x && x(n2);
};
var T = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  T(n2, t2, e2, r2);
};
var I = l$1.unmount;
function L(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L(n3, t2, e2);
  })), n2;
}
function U(n2, t2, e2) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function V() {
  this.u = null, this.o = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), I && I(n2);
}, (D.prototype = new x$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = F(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, D.prototype.componentWillUnmount = function() {
  this.t = [];
}, D.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y(_, null, n2.fallback);
  return i2 && (i2.__h = null), [y(_, null, e2.__a ? null : n2.children), i2];
};
var W = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function P(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function $(n2) {
  var e2 = this, r2 = n2.i;
  e2.componentWillUnmount = function() {
    D$1(null, e2.l), e2.l = null, e2.i = null;
  }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
  } }), D$1(y(P, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
}
function j(n2, e2) {
  var r2 = y($, { __v: n2, i: e2 });
  return r2.containerInfo = e2, r2;
}
(V.prototype = new x$1()).__a = function(n2) {
  var t2 = this, e2 = F(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, V.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = j$2(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    W(n2, e2, t2);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, H = "undefined" != typeof document, Z = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
x$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(x$1.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var G = l$1.event;
function J() {
}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return G && (n2 = G(n2)), n2.persist = J, n2.isPropagationStopped = K, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
};
var nn = { configurable: true, get: function() {
  return this.class;
} }, tn = l$1.vnode;
l$1.vnode = function(n2) {
  var t2 = n2.type, e2 = n2.props, u2 = e2;
  if ("string" == typeof t2) {
    var o2 = -1 === t2.indexOf("-");
    for (var i2 in u2 = {}, e2) {
      var l2 = e2[i2];
      H && "children" === i2 && "noscript" === t2 || "value" === i2 && "defaultValue" in e2 && null == l2 || ("defaultValue" === i2 && "value" in e2 && null == e2.value ? i2 = "value" : "download" === i2 && true === l2 ? l2 = "" : /ondoubleclick/i.test(i2) ? i2 = "ondblclick" : /^onchange(textarea|input)/i.test(i2 + t2) && !Z(e2.type) ? i2 = "oninput" : /^onfocus$/i.test(i2) ? i2 = "onfocusin" : /^onblur$/i.test(i2) ? i2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i2) ? i2 = i2.toLowerCase() : o2 && B.test(i2) ? i2 = i2.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l2 && (l2 = void 0), /^oninput$/i.test(i2) && (i2 = i2.toLowerCase(), u2[i2] && (i2 = "oninputCapture")), u2[i2] = l2);
    }
    "select" == t2 && u2.multiple && Array.isArray(u2.value) && (u2.value = j$2(e2.children).forEach(function(n3) {
      n3.props.selected = -1 != u2.value.indexOf(n3.props.value);
    })), "select" == t2 && null != u2.defaultValue && (u2.value = j$2(e2.children).forEach(function(n3) {
      n3.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n3.props.value) : u2.defaultValue == n3.props.value;
    })), n2.props = u2, e2.class != e2.className && (nn.enumerable = "className" in e2, null != e2.className && (u2.class = e2.className), Object.defineProperty(u2, "className", nn));
  }
  n2.$$typeof = z, tn && tn(n2);
};
var en = l$1.__r;
l$1.__r = function(n2) {
  en && en(n2);
};
var globalObj = typeof globalThis !== "undefined" ? globalThis : window;
if (globalObj.FullCalendarVDom) {
  console.warn("FullCalendar VDOM already loaded");
} else {
  globalObj.FullCalendarVDom = {
    Component: x$1,
    createElement: y,
    render: D$1,
    createRef: d,
    Fragment: _,
    createContext: createContext$1,
    createPortal: j,
    flushSync: flushSync$1,
    unmountComponentAtNode: unmountComponentAtNode$1
  };
}
function flushSync$1(runBeforeFlush) {
  runBeforeFlush();
  var oldDebounceRendering = l$1.debounceRendering;
  var callbackQ = [];
  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }
  l$1.debounceRendering = execCallbackSync;
  D$1(y(FakeComponent, {}), document.createElement("div"));
  while (callbackQ.length) {
    callbackQ.shift()();
  }
  l$1.debounceRendering = oldDebounceRendering;
}
var FakeComponent = function(_super) {
  __extends(FakeComponent2, _super);
  function FakeComponent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  FakeComponent2.prototype.render = function() {
    return y("div", {});
  };
  FakeComponent2.prototype.componentDidMount = function() {
    this.setState({});
  };
  return FakeComponent2;
}(x$1);
function createContext$1(defaultValue) {
  var ContextType = G$1(defaultValue);
  var origProvider = ContextType.Provider;
  ContextType.Provider = function() {
    var _this = this;
    var isNew = !this.getChildContext;
    var children = origProvider.apply(this, arguments);
    if (isNew) {
      var subs_1 = [];
      this.shouldComponentUpdate = function(_props) {
        if (_this.props.value !== _props.value) {
          subs_1.forEach(function(c2) {
            c2.context = _props.value;
            c2.forceUpdate();
          });
        }
      };
      this.sub = function(c2) {
        subs_1.push(c2);
        var old = c2.componentWillUnmount;
        c2.componentWillUnmount = function() {
          subs_1.splice(subs_1.indexOf(c2), 1);
          old && old.call(c2);
        };
      };
    }
    return children;
  };
  return ContextType;
}
function unmountComponentAtNode$1(node) {
  D$1(null, node);
}
var main$7 = "";
if (typeof FullCalendarVDom === "undefined") {
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
}
var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushSync = FullCalendarVDom.flushSync;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var EventSourceApi = function() {
  function EventSourceApi2(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  EventSourceApi2.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  };
  EventSourceApi2.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  };
  Object.defineProperty(EventSourceApi2.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi2.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi2.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: false,
    configurable: true
  });
  return EventSourceApi2;
}();
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  if (!document.documentElement.contains(el)) {
    return null;
  }
  do {
    if (elementMatches(el, selector)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
}
function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];
  for (var i2 = 0; i2 < containers.length; i2 += 1) {
    var matches = containers[i2].querySelectorAll(selector);
    for (var j2 = 0; j2 < matches.length; j2 += 1) {
      allMatches.push(matches[j2]);
    }
  }
  return allMatches;
}
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = "";
  } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
    el.style[name] = val + "px";
  } else {
    el.style[name] = val;
  }
}
function getEventTargetViaRoot(ev) {
  var _a, _b;
  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
function getElRoot(el) {
  return el.getRootNode ? el.getRootNode() : document;
}
var guid$1 = 0;
function getUniqueDomId() {
  guid$1 += 1;
  return "fc-dom-" + guid$1;
}
function preventDefault(ev) {
  ev.preventDefault();
}
function buildDelegationHandler(selector, handler) {
  return function(ev) {
    var matchedChild = elementClosest(ev.target, selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function() {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, "mouseover", selector, function(mouseOverEv, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      var realOnMouseLeave_1 = function(mouseLeaveEv) {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener("mouseleave", realOnMouseLeave_1);
      };
      matchedChild.addEventListener("mouseleave", realOnMouseLeave_1);
    }
  });
}
var transitionEventNames = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function whenTransitionDone(el, callback) {
  var realCallback = function(ev) {
    callback(ev);
    transitionEventNames.forEach(function(eventName) {
      el.removeEventListener(eventName, realCallback);
    });
  };
  transitionEventNames.forEach(function(eventName) {
    el.addEventListener(eventName, realCallback);
  });
}
function createAriaClickAttrs(handler) {
  return __assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown: function(ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        handler(ev);
        ev.preventDefault();
      }
    }
  };
}
var guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
function disableCursor() {
  document.body.classList.add("fc-not-allowed");
}
function enableCursor() {
  document.body.classList.remove("fc-not-allowed");
}
function preventSelection(el) {
  el.classList.add("fc-unselectable");
  el.addEventListener("selectstart", preventDefault);
}
function allowSelection(el) {
  el.classList.remove("fc-unselectable");
  el.removeEventListener("selectstart", preventDefault);
}
function preventContextMenu(el) {
  el.addEventListener("contextmenu", preventDefault);
}
function allowContextMenu(el) {
  el.removeEventListener("contextmenu", preventDefault);
}
function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i2;
  var token;
  if (typeof input === "string") {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === "function") {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i2 = 0; i2 < tokens.length; i2 += 1) {
    token = tokens[i2];
    if (typeof token === "string") {
      specs.push(token.charAt(0) === "-" ? { field: token.substring(1), order: -1 } : { field: token, order: 1 });
    } else if (typeof token === "function") {
      specs.push({ func: token });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i2;
  var cmp;
  for (i2 = 0; i2 < fieldSpecs.length; i2 += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i2]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a2, b2) {
  if (!a2 && !b2) {
    return 0;
  }
  if (b2 == null) {
    return -1;
  }
  if (a2 == null) {
    return 1;
  }
  if (typeof a2 === "string" || typeof b2 === "string") {
    return String(a2).localeCompare(String(b2));
  }
  return a2 - b2;
}
function padStart(val, len) {
  var s2 = String(val);
  return "000".substr(0, len - s2.length) + s2;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === "function") {
    return formatter.apply(void 0, args);
  }
  if (typeof formatter === "string") {
    return args.reduce(function(str, arg, index) {
      return str.replace("$" + index, arg || "");
    }, formatter);
  }
  return fallbackText;
}
function compareNumbers(a2, b2) {
  return a2 - b2;
}
function isInt(n2) {
  return n2 % 1 === 0;
}
function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-frame");
  var contentWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!allWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  }
  if (!contentWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  }
  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + contentWidthEl.getBoundingClientRect().width;
}
var DAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function addWeeks(m2, n2) {
  var a2 = dateToUtcArray(m2);
  a2[2] += n2 * 7;
  return arrayToUtcDate(a2);
}
function addDays(m2, n2) {
  var a2 = dateToUtcArray(m2);
  a2[2] += n2;
  return arrayToUtcDate(a2);
}
function addMs(m2, n2) {
  var a2 = dateToUtcArray(m2);
  a2[6] += n2;
  return arrayToUtcDate(a2);
}
function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60);
}
function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60);
}
function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1e3;
}
function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
function diffWholeWeeks(m0, m1) {
  var d2 = diffWholeDays(m0, m1);
  if (d2 !== null && d2 % 7 === 0) {
    return d2 / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }
  return null;
}
function startOfDay(m2) {
  return arrayToUtcDate([
    m2.getUTCFullYear(),
    m2.getUTCMonth(),
    m2.getUTCDate()
  ]);
}
function startOfHour(m2) {
  return arrayToUtcDate([
    m2.getUTCFullYear(),
    m2.getUTCMonth(),
    m2.getUTCDate(),
    m2.getUTCHours()
  ]);
}
function startOfMinute(m2) {
  return arrayToUtcDate([
    m2.getUTCFullYear(),
    m2.getUTCMonth(),
    m2.getUTCDate(),
    m2.getUTCHours(),
    m2.getUTCMinutes()
  ]);
}
function startOfSecond(m2) {
  return arrayToUtcDate([
    m2.getUTCFullYear(),
    m2.getUTCMonth(),
    m2.getUTCDate(),
    m2.getUTCHours(),
    m2.getUTCMinutes(),
    m2.getUTCSeconds()
  ]);
}
function weekOfYear(marker, dow, doy) {
  var y2 = marker.getUTCFullYear();
  var w2 = weekOfGivenYear(marker, y2, dow, doy);
  if (w2 < 1) {
    return weekOfGivenYear(marker, y2 - 1, dow, doy);
  }
  var nextW = weekOfGivenYear(marker, y2 + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w2, nextW);
  }
  return w2;
}
function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy;
  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dateToLocalArray(date) {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
}
function arrayToLocalDate(a2) {
  return new Date(
    a2[0],
    a2[1] || 0,
    a2[2] == null ? 1 : a2[2],
    a2[3] || 0,
    a2[4] || 0,
    a2[5] || 0
  );
}
function dateToUtcArray(date) {
  return [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  ];
}
function arrayToUtcDate(a2) {
  if (a2.length === 1) {
    a2 = a2.concat([0]);
  }
  return new Date(Date.UTC.apply(Date, a2));
}
function isValidDate(m2) {
  return !isNaN(m2.valueOf());
}
function timeAsMs(m2) {
  return m2.getUTCHours() * 1e3 * 60 * 60 + m2.getUTCMinutes() * 1e3 * 60 + m2.getUTCSeconds() * 1e3 + m2.getUTCMilliseconds();
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId,
    range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeProps(propObjs, complexPropsMap) {
  var dest = {};
  if (complexPropsMap) {
    for (var name_1 in complexPropsMap) {
      var complexObjs = [];
      for (var i2 = propObjs.length - 1; i2 >= 0; i2 -= 1) {
        var val = propObjs[i2][name_1];
        if (typeof val === "object" && val) {
          complexObjs.unshift(val);
        } else if (val !== void 0) {
          dest[name_1] = val;
          break;
        }
      }
      if (complexObjs.length) {
        dest[name_1] = mergeProps(complexObjs);
      }
    }
  }
  for (var i2 = propObjs.length - 1; i2 >= 0; i2 -= 1) {
    var props = propObjs[i2];
    for (var name_2 in props) {
      if (!(name_2 in dest)) {
        dest[name_2] = props[name_2];
      }
    }
  }
  return dest;
}
function filterHash(hash, func) {
  var filtered = {};
  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash$1(hash, func) {
  var newHash = {};
  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function arrayToHash(a2) {
  var hash = {};
  for (var _i = 0, a_1 = a2; _i < a_1.length; _i++) {
    var item = a_1[_i];
    hash[item] = true;
  }
  return hash;
}
function hashValuesToArray(obj) {
  var a2 = [];
  for (var key in obj) {
    a2.push(obj[key]);
  }
  return a2;
}
function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }
  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }
  return true;
}
function getUnequalProps(obj0, obj1) {
  var keys = [];
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }
  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }
  return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs) {
  if (equalityFuncs === void 0) {
    equalityFuncs = {};
  }
  if (oldProps === newProps) {
    return true;
  }
  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key]))
      ;
    else {
      return false;
    }
  }
  for (var key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }
  return true;
}
function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }
  if (comparator) {
    return comparator(val0, val1);
  }
  return false;
}
function collectFromHash(hash, startIndex, endIndex, step) {
  if (startIndex === void 0) {
    startIndex = 0;
  }
  if (step === void 0) {
    step = 1;
  }
  var res = [];
  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }
  for (var i2 = startIndex; i2 < endIndex; i2 += step) {
    var val = hash[i2];
    if (val !== void 0) {
      res.push(val);
    }
  }
  return res;
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i2 = 0; i2 < recurringTypes.length; i2 += 1) {
    var parsed = recurringTypes[i2].parse(refined, dateEnv);
    if (parsed) {
      var allDay = refined.allDay;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i2
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv, pluginHooks = context.pluginHooks, options = context.options;
  var defs = eventStore.defs, instances = eventStore.instances;
  instances = filterHash(instances, function(instance2) {
    return !defs[instance2.defId].recurringDef;
  });
  for (var defId in defs) {
    var def = defs[defId];
    if (def.recurringDef) {
      var duration = def.recurringDef.duration;
      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
      for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
        var start = starts_1[_i];
        var instance = createEventInstance(defId, {
          start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }
  return { defs, instances };
}
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv);
  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }
  return markers;
}
var INTERNAL_UNITS = ["years", "months", "days", "milliseconds"];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function createDuration(input, unit) {
  var _a;
  if (typeof input === "string") {
    return parseString(input);
  }
  if (typeof input === "object" && input) {
    return parseObject(input);
  }
  if (typeof input === "number") {
    return parseObject((_a = {}, _a[unit || "milliseconds"] = input, _a));
  }
  return null;
}
function parseString(s2) {
  var m2 = PARSE_RE.exec(s2);
  if (m2) {
    var sign = m2[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m2[2] ? parseInt(m2[2], 10) : 0),
      milliseconds: sign * ((m2[3] ? parseInt(m2[3], 10) : 0) * 60 * 60 * 1e3 + (m2[4] ? parseInt(m2[4], 10) : 0) * 60 * 1e3 + (m2[5] ? parseInt(m2[5], 10) : 0) * 1e3 + (m2[6] ? parseInt(m2[6], 10) : 0))
    };
  }
  return null;
}
function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1e3 + (obj.minutes || obj.minute || 0) * 60 * 1e3 + (obj.seconds || obj.second || 0) * 1e3 + (obj.milliseconds || obj.millisecond || obj.ms || 0)
  };
  var weeks = obj.weeks || obj.week;
  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }
  return duration;
}
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function multiplyDuration(d2, n2) {
  return {
    years: d2.years * n2,
    months: d2.months * n2,
    days: d2.days * n2,
    milliseconds: d2.milliseconds * n2
  };
}
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
function wholeDivideDurations(numerator, denominator) {
  var res = null;
  for (var i2 = 0; i2 < INTERNAL_UNITS.length; i2 += 1) {
    var unit = INTERNAL_UNITS[i2];
    if (denominator[unit]) {
      var localRes = numerator[unit] / denominator[unit];
      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }
      res = localRes;
    } else if (numerator[unit]) {
      return null;
    }
  }
  return res;
}
function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;
  if (ms) {
    if (ms % 1e3 !== 0) {
      return { unit: "millisecond", value: ms };
    }
    if (ms % (1e3 * 60) !== 0) {
      return { unit: "second", value: ms / 1e3 };
    }
    if (ms % (1e3 * 60 * 60) !== 0) {
      return { unit: "minute", value: ms / (1e3 * 60) };
    }
    if (ms) {
      return { unit: "hour", value: ms / (1e3 * 60 * 60) };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return { unit: "week", value: dur.days / 7 };
    }
    return { unit: "day", value: dur.days };
  }
  if (dur.months) {
    return { unit: "month", value: dur.months };
  }
  if (dur.years) {
    return { unit: "year", value: dur.years };
  }
  return { unit: "millisecond", value: 0 };
}
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
  if (stripZeroTime === void 0) {
    stripZeroTime = false;
  }
  var s2 = marker.toISOString();
  s2 = s2.replace(".000", "");
  if (stripZeroTime) {
    s2 = s2.replace("T00:00:00Z", "");
  }
  if (s2.length > 10) {
    if (timeZoneOffset == null) {
      s2 = s2.replace("Z", "");
    } else if (timeZoneOffset !== 0) {
      s2 = s2.replace("Z", formatTimeZoneOffset(timeZoneOffset, true));
    }
  }
  return s2;
}
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, "");
}
function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ":" + padStart(marker.getUTCMinutes(), 2) + ":" + padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso) {
  if (doIso === void 0) {
    doIso = false;
  }
  var sign = minutes < 0 ? "-" : "+";
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);
  if (doIso) {
    return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
  }
  return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : "");
}
function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }
  var len = a0.length;
  var i2;
  if (len !== a1.length) {
    return false;
  }
  for (i2 = 0; i2 < len; i2 += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i2], a1[i2]) : a0[i2] === a1[i2])) {
      return false;
    }
  }
  return true;
}
function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var _this = this;
  var currentArg;
  var currentRes;
  return function(newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(_this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.call(_this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i;
var COMMA_RE = /,/g;
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g;
var UTC_RE = /UTC|GMT/;
var NativeFormatter = function() {
  function NativeFormatter2(formatSettings) {
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;
    for (var name_1 in formatSettings) {
      if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name_1] = formatSettings[name_1];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
      } else {
        standardDateProps[name_1] = formatSettings[name_1];
        if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
      }
    }
    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }
  NativeFormatter2.prototype.format = function(date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  };
  NativeFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
    var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
    if (!diffSeverity) {
      return this.format(start, context);
    }
    var biggestUnitForPartial = diffSeverity;
    if (biggestUnitForPartial > 1 && (standardDateProps.year === "numeric" || standardDateProps.year === "2-digit") && (standardDateProps.month === "numeric" || standardDateProps.month === "2-digit") && (standardDateProps.day === "numeric" || standardDateProps.day === "2-digit")) {
      biggestUnitForPartial = 1;
    }
    var full0 = this.format(start, context);
    var full1 = this.format(end, context);
    if (full0 === full1) {
      return full0;
    }
    var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    var partial0 = partialFormattingFunc(start);
    var partial1 = partialFormattingFunc(end);
    var insertion = findCommonInsertion(full0, partial0, full1, partial1);
    var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || "";
    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }
    return full0 + separator + full1;
  };
  NativeFormatter2.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  };
  return NativeFormatter2;
}();
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;
  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === "short") {
    return function(date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }
  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function(date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    };
  }
  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = __assign({}, standardDateProps);
  extendedSettings = __assign({}, extendedSettings);
  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = "UTC";
  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat;
  if (extendedSettings.omitZeroMinute) {
    var zeroProps = __assign({}, standardDateProps);
    delete zeroProps.minute;
    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }
  return function(date) {
    var marker = date.marker;
    var format;
    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }
    var s2 = format.format(marker);
    return postProcess(s2, date, standardDateProps, extendedSettings, context);
  };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = "2-digit";
    }
    if (!standardDateProps.minute) {
      standardDateProps.minute = "2-digit";
    }
  }
  if (standardDateProps.timeZoneName === "long") {
    standardDateProps.timeZoneName = "short";
  }
  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}
function postProcess(s2, date, standardDateProps, extendedSettings, context) {
  s2 = s2.replace(LTR_RE, "");
  if (standardDateProps.timeZoneName === "short") {
    s2 = injectTzoStr(s2, context.timeZone === "UTC" || date.timeZoneOffset == null ? "UTC" : formatTimeZoneOffset(date.timeZoneOffset));
  }
  if (extendedSettings.omitCommas) {
    s2 = s2.replace(COMMA_RE, "").trim();
  }
  if (extendedSettings.omitZeroMinute) {
    s2 = s2.replace(":00", "");
  }
  if (extendedSettings.meridiem === false) {
    s2 = s2.replace(MERIDIEM_RE, "").trim();
  } else if (extendedSettings.meridiem === "narrow") {
    s2 = s2.replace(MERIDIEM_RE, function(m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === "short") {
    s2 = s2.replace(MERIDIEM_RE, function(m0, m1) {
      return m1.toLocaleLowerCase() + "m";
    });
  } else if (extendedSettings.meridiem === "lowercase") {
    s2 = s2.replace(MERIDIEM_RE, function(m0) {
      return m0.toLocaleLowerCase();
    });
  }
  s2 = s2.replace(MULTI_SPACE_RE, " ");
  s2 = s2.trim();
  return s2;
}
function injectTzoStr(s2, tzoStr) {
  var replaced = false;
  s2 = s2.replace(UTC_RE, function() {
    replaced = true;
    return tzoStr;
  });
  if (!replaced) {
    s2 += " " + tzoStr;
  }
  return s2;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  var parts = [];
  if (display === "long") {
    parts.push(weekTextLong);
  } else if (display === "short" || display === "narrow") {
    parts.push(weekText);
  }
  if (display === "long" || display === "short") {
    parts.push(" ");
  }
  parts.push(locale.simpleNumberFormat.format(num));
  if (locale.options.direction === "rtl") {
    parts.reverse();
  }
  return parts.join("");
}
function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }
  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }
  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }
  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }
  return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};
  for (var name_2 in options) {
    if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
      partialOptions[name_2] = options[name_2];
    }
  }
  return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;
  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);
    if (found0 === -1) {
      break;
    }
    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;
    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);
      if (found1 === -1) {
        break;
      }
      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);
      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }
  return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
  var a2 = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a2,
    year: a2[0],
    month: a2[1],
    day: a2[2],
    hour: a2[3],
    minute: a2[4],
    second: a2[5],
    millisecond: a2[6]
  };
}
function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
var CmdFormatter = function() {
  function CmdFormatter2(cmdStr) {
    this.cmdStr = cmdStr;
  }
  CmdFormatter2.prototype.format = function(date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };
  CmdFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };
  return CmdFormatter2;
}();
var FuncFormatter = function() {
  function FuncFormatter2(func) {
    this.func = func;
  }
  FuncFormatter2.prototype.format = function(date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };
  FuncFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };
  return FuncFormatter2;
}();
function createFormatter(input) {
  if (typeof input === "object" && input) {
    return new NativeFormatter(input);
  }
  if (typeof input === "string") {
    return new CmdFormatter(input);
  }
  if (typeof input === "function") {
    return new FuncFormatter(input);
  }
  return null;
}
var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity
};
var BASE_OPTION_DEFAULTS = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: false,
  nextDayThreshold: "00:00:00",
  dayHeaders: true,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: "local",
  editable: false,
  nowIndicator: false,
  scrollTime: "06:00:00",
  scrollTimeReset: true,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
};
var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
};
var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual
};
function isMaybeObjectsEqual(a2, b2) {
  if (typeof a2 === "object" && typeof b2 === "object" && a2 && b2) {
    return isPropsEqual(a2, b2);
  }
  return a2 === b2;
}
var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
};
function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
  var refined = {};
  var extra = {};
  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }
  for (var propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }
  return { refined, extra };
}
function identity(raw) {
  return raw;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);
  for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
    var rawEvent = rawEvents_1[_i];
    var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }
  return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
  if (eventStore === void 0) {
    eventStore = createEmptyEventStore();
  }
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];
  if (instance) {
    var def_1 = eventStore.defs[instance.defId];
    var newStore = filterEventStoreDefs(eventStore, function(lookDef) {
      return isEventDefsGrouped(def_1, lookDef);
    });
    newStore.defs[def_1.defId] = def_1;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
  return {
    defs: __assign(__assign({}, store0.defs), store1.defs),
    instances: __assign(__assign({}, store0.instances), store1.instances)
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function(instance) {
    return defs[instance.defId];
  });
  return { defs, instances };
}
function excludeSubEventStore(master, sub) {
  var defs = master.defs, instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};
  for (var defId in defs) {
    if (!sub.defs[defId]) {
      filteredDefs[defId] = defs[defId];
    }
  }
  for (var instanceId in instances) {
    if (!sub.instances[instanceId] && filteredDefs[instances[instanceId].defId]) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true);
  }
  if (typeof input === "object" && input) {
    return parseEvents([input], null, context, true);
  }
  if (input != null) {
    return String(input);
  }
  return null;
}
function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === "string") {
    return raw.split(/\s+/);
  }
  return [];
}
var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || "",
    borderColor: refined.borderColor || refined.color || "",
    textColor: refined.textColor || "",
    classNames: (refined.className || []).concat(refined.classNames || [])
  };
}
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === "boolean" ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
var EVENT_REFINERS = __assign(__assign(__assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }
  var _a = refineEventDef(raw, context, refiners), refined = _a.refined, extra = _a.extra;
  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return { def, instance: null };
  }
  var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", singleRes.allDay, singleRes.hasEnd, context);
    var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return { def, instance };
  }
  return null;
}
function refineEventDef(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  var def = {
    title: refined.title || "",
    groupId: refined.groupId || "",
    publicId: refined.id || "",
    url: refined.url || "",
    recurringDef: null,
    defId: guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: __assign(__assign({}, refined.extendedProps || {}), extra)
  };
  for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
    var memberAdder = _a[_i];
    __assign(def, memberAdder(refined));
  }
  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }
  if (endMeta) {
    endMarker = endMeta.marker;
    if (allDay) {
      endMarker = startOfDay(endMarker);
    }
    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }
  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }
  return {
    allDay,
    hasEnd,
    range: { start: startMarker, end: endMarker },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}
function computeIsDefaultAllDay(eventSource, context) {
  var res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return { start, end };
}
function computeVisibleDayRange(timedRange, nextDayThreshold) {
  if (nextDayThreshold === void 0) {
    nextDayThreshold = createDuration(0);
  }
  var startDay = null;
  var endDay = null;
  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf();
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay(timedRange.start);
    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }
  return { start: startDay, end: endDay };
}
function isMultiDayRange(range) {
  var visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === "year") {
    return createDuration(dateEnv.diffWholeYears(date0, date1), "year");
  }
  if (largeUnit === "month") {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), "month");
  }
  return diffDayAndTime(date0, date1);
}
function parseRange(input, dateEnv) {
  var start = null;
  var end = null;
  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start && !end) {
    return null;
  }
  if (start && end && end < start) {
    return null;
  }
  return { start, end };
}
function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start;
  var i2;
  var dateRange;
  ranges.sort(compareRanges);
  for (i2 = 0; i2 < ranges.length; i2 += 1) {
    dateRange = ranges[i2];
    if (dateRange.start > start) {
      invertedRanges.push({ start, end: dateRange.start });
    }
    if (dateRange.end > start) {
      start = dateRange.end;
    }
  }
  if (start < constraintRange.end) {
    invertedRanges.push({ start, end: constraintRange.end });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf();
}
function intersectRanges(range0, range1) {
  var start = range0.start, end = range0.end;
  var newRange = null;
  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start === null || end === null || start < end) {
    newRange = { start, end };
  }
  return newRange;
}
function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];
    if (ui.display === "inverse-background") {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = eventStore.defs[instance.defId];
    var ui = eventUis[def.defId];
    var origRange = instance.range;
    var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (ui.display === "inverse-background") {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== "none") {
        (ui.display === "background" ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (var groupId in inverseBgByGroupId) {
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);
    for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
      var invertedRange = invertedRanges_1[_i];
      var def = defByGroupId[groupId];
      var ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  for (var defId in inverseBgByDefId) {
    var ranges = inverseBgByDefId[defId];
    var invertedRanges = invertRanges(ranges, framingRange);
    for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
      var invertedRange = invertedRanges_2[_a];
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  return { bg: bgRanges, fg: fgRanges };
}
function hasBgRendering(def) {
  return def.ui.display === "background" || def.ui.display === "inverse-background";
}
function setElSeg(el, seg) {
  el.fcSeg = seg;
}
function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || null;
}
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash$1(eventDefs, function(eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}
function compileEventUi(eventDef, eventUiBases) {
  var uis = [];
  if (eventUiBases[""]) {
    uis.push(eventUiBases[""]);
  }
  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function(obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function(c2) {
    return c2._seg;
  });
}
function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0;
  var end = range.end ? range.end.valueOf() : 0;
  return __assign(__assign(__assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start,
    end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}
function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _a = seg.eventRange, def = _a.def, ui = _a.ui;
  var val = ui.startEditable;
  for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
    var transformer = transformers_1[_i];
    val = transformer(val, def, ui, context);
  }
  return val;
}
function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, defaultDisplayEventEnd, startOverride, endOverride) {
  var dateEnv = context.dateEnv, options = context.options;
  var displayEventTime = options.displayEventTime, displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  var wholeEventStart = eventInstance.range.start;
  var wholeEventEnd = eventInstance.range.end;
  var segStart = startOverride || seg.start || seg.eventRange.range.start;
  var segEnd = endOverride || seg.end || seg.eventRange.range.end;
  var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;
    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }
    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo
    });
  }
  return "";
}
function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function getEventClassNames(props) {
  var classNames = ["fc-event"];
  if (props.isMirror) {
    classNames.push("fc-event-mirror");
  }
  if (props.isDraggable) {
    classNames.push("fc-event-draggable");
  }
  if (props.isStartResizable || props.isEndResizable) {
    classNames.push("fc-event-resizable");
  }
  if (props.isDragging) {
    classNames.push("fc-event-dragging");
  }
  if (props.isResizing) {
    classNames.push("fc-event-resizing");
  }
  if (props.isSelected) {
    classNames.push("fc-event-selected");
  }
  if (props.isStart) {
    classNames.push("fc-event-start");
  }
  if (props.isEnd) {
    classNames.push("fc-event-end");
  }
  if (props.isPast) {
    classNames.push("fc-event-past");
  }
  if (props.isToday) {
    classNames.push("fc-event-today");
  }
  if (props.isFuture) {
    classNames.push("fc-event-future");
  }
  return classNames;
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ":" + eventRange.range.start.toISOString();
}
function getSegAnchorAttrs(seg, context) {
  var _a = seg.eventRange, def = _a.def, instance = _a.instance;
  var url = def.url;
  if (url) {
    return { href: url };
  }
  var emitter = context.emitter, options = context.options;
  var eventInteractive = options.eventInteractive;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers("eventClick"));
    }
  }
  if (eventInteractive) {
    return createAriaKeyboardAttrs(function(ev) {
      emitter.trigger("eventClick", {
        el: ev.target,
        event: new EventApi(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }
  return {};
}
var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    range.end = dateEnv.add(range.start, defaultDuration);
  }
  return span;
}
function parseOpenDateSpan(raw, dateEnv) {
  var _a = refineProps(raw, STANDARD_PROPS), standardProps = _a.refined, extra = _a.extra;
  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  return __assign({ range: {
    start: startMeta ? startMeta.marker : null,
    end: endMeta ? endMeta.marker : null
  }, allDay }, extra);
}
function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
}
function isSpanPropsEqual(span0, span1) {
  for (var propName in span1) {
    if (propName !== "range" && propName !== "allDay") {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  }
  for (var propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }
  return true;
}
function buildDateSpanApi(span, dateEnv) {
  return __assign(__assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return __assign(__assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
}
function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, { omitTime }),
    endStr: dateEnv.formatIso(range.end, { omitTime })
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({ editable: false }, context);
  var def = parseEventDef(
    res.refined,
    res.extra,
    "",
    dateSpan.allDay,
    true,
    context
  );
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger("select", __assign(__assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger("unselect", {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};
  for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];
    __assign(props, transform(dateSpan, context));
  }
  __assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv, options = context.options;
  var end = marker;
  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = dest.defs[instance.defId];
    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {};
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true;
  }
  var copy = __assign(__assign(__assign({}, eventDef), standardProps), { ui: __assign(__assign({}, eventDef.ui), standardProps.ui) });
  if (mutation.extendedProps) {
    copy.extendedProps = __assign(__assign({}, copy.extendedProps), mutation.extendedProps);
  }
  for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
    var applier = _a[_i];
    applier(copy, mutation, context);
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  var copy = __assign({}, eventInstance);
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }
  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  }
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  }
  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }
  return copy;
}
var ViewApi = function() {
  function ViewApi2(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  Object.defineProperty(ViewApi2.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: false,
    configurable: true
  });
  ViewApi2.prototype.getOption = function(name) {
    return this.getCurrentData().options[name];
  };
  return ViewApi2;
}();
var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  success: identity,
  failure: identity
};
function parseEventSource(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventSourceRefiners(context);
  }
  var rawObj;
  if (typeof raw === "string") {
    rawObj = { url: raw };
  } else if (typeof raw === "function" || Array.isArray(raw)) {
    rawObj = { events: raw };
  } else if (typeof raw === "object" && raw) {
    rawObj = raw;
  }
  if (rawObj) {
    var _a = refineProps(rawObj, refiners), refined = _a.refined, extra = _a.extra;
    var metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || "",
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  for (var i2 = defs.length - 1; i2 >= 0; i2 -= 1) {
    var def = defs[i2];
    var meta = def.parseMeta(raw);
    if (meta) {
      return { sourceDefId: i2, meta };
    }
  }
  return null;
}
function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate;
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return getNow(options.now, dateEnv);
}
function getNow(nowInput, dateEnv) {
  if (typeof nowInput === "function") {
    nowInput = nowInput();
  }
  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }
  return dateEnv.createMarker(nowInput);
}
var CalendarApi = function() {
  function CalendarApi2() {
  }
  CalendarApi2.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  };
  CalendarApi2.prototype.dispatch = function(action) {
    return this.currentDataManager.dispatch(action);
  };
  Object.defineProperty(CalendarApi2.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: false,
    configurable: true
  });
  CalendarApi2.prototype.batchRendering = function(callback) {
    callback();
  };
  CalendarApi2.prototype.updateSize = function() {
    this.trigger("_resize", true);
  };
  CalendarApi2.prototype.setOption = function(name, val) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: name,
      rawOptionValue: val
    });
  };
  CalendarApi2.prototype.getOption = function(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  };
  CalendarApi2.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  };
  CalendarApi2.prototype.on = function(handlerName, handler) {
    var currentDataManager = this.currentDataManager;
    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn("Unknown listener name '" + handlerName + "'");
    }
  };
  CalendarApi2.prototype.off = function(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  };
  CalendarApi2.prototype.trigger = function(handlerName) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    (_a = this.currentDataManager.emitter).trigger.apply(_a, __spreadArray([handlerName], args));
  };
  CalendarApi2.prototype.changeView = function(viewType, dateOrRange) {
    var _this = this;
    this.batchRendering(function() {
      _this.unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          _this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType
          });
          _this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: dateOrRange
          });
        } else {
          var dateEnv = _this.getCurrentData().dateEnv;
          _this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        _this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType
        });
      }
    });
  };
  CalendarApi2.prototype.zoomTo = function(dateMarker, viewType) {
    var state = this.getCurrentData();
    var spec;
    viewType = viewType || "day";
    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();
    if (spec) {
      this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker
      });
    }
  };
  CalendarApi2.prototype.getUnitViewSpec = function(unit) {
    var _a = this.getCurrentData(), viewSpecs = _a.viewSpecs, toolbarConfig = _a.toolbarConfig;
    var viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    var i2;
    var spec;
    for (var viewType in viewSpecs) {
      viewTypes.push(viewType);
    }
    for (i2 = 0; i2 < viewTypes.length; i2 += 1) {
      spec = viewSpecs[viewTypes[i2]];
      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
    return null;
  };
  CalendarApi2.prototype.prev = function() {
    this.unselect();
    this.dispatch({ type: "PREV" });
  };
  CalendarApi2.prototype.next = function() {
    this.unselect();
    this.dispatch({ type: "NEXT" });
  };
  CalendarApi2.prototype.prevYear = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  };
  CalendarApi2.prototype.nextYear = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  };
  CalendarApi2.prototype.today = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  };
  CalendarApi2.prototype.gotoDate = function(zonedDateInput) {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  };
  CalendarApi2.prototype.incrementDate = function(deltaInput) {
    var state = this.getCurrentData();
    var delta = createDuration(deltaInput);
    if (delta) {
      this.unselect();
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  };
  CalendarApi2.prototype.getDate = function() {
    var state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  };
  CalendarApi2.prototype.formatDate = function(d2, formatter) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.format(dateEnv.createMarker(d2), createFormatter(formatter));
  };
  CalendarApi2.prototype.formatRange = function(d0, d1, settings) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  };
  CalendarApi2.prototype.formatIso = function(d2, omitTime) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatIso(dateEnv.createMarker(d2), { omitTime });
  };
  CalendarApi2.prototype.select = function(dateOrObj, endDate) {
    var selectionInput;
    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }
    var state = this.getCurrentData();
    var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
    if (selection) {
      this.dispatch({ type: "SELECT_DATES", selection });
      triggerDateSelect(selection, null, state);
    }
  };
  CalendarApi2.prototype.unselect = function(pev) {
    var state = this.getCurrentData();
    if (state.dateSelection) {
      this.dispatch({ type: "UNSELECT_DATES" });
      triggerDateUnselect(pev, state);
    }
  };
  CalendarApi2.prototype.addEvent = function(eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      var def = eventInput._def;
      var instance = eventInput._instance;
      var currentData = this.getCurrentData();
      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: "ADD_EVENTS",
          eventStore: eventTupleToStore({ def, instance })
        });
        this.triggerEventAdd(eventInput);
      }
      return eventInput;
    }
    var state = this.getCurrentData();
    var eventSource;
    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === "boolean") {
      if (sourceInput) {
        eventSource = hashValuesToArray(state.eventSources)[0];
      }
    } else if (sourceInput != null) {
      var sourceApi = this.getEventSourceById(sourceInput);
      if (!sourceApi) {
        console.warn('Could not find an event source with ID "' + sourceInput + '"');
        return null;
      }
      eventSource = sourceApi.internalEventSource;
    }
    var tuple = parseEvent(eventInput, eventSource, state, false);
    if (tuple) {
      var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: "ADD_EVENTS",
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }
    return null;
  };
  CalendarApi2.prototype.triggerEventAdd = function(eventApi) {
    var _this = this;
    var emitter = this.getCurrentData().emitter;
    emitter.trigger("eventAdd", {
      event: eventApi,
      relatedEvents: [],
      revert: function() {
        _this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  };
  CalendarApi2.prototype.getEventById = function(id) {
    var state = this.getCurrentData();
    var _a = state.eventStore, defs = _a.defs, instances = _a.instances;
    id = String(id);
    for (var defId in defs) {
      var def = defs[defId];
      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        }
        for (var instanceId in instances) {
          var instance = instances[instanceId];
          if (instance.defId === def.defId) {
            return new EventApi(state, def, instance);
          }
        }
      }
    }
    return null;
  };
  CalendarApi2.prototype.getEvents = function() {
    var currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  };
  CalendarApi2.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  };
  CalendarApi2.prototype.getEventSources = function() {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    var sourceApis = [];
    for (var internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }
    return sourceApis;
  };
  CalendarApi2.prototype.getEventSourceById = function(id) {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    id = String(id);
    for (var sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }
    return null;
  };
  CalendarApi2.prototype.addEventSource = function(sourceInput) {
    var state = this.getCurrentData();
    if (sourceInput instanceof EventSourceApi) {
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [sourceInput.internalEventSource]
        });
      }
      return sourceInput;
    }
    var eventSource = parseEventSource(sourceInput, state);
    if (eventSource) {
      this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [eventSource] });
      return new EventSourceApi(state, eventSource);
    }
    return null;
  };
  CalendarApi2.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  };
  CalendarApi2.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: true });
  };
  CalendarApi2.prototype.scrollToTime = function(timeInput) {
    var time = createDuration(timeInput);
    if (time) {
      this.trigger("_scrollRequest", { time });
    }
  };
  return CalendarApi2;
}();
var EventApi = function() {
  function EventApi2(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  EventApi2.prototype.setProp = function(name, val) {
    var _a, _b;
    if (name in EVENT_DATE_REFINERS) {
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    } else if (name === "id") {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { publicId: val }
      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: (_a = {}, _a[name] = val, _a)
      });
    } else if (name in EVENT_UI_REFINERS) {
      var ui = EVENT_UI_REFINERS[name](val);
      if (name === "color") {
        ui = { backgroundColor: val, borderColor: val };
      } else if (name === "editable") {
        ui = { startEditable: val, durationEditable: val };
      } else {
        ui = (_b = {}, _b[name] = val, _b);
      }
      this.mutate({
        standardProps: { ui }
      });
    } else {
      console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    }
  };
  EventApi2.prototype.setExtendedProp = function(name, val) {
    var _a;
    this.mutate({
      extendedProps: (_a = {}, _a[name] = val, _a)
    });
  };
  EventApi2.prototype.setStart = function(startInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var start = dateEnv.createMarker(startInput);
    if (start && this._instance) {
      var instanceRange = this._instance.range;
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
      if (options.maintainDuration) {
        this.mutate({ datesDelta: startDelta });
      } else {
        this.mutate({ startDelta });
      }
    }
  };
  EventApi2.prototype.setEnd = function(endInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var end;
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      if (end) {
        var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({ endDelta });
      } else {
        this.mutate({ standardProps: { hasEnd: false } });
      }
    }
  };
  EventApi2.prototype.setDates = function(startInput, endInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var standardProps = { allDay: options.allDay };
    var start = dateEnv.createMarker(startInput);
    var end;
    if (!start) {
      return;
    }
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      var instanceRange = this._instance.range;
      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
      if (end) {
        var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({ datesDelta: startDelta, standardProps });
        } else {
          this.mutate({ startDelta, endDelta, standardProps });
        }
      } else {
        standardProps.hasEnd = false;
        this.mutate({ datesDelta: startDelta, standardProps });
      }
    }
  };
  EventApi2.prototype.moveStart = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ startDelta: delta });
    }
  };
  EventApi2.prototype.moveEnd = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ endDelta: delta });
    }
  };
  EventApi2.prototype.moveDates = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ datesDelta: delta });
    }
  };
  EventApi2.prototype.setAllDay = function(allDay, options) {
    if (options === void 0) {
      options = {};
    }
    var standardProps = { allDay };
    var maintainDuration = options.maintainDuration;
    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }
    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }
    this.mutate({ standardProps });
  };
  EventApi2.prototype.formatRange = function(formatInput) {
    var dateEnv = this._context.dateEnv;
    var instance = this._instance;
    var formatter = createFormatter(formatInput);
    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }
    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  };
  EventApi2.prototype.mutate = function(mutation) {
    var instance = this._instance;
    if (instance) {
      var def = this._def;
      var context_1 = this._context;
      var eventStore_1 = context_1.getCurrentData().eventStore;
      var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
      var eventConfigBase = {
        "": {
          display: "",
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
      var oldEvent = new EventApi2(context_1, def, instance);
      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context_1.dispatch({
        type: "MERGE_EVENTS",
        eventStore: relevantEvents
      });
      context_1.emitter.trigger("eventChange", {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context_1, instance),
        revert: function() {
          context_1.dispatch({
            type: "RESET_EVENTS",
            eventStore: eventStore_1
          });
        }
      });
    }
  };
  EventApi2.prototype.remove = function() {
    var context = this._context;
    var asStore = eventApiToStore(this);
    context.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: asStore
    });
    context.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: asStore
        });
      }
    });
  };
  Object.defineProperty(EventApi2.prototype, "source", {
    get: function() {
      var sourceId = this._def.sourceId;
      if (sourceId) {
        return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }
      return null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "startStr", {
    get: function() {
      var instance = this._instance;
      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }
      return "";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "endStr", {
    get: function() {
      var instance = this._instance;
      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }
      return "";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: false,
    configurable: true
  });
  EventApi2.prototype.toPlainObject = function(settings) {
    if (settings === void 0) {
      settings = {};
    }
    var def = this._def;
    var ui = def.ui;
    var _a = this, startStr = _a.startStr, endStr = _a.endStr;
    var res = {};
    if (def.title) {
      res.title = def.title;
    }
    if (startStr) {
      res.start = startStr;
    }
    if (endStr) {
      res.end = endStr;
    }
    if (def.publicId) {
      res.id = def.publicId;
    }
    if (def.groupId) {
      res.groupId = def.groupId;
    }
    if (def.url) {
      res.url = def.url;
    }
    if (ui.display && ui.display !== "auto") {
      res.display = ui.display;
    }
    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }
      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }
    if (ui.textColor) {
      res.textColor = ui.textColor;
    }
    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }
    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        __assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }
    return res;
  };
  EventApi2.prototype.toJSON = function() {
    return this.toPlainObject();
  };
  return EventApi2;
}();
function eventApiToStore(eventApi) {
  var _a, _b;
  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: (_a = {}, _a[def.defId] = def, _a),
    instances: instance ? (_b = {}, _b[instance.instanceId] = instance, _b) : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs, instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : "";
  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }
  return eventApis;
}
var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = function() {
  function GregorianCalendarSystem2() {
  }
  GregorianCalendarSystem2.prototype.getMarkerYear = function(d2) {
    return d2.getUTCFullYear();
  };
  GregorianCalendarSystem2.prototype.getMarkerMonth = function(d2) {
    return d2.getUTCMonth();
  };
  GregorianCalendarSystem2.prototype.getMarkerDay = function(d2) {
    return d2.getUTCDate();
  };
  GregorianCalendarSystem2.prototype.arrayToMarker = function(arr) {
    return arrayToUtcDate(arr);
  };
  GregorianCalendarSystem2.prototype.markerToArray = function(marker) {
    return dateToUtcArray(marker);
  };
  return GregorianCalendarSystem2;
}();
registerCalendarSystem("gregory", GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
  var m2 = ISO_RE.exec(str);
  if (m2) {
    var marker = new Date(Date.UTC(Number(m2[1]), m2[3] ? Number(m2[3]) - 1 : 0, Number(m2[5] || 1), Number(m2[7] || 0), Number(m2[8] || 0), Number(m2[10] || 0), m2[12] ? Number("0." + m2[12]) * 1e3 : 0));
    if (isValidDate(marker)) {
      var timeZoneOffset = null;
      if (m2[13]) {
        timeZoneOffset = (m2[15] === "-" ? -1 : 1) * (Number(m2[16] || 0) * 60 + Number(m2[18] || 0));
      }
      return {
        marker,
        isTimeUnspecified: !m2[6],
        timeZoneOffset
      };
    }
  }
  return null;
}
var DateEnv = function() {
  function DateEnv2(settings) {
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== "local" && timeZone !== "UTC";
    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }
    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === "ISO") {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === "number") {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === "function") {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  }
  DateEnv2.prototype.createMarker = function(input) {
    var meta = this.createMarkerMeta(input);
    if (meta === null) {
      return null;
    }
    return meta.marker;
  };
  DateEnv2.prototype.createNowMarker = function() {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    }
    return arrayToUtcDate(dateToLocalArray(new Date()));
  };
  DateEnv2.prototype.createMarkerMeta = function(input) {
    if (typeof input === "string") {
      return this.parse(input);
    }
    var marker = null;
    if (typeof input === "number") {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();
      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }
    if (marker === null || !isValidDate(marker)) {
      return null;
    }
    return { marker, isTimeUnspecified: false, forcedTzo: null };
  };
  DateEnv2.prototype.parse = function(s2) {
    var parts = parse(s2);
    if (parts === null) {
      return null;
    }
    var marker = parts.marker;
    var forcedTzo = null;
    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1e3);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }
    return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
  };
  DateEnv2.prototype.getYear = function(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  };
  DateEnv2.prototype.getMonth = function(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  };
  DateEnv2.prototype.add = function(marker, dur) {
    var a2 = this.calendarSystem.markerToArray(marker);
    a2[0] += dur.years;
    a2[1] += dur.months;
    a2[2] += dur.days;
    a2[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a2);
  };
  DateEnv2.prototype.subtract = function(marker, dur) {
    var a2 = this.calendarSystem.markerToArray(marker);
    a2[0] -= dur.years;
    a2[1] -= dur.months;
    a2[2] -= dur.days;
    a2[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a2);
  };
  DateEnv2.prototype.addYears = function(marker, n2) {
    var a2 = this.calendarSystem.markerToArray(marker);
    a2[0] += n2;
    return this.calendarSystem.arrayToMarker(a2);
  };
  DateEnv2.prototype.addMonths = function(marker, n2) {
    var a2 = this.calendarSystem.markerToArray(marker);
    a2[1] += n2;
    return this.calendarSystem.arrayToMarker(a2);
  };
  DateEnv2.prototype.diffWholeYears = function(m0, m1) {
    var calendarSystem = this.calendarSystem;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }
    return null;
  };
  DateEnv2.prototype.diffWholeMonths = function(m0, m1) {
    var calendarSystem = this.calendarSystem;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }
    return null;
  };
  DateEnv2.prototype.greatestWholeUnit = function(m0, m1) {
    var n2 = this.diffWholeYears(m0, m1);
    if (n2 !== null) {
      return { unit: "year", value: n2 };
    }
    n2 = this.diffWholeMonths(m0, m1);
    if (n2 !== null) {
      return { unit: "month", value: n2 };
    }
    n2 = diffWholeWeeks(m0, m1);
    if (n2 !== null) {
      return { unit: "week", value: n2 };
    }
    n2 = diffWholeDays(m0, m1);
    if (n2 !== null) {
      return { unit: "day", value: n2 };
    }
    n2 = diffHours(m0, m1);
    if (isInt(n2)) {
      return { unit: "hour", value: n2 };
    }
    n2 = diffMinutes(m0, m1);
    if (isInt(n2)) {
      return { unit: "minute", value: n2 };
    }
    n2 = diffSeconds(m0, m1);
    if (isInt(n2)) {
      return { unit: "second", value: n2 };
    }
    return { unit: "millisecond", value: m1.valueOf() - m0.valueOf() };
  };
  DateEnv2.prototype.countDurationsBetween = function(m0, m1, d2) {
    var diff;
    if (d2.years) {
      diff = this.diffWholeYears(m0, m1);
      if (diff !== null) {
        return diff / asRoughYears(d2);
      }
    }
    if (d2.months) {
      diff = this.diffWholeMonths(m0, m1);
      if (diff !== null) {
        return diff / asRoughMonths(d2);
      }
    }
    if (d2.days) {
      diff = diffWholeDays(m0, m1);
      if (diff !== null) {
        return diff / asRoughDays(d2);
      }
    }
    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d2);
  };
  DateEnv2.prototype.startOf = function(m2, unit) {
    if (unit === "year") {
      return this.startOfYear(m2);
    }
    if (unit === "month") {
      return this.startOfMonth(m2);
    }
    if (unit === "week") {
      return this.startOfWeek(m2);
    }
    if (unit === "day") {
      return startOfDay(m2);
    }
    if (unit === "hour") {
      return startOfHour(m2);
    }
    if (unit === "minute") {
      return startOfMinute(m2);
    }
    if (unit === "second") {
      return startOfSecond(m2);
    }
    return null;
  };
  DateEnv2.prototype.startOfYear = function(m2) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m2)
    ]);
  };
  DateEnv2.prototype.startOfMonth = function(m2) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m2),
      this.calendarSystem.getMarkerMonth(m2)
    ]);
  };
  DateEnv2.prototype.startOfWeek = function(m2) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m2),
      this.calendarSystem.getMarkerMonth(m2),
      m2.getUTCDate() - (m2.getUTCDay() - this.weekDow + 7) % 7
    ]);
  };
  DateEnv2.prototype.computeWeekNumber = function(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }
    return weekOfYear(marker, this.weekDow, this.weekDoy);
  };
  DateEnv2.prototype.format = function(marker, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }
    return formatter.format({
      marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  };
  DateEnv2.prototype.formatRange = function(start, end, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }
    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  };
  DateEnv2.prototype.formatIso = function(marker, extraOptions) {
    if (extraOptions === void 0) {
      extraOptions = {};
    }
    var timeZoneOffset = null;
    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }
    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  };
  DateEnv2.prototype.timestampToMarker = function(ms) {
    if (this.timeZone === "local") {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }
    if (this.timeZone === "UTC" || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }
    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  };
  DateEnv2.prototype.offsetForMarker = function(m2) {
    if (this.timeZone === "local") {
      return -arrayToLocalDate(dateToUtcArray(m2)).getTimezoneOffset();
    }
    if (this.timeZone === "UTC") {
      return 0;
    }
    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m2));
    }
    return null;
  };
  DateEnv2.prototype.toDate = function(m2, forcedTzo) {
    if (this.timeZone === "local") {
      return arrayToLocalDate(dateToUtcArray(m2));
    }
    if (this.timeZone === "UTC") {
      return new Date(m2.valueOf());
    }
    if (!this.namedTimeZoneImpl) {
      return new Date(m2.valueOf() - (forcedTzo || 0));
    }
    return new Date(m2.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m2)) * 1e3 * 60);
  };
  return DateEnv2;
}();
var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
};
var RAW_EN_LOCALE = __assign(__assign({}, MINIMAL_RAW_EN_LOCALE), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(buttonText, unit) {
      return unit === "day" ? "Today" : "This " + buttonText;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(eventCnt) {
    return "Show " + eventCnt + " more event" + (eventCnt === 1 ? "" : "s");
  }
});
function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : "en";
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
    var rawLocale = allRawLocales_1[_i];
    rawLocaleMap[rawLocale.code] = rawLocale;
  }
  return {
    map: rawLocaleMap,
    defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (typeof inputSingular === "object" && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []);
  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (var i2 = 0; i2 < codes.length; i2 += 1) {
    var parts = codes[i2].toLocaleLowerCase().split("-");
    for (var j2 = parts.length; j2 > 0; j2 -= 1) {
      var simpleId = parts.slice(0, j2).join("-");
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  var merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ["buttonText"]);
  delete merged.code;
  var week = merged.week;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}
var DEF_DEFAULTS = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  var rawDefs;
  if (input === true) {
    rawDefs = [{}];
  } else if (Array.isArray(input)) {
    rawDefs = input.filter(function(rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (typeof input === "object" && input) {
    rawDefs = [input];
  } else {
    rawDefs = [];
  }
  rawDefs = rawDefs.map(function(rawDef) {
    return __assign(__assign({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}
function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
}
function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
}
function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
}
function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}
var canVGrowWithinCell;
function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }
  return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
  if (typeof document === "undefined") {
    return true;
  }
  var el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "0px";
  el.style.left = "0px";
  el.innerHTML = "<table><tr><td><div></div></td></tr></table>";
  el.querySelector("table").style.height = "100px";
  el.querySelector("div").style.height = "100%";
  document.body.appendChild(el);
  var div = el.querySelector("div");
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}
var EMPTY_EVENT_STORE = createEmptyEventStore();
var Splitter = function() {
  function Splitter2() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {};
  }
  Splitter2.prototype.splitProps = function(props) {
    var _this = this;
    var keyInfos = this.getKeyInfo(props);
    var defKeys = this.getKeysForEventDefs(props.eventStore);
    var dateSelections = this.splitDateSelection(props.dateSelection);
    var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys);
    var eventStores = this.splitEventStore(props.eventStore, defKeys);
    var eventDrags = this.splitEventDrag(props.eventDrag);
    var eventResizes = this.splitEventResize(props.eventResize);
    var splitProps = {};
    this.eventUiBuilders = mapHash$1(keyInfos, function(info, key2) {
      return _this.eventUiBuilders[key2] || memoize(buildEventUiForKey);
    });
    for (var key in keyInfos) {
      var keyInfo = keyInfos[key];
      var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      var buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[""], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : "",
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }
    return splitProps;
  };
  Splitter2.prototype._splitDateSpan = function(dateSpan) {
    var dateSpans = {};
    if (dateSpan) {
      var keys = this.getKeysForDateSpan(dateSpan);
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        dateSpans[key] = dateSpan;
      }
    }
    return dateSpans;
  };
  Splitter2.prototype._getKeysForEventDefs = function(eventStore) {
    var _this = this;
    return mapHash$1(eventStore.defs, function(eventDef) {
      return _this.getKeysForEventDef(eventDef);
    });
  };
  Splitter2.prototype._splitEventStore = function(eventStore, defKeys) {
    var defs = eventStore.defs, instances = eventStore.instances;
    var splitStores = {};
    for (var defId in defs) {
      for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
        var key = _a[_i];
        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }
        splitStores[key].defs[defId] = defs[defId];
      }
    }
    for (var instanceId in instances) {
      var instance = instances[instanceId];
      for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
        var key = _c[_b];
        if (splitStores[key]) {
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }
    return splitStores;
  };
  Splitter2.prototype._splitIndividualUi = function(eventUiBases, defKeys) {
    var splitHashes = {};
    for (var defId in eventUiBases) {
      if (defId) {
        for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
          var key = _a[_i];
          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }
          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }
    return splitHashes;
  };
  Splitter2.prototype._splitInteraction = function(interaction) {
    var splitStates = {};
    if (interaction) {
      var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
      var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
      var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
      var populate = function(key2) {
        if (!splitStates[key2]) {
          splitStates[key2] = {
            affectedEvents: affectedStores_1[key2] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores_1[key2] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };
      for (var key in affectedStores_1) {
        populate(key);
      }
      for (var key in mutatedStores_1) {
        populate(key);
      }
    }
    return splitStates;
  };
  return Splitter2;
}();
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];
  if (allUi) {
    baseParts.push(allUi);
  }
  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }
  var stuff = {
    "": combineEventUis(baseParts)
  };
  if (individualUi) {
    __assign(stuff, individualUi);
  }
  return stuff;
}
function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}
function getDayClassNames(meta, theme) {
  var classNames = [
    "fc-day",
    "fc-day-" + DAY_IDS[meta.dow]
  ];
  if (meta.isDisabled) {
    classNames.push("fc-day-disabled");
  } else {
    if (meta.isToday) {
      classNames.push("fc-day-today");
      classNames.push(theme.getClass("today"));
    }
    if (meta.isPast) {
      classNames.push("fc-day-past");
    }
    if (meta.isFuture) {
      classNames.push("fc-day-future");
    }
    if (meta.isOther) {
      classNames.push("fc-day-other");
    }
  }
  return classNames;
}
var DAY_FORMAT = createFormatter({ year: "numeric", month: "long", day: "numeric" });
var WEEK_FORMAT = createFormatter({ week: "long" });
function buildNavLinkAttrs(context, dateMarker, viewType, isTabbable) {
  if (viewType === void 0) {
    viewType = "day";
  }
  if (isTabbable === void 0) {
    isTabbable = true;
  }
  var dateEnv = context.dateEnv, options = context.options, calendarApi = context.calendarApi;
  var dateStr = dateEnv.format(dateMarker, viewType === "week" ? WEEK_FORMAT : DAY_FORMAT);
  if (options.navLinks) {
    var zonedDate = dateEnv.toDate(dateMarker);
    var handleInteraction = function(ev) {
      var customAction = viewType === "day" ? options.navLinkDayClick : viewType === "week" ? options.navLinkWeekClick : null;
      if (typeof customAction === "function") {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === "string") {
          viewType = customAction;
        }
        calendarApi.zoomTo(dateMarker, viewType);
      }
    };
    return __assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), "data-navlink": "" }, isTabbable ? createAriaClickAttrs(handleInteraction) : { onClick: handleInteraction });
  }
  return { "aria-label": dateStr };
}
var _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }
  return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
  var outerEl = document.createElement("div");
  applyStyle(outerEl, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  });
  outerEl.innerHTML = "<div></div>";
  document.body.appendChild(outerEl);
  var innerEl = outerEl.firstChild;
  var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}
var _scrollbarWidths;
function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }
  return _scrollbarWidths;
}
function computeScrollbarWidths() {
  var el = document.createElement("div");
  el.style.overflow = "scroll";
  el.style.position = "absolute";
  el.style.top = "-9999px";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
}
function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}
function computeEdges(el, getPadding) {
  if (getPadding === void 0) {
    getPadding = false;
  }
  var computedStyle = window.getComputedStyle(el);
  var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  var badScrollbarWidths = computeScrollbarWidthsForEl(el);
  var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  var res = {
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === "rtl") {
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }
  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }
  return res;
}
function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
  if (goWithinPadding === void 0) {
    goWithinPadding = false;
  }
  var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  var edges = computeEdges(el, goWithinPadding);
  var res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };
  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }
  return res;
}
function computeRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}
function computeClippedClientRect(el) {
  var clippingParents = getClippingParents(el);
  var rect = el.getBoundingClientRect();
  for (var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
    var clippingParent = clippingParents_1[_i];
    var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }
  return rect;
}
function getClippingParents(el) {
  var parents = [];
  while (el instanceof HTMLElement) {
    var computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === "fixed") {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}
function unpromisify(func, success, failure) {
  var isResolved = false;
  var wrappedSuccess = function() {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments);
    }
  };
  var wrappedFailure = function() {
    if (!isResolved) {
      isResolved = true;
      if (failure) {
        failure.apply(this, arguments);
      }
    }
  };
  var res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === "function") {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
var Emitter = function() {
  function Emitter2() {
    this.handlers = {};
    this.thisContext = null;
  }
  Emitter2.prototype.setThisContext = function(thisContext) {
    this.thisContext = thisContext;
  };
  Emitter2.prototype.setOptions = function(options) {
    this.options = options;
  };
  Emitter2.prototype.on = function(type, handler) {
    addToHash(this.handlers, type, handler);
  };
  Emitter2.prototype.off = function(type, handler) {
    removeFromHash(this.handlers, type, handler);
  };
  Emitter2.prototype.trigger = function(type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var attachedHandlers = this.handlers[type] || [];
    var optionHandler = this.options && this.options[type];
    var handlers = [].concat(optionHandler || [], attachedHandlers);
    for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
      var handler = handlers_1[_a];
      handler.apply(this.thisContext, args);
    }
  };
  Emitter2.prototype.hasHandlers = function(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  };
  return Emitter2;
}();
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function(func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type];
  }
}
var PositionCache = function() {
  function PositionCache2(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect();
    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }
    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  }
  PositionCache2.prototype.buildElHorizontals = function(originClientLeft) {
    var lefts = [];
    var rights = [];
    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }
    this.lefts = lefts;
    this.rights = rights;
  };
  PositionCache2.prototype.buildElVerticals = function(originClientTop) {
    var tops = [];
    var bottoms = [];
    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }
    this.tops = tops;
    this.bottoms = bottoms;
  };
  PositionCache2.prototype.leftToIndex = function(leftPosition) {
    var _a = this, lefts = _a.lefts, rights = _a.rights;
    var len = lefts.length;
    var i2;
    for (i2 = 0; i2 < len; i2 += 1) {
      if (leftPosition >= lefts[i2] && leftPosition < rights[i2]) {
        return i2;
      }
    }
    return void 0;
  };
  PositionCache2.prototype.topToIndex = function(topPosition) {
    var _a = this, tops = _a.tops, bottoms = _a.bottoms;
    var len = tops.length;
    var i2;
    for (i2 = 0; i2 < len; i2 += 1) {
      if (topPosition >= tops[i2] && topPosition < bottoms[i2]) {
        return i2;
      }
    }
    return void 0;
  };
  PositionCache2.prototype.getWidth = function(leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  };
  PositionCache2.prototype.getHeight = function(topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  };
  return PositionCache2;
}();
var ScrollController = function() {
  function ScrollController2() {
  }
  ScrollController2.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  };
  ScrollController2.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  };
  ScrollController2.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  };
  ScrollController2.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  };
  ScrollController2.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  };
  ScrollController2.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  };
  ScrollController2.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  };
  ScrollController2.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  };
  return ScrollController2;
}();
var ElementScrollController = function(_super) {
  __extends(ElementScrollController2, _super);
  function ElementScrollController2(el) {
    var _this = _super.call(this) || this;
    _this.el = el;
    return _this;
  }
  ElementScrollController2.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  };
  ElementScrollController2.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  };
  ElementScrollController2.prototype.setScrollTop = function(top) {
    this.el.scrollTop = top;
  };
  ElementScrollController2.prototype.setScrollLeft = function(left) {
    this.el.scrollLeft = left;
  };
  ElementScrollController2.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  };
  ElementScrollController2.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  };
  ElementScrollController2.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  };
  ElementScrollController2.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  };
  return ElementScrollController2;
}(ScrollController);
var WindowScrollController = function(_super) {
  __extends(WindowScrollController2, _super);
  function WindowScrollController2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  WindowScrollController2.prototype.getScrollTop = function() {
    return window.pageYOffset;
  };
  WindowScrollController2.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  };
  WindowScrollController2.prototype.setScrollTop = function(n2) {
    window.scroll(window.pageXOffset, n2);
  };
  WindowScrollController2.prototype.setScrollLeft = function(n2) {
    window.scroll(n2, window.pageYOffset);
  };
  WindowScrollController2.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  };
  WindowScrollController2.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  };
  WindowScrollController2.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  };
  WindowScrollController2.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  };
  return WindowScrollController2;
}(ScrollController);
var Theme = function() {
  function Theme2(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }
  Theme2.prototype.setIconOverride = function(iconOverrideHash) {
    var iconClassesCopy;
    var buttonName;
    if (typeof iconOverrideHash === "object" && iconOverrideHash) {
      iconClassesCopy = __assign({}, this.iconClasses);
      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }
      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  };
  Theme2.prototype.applyIconOverridePrefix = function(className) {
    var prefix = this.iconOverridePrefix;
    if (prefix && className.indexOf(prefix) !== 0) {
      className = prefix + className;
    }
    return className;
  };
  Theme2.prototype.getClass = function(key) {
    return this.classes[key] || "";
  };
  Theme2.prototype.getIconClass = function(buttonName, isRtl) {
    var className;
    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }
    if (className) {
      return this.baseIconClass + " " + className;
    }
    return "";
  };
  Theme2.prototype.getCustomButtonIconClass = function(customButtonProps) {
    var className;
    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];
      if (className) {
        return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
      }
    }
    return "";
  };
  return Theme2;
}();
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = "";
Theme.prototype.iconOverridePrefix = "";
var ScrollResponder = function() {
  function ScrollResponder2(execFunc, emitter, scrollTime, scrollTimeReset) {
    var _this = this;
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;
    this.handleScrollRequest = function(request) {
      _this.queuedRequest = __assign({}, _this.queuedRequest || {}, request);
      _this.drain();
    };
    emitter.on("_scrollRequest", this.handleScrollRequest);
    this.fireInitialScroll();
  }
  ScrollResponder2.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  };
  ScrollResponder2.prototype.update = function(isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll();
    } else {
      this.drain();
    }
  };
  ScrollResponder2.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  };
  ScrollResponder2.prototype.drain = function() {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  };
  return ScrollResponder2;
}();
var ViewContextType = createContext({});
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    theme,
    isRtl: viewOptions.direction === "rtl",
    addResizeHandler: function(handler) {
      emitter.on("_resize", handler);
    },
    removeResizeHandler: function(handler) {
      emitter.off("_resize", handler);
    },
    createScrollResponder: function(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}
var PureComponent = function(_super) {
  __extends(PureComponent2, _super);
  function PureComponent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PureComponent2.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    if (this.debug) {
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }
    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  };
  PureComponent2.prototype.safeSetState = function(newState) {
    if (!compareObjs(this.state, __assign(__assign({}, this.state), newState), this.stateEquality)) {
      this.setState(newState);
    }
  };
  PureComponent2.addPropsEquality = addPropsEquality;
  PureComponent2.addStateEquality = addStateEquality;
  PureComponent2.contextType = ViewContextType;
  return PureComponent2;
}(Component);
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = function(_super) {
  __extends(BaseComponent2, _super);
  function BaseComponent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BaseComponent2.contextType = ViewContextType;
  return BaseComponent2;
}(PureComponent);
function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);
  __assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);
  __assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
function setRef(ref2, current) {
  if (typeof ref2 === "function") {
    ref2(current);
  } else if (ref2) {
    ref2.current = current;
  }
}
var DateComponent = function(_super) {
  __extends(DateComponent2, _super);
  function DateComponent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.uid = guid();
    return _this;
  }
  DateComponent2.prototype.prepareHits = function() {
  };
  DateComponent2.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
    return null;
  };
  DateComponent2.prototype.isValidSegDownEl = function(el) {
    return !this.props.eventDrag && !this.props.eventResize && !elementClosest(el, ".fc-event-mirror");
  };
  DateComponent2.prototype.isValidDateDownEl = function(el) {
    return !elementClosest(el, ".fc-event:not(.fc-bg-event)") && !elementClosest(el, ".fc-more-link") && !elementClosest(el, "a[data-navlink]") && !elementClosest(el, ".fc-popover");
  };
  return DateComponent2;
}(BaseComponent);
function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || "",
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  var isAdded = {};
  var hooks = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function addDefs(defs) {
    for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
      var def = defs_1[_i];
      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function(overrideDefs, globalDefs) {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: __assign(__assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: __assign(__assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: __assign(__assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: __assign(__assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: __assign(__assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: __assign(__assign({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: __assign(__assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: __assign(__assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: __assign(__assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}
var StandardTheme = function(_super) {
  __extends(StandardTheme2, _super);
  function StandardTheme2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return StandardTheme2;
}(Theme);
StandardTheme.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
StandardTheme.prototype.baseIconClass = "fc-icon";
StandardTheme.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
StandardTheme.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
StandardTheme.prototype.iconOverrideOption = "buttonIcons";
StandardTheme.prototype.iconOverrideCustomButtonOption = "icon";
StandardTheme.prototype.iconOverridePrefix = "fc-icon-";
function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];
  var queryProp = function(name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };
  var theComponent = queryProp("component");
  var superType = queryProp("superType");
  var superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error("Can't have a custom view type that references itself");
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null;
  }
  return {
    type: viewType,
    component: theComponent,
    defaults: __assign(__assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: __assign(__assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
var RenderHook = function(_super) {
  __extends(RenderHook2, _super);
  function RenderHook2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef();
    _this.handleRootEl = function(el) {
      setRef(_this.rootElRef, el);
      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };
    return _this;
  }
  RenderHook2.prototype.render = function() {
    var _this = this;
    var props = this.props;
    var hookProps = props.hookProps;
    return createElement(MountHook, { hookProps, didMount: props.didMount, willUnmount: props.willUnmount, elRef: this.handleRootEl }, function(rootElRef) {
      return createElement(ContentHook, { hookProps, content: props.content, defaultContent: props.defaultContent, backupElRef: _this.rootElRef }, function(innerElRef, innerContent) {
        return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
      });
    });
  };
  return RenderHook2;
}(BaseComponent);
var CustomContentRenderContext = createContext(0);
function ContentHook(props) {
  return createElement(CustomContentRenderContext.Consumer, null, function(renderId) {
    return createElement(ContentHookInner, __assign({ renderId }, props));
  });
}
var ContentHookInner = function(_super) {
  __extends(ContentHookInner2, _super);
  function ContentHookInner2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.innerElRef = createRef();
    return _this;
  }
  ContentHookInner2.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  };
  ContentHookInner2.prototype.componentDidMount = function() {
    this.updateCustomContent();
  };
  ContentHookInner2.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  };
  ContentHookInner2.prototype.componentWillUnmount = function() {
    if (this.customContentInfo && this.customContentInfo.destroy) {
      this.customContentInfo.destroy();
    }
  };
  ContentHookInner2.prototype.renderInnerContent = function() {
    var customContentInfo = this.customContentInfo;
    var innerContent = this.getInnerContent();
    var meta = this.getContentMeta(innerContent);
    if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
      if (customContentInfo) {
        if (customContentInfo.destroy) {
          customContentInfo.destroy();
        }
        customContentInfo = this.customContentInfo = null;
      }
      if (meta.contentKey) {
        customContentInfo = this.customContentInfo = __assign({ contentKey: meta.contentKey, contentVal: innerContent[meta.contentKey] }, meta.buildLifecycleFuncs());
      }
    } else if (customContentInfo) {
      customContentInfo.contentVal = innerContent[meta.contentKey];
    }
    return customContentInfo ? [] : innerContent;
  };
  ContentHookInner2.prototype.getInnerContent = function() {
    var props = this.props;
    var innerContent = normalizeContent(props.content, props.hookProps);
    if (innerContent === void 0) {
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }
    return innerContent == null ? null : innerContent;
  };
  ContentHookInner2.prototype.getContentMeta = function(innerContent) {
    var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
    var contentKey = "";
    var buildLifecycleFuncs = null;
    if (innerContent) {
      for (var searchKey in contentTypeHandlers) {
        if (innerContent[searchKey] !== void 0) {
          contentKey = searchKey;
          buildLifecycleFuncs = contentTypeHandlers[searchKey];
          break;
        }
      }
    }
    return { contentKey, buildLifecycleFuncs };
  };
  ContentHookInner2.prototype.updateCustomContent = function() {
    if (this.customContentInfo) {
      this.customContentInfo.render(
        this.innerElRef.current || this.props.backupElRef.current,
        this.customContentInfo.contentVal
      );
    }
  };
  return ContentHookInner2;
}(BaseComponent);
var MountHook = function(_super) {
  __extends(MountHook2, _super);
  function MountHook2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (_this.props.elRef) {
        setRef(_this.props.elRef, rootEl);
      }
    };
    return _this;
  }
  MountHook2.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  };
  MountHook2.prototype.componentDidMount = function() {
    var callback = this.props.didMount;
    if (callback) {
      callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
    }
  };
  MountHook2.prototype.componentWillUnmount = function() {
    var callback = this.props.willUnmount;
    if (callback) {
      callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
    }
  };
  return MountHook2;
}(BaseComponent);
function buildClassNameNormalizer() {
  var currentGenerator;
  var currentHookProps;
  var currentClassNames = [];
  return function(generator, hookProps) {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }
    return currentClassNames;
  };
}
function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === "function") {
    classNames = classNames(hookProps);
  }
  return parseClassNames(classNames);
}
function normalizeContent(input, hookProps) {
  if (typeof input === "function") {
    return input(hookProps, createElement);
  }
  return input;
}
var ViewRoot = function(_super) {
  __extends(ViewRoot2, _super);
  function ViewRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }
  ViewRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = { view: context.viewApi };
    var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return createElement(MountHook, { hookProps, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount, elRef: props.elRef }, function(rootElRef) {
      return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", "fc-view"].concat(customClassNames));
    });
  };
  return ViewRoot2;
}(BaseComponent);
function parseViewConfigs(inputs) {
  return mapHash$1(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  var rawOptions = typeof input === "function" ? { component: input } : input;
  var component = rawOptions.component;
  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions);
  }
  return {
    superType: rawOptions.type,
    component,
    rawOptions
  };
}
function createViewHookComponent(options) {
  return function(viewProps) {
    return createElement(ViewContextType.Consumer, null, function(context) {
      return createElement(ViewRoot, { viewSpec: context.viewSpec }, function(viewElRef, viewClassNames) {
        var hookProps = __assign(__assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold });
        return createElement(RenderHook, { hookProps, classNames: options.classNames, content: options.content, didMount: options.didMount, willUnmount: options.willUnmount, elRef: viewElRef }, function(rootElRef, customClassNames, innerElRef, innerContent) {
          return createElement("div", { className: viewClassNames.concat(customClassNames).join(" "), ref: rootElRef }, innerContent);
        });
      });
    });
  };
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash$1(viewDefs, function(viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = "";
  var singleUnit = "";
  var singleUnitOverrides = {};
  if (durationInput) {
    duration = createDurationCached(durationInput);
    if (duration) {
      var denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  var queryButtonText = function(optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;
    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }
    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }
    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
    return null;
  };
  var queryButtonTitle = function(optionsSubset) {
    var buttonHints = optionsSubset.buttonHints || {};
    var buttonKey = viewDef.defaults.buttonTextKey;
    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }
    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }
    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }
    return null;
  };
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: __assign(__assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS)
  };
}
var durationInputMap = {};
function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];
  if (res === void 0) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
var DateProfileGenerator = function() {
  function DateProfileGenerator2(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  DateProfileGenerator2.prototype.buildPrev = function(currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var prevDate = dateEnv.subtract(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      currentDateProfile.dateIncrement
    );
    return this.build(prevDate, -1, forceToValid);
  };
  DateProfileGenerator2.prototype.buildNext = function(currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var nextDate = dateEnv.add(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      currentDateProfile.dateIncrement
    );
    return this.build(nextDate, 1, forceToValid);
  };
  DateProfileGenerator2.prototype.build = function(currentDate, direction, forceToValid) {
    if (forceToValid === void 0) {
      forceToValid = true;
    }
    var props = this.props;
    var validRange;
    var currentInfo;
    var isRangeAllDay;
    var renderRange;
    var activeRange;
    var isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);
    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }
    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;
    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }
    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange);
    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      validRange,
      currentRange: currentInfo.range,
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      activeRange,
      renderRange,
      slotMinTime: props.slotMinTime,
      slotMaxTime: props.slotMaxTime,
      isValid,
      dateIncrement: this.buildDateIncrement(currentInfo.duration)
    };
  };
  DateProfileGenerator2.prototype.buildValidRange = function() {
    var input = this.props.validRangeInput;
    var simpleInput = typeof input === "function" ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || { start: null, end: null };
  };
  DateProfileGenerator2.prototype.buildCurrentRangeInfo = function(date, direction) {
    var props = this.props;
    var duration = null;
    var unit = null;
    var range = null;
    var dayCount;
    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = "day";
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }
    return { duration, unit, range };
  };
  DateProfileGenerator2.prototype.getFallbackDuration = function() {
    return createDuration({ day: 1 });
  };
  DateProfileGenerator2.prototype.adjustActiveRange = function(range) {
    var _a = this.props, dateEnv = _a.dateEnv, usesMinMaxTime = _a.usesMinMaxTime, slotMinTime = _a.slotMinTime, slotMaxTime = _a.slotMaxTime;
    var start = range.start, end = range.end;
    if (usesMinMaxTime) {
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start);
        start = dateEnv.add(start, slotMinTime);
      }
      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end);
        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }
    return { start, end };
  };
  DateProfileGenerator2.prototype.buildRangeFromDuration = function(date, direction, duration, unit) {
    var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
    var start;
    var end;
    var res;
    if (!dateAlignment) {
      var dateIncrement = this.props.dateIncrement;
      if (dateIncrement) {
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    }
    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }
    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = { start, end };
    }
    computeRes();
    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }
    return res;
  };
  DateProfileGenerator2.prototype.buildRangeFromDayCount = function(date, direction, dayCount) {
    var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
    var runningCount = 0;
    var start = date;
    var end;
    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }
    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;
    do {
      end = addDays(end, 1);
      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);
    return { start, end };
  };
  DateProfileGenerator2.prototype.buildCustomVisibleRange = function(date) {
    var props = this.props;
    var input = props.visibleRangeInput;
    var simpleInput = typeof input === "function" ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    var range = this.refineRange(simpleInput);
    if (range && (range.start == null || range.end == null)) {
      return null;
    }
    return range;
  };
  DateProfileGenerator2.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  };
  DateProfileGenerator2.prototype.buildDateIncrement = function(fallback) {
    var dateIncrement = this.props.dateIncrement;
    var customAlignment;
    if (dateIncrement) {
      return dateIncrement;
    }
    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }
    if (fallback) {
      return fallback;
    }
    return createDuration({ days: 1 });
  };
  DateProfileGenerator2.prototype.refineRange = function(rangeInput) {
    if (rangeInput) {
      var range = parseRange(rangeInput, this.props.dateEnv);
      if (range) {
        range = computeVisibleDayRange(range);
      }
      return range;
    }
    return null;
  };
  DateProfileGenerator2.prototype.initHiddenDays = function() {
    var hiddenDays = this.props.hiddenDays || [];
    var isHiddenDayHash = [];
    var dayCnt = 0;
    var i2;
    if (this.props.weekends === false) {
      hiddenDays.push(0, 6);
    }
    for (i2 = 0; i2 < 7; i2 += 1) {
      if (!(isHiddenDayHash[i2] = hiddenDays.indexOf(i2) !== -1)) {
        dayCnt += 1;
      }
    }
    if (!dayCnt) {
      throw new Error("invalid hiddenDays");
    }
    this.isHiddenDayHash = isHiddenDayHash;
  };
  DateProfileGenerator2.prototype.trimHiddenDays = function(range) {
    var start = range.start, end = range.end;
    if (start) {
      start = this.skipHiddenDays(start);
    }
    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }
    if (start == null || end == null || start < end) {
      return { start, end };
    }
    return null;
  };
  DateProfileGenerator2.prototype.isHiddenDay = function(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }
    return this.isHiddenDayHash[day];
  };
  DateProfileGenerator2.prototype.skipHiddenDays = function(date, inc, isExclusive) {
    if (inc === void 0) {
      inc = 1;
    }
    if (isExclusive === void 0) {
      isExclusive = false;
    }
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }
    return date;
  };
  return DateProfileGenerator2;
}();
function reduceViewType(viewType, action) {
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      viewType = action.viewType;
  }
  return viewType;
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  var _a;
  switch (action.type) {
    case "SET_OPTION":
      return __assign(__assign({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      return dateProfileGenerator.build(action.dateMarker || currentDate);
    case "CHANGE_DATE":
      return dateProfileGenerator.build(action.dateMarker);
    case "PREV":
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case "NEXT":
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  switch (action.type) {
    case "ADD_EVENT_SOURCES":
      return addSources(eventSources, action.sources, activeRange, context);
    case "REMOVE_EVENT_SOURCE":
      return removeSource(eventSources, action.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case "FETCH_EVENT_SOURCES":
      return fetchSourcesByIds(eventSources, action.sourceIds ? arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};
  for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    hash[source.sourceId] = source;
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return __assign(__assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, function(eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function(eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  var nextSources = {};
  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  var options = context.options, calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, function(res) {
    var rawEvents = res.rawEvents;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }
    context.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, function(error) {
    console.warn(error.message, error);
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }
    if (eventSource.failure) {
      eventSource.failure(error);
    }
    context.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return __assign(__assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var _a;
  var eventSource = sourceHash[sourceId];
  if (eventSource && fetchId === eventSource.latestFetchId) {
    return __assign(__assign({}, sourceHash), (_a = {}, _a[sourceId] = __assign(__assign({}, eventSource), { isFetching: false, fetchRange }), _a));
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, function(eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}
function parseInitialSources(rawOptions, context) {
  var refiners = buildEventSourceRefiners(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = [];
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
    var rawSource = rawSources_1[_i];
    var source = parseEventSource(rawSource, context, refiners);
    if (source) {
      sources.push(source);
    }
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case "RECEIVE_EVENTS":
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case "ADD_EVENTS":
      return addEvent(
        eventStore,
        action.eventStore,
        dateProfile ? dateProfile.activeRange : null,
        context
      );
    case "RESET_EVENTS":
      return action.eventStore;
    case "MERGE_EVENTS":
      return mergeEventStores(eventStore, action.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case "REMOVE_EVENTS":
      return excludeSubEventStore(eventStore, action.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return filterEventStoreDefs(eventStore, function(eventDef) {
        return !eventDef.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && fetchId === eventSource.latestFetchId) {
    var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
      var rawEvent = rawEvents_1[_i];
      var refinedEvent = func(rawEvent);
      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      }
    }
  }
  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash$1(eventStore.instances, function(instance) {
    var def = defs[instance.defId];
    if (def.allDay || def.recurringDef) {
      return instance;
    }
    return __assign(__assign({}, instance), { range: {
      start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
      end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
    }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
  });
  return { defs, instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function(eventDef) {
    return eventDef.sourceId !== sourceId;
  });
}
function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, function(instance) {
      return !removals[instance.instanceId];
    })
  };
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  var newDrag;
  switch (action.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  var newResize;
  switch (action.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  var footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return { header, footer };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var sectionWidgets = {};
  var viewsWithButtons = [];
  var hasTitle = false;
  for (var sectionName in sectionStrHash) {
    var sectionStr = sectionStrHash[sectionName];
    var sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push.apply(viewsWithButtons, sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }
  return { sectionWidgets, viewsWithButtons, hasTitle };
}
function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var isRtl = calendarOptions.direction === "rtl";
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  var calendarButtonHints = calendarOptions.buttonHints || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(" ") : [];
  var viewsWithButtons = [];
  var hasTitle = false;
  var widgets = sectionSubstrs.map(function(buttonGroupStr) {
    return buttonGroupStr.split(",").map(function(buttonName) {
      if (buttonName === "title") {
        hasTitle = true;
        return { buttonName };
      }
      var customButtonProps;
      var viewSpec;
      var buttonClick;
      var buttonIcon;
      var buttonText;
      var buttonHint;
      if (customButtonProps = calendarCustomButtons[buttonName]) {
        buttonClick = function(ev) {
          if (customButtonProps.click) {
            customButtonProps.click.call(ev.target, ev, ev.target);
          }
        };
        (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
        buttonHint = customButtonProps.hint || customButtonProps.text;
      } else if (viewSpec = viewSpecs[buttonName]) {
        viewsWithButtons.push(buttonName);
        buttonClick = function() {
          calendarApi.changeView(buttonName);
        };
        (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
        var textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
        buttonHint = formatWithOrdinals(
          viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint,
          [textFallback, buttonName],
          textFallback
        );
      } else if (calendarApi[buttonName]) {
        buttonClick = function() {
          calendarApi[buttonName]();
        };
        (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]);
        if (buttonName === "prevYear" || buttonName === "nextYear") {
          var prevOrNext = buttonName === "prevYear" ? "prev" : "next";
          buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [
            calendarButtonText.year || "year",
            "year"
          ], calendarButtonText[buttonName]);
        } else {
          buttonHint = function(navUnit) {
            return formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [
              calendarButtonText[navUnit] || navUnit,
              navUnit
            ], calendarButtonText[buttonName]);
          };
        }
      }
      return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
    });
  });
  return { widgets, viewsWithButtons, hasTitle };
}
var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta: function(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch: function(arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta: function(refined) {
    if (typeof refined.events === "function") {
      return refined.events;
    }
    return null;
  },
  fetch: function(arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function(rawEvents) {
      success({ rawEvents });
    }, failure);
  }
};
var funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});
function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  var body = null;
  if (method === "GET") {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  if (method !== "GET") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      var parsed = false;
      var res = void 0;
      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {
      }
      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback("Failure parsing JSON", xhr);
      }
    } else {
      failureCallback("Request failed", xhr);
    }
  };
  xhr.onerror = function() {
    failureCallback("Request failed", xhr);
  };
  xhr.send(body);
}
function injectQueryStringParams(url, params) {
  return url + (url.indexOf("?") === -1 ? "?" : "&") + encodeParams(params);
}
function encodeParams(params) {
  var parts = [];
  for (var key in params) {
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }
  return parts.join("&");
}
var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta: function(refined) {
    if (refined.url && (refined.format === "json" || !refined.format)) {
      return {
        url: refined.url,
        format: "json",
        method: (refined.method || "GET").toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch: function(arg, success, failure) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, function(rawEvents, xhr) {
      success({ rawEvents, xhr });
    }, function(errorMessage, xhr) {
      failure({ message: errorMessage, xhr });
    });
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});
function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv, options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  if (typeof meta.extraParams === "function") {
    customRequestParams = meta.extraParams();
  } else {
    customRequestParams = meta.extraParams || {};
  }
  __assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== "local") {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse: function(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration = void 0;
      if (refined.duration) {
        duration = refined.duration;
      }
      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration,
        typeData: recurringData
      };
    }
    return null;
  },
  expand: function(typeData, framingRange, dateEnv) {
    var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }
    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  var dayMarker = startOfDay(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];
  while (dayMarker < endMarker) {
    var instanceStart = void 0;
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(instanceStart);
    }
    dayMarker = addDays(dayMarker, 1);
  }
  return instanceStarts;
}
var changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events: function(events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
function handleEventSources(inputs, context) {
  var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  var newInputs = [];
  for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    var inputFound = false;
    for (var i2 = 0; i2 < unfoundSources.length; i2 += 1) {
      if (unfoundSources[i2]._raw === input) {
        unfoundSources.splice(i2, 1);
        inputFound = true;
        break;
      }
    }
    if (!inputFound) {
      newInputs.push(input);
    }
  }
  for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
    var unfoundSource = unfoundSources_1[_a];
    context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: unfoundSource.sourceId
    });
  }
  for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
    var newInput = newInputs_1[_b];
    context.calendarApi.addEventSource(newInput);
  }
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger("datesSet", __assign(__assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
}
function handleEventStore(eventStore, context) {
  var emitter = context.emitter;
  if (emitter.hasHandlers("eventsSet")) {
    emitter.trigger("eventsSet", buildEventApis(eventStore, context));
  }
}
var globalPlugins = [
  arrayEventSourcePlugin,
  funcEventSourcePlugin,
  jsonFeedEventSourcePlugin,
  simpleRecurringEventsPlugin,
  changeHandlerPlugin,
  createPlugin({
    isLoadingFuncs: [
      function(state) {
        return computeEventSourcesLoading(state.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: buildHtmlRenderer,
      domNodes: buildDomNodeRenderer
    },
    propSetHandlers: {
      dateProfile: handleDateProfile,
      eventStore: handleEventStore
    }
  })
];
function buildHtmlRenderer() {
  var currentEl = null;
  var currentHtml = "";
  function render2(el, html) {
    if (el !== currentEl || html !== currentHtml) {
      el.innerHTML = html;
    }
    currentEl = el;
    currentHtml = html;
  }
  function destroy() {
    currentEl.innerHTML = "";
    currentEl = null;
    currentHtml = "";
  }
  return { render: render2, destroy };
}
function buildDomNodeRenderer() {
  var currentEl = null;
  var currentDomNodes = [];
  function render2(el, domNodes) {
    var newDomNodes = Array.prototype.slice.call(domNodes);
    if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
      for (var _i = 0, newDomNodes_1 = newDomNodes; _i < newDomNodes_1.length; _i++) {
        var newNode = newDomNodes_1[_i];
        el.appendChild(newNode);
      }
      destroy();
    }
    currentEl = el;
    currentDomNodes = newDomNodes;
  }
  function destroy() {
    currentDomNodes.forEach(removeElement);
    currentDomNodes = [];
    currentEl = null;
  }
  return { render: render2, destroy };
}
var DelayedRunner = function() {
  function DelayedRunner2(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  DelayedRunner2.prototype.request = function(delay) {
    this.isDirty = true;
    if (!this.isPaused()) {
      this.clearTimeout();
      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout(
          this.tryDrain.bind(this),
          delay
        );
      }
    }
  };
  DelayedRunner2.prototype.pause = function(scope) {
    if (scope === void 0) {
      scope = "";
    }
    var pauseDepths = this.pauseDepths;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  };
  DelayedRunner2.prototype.resume = function(scope, force) {
    if (scope === void 0) {
      scope = "";
    }
    var pauseDepths = this.pauseDepths;
    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        var depth = pauseDepths[scope];
        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }
      this.tryDrain();
    }
  };
  DelayedRunner2.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  };
  DelayedRunner2.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;
      while (this.isDirty) {
        this.isDirty = false;
        this.drained();
      }
      this.isRunning = false;
    }
  };
  DelayedRunner2.prototype.clear = function() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  };
  DelayedRunner2.prototype.clearTimeout = function() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  };
  DelayedRunner2.prototype.drained = function() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  };
  return DelayedRunner2;
}();
var TaskRunner = function() {
  function TaskRunner2(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }
  TaskRunner2.prototype.request = function(task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  };
  TaskRunner2.prototype.pause = function(scope) {
    this.delayedRunner.pause(scope);
  };
  TaskRunner2.prototype.resume = function(scope, force) {
    this.delayedRunner.resume(scope, force);
  };
  TaskRunner2.prototype.drain = function() {
    var queue = this.queue;
    while (queue.length) {
      var completedTasks = [];
      var task = void 0;
      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }
      this.drained(completedTasks);
    }
  };
  TaskRunner2.prototype.runTask = function(task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  };
  TaskRunner2.prototype.drained = function(completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  };
  return TaskRunner2;
}();
function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range;
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    range = dateProfile.activeRange;
  }
  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
}
function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;
  if (currentRangeUnit === "year") {
    return { year: "numeric" };
  }
  if (currentRangeUnit === "month") {
    return { year: "numeric", month: "long" };
  }
  var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
  if (days !== null && days > 1) {
    return { year: "numeric", month: "short", day: "numeric" };
  }
  return { year: "numeric", month: "long", day: "numeric" };
}
var CalendarDataManager = function() {
  function CalendarDataManager2(props) {
    var _this = this;
    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};
    this.getCurrentData = function() {
      return _this.data;
    };
    this.dispatch = function(action) {
      _this.actionRunner.request(action);
    };
    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(calendarContext);
    }
    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    var contextAndState = __assign(__assign({}, calendarContext), initialState);
    for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
      var reducer = _c[_b];
      __assign(initialState, reducer(null, null, contextAndState));
    }
    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger("loading", true);
    }
    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }
  CalendarDataManager2.prototype.resetOptions = function(optionOverrides, append) {
    var props = this.props;
    props.optionOverrides = append ? __assign(__assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: "NOTHING"
    });
  };
  CalendarDataManager2.prototype._handleAction = function(action) {
    var _a = this, props = _a.props, state = _a.state, emitter = _a.emitter;
    var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = reduceViewType(state.currentViewType, action);
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter,
      getCurrentData: this.getCurrentData
    };
    var currentDate = state.currentDate, dateProfile = state.dateProfile;
    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }
    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
    if (action.type === "PREV" || action.type === "NEXT" || !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    var isEventsLoading = computeEventSourcesLoading(eventSources);
    var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : eventStore;
    var _b = this.buildViewUiProps(calendarContext), eventUiSingleBase = _b.eventUiSingleBase, selectionConfig = _b.selectionConfig;
    var eventUiBySource = this.buildEventUiBySource(eventSources);
    var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    var newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };
    var contextAndState = __assign(__assign({}, calendarContext), newState);
    for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
      var reducer = _c[_i];
      __assign(newState, reducer(state, action, contextAndState));
    }
    var wasLoading = computeIsLoading(state, calendarContext);
    var isLoading = computeIsLoading(newState, calendarContext);
    if (!wasLoading && isLoading) {
      emitter.trigger("loading", true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger("loading", false);
    }
    this.state = newState;
    if (props.onAction) {
      props.onAction(action);
    }
  };
  CalendarDataManager2.prototype.updateData = function() {
    var _a = this, props = _a.props, state = _a.state;
    var oldData = this.data;
    var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
    var data = this.data = __assign(__assign(__assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
    var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    var oldCalendarOptions = oldData && oldData.calendarOptions;
    var newCalendarOptions = optionsData.calendarOptions;
    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }
      for (var optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }
    if (props.onData) {
      props.onData(data);
    }
  };
  CalendarDataManager2.prototype._computeOptionsData = function(optionOverrides, dynamicOptionOverrides, calendarApi) {
    var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, pluginHooks = _a.pluginHooks, localeDefaults = _a.localeDefaults, availableLocaleData = _a.availableLocaleData, extra = _a.extra;
    warnUnknownOptions(extra);
    var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    var theme = this.buildTheme(refinedOptions, pluginHooks);
    var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      theme,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  };
  CalendarDataManager2.prototype.processRawCalendarOptions = function(optionOverrides, dynamicOptionOverrides) {
    var _a = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      optionOverrides,
      dynamicOptionOverrides
    ]), locales = _a.locales, locale = _a.locale;
    var availableLocaleData = this.organizeRawLocales(locales);
    var availableRawLocales = availableLocaleData.map;
    var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
    var refiners = this.currentCalendarOptionsRefiners = __assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    var extra = {};
    var raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      localeDefaults,
      optionOverrides,
      dynamicOptionOverrides
    ]);
    var refined = {};
    var currentRaw = this.currentCalendarOptionsInput;
    var currentRefined = this.currentCalendarOptionsRefined;
    var anyChanges = false;
    for (var optionName in raw) {
      if (optionName !== "plugins") {
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }
    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults,
      extra
    };
  };
  CalendarDataManager2.prototype._computeCurrentViewData = function(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    var viewSpec = optionsData.viewSpecs[viewType];
    if (!viewSpec) {
      throw new Error('viewType "' + viewType + `" is not available. Please make sure you've loaded all neccessary plugins`);
    }
    var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, extra = _a.extra;
    warnUnknownOptions(extra);
    var dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
  };
  CalendarDataManager2.prototype.processRawViewOptions = function(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    var raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      viewSpec.optionDefaults,
      localeDefaults,
      optionOverrides,
      viewSpec.optionOverrides,
      dynamicOptionOverrides
    ]);
    var refiners = __assign(__assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    var refined = {};
    var currentRaw = this.currentViewOptionsInput;
    var currentRefined = this.currentViewOptionsRefined;
    var anyChanges = false;
    var extra = {};
    for (var optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra
    };
  };
  return CalendarDataManager2;
}();
function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: "gregory",
    timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale,
    weekNumberCalculation,
    firstDay,
    weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator
  });
}
function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return mapHash$1(eventSources, function(eventSource) {
    return eventSource.ui;
  });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = { "": eventUiSingleBase };
  for (var defId in eventDefs) {
    var def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === "boolean" ? options.eventOverlap : void 0,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor
    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === "boolean" ? options.selectOverlap : void 0,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  for (var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
    var isLoadingFunc = _a[_i];
    if (isLoadingFunc(state)) {
      return true;
    }
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ""));
  }
}
(function(_super) {
  __extends(CalendarDataProvider, _super);
  function CalendarDataProvider(props) {
    var _this = _super.call(this, props) || this;
    _this.handleData = function(data) {
      if (!_this.dataManager) {
        _this.state = data;
      } else {
        _this.setState(data);
      }
    };
    _this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: _this.handleData
    });
    return _this;
  }
  CalendarDataProvider.prototype.render = function() {
    return this.props.children(this.state);
  };
  CalendarDataProvider.prototype.componentDidUpdate = function(prevProps) {
    var newOptionOverrides = this.props.optionOverrides;
    if (newOptionOverrides !== prevProps.optionOverrides) {
      this.dataManager.resetOptions(newOptionOverrides);
    }
  };
  return CalendarDataProvider;
})(Component);
var SegHierarchy = function() {
  function SegHierarchy2() {
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1;
    this.maxStackCnt = -1;
    this.levelCoords = [];
    this.entriesByLevel = [];
    this.stackCnts = {};
  }
  SegHierarchy2.prototype.addSegs = function(inputs) {
    var hiddenEntries = [];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
      var input = inputs_1[_i];
      this.insertEntry(input, hiddenEntries);
    }
    return hiddenEntries;
  };
  SegHierarchy2.prototype.insertEntry = function(entry, hiddenEntries) {
    var insertion = this.findInsertion(entry);
    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }
    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  };
  SegHierarchy2.prototype.isInsertionValid = function(insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  };
  SegHierarchy2.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }
    hiddenEntries.push(entry);
    return 0;
  };
  SegHierarchy2.prototype.splitEntry = function(entry, barrier, hiddenEntries) {
    var partCnt = 0;
    var splitHiddenEntries = [];
    var entrySpan = entry.span;
    var barrierSpan = barrier.span;
    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: entrySpan.start, end: barrierSpan.start }
      }, splitHiddenEntries);
    }
    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: barrierSpan.end, end: entrySpan.end }
      }, splitHiddenEntries);
    }
    if (partCnt) {
      hiddenEntries.push.apply(hiddenEntries, __spreadArray([{
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan)
      }], splitHiddenEntries));
      return partCnt;
    }
    hiddenEntries.push(entry);
    return 0;
  };
  SegHierarchy2.prototype.insertEntryAt = function(entry, insertion) {
    var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
    if (insertion.lateral === -1) {
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }
    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  };
  SegHierarchy2.prototype.findInsertion = function(newEntry) {
    var _a = this, levelCoords = _a.levelCoords, entriesByLevel = _a.entriesByLevel, strictOrder = _a.strictOrder, stackCnts = _a.stackCnts;
    var levelCnt = levelCoords.length;
    var candidateCoord = 0;
    var touchingLevel = -1;
    var touchingLateral = -1;
    var touchingEntry = null;
    var stackCnt = 0;
    for (var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      var trackingCoord = levelCoords[trackingLevel];
      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }
      var trackingEntries = entriesByLevel[trackingLevel];
      var trackingEntry = void 0;
      var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd);
      var lateralIndex = searchRes[0] + searchRes[1];
      while ((trackingEntry = trackingEntries[lateralIndex]) && trackingEntry.span.start < newEntry.span.end) {
        var trackingEntryBottom = trackingCoord + trackingEntry.thickness;
        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        }
        if (trackingEntryBottom === candidateCoord) {
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }
        lateralIndex += 1;
      }
    }
    var destLevel = 0;
    if (touchingEntry) {
      destLevel = touchingLevel + 1;
      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    }
    var destLateral = -1;
    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }
    return {
      touchingLevel,
      touchingLateral,
      touchingEntry,
      stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  };
  SegHierarchy2.prototype.toRects = function() {
    var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
    var levelCnt = entriesByLevel.length;
    var rects = [];
    for (var level = 0; level < levelCnt; level += 1) {
      var entries = entriesByLevel[level];
      var levelCoord = levelCoords[level];
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        rects.push(__assign(__assign({}, entry), { levelCoord }));
      }
    }
    return rects;
  };
  return SegHierarchy2;
}();
function getEntrySpanEnd(entry) {
  return entry.span.end;
}
function buildEntryKey(entry) {
  return entry.index + ":" + entry.span.start;
}
function groupIntersectingEntries(entries) {
  var merges = [];
  for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
    var entry = entries_2[_i];
    var filteredMerges = [];
    var hungryMerge = {
      span: entry.span,
      entries: [entry]
    };
    for (var _a = 0, merges_1 = merges; _a < merges_1.length; _a++) {
      var merge = merges_1[_a];
      if (intersectSpans(merge.span, hungryMerge.span)) {
        hungryMerge = {
          entries: merge.entries.concat(hungryMerge.entries),
          span: joinSpans(merge.span, hungryMerge.span)
        };
      } else {
        filteredMerges.push(merge);
      }
    }
    filteredMerges.push(hungryMerge);
    merges = filteredMerges;
  }
  return merges;
}
function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}
function intersectSpans(span0, span1) {
  var start = Math.max(span0.start, span1.start);
  var end = Math.min(span0.end, span1.end);
  if (start < end) {
    return { start, end };
  }
  return null;
}
function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}
function binarySearch(a2, searchVal, getItemVal) {
  var startIndex = 0;
  var endIndex = a2.length;
  if (!endIndex || searchVal < getItemVal(a2[startIndex])) {
    return [0, 0];
  }
  if (searchVal > getItemVal(a2[endIndex - 1])) {
    return [endIndex, 0];
  }
  while (startIndex < endIndex) {
    var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var middleVal = getItemVal(a2[middleIndex]);
    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      return [middleIndex, 1];
    }
  }
  return [startIndex, 0];
}
var Interaction = function() {
  function Interaction2(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  Interaction2.prototype.destroy = function() {
  };
  return Interaction2;
}();
function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
function interactionSettingsToStore(settings) {
  var _a;
  return _a = {}, _a[settings.component.uid] = settings, _a;
}
var interactionSettingsStore = {};
var ElementDragging = function() {
  function ElementDragging2(el, selector) {
    this.emitter = new Emitter();
  }
  ElementDragging2.prototype.destroy = function() {
  };
  ElementDragging2.prototype.setMirrorIsVisible = function(bool) {
  };
  ElementDragging2.prototype.setMirrorNeedsRevert = function(bool) {
  };
  ElementDragging2.prototype.setAutoScrollEnabled = function(bool) {
  };
  return ElementDragging2;
}();
var config = {};
var ToolbarSection = function(_super) {
  __extends(ToolbarSection2, _super);
  function ToolbarSection2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ToolbarSection2.prototype.render = function() {
    var _this = this;
    var children = this.props.widgetGroups.map(function(widgetGroup) {
      return _this.renderWidgetGroup(widgetGroup);
    });
    return createElement.apply(void 0, __spreadArray(["div", { className: "fc-toolbar-chunk" }], children));
  };
  ToolbarSection2.prototype.renderWidgetGroup = function(widgetGroup) {
    var props = this.props;
    var theme = this.context.theme;
    var children = [];
    var isOnlyButtons = true;
    for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
      var widget = widgetGroup_1[_i];
      var buttonName = widget.buttonName, buttonClick = widget.buttonClick, buttonText = widget.buttonText, buttonIcon = widget.buttonIcon, buttonHint = widget.buttonHint;
      if (buttonName === "title") {
        isOnlyButtons = false;
        children.push(createElement("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
      } else {
        var isPressed = buttonName === props.activeButton;
        var isDisabled = !props.isTodayEnabled && buttonName === "today" || !props.isPrevEnabled && buttonName === "prev" || !props.isNextEnabled && buttonName === "next";
        var buttonClasses = ["fc-" + buttonName + "-button", theme.getClass("button")];
        if (isPressed) {
          buttonClasses.push(theme.getClass("buttonActive"));
        }
        children.push(createElement("button", { type: "button", title: typeof buttonHint === "function" ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(" "), onClick: buttonClick }, buttonText || (buttonIcon ? createElement("span", { className: buttonIcon }) : "")));
      }
    }
    if (children.length > 1) {
      var groupClassName = isOnlyButtons && theme.getClass("buttonGroup") || "";
      return createElement.apply(void 0, __spreadArray(["div", { className: groupClassName }], children));
    }
    return children[0];
  };
  return ToolbarSection2;
}(BaseComponent);
var Toolbar = function(_super) {
  __extends(Toolbar2, _super);
  function Toolbar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Toolbar2.prototype.render = function() {
    var _a = this.props, model = _a.model, extraClassName = _a.extraClassName;
    var forceLtr = false;
    var startContent;
    var endContent;
    var sectionWidgets = model.sectionWidgets;
    var centerContent = sectionWidgets.center;
    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }
    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }
    var classNames = [
      extraClassName || "",
      "fc-toolbar",
      forceLtr ? "fc-toolbar-ltr" : ""
    ];
    return createElement(
      "div",
      { className: classNames.join(" ") },
      this.renderSection("start", startContent || []),
      this.renderSection("center", centerContent || []),
      this.renderSection("end", endContent || [])
    );
  };
  Toolbar2.prototype.renderSection = function(key, widgetGroups) {
    var props = this.props;
    return createElement(ToolbarSection, { key, widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId });
  };
  return Toolbar2;
}(BaseComponent);
var ViewContainer = function(_super) {
  __extends(ViewContainer2, _super);
  function ViewContainer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      availableWidth: null
    };
    _this.handleEl = function(el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
      _this.updateAvailableWidth();
    };
    _this.handleResize = function() {
      _this.updateAvailableWidth();
    };
    return _this;
  }
  ViewContainer2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state;
    var aspectRatio = props.aspectRatio;
    var classNames = [
      "fc-view-harness",
      aspectRatio || props.liquid || props.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ];
    var height = "";
    var paddingBottom = "";
    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        paddingBottom = 1 / aspectRatio * 100 + "%";
      }
    } else {
      height = props.height || "";
    }
    return createElement("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(" "), style: { height, paddingBottom } }, props.children);
  };
  ViewContainer2.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  };
  ViewContainer2.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  };
  ViewContainer2.prototype.updateAvailableWidth = function() {
    if (this.el && this.props.aspectRatio) {
      this.setState({ availableWidth: this.el.offsetWidth });
    }
  };
  return ViewContainer2;
}(BaseComponent);
var EventClicking = function(_super) {
  __extends(EventClicking2, _super);
  function EventClicking2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.handleSegClick = function(ev, segEl) {
      var component = _this.component;
      var context = component.context;
      var seg = getElSeg(segEl);
      if (seg && component.isValidSegDownEl(ev.target)) {
        var hasUrlContainer = elementClosest(ev.target, ".fc-event-forced-url");
        var url = hasUrlContainer ? hasUrlContainer.querySelector("a[href]").href : "";
        context.emitter.trigger("eventClick", {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };
    _this.destroy = listenBySelector(
      settings.el,
      "click",
      ".fc-event",
      _this.handleSegClick
    );
    return _this;
  }
  return EventClicking2;
}(Interaction);
var EventHovering = function(_super) {
  __extends(EventHovering2, _super);
  function EventHovering2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.handleEventElRemove = function(el) {
      if (el === _this.currentSegEl) {
        _this.handleSegLeave(null, _this.currentSegEl);
      }
    };
    _this.handleSegEnter = function(ev, segEl) {
      if (getElSeg(segEl)) {
        _this.currentSegEl = segEl;
        _this.triggerEvent("eventMouseEnter", ev, segEl);
      }
    };
    _this.handleSegLeave = function(ev, segEl) {
      if (_this.currentSegEl) {
        _this.currentSegEl = null;
        _this.triggerEvent("eventMouseLeave", ev, segEl);
      }
    };
    _this.removeHoverListeners = listenToHoverBySelector(
      settings.el,
      ".fc-event",
      _this.handleSegEnter,
      _this.handleSegLeave
    );
    return _this;
  }
  EventHovering2.prototype.destroy = function() {
    this.removeHoverListeners();
  };
  EventHovering2.prototype.triggerEvent = function(publicEvName, ev, segEl) {
    var component = this.component;
    var context = component.context;
    var seg = getElSeg(segEl);
    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  };
  return EventHovering2;
}(Interaction);
var CalendarContent = function(_super) {
  __extends(CalendarContent2, _super);
  function CalendarContent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildViewContext = memoize(buildViewContext);
    _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    _this.buildToolbarProps = memoize(buildToolbarProps);
    _this.headerRef = createRef();
    _this.footerRef = createRef();
    _this.interactionsStore = {};
    _this.state = {
      viewLabelId: getUniqueDomId()
    };
    _this.registerInteractiveComponent = function(component, settingsInput) {
      var settings = parseInteractionSettings(component, settingsInput);
      var DEFAULT_INTERACTIONS = [
        EventClicking,
        EventHovering
      ];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function(TheInteractionClass) {
        return new TheInteractionClass(settings);
      });
      _this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };
    _this.unregisterInteractiveComponent = function(component) {
      var listeners = _this.interactionsStore[component.uid];
      if (listeners) {
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
          var listener = listeners_1[_i];
          listener.destroy();
        }
        delete _this.interactionsStore[component.uid];
      }
      delete interactionSettingsStore[component.uid];
    };
    _this.resizeRunner = new DelayedRunner(function() {
      _this.props.emitter.trigger("_resize", true);
      _this.props.emitter.trigger("windowResize", { view: _this.props.viewApi });
    });
    _this.handleWindowResize = function(ev) {
      var options = _this.props.options;
      if (options.handleWindowResize && ev.target === window) {
        _this.resizeRunner.request(options.windowResizeDelay);
      }
    };
    return _this;
  }
  CalendarContent2.prototype.render = function() {
    var props = this.props;
    var toolbarConfig = props.toolbarConfig, options = props.options;
    var toolbarProps = this.buildToolbarProps(
      props.viewSpec,
      props.dateProfile,
      props.dateProfileGenerator,
      props.currentDate,
      getNow(props.options.now, props.dateEnv),
      props.viewTitle
    );
    var viewVGrow = false;
    var viewHeight = "";
    var viewAspectRatio;
    if (props.isHeightAuto || props.forPrint) {
      viewHeight = "";
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5);
    }
    var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    var viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : "";
    return createElement(
      ViewContextType.Provider,
      { value: viewContext },
      toolbarConfig.header && createElement(Toolbar, __assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps)),
      createElement(
        ViewContainer,
        { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
        this.renderView(props),
        this.buildAppendContent()
      ),
      toolbarConfig.footer && createElement(Toolbar, __assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps))
    );
  };
  CalendarContent2.prototype.componentDidMount = function() {
    var props = this.props;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function(CalendarInteractionClass) {
      return new CalendarInteractionClass(props);
    });
    window.addEventListener("resize", this.handleWindowResize);
    var propSetHandlers = props.pluginHooks.propSetHandlers;
    for (var propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  };
  CalendarContent2.prototype.componentDidUpdate = function(prevProps) {
    var props = this.props;
    var propSetHandlers = props.pluginHooks.propSetHandlers;
    for (var propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  };
  CalendarContent2.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.resizeRunner.clear();
    for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
      var interaction = _a[_i];
      interaction.destroy();
    }
    this.props.emitter.trigger("_unmount");
  };
  CalendarContent2.prototype.buildAppendContent = function() {
    var props = this.props;
    var children = props.pluginHooks.viewContainerAppends.map(function(buildAppendContent) {
      return buildAppendContent(props);
    });
    return createElement.apply(void 0, __spreadArray([Fragment, {}], children));
  };
  CalendarContent2.prototype.renderView = function(props) {
    var pluginHooks = props.pluginHooks;
    var viewSpec = props.viewSpec;
    var viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
      var transformer = transformers_1[_i];
      __assign(viewProps, transformer.transform(viewProps, props));
    }
    var ViewComponent = viewSpec.component;
    return createElement(ViewComponent, __assign({}, viewProps));
  };
  return CalendarContent2;
}(PureComponent);
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  var todayInfo = dateProfileGenerator.build(now, void 0, false);
  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
function buildViewPropTransformers(theClasses) {
  return theClasses.map(function(TheClass) {
    return new TheClass();
  });
}
var CalendarRoot = function(_super) {
  __extends(CalendarRoot2, _super);
  function CalendarRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      forPrint: false
    };
    _this.handleBeforePrint = function() {
      _this.setState({ forPrint: true });
    };
    _this.handleAfterPrint = function() {
      _this.setState({ forPrint: false });
    };
    return _this;
  }
  CalendarRoot2.prototype.render = function() {
    var props = this.props;
    var options = props.options;
    var forPrint = this.state.forPrint;
    var isHeightAuto = forPrint || options.height === "auto" || options.contentHeight === "auto";
    var height = !isHeightAuto && options.height != null ? options.height : "";
    var classNames = [
      "fc",
      forPrint ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + options.direction,
      props.theme.getClass("root")
    ];
    if (!getCanVGrowWithinCell()) {
      classNames.push("fc-liquid-hack");
    }
    return props.children(classNames, height, isHeightAuto, forPrint);
  };
  CalendarRoot2.prototype.componentDidMount = function() {
    var emitter = this.props.emitter;
    emitter.on("_beforeprint", this.handleBeforePrint);
    emitter.on("_afterprint", this.handleAfterPrint);
  };
  CalendarRoot2.prototype.componentWillUnmount = function() {
    var emitter = this.props.emitter;
    emitter.off("_beforeprint", this.handleBeforePrint);
    emitter.off("_afterprint", this.handleAfterPrint);
  };
  return CalendarRoot2;
}(BaseComponent);
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({ weekday: "short" });
  }
  if (dayCnt > 1) {
    return createFormatter({ weekday: "short", month: "numeric", day: "numeric", omitCommas: true });
  }
  return createFormatter({ weekday: "long" });
}
var CLASS_NAME = "fc-col-header-cell";
function renderInner$1(hookProps) {
  return hookProps.text;
}
var TableDateCell = function(_super) {
  __extends(TableDateCell2, _super);
  function TableDateCell2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDateCell2.prototype.render = function() {
    var _a = this.context, dateEnv = _a.dateEnv, options = _a.options, theme = _a.theme, viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date, dateProfile = props.dateProfile;
    var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    var text = dateEnv.format(date, props.dayHeaderFormat);
    var navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
    var hookProps = __assign(__assign(__assign({ date: dateEnv.toDate(date), view: viewApi }, props.extraHookProps), { text }), dayMeta);
    return createElement(RenderHook, { hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement(
        "th",
        __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(" "), "data-date": !dayMeta.isDisabled ? formatDayString(date) : void 0, colSpan: props.colSpan }, props.extraDataAttrs),
        createElement("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && createElement("a", __assign({ ref: innerElRef, className: [
          "fc-col-header-cell-cushion",
          props.isSticky ? "fc-sticky" : ""
        ].join(" ") }, navLinkAttrs), innerContent))
      );
    });
  };
  return TableDateCell2;
}(BaseComponent);
var WEEKDAY_FORMAT = createFormatter({ weekday: "long" });
var TableDowCell = function(_super) {
  __extends(TableDowCell2, _super);
  function TableDowCell2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDowCell2.prototype.render = function() {
    var props = this.props;
    var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, viewApi = _a.viewApi, options = _a.options;
    var date = addDays(new Date(2592e5), props.dow);
    var dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    var text = dateEnv.format(date, props.dayHeaderFormat);
    var hookProps = __assign(__assign(__assign(__assign({
      date
    }, dateMeta), { view: viewApi }), props.extraHookProps), { text });
    return createElement(RenderHook, { hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement(
        "th",
        __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(" "), colSpan: props.colSpan }, props.extraDataAttrs),
        createElement(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          createElement("a", { "aria-label": dateEnv.format(date, WEEKDAY_FORMAT), className: [
            "fc-col-header-cell-cushion",
            props.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: innerElRef }, innerContent)
        )
      );
    });
  };
  return TableDowCell2;
}(BaseComponent);
var NowTimer = function(_super) {
  __extends(NowTimer2, _super);
  function NowTimer2(props, context) {
    var _this = _super.call(this, props, context) || this;
    _this.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this.initialNowQueriedMs = new Date().valueOf();
    _this.state = _this.computeTiming().currentState;
    return _this;
  }
  NowTimer2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state;
    return props.children(state.nowDate, state.todayRange);
  };
  NowTimer2.prototype.componentDidMount = function() {
    this.setTimeout();
  };
  NowTimer2.prototype.componentDidUpdate = function(prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  };
  NowTimer2.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  };
  NowTimer2.prototype.computeTiming = function() {
    var _a = this, props = _a.props, context = _a.context;
    var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
    waitMs = Math.min(1e3 * 60 * 60 * 24, waitMs);
    return {
      currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
      nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
      waitMs
    };
  };
  NowTimer2.prototype.setTimeout = function() {
    var _this = this;
    var _a = this.computeTiming(), nextState = _a.nextState, waitMs = _a.waitMs;
    this.timeoutId = setTimeout(function() {
      _this.setState(nextState, function() {
        _this.setTimeout();
      });
    }, waitMs);
  };
  NowTimer2.prototype.clearTimeout = function() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };
  NowTimer2.contextType = ViewContextType;
  return NowTimer2;
}(Component);
function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return { start, end };
}
var DayHeader = function(_super) {
  __extends(DayHeader2, _super);
  function DayHeader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this;
  }
  DayHeader2.prototype.render = function() {
    var context = this.context;
    var _a = this.props, dates = _a.dates, dateProfile = _a.dateProfile, datesRepDistinctDays = _a.datesRepDistinctDays, renderIntro = _a.renderIntro;
    var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return createElement(NowTimer, { unit: "day" }, function(nowDate, todayRange) {
      return createElement(
        "tr",
        { role: "row" },
        renderIntro && renderIntro("day"),
        dates.map(function(date) {
          return datesRepDistinctDays ? createElement(TableDateCell, { key: date.toISOString(), date, dateProfile, todayRange, colCnt: dates.length, dayHeaderFormat }) : createElement(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat });
        })
      );
    });
  };
  return DayHeader2;
}(BaseComponent);
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
var DaySeriesModel = function() {
  function DaySeriesModel2(range, dateProfileGenerator) {
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;
    while (date < end) {
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5);
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }
      date = addDays(date, 1);
    }
    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }
  DaySeriesModel2.prototype.sliceRange = function(range) {
    var firstIndex = this.getDateDayIndex(range.start);
    var lastIndex = this.getDateDayIndex(addDays(range.end, -1));
    var clippedFirstIndex = Math.max(0, firstIndex);
    var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
    clippedFirstIndex = Math.ceil(clippedFirstIndex);
    clippedLastIndex = Math.floor(clippedLastIndex);
    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }
    return null;
  };
  DaySeriesModel2.prototype.getDateDayIndex = function(date) {
    var indices = this.indices;
    var dayOffset = Math.floor(diffDays(this.dates[0], date));
    if (dayOffset < 0) {
      return indices[0] - 1;
    }
    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }
    return indices[dayOffset];
  };
  return DaySeriesModel2;
}();
var DayTableModel = function() {
  function DayTableModel2(daySeries, breakOnWeeks) {
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;
    if (breakOnWeeks) {
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }
    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  DayTableModel2.prototype.buildCells = function() {
    var rows = [];
    for (var row = 0; row < this.rowCnt; row += 1) {
      var cells = [];
      for (var col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }
      rows.push(cells);
    }
    return rows;
  };
  DayTableModel2.prototype.buildCell = function(row, col) {
    var date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date
    };
  };
  DayTableModel2.prototype.buildHeaderDates = function() {
    var dates = [];
    for (var col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }
    return dates;
  };
  DayTableModel2.prototype.sliceRange = function(range) {
    var colCnt = this.colCnt;
    var seriesSeg = this.daySeries.sliceRange(range);
    var segs = [];
    if (seriesSeg) {
      var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
      var index = firstIndex;
      while (index <= lastIndex) {
        var row = Math.floor(index / colCnt);
        var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }
    return segs;
  };
  return DayTableModel2;
}();
var Slicer = function() {
  function Slicer2() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false;
  }
  Slicer2.prototype.sliceProps = function(props, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    var eventUiBases = props.eventUiBases;
    var eventSegs = this.sliceEventStore.apply(this, __spreadArray([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, __spreadArray([props.dateSelection, eventUiBases, context], extraArgs)),
      businessHourSegs: this.sliceBusinessHours.apply(this, __spreadArray([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag.apply(this, __spreadArray([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventResize: this.sliceEventResize.apply(this, __spreadArray([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventSelection: props.eventSelection
    };
  };
  Slicer2.prototype.sliceNowDate = function(date, context) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      extraArgs[_i - 2] = arguments[_i];
    }
    return this._sliceDateSpan.apply(this, __spreadArray([
      { range: { start: date, end: addMs(date, 1) }, allDay: false },
      {},
      context
    ], extraArgs));
  };
  Slicer2.prototype._sliceBusinessHours = function(businessHours, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (!businessHours) {
      return [];
    }
    return this._sliceEventStore.apply(this, __spreadArray([
      expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context),
      {},
      dateProfile,
      nextDayThreshold
    ], extraArgs)).bg;
  };
  Slicer2.prototype._sliceEventStore = function(eventStore, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (eventStore) {
      var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }
    return { bg: [], fg: [] };
  };
  Slicer2.prototype._sliceInteraction = function(interaction, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (!interaction) {
      return null;
    }
    var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  };
  Slicer2.prototype._sliceDateSpan = function(dateSpan, eventUiBases, context) {
    var extraArgs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
      extraArgs[_i - 3] = arguments[_i];
    }
    if (!dateSpan) {
      return [];
    }
    var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    var segs = this.sliceRange.apply(this, __spreadArray([dateSpan.range], extraArgs));
    for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
      var seg = segs_1[_a];
      seg.eventRange = eventRange;
    }
    return segs;
  };
  Slicer2.prototype.sliceEventRanges = function(eventRanges, extraArgs) {
    var segs = [];
    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
    }
    return segs;
  };
  Slicer2.prototype.sliceEventRange = function(eventRange, extraArgs) {
    var dateRange = eventRange.range;
    if (this.forceDayIfListItem && eventRange.ui.display === "list-item") {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }
    var segs = this.sliceRange.apply(this, __spreadArray([dateRange], extraArgs));
    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
      var seg = segs_2[_i];
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }
    return segs;
  };
  return Slicer2;
}();
function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5)
  };
}
function isInteractionValid(interaction, dateProfile, context) {
  var instances = interaction.mutatedEvents.instances;
  for (var instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }
  return isNewPropsValid({ eventDrag: interaction }, context);
}
function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }
  return isNewPropsValid({ dateSelection }, context);
}
function isNewPropsValid(newProps, context) {
  var calendarState = context.getCurrentData();
  var props = __assign({ businessHours: calendarState.businessHours, dateSelection: "", eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, newProps);
  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context, dateSpanMeta, filterConfig) {
  if (dateSpanMeta === void 0) {
    dateSpanMeta = {};
  }
  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  return true;
}
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var currentState = context.getCurrentData();
  var interaction = state.eventDrag;
  var subjectEventStore = interaction.mutatedEvents;
  var subjectDefs = subjectEventStore.defs;
  var subjectInstances = subjectEventStore.instances;
  var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : { "": currentState.selectionConfig });
  if (filterConfig) {
    subjectConfigs = mapHash$1(subjectConfigs, filterConfig);
  }
  var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  var otherDefs = otherEventStore.defs;
  var otherInstances = otherEventStore.instances;
  var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
  for (var subjectInstanceId in subjectInstances) {
    var subjectInstance = subjectInstances[subjectInstanceId];
    var subjectRange = subjectInstance.range;
    var subjectConfig = subjectConfigs[subjectInstance.defId];
    var subjectDef = subjectDefs[subjectInstance.defId];
    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    }
    var eventOverlap = context.options.eventOverlap;
    var eventOverlapFunc = typeof eventOverlap === "function" ? eventOverlap : null;
    for (var otherInstanceId in otherInstances) {
      var otherInstance = otherInstances[otherInstanceId];
      if (rangesIntersect(subjectRange, otherInstance.range)) {
        var otherOverlap = otherConfigs[otherInstance.defId].overlap;
        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }
        if (subjectConfig.overlap === false) {
          return false;
        }
        if (eventOverlapFunc && !eventOverlapFunc(
          new EventApi(context, otherDefs[otherInstance.defId], otherInstance),
          new EventApi(context, subjectDef, subjectInstance)
        )) {
          return false;
        }
      }
    }
    var calendarEventStore = currentState.eventStore;
    for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
      var subjectAllow = _a[_i];
      var subjectDateSpan = __assign(__assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
      var origDef = calendarEventStore.defs[subjectDef.defId];
      var origInstance = calendarEventStore.instances[subjectInstanceId];
      var eventApi = void 0;
      if (origDef) {
        eventApi = new EventApi(context, origDef, origInstance);
      } else {
        eventApi = new EventApi(context, subjectDef);
      }
      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }
  return true;
}
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var relevantEventStore = state.eventStore;
  var relevantDefs = relevantEventStore.defs;
  var relevantInstances = relevantEventStore.instances;
  var selection = state.dateSelection;
  var selectionRange = selection.range;
  var selectionConfig = context.getCurrentData().selectionConfig;
  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  }
  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  }
  var selectOverlap = context.options.selectOverlap;
  var selectOverlapFunc = typeof selectOverlap === "function" ? selectOverlap : null;
  for (var relevantInstanceId in relevantInstances) {
    var relevantInstance = relevantInstances[relevantInstanceId];
    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }
      if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  }
  for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
    var selectionAllow = _a[_i];
    var fullDateSpan = __assign(__assign({}, dateSpanMeta), selection);
    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }
  return true;
}
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
    var constraint = constraints_1[_i];
    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }
  return true;
}
function constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  if (constraint === "businessHours") {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }
  if (typeof constraint === "string") {
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function(eventDef) {
      return eventDef.groupId === constraint;
    }));
  }
  if (typeof constraint === "object" && constraint) {
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }
  return [];
}
function eventStoreToRanges(eventStore) {
  var instances = eventStore.instances;
  var ranges = [];
  for (var instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }
  return ranges;
}
function anyRangesContainRange(outerRanges, innerRange) {
  for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
    var outerRange = outerRanges_1[_i];
    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }
  return false;
}
var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = function(_super) {
  __extends(Scroller2, _super);
  function Scroller2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleEl = function(el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
    };
    return _this;
  }
  Scroller2.prototype.render = function() {
    var props = this.props;
    var liquid = props.liquid, liquidIsAbsolute = props.liquidIsAbsolute;
    var isAbsolute = liquid && liquidIsAbsolute;
    var className = ["fc-scroller"];
    if (liquid) {
      if (liquidIsAbsolute) {
        className.push("fc-scroller-liquid-absolute");
      } else {
        className.push("fc-scroller-liquid");
      }
    }
    return createElement("div", { ref: this.handleEl, className: className.join(" "), style: {
      overflowX: props.overflowX,
      overflowY: props.overflowY,
      left: isAbsolute && -(props.overcomeLeft || 0) || "",
      right: isAbsolute && -(props.overcomeRight || 0) || "",
      bottom: isAbsolute && -(props.overcomeBottom || 0) || "",
      marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || "",
      marginRight: !isAbsolute && -(props.overcomeRight || 0) || "",
      marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || "",
      maxHeight: props.maxHeight || ""
    } }, props.children);
  };
  Scroller2.prototype.needsXScrolling = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    }
    var el = this.el;
    var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    var children = el.children;
    for (var i2 = 0; i2 < children.length; i2 += 1) {
      var childEl = children[i2];
      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }
    return false;
  };
  Scroller2.prototype.needsYScrolling = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    }
    var el = this.el;
    var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    var children = el.children;
    for (var i2 = 0; i2 < children.length; i2 += 1) {
      var childEl = children[i2];
      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }
    return false;
  };
  Scroller2.prototype.getXScrollbarWidth = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }
    return this.el.offsetHeight - this.el.clientHeight;
  };
  Scroller2.prototype.getYScrollbarWidth = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }
    return this.el.offsetWidth - this.el.clientWidth;
  };
  return Scroller2;
}(BaseComponent);
var RefMap = function() {
  function RefMap2(masterCallback) {
    var _this = this;
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};
    this.handleValue = function(val, key) {
      var _a = _this, depths = _a.depths, currentMap = _a.currentMap;
      var removed = false;
      var added = false;
      if (val !== null) {
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;
        if (!depths[key]) {
          delete currentMap[key];
          delete _this.callbackMap[key];
          removed = true;
        }
      }
      if (_this.masterCallback) {
        if (removed) {
          _this.masterCallback(null, String(key));
        }
        if (added) {
          _this.masterCallback(val, String(key));
        }
      }
    };
  }
  RefMap2.prototype.createRef = function(key) {
    var _this = this;
    var refCallback = this.callbackMap[key];
    if (!refCallback) {
      refCallback = this.callbackMap[key] = function(val) {
        _this.handleValue(val, String(key));
      };
    }
    return refCallback;
  };
  RefMap2.prototype.collect = function(startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  };
  RefMap2.prototype.getAll = function() {
    return hashValuesToArray(this.currentMap);
  };
  return RefMap2;
}();
function computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, ".fc-scrollgrid-shrink");
  var largestWidth = 0;
  for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
    var shrinkCell = shrinkCells_1[_i];
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }
  return Math.ceil(largestWidth);
}
function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid;
}
function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || getSectionHasLiquidHeight(props, sectionConfig);
}
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === "function" ? chunkConfig.content(arg) : createElement("table", {
    role: "presentation",
    className: [
      chunkConfig.tableClassName,
      sectionConfig.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : ""
    }
  }, arg.tableColGroupNode, createElement(isHeader ? "thead" : "tbody", {
    role: "presentation"
  }, typeof chunkConfig.rowContent === "function" ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}
function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
    var colProps = cols_1[_i];
    var span = colProps.span || 1;
    for (var i2 = 0; i2 < span; i2 += 1) {
      colNodes.push(createElement("col", { style: {
        width: colProps.width === "shrink" ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || "",
        minWidth: colProps.minWidth || ""
      } }));
    }
  }
  return createElement.apply(void 0, __spreadArray(["colgroup", {}], colNodes));
}
function sanitizeShrinkWidth(shrinkWidth) {
  return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
  for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
    var col = cols_2[_i];
    if (col.width === "shrink") {
      return true;
    }
  }
  return false;
}
function getScrollGridClassNames(liquid, context) {
  var classNames = [
    "fc-scrollgrid",
    context.theme.getClass("table")
  ];
  if (liquid) {
    classNames.push("fc-scrollgrid-liquid");
  }
  return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + sectionConfig.type,
    sectionConfig.className
  ];
  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push("fc-scrollgrid-section-liquid");
  }
  if (sectionConfig.isSticky) {
    classNames.push("fc-scrollgrid-section-sticky");
  }
  return classNames;
}
function renderScrollShim(arg) {
  return createElement("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: arg.clientWidth,
    minWidth: arg.tableMinWidth
  } });
}
function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;
  if (stickyHeaderDates == null || stickyHeaderDates === "auto") {
    stickyHeaderDates = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;
  if (stickyFooterScrollbar == null || stickyFooterScrollbar === "auto") {
    stickyFooterScrollbar = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyFooterScrollbar;
}
var SimpleScrollGrid = function(_super) {
  __extends(SimpleScrollGrid2, _super);
  function SimpleScrollGrid2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.processCols = memoize(function(a2) {
      return a2;
    }, isColPropsEqual);
    _this.renderMicroColGroup = memoize(renderMicroColGroup);
    _this.scrollerRefs = new RefMap();
    _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
    _this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    };
    _this.handleSizing = function() {
      _this.safeSetState(__assign({ shrinkWidth: _this.computeShrinkWidth() }, _this.computeScrollerDims()));
    };
    return _this;
  }
  SimpleScrollGrid2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state, context = _a.context;
    var sectionConfigs = props.sections || [];
    var cols = this.processCols(props.cols);
    var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    var classNames = getScrollGridClassNames(props.liquid, context);
    if (props.collapsibleWidth) {
      classNames.push("fc-scrollgrid-collapsible");
    }
    var configCnt = sectionConfigs.length;
    var configI = 0;
    var currentConfig;
    var headSectionNodes = [];
    var bodySectionNodes = [];
    var footSectionNodes = [];
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "header") {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "body") {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "footer") {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    var isBuggy = !getCanVGrowWithinCell();
    var roleAttrs = { role: "rowgroup" };
    return createElement("table", {
      role: "grid",
      className: classNames.join(" "),
      style: { height: props.height }
    }, Boolean(!isBuggy && headSectionNodes.length) && createElement.apply(void 0, __spreadArray(["thead", roleAttrs], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && createElement.apply(void 0, __spreadArray(["tbody", roleAttrs], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && createElement.apply(void 0, __spreadArray(["tfoot", roleAttrs], footSectionNodes)), isBuggy && createElement.apply(void 0, __spreadArray(__spreadArray(__spreadArray(["tbody", roleAttrs], headSectionNodes), bodySectionNodes), footSectionNodes)));
  };
  SimpleScrollGrid2.prototype.renderSection = function(sectionConfig, microColGroupNode, isHeader) {
    if ("outerContent" in sectionConfig) {
      return createElement(Fragment, { key: sectionConfig.key }, sectionConfig.outerContent);
    }
    return createElement("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(" ") }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  };
  SimpleScrollGrid2.prototype.renderChunkTd = function(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ("outerContent" in chunkConfig) {
      return chunkConfig.outerContent;
    }
    var props = this.props;
    var _a = this.state, forceYScrollbars = _a.forceYScrollbars, scrollerClientWidths = _a.scrollerClientWidths, scrollerClientHeights = _a.scrollerClientHeights;
    var needsYScrolling = getAllowYScrolling(props, sectionConfig);
    var isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
    var overflowY = !props.liquid ? "visible" : forceYScrollbars ? "scroll" : !needsYScrolling ? "hidden" : "auto";
    var sectionKey = sectionConfig.key;
    var content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: "",
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== void 0 ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== void 0 ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, isHeader);
    return createElement(isHeader ? "th" : "td", {
      ref: chunkConfig.elRef,
      role: "presentation"
    }, createElement(
      "div",
      { className: "fc-scroller-harness" + (isLiquid ? " fc-scroller-harness-liquid" : "") },
      createElement(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY, overflowX: !props.liquid ? "visible" : "hidden", maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute: true }, content)
    ));
  };
  SimpleScrollGrid2.prototype._handleScrollerEl = function(scrollerEl, key) {
    var section = getSectionByKey(this.props.sections, key);
    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  };
  SimpleScrollGrid2.prototype.componentDidMount = function() {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  };
  SimpleScrollGrid2.prototype.componentDidUpdate = function() {
    this.handleSizing();
  };
  SimpleScrollGrid2.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  };
  SimpleScrollGrid2.prototype.computeShrinkWidth = function() {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  };
  SimpleScrollGrid2.prototype.computeScrollerDims = function() {
    var scrollbarWidth = getScrollbarWidths();
    var _a = this, scrollerRefs = _a.scrollerRefs, scrollerElRefs = _a.scrollerElRefs;
    var forceYScrollbars = false;
    var scrollerClientWidths = {};
    var scrollerClientHeights = {};
    for (var sectionKey in scrollerRefs.currentMap) {
      var scroller = scrollerRefs.currentMap[sectionKey];
      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }
    for (var _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
      var section = _b[_i];
      var sectionKey = section.key;
      var scrollerEl = scrollerElRefs.currentMap[sectionKey];
      if (scrollerEl) {
        var harnessEl = scrollerEl.parentNode;
        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
  };
  return SimpleScrollGrid2;
}(BaseComponent);
SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
  for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
    var section = sections_1[_i];
    if (section.key === key) {
      return section;
    }
  }
  return null;
}
var EventRoot = function(_super) {
  __extends(EventRoot2, _super);
  function EventRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.elRef = createRef();
    return _this;
  }
  EventRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var seg = props.seg;
    var eventRange = seg.eventRange;
    var ui = eventRange.ui;
    var hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return createElement(RenderHook, { hookProps, classNames: options.eventClassNames, content: options.eventContent, defaultContent: props.defaultContent, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount, elRef: this.elRef }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
    });
  };
  EventRoot2.prototype.componentDidMount = function() {
    setElSeg(this.elRef.current, this.props.seg);
  };
  EventRoot2.prototype.componentDidUpdate = function(prevProps) {
    var seg = this.props.seg;
    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  };
  return EventRoot2;
}(BaseComponent);
var StandardEvent = function(_super) {
  __extends(StandardEvent2, _super);
  function StandardEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  StandardEvent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var seg = props.seg;
    var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return createElement(EventRoot, { seg, timeText, disableDragging: props.disableDragging, disableResizing: props.disableResizing, defaultContent: props.defaultContent || renderInnerContent$1$1, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return createElement(
        "a",
        __assign({ className: props.extraClassNames.concat(classNames).join(" "), style: {
          borderColor: hookProps.borderColor,
          backgroundColor: hookProps.backgroundColor
        }, ref: rootElRef }, getSegAnchorAttrs(seg, context)),
        createElement("div", { className: "fc-event-main", ref: innerElRef, style: { color: hookProps.textColor } }, innerContent),
        hookProps.isStartResizable && createElement("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        hookProps.isEndResizable && createElement("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  };
  return StandardEvent2;
}(BaseComponent);
function renderInnerContent$1$1(innerProps) {
  return createElement(
    "div",
    { className: "fc-event-main-frame" },
    innerProps.timeText && createElement("div", { className: "fc-event-time" }, innerProps.timeText),
    createElement(
      "div",
      { className: "fc-event-title-container" },
      createElement("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || createElement(Fragment, null, "\xA0"))
    )
  );
}
var NowIndicatorRoot = function(props) {
  return createElement(ViewContextType.Consumer, null, function(context) {
    var options = context.options;
    var hookProps = {
      isAxis: props.isAxis,
      date: context.dateEnv.toDate(props.date),
      view: context.viewApi
    };
    return createElement(RenderHook, { hookProps, classNames: options.nowIndicatorClassNames, content: options.nowIndicatorContent, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount }, props.children);
  });
};
var DAY_NUM_FORMAT = createFormatter({ day: "numeric" });
var DayCellContent = function(_super) {
  __extends(DayCellContent2, _super);
  function DayCellContent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DayCellContent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = refineDayCellHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return createElement(ContentHook, { hookProps, content: options.dayCellContent, defaultContent: props.defaultContent }, props.children);
  };
  return DayCellContent2;
}(BaseComponent);
function refineDayCellHookProps(raw) {
  var date = raw.date, dateEnv = raw.dateEnv;
  var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return __assign(__assign(__assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : "" }), raw.extraProps);
}
var DayCellRoot = function(_super) {
  __extends(DayCellRoot2, _super);
  function DayCellRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }
  DayCellRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    var dataAttrs = hookProps.isDisabled ? {} : {
      "data-date": formatDayString(props.date)
    };
    return createElement(MountHook, { hookProps, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount, elRef: props.elRef }, function(rootElRef) {
      return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
    });
  };
  return DayCellRoot2;
}(BaseComponent);
function renderFill(fillType) {
  return createElement("div", { className: "fc-" + fillType });
}
var BgEvent = function(props) {
  return createElement(EventRoot, { defaultContent: renderInnerContent$3, seg: props.seg, timeText: "", disableDragging: true, disableResizing: true, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
    return createElement("div", { ref: rootElRef, className: ["fc-bg-event"].concat(classNames).join(" "), style: {
      backgroundColor: hookProps.backgroundColor
    } }, innerContent);
  });
};
function renderInnerContent$3(props) {
  var title = props.event.title;
  return title && createElement("div", { className: "fc-event-title" }, props.event.title);
}
var WeekNumberRoot = function(props) {
  return createElement(ViewContextType.Consumer, null, function(context) {
    var dateEnv = context.dateEnv, options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date);
    var text = dateEnv.format(date, format);
    var hookProps = { num, text, date };
    return createElement(RenderHook, { hookProps, classNames: options.weekNumberClassNames, content: options.weekNumberContent, defaultContent: renderInner, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount }, props.children);
  });
};
function renderInner(innerProps) {
  return innerProps.text;
}
var PADDING_FROM_VIEWPORT = 10;
var Popover = function(_super) {
  __extends(Popover2, _super);
  function Popover2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      titleId: getUniqueDomId()
    };
    _this.handleRootEl = function(el) {
      _this.rootEl = el;
      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };
    _this.handleDocumentMouseDown = function(ev) {
      var target = getEventTargetViaRoot(ev);
      if (!_this.rootEl.contains(target)) {
        _this.handleCloseClick();
      }
    };
    _this.handleDocumentKeyDown = function(ev) {
      if (ev.key === "Escape") {
        _this.handleCloseClick();
      }
    };
    _this.handleCloseClick = function() {
      var onClose = _this.props.onClose;
      if (onClose) {
        onClose();
      }
    };
    return _this;
  }
  Popover2.prototype.render = function() {
    var _a = this.context, theme = _a.theme, options = _a.options;
    var _b = this, props = _b.props, state = _b.state;
    var classNames = [
      "fc-popover",
      theme.getClass("popover")
    ].concat(props.extraClassNames || []);
    return createPortal(createElement(
      "div",
      __assign({ id: props.id, className: classNames.join(" "), "aria-labelledby": state.titleId }, props.extraAttrs, { ref: this.handleRootEl }),
      createElement(
        "div",
        { className: "fc-popover-header " + theme.getClass("popoverHeader") },
        createElement("span", { className: "fc-popover-title", id: state.titleId }, props.title),
        createElement("span", { className: "fc-popover-close " + theme.getIconClass("close"), title: options.closeHint, onClick: this.handleCloseClick })
      ),
      createElement("div", { className: "fc-popover-body " + theme.getClass("popoverContent") }, props.children)
    ), props.parentEl);
  };
  Popover2.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    this.updateSize();
  };
  Popover2.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  };
  Popover2.prototype.updateSize = function() {
    var isRtl = this.context.isRtl;
    var _a = this.props, alignmentEl = _a.alignmentEl, alignGridTop = _a.alignGridTop;
    var rootEl = this.rootEl;
    var alignmentRect = computeClippedClientRect(alignmentEl);
    if (alignmentRect) {
      var popoverDims = rootEl.getBoundingClientRect();
      var popoverTop = alignGridTop ? elementClosest(alignmentEl, ".fc-scrollgrid").getBoundingClientRect().top : alignmentRect.top;
      var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      var origin_1 = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin_1.top,
        left: popoverLeft - origin_1.left
      });
    }
  };
  return Popover2;
}(BaseComponent);
var MorePopover = function(_super) {
  __extends(MorePopover2, _super);
  function MorePopover2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    return _this;
  }
  MorePopover2.prototype.render = function() {
    var _a = this.context, options = _a.options, dateEnv = _a.dateEnv;
    var props = this.props;
    var startDate = props.startDate, todayRange = props.todayRange, dateProfile = props.dateProfile;
    var title = dateEnv.format(startDate, options.dayPopoverFormat);
    return createElement(DayCellRoot, { date: startDate, dateProfile, todayRange, elRef: this.handleRootEl }, function(rootElRef, dayClassNames, dataAttrs) {
      return createElement(
        Popover,
        { elRef: rootElRef, id: props.id, title, extraClassNames: ["fc-more-popover"].concat(dayClassNames), extraAttrs: dataAttrs, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
        createElement(DayCellContent, { date: startDate, dateProfile, todayRange }, function(innerElRef, innerContent) {
          return innerContent && createElement("div", { className: "fc-more-popover-misc", ref: innerElRef }, innerContent);
        }),
        props.children
      );
    });
  };
  MorePopover2.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
    var _a = this, rootEl = _a.rootEl, props = _a.props;
    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: __assign({ allDay: true, range: {
          start: props.startDate,
          end: props.endDate
        } }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1
      };
    }
    return null;
  };
  return MorePopover2;
}(DateComponent);
var MoreLinkRoot = function(_super) {
  __extends(MoreLinkRoot2, _super);
  function MoreLinkRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.linkElRef = createRef();
    _this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };
    _this.handleClick = function(ev) {
      var _a = _this, props = _a.props, context = _a.context;
      var moreLinkClick = context.options.moreLinkClick;
      var date = computeRange(props).start;
      function buildPublicSeg(seg) {
        var _a2 = seg.eventRange, def = _a2.def, instance = _a2.instance, range = _a2.range;
        return {
          event: new EventApi(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === "function") {
        moreLinkClick = moreLinkClick({
          date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === "popover") {
        _this.setState({ isPopoverOpen: true });
      } else if (typeof moreLinkClick === "string") {
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    _this.handlePopoverClose = function() {
      _this.setState({ isPopoverOpen: false });
    };
    return _this;
  }
  MoreLinkRoot2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, state = _a.state;
    return createElement(ViewContextType.Consumer, null, function(context) {
      var viewApi = context.viewApi, options = context.options, calendarApi = context.calendarApi;
      var moreLinkText = options.moreLinkText;
      var moreCnt = props.moreCnt;
      var range = computeRange(props);
      var text = typeof moreLinkText === "function" ? moreLinkText.call(calendarApi, moreCnt) : "+" + moreCnt + " " + moreLinkText;
      var title = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
      var hookProps = {
        num: moreCnt,
        shortText: "+" + moreCnt,
        text,
        view: viewApi
      };
      return createElement(
        Fragment,
        null,
        Boolean(props.moreCnt) && createElement(RenderHook, { elRef: _this.linkElRef, hookProps, classNames: options.moreLinkClassNames, content: options.moreLinkContent, defaultContent: props.defaultContent || renderMoreLinkInner$1, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
          return props.children(rootElRef, ["fc-more-link"].concat(customClassNames), innerElRef, innerContent, _this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : "");
        }),
        state.isPopoverOpen && createElement(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: _this.parentEl, alignmentEl: props.alignmentElRef.current, alignGridTop: props.alignGridTop, onClose: _this.handlePopoverClose }, props.popoverContent())
      );
    });
  };
  MoreLinkRoot2.prototype.componentDidMount = function() {
    this.updateParentEl();
  };
  MoreLinkRoot2.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  };
  MoreLinkRoot2.prototype.updateParentEl = function() {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, ".fc-view-harness");
    }
  };
  return MoreLinkRoot2;
}(BaseComponent);
function renderMoreLinkInner$1(props) {
  return props.text;
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }
  var hiddenSegs = props.hiddenSegs;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}
function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Calendar = function(_super) {
  __extends(Calendar2, _super);
  function Calendar2(el, optionOverrides) {
    if (optionOverrides === void 0) {
      optionOverrides = {};
    }
    var _this = _super.call(this) || this;
    _this.isRendering = false;
    _this.isRendered = false;
    _this.currentClassNames = [];
    _this.customContentRenderId = 0;
    _this.handleAction = function(action) {
      switch (action.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          _this.renderRunner.tryDrain();
      }
    };
    _this.handleData = function(data) {
      _this.currentData = data;
      _this.renderRunner.request(data.calendarOptions.rerenderDelay);
    };
    _this.handleRenderRequest = function() {
      if (_this.isRendering) {
        _this.isRendered = true;
        var currentData_1 = _this.currentData;
        flushSync(function() {
          render(createElement(CalendarRoot, { options: currentData_1.calendarOptions, theme: currentData_1.theme, emitter: currentData_1.emitter }, function(classNames, height, isHeightAuto, forPrint) {
            _this.setClassNames(classNames);
            _this.setHeight(height);
            return createElement(
              CustomContentRenderContext.Provider,
              { value: _this.customContentRenderId },
              createElement(CalendarContent, __assign({ isHeightAuto, forPrint }, currentData_1))
            );
          }), _this.el);
        });
      } else if (_this.isRendered) {
        _this.isRendered = false;
        unmountComponentAtNode(_this.el);
        _this.setClassNames([]);
        _this.setHeight("");
      }
    };
    _this.el = el;
    _this.renderRunner = new DelayedRunner(_this.handleRenderRequest);
    new CalendarDataManager({
      optionOverrides,
      calendarApi: _this,
      onAction: _this.handleAction,
      onData: _this.handleData
    });
    return _this;
  }
  Object.defineProperty(Calendar2.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: false,
    configurable: true
  });
  Calendar2.prototype.render = function() {
    var wasRendering = this.isRendering;
    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId += 1;
    }
    this.renderRunner.request();
    if (wasRendering) {
      this.updateSize();
    }
  };
  Calendar2.prototype.destroy = function() {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
  };
  Calendar2.prototype.updateSize = function() {
    var _this = this;
    flushSync(function() {
      _super.prototype.updateSize.call(_this);
    });
  };
  Calendar2.prototype.batchRendering = function(func) {
    this.renderRunner.pause("batchRendering");
    func();
    this.renderRunner.resume("batchRendering");
  };
  Calendar2.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  };
  Calendar2.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", true);
  };
  Calendar2.prototype.resetOptions = function(optionOverrides, append) {
    this.currentDataManager.resetOptions(optionOverrides, append);
  };
  Calendar2.prototype.setClassNames = function(classNames) {
    if (!isArraysEqual(classNames, this.currentClassNames)) {
      var classList = this.el.classList;
      for (var _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
        var className = _a[_i];
        classList.remove(className);
      }
      for (var _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
        var className = classNames_1[_b];
        classList.add(className);
      }
      this.currentClassNames = classNames;
    }
  };
  Calendar2.prototype.setHeight = function(height) {
    applyStyleProp(this.el, "height", height);
  };
  return Calendar2;
}(CalendarApi);
const OPTION_IS_COMPLEX = {
  headerToolbar: true,
  footerToolbar: true,
  events: true,
  eventSources: true,
  resources: true
};
function shallowCopy(val) {
  if (typeof val === "object") {
    if (Array.isArray(val)) {
      val = Array.prototype.slice.call(val);
    } else if (val) {
      val = { ...val };
    }
  }
  return val;
}
function mapHash(input, func) {
  const output = {};
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      output[key] = func(input[key], key);
    }
  }
  return output;
}
function wrapVDomGenerator(vDomGenerator) {
  return function(props) {
    return { vue: vDomGenerator(props) };
  };
}
function createVueContentTypePlugin(appContext) {
  return createPlugin({
    contentTypeHandlers: {
      vue: () => buildVDomHandler()
    }
  });
}
function buildVDomHandler(appContext) {
  let currentEl;
  let app;
  let componentInstance;
  function render2(el, vDomContent) {
    if (currentEl !== el) {
      if (currentEl && app) {
        app.unmount();
      }
      currentEl = el;
    }
    if (!app) {
      app = initApp(vDomContent);
      let innerEl = document.createElement("span");
      el.appendChild(innerEl);
      componentInstance = app.mount(innerEl);
    } else {
      componentInstance.content = vDomContent;
    }
  }
  function destroy() {
    if (app) {
      app.unmount();
    }
  }
  return { render: render2, destroy };
}
function initApp(initialContent, appContext) {
  return createApp({
    data() {
      return {
        content: initialContent
      };
    },
    render() {
      let { content } = this;
      if (content.length === 1) {
        return content[0];
      } else {
        return h$1("span", {}, content);
      }
    }
  });
}
const FullCalendar = defineComponent({
  props: {
    options: Object
  },
  data: initData,
  render() {
    return h$1("div", {
      attrs: { "data-fc-render-id": this.renderId }
    });
  },
  mounted() {
    this.slotOptions = mapHash(this.$slots, wrapVDomGenerator);
    let calendarOptions = this.buildOptions(this.options, this.$.appContext);
    let calendar = new Calendar(this.$el, calendarOptions);
    this.calendar = calendar;
    calendar.render();
  },
  methods: {
    getApi,
    buildOptions
  },
  beforeUpdate() {
    this.getApi().resumeRendering();
  },
  beforeUnmount() {
    this.getApi().destroy();
  },
  watch: buildWatchers()
});
function initData() {
  return {
    renderId: 0
  };
}
function buildOptions(suppliedOptions, appContext) {
  suppliedOptions = suppliedOptions || {};
  return {
    ...this.slotOptions,
    ...suppliedOptions,
    plugins: (suppliedOptions.plugins || []).concat([
      createVueContentTypePlugin()
    ])
  };
}
function getApi() {
  return this.calendar;
}
function buildWatchers() {
  let watchers = {
    options: {
      deep: true,
      handler(options) {
        let calendar = this.getApi();
        calendar.pauseRendering();
        let calendarOptions = this.buildOptions(options, this.$.appContext);
        calendar.resetOptions(calendarOptions);
        this.renderId++;
      }
    }
  };
  for (let complexOptionName in OPTION_IS_COMPLEX) {
    watchers[`options.${complexOptionName}`] = {
      deep: true,
      handler(val) {
        if (val !== void 0) {
          let calendar = this.getApi();
          calendar.pauseRendering();
          calendar.resetOptions({
            [complexOptionName]: shallowCopy(val)
          }, true);
          this.renderId++;
        }
      }
    };
  }
  return watchers;
}
var main$6 = "";
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var TableView = function(_super) {
  __extends(TableView2, _super);
  function TableView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.headerElRef = createRef();
    return _this;
  }
  TableView2.prototype.renderSimpleLayout = function(headerRowContent, bodyContent) {
    var _a = this, props = _a.props, context = _a.context;
    var sections = [];
    var stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunk: { content: bodyContent }
    });
    return createElement(ViewRoot, { viewSpec: context.viewSpec }, function(rootElRef, classNames) {
      return createElement(
        "div",
        { ref: rootElRef, className: ["fc-daygrid"].concat(classNames).join(" ") },
        createElement(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [], sections })
      );
    });
  };
  TableView2.prototype.renderHScrollLayout = function(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    var _a = this, props = _a.props, context = _a.context;
    var stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    var stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    var sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunks: [{
        key: "main",
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: "footer",
        key: "footer",
        isSticky: true,
        chunks: [{
          key: "main",
          content: renderScrollShim
        }]
      });
    }
    return createElement(ViewRoot, { viewSpec: context.viewSpec }, function(rootElRef, classNames) {
      return createElement(
        "div",
        { ref: rootElRef, className: ["fc-daygrid"].concat(classNames).join(" ") },
        createElement(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections })
      );
    });
  };
  return TableView2;
}(DateComponent);
function splitSegsByRow(segs, rowCnt) {
  var byRow = [];
  for (var i2 = 0; i2 < rowCnt; i2 += 1) {
    byRow[i2] = [];
  }
  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];
  for (var i2 = 0; i2 < colCnt; i2 += 1) {
    byCol[i2] = [];
  }
  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];
  if (!ui) {
    for (var i2 = 0; i2 < rowCnt; i2 += 1) {
      byRow[i2] = null;
    }
  } else {
    for (var i2 = 0; i2 < rowCnt; i2 += 1) {
      byRow[i2] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
var TableCellTop = function(_super) {
  __extends(TableCellTop2, _super);
  function TableCellTop2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableCellTop2.prototype.render = function() {
    var props = this.props;
    var navLinkAttrs = buildNavLinkAttrs(this.context, props.date);
    return createElement(DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function(innerElRef, innerContent) {
      return (innerContent || props.forceDayTop) && createElement(
        "div",
        { className: "fc-daygrid-day-top", ref: innerElRef },
        createElement("a", __assign({ id: props.dayNumberId, className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || createElement(Fragment, null, "\xA0"))
      );
    });
  };
  return TableCellTop2;
}(BaseComponent);
function renderTopInner(props) {
  return props.dayNumberText;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "narrow"
});
function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === "list-item" || display === "auto" && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && seg.isStart && seg.isEnd;
}
var TableBlockEvent = function(_super) {
  __extends(TableBlockEvent2, _super);
  function TableBlockEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableBlockEvent2.prototype.render = function() {
    var props = this.props;
    return createElement(StandardEvent, __assign({}, props, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay }));
  };
  return TableBlockEvent2;
}(BaseComponent);
var TableListItemEvent = function(_super) {
  __extends(TableListItemEvent2, _super);
  function TableListItemEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableListItemEvent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    var timeText = buildSegTimeText(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return createElement(EventRoot, { seg: props.seg, timeText, defaultContent: renderInnerContent$2, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent) {
      return createElement("a", __assign({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(classNames).join(" "), ref: rootElRef }, getSegAnchorAttrs(props.seg, context)), innerContent);
    });
  };
  return TableListItemEvent2;
}(BaseComponent);
function renderInnerContent$2(innerProps) {
  return createElement(
    Fragment,
    null,
    createElement("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
    innerProps.timeText && createElement("div", { className: "fc-event-time" }, innerProps.timeText),
    createElement("div", { className: "fc-event-title" }, innerProps.event.title || createElement(Fragment, null, "\xA0"))
  );
}
var TableCellMoreLink = function(_super) {
  __extends(TableCellMoreLink2, _super);
  function TableCellMoreLink2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.compileSegs = memoize(compileSegs);
    return _this;
  }
  TableCellMoreLink2.prototype.render = function() {
    var props = this.props;
    var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
    return createElement(MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function() {
      var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
      return createElement(Fragment, null, allSegs.map(function(seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return createElement("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
          visibility: isForcedInvisible[instanceId] ? "hidden" : ""
        } }, hasListItemDisplay(seg) ? createElement(TableListItemEvent, __assign({ seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))) : createElement(TableBlockEvent, __assign({ seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))));
      }));
    } }, function(rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) {
      return createElement("a", __assign({ ref: rootElRef, className: ["fc-daygrid-more-link"].concat(classNames).join(" "), title, "aria-expanded": isExpanded, "aria-controls": popoverId }, createAriaClickAttrs(handleClick)), innerContent);
    });
  };
  return TableCellMoreLink2;
}(BaseComponent);
function compileSegs(singlePlacements) {
  var allSegs = [];
  var invisibleSegs = [];
  for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
    var placement = singlePlacements_1[_i];
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return { allSegs, invisibleSegs };
}
var DEFAULT_WEEK_NUM_FORMAT$1 = createFormatter({ week: "narrow" });
var TableCell = function(_super) {
  __extends(TableCell2, _super);
  function TableCell2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef();
    _this.state = {
      dayNumberId: getUniqueDomId()
    };
    _this.handleRootEl = function(el) {
      setRef(_this.rootElRef, el);
      setRef(_this.props.elRef, el);
    };
    return _this;
  }
  TableCell2.prototype.render = function() {
    var _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
    var date = props.date, dateProfile = props.dateProfile;
    var navLinkAttrs = buildNavLinkAttrs(context, date, "week");
    return createElement(DayCellRoot, { date, dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function(dayElRef, dayClassNames, rootDataAttrs, isDisabled) {
      return createElement(
        "td",
        __assign({ ref: dayElRef, role: "gridcell", className: ["fc-daygrid-day"].concat(dayClassNames, props.extraClassNames || []).join(" ") }, rootDataAttrs, props.extraDataAttrs, props.showDayNumber ? { "aria-labelledby": state.dayNumberId } : {}),
        createElement(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef },
          props.showWeekNumber && createElement(WeekNumberRoot, { date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT$1 }, function(weekElRef, weekClassNames, innerElRef, innerContent) {
            return createElement("a", __assign({ ref: weekElRef, className: ["fc-daygrid-week-number"].concat(weekClassNames).join(" ") }, navLinkAttrs), innerContent);
          }),
          !isDisabled && createElement(TableCellTop, { date, dateProfile, showDayNumber: props.showDayNumber, dayNumberId: state.dayNumberId, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps }),
          createElement(
            "div",
            { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
            props.fgContent,
            createElement(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
              createElement(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange })
            )
          ),
          createElement("div", { className: "fc-daygrid-day-bg" }, props.bgContent)
        )
      );
    });
  };
  return TableCell2;
}(DateComponent);
function computeFgSegPlacement(segs, dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
  var hierarchy = new DayGridSegHierarchy();
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === "number") {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === "number") {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  var segInputs = [];
  var unknownHeightSegs = [];
  for (var i2 = 0; i2 < segs.length; i2 += 1) {
    var seg = segs[i2];
    var instanceId = seg.eventRange.instance.instanceId;
    var eventHeight = eventInstanceHeights[instanceId];
    if (eventHeight != null) {
      segInputs.push({
        index: i2,
        thickness: eventHeight,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  var hiddenEntries = hierarchy.addSegs(segInputs);
  var segRects = hierarchy.toRects();
  var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
  var moreCnts = [];
  var moreMarginTops = [];
  for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
    var seg = unknownHeightSegs_1[_i];
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (var col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
    var hiddenEntry = hiddenEntries_1[_b];
    var seg = segs[hiddenEntry.index];
    var hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (var col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
}
function placeRects(allRects, segs, cells) {
  var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  var singleColPlacements = [];
  var multiColPlacements = [];
  var leftoverMargins = [];
  for (var col = 0; col < cells.length; col += 1) {
    var rects = rectsByEachCol[col];
    var singlePlacements = [];
    var currentHeight = 0;
    var currentMarginTop = 0;
    for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
      var rect = rects_1[_i];
      var seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    var multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
      var rect = rects_2[_a];
      var seg = segs[rect.index];
      var isAbsolute = rect.span.end - rect.span.start > 1;
      var isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight;
      currentHeight = rect.levelCoord + rect.thickness;
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop
        });
        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return { singleColPlacements, multiColPlacements, leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
  var rectsByEachCol = [];
  for (var col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
    var rect = rects_3[_i];
    for (var col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  var eventRange = seg.eventRange;
  var origRange = eventRange.range;
  var slicedRange = intersectRanges(origRange, {
    start: cells[spanStart].date,
    end: addDays(cells[spanEnd - 1].date, 1)
  });
  return __assign(__assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
    def: eventRange.def,
    ui: __assign(__assign({}, eventRange.ui), { durationEditable: false }),
    instance: eventRange.instance,
    range: slicedRange
  }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = function(_super) {
  __extends(DayGridSegHierarchy2, _super);
  function DayGridSegHierarchy2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hiddenConsumes = false;
    _this.forceHidden = {};
    return _this;
  }
  DayGridSegHierarchy2.prototype.addSegs = function(segInputs) {
    var _this = this;
    var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
    var entriesByLevel = this.entriesByLevel;
    var excludeHidden = function(entry) {
      return !_this.forceHidden[buildEntryKey(entry)];
    };
    for (var level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  };
  DayGridSegHierarchy2.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
    var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
    var touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
    if (this.hiddenConsumes && touchingEntry) {
      var touchingEntryId = buildEntryKey(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          var placeholderEntry = __assign(__assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
          var placeholderEntryId = buildEntryKey(placeholderEntry);
          forceHidden[placeholderEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry;
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
  };
  return DayGridSegHierarchy2;
}(SegHierarchy);
var TableRow = function(_super) {
  __extends(TableRow2, _super);
  function TableRow2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.cellElRefs = new RefMap();
    _this.frameElRefs = new RefMap();
    _this.fgElRefs = new RefMap();
    _this.segHarnessRefs = new RefMap();
    _this.rootElRef = createRef();
    _this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    };
    return _this;
  }
  TableRow2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, state = _a.state, context = _a.context;
    var options = context.options;
    var colCnt = props.cells.length;
    var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    var _b = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
    var isForcedInvisible = props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return createElement(
      "tr",
      { ref: this.rootElRef, role: "row" },
      props.renderIntro && props.renderIntro(),
      props.cells.map(function(cell, col) {
        var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
        var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
        return createElement(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: createElement(
          Fragment,
          null,
          createElement(Fragment, null, normalFgNodes),
          createElement(Fragment, null, mirrorFgNodes)
        ), bgContent: createElement(
          Fragment,
          null,
          _this.renderFillSegs(highlightSegsByCol[col], "highlight"),
          _this.renderFillSegs(businessHoursByCol[col], "non-business"),
          _this.renderFillSegs(bgEventSegsByCol[col], "bg-event")
        ) });
      })
    );
  };
  TableRow2.prototype.componentDidMount = function() {
    this.updateSizing(true);
  };
  TableRow2.prototype.componentDidUpdate = function(prevProps, prevState) {
    var currentProps = this.props;
    this.updateSizing(!isPropsEqual(prevProps, currentProps));
  };
  TableRow2.prototype.getHighlightSegs = function() {
    var props = this.props;
    if (props.eventDrag && props.eventDrag.segs.length) {
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  };
  TableRow2.prototype.getMirrorSegs = function() {
    var props = this.props;
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return [];
  };
  TableRow2.prototype.renderFgSegs = function(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    var context = this.context;
    var eventSelection = this.props.eventSelection;
    var framePositions = this.state.framePositions;
    var defaultDisplayEventEnd = this.props.cells.length === 1;
    var isMirror = isDragging || isResizing || isDateSelecting;
    var nodes = [];
    if (framePositions) {
      for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
        var placement = segPlacements_1[_i];
        var seg = placement.seg;
        var instanceId = seg.eventRange.instance.instanceId;
        var key = instanceId + ":" + col;
        var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        var isAbsolute = placement.isAbsolute;
        var left = "";
        var right = "";
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        nodes.push(createElement("div", { className: "fc-daygrid-event-harness" + (isAbsolute ? " fc-daygrid-event-harness-abs" : ""), key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
          visibility: isVisible ? "" : "hidden",
          marginTop: isAbsolute ? "" : placement.marginTop,
          top: isAbsolute ? placement.absoluteTop : "",
          left,
          right
        } }, hasListItemDisplay(seg) ? createElement(TableListItemEvent, __assign({ seg, isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange))) : createElement(TableBlockEvent, __assign({ seg, isDragging, isResizing, isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))));
      }
    }
    return nodes;
  };
  TableRow2.prototype.renderFillSegs = function(segs, fillType) {
    var isRtl = this.context.isRtl;
    var todayRange = this.props.todayRange;
    var framePositions = this.state.framePositions;
    var nodes = [];
    if (framePositions) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        var leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(createElement("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === "bg-event" ? createElement(BgEvent, __assign({ seg }, getSegMeta(seg, todayRange))) : renderFill(fillType)));
      }
    }
    return createElement.apply(void 0, __spreadArray([Fragment, {}], nodes));
  };
  TableRow2.prototype.updateSizing = function(isExternalSizingChange) {
    var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
    if (!props.forPrint && props.clientWidth !== null) {
      if (isExternalSizingChange) {
        var frameEls = props.cells.map(function(cell) {
          return frameElRefs.currentMap[cell.key];
        });
        if (frameEls.length) {
          var originEl = this.rootElRef.current;
          this.setState({
            framePositions: new PositionCache(
              originEl,
              frameEls,
              true,
              false
            )
          });
        }
      }
      var oldInstanceHeights = this.state.eventInstanceHeights;
      var newInstanceHeights = this.queryEventInstanceHeights();
      var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        eventInstanceHeights: __assign(__assign({}, oldInstanceHeights), newInstanceHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  };
  TableRow2.prototype.queryEventInstanceHeights = function() {
    var segElMap = this.segHarnessRefs.currentMap;
    var eventInstanceHeights = {};
    for (var key in segElMap) {
      var height = Math.round(segElMap[key].getBoundingClientRect().height);
      var instanceId = key.split(":")[0];
      eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
    }
    return eventInstanceHeights;
  };
  TableRow2.prototype.computeMaxContentHeight = function() {
    var firstKey = this.props.cells[0].key;
    var cellEl = this.cellElRefs.currentMap[firstKey];
    var fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  };
  TableRow2.prototype.getCellEls = function() {
    var elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(function(cell) {
      return elMap[cell.key];
    });
  };
  return TableRow2;
}(DateComponent);
TableRow.addStateEquality({
  eventInstanceHeights: isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  var topsByInstanceId = buildAbsoluteTopHash(colPlacements);
  return mirrorSegs.map(function(seg) {
    return {
      seg,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function buildAbsoluteTopHash(colPlacements) {
  var topsByInstanceId = {};
  for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
    var placements = colPlacements_1[_i];
    for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
      var placement = placements_1[_a];
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
var Table = function(_super) {
  __extends(Table2, _super);
  function Table2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.splitBusinessHourSegs = memoize(splitSegsByRow);
    _this.splitBgEventSegs = memoize(splitSegsByRow);
    _this.splitFgEventSegs = memoize(splitSegsByRow);
    _this.splitDateSelectionSegs = memoize(splitSegsByRow);
    _this.splitEventDrag = memoize(splitInteractionByRow);
    _this.splitEventResize = memoize(splitInteractionByRow);
    _this.rowRefs = new RefMap();
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          isHitComboAllowed: _this.props.isHitComboAllowed
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    return _this;
  }
  Table2.prototype.render = function() {
    var _this = this;
    var props = this.props;
    var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
    var rowCnt = props.cells.length;
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    var classNames = [
      "fc-daygrid-body",
      limitViaBalanced ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      expandRows ? "" : "fc-daygrid-body-natural"
    ];
    return createElement(
      "div",
      { className: classNames.join(" "), ref: this.handleRootEl, style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      } },
      createElement(NowTimer, { unit: "day" }, function(nowDate, todayRange) {
        return createElement(
          Fragment,
          null,
          createElement(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: props.clientWidth,
              minWidth: props.tableMinWidth,
              height: expandRows ? props.clientHeight : ""
            } },
            props.colGroupNode,
            createElement("tbody", { role: "presentation" }, props.cells.map(function(cells, row) {
              return createElement(TableRow, {
                ref: _this.rowRefs.createRef(row),
                key: cells.length ? cells[0].date.toISOString() : row,
                showDayNumbers: rowCnt > 1,
                showWeekNumbers: props.showWeekNumbers,
                todayRange,
                dateProfile,
                cells,
                renderIntro: props.renderRowIntro,
                businessHourSegs: businessHourSegsByRow[row],
                eventSelection: props.eventSelection,
                bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay),
                fgEventSegs: fgEventSegsByRow[row],
                dateSelectionSegs: dateSelectionSegsByRow[row],
                eventDrag: eventDragByRow[row],
                eventResize: eventResizeByRow[row],
                dayMaxEvents,
                dayMaxEventRows,
                clientWidth: props.clientWidth,
                clientHeight: props.clientHeight,
                forPrint: props.forPrint
              });
            }))
          )
        );
      })
    );
  };
  Table2.prototype.prepareHits = function() {
    this.rowPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.collect().map(function(rowObj) {
        return rowObj.getCellEls()[0];
      }),
      false,
      true
    );
    this.colPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      true,
      false
    );
  };
  Table2.prototype.queryHit = function(positionLeft, positionTop) {
    var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
    var col = colPositions.leftToIndex(positionLeft);
    var row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      var cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: __assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  };
  Table2.prototype.getCellEl = function(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col];
  };
  Table2.prototype.getCellRange = function(row, col) {
    var start = this.props.cells[row][col].date;
    var end = addDays(start, 1);
    return { start, end };
  };
  return Table2;
}(DateComponent);
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
var DayTableSlicer = function(_super) {
  __extends(DayTableSlicer2, _super);
  function DayTableSlicer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.forceDayIfListItem = true;
    return _this;
  }
  DayTableSlicer2.prototype.sliceRange = function(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  };
  return DayTableSlicer2;
}(Slicer);
var DayTable = function(_super) {
  __extends(DayTable2, _super);
  function DayTable2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.slicer = new DayTableSlicer();
    _this.tableRef = createRef();
    return _this;
  }
  DayTable2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    return createElement(Table, __assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint }));
  };
  return DayTable2;
}(DateComponent);
var DayTableView = function(_super) {
  __extends(DayTableView2, _super);
  function DayTableView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildDayTableModel = memoize(buildDayTableModel);
    _this.headerRef = createRef();
    _this.tableRef = createRef();
    return _this;
  }
  DayTableView2.prototype.render = function() {
    var _this = this;
    var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    var headerContent = options.dayHeaders && createElement(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 });
    var bodyContent = function(contentArg) {
      return createElement(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint });
    };
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };
  return DayTableView2;
}(TableView);
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = function(_super) {
  __extends(TableDateProfileGenerator2, _super);
  function TableDateProfileGenerator2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDateProfileGenerator2.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
    var dateEnv = this.props.dateEnv;
    var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
    var start = renderRange.start;
    var end = renderRange.end;
    var endOfWeek;
    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start);
      endOfWeek = dateEnv.startOfWeek(end);
      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = addWeeks(endOfWeek, 1);
      }
    }
    if (this.props.monthMode && this.props.fixedWeekCount) {
      var rowCnt = Math.ceil(
        diffWeeks(start, end)
      );
      end = addWeeks(end, 6 - rowCnt);
    }
    return { start, end };
  };
  return TableDateProfileGenerator2;
}(DateProfileGenerator);
var main$5 = createPlugin({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
var main$4 = "";
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var AllDaySplitter = function(_super) {
  __extends(AllDaySplitter2, _super);
  function AllDaySplitter2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AllDaySplitter2.prototype.getKeyInfo = function() {
    return {
      allDay: {},
      timed: {}
    };
  };
  AllDaySplitter2.prototype.getKeysForDateSpan = function(dateSpan) {
    if (dateSpan.allDay) {
      return ["allDay"];
    }
    return ["timed"];
  };
  AllDaySplitter2.prototype.getKeysForEventDef = function(eventDef) {
    if (!eventDef.allDay) {
      return ["timed"];
    }
    if (hasBgRendering(eventDef)) {
      return ["timed", "allDay"];
    }
    return ["allDay"];
  };
  return AllDaySplitter2;
}(Splitter);
var DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "short"
});
function TimeColsAxisCell(props) {
  var classNames = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    props.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return createElement(ViewContextType.Consumer, null, function(context) {
    if (!props.isLabeled) {
      return createElement("td", { className: classNames.join(" "), "data-time": props.isoTimeStr });
    }
    var dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
    var labelFormat = options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) : createFormatter(options.slotLabelFormat);
    var hookProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return createElement(RenderHook, { hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent$1, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement(
        "td",
        { ref: rootElRef, className: classNames.concat(customClassNames).join(" "), "data-time": props.isoTimeStr },
        createElement(
          "div",
          { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
          createElement("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)
        )
      );
    });
  });
}
function renderInnerContent$1(props) {
  return props.text;
}
var TimeBodyAxis = function(_super) {
  __extends(TimeBodyAxis2, _super);
  function TimeBodyAxis2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TimeBodyAxis2.prototype.render = function() {
    return this.props.slatMetas.map(function(slatMeta) {
      return createElement(
        "tr",
        { key: slatMeta.key },
        createElement(TimeColsAxisCell, __assign({}, slatMeta))
      );
    });
  };
  return TimeBodyAxis2;
}(BaseComponent);
var DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: "short" });
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = function(_super) {
  __extends(TimeColsView2, _super);
  function TimeColsView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.allDaySplitter = new AllDaySplitter();
    _this.headerElRef = createRef();
    _this.rootElRef = createRef();
    _this.scrollerElRef = createRef();
    _this.state = {
      slatCoords: null
    };
    _this.handleScrollTopRequest = function(scrollTop) {
      var scrollerEl = _this.scrollerElRef.current;
      if (scrollerEl) {
        scrollerEl.scrollTop = scrollTop;
      }
    };
    _this.renderHeadAxis = function(rowKey, frameHeight) {
      if (frameHeight === void 0) {
        frameHeight = "";
      }
      var options = _this.context.options;
      var dateProfile = _this.props.dateProfile;
      var range = dateProfile.renderRange;
      var dayCnt = diffDays(range.start, range.end);
      var navLinkAttrs = dayCnt === 1 ? buildNavLinkAttrs(_this.context, range.start, "week") : {};
      if (options.weekNumbers && rowKey === "day") {
        return createElement(WeekNumberRoot, { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function(rootElRef, classNames, innerElRef, innerContent) {
          return createElement(
            "th",
            { ref: rootElRef, "aria-hidden": true, className: [
              "fc-timegrid-axis",
              "fc-scrollgrid-shrink"
            ].concat(classNames).join(" ") },
            createElement(
              "div",
              { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
              createElement("a", __assign({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)
            )
          );
        });
      }
      return createElement(
        "th",
        { "aria-hidden": true, className: "fc-timegrid-axis" },
        createElement("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })
      );
    };
    _this.renderTableRowAxis = function(rowHeight) {
      var _a = _this.context, options = _a.options, viewApi = _a.viewApi;
      var hookProps = {
        text: options.allDayText,
        view: viewApi
      };
      return createElement(RenderHook, { hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner$1, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function(rootElRef, classNames, innerElRef, innerContent) {
        return createElement(
          "td",
          { ref: rootElRef, "aria-hidden": true, className: [
            "fc-timegrid-axis",
            "fc-scrollgrid-shrink"
          ].concat(classNames).join(" ") },
          createElement(
            "div",
            { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (rowHeight == null ? " fc-timegrid-axis-frame-liquid" : ""), style: { height: rowHeight } },
            createElement("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)
          )
        );
      });
    };
    _this.handleSlatCoords = function(slatCoords) {
      _this.setState({ slatCoords });
    };
    return _this;
  }
  TimeColsView2.prototype.renderSimpleLayout = function(headerRowContent, allDayContent, timeContent) {
    var _a = this, context = _a.context, props = _a.props;
    var sections = [];
    var stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    if (allDayContent) {
      sections.push({
        type: "body",
        key: "all-day",
        chunk: { content: allDayContent }
      });
      sections.push({
        type: "body",
        key: "all-day-divider",
        outerContent: createElement(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          createElement("td", { className: "fc-timegrid-divider " + context.theme.getClass("tableCellShaded") })
        )
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function(rootElRef, classNames) {
      return createElement(
        "div",
        { className: ["fc-timegrid"].concat(classNames).join(" "), ref: rootElRef },
        createElement(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: "shrink" }], sections })
      );
    });
  };
  TimeColsView2.prototype.renderHScrollLayout = function(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
    var _this = this;
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    var _a = this, context = _a.context, props = _a.props;
    var stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    var stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    var sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [
          {
            key: "axis",
            rowContent: function(arg) {
              return createElement("tr", { role: "presentation" }, _this.renderHeadAxis("day", arg.rowSyncHeights[0]));
            }
          },
          {
            key: "cols",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: headerRowContent
          }
        ]
      });
    }
    if (allDayContent) {
      sections.push({
        type: "body",
        key: "all-day",
        syncRowHeights: true,
        chunks: [
          {
            key: "axis",
            rowContent: function(contentArg) {
              return createElement("tr", { role: "presentation" }, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]));
            }
          },
          {
            key: "cols",
            content: allDayContent
          }
        ]
      });
      sections.push({
        key: "all-day-divider",
        type: "body",
        outerContent: createElement(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          createElement("td", { colSpan: 2, className: "fc-timegrid-divider " + context.theme.getClass("tableCellShaded") })
        )
      });
    }
    var isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [
        {
          key: "axis",
          content: function(arg) {
            return createElement(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              createElement(
                "table",
                { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : "" } },
                arg.tableColGroupNode,
                createElement(
                  "tbody",
                  null,
                  createElement(TimeBodyAxis, { slatMetas })
                )
              ),
              createElement(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                createElement(NowTimer, { unit: isNowIndicator ? "minute" : "day" }, function(nowDate) {
                  var nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate);
                  if (typeof nowIndicatorTop === "number") {
                    return createElement(NowIndicatorRoot, { isAxis: true, date: nowDate }, function(rootElRef, classNames, innerElRef, innerContent) {
                      return createElement("div", { ref: rootElRef, className: ["fc-timegrid-now-indicator-arrow"].concat(classNames).join(" "), style: { top: nowIndicatorTop } }, innerContent);
                    });
                  }
                  return null;
                })
              )
            );
          }
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: timeContent
        }
      ]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        key: "footer",
        type: "footer",
        isSticky: true,
        chunks: [
          {
            key: "axis",
            content: renderScrollShim
          },
          {
            key: "cols",
            content: renderScrollShim
          }
        ]
      });
    }
    return createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function(rootElRef, classNames) {
      return createElement(
        "div",
        { className: ["fc-timegrid"].concat(classNames).join(" "), ref: rootElRef },
        createElement(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
          { width: "shrink", cols: [{ width: "shrink" }] },
          { cols: [{ span: colCnt, minWidth: dayMinWidth }] }
        ], sections })
      );
    });
  };
  TimeColsView2.prototype.getAllDayMaxEventProps = function() {
    var _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
      dayMaxEvents = void 0;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS;
    }
    return { dayMaxEvents, dayMaxEventRows };
  };
  return TimeColsView2;
}(DateComponent);
function renderAllDayInner$1(hookProps) {
  return hookProps.text;
}
var TimeColsSlatsCoords = function() {
  function TimeColsSlatsCoords2(positions, dateProfile, slotDuration) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  TimeColsSlatsCoords2.prototype.safeComputeTop = function(date) {
    var dateProfile = this.dateProfile;
    if (rangeContainsMarker(dateProfile.currentRange, date)) {
      var startOfDayDate = startOfDay(date);
      var timeMs = date.valueOf() - startOfDayDate.valueOf();
      if (timeMs >= asRoughMs(dateProfile.slotMinTime) && timeMs < asRoughMs(dateProfile.slotMaxTime)) {
        return this.computeTimeTop(createDuration(timeMs));
      }
    }
    return null;
  };
  TimeColsSlatsCoords2.prototype.computeDateTop = function(when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = startOfDay(when);
    }
    return this.computeTimeTop(createDuration(when.valueOf() - startOfDayDate.valueOf()));
  };
  TimeColsSlatsCoords2.prototype.computeTimeTop = function(duration) {
    var _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
    var len = positions.els.length;
    var slatCoverage = (duration.milliseconds - asRoughMs(dateProfile.slotMinTime)) / asRoughMs(this.slotDuration);
    var slatIndex;
    var slatRemainder;
    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage);
    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1);
    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  };
  return TimeColsSlatsCoords2;
}();
var TimeColsSlatsBody = function(_super) {
  __extends(TimeColsSlatsBody2, _super);
  function TimeColsSlatsBody2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TimeColsSlatsBody2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var slatElRefs = props.slatElRefs;
    return createElement("tbody", null, props.slatMetas.map(function(slatMeta, i2) {
      var hookProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      var classNames = [
        "fc-timegrid-slot",
        "fc-timegrid-slot-lane",
        slatMeta.isLabeled ? "" : "fc-timegrid-slot-minor"
      ];
      return createElement(
        "tr",
        { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
        props.axis && createElement(TimeColsAxisCell, __assign({}, slatMeta)),
        createElement(RenderHook, { hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
          return createElement("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(" "), "data-time": slatMeta.isoTimeStr }, innerContent);
        })
      );
    }));
  };
  return TimeColsSlatsBody2;
}(BaseComponent);
var TimeColsSlats = function(_super) {
  __extends(TimeColsSlats2, _super);
  function TimeColsSlats2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef();
    _this.slatElRefs = new RefMap();
    return _this;
  }
  TimeColsSlats2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    return createElement(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      createElement(
        "table",
        { "aria-hidden": true, className: context.theme.getClass("table"), style: {
          minWidth: props.tableMinWidth,
          width: props.clientWidth,
          height: props.minHeight
        } },
        props.tableColGroupNode,
        createElement(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas })
      )
    );
  };
  TimeColsSlats2.prototype.componentDidMount = function() {
    this.updateSizing();
  };
  TimeColsSlats2.prototype.componentDidUpdate = function() {
    this.updateSizing();
  };
  TimeColsSlats2.prototype.componentWillUnmount = function() {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  };
  TimeColsSlats2.prototype.updateSizing = function() {
    var _a = this, context = _a.context, props = _a.props;
    if (props.onCoords && props.clientWidth !== null) {
      var rootEl = this.rootElRef.current;
      if (rootEl.offsetHeight) {
        props.onCoords(new TimeColsSlatsCoords(new PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
      }
    }
  };
  return TimeColsSlats2;
}(BaseComponent);
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(function(slatMeta) {
    return elMap[slatMeta.key];
  });
}
function splitSegsByCol(segs, colCnt) {
  var segsByCol = [];
  var i2;
  for (i2 = 0; i2 < colCnt; i2 += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i2 = 0; i2 < segs.length; i2 += 1) {
      segsByCol[segs[i2].col].push(segs[i2]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  var byRow = [];
  if (!ui) {
    for (var i2 = 0; i2 < colCnt; i2 += 1) {
      byRow[i2] = null;
    }
  } else {
    for (var i2 = 0; i2 < colCnt; i2 += 1) {
      byRow[i2] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.col].segs.push(seg);
    }
  }
  return byRow;
}
var TimeColMoreLink = function(_super) {
  __extends(TimeColMoreLink2, _super);
  function TimeColMoreLink2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef();
    return _this;
  }
  TimeColMoreLink2.prototype.render = function() {
    var _this = this;
    var props = this.props;
    return createElement(MoreLinkRoot, { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function() {
      return renderPlainFgSegs(props.hiddenSegs, props);
    } }, function(rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) {
      return createElement(
        "a",
        { ref: function(el) {
          setRef(rootElRef, el);
          setRef(_this.rootElRef, el);
        }, className: ["fc-timegrid-more-link"].concat(classNames).join(" "), style: { top: props.top, bottom: props.bottom }, onClick: handleClick, title, "aria-expanded": isExpanded, "aria-controls": popoverId },
        createElement("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent)
      );
    });
  };
  return TimeColMoreLink2;
}(BaseComponent);
function renderMoreLinkInner(props) {
  return props.shortText;
}
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  var hierarchy = new SegHierarchy();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  var hiddenEntries = hierarchy.addSegs(segInputs);
  var hiddenGroups = groupIntersectingEntries(hiddenEntries);
  var web = buildWeb(hierarchy);
  web = stretchWeb(web, 1);
  var segRects = webToRects(web);
  return { segRects, hiddenGroups };
}
function buildWeb(hierarchy) {
  var entriesByLevel = hierarchy.entriesByLevel;
  var buildNode = cacheable(function(level, lateral) {
    return level + ":" + lateral;
  }, function(level, lateral) {
    var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    var nextLevelRes = buildNodes(siblingRange, buildNode);
    var entry = entriesByLevel[level][lateral];
    return [
      __assign(__assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
      entry.thickness + nextLevelRes[1]
    ];
  });
  return buildNodes(entriesByLevel.length ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  var level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
  var lateral = lateralStart;
  var pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [
    pairs.map(extractNode),
    pairs[0][1]
  ];
}
function cmpDescPressures(a2, b2) {
  return b2[1] - a2[1];
}
function extractNode(a2) {
  return a2[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  var levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
  var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  var levelCnt = levelCoords.length;
  var level = subjectLevel;
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
    ;
  for (; level < levelCnt; level += 1) {
    var entries = entriesByLevel[level];
    var entry = void 0;
    var searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
    var lateralStart = searchIndex[0] + searchIndex[1];
    var lateralEnd = lateralStart;
    while ((entry = entries[lateralEnd]) && entry.span.start < subjectEntry.span.end) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return { level, lateralStart, lateralEnd };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  var stretchNode = cacheable(function(node, startCoord, prevThickness) {
    return buildEntryKey(node);
  }, function(node, startCoord, prevThickness) {
    var nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
    var allThickness = thickness + prevThickness;
    var thicknessFraction = thickness / allThickness;
    var endCoord;
    var newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      for (var _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
        var childNode = nextLevelNodes_1[_i];
        if (endCoord === void 0) {
          var res = stretchNode(childNode, startCoord, allThickness);
          endCoord = res[0];
          newChildren.push(res[1]);
        } else {
          var res = stretchNode(childNode, endCoord, 0);
          newChildren.push(res[1]);
        }
      }
    }
    var newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, __assign(__assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
  });
  return topLevelNodes.map(function(node) {
    return stretchNode(node, 0, 0)[1];
  });
}
function webToRects(topLevelNodes) {
  var rects = [];
  var processNode = cacheable(function(node, levelCoord, stackDepth) {
    return buildEntryKey(node);
  }, function(node, levelCoord, stackDepth) {
    var rect = __assign(__assign({}, node), {
      levelCoord,
      stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    var stackForward = 0;
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
      var node = nodes_1[_i];
      stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects;
}
function cacheable(keyFunc, workFunc) {
  var cache = {};
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var key = keyFunc.apply(void 0, args);
    return key in cache ? cache[key] : cache[key] = workFunc.apply(void 0, args);
  };
}
function computeSegVCoords(segs, colDate, slatCoords, eventMinHeight) {
  if (slatCoords === void 0) {
    slatCoords = null;
  }
  if (eventMinHeight === void 0) {
    eventMinHeight = 0;
  }
  var vcoords = [];
  if (slatCoords) {
    for (var i2 = 0; i2 < segs.length; i2 += 1) {
      var seg = segs[i2];
      var spanStart = slatCoords.computeDateTop(seg.start, colDate);
      var spanEnd = Math.max(
        spanStart + (eventMinHeight || 0),
        slatCoords.computeDateTop(seg.end, colDate)
      );
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd)
      });
    }
  }
  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack) {
  var segInputs = [];
  var dumbSegs = [];
  for (var i2 = 0; i2 < segs.length; i2 += 1) {
    var vcoords = segVCoords[i2];
    if (vcoords) {
      segInputs.push({
        index: i2,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i2]);
    }
  }
  var _a = buildPositioning(segInputs, eventOrderStrict, eventMaxStack), segRects = _a.segRects, hiddenGroups = _a.hiddenGroups;
  var segPlacements = [];
  for (var _i = 0, segRects_1 = segRects; _i < segRects_1.length; _i++) {
    var segRect = segRects_1[_i];
    segPlacements.push({
      seg: segs[segRect.index],
      rect: segRect
    });
  }
  for (var _b = 0, dumbSegs_1 = dumbSegs; _b < dumbSegs_1.length; _b++) {
    var dumbSeg = dumbSegs_1[_b];
    segPlacements.push({ seg: dumbSeg, rect: null });
  }
  return { segPlacements, hiddenGroups };
}
var DEFAULT_TIME_FORMAT$1 = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  meridiem: false
});
var TimeColEvent = function(_super) {
  __extends(TimeColEvent2, _super);
  function TimeColEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TimeColEvent2.prototype.render = function() {
    var classNames = [
      "fc-timegrid-event",
      "fc-v-event"
    ];
    if (this.props.isShort) {
      classNames.push("fc-timegrid-event-short");
    }
    return createElement(StandardEvent, __assign({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT$1, extraClassNames: classNames }));
  };
  return TimeColEvent2;
}(BaseComponent);
var TimeColMisc = function(_super) {
  __extends(TimeColMisc2, _super);
  function TimeColMisc2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TimeColMisc2.prototype.render = function() {
    var props = this.props;
    return createElement(DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function(innerElRef, innerContent) {
      return innerContent && createElement("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent);
    });
  };
  return TimeColMisc2;
}(BaseComponent);
var TimeCol = function(_super) {
  __extends(TimeCol2, _super);
  function TimeCol2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.sortEventSegs = memoize(sortEventSegs);
    return _this;
  }
  TimeCol2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, context = _a.context;
    var isSelectMirror = context.options.selectMirror;
    var mirrorSegs = props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
    var interactionAffectedInstances = props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
    return createElement(DayCellRoot, { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function(rootElRef, classNames, dataAttrs) {
      return createElement(
        "td",
        __assign({ ref: rootElRef, role: "gridcell", className: ["fc-timegrid-col"].concat(classNames, props.extraClassNames || []).join(" ") }, dataAttrs, props.extraDataAttrs),
        createElement(
          "div",
          { className: "fc-timegrid-col-frame" },
          createElement(
            "div",
            { className: "fc-timegrid-col-bg" },
            _this.renderFillSegs(props.businessHourSegs, "non-business"),
            _this.renderFillSegs(props.bgEventSegs, "bg-event"),
            _this.renderFillSegs(props.dateSelectionSegs, "highlight")
          ),
          createElement("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
          createElement("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
          createElement("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
          createElement(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })
        )
      );
    });
  };
  TimeCol2.prototype.renderFgSegs = function(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
    var props = this.props;
    if (props.forPrint) {
      return renderPlainFgSegs(sortedFgSegs, props);
    }
    return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
  };
  TimeCol2.prototype.renderPositionedFgSegs = function(segs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
    var _this = this;
    var _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict, eventMinHeight = _a.eventMinHeight;
    var _b = this.props, date = _b.date, slatCoords = _b.slatCoords, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
    var isMirror = isDragging || isResizing || isDateSelecting;
    var segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
    var _c = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack), segPlacements = _c.segPlacements, hiddenGroups = _c.hiddenGroups;
    return createElement(
      Fragment,
      null,
      this.renderHiddenGroups(hiddenGroups, segs),
      segPlacements.map(function(segPlacement) {
        var seg = segPlacement.seg, rect = segPlacement.rect;
        var instanceId = seg.eventRange.instance.instanceId;
        var isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
        var vStyle = computeSegVStyle(rect && rect.span);
        var hStyle = !isMirror && rect ? _this.computeSegHStyle(rect) : { left: 0, right: 0 };
        var isInset = Boolean(rect) && rect.stackForward > 0;
        var isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight;
        return createElement(
          "div",
          { className: "fc-timegrid-event-harness" + (isInset ? " fc-timegrid-event-harness-inset" : ""), key: instanceId, style: __assign(__assign({ visibility: isVisible ? "" : "hidden" }, vStyle), hStyle) },
          createElement(TimeColEvent, __assign({ seg, isDragging, isResizing, isDateSelecting, isSelected: instanceId === eventSelection, isShort }, getSegMeta(seg, todayRange, nowDate)))
        );
      })
    );
  };
  TimeCol2.prototype.renderHiddenGroups = function(hiddenGroups, segs) {
    var _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
    return createElement(Fragment, null, hiddenGroups.map(function(hiddenGroup) {
      var positionCss = computeSegVStyle(hiddenGroup.span);
      var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
      return createElement(TimeColMoreLink, { key: buildIsoString(computeEarliestSegStart(hiddenSegs)), hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize });
    }));
  };
  TimeCol2.prototype.renderFillSegs = function(segs, fillType) {
    var _a = this, props = _a.props, context = _a.context;
    var segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight);
    var children = segVCoords.map(function(vcoords, i2) {
      var seg = segs[i2];
      return createElement("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === "bg-event" ? createElement(BgEvent, __assign({ seg }, getSegMeta(seg, props.todayRange, props.nowDate))) : renderFill(fillType));
    });
    return createElement(Fragment, null, children);
  };
  TimeCol2.prototype.renderNowIndicator = function(segs) {
    var _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
    if (!slatCoords) {
      return null;
    }
    return segs.map(function(seg, i2) {
      return createElement(NowIndicatorRoot, {
        isAxis: false,
        date,
        key: i2
      }, function(rootElRef, classNames, innerElRef, innerContent) {
        return createElement("div", { ref: rootElRef, className: ["fc-timegrid-now-indicator-line"].concat(classNames).join(" "), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent);
      });
    });
  };
  TimeCol2.prototype.computeSegHStyle = function(segHCoords) {
    var _a = this.context, isRtl = _a.isRtl, options = _a.options;
    var shouldOverlap = options.slotEventOverlap;
    var nearCoord = segHCoords.levelCoord;
    var farCoord = segHCoords.levelCoord + segHCoords.thickness;
    var left;
    var right;
    if (shouldOverlap) {
      farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
    }
    if (isRtl) {
      left = 1 - farCoord;
      right = nearCoord;
    } else {
      left = nearCoord;
      right = 1 - farCoord;
    }
    var props = {
      zIndex: segHCoords.stackDepth + 1,
      left: left * 100 + "%",
      right: right * 100 + "%"
    };
    if (shouldOverlap && !segHCoords.stackForward) {
      props[isRtl ? "marginLeft" : "marginRight"] = 10 * 2;
    }
    return props;
  };
  return TimeCol2;
}(BaseComponent);
function renderPlainFgSegs(sortedFgSegs, _a) {
  var todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
  var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return createElement(Fragment, null, sortedFgSegs.map(function(seg) {
    var instanceId = seg.eventRange.instance.instanceId;
    return createElement(
      "div",
      { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? "hidden" : "" } },
      createElement(TimeColEvent, __assign({ seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, getSegMeta(seg, todayRange, nowDate)))
    );
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return { top: "", bottom: "" };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map(function(segEntry) {
    return allSegs[segEntry.index];
  });
}
var TimeColsContent = function(_super) {
  __extends(TimeColsContent2, _super);
  function TimeColsContent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.splitFgEventSegs = memoize(splitSegsByCol);
    _this.splitBgEventSegs = memoize(splitSegsByCol);
    _this.splitBusinessHourSegs = memoize(splitSegsByCol);
    _this.splitNowIndicatorSegs = memoize(splitSegsByCol);
    _this.splitDateSelectionSegs = memoize(splitSegsByCol);
    _this.splitEventDrag = memoize(splitInteractionByCol);
    _this.splitEventResize = memoize(splitInteractionByCol);
    _this.rootElRef = createRef();
    _this.cellElRefs = new RefMap();
    return _this;
  }
  TimeColsContent2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, context = _a.context;
    var nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate);
    var colCnt = props.cells.length;
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return createElement(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      createElement(
        "table",
        { role: "presentation", style: {
          minWidth: props.tableMinWidth,
          width: props.clientWidth
        } },
        props.tableColGroupNode,
        createElement(
          "tbody",
          { role: "presentation" },
          createElement(
            "tr",
            { role: "row" },
            props.axis && createElement(
              "td",
              { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
              createElement(
                "div",
                { className: "fc-timegrid-col-frame" },
                createElement("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === "number" && createElement(NowIndicatorRoot, { isAxis: true, date: props.nowDate }, function(rootElRef, classNames, innerElRef, innerContent) {
                  return createElement("div", { ref: rootElRef, className: ["fc-timegrid-now-indicator-arrow"].concat(classNames).join(" "), style: { top: nowIndicatorTop } }, innerContent);
                }))
              )
            ),
            props.cells.map(function(cell, i2) {
              return createElement(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i2], bgEventSegs: bgEventSegsByRow[i2], businessHourSegs: businessHourSegsByRow[i2], nowIndicatorSegs: nowIndicatorSegsByRow[i2], dateSelectionSegs: dateSelectionSegsByRow[i2], eventDrag: eventDragByRow[i2], eventResize: eventResizeByRow[i2], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint });
            })
          )
        )
      )
    );
  };
  TimeColsContent2.prototype.componentDidMount = function() {
    this.updateCoords();
  };
  TimeColsContent2.prototype.componentDidUpdate = function() {
    this.updateCoords();
  };
  TimeColsContent2.prototype.updateCoords = function() {
    var props = this.props;
    if (props.onColCoords && props.clientWidth !== null) {
      props.onColCoords(new PositionCache(
        this.rootElRef.current,
        collectCellEls(this.cellElRefs.currentMap, props.cells),
        true,
        false
      ));
    }
  };
  return TimeColsContent2;
}(BaseComponent);
function collectCellEls(elMap, cells) {
  return cells.map(function(cell) {
    return elMap[cell.key];
  });
}
var TimeCols = function(_super) {
  __extends(TimeCols2, _super);
  function TimeCols2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.processSlotOptions = memoize(processSlotOptions);
    _this.state = {
      slatCoords: null
    };
    _this.handleRootEl = function(el) {
      if (el) {
        _this.context.registerInteractiveComponent(_this, {
          el,
          isHitComboAllowed: _this.props.isHitComboAllowed
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    _this.handleScrollRequest = function(request) {
      var onScrollTopRequest = _this.props.onScrollTopRequest;
      var slatCoords = _this.state.slatCoords;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          var top_1 = slatCoords.computeTimeTop(request.time);
          top_1 = Math.ceil(top_1);
          if (top_1) {
            top_1 += 1;
          }
          onScrollTopRequest(top_1);
        }
        return true;
      }
      return false;
    };
    _this.handleColCoords = function(colCoords) {
      _this.colCoords = colCoords;
    };
    _this.handleSlatCoords = function(slatCoords) {
      _this.setState({ slatCoords });
      if (_this.props.onSlatCoords) {
        _this.props.onSlatCoords(slatCoords);
      }
    };
    return _this;
  }
  TimeCols2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state;
    return createElement(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      } },
      createElement(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : "", tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      createElement(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })
    );
  };
  TimeCols2.prototype.componentDidMount = function() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  };
  TimeCols2.prototype.componentDidUpdate = function(prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  };
  TimeCols2.prototype.componentWillUnmount = function() {
    this.scrollResponder.detach();
  };
  TimeCols2.prototype.queryHit = function(positionLeft, positionTop) {
    var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
    var colCoords = this.colCoords;
    var dateProfile = this.props.dateProfile;
    var slatCoords = this.state.slatCoords;
    var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
    var colIndex = colCoords.leftToIndex(positionLeft);
    var slatIndex = slatCoords.positions.topToIndex(positionTop);
    if (colIndex != null && slatIndex != null) {
      var cell = this.props.cells[colIndex];
      var slatTop = slatCoords.positions.tops[slatIndex];
      var slatHeight = slatCoords.positions.getHeight(slatIndex);
      var partial = (positionTop - slatTop) / slatHeight;
      var localSnapIndex = Math.floor(partial * snapsPerSlot);
      var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      var dayDate = this.props.cells[colIndex].date;
      var time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
      var start = dateEnv.add(dayDate, time);
      var end = dateEnv.add(start, snapDuration);
      return {
        dateProfile,
        dateSpan: __assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
        dayEl: colCoords.els[colIndex],
        rect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        },
        layer: 0
      };
    }
    return null;
  };
  return TimeCols2;
}(DateComponent);
function processSlotOptions(slotDuration, snapDurationOverride) {
  var snapDuration = snapDurationOverride || slotDuration;
  var snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
  }
  return { snapDuration, snapsPerSlot };
}
var DayTimeColsSlicer = function(_super) {
  __extends(DayTimeColsSlicer2, _super);
  function DayTimeColsSlicer2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DayTimeColsSlicer2.prototype.sliceRange = function(range, dayRanges) {
    var segs = [];
    for (var col = 0; col < dayRanges.length; col += 1) {
      var segRange = intersectRanges(range, dayRanges[col]);
      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col
        });
      }
    }
    return segs;
  };
  return DayTimeColsSlicer2;
}(Slicer);
var DayTimeCols = function(_super) {
  __extends(DayTimeCols2, _super);
  function DayTimeCols2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildDayRanges = memoize(buildDayRanges);
    _this.slicer = new DayTimeColsSlicer();
    _this.timeColsRef = createRef();
    return _this;
  }
  DayTimeCols2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, context = _a.context;
    var dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
    var isNowIndicator = context.options.nowIndicator;
    var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
    return createElement(NowTimer, { unit: isNowIndicator ? "minute" : "day" }, function(nowDate, todayRange) {
      return createElement(TimeCols, __assign({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }));
    });
  };
  return DayTimeCols2;
}(DateComponent);
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  var ranges = [];
  for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
    var date = _a[_i];
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }
  return ranges;
}
var STOCK_SUB_DURATIONS = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  var dayStart = new Date(0);
  var slatTime = slotMinTime;
  var slatIterator = createDuration(0);
  var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  var metas = [];
  while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
    var date = dateEnv.add(dayStart, slatTime);
    var isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
    metas.push({
      date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: formatIsoTimeString(date),
      isLabeled
    });
    slatTime = addDurations(slatTime, slotDuration);
    slatIterator = addDurations(slatIterator, slotDuration);
  }
  return metas;
}
function computeLabelInterval(slotDuration) {
  var i2;
  var labelInterval;
  var slotsPerLabel;
  for (i2 = STOCK_SUB_DURATIONS.length - 1; i2 >= 0; i2 -= 1) {
    labelInterval = createDuration(STOCK_SUB_DURATIONS[i2]);
    slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration;
}
var DayTimeColsView = function(_super) {
  __extends(DayTimeColsView2, _super);
  function DayTimeColsView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildTimeColsModel = memoize(buildTimeColsModel);
    _this.buildSlatMetas = memoize(buildSlatMetas);
    return _this;
  }
  DayTimeColsView2.prototype.render = function() {
    var _this = this;
    var _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dateProfile = props.dateProfile;
    var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    var splitProps = this.allDaySplitter.splitProps(props);
    var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    var dayMinWidth = options.dayMinWidth;
    var hasAttachedAxis = !dayMinWidth;
    var hasDetachedAxis = dayMinWidth;
    var headerContent = options.dayHeaders && createElement(DayHeader, { dates: dayTableModel.headerDates, dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null });
    var allDayContent = options.allDaySlot !== false && function(contentArg) {
      return createElement(DayTable, __assign({}, splitProps.allDay, { dateProfile, dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()));
    };
    var timeGridContent = function(contentArg) {
      return createElement(DayTimeCols, __assign({}, splitProps.timed, { dayTableModel, dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }));
    };
    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  };
  return DayTimeColsView2;
}(TimeColsView);
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  var daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, false);
}
var OPTION_REFINERS$2 = {
  allDaySlot: Boolean
};
var main$3 = createPlugin({
  initialView: "timeGridWeek",
  optionRefiners: OPTION_REFINERS$2,
  views: {
    timeGrid: {
      component: DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: "00:30:00",
      slotEventOverlap: true
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
var main$2 = "";
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var ListViewHeaderRow = function(_super) {
  __extends(ListViewHeaderRow2, _super);
  function ListViewHeaderRow2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      textId: getUniqueDomId()
    };
    return _this;
  }
  ListViewHeaderRow2.prototype.render = function() {
    var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options, viewApi = _a.viewApi;
    var _b = this.props, cellId = _b.cellId, dayDate = _b.dayDate, todayRange = _b.todayRange;
    var textId = this.state.textId;
    var dayMeta = getDateMeta(dayDate, todayRange);
    var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : "";
    var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : "";
    var hookProps = __assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text,
      sideText,
      navLinkAttrs: buildNavLinkAttrs(this.context, dayDate),
      sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, "day", false)
    }, dayMeta);
    var classNames = ["fc-list-day"].concat(getDayClassNames(dayMeta, theme));
    return createElement(RenderHook, { hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement(
        "tr",
        { ref: rootElRef, className: classNames.concat(customClassNames).join(" "), "data-date": formatDayString(dayDate) },
        createElement(
          "th",
          { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
          createElement("div", { className: "fc-list-day-cushion " + theme.getClass("tableCellShaded"), ref: innerElRef }, innerContent)
        )
      );
    });
  };
  return ListViewHeaderRow2;
}(BaseComponent);
function renderInnerContent(props) {
  return createElement(
    Fragment,
    null,
    props.text && createElement("a", __assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text),
    props.sideText && createElement("a", __assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText)
  );
}
var DEFAULT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
});
var ListViewEventRow = function(_super) {
  __extends(ListViewEventRow2, _super);
  function ListViewEventRow2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ListViewEventRow2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var seg = props.seg, timeHeaderId = props.timeHeaderId, eventHeaderId = props.eventHeaderId, dateHeaderId = props.dateHeaderId;
    var timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
    return createElement(EventRoot, {
      seg,
      timeText: "",
      disableDragging: true,
      disableResizing: true,
      defaultContent: function() {
        return renderEventInnerContent(seg, context);
      },
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday,
      isSelected: props.isSelected,
      isDragging: props.isDragging,
      isResizing: props.isResizing,
      isDateSelecting: props.isDateSelecting
    }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return createElement(
        "tr",
        { className: ["fc-list-event", hookProps.event.url ? "fc-event-forced-url" : ""].concat(classNames).join(" "), ref: rootElRef },
        buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
        createElement(
          "td",
          { "aria-hidden": true, className: "fc-list-event-graphic" },
          createElement("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })
        ),
        createElement("td", { ref: innerElRef, headers: eventHeaderId + " " + dateHeaderId, className: "fc-list-event-title" }, innerContent)
      );
    });
  };
  return ListViewEventRow2;
}(BaseComponent);
function renderEventInnerContent(seg, context) {
  var interactiveAttrs = getSegAnchorAttrs(seg, context);
  return createElement("a", __assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  var options = context.options;
  if (options.displayEventTime !== false) {
    var eventDef = seg.eventRange.def;
    var eventInstance = seg.eventRange.instance;
    var doAllDay = false;
    var timeText = void 0;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if (isMultiDayRange(seg.eventRange.range)) {
      if (seg.isStart) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = buildSegTimeText(seg, timeFormat, context);
    }
    if (doAllDay) {
      var hookProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return createElement(RenderHook, { hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function(rootElRef, classNames, innerElRef, innerContent) {
        return createElement("td", { ref: rootElRef, headers: timeHeaderId + " " + dateHeaderId, className: ["fc-list-event-time"].concat(classNames).join(" ") }, innerContent);
      });
    }
    return createElement("td", { className: "fc-list-event-time" }, timeText);
  }
  return null;
}
function renderAllDayInner(hookProps) {
  return hookProps.text;
}
var ListView = function(_super) {
  __extends(ListView2, _super);
  function ListView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.computeDateVars = memoize(computeDateVars);
    _this.eventStoreToSegs = memoize(_this._eventStoreToSegs);
    _this.state = {
      timeHeaderId: getUniqueDomId(),
      eventHeaderId: getUniqueDomId(),
      dateHeaderIdRoot: getUniqueDomId()
    };
    _this.setRootEl = function(rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    return _this;
  }
  ListView2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, context = _a.context;
    var extraClassNames = [
      "fc-list",
      context.theme.getClass("table"),
      context.options.stickyHeaderDates !== false ? "fc-list-sticky" : ""
    ];
    var _b = this.computeDateVars(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
    var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return createElement(ViewRoot, { viewSpec: context.viewSpec, elRef: this.setRootEl }, function(rootElRef, classNames) {
      return createElement(
        "div",
        { ref: rootElRef, className: extraClassNames.concat(classNames).join(" ") },
        createElement(Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? "visible" : "hidden", overflowY: props.isHeightAuto ? "visible" : "auto" }, eventSegs.length > 0 ? _this.renderSegList(eventSegs, dayDates) : _this.renderEmptyMessage())
      );
    });
  };
  ListView2.prototype.renderEmptyMessage = function() {
    var _a = this.context, options = _a.options, viewApi = _a.viewApi;
    var hookProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return createElement(RenderHook, { hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function(rootElRef, classNames, innerElRef, innerContent) {
      return createElement(
        "div",
        { className: ["fc-list-empty"].concat(classNames).join(" "), ref: rootElRef },
        createElement("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent)
      );
    });
  };
  ListView2.prototype.renderSegList = function(allSegs, dayDates) {
    var _a = this.context, theme = _a.theme, options = _a.options;
    var _b = this.state, timeHeaderId = _b.timeHeaderId, eventHeaderId = _b.eventHeaderId, dateHeaderIdRoot = _b.dateHeaderIdRoot;
    var segsByDay = groupSegsByDay(allSegs);
    return createElement(NowTimer, { unit: "day" }, function(nowDate, todayRange) {
      var innerNodes = [];
      for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        var daySegs = segsByDay[dayIndex];
        if (daySegs) {
          var dayStr = formatDayString(dayDates[dayIndex]);
          var dateHeaderId = dateHeaderIdRoot + "-" + dayStr;
          innerNodes.push(createElement(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange }));
          daySegs = sortEventSegs(daySegs, options.eventOrder);
          for (var _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
            var seg = daySegs_1[_i];
            innerNodes.push(createElement(ListViewEventRow, __assign({ key: dayStr + ":" + seg.eventRange.instance.instanceId, seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId, eventHeaderId, dateHeaderId }, getSegMeta(seg, todayRange, nowDate))));
          }
        }
      }
      return createElement(
        "table",
        { className: "fc-list-table " + theme.getClass("table") },
        createElement(
          "thead",
          null,
          createElement(
            "tr",
            null,
            createElement("th", { scope: "col", id: timeHeaderId }, options.timeHint),
            createElement("th", { scope: "col", "aria-hidden": true }),
            createElement("th", { scope: "col", id: eventHeaderId }, options.eventHint)
          )
        ),
        createElement("tbody", null, innerNodes)
      );
    });
  };
  ListView2.prototype._eventStoreToSegs = function(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  };
  ListView2.prototype.eventRangesToSegs = function(eventRanges, dayRanges) {
    var segs = [];
    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  };
  ListView2.prototype.eventRangeToSegs = function(eventRange, dayRanges) {
    var dateEnv = this.context.dateEnv;
    var nextDayThreshold = this.context.options.nextDayThreshold;
    var range = eventRange.range;
    var allDay = eventRange.def.allDay;
    var dayIndex;
    var segRange;
    var seg;
    var segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = intersectRanges(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  };
  return ListView2;
}(DateComponent);
function renderNoEventsInner(hookProps) {
  return hookProps.text;
}
function computeDateVars(dateProfile) {
  var dayStart = startOfDay(dateProfile.renderRange.start);
  var viewEnd = dateProfile.renderRange.end;
  var dayDates = [];
  var dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: addDays(dayStart, 1)
    });
    dayStart = addDays(dayStart, 1);
  }
  return { dayDates, dayRanges };
}
function groupSegsByDay(segs) {
  var segsByDay = [];
  var i2;
  var seg;
  for (i2 = 0; i2 < segs.length; i2 += 1) {
    seg = segs[i2];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var OPTION_REFINERS$1 = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: identity,
  noEventsContent: identity,
  noEventsDidMount: identity,
  noEventsWillUnmount: identity
};
function createFalsableFormatter(input) {
  return input === false ? null : createFormatter(input);
}
var main$1 = createPlugin({
  optionRefiners: OPTION_REFINERS$1,
  views: {
    list: {
      component: ListView,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" }
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" }
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" }
    }
  }
});
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
config.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
var PointerDragging = function() {
  function PointerDragging2(containerEl) {
    var _this = this;
    this.subjectEl = null;
    this.selector = "";
    this.handleSelector = "";
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true;
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    this.handleMouseDown = function(ev) {
      if (!_this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && _this.tryStart(ev)) {
        var pev = _this.createEventFromMouse(ev, true);
        _this.emitter.trigger("pointerdown", pev);
        _this.initScrollWatch(pev);
        if (!_this.shouldIgnoreMove) {
          document.addEventListener("mousemove", _this.handleMouseMove);
        }
        document.addEventListener("mouseup", _this.handleMouseUp);
      }
    };
    this.handleMouseMove = function(ev) {
      var pev = _this.createEventFromMouse(ev);
      _this.recordCoords(pev);
      _this.emitter.trigger("pointermove", pev);
    };
    this.handleMouseUp = function(ev) {
      document.removeEventListener("mousemove", _this.handleMouseMove);
      document.removeEventListener("mouseup", _this.handleMouseUp);
      _this.emitter.trigger("pointerup", _this.createEventFromMouse(ev));
      _this.cleanup();
    };
    this.handleTouchStart = function(ev) {
      if (_this.tryStart(ev)) {
        _this.isTouchDragging = true;
        var pev = _this.createEventFromTouch(ev, true);
        _this.emitter.trigger("pointerdown", pev);
        _this.initScrollWatch(pev);
        var targetEl = ev.target;
        if (!_this.shouldIgnoreMove) {
          targetEl.addEventListener("touchmove", _this.handleTouchMove);
        }
        targetEl.addEventListener("touchend", _this.handleTouchEnd);
        targetEl.addEventListener("touchcancel", _this.handleTouchEnd);
        window.addEventListener("scroll", _this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = function(ev) {
      var pev = _this.createEventFromTouch(ev);
      _this.recordCoords(pev);
      _this.emitter.trigger("pointermove", pev);
    };
    this.handleTouchEnd = function(ev) {
      if (_this.isDragging) {
        var targetEl = ev.target;
        targetEl.removeEventListener("touchmove", _this.handleTouchMove);
        targetEl.removeEventListener("touchend", _this.handleTouchEnd);
        targetEl.removeEventListener("touchcancel", _this.handleTouchEnd);
        window.removeEventListener("scroll", _this.handleTouchScroll, true);
        _this.emitter.trigger("pointerup", _this.createEventFromTouch(ev));
        _this.cleanup();
        _this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = function() {
      _this.wasTouchScroll = true;
    };
    this.handleScroll = function(ev) {
      if (!_this.shouldIgnoreMove) {
        var pageX = window.pageXOffset - _this.prevScrollX + _this.prevPageX;
        var pageY = window.pageYOffset - _this.prevScrollY + _this.prevPageY;
        _this.emitter.trigger("pointermove", {
          origEvent: ev,
          isTouch: _this.isTouchDragging,
          subjectEl: _this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - _this.origPageX,
          deltaY: pageY - _this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new Emitter();
    containerEl.addEventListener("mousedown", this.handleMouseDown);
    containerEl.addEventListener("touchstart", this.handleTouchStart, { passive: true });
    listenerCreated();
  }
  PointerDragging2.prototype.destroy = function() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown);
    this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: true });
    listenerDestroyed();
  };
  PointerDragging2.prototype.tryStart = function(ev) {
    var subjectEl = this.querySubjectEl(ev);
    var downEl = ev.target;
    if (subjectEl && (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true;
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  };
  PointerDragging2.prototype.cleanup = function() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    this.destroyScrollWatch();
  };
  PointerDragging2.prototype.querySubjectEl = function(ev) {
    if (this.selector) {
      return elementClosest(ev.target, this.selector);
    }
    return this.containerEl;
  };
  PointerDragging2.prototype.shouldIgnoreMouse = function() {
    return ignoreMouseDepth || this.isTouchDragging;
  };
  PointerDragging2.prototype.cancelTouchScroll = function() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  };
  PointerDragging2.prototype.initScrollWatch = function(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener("scroll", this.handleScroll, true);
    }
  };
  PointerDragging2.prototype.recordCoords = function(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.pageXOffset;
      this.prevScrollY = window.pageYOffset;
    }
  };
  PointerDragging2.prototype.destroyScrollWatch = function() {
    if (this.shouldWatchScroll) {
      window.removeEventListener("scroll", this.handleScroll, true);
    }
  };
  PointerDragging2.prototype.createEventFromMouse = function(ev, isFirst) {
    var deltaX = 0;
    var deltaY = 0;
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  };
  PointerDragging2.prototype.createEventFromTouch = function(ev, isFirst) {
    var touches = ev.touches;
    var pageX;
    var pageY;
    var deltaX = 0;
    var deltaY = 0;
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  };
  return PointerDragging2;
}();
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(function() {
    ignoreMouseDepth -= 1;
  }, config.touchMouseIgnoreWait);
}
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener("touchmove", onWindowTouchMove, { passive: false });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener("touchmove", onWindowTouchMove, { passive: false });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
var ElementMirror = function() {
  function ElementMirror2() {
    this.isVisible = false;
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null;
    this.parentNode = document.body;
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  ElementMirror2.prototype.start = function(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.pageXOffset;
    this.origScreenY = pageY - window.pageYOffset;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  };
  ElementMirror2.prototype.handleMove = function(pageX, pageY) {
    this.deltaX = pageX - window.pageXOffset - this.origScreenX;
    this.deltaY = pageY - window.pageYOffset - this.origScreenY;
    this.updateElPosition();
  };
  ElementMirror2.prototype.setIsVisible = function(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = "";
        }
        this.isVisible = bool;
        this.updateElPosition();
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = "none";
      }
      this.isVisible = bool;
    }
  };
  ElementMirror2.prototype.stop = function(needsRevertAnimation, callback) {
    var _this = this;
    var done = function() {
      _this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY)) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  };
  ElementMirror2.prototype.doRevertAnimation = function(callback, revertDuration) {
    var mirrorEl = this.mirrorEl;
    var finalSourceElRect = this.sourceEl.getBoundingClientRect();
    mirrorEl.style.transition = "top " + revertDuration + "ms,left " + revertDuration + "ms";
    applyStyle(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    whenTransitionDone(mirrorEl, function() {
      mirrorEl.style.transition = "";
      callback();
    });
  };
  ElementMirror2.prototype.cleanup = function() {
    if (this.mirrorEl) {
      removeElement(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  };
  ElementMirror2.prototype.updateElPosition = function() {
    if (this.sourceEl && this.isVisible) {
      applyStyle(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  };
  ElementMirror2.prototype.getMirrorEl = function() {
    var sourceElRect = this.sourceElRect;
    var mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true);
      mirrorEl.classList.add("fc-unselectable");
      mirrorEl.classList.add("fc-event-dragging");
      applyStyle(mirrorEl, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  };
  return ElementMirror2;
}();
var ScrollGeomCache = function(_super) {
  __extends(ScrollGeomCache2, _super);
  function ScrollGeomCache2(scrollController, doesListening) {
    var _this = _super.call(this) || this;
    _this.handleScroll = function() {
      _this.scrollTop = _this.scrollController.getScrollTop();
      _this.scrollLeft = _this.scrollController.getScrollLeft();
      _this.handleScrollChange();
    };
    _this.scrollController = scrollController;
    _this.doesListening = doesListening;
    _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
    _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
    _this.scrollWidth = scrollController.getScrollWidth();
    _this.scrollHeight = scrollController.getScrollHeight();
    _this.clientWidth = scrollController.getClientWidth();
    _this.clientHeight = scrollController.getClientHeight();
    _this.clientRect = _this.computeClientRect();
    if (_this.doesListening) {
      _this.getEventTarget().addEventListener("scroll", _this.handleScroll);
    }
    return _this;
  }
  ScrollGeomCache2.prototype.destroy = function() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
  };
  ScrollGeomCache2.prototype.getScrollTop = function() {
    return this.scrollTop;
  };
  ScrollGeomCache2.prototype.getScrollLeft = function() {
    return this.scrollLeft;
  };
  ScrollGeomCache2.prototype.setScrollTop = function(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  };
  ScrollGeomCache2.prototype.setScrollLeft = function(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  };
  ScrollGeomCache2.prototype.getClientWidth = function() {
    return this.clientWidth;
  };
  ScrollGeomCache2.prototype.getClientHeight = function() {
    return this.clientHeight;
  };
  ScrollGeomCache2.prototype.getScrollWidth = function() {
    return this.scrollWidth;
  };
  ScrollGeomCache2.prototype.getScrollHeight = function() {
    return this.scrollHeight;
  };
  ScrollGeomCache2.prototype.handleScrollChange = function() {
  };
  return ScrollGeomCache2;
}(ScrollController);
var ElementScrollGeomCache = function(_super) {
  __extends(ElementScrollGeomCache2, _super);
  function ElementScrollGeomCache2(el, doesListening) {
    return _super.call(this, new ElementScrollController(el), doesListening) || this;
  }
  ElementScrollGeomCache2.prototype.getEventTarget = function() {
    return this.scrollController.el;
  };
  ElementScrollGeomCache2.prototype.computeClientRect = function() {
    return computeInnerRect(this.scrollController.el);
  };
  return ElementScrollGeomCache2;
}(ScrollGeomCache);
var WindowScrollGeomCache = function(_super) {
  __extends(WindowScrollGeomCache2, _super);
  function WindowScrollGeomCache2(doesListening) {
    return _super.call(this, new WindowScrollController(), doesListening) || this;
  }
  WindowScrollGeomCache2.prototype.getEventTarget = function() {
    return window;
  };
  WindowScrollGeomCache2.prototype.computeClientRect = function() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  };
  WindowScrollGeomCache2.prototype.handleScrollChange = function() {
    this.clientRect = this.computeClientRect();
  };
  return WindowScrollGeomCache2;
}(ScrollGeomCache);
var getTime = typeof performance === "function" ? performance.now : Date.now;
var AutoScroller = function() {
  function AutoScroller2() {
    var _this = this;
    this.isEnabled = true;
    this.scrollQuery = [window, ".fc-scroller"];
    this.edgeThreshold = 50;
    this.maxVelocity = 300;
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = function() {
      if (_this.isAnimating) {
        var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);
        if (edge) {
          var now = getTime();
          _this.handleSide(edge, (now - _this.msSinceRequest) / 1e3);
          _this.requestAnimation(now);
        } else {
          _this.isAnimating = false;
        }
      }
    };
  }
  AutoScroller2.prototype.start = function(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  };
  AutoScroller2.prototype.handleMove = function(pageX, pageY) {
    if (this.isEnabled) {
      var pointerScreenX = pageX - window.pageXOffset;
      var pointerScreenY = pageY - window.pageYOffset;
      var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  };
  AutoScroller2.prototype.stop = function() {
    if (this.isEnabled) {
      this.isAnimating = false;
      for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
        var scrollCache = _a[_i];
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  };
  AutoScroller2.prototype.requestAnimation = function(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  };
  AutoScroller2.prototype.handleSide = function(edge, seconds) {
    var scrollCache = edge.scrollCache;
    var edgeThreshold = this.edgeThreshold;
    var invDistance = edgeThreshold - edge.distance;
    var velocity = invDistance * invDistance / (edgeThreshold * edgeThreshold) * this.maxVelocity * seconds;
    var sign = 1;
    switch (edge.name) {
      case "left":
        sign = -1;
      case "right":
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case "top":
        sign = -1;
      case "bottom":
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  };
  AutoScroller2.prototype.computeBestEdge = function(left, top) {
    var edgeThreshold = this.edgeThreshold;
    var bestSide = null;
    var scrollCaches = this.scrollCaches || [];
    for (var _i = 0, scrollCaches_1 = scrollCaches; _i < scrollCaches_1.length; _i++) {
      var scrollCache = scrollCaches_1[_i];
      var rect = scrollCache.clientRect;
      var leftDist = left - rect.left;
      var rightDist = rect.right - left;
      var topDist = top - rect.top;
      var bottomDist = rect.bottom - top;
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = { scrollCache, name: "top", distance: topDist };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = { scrollCache, name: "bottom", distance: bottomDist };
        }
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = { scrollCache, name: "left", distance: leftDist };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = { scrollCache, name: "right", distance: rightDist };
        }
      }
    }
    return bestSide;
  };
  AutoScroller2.prototype.buildCaches = function(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(function(el) {
      if (el === window) {
        return new WindowScrollGeomCache(false);
      }
      return new ElementScrollGeomCache(el, false);
    });
  };
  AutoScroller2.prototype.queryScrollEls = function(scrollStartEl) {
    var els = [];
    for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
      var query = _a[_i];
      if (typeof query === "object") {
        els.push(query);
      } else {
        els.push.apply(els, Array.prototype.slice.call(getElRoot(scrollStartEl).querySelectorAll(query)));
      }
    }
    return els;
  };
  return AutoScroller2;
}();
var FeaturefulElementDragging = function(_super) {
  __extends(FeaturefulElementDragging2, _super);
  function FeaturefulElementDragging2(containerEl, selector) {
    var _this = _super.call(this, containerEl) || this;
    _this.containerEl = containerEl;
    _this.delay = null;
    _this.minDistance = 0;
    _this.touchScrollAllowed = true;
    _this.mirrorNeedsRevert = false;
    _this.isInteracting = false;
    _this.isDragging = false;
    _this.isDelayEnded = false;
    _this.isDistanceSurpassed = false;
    _this.delayTimeoutId = null;
    _this.onPointerDown = function(ev) {
      if (!_this.isDragging) {
        _this.isInteracting = true;
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        preventSelection(document.body);
        preventContextMenu(document.body);
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        _this.emitter.trigger("pointerdown", ev);
        if (_this.isInteracting && !_this.pointer.shouldIgnoreMove) {
          _this.mirror.setIsVisible(false);
          _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY);
          _this.startDelay(ev);
          if (!_this.minDistance) {
            _this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    _this.onPointerMove = function(ev) {
      if (_this.isInteracting) {
        _this.emitter.trigger("pointermove", ev);
        if (!_this.isDistanceSurpassed) {
          var minDistance = _this.minDistance;
          var distanceSq = void 0;
          var deltaX = ev.deltaX, deltaY = ev.deltaY;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            _this.handleDistanceSurpassed(ev);
          }
        }
        if (_this.isDragging) {
          if (ev.origEvent.type !== "scroll") {
            _this.mirror.handleMove(ev.pageX, ev.pageY);
            _this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          _this.emitter.trigger("dragmove", ev);
        }
      }
    };
    _this.onPointerUp = function(ev) {
      if (_this.isInteracting) {
        _this.isInteracting = false;
        allowSelection(document.body);
        allowContextMenu(document.body);
        _this.emitter.trigger("pointerup", ev);
        if (_this.isDragging) {
          _this.autoScroller.stop();
          _this.tryStopDrag(ev);
        }
        if (_this.delayTimeoutId) {
          clearTimeout(_this.delayTimeoutId);
          _this.delayTimeoutId = null;
        }
      }
    };
    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on("pointerdown", _this.onPointerDown);
    pointer.emitter.on("pointermove", _this.onPointerMove);
    pointer.emitter.on("pointerup", _this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    _this.mirror = new ElementMirror();
    _this.autoScroller = new AutoScroller();
    return _this;
  }
  FeaturefulElementDragging2.prototype.destroy = function() {
    this.pointer.destroy();
    this.onPointerUp({});
  };
  FeaturefulElementDragging2.prototype.startDelay = function(ev) {
    var _this = this;
    if (typeof this.delay === "number") {
      this.delayTimeoutId = setTimeout(function() {
        _this.delayTimeoutId = null;
        _this.handleDelayEnd(ev);
      }, this.delay);
    } else {
      this.handleDelayEnd(ev);
    }
  };
  FeaturefulElementDragging2.prototype.handleDelayEnd = function(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  };
  FeaturefulElementDragging2.prototype.handleDistanceSurpassed = function(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  };
  FeaturefulElementDragging2.prototype.tryStartDrag = function(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger("dragstart", ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  };
  FeaturefulElementDragging2.prototype.tryStopDrag = function(ev) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  };
  FeaturefulElementDragging2.prototype.stopDrag = function(ev) {
    this.isDragging = false;
    this.emitter.trigger("dragend", ev);
  };
  FeaturefulElementDragging2.prototype.setIgnoreMove = function(bool) {
    this.pointer.shouldIgnoreMove = bool;
  };
  FeaturefulElementDragging2.prototype.setMirrorIsVisible = function(bool) {
    this.mirror.setIsVisible(bool);
  };
  FeaturefulElementDragging2.prototype.setMirrorNeedsRevert = function(bool) {
    this.mirrorNeedsRevert = bool;
  };
  FeaturefulElementDragging2.prototype.setAutoScrollEnabled = function(bool) {
    this.autoScroller.isEnabled = bool;
  };
  return FeaturefulElementDragging2;
}(ElementDragging);
var OffsetTracker = function() {
  function OffsetTracker2(el) {
    this.origRect = computeRect(el);
    this.scrollCaches = getClippingParents(el).map(function(scrollEl) {
      return new ElementScrollGeomCache(scrollEl, true);
    });
  }
  OffsetTracker2.prototype.destroy = function() {
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      scrollCache.destroy();
    }
  };
  OffsetTracker2.prototype.computeLeft = function() {
    var left = this.origRect.left;
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  };
  OffsetTracker2.prototype.computeTop = function() {
    var top = this.origRect.top;
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  };
  OffsetTracker2.prototype.isWithinClipping = function(pageX, pageY) {
    var point = { left: pageX, top: pageY };
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !pointInsideRect(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  };
  return OffsetTracker2;
}();
function isIgnoredClipping(node) {
  var tagName = node.tagName;
  return tagName === "HTML" || tagName === "BODY";
}
var HitDragging = function() {
  function HitDragging2(dragging, droppableStore) {
    var _this = this;
    this.useSubjectCenter = false;
    this.requireInitial = true;
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null;
    this.handlePointerDown = function(ev) {
      var dragging2 = _this.dragging;
      _this.initialHit = null;
      _this.movingHit = null;
      _this.finalHit = null;
      _this.prepareHits();
      _this.processFirstCoord(ev);
      if (_this.initialHit || !_this.requireInitial) {
        dragging2.setIgnoreMove(false);
        _this.emitter.trigger("pointerdown", ev);
      } else {
        dragging2.setIgnoreMove(true);
      }
    };
    this.handleDragStart = function(ev) {
      _this.emitter.trigger("dragstart", ev);
      _this.handleMove(ev, true);
    };
    this.handleDragMove = function(ev) {
      _this.emitter.trigger("dragmove", ev);
      _this.handleMove(ev);
    };
    this.handlePointerUp = function(ev) {
      _this.releaseHits();
      _this.emitter.trigger("pointerup", ev);
    };
    this.handleDragEnd = function(ev) {
      if (_this.movingHit) {
        _this.emitter.trigger("hitupdate", null, true, ev);
      }
      _this.finalHit = _this.movingHit;
      _this.movingHit = null;
      _this.emitter.trigger("dragend", ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on("pointerdown", this.handlePointerDown);
    dragging.emitter.on("dragstart", this.handleDragStart);
    dragging.emitter.on("dragmove", this.handleDragMove);
    dragging.emitter.on("pointerup", this.handlePointerUp);
    dragging.emitter.on("dragend", this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new Emitter();
  }
  HitDragging2.prototype.processFirstCoord = function(ev) {
    var origPoint = { left: ev.pageX, top: ev.pageY };
    var adjustedPoint = origPoint;
    var subjectEl = ev.subjectEl;
    var subjectRect;
    if (subjectEl instanceof HTMLElement) {
      subjectRect = computeRect(subjectEl);
      adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
    }
    var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        var slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = getRectCenter(slicedSubjectRect);
        }
      }
      this.coordAdjust = diffPoints(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = { left: 0, top: 0 };
    }
  };
  HitDragging2.prototype.handleMove = function(ev, forceHandle) {
    var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger("hitupdate", hit, false, ev);
    }
  };
  HitDragging2.prototype.prepareHits = function() {
    this.offsetTrackers = mapHash$1(this.droppableStore, function(interactionSettings) {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  };
  HitDragging2.prototype.releaseHits = function() {
    var offsetTrackers = this.offsetTrackers;
    for (var id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  };
  HitDragging2.prototype.queryHitForOffset = function(offsetLeft, offsetTop) {
    var _a = this, droppableStore = _a.droppableStore, offsetTrackers = _a.offsetTrackers;
    var bestHit = null;
    for (var id in droppableStore) {
      var component = droppableStore[id].component;
      var offsetTracker = offsetTrackers[id];
      if (offsetTracker && offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        var originLeft = offsetTracker.computeLeft();
        var originTop = offsetTracker.computeTop();
        var positionLeft = offsetLeft - originLeft;
        var positionTop = offsetTop - originTop;
        var origRect = offsetTracker.origRect;
        var width = origRect.right - origRect.left;
        var height = origRect.bottom - origRect.top;
        if (positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          var hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit && rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  };
  return HitDragging2;
}();
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  var props = {};
  for (var _i = 0, _a = context.pluginHooks.datePointTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];
    __assign(props, transform(dateSpan, context));
  }
  __assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
    allDay: span.allDay
  };
}
var DateClicking = function(_super) {
  __extends(DateClicking2, _super);
  function DateClicking2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.handlePointerDown = function(pev) {
      var dragging = _this.dragging;
      var downEl = pev.origEvent.target;
      dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));
    };
    _this.handleDragEnd = function(ev) {
      var component = _this.component;
      var pointer = _this.dragging.pointer;
      if (!pointer.wasTouchScroll) {
        var _a = _this.hitDragging, initialHit = _a.initialHit, finalHit = _a.finalHit;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          var context = component.context;
          var arg = __assign(__assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
          context.emitter.trigger("dateClick", arg);
        }
      }
    };
    _this.dragging = new FeaturefulElementDragging(settings.el);
    _this.dragging.autoScroller.isEnabled = false;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", _this.handlePointerDown);
    hitDragging.emitter.on("dragend", _this.handleDragEnd);
    return _this;
  }
  DateClicking2.prototype.destroy = function() {
    this.dragging.destroy();
  };
  return DateClicking2;
}(Interaction);
var DateSelecting = function(_super) {
  __extends(DateSelecting2, _super);
  function DateSelecting2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.dragSelection = null;
    _this.handlePointerDown = function(ev) {
      var _a = _this, component2 = _a.component, dragging2 = _a.dragging;
      var options2 = component2.context.options;
      var canSelect = options2.selectable && component2.isValidDateDownEl(ev.origEvent.target);
      dragging2.setIgnoreMove(!canSelect);
      dragging2.delay = ev.isTouch ? getComponentTouchDelay$1(component2) : null;
    };
    _this.handleDragStart = function(ev) {
      _this.component.context.calendarApi.unselect(ev);
    };
    _this.handleHitUpdate = function(hit, isFinal) {
      var context = _this.component.context;
      var dragSelection = null;
      var isInvalid = false;
      if (hit) {
        var initialHit = _this.hitDragging.initialHit;
        var disallowed = hit.componentId === initialHit.componentId && _this.isHitComboAllowed && !_this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({ type: "SELECT_DATES", selection: dragSelection });
      } else if (!isFinal) {
        context.dispatch({ type: "UNSELECT_DATES" });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        _this.dragSelection = dragSelection;
      }
    };
    _this.handlePointerUp = function(pev) {
      if (_this.dragSelection) {
        triggerDateSelect(_this.dragSelection, pev, _this.component.context);
        _this.dragSelection = null;
      }
    };
    var component = settings.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", _this.handlePointerDown);
    hitDragging.emitter.on("dragstart", _this.handleDragStart);
    hitDragging.emitter.on("hitupdate", _this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", _this.handlePointerUp);
    return _this;
  }
  DateSelecting2.prototype.destroy = function() {
    this.dragging.destroy();
  };
  return DateSelecting2;
}(Interaction);
function getComponentTouchDelay$1(component) {
  var options = component.context.options;
  var delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var ms = [
    dateSpan0.range.start,
    dateSpan0.range.end,
    dateSpan1.range.start,
    dateSpan1.range.end
  ];
  ms.sort(compareNumbers);
  var props = {};
  for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
    var transformer = dateSelectionTransformers_1[_i];
    var res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      __assign(props, res);
    }
  }
  props.range = { start: ms[0], end: ms[3] };
  props.allDay = dateSpan0.allDay;
  return props;
}
var EventDragging = function(_super) {
  __extends(EventDragging2, _super);
  function EventDragging2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.subjectEl = null;
    _this.subjectSeg = null;
    _this.isDragging = false;
    _this.eventRange = null;
    _this.relevantEvents = null;
    _this.receivingContext = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;
    _this.handlePointerDown = function(ev) {
      var origTarget = ev.origEvent.target;
      var _a = _this, component2 = _a.component, dragging2 = _a.dragging;
      var mirror = dragging2.mirror;
      var options2 = component2.context.options;
      var initialContext = component2.context;
      _this.subjectEl = ev.subjectEl;
      var subjectSeg = _this.subjectSeg = getElSeg(ev.subjectEl);
      var eventRange = _this.eventRange = subjectSeg.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      _this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging2.minDistance = ev.isTouch ? 0 : options2.eventDragMinDistance;
      dragging2.delay = ev.isTouch && eventInstanceId !== component2.props.eventSelection ? getComponentTouchDelay(component2) : null;
      if (options2.fixedMirrorParent) {
        mirror.parentNode = options2.fixedMirrorParent;
      } else {
        mirror.parentNode = elementClosest(origTarget, ".fc");
      }
      mirror.revertDuration = options2.dragRevertDuration;
      var isValid = component2.isValidSegDownEl(origTarget) && !elementClosest(origTarget, ".fc-event-resizer");
      dragging2.setIgnoreMove(!isValid);
      _this.isDragging = isValid && ev.subjectEl.classList.contains("fc-event-draggable");
    };
    _this.handleDragStart = function(ev) {
      var initialContext = _this.component.context;
      var eventRange = _this.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      if (ev.isTouch) {
        if (eventInstanceId !== _this.component.props.eventSelection) {
          initialContext.dispatch({ type: "SELECT_EVENT", eventInstanceId });
        }
      } else {
        initialContext.dispatch({ type: "UNSELECT_EVENT" });
      }
      if (_this.isDragging) {
        initialContext.calendarApi.unselect(ev);
        initialContext.emitter.trigger("eventDragStart", {
          el: _this.subjectEl,
          event: new EventApi(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };
    _this.handleHitUpdate = function(hit, isFinal) {
      if (!_this.isDragging) {
        return;
      }
      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var initialContext = _this.component.context;
      var receivingContext = null;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        receivingContext = hit.context;
        var receivingOptions = receivingContext.options;
        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
          if (mutation) {
            mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;
            if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = createEmptyEventStore();
            }
          }
        } else {
          receivingContext = null;
        }
      }
      _this.displayDrag(receivingContext, interaction);
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (initialContext === receivingContext && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        _this.dragging.setMirrorNeedsRevert(!mutation);
        _this.dragging.setMirrorIsVisible(!hit || !getElRoot(_this.subjectEl).querySelector(".fc-event-mirror"));
        _this.receivingContext = receivingContext;
        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    _this.handlePointerUp = function() {
      if (!_this.isDragging) {
        _this.cleanup();
      }
    };
    _this.handleDragEnd = function(ev) {
      if (_this.isDragging) {
        var initialContext_1 = _this.component.context;
        var initialView = initialContext_1.viewApi;
        var _a = _this, receivingContext_1 = _a.receivingContext, validMutation = _a.validMutation;
        var eventDef = _this.eventRange.def;
        var eventInstance = _this.eventRange.instance;
        var eventApi = new EventApi(initialContext_1, eventDef, eventInstance);
        var relevantEvents_1 = _this.relevantEvents;
        var mutatedRelevantEvents_1 = _this.mutatedRelevantEvents;
        var finalHit = _this.hitDragging.finalHit;
        _this.clearDrag();
        initialContext_1.emitter.trigger("eventDragStop", {
          el: _this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });
        if (validMutation) {
          if (receivingContext_1 === initialContext_1) {
            var updatedEventApi = new EventApi(initialContext_1, mutatedRelevantEvents_1.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents_1.instances[eventInstance.instanceId] : null);
            initialContext_1.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents_1
            });
            var eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents_1, initialContext_1, eventInstance),
              revert: function() {
                initialContext_1.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents_1
                });
              }
            };
            var transformed = {};
            for (var _i = 0, _b = initialContext_1.getCurrentData().pluginHooks.eventDropTransformers; _i < _b.length; _i++) {
              var transformer = _b[_i];
              __assign(transformed, transformer(validMutation, initialContext_1));
            }
            initialContext_1.emitter.trigger("eventDrop", __assign(__assign(__assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
            initialContext_1.emitter.trigger("eventChange", eventChangeArg);
          } else if (receivingContext_1) {
            var eventRemoveArg = {
              event: eventApi,
              relatedEvents: buildEventApis(relevantEvents_1, initialContext_1, eventInstance),
              revert: function() {
                initialContext_1.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents_1
                });
              }
            };
            initialContext_1.emitter.trigger("eventLeave", __assign(__assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
            initialContext_1.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: relevantEvents_1
            });
            initialContext_1.emitter.trigger("eventRemove", eventRemoveArg);
            var addedEventDef = mutatedRelevantEvents_1.defs[eventDef.defId];
            var addedEventInstance = mutatedRelevantEvents_1.instances[eventInstance.instanceId];
            var addedEventApi = new EventApi(receivingContext_1, addedEventDef, addedEventInstance);
            receivingContext_1.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents_1
            });
            var eventAddArg = {
              event: addedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents_1, receivingContext_1, addedEventInstance),
              revert: function() {
                receivingContext_1.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: mutatedRelevantEvents_1
                });
              }
            };
            receivingContext_1.emitter.trigger("eventAdd", eventAddArg);
            if (ev.isTouch) {
              receivingContext_1.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: eventInstance.instanceId
              });
            }
            receivingContext_1.emitter.trigger("drop", __assign(__assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext_1)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
            receivingContext_1.emitter.trigger("eventReceive", __assign(__assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
          }
        } else {
          initialContext_1.emitter.trigger("_noEventDrop");
        }
      }
      _this.cleanup();
    };
    var component = _this.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging2.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsStore);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on("pointerdown", _this.handlePointerDown);
    hitDragging.emitter.on("dragstart", _this.handleDragStart);
    hitDragging.emitter.on("hitupdate", _this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", _this.handlePointerUp);
    hitDragging.emitter.on("dragend", _this.handleDragEnd);
    return _this;
  }
  EventDragging2.prototype.destroy = function() {
    this.dragging.destroy();
  };
  EventDragging2.prototype.displayDrag = function(nextContext, state) {
    var initialContext = this.component.context;
    var prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: "SET_EVENT_DRAG",
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: createEmptyEventStore(),
            isEvent: true
          }
        });
      } else {
        prevContext.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
    }
    if (nextContext) {
      nextContext.dispatch({ type: "SET_EVENT_DRAG", state });
    }
  };
  EventDragging2.prototype.clearDrag = function() {
    var initialCalendar = this.component.context;
    var receivingContext = this.receivingContext;
    if (receivingContext) {
      receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
  };
  EventDragging2.prototype.cleanup = function() {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  };
  EventDragging2.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  return EventDragging2;
}(Interaction);
function computeEventMutation(hit0, hit1, massagers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var date0 = dateSpan0.range.start;
  var date1 = dateSpan1.range.start;
  var standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      date0 = startOfDay(date0);
    }
  }
  var delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    standardProps.allDay = false;
  }
  var mutation = {
    datesDelta: delta,
    standardProps
  };
  for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
    var massager = massagers_1[_i];
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  var options = component.context.options;
  var delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
var EventResizing = function(_super) {
  __extends(EventResizing2, _super);
  function EventResizing2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.draggingSegEl = null;
    _this.draggingSeg = null;
    _this.eventRange = null;
    _this.relevantEvents = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;
    _this.handlePointerDown = function(ev) {
      var component2 = _this.component;
      var segEl = _this.querySegEl(ev);
      var seg = getElSeg(segEl);
      var eventRange = _this.eventRange = seg.eventRange;
      _this.dragging.minDistance = component2.context.options.eventDragMinDistance;
      _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    _this.handleDragStart = function(ev) {
      var context = _this.component.context;
      var eventRange = _this.eventRange;
      _this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, _this.eventRange.instance.instanceId);
      var segEl = _this.querySegEl(ev);
      _this.draggingSegEl = segEl;
      _this.draggingSeg = getElSeg(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger("eventResizeStart", {
        el: segEl,
        event: new EventApi(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    _this.handleHitUpdate = function(hit, isFinal, ev) {
      var context = _this.component.context;
      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var eventInstance = _this.eventRange.instance;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        var disallowed = hit.componentId === initialHit.componentId && _this.isHitComboAllowed && !_this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains("fc-event-resizer-start"), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!isInteractionValid(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: "SET_EVENT_RESIZE",
          state: interaction
        });
      } else {
        context.dispatch({ type: "UNSET_EVENT_RESIZE" });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    _this.handleDragEnd = function(ev) {
      var context = _this.component.context;
      var eventDef = _this.eventRange.def;
      var eventInstance = _this.eventRange.instance;
      var eventApi = new EventApi(context, eventDef, eventInstance);
      var relevantEvents = _this.relevantEvents;
      var mutatedRelevantEvents = _this.mutatedRelevantEvents;
      context.emitter.trigger("eventResizeStop", {
        el: _this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (_this.validMutation) {
        var updatedEventApi = new EventApi(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: mutatedRelevantEvents
        });
        var eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
          revert: function() {
            context.dispatch({
              type: "MERGE_EVENTS",
              eventStore: relevantEvents
            });
          }
        };
        context.emitter.trigger("eventResize", __assign(__assign({}, eventChangeArg), { el: _this.draggingSegEl, startDelta: _this.validMutation.startDelta || createDuration(0), endDelta: _this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
        context.emitter.trigger("eventChange", eventChangeArg);
      } else {
        context.emitter.trigger("_noEventResize");
      }
      _this.draggingSeg = null;
      _this.relevantEvents = null;
      _this.validMutation = null;
    };
    var component = settings.component;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = ".fc-event-resizer";
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", _this.handlePointerDown);
    hitDragging.emitter.on("dragstart", _this.handleDragStart);
    hitDragging.emitter.on("hitupdate", _this.handleHitUpdate);
    hitDragging.emitter.on("dragend", _this.handleDragEnd);
    return _this;
  }
  EventResizing2.prototype.destroy = function() {
    this.dragging.destroy();
  };
  EventResizing2.prototype.querySegEl = function(ev) {
    return elementClosest(ev.subjectEl, ".fc-event");
  };
  return EventResizing2;
}(Interaction);
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  var dateEnv = hit0.context.dateEnv;
  var date0 = hit0.dateSpan.range.start;
  var date1 = hit1.dateSpan.range.start;
  var delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return { startDelta: delta };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return { endDelta: delta };
  }
  return null;
}
var UnselectAuto = function() {
  function UnselectAuto2(context) {
    var _this = this;
    this.context = context;
    this.isRecentPointerDateSelect = false;
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = function(selectInfo) {
      if (selectInfo.jsEvent) {
        _this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = function(pev) {
      var unselectCancel = _this.context.options.unselectCancel;
      var downEl = getEventTargetViaRoot(pev.origEvent);
      _this.matchesCancel = !!elementClosest(downEl, unselectCancel);
      _this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR);
    };
    this.onDocumentPointerUp = function(pev) {
      var context2 = _this.context;
      var documentPointer2 = _this.documentPointer;
      var calendarState = context2.getCurrentData();
      if (!documentPointer2.wasTouchScroll) {
        if (calendarState.dateSelection && !_this.isRecentPointerDateSelect) {
          var unselectAuto = context2.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !_this.matchesCancel)) {
            context2.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection && !_this.matchesEvent) {
          context2.dispatch({ type: "UNSELECT_EVENT" });
        }
      }
      _this.isRecentPointerDateSelect = false;
    };
    var documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on("pointerdown", this.onDocumentPointerDown);
    documentPointer.emitter.on("pointerup", this.onDocumentPointerUp);
    context.emitter.on("select", this.onSelect);
  }
  UnselectAuto2.prototype.destroy = function() {
    this.context.emitter.off("select", this.onSelect);
    this.documentPointer.destroy();
  };
  return UnselectAuto2;
}();
var OPTION_REFINERS = {
  fixedMirrorParent: identity
};
var LISTENER_REFINERS = {
  dateClick: identity,
  eventDragStart: identity,
  eventDragStop: identity,
  eventDrop: identity,
  eventResizeStart: identity,
  eventResizeStop: identity,
  eventResize: identity,
  drop: identity,
  eventReceive: identity,
  eventLeave: identity
};
config.dataAttrPrefix = "";
(function(_super) {
  __extends(InferredElementDragging, _super);
  function InferredElementDragging(containerEl) {
    var _this = _super.call(this, containerEl) || this;
    _this.shouldIgnoreMove = false;
    _this.mirrorSelector = "";
    _this.currentMirrorEl = null;
    _this.handlePointerDown = function(ev) {
      _this.emitter.trigger("pointerdown", ev);
      if (!_this.shouldIgnoreMove) {
        _this.emitter.trigger("dragstart", ev);
      }
    };
    _this.handlePointerMove = function(ev) {
      if (!_this.shouldIgnoreMove) {
        _this.emitter.trigger("dragmove", ev);
      }
    };
    _this.handlePointerUp = function(ev) {
      _this.emitter.trigger("pointerup", ev);
      if (!_this.shouldIgnoreMove) {
        _this.emitter.trigger("dragend", ev);
      }
    };
    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on("pointerdown", _this.handlePointerDown);
    pointer.emitter.on("pointermove", _this.handlePointerMove);
    pointer.emitter.on("pointerup", _this.handlePointerUp);
    return _this;
  }
  InferredElementDragging.prototype.destroy = function() {
    this.pointer.destroy();
  };
  InferredElementDragging.prototype.setIgnoreMove = function(bool) {
    this.shouldIgnoreMove = bool;
  };
  InferredElementDragging.prototype.setMirrorIsVisible = function(bool) {
    if (bool) {
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = "";
        this.currentMirrorEl = null;
      }
    } else {
      var mirrorEl = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = "hidden";
      }
    }
  };
  return InferredElementDragging;
})(ElementDragging);
var main = createPlugin({
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});
var es$1 = {};
Object.defineProperty(es$1, "__esModule", { value: true });
var es = {
  code: "es",
  week: {
    dow: 1,
    doy: 4
  },
  buttonText: {
    prev: "Ant",
    next: "Sig",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "D\xEDa",
    list: "Agenda"
  },
  buttonHints: {
    prev: "$0 antes",
    next: "$0 siguiente",
    today: function(buttonText) {
      return buttonText === "D\xEDa" ? "Hoy" : (buttonText === "Semana" ? "Esta" : "Este") + " " + buttonText.toLocaleLowerCase();
    }
  },
  viewHint: function(buttonText) {
    return "Vista " + (buttonText === "Semana" ? "de la" : "del") + " " + buttonText.toLocaleLowerCase();
  },
  weekText: "Sm",
  weekTextLong: "Semana",
  allDayText: "Todo el d\xEDa",
  moreLinkText: "m\xE1s",
  moreLinkHint: function(eventCnt) {
    return "Mostrar ".concat(eventCnt, " eventos m\xE1s");
  },
  noEventsText: "No hay eventos para mostrar",
  navLinkHint: "Ir al $0",
  closeHint: "Cerrar",
  timeHint: "La hora",
  eventHint: "Evento"
};
var _default = es$1.default = es;
var Calendario_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n2) => (pushScopeId("data-v-58e620d3"), n2 = n2(), popScopeId(), n2);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Cerrar calendario ");
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("span", null, "Dias Entrenamiento")
], -1));
const _hoisted_3 = { class: "contenido" };
const _hoisted_4 = {
  key: 0,
  class: "fas fa-clock tiempo",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  key: 1,
  class: "fas fa-ruler-horizontal distancia",
  "aria-hidden": "true"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_7 = { class: "" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    iddeportista: null,
    identrenador: null
  },
  emits: ["close"],
  async setup(__props, { emit: emits }) {
    let __temp, __restore;
    const props = __props;
    const themeColors = useThemeColors();
    const fullCalendar = ref(null);
    const iniciales = ref([]);
    const selectInfoEdit = ref();
    const selectInfoSelect = ref();
    const rutinas = ref();
    const fechaSeleccionada = ref(new Date());
    const rutinaSelect = ref();
    const opcionactual = ref("crear");
    const isOpenOptions = ref(false);
    const diasEntrenamiento = ref([]);
    const notyf = new Notyf({
      duration: 1e4,
      position: {
        x: "center",
        y: "center"
      },
      types: [
        {
          type: "error",
          dismissible: true,
          icon: {
            className: "fas fa-bell",
            tagName: "msgError",
            text: ""
          }
        },
        {
          type: "warning",
          dismissible: true,
          background: themeColors.warning,
          icon: {
            className: "fas fa-bell",
            tagName: "msgWarning",
            text: ""
          }
        }
      ]
    });
    const listarRutinas = async () => {
      if (props.identrenador) {
        rutinas.value = await LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR(
          props.iddeportista,
          props.identrenador
        );
      } else {
        rutinas.value = await LISTAR_RUTINAS_DEPORTISTA(props.iddeportista);
      }
    };
    const listarRutinasInitial = async () => {
      var _a;
      await listarRutinas();
      const INITIAL_EVENTS = [];
      (_a = rutinas.value) == null ? void 0 : _a.forEach((rutina) => {
        const t2 = new Date(1970, 0, 1);
        let tEnd = new Date(1970, 0, 1);
        t2.setSeconds(rutina.fecha.seconds);
        tEnd.setSeconds(rutina.fecha.seconds);
        const ran = Math.floor(Math.random() * 3);
        t2.setHours(t2.getHours() + ran);
        tEnd.setHours(tEnd.getHours() + ran);
        const randuration = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
        let colorRan = "#52b2cf";
        switch (rutina.tipo_medicion) {
          case "Tiempo":
            colorRan = "#52b2cf";
            break;
          case "Distancia":
            colorRan = "#f08080";
            break;
          default:
            colorRan = "#d1cfe2";
            break;
        }
        tEnd.setMinutes(tEnd.getMinutes() + randuration);
        const rutinaEv = {
          id: rutina.id,
          title: rutina.titulo,
          start: t2.toISOString(),
          end: tEnd.toISOString(),
          color: colorRan,
          is_type: rutina.tipo_medicion,
          extendedProps: {
            description: rutina.descripcion
          }
        };
        INITIAL_EVENTS.push(rutinaEv);
      });
      return INITIAL_EVENTS;
    };
    const dia = (dateStr, inicial = 0) => {
      const dias1 = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
      const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
      let fecha = new Date(dateStr);
      switch (inicial) {
        case 1:
          return dias1[fecha.getDay()];
        default:
          return dias[fecha.getDay()];
      }
    };
    const abrirMenuNuevaRutina = (selectInfo) => {
      selectInfoSelect.value = selectInfo;
      if (props.identrenador) {
        const res = compareDates(selectInfo.start);
        if (res === "igual" || res === "mayor") {
          const diaStr = dia(selectInfo.startStr);
          if (diasEntrenamiento.value[diaStr]) {
            notyf.dismissAll();
            fechaSeleccionada.value = selectInfo.start;
            opcionactual.value = "crear";
            isOpenOptions.value = true;
          } else {
            notyf.dismissAll();
            notyf.open({
              type: "warning",
              message: "El usuario no tiene disponibilidad para entrenar en este d\xEDa"
            });
          }
        } else {
          notyf.open({
            type: "error",
            message: "\xA1Oops! Has seleccionado una fecha del pasado. Por favor, elige una <b>fecha actual o futura</b>."
          });
        }
      }
    };
    const abrirOpcionesRutina = (selectInfo) => {
      var _a;
      notyf.dismissAll();
      selectInfoEdit.value = selectInfo;
      (_a = rutinas.value) == null ? void 0 : _a.forEach((rutina) => {
        var _a2;
        if (rutina.id === ((_a2 = selectInfoEdit.value) == null ? void 0 : _a2.event.id)) {
          rutinaSelect.value = { ...rutina };
        }
      });
      if (props.identrenador) {
        opcionactual.value = "editar";
      } else {
        opcionactual.value = "ver";
      }
      isOpenOptions.value = true;
    };
    const cerrarFullCalendario = () => {
      emits("close");
    };
    const crearRutinaPersonalizada = async (rutina) => {
      var _a, _b;
      isOpenOptions.value = false;
      rutina.id_entrenador = props.identrenador || "";
      rutina.id_deportista = props.iddeportista;
      rutina.fecha = fechaSeleccionada.value;
      const id = await CREAR_RUTINA_PERSONALIZADA(rutina);
      (_b = selectInfoSelect.value) == null ? void 0 : _b.view.calendar.addEvent({
        id,
        title: rutina.titulo,
        start: (_a = selectInfoSelect.value) == null ? void 0 : _a.start.toISOString().replace(/T.*$/, ""),
        extendedProps: {
          description: rutina.descripcion
        }
      });
      listarRutinas();
      await CREAR_DOCUMENTO_FIRESTORE("notificaciones", {
        tipo: "rutina",
        remitente: props.identrenador,
        destinatario: props.iddeportista,
        txt: "Entrenador asigno nueva rutina",
        fechaStr: new Date().toISOString(),
        fecha: new Date(),
        estado: "no_leido"
      });
      await ACTUALIZAR_DOCUMENTO_REALTIME("users", props.iddeportista, {
        notificaciones: true
      });
    };
    const actualizarRutinaPersonalizada = async (rutina) => {
      await ACTUALIZAR_RUTINA_PERSONALIZADA(rutina.id, rutina);
      isOpenOptions.value = false;
      await listarRutinas();
      await CREAR_DOCUMENTO_FIRESTORE("notificaciones", {
        tipo: "rutina",
        remitente: props.identrenador,
        destinatario: props.iddeportista,
        txt: "Entrenador actualizo una rutina",
        fechaStr: new Date().toISOString(),
        fecha: new Date(),
        estado: "no_leido"
      });
      await ACTUALIZAR_DOCUMENTO_REALTIME("notificaciones", props.iddeportista, {
        notificaciones: true
      });
    };
    const eliminarRutinaPersonalizada = async (idRutina) => {
      var _a;
      await ELIMINAR_RUTINA_PERSONALIZADA(idRutina);
      isOpenOptions.value = false;
      (_a = selectInfoEdit.value) == null ? void 0 : _a.event.remove();
      await listarRutinas();
    };
    iniciales.value = ([__temp, __restore] = withAsyncContext(() => listarRutinasInitial()), __temp = await __temp, __restore(), __temp);
    const calendarOptions = reactive({
      plugins: [main$5, main$3, main$1, main],
      firstDay: 1,
      locale: _default,
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
      },
      nowIndicator: true,
      initialEvents: iniciales.value,
      eventClick: abrirOpcionesRutina,
      editable: true,
      selectable: true,
      selectMirror: false,
      dayMaxEvents: true,
      weekends: true,
      select: abrirMenuNuevaRutina,
      eventStartEditable: false,
      eventDurationEditable: false,
      eventColor: "#bf1bb2"
    });
    onUnmounted(() => {
      notyf.dismissAll();
    });
    let deportista = ref();
    onMounted(async () => {
      deportista.value = await getDatosDeportista(props.iddeportista);
      onValue(
        ref$1(database, `Objetivos/${props.iddeportista}/dias_entrenamiento`),
        (snapshot) => {
          if (snapshot.exists())
            diasEntrenamiento.value = snapshot.val();
          else
            diasEntrenamiento.value = {};
        }
      );
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$9;
      const _component_VFlexItem = _sfc_main$b;
      const _component_VTag = _sfc_main$c;
      const _component_VFlex = _sfc_main$d;
      const _component_ModalOpcionesEvento = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VFlex, {
          "justify-content": "space-between",
          "flex-wrap": "wrap",
          "flex-direction": "row-reverse",
          class: "pb-1 pegar"
        }, {
          default: withCtx(() => [
            createVNode(_component_VFlexItem, null, {
              default: withCtx(() => [
                props.identrenador ? (openBlock(), createBlock(_component_VButton, {
                  key: 0,
                  elevated: "",
                  rounded: "",
                  raised: "",
                  color: "danger",
                  icon: "lnir lnir-close",
                  onClick: cerrarFullCalendario
                }, {
                  default: withCtx(() => [
                    _hoisted_1
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_VFlexItem, null, {
              default: withCtx(() => [
                _hoisted_2,
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.lunes ? "green" : "danger",
                  label: "Lunes",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.martes ? "green" : "danger",
                  label: "Martes",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.miercoles ? "green" : "danger",
                  label: "Miercoles",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.jueves ? "green" : "danger",
                  label: "Jueves",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.viernes ? "green" : "danger",
                  label: "Viernes",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.sabado ? "green" : "danger",
                  label: "Sabado",
                  rounded: ""
                }, null, 8, ["color"]),
                createVNode(_component_VTag, {
                  color: diasEntrenamiento.value.domingo ? "green" : "danger",
                  label: "Domingo",
                  rounded: ""
                }, null, 8, ["color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(FullCalendar), {
          ref_key: "fullCalendar",
          ref: fullCalendar,
          options: unref(calendarOptions)
        }, {
          eventContent: withCtx((arg) => [
            createBaseVNode("div", _hoisted_3, [
              arg.event.extendedProps.is_type == "Tiempo" ? (openBlock(), createElementBlock("i", _hoisted_4)) : createCommentVNode("", true),
              arg.event.extendedProps.is_type == "Distancia" ? (openBlock(), createElementBlock("i", _hoisted_5)) : createCommentVNode("", true),
              createBaseVNode("b", null, toDisplayString(arg.event.title == "undefined" ? "Rutina " + dia(arg.event.startStr, 1) : arg.event.title), 1),
              _hoisted_6,
              createBaseVNode("span", _hoisted_7, toDisplayString(arg.event.extendedProps.description.slice(0, 25)), 1)
            ])
          ]),
          _: 1
        }, 8, ["options"]),
        isOpenOptions.value ? (openBlock(), createBlock(_component_ModalOpcionesEvento, {
          key: 0,
          "deportista-id": props.iddeportista,
          "is-open": isOpenOptions.value,
          opcionactual: "ver",
          "rutina-select": rutinaSelect.value,
          onClose: _cache[0] || (_cache[0] = ($event) => isOpenOptions.value = false),
          onCreateRutina: crearRutinaPersonalizada,
          onUpdateRutina: actualizarRutinaPersonalizada,
          onDeleteRutina: eliminarRutinaPersonalizada
        }, null, 8, ["deportista-id", "is-open", "rutina-select"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58e620d3"]]);
export { __unplugin_components_6 as _ };
