import { _ as _sfc_main$3 } from "./VModal.ba9a13a9.js";
import { y as defineComponent, z as ref, a7 as storeToRefs, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, a2 as withDirectives, a8 as vModelText, D as unref, G as isRef, v as withModifiers, F as Fragment, m as createTextVNode, Z as _sfc_main$2, C as watch, p as resolveComponent, s as renderList, f as createBlock, t as toDisplayString } from "./index.420249be.js";
import { a as administracionStore, L as LISTARCIUDADES, b as LISTARTODOSLOSUSUARIOS, A as ACTUALIZAR_CIUDAD, c as LISTARPAISES, C as CREAR_CIUDAD } from "./administracion.cf53d8d9.js";
import { u as useNotyf } from "./useNotyf.2a8b6e84.js";
import { _ as _sfc_main$7 } from "./VInput.8bd6418e.js";
import { _ as _sfc_main$6 } from "./VField.20e6a090.js";
import { _ as __unplugin_components_2 } from "./VControl.fa82c9c6.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./VOption.54ccc991.js";
import "./config.3d78ff49.js";
import "./main.981fd68f.js";
import "./VLabel.82cb8353.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_2$1 = ["onSubmit"];
const _hoisted_3$1 = { class: "field" };
const _hoisted_4$1 = { class: "control1" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("label", null, "Nombre a actualizar ", -1);
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    const { ciudadaModificar, ciudades, usuarios } = storeToRefs(administracionStore());
    const notif = useNotyf();
    onMounted(async () => {
      await LISTARCIUDADES(props.data.pais);
      await LISTARTODOSLOSUSUARIOS();
    });
    const closeModal = () => {
      centeredActionsOpen.value = false;
      ciudadaModificar.value = "";
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    const handleSubmit = () => {
      notif.dismissAll();
      const ciudadesArray = usuarios.value;
      let flag = true;
      ciudadesArray.forEach((element) => {
        if (element.ciudad == props.data.ciudad && element.pais == props.data.pais) {
          notif.error("la ciudad no se puede actualizar debido a una dependencia con los usuarios");
          flag = false;
        }
      });
      if (flag) {
        const index = ciudades.value.indexOf(props.data.ciudad);
        if (index !== -1) {
          ciudades.value.splice(index, 1, ciudadaModificar.value);
          ACTUALIZAR_CIUDAD(props.data.pais, ciudades.value);
          notif.success("la ciudad se actualizo satisfactoriamente");
        } else {
          notif.warning("la ciudad no se pudo actualizar");
        }
      }
      closeModal();
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VModal = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          color: "warning",
          bold: true,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Ciudad ",
          noscroll: "",
          actions: "center",
          size: "small",
          centered: true,
          "hider-overlay": "true",
          onClose: _cache[1] || (_cache[1] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("form", {
              class: "modal-form",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  _hoisted_5$1,
                  withDirectives(createBaseVNode("input", {
                    id: "ciudadActualizar",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(ciudadaModificar) ? ciudadaModificar.value = $event : null),
                    type: "text",
                    class: "input",
                    placeholder: "Digite nombre"
                  }, null, 512), [
                    [vModelText, unref(ciudadaModificar)]
                  ])
                ])
              ])
            ], 40, _hoisted_2$1)
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: handleSubmit
            }, {
              default: withCtx(() => [
                _hoisted_6$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "table is-striped is-fullwidth" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Elija un pais ");
const _hoisted_3 = { class: "table is-striped is-fullwidth" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Agregar");
const _hoisted_5 = { class: "table is-striped is-fullwidth" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Pais"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Ciudad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Editar Ciuadad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Eliminar Ciudad")
  ])
], -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notif = useNotyf();
    const ciudad = ref("");
    const pais = ref("");
    const { paises, ciudades, usuarios } = storeToRefs(administracionStore());
    onMounted(async () => {
      await LISTARTODOSLOSUSUARIOS();
    });
    const crearCiudad = () => {
      notif.dismissAll();
      const index = ciudades.value.indexOf(ciudad.value);
      if (index !== -1) {
        notif.error("Ya se encuentra una ciudad registrada con ese nombre");
      } else {
        ciudades.value.push(ciudad.value);
        CREAR_CIUDAD(pais.value, ciudades.value);
        notif.success("La ciudad se creo correctamente");
      }
      ciudad.value = "";
    };
    const eliminarCiudad = (ciudad2) => {
      notif.dismissAll();
      let flag = true;
      usuarios.value.forEach((elemento) => {
        if (elemento.pais == pais.value && elemento.ciudad == ciudad2) {
          notif.error("la ciudad no se puede eliminar");
          flag = false;
        }
      });
      if (flag) {
        const index = ciudades.value.indexOf(ciudad2);
        if (index !== -1) {
          ciudades.value.splice(index, 1);
          ACTUALIZAR_CIUDAD(pais.value, ciudades.value);
          notif.success("la ciudad se elimino satisfactoriamente");
        } else {
          notif.warning("la ciudad no se pudo eliminar");
        }
      }
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
      const _component_VOption = _sfc_main$4;
      const _component_VSelect = _sfc_main$5;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$6;
      const _component_VInput = _sfc_main$7;
      const _component_VButton = _sfc_main$2;
      const _component_CiudadesModal = _sfc_main$1;
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
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paises), (element, index) => {
                              return openBlock(), createBlock(_component_VOption, { key: index }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(element), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
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
                          modelValue: ciudad.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ciudad.value = $event),
                          type: "text",
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
                  color: "primary",
                  onClick: crearCiudad
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
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ciudades), (ciudad2, index) => {
                return openBlock(), createElementBlock("tr", { key: index }, [
                  createBaseVNode("td", null, toDisplayString(pais.value), 1),
                  createBaseVNode("td", null, toDisplayString(ciudad2), 1),
                  createBaseVNode("td", null, [
                    createVNode(_component_CiudadesModal, {
                      data: { ciudad: ciudad2, pais: pais.value }
                    }, null, 8, ["data"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      bold: true,
                      color: "danger",
                      onClick: ($event) => eliminarCiudad(ciudad2)
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ], 64);
    };
  }
});
export { _sfc_main as default };
