import { _ as _sfc_main$4 } from "./VModal.9b3adbf3.js";
import { a as administracionStore, L as LISTARCIUDADES, A as ACTUALIZAR_CIUDAD, _ as _sfc_main$3, b as LISTARTODOSLOSENTRENADORES, c as LISTARCIUDADESENTRENADOR, d as LISTARPAISES, C as CREAR_CIUDAD } from "./administracion.fa806835.js";
import { y as defineComponent, z as ref, a6 as storeToRefs, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, a1 as withDirectives, a7 as vModelText, D as unref, G as isRef, v as withModifiers, F as Fragment, m as createTextVNode, Y as _sfc_main$2, C as watch, p as resolveComponent, s as renderList, f as createBlock, t as toDisplayString } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { _ as _sfc_main$8 } from "./VInput.bb7a011d.js";
import { _ as _sfc_main$7 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./VOption.1954103c.js";
import "./config.165bca36.js";
import "./main.06195782.js";
import "./VLabel.c9d776c3.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_3$1 = ["onSubmit"];
const _hoisted_4$1 = { class: "field" };
const _hoisted_5$1 = { class: "control1" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("label", null, "Nombre a actualizar ", -1);
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("Confirm");
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
    ref(true);
    const { ciudadaModificar, ciudades, paises, ciudadesEntrenador } = storeToRefs(administracionStore());
    const notif = useNotyf();
    onMounted(async () => await LISTARCIUDADES(props.data.pais));
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    const handleSubmit = () => {
      console.log(props.data);
      notif.dismissAll();
      const ciudadesArray = ciudadesEntrenador.value;
      let flag = true;
      ciudadesArray.forEach((element) => {
        if (element == props.data.ciudad) {
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
      ciudadaModificar.value = "";
      centeredActionsOpen.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderSection = _sfc_main$3;
      const _component_VModal = _sfc_main$4;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          onClick: mostrarInfo,
          color: "warning",
          icon: "feather:eye"
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          actions: "center",
          size: "small",
          onClose: _cache[1] || (_cache[1] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VPlaceholderSection, {
              title: props.data.ciudad
            }, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_2$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"]),
            createBaseVNode("form", {
              class: "modal-form",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", _hoisted_5$1, [
                  _hoisted_6$1,
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    class: "input",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(ciudadaModificar) ? ciudadaModificar.value = $event : null),
                    placeholder: "Digite nombre",
                    id: "ciudadActualizar"
                  }, null, 512), [
                    [vModelText, unref(ciudadaModificar)]
                  ])
                ])
              ])
            ], 40, _hoisted_3$1)
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: handleSubmit
            }, {
              default: withCtx(() => [
                _hoisted_7$1
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
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nombre"),
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
    const { paises, ciudades, ciudadesEntrenador, ciudadaModificar } = storeToRefs(administracionStore());
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
      await LISTARCIUDADESENTRENADOR();
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
      const ciudadesArray = ciudadesEntrenador.value;
      let flag = true;
      ciudadesArray.forEach((element) => {
        if (element == ciudad2) {
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
      const _component_VOption = _sfc_main$5;
      const _component_VSelect = _sfc_main$6;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
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
                    createVNode(_component_CiudadesModal, {
                      data: { ciudad: ciudad2, pais: pais.value }
                    }, null, 8, ["data"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      rounded: true,
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
              }), 256))
            ])
          ])
        ])
      ], 64);
    };
  }
});
export { _sfc_main as default };
