import { y as defineComponent, o as openBlock, i as createElementBlock, k as normalizeClass, j as createBaseVNode, l as createCommentVNode, g as renderSlot, z as ref, A as onMounted, Q as withKeys, v as withModifiers, q as createVNode, w as withCtx, V as _export_sfc, as as storeToRefs, P as useHead, a9 as watchEffect, e as computed, f as createBlock, Y as withDirectives, a1 as vModelText, D as unref, F as Fragment, s as renderList, t as toDisplayString, ae as pushScopeId, af as popScopeId, m as createTextVNode, O as _sfc_main$7 } from "./index.7bbae714.js";
import { _ as _sfc_main$4 } from "./VModal.1900abc7.js";
import { b as buscarImagen, e as extraerInfoImagenes, c as eliminarImagen } from "./managePictures.b97417d9.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.cf7fe017.js";
import { _ as _sfc_main$5 } from "./VField.74eec4bb.js";
import { a as __unplugin_components_0 } from "./VControl.329fee09.js";
import { u as useViewWrapper } from "./viewWrapper.e8abb625.js";
import { a as administracionStore } from "./administracion.a918d6ea.js";
import "./config.cf3a8941.js";
import "./main.abb91ed8.js";
import "./general.436cc3e4.js";
import "./useNotyf.d0ecec7c.js";
import "./useThemeColors.821f44b4.js";
var VLoader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: void 0 },
    card: { default: void 0 },
    active: { type: Boolean },
    grey: { type: Boolean },
    translucent: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["has-loader", [props.active && "has-loader-active"]])
      }, [
        props.active ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["v-loader-wrapper is-active", [
            __props.grey && "is-grey",
            __props.translucent && "is-translucent",
            __props.card === "regular" && "s-card",
            __props.card === "smooth" && "r-card",
            __props.card === "rounded" && "l-card"
          ]])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["loader is-loading", [props.size && `is-${props.size}`]])
          }, null, 2)
        ], 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$2 = ["onKeydown"];
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "field image-container has-text-centered" };
const _hoisted_4$2 = ["src"];
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
    const imagenUrl = ref("");
    onMounted(async () => {
      const url = props.data.urlImagen;
      buscarImagen(url).then((url2) => {
        imagenUrl.value = url2 != null ? url2 : "";
      });
    });
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VModal = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          onClick: mostrarInfo,
          onKeydown: [
            withKeys(mostrarInfo, ["enter"]),
            withKeys(withModifiers(mostrarInfo, ["prevent"]), ["space"])
          ]
        }, [
          createBaseVNode("img", {
            src: imagenUrl.value,
            style: { "width": "90%" },
            alt: ""
          }, null, 8, _hoisted_2$2)
        ], 40, _hoisted_1$2),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: props.data.urlImagen,
          noscroll: "",
          actions: "center",
          size: "large",
          onClose: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("img", {
                src: imagenUrl.value,
                style: { "width": "100%", "max-width": "60%", "height": "auto", "margin": "0 auto" },
                alt: "Imagen"
              }, null, 8, _hoisted_4$2)
            ])
          ]),
          action: withCtx(() => []),
          _: 1
        }, 8, ["open", "title"])
      ]);
    };
  }
});
const _hoisted_1$1 = ["onKeydown"];
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "field image-container has-text-centered" };
const _hoisted_4$1 = ["src"];
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
    const imagenUrl = ref("");
    onMounted(async () => {
      const url = props.data.urlImagen;
      if (url) {
        buscarImagen(url != null ? url : "").then((url2) => {
          imagenUrl.value = url2 != null ? url2 : "";
        });
      }
    });
    const mostrarInfo = async () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VModal = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          onClick: mostrarInfo,
          onKeydown: withKeys(mostrarInfo, ["enter"])
        }, [
          createBaseVNode("img", {
            src: imagenUrl.value,
            alt: "",
            style: { "width": "40%" }
          }, null, 8, _hoisted_2$1)
        ], 40, _hoisted_1$1),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: props.data.urlImagen,
          noscroll: "",
          actions: "center",
          size: "large",
          onClose: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("img", {
                src: imagenUrl.value,
                style: { "width": "100%", "max-width": "70%", "height": "auto", "margin": "0 auto" },
                alt: "Imagen"
              }, null, 8, _hoisted_4$1)
            ])
          ]),
          action: withCtx(() => []),
          _: 1
        }, 8, ["open", "title"])
      ]);
    };
  }
});
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5b2b1bef"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = { style: { "display": "flex" } };
const _hoisted_3 = ["data"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      style: { "text-align": "center" }
    }, "Nombre"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      style: { "text-align": "center" }
    }, "Vista previa Pc"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      style: { "text-align": "center" }
    }, "Vista previa Movil"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      style: { "text-align": "center" }
    }, "Eliminar Imagen")
  ])
], -1));
const _hoisted_5 = { style: { "text-align": "center" } };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Eliminar");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoaderActive = ref(true);
    const { imagenes } = storeToRefs(administracionStore());
    const viewWrapper = useViewWrapper();
    const filters = ref("");
    viewWrapper.setPageTitle("Administraci\xF3n de imagenes");
    useHead({
      title: "Visualizar imagenes"
    });
    watchEffect(async () => {
      await extraerInfoImagenes();
      isLoaderActive.value = false;
    });
    const filteredData = computed(() => {
      if (!filters.value) {
        return imagenes.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return imagenes.value.filter((item) => {
          return item.nombre.match(filterRe);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_previewImagenPc = _sfc_main$1;
      const _component_previewImagenMovil = _sfc_main$2;
      const _component_VButton = _sfc_main$7;
      const _component_VLoader = _sfc_main$3;
      return openBlock(), createBlock(_component_VLoader, {
        size: "large",
        active: isLoaderActive.value
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
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
            }),
            !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
              key: 0,
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_2, [
            unref(filteredData).length ? (openBlock(), createElementBlock("table", {
              key: 0,
              data: unref(filteredData),
              compact: "",
              class: "table is-striped is-fullwidth centered-columns"
            }, [
              _hoisted_4,
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (img) => {
                  return openBlock(), createElementBlock("tr", { key: img }, [
                    createBaseVNode("td", _hoisted_5, toDisplayString(img.nombre), 1),
                    createBaseVNode("td", null, [
                      createVNode(_component_previewImagenPc, {
                        data: { urlImagen: img.url }
                      }, null, 8, ["data"])
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_component_previewImagenMovil, {
                        data: { urlImagen: img.urlmovil }
                      }, null, 8, ["data"])
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_component_VButton, {
                        color: "danger",
                        onClick: ($event) => unref(eliminarImagen)(img.nombre)
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
            ], 8, _hoisted_3)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["active"]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b2b1bef"]]);
export { index as default };
