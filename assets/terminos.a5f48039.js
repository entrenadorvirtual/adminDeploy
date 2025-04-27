import { _ as _sfc_main$6 } from "./VModal.1900abc7.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.cf7fe017.js";
import { V as _export_sfc, o as openBlock, f as createBlock, w as withCtx, j as createBaseVNode, y as defineComponent, z as ref, r as reactive, A as onMounted, e as computed, i as createElementBlock, q as createVNode, Y as withDirectives, a1 as vModelText, k as normalizeClass, D as unref, F as Fragment, s as renderList, t as toDisplayString, an as TransitionGroup, m as createTextVNode, O as _sfc_main$4, P as useHead } from "./index.7bbae714.js";
import { a as __unplugin_components_0 } from "./VControl.329fee09.js";
import { b as obtenerTerminos, c as crearTermino } from "./multimedia.61886265.js";
import { S as Swal } from "./sweetalert2.all.9e40661b.js";
import { _ as _sfc_main$3 } from "./VDropdown.dafd4ef1.js";
import { u as useViewWrapper } from "./viewWrapper.e8abb625.js";
import "./main.abb91ed8.js";
import "./config.cf3a8941.js";
import "./VIcon.02741722.js";
var _imports_0 = "/assets/search-6.efe8a683.svg";
var _imports_1 = "/assets/search-6-dark.dd04a767.svg";
const _sfc_main$2 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Editar"),
    /* @__PURE__ */ createBaseVNode("span", null, "Editar Termino")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-bubble"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Eliminar"),
    /* @__PURE__ */ createBaseVNode("span", null, "Eliminar Termino")
  ])
], -1);
function _sfc_render$1(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$3;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
    ]),
    _: 1
  });
}
var OpcionesTermino = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
var Termino_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Add Termino", -1);
const _hoisted_5 = { class: "tile-grid tile-grid-v1" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "tile-grid-item" };
const _hoisted_9 = { class: "tile-grid-item-inner" };
const _hoisted_10 = { class: "meta" };
const _hoisted_11 = { class: "dark-inverted" };
const _hoisted_12 = { class: "modal-form" };
const _hoisted_13 = { class: "field" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "Titulo", -1);
const _hoisted_15 = { class: "control" };
const _hoisted_16 = { class: "control" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Confirmar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const mostrarModalCargarTermino = ref(false);
    const terminos2 = ref([]);
    const termino = reactive({
      titulo: "",
      description: ""
    });
    onMounted(async () => {
      terminos2.value = await obtenerTerminos();
    });
    const filteredData = computed(() => {
      if (!filters.value) {
        return terminos2.value;
      } else {
        return terminos2.value.filter((item) => {
          return item.titulo.match(new RegExp(filters.value, "i")) || item.descripcion.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const guardarTermino = async () => {
      await crearTermino(termino);
      mostrarModalCargarTermino.value = false;
      terminos2.value = await obtenerTerminos();
      Swal.fire({
        icon: "info",
        text: "T\xE9rmino Guardado",
        showConfirmButton: false,
        timer: 2e3,
        timerProgressBar: true
      });
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VButton = _sfc_main$4;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_VModal = _sfc_main$6;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VControl, { icon: "feather:search" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                  class: "input custom-text-filter",
                  placeholder: "Buscar"
                }, null, 512), [
                  [vModelText, filters.value]
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_VButton, {
                color: "primary",
                raised: "",
                onClick: _cache[1] || (_cache[1] = ($event) => mostrarModalCargarTermino.value = true)
              }, {
                default: withCtx(() => [
                  _hoisted_3,
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_6,
                _hoisted_7
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "column is-4"
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("div", _hoisted_10, [
                          createBaseVNode("span", _hoisted_11, toDisplayString(item.titulo), 1),
                          createBaseVNode("span", null, toDisplayString(item.descripcion), 1)
                        ]),
                        createVNode(OpcionesTermino)
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(_component_VModal, {
          title: "Cargar contenido",
          open: mostrarModalCargarTermino.value,
          actions: "center",
          onClose: _cache[5] || (_cache[5] = ($event) => mostrarModalCargarTermino.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("div", _hoisted_15, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(termino).titulo = $event),
                    type: "text",
                    class: "input"
                  }, null, 512), [
                    [vModelText, unref(termino).titulo]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(termino).descripcion = $event),
                  class: "textarea",
                  rows: "4",
                  placeholder: "Comentarios"
                }, null, 512), [
                  [vModelText, unref(termino).descripcion]
                ])
              ])
            ])
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[4] || (_cache[4] = ($event) => guardarTermino())
            }, {
              default: withCtx(() => [
                _hoisted_17
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
const _sfc_main = {
  setup() {
    const pageTitle = ref("Gestionar Terminos");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: "Gestionar Terminos" });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Termino = _sfc_main$1;
  return openBlock(), createBlock(_component_Termino);
}
var terminos = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { terminos as default };
