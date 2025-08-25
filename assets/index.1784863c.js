import { _ as _sfc_main$3 } from "./VModal.5adbd22f.js";
import { x as defineComponent, y as ref, ar as storeToRefs, z as onMounted, o as openBlock, g as createElementBlock, p as createVNode, w as withCtx, i as createBaseVNode, Z as withDirectives, a2 as vModelText, F as Fragment, l as createTextVNode, N as _sfc_main$2, O as useHead, q as renderList, t as toDisplayString, k as createCommentVNode, C as unref } from "./index.7277f539.js";
import { a as administracionStore, e as LISTARDISTANCIAS, f as ACTUALIZAR_DISTANCIA } from "./administracion.eab5d817.js";
import { u as useNotyf } from "./useNotyf.04745937.js";
import { _ as _sfc_main$5 } from "./VField.04329715.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { _ as _sfc_main$4 } from "./VInput.1aae7c90.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./config.28ac5e58.js";
import "./main.a2946418.js";
import "./useThemeColors.2a03c1d8.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_2$1 = { class: "modal-form" };
const _hoisted_3$1 = { class: "field" };
const _hoisted_4$1 = { class: "control1" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("label", null, "Nuevo valor", -1);
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Confirmar");
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
    const { distancias } = storeToRefs(administracionStore());
    const notif = useNotyf();
    const claveAModificar = ref("");
    const nuevoValor = ref("");
    onMounted(async () => {
      await LISTARDISTANCIAS();
    });
    const closeModal = () => {
      centeredActionsOpen.value = false;
      claveAModificar.value = "";
      nuevoValor.value = "";
    };
    const mostrarInfo = () => {
      claveAModificar.value = props.data.index;
      centeredActionsOpen.value = true;
    };
    const handleSubmit = async () => {
      notif.dismissAll();
      if (nuevoValor.value) {
        const nuevoValorFloat = parseFloat(nuevoValor.value);
        if (!isNaN(nuevoValorFloat)) {
          distancias.value[claveAModificar.value] = nuevoValorFloat;
          await ACTUALIZAR_DISTANCIA(distancias.value);
          notif.success("Distancia actualizada con \xE9xito");
        } else {
          notif.error("El valor no es un n\xFAmero v\xE1lido");
        }
      } else {
        notif.error("Los campos est\xE1n vac\xEDos");
      }
      closeModal();
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VModal = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          color: "primary",
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
          title: `Se modificar\xE1: ${props.data.index}`,
          noscroll: "",
          actions: "center",
          size: "small",
          onClose: _cache[1] || (_cache[1] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("form", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  _hoisted_5$1,
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nuevoValor.value = $event),
                    type: "text",
                    class: "input",
                    placeholder: "Digite el nuevo valor"
                  }, null, 512), [
                    [vModelText, nuevoValor.value]
                  ])
                ])
              ])
            ])
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
        }, 8, ["open", "title"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "table is-striped is-fullwidth" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Agregar");
const _hoisted_3 = { class: "table is-striped is-fullwidth" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nombre"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Distancia en Kms"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Modificar distancia"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Eliminar distancia")
  ])
], -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notif = useNotyf();
    const { distancias } = storeToRefs(administracionStore());
    const distancia = ref("");
    const valorDistancia = ref("");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administrar distancias");
    useHead({
      title: "Perfil"
    });
    onMounted(() => {
      LISTARDISTANCIAS();
    });
    const crearDistancia = () => {
      notif.dismissAll();
      const nuevaClave = distancia.value;
      const nuevoValor = parseFloat(valorDistancia.value);
      if (nuevaClave !== "" && !isNaN(nuevoValor)) {
        if (distancias.value.hasOwnProperty(nuevaClave)) {
          notif.error("La clave ya existe. Por favor, ingrese una clave diferente.");
        } else {
          distancias.value[nuevaClave] = nuevoValor;
          ACTUALIZAR_DISTANCIA(distancias.value);
          distancia.value = "";
          valorDistancia.value = "";
          notif.success("Se agrego con exito la nueva distancia");
        }
      } else if (nuevaClave === "" || isNaN(nuevoValor)) {
        notif.error("Los campos estan vacios o el valor no es un n\xFAmero flotante");
      }
    };
    const eliminar = async (distancia2) => {
      if (distancias.value.hasOwnProperty(distancia2)) {
        delete distancias.value[distancia2];
        try {
          await ACTUALIZAR_DISTANCIA(distancias.value);
          notif.success("La distancia ha sido eliminada con \xE9xito");
        } catch (error) {
          notif.error("Error al eliminar la distancia");
        }
      } else {
        notif.error("La clave no existe en el objeto");
      }
    };
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$5;
      const _component_VButton = _sfc_main$2;
      const _component_distanciasModal = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("table", _hoisted_1, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: distancia.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => distancia.value = $event),
                          type: "text",
                          placeholder: "Nombre distancia"
                        }, null, 8, ["modelValue"])
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
                          modelValue: valorDistancia.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valorDistancia.value = $event),
                          type: "number",
                          placeholder: "Distancia en Kms"
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
                  onClick: crearDistancia
                }, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("table", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(distancias), (vars, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, toDisplayString(index), 1),
                createBaseVNode("td", null, toDisplayString(vars), 1),
                index !== "Otro" ? (openBlock(), createElementBlock("td", _hoisted_5, [
                  createVNode(_component_distanciasModal, {
                    data: { index }
                  }, null, 8, ["data"])
                ])) : createCommentVNode("", true),
                index !== "Otro" ? (openBlock(), createElementBlock("td", _hoisted_6, [
                  createVNode(_component_VButton, {
                    bold: true,
                    color: "danger",
                    onClick: ($event) => eliminar(index)
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
