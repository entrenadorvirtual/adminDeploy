import { _ as _sfc_main$1, a as __unplugin_components_2, b as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$2 } from "./VInput.5920a8ca.js";
import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, m as createTextVNode } from "./index.a7fc5dec.js";
var Personales_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Personal")
    ])
  ])
], -1);
const _hoisted_3 = { class: "fieldset" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, null, -1);
const _hoisted_5 = { class: "columns is-multiline" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Nombres ");
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Apellidos ");
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Documento de identificaci\xF3n ");
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Fecha de nacimiento ");
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Usuario ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    nombres: String,
    apellidos: String,
    identificacion: String,
    fecha_nacimiento: String,
    nameUser: String,
    ciudadActual: String,
    paisActual: String
  },
  setup(__props) {
    const props = __props;
    const deportista = reactive({
      nombres: "",
      apellidos: "",
      identificacion: "",
      fecha_nacimiento: "",
      nameUser: "",
      ciudadActual: "",
      paisActual: ""
    });
    onMounted(() => {
      deportista.nombres = props.nombres;
      deportista.apellidos = props.apellidos;
      deportista.identificacion = props.identificacion;
      deportista.ciudadActual = props.ciudadActual;
      deportista.paisActual = props.paisActual;
      deportista.nameUser = props.nameUser;
      const fechaISO = new Date(props.fecha_nacimiento);
      const anio = fechaISO.getFullYear();
      const mes = (fechaISO.getMonth() + 1).toString().padStart(2, "0");
      const dia = fechaISO.getDate().toString().padStart(2, "0");
      deportista.fecha_nacimiento = `${anio}-${mes}-${dia}`;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("form", {
          action: "signup-form",
          class: "p-6",
          onSubmit: _cache[0] || (_cache[0] = (...args) => _ctx.onSave && _ctx.onSave(...args))
        }, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VField, { id: "nombres" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          value: unref(deportista).nombres,
                          disabled: "",
                          type: "text"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_VField, { id: "apellidos" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          value: unref(deportista).apellidos,
                          type: "text",
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:credit-card" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).identificacion,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          disabled: "",
                          type: "text",
                          value: unref(deportista).fecha_nacimiento
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:flag" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).paisActual,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_17
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:map" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).ciudadActual,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_19
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).nameUser,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 32)
      ]);
    };
  }
});
export { _sfc_main as _ };
