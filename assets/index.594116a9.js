import { y as defineComponent, z as ref, a6 as storeToRefs, C as watch, A as onMounted, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, F as Fragment, s as renderList, f as createBlock, m as createTextVNode, t as toDisplayString, D as unref, Y as _sfc_main$5 } from "./index.9a2a8c84.js";
import { _ as _sfc_main$4 } from "./VInput.22932c5c.js";
import { _ as _sfc_main$3 } from "./VField.227f0b66.js";
import { _ as __unplugin_components_2 } from "./VControl.e65ff893.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./VOption.01e07734.js";
import { a as administracionStore, L as LISTARCIUDADES, b as LISTARPAISES, C as CREAR_CIUDAD, E as ELIMINAR_CIUDAD } from "./administracion.93909c69.js";
import "./VLabel.66fea259.js";
import "./config.165bca36.js";
import "./main.06195782.js";
const _hoisted_1 = { class: "table is-striped is-fullwidth" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Elija un pais ");
const _hoisted_3 = { class: "table is-striped is-fullwidth" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Agregar");
const _hoisted_5 = { class: "table is-striped is-fullwidth" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nombre"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Editar Ciuadad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Eliminar Ciudad")
  ])
], -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Editar");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const ciudad = ref("");
    const pais = ref("");
    const { paises, ciudades } = storeToRefs(administracionStore());
    const crearCiudad = () => {
      const index = ciudades.value.indexOf(ciudad.value);
      if (index !== -1) {
        console.log("La ciudad que se va a agregar ya se encuentra");
      } else {
        ciudades.value.push(ciudad.value);
        CREAR_CIUDAD(pais.value, ciudades.value);
        ciudad.value = "";
      }
    };
    const eliminarCiudad = (ciudad2) => {
      const index = ciudades.value.indexOf(ciudad2);
      if (index !== -1) {
        ciudades.value.splice(index, 1);
      }
      ELIMINAR_CIUDAD(pais.value, ciudades.value);
    };
    watch(pais, () => {
      paisSeleccionado();
    });
    const paisSeleccionado = () => {
      LISTARCIUDADES(pais.value);
    };
    onMounted(() => {
      LISTARPAISES();
    });
    return (_ctx, _cache) => {
      const _component_H1 = resolveComponent("H1");
      const _component_VOption = _sfc_main$1;
      const _component_VSelect = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("table", _hoisted_1, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, [
                createVNode(_component_H1, null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_VField, { class: "tabla" }, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, {
                      class: "has-icons-left",
                      icon: "feather:globe"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VSelect, {
                          modelValue: pais.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pais.value = $event)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paises), (element) => {
                              return openBlock(), createBlock(_component_VOption, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(element), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("table", _hoisted_3, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          modelValue: ciudad.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ciudad.value = $event),
                          placeholder: "Crear ciudad"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_VButton, {
                  onClick: crearCiudad,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", null, [
          createBaseVNode("table", _hoisted_5, [
            _hoisted_6,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ciudades), (ciudad2) => {
                return openBlock(), createElementBlock("tr", null, [
                  createBaseVNode("td", null, toDisplayString(ciudad2), 1),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      rounded: true,
                      bold: true,
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      rounded: true,
                      bold: true,
                      color: "danger",
                      onClick: ($event) => eliminarCiudad(ciudad2)
                    }, {
                      default: withCtx(() => [
                        _hoisted_8
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 256))
            ])
          ])
        ])
      ], 64);
    };
  }
});
export { _sfc_main as default };
