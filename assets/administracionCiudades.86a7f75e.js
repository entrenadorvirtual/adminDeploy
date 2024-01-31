import { _ as _sfc_main$4 } from "./VModal.d925f0b3.js";
import { y as defineComponent, z as ref, at as storeToRefs, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, Y as withDirectives, a1 as vModelText, D as unref, G as isRef, v as withModifiers, F as Fragment, m as createTextVNode, O as _sfc_main$3, e as computed, C as watch, s as renderList, f as createBlock, t as toDisplayString, l as createCommentVNode, P as useHead } from "./index.aedac316.js";
import { a as administracionStore, b as LISTARCIUDADES, c as LISTARTODOSLOSUSUARIOS, d as ACTUALIZAR_CIUDAD, e as LISTARPAISES, C as CREAR_CIUDAD } from "./administracion.01d49e38.js";
import { u as useNotyf } from "./useNotyf.cd06cfe3.js";
import { _ as _sfc_main$8 } from "./VInput.7ffb3812.js";
import { a as __unplugin_components_2, b as _sfc_main$7 } from "./VControl.bc2cde1a.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./VOption.b597c93e.js";
import { u as useViewWrapper } from "./viewWrapper.e58f1ab4.js";
import "./config.9bf2e6c5.js";
import "./main.03abd8f7.js";
import "./notyf.es.f84e4201.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_2$1 = ["onSubmit"];
const _hoisted_3$1 = { class: "field" };
const _hoisted_4$1 = { class: "control1" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("label", null, "Nombre a actualizar ", -1);
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
          notif.error(
            "la ciudad no se puede actualizar debido a una dependencia con los usuarios"
          );
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
      const _component_VButton = _sfc_main$3;
      const _component_VModal = _sfc_main$4;
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
          title: "Ciudad",
          noscroll: "",
          actions: "center",
          size: "small",
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("td", null, [
  /* @__PURE__ */ createBaseVNode("h1", null, "Elija un pais")
], -1);
const _hoisted_3 = { class: "table is-striped is-fullwidth" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Agregar");
const _hoisted_5 = ["data"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Pais"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Ciudad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Editar Ciuadad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Eliminar Ciudad")
  ])
], -1);
const _hoisted_7 = { compact: "" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Eliminar ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notif = useNotyf();
    const ciudad = ref("");
    const pais = ref("");
    const filters = ref("");
    const { paises, ciudades, usuarios } = storeToRefs(administracionStore());
    onMounted(async () => {
      await LISTARTODOSLOSUSUARIOS();
    });
    const filteredData = computed(() => {
      if (!filters.value) {
        return ciudades.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return ciudades.value.filter((item) => {
          return item.match(filterRe);
        });
      }
    });
    const crearCiudad = () => {
      notif.dismissAll();
      const index = ciudades.value.indexOf(ciudad.value);
      if (pais.value === "") {
        notif.error("Selecciona un pais");
      } else {
        if (ciudad.value.length >= 3) {
          if (index !== -1) {
            notif.error("Ya se encuentra una ciudad registrada con ese nombre");
          } else {
            ciudades.value.push(ciudad.value);
            ciudades.value.sort();
            CREAR_CIUDAD(pais.value, ciudades.value);
            notif.success("La ciudad se creo correctamente");
            ciudad.value = "";
          }
        } else {
          notif.error("La ciudad debe tener al menos tres caracteres");
        }
      }
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
      pais.value = "Colombia";
    });
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$5;
      const _component_VSelect = _sfc_main$6;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
      const _component_VButton = _sfc_main$3;
      const _component_modalCiudades = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("table", _hoisted_1, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              _hoisted_2,
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
                  style: { "max-width": "max-content" },
                  onClick: crearCiudad
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:search" }, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.value = $event),
                          class: "input custom-text-filter",
                          placeholder: "Buscar..."
                        }, null, 512), [
                          [vModelText, filters.value]
                        ])
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
        createBaseVNode("div", null, [
          pais.value ? (openBlock(), createElementBlock("table", {
            key: 0,
            data: unref(filteredData),
            compact: "",
            class: "table is-striped is-fullwidth"
          }, [
            _hoisted_6,
            createBaseVNode("tbody", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (city, index) => {
                return openBlock(), createElementBlock("tr", { key: index }, [
                  createBaseVNode("td", null, toDisplayString(pais.value), 1),
                  createBaseVNode("td", null, toDisplayString(city), 1),
                  createBaseVNode("td", null, [
                    createVNode(_component_modalCiudades, {
                      data: { city, pais: pais.value }
                    }, null, 8, ["data"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      bold: true,
                      color: "danger",
                      onClick: ($event) => eliminarCiudad(city)
                    }, {
                      default: withCtx(() => [
                        _hoisted_8
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ], 8, _hoisted_5)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administracion de ciudades");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_adminCiudades = _sfc_main$1;
      return openBlock(), createBlock(_component_adminCiudades);
    };
  }
});
export { _sfc_main as default };
