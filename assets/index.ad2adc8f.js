import { _ as _sfc_main$3 } from "./VModal.beb5e0f8.js";
import { y as defineComponent, z as ref, at as storeToRefs, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, Y as withDirectives, a1 as vModelText, v as withModifiers, F as Fragment, m as createTextVNode, O as _sfc_main$2, s as renderList, f as createBlock, t as toDisplayString, D as unref } from "./index.b73b5b5a.js";
import { a as administracionStore, l as LISTARNACIONALIDADES, m as ACTUALIZAR_NACIONALIDAD, e as LISTARPAISES } from "./administracion.32bff706.js";
import { u as useNotyf } from "./useNotyf.e18afbdb.js";
import { _ as _sfc_main$7 } from "./VInput.d2257343.js";
import { a as __unplugin_components_2, b as _sfc_main$6 } from "./VControl.1b3fb414.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./VOption.8d45dac1.js";
import { u as useViewWrapper } from "./viewWrapper.ceba3981.js";
import "./config.9bf2e6c5.js";
import "./main.03abd8f7.js";
import "./notyf.es.f84e4201.js";
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
    const { nacionalidades } = storeToRefs(administracionStore());
    const notif = useNotyf();
    const nacionalidadModify = ref("");
    onMounted(() => {
      LISTARNACIONALIDADES();
    });
    const closeModal = () => {
      centeredActionsOpen.value = false;
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    const handleSubmit = async () => {
      notif.dismissAll();
      nacionalidades.value[props.data.index] = nacionalidadModify.value;
      try {
        await ACTUALIZAR_NACIONALIDAD(nacionalidades.value);
        nacionalidadModify.value = "";
      } catch (error) {
        console.log(error);
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
          title: "Nacionalidad",
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
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nacionalidadModify.value = $event),
                    type: "text",
                    class: "input",
                    placeholder: "Digite nombre"
                  }, null, 512), [
                    [vModelText, nacionalidadModify.value]
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Agregar");
const _hoisted_4 = { class: "table is-striped is-fullwidth" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Pais"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nacionalidad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Modificar nacionalidad"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Eliminar nacionalidad")
  ])
], -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administrar imagenes");
    const notif = useNotyf();
    const { nacionalidades, paises } = storeToRefs(administracionStore());
    const pais = ref("");
    const nacionalidad = ref("");
    onMounted(() => {
      LISTARNACIONALIDADES();
      LISTARPAISES();
    });
    const filtrarPaises = (paisSeleccionado) => {
      let encontrado = false;
      for (let propiedad in nacionalidades.value) {
        if (propiedad == paisSeleccionado) {
          encontrado = true;
        }
      }
      return encontrado;
    };
    const crearNacionalidad = () => {
      notif.dismissAll();
      if (pais.value !== "") {
        if (nacionalidad.value.length >= 3) {
          if (!filtrarPaises(pais.value)) {
            nacionalidades.value[pais.value] = nacionalidad.value;
            ACTUALIZAR_NACIONALIDAD(nacionalidades.value);
            nacionalidad.value = "";
            notif.success("Se agrego con exito la nueva nacionalidad");
          } else {
            notif.error("Ya existe el pais seleccionado con una nacionalidad");
          }
        } else {
          notif.error("La nacionalidad debe ser mayor a tres caracteres");
        }
      } else {
        notif.error("Debe seleccionar un pais");
      }
    };
    const eliminarNacionalidad = async (nacion) => {
      notif.dismissAll();
      if (nacionalidades.value.hasOwnProperty(nacion)) {
        try {
          delete nacionalidades.value[nacion];
          await ACTUALIZAR_NACIONALIDAD(nacionalidades.value);
          notif.success("La nacionalidad ha sido eliminada con \xE9xito");
        } catch (error) {
          console.log(error);
        }
      } else {
        notif.success("No se pudo eliminar la nacionalidad");
      }
    };
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$4;
      const _component_VSelect = _sfc_main$5;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$6;
      const _component_VInput = _sfc_main$7;
      const _component_VButton = _sfc_main$2;
      const _component_updateNacionalidadModal = _sfc_main$1;
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
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: nacionalidad.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => nacionalidad.value = $event),
                          type: "text",
                          placeholder: "Crear nacionalidad"
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
                  onClick: crearNacionalidad
                }, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("table", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(nacionalidades), (vars, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, toDisplayString(index), 1),
                createBaseVNode("td", null, toDisplayString(vars), 1),
                createBaseVNode("td", null, [
                  createVNode(_component_updateNacionalidadModal, {
                    data: { index }
                  }, null, 8, ["data"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_VButton, {
                    bold: true,
                    color: "danger",
                    onClick: ($event) => eliminarNacionalidad(index)
                  }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
