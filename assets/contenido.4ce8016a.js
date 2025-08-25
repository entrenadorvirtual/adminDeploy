import { _ as _sfc_main$b } from "./VModal.5adbd22f.js";
import { u as useVFieldContext, _ as _sfc_main$4, a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { x as defineComponent, r as reactive, y as ref, B as watch, o as openBlock, e as createBlock, w as withCtx, Z as withDirectives, $ as vModelRadio, i as createBaseVNode, v as mergeProps, C as unref, f as renderSlot, l as createTextVNode, t as toDisplayString, a4 as normalizeProps, a5 as guardReactiveProps, j as normalizeClass, z as onMounted, g as createElementBlock, p as createVNode, b as computed, m as resolveComponent, a2 as vModelText, k as createCommentVNode, F as Fragment, q as renderList, am as TransitionGroup, N as _sfc_main$7, U as _export_sfc, O as useHead } from "./index.7277f539.js";
import { _ as _sfc_main$5 } from "./VAvatar.ea1017a0.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR } from "./superentrenador.0814834f.js";
import { _ as _sfc_main$a } from "./VIcon.3ee9f83c.js";
import { _ as _sfc_main$9 } from "./VPlaceholderPage.370af12f.js";
import { _ as _sfc_main$8 } from "./Paginador.ff77bb04.js";
import { _ as _sfc_main$6 } from "./VField.04329715.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { o as obtenerTodosLosVideos, a as actualizarEstadoVideo } from "./multimedia.103dcc7b.js";
import { c as convertirTimestamp } from "./fechas.5f05a473.js";
import { S as Swal } from "./sweetalert2.all.c4d0cd5a.js";
import { G as it } from "./config.28ac5e58.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./main.a2946418.js";
import "./deportista.7005e8cc.js";
import "./general.651d3f13.js";
import "./VIconButton.73697e59.js";
import "./_commonjsHelpers.4e997714.js";
var VRadio_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = ["id", "value", "name"];
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    id: { default: void 0 },
    value: null,
    modelValue: { default: void 0 },
    name: { default: void 0 },
    label: { default: void 0 },
    color: { default: void 0 },
    square: { type: Boolean },
    solid: { type: Boolean },
    paddingless: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(
      useVFieldContext({
        id: props.id,
        inherit: false
      })
    );
    const value = ref((_b = (_a = vFieldContext == null ? void 0 : vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
    watch(value, () => {
      emit("update:modelValue", value.value);
    });
    watch(
      () => props.modelValue,
      () => {
        value.value = props.modelValue;
      }
    );
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$4;
      return openBlock(), createBlock(_component_VLabel, {
        raw: "",
        class: normalizeClass(["radio", [
          props.solid ? "is-solid" : "is-outlined",
          props.square && "is-square",
          props.color && `is-${props.color}`,
          props.paddingless && "is-paddingless"
        ]])
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("input", mergeProps({
            id: unref(vFieldContext).id,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            type: "radio",
            value: props.value,
            name: props.name
          }, _ctx.$attrs), null, 16, _hoisted_1$2), [
            [vModelRadio, value.value]
          ]),
          _hoisted_2$1,
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))), () => [
            createTextVNode(toDisplayString(props.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1$1 = { style: { "display": "flex", "align-items": "center", "gap": "5px" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const nombre = ref("");
    const foto = ref("");
    onMounted(async () => {
      const data = await GET_DATOS_GENERAL_ENTRENADOR(props.id);
      nombre.value = data.nombres + " " + data.apellidos;
      foto.value = data.foto_url;
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_VAvatar, {
          picture: foto.value,
          size: "small"
        }, null, 8, ["picture"]),
        createBaseVNode("p", null, toDisplayString(nombre.value), 1)
      ]);
    };
  }
});
var Videos_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Cargar contenido", -1);
const _hoisted_5 = { key: 1 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = { class: "card-grid card-grid-v4" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_10 = {
  href: "#",
  class: "card-grid-item"
};
const _hoisted_11 = { class: "video-container" };
const _hoisted_12 = ["src"];
const _hoisted_13 = ["src"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("track", {
  kind: "captions",
  srclang: "es",
  label: "Espa\xF1ol",
  default: ""
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Tu navegador no soporta el elemento de video. ");
const _hoisted_16 = [
  _hoisted_14,
  _hoisted_15
];
const _hoisted_17 = { class: "card-grid-item-content" };
const _hoisted_18 = { class: "dark-inverted" };
const _hoisted_19 = {
  key: 0,
  style: { "margin-bottom": "0" },
  class: "card-grid-item-content"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Comentarios:", -1);
const _hoisted_21 = { class: "dark-inverted" };
const _hoisted_22 = {
  class: "card-grid-item-content",
  style: { "display": "flex", "gap": "5px" }
};
const _hoisted_23 = {
  key: 0,
  class: "dark-inverted"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" Estado: ");
const _hoisted_25 = {
  class: "aprobado",
  style: { "display": "inline-block" }
};
const _hoisted_26 = {
  key: 1,
  class: "dark-inverted"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Estado: ");
const _hoisted_28 = {
  class: "pendiente",
  style: { "display": "inline-block" }
};
const _hoisted_29 = {
  key: 2,
  class: "dark-inverted"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Estado: ");
const _hoisted_31 = {
  class: "rechazado",
  style: { "display": "inline-block" }
};
const _hoisted_32 = { class: "card-grid-item-footer" };
const _hoisted_33 = {
  class: "meta",
  style: { "display": "flex", "justify-content": "space-between", "width": "100%", "align-items": "center" }
};
const _hoisted_34 = { class: "dark-inverted" };
const _hoisted_35 = {
  key: 0,
  class: "field"
};
const _hoisted_36 = { class: "control" };
const _hoisted_37 = /* @__PURE__ */ createTextVNode("Confirmar");
const _hoisted_38 = { class: "modal-form" };
const _hoisted_39 = { class: "field" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("label", null, "Titulo", -1);
const _hoisted_41 = { class: "control" };
const _hoisted_42 = { class: "field" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("label", null, "Link", -1);
const _hoisted_44 = { class: "control" };
const _hoisted_45 = /* @__PURE__ */ createTextVNode("Confirmar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const valueSingle = ref("Todos");
    const optionsSingle = ["Todos", "Aprobado", "Pendiente", "Rechazado"];
    const filtroPropietarioContenido = ["My virtual Trainer", "Entrenadores"];
    const estado = ref("");
    const comentarios = ref("");
    const idEntrenador = ref("");
    const idVideo = ref("");
    const mostrarModal = ref(false);
    const mostrarModalCargarVideos = ref(false);
    const video = reactive({
      titulo: "",
      link: "",
      fecha: it.now()
    });
    const todosLosVideos = ref([]);
    const videosFiltrados = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 6;
    const paginatedVideos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredData.value.slice(start, start + itemsPerPage);
    });
    const getPaginatedInfo = (page) => {
      const totalPages = Math.ceil(filteredData.value.length / itemsPerPage);
      return `P\xE1gina ${page} de ${totalPages} disponibles`;
    };
    onMounted(async () => {
      todosLosVideos.value = await obtenerTodosLosVideos();
      console.log("videos: ", todosLosVideos.value);
      videosFiltrados.value = todosLosVideos.value;
    });
    const filteredData = computed(() => {
      let resultado = todosLosVideos.value;
      if (valueSingle.value !== "Todos") {
        resultado = resultado.filter((video2) => video2.estado === valueSingle.value);
      }
      if (filters.value) {
        resultado = resultado.filter((video2) => {
          return video2.titulo.toLowerCase().includes(filters.value.toLowerCase());
        });
      }
      return resultado;
    });
    const cambiarEstado = async () => {
      await actualizarEstadoVideo(
        idEntrenador.value,
        idVideo.value,
        estado.value,
        comentarios.value
      );
      mostrarModal.value = false;
      Swal.fire({
        icon: "info",
        text: "Estado cambiado con \xE9xito",
        showConfirmButton: false,
        timer: 2e3,
        timerProgressBar: true
      });
      todosLosVideos.value = await obtenerTodosLosVideos();
    };
    const abrirOpcionesVideo = (video2) => {
      mostrarModal.value = true;
      estado.value = video2.estado;
      idEntrenador.value = video2.entrenadorId;
      idVideo.value = video2.id;
      comentarios.value = video2.comentarios;
    };
    const guardarContenido = async () => {
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$6;
      const _component_VButton = _sfc_main$7;
      const _component_Paginador = _sfc_main$8;
      const _component_VPlaceholderPage = _sfc_main$9;
      const _component_VIcon = _sfc_main$a;
      const _component_NombreEntrenador = _sfc_main$2;
      const _component_VRadio = _sfc_main$3;
      const _component_VModal = _sfc_main$b;
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
              createVNode(_component_VField, { class: "h-hidden-mobile" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: valueSingle.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                        options: filtroPropietarioContenido,
                        "max-height": 145,
                        placeholder: "Propietario"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VField, { class: "h-hidden-mobile" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: valueSingle.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => valueSingle.value = $event),
                        options: optionsSingle,
                        "max-height": 145,
                        placeholder: "Estado"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VButton, {
                color: "primary",
                raised: "",
                onClick: _cache[3] || (_cache[3] = ($event) => mostrarModalCargarVideos.value = true)
              }, {
                default: withCtx(() => [
                  _hoisted_3,
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ]),
          unref(filteredData).length > 0 ? (openBlock(), createBlock(_component_Paginador, {
            key: 0,
            currentPage: currentPage.value,
            "onUpdate:currentPage": _cache[4] || (_cache[4] = ($event) => currentPage.value = $event),
            "total-items": unref(filteredData).length,
            "items-per-page": itemsPerPage
          }, null, 8, ["currentPage", "total-items"])) : createCommentVNode("", true),
          unref(filteredData).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, [
                createBaseVNode("span", null, toDisplayString(getPaginatedInfo(currentPage.value)), 1)
              ])
            ]),
            _hoisted_6
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_8,
                _hoisted_9
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginatedVideos), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-4"
                  }, [
                    createBaseVNode("a", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        item.estado === "Aprobado" || item.estado === "Rechazado" ? (openBlock(), createElementBlock("iframe", {
                          key: 0,
                          src: item.link,
                          title: "YouTube video player",
                          frameborder: "0",
                          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowfullscreen: ""
                        }, null, 8, _hoisted_12)) : (openBlock(), createElementBlock("video", {
                          key: 1,
                          src: item.link,
                          controls: "",
                          width: "600",
                          height: "400"
                        }, _hoisted_16, 8, _hoisted_13))
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("h3", _hoisted_18, toDisplayString(item.titulo), 1)
                      ]),
                      item.comentarios ? (openBlock(), createElementBlock("div", _hoisted_19, [
                        _hoisted_20,
                        createBaseVNode("p", _hoisted_21, toDisplayString(item.comentarios), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_22, [
                        item.estado === "Aprobado" ? (openBlock(), createElementBlock("h3", _hoisted_23, [
                          _hoisted_24,
                          createBaseVNode("p", _hoisted_25, toDisplayString(item.estado), 1)
                        ])) : createCommentVNode("", true),
                        item.estado === "Pendiente" ? (openBlock(), createElementBlock("h3", _hoisted_26, [
                          _hoisted_27,
                          createBaseVNode("p", _hoisted_28, toDisplayString(item.estado), 1)
                        ])) : createCommentVNode("", true),
                        item.estado === "Rechazado" ? (openBlock(), createElementBlock("h3", _hoisted_29, [
                          _hoisted_30,
                          createBaseVNode("p", _hoisted_31, toDisplayString(item.estado), 1)
                        ])) : createCommentVNode("", true),
                        createVNode(_component_VIcon, {
                          icon: "lucide:edit",
                          onClick: ($event) => abrirOpcionesVideo(item)
                        }, null, 8, ["onClick"])
                      ]),
                      createBaseVNode("div", _hoisted_32, [
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("span", null, [
                            createVNode(_component_NombreEntrenador, {
                              id: item.entrenadorId
                            }, null, 8, ["id"])
                          ]),
                          createBaseVNode("span", _hoisted_34, toDisplayString(unref(convertirTimestamp)(item.fecha)), 1)
                        ])
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
          open: mostrarModal.value,
          actions: "center",
          onClose: _cache[10] || (_cache[10] = ($event) => mostrarModal.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VRadio, {
                      modelValue: estado.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => estado.value = $event),
                      value: "Aprobado",
                      label: "Aprobado",
                      color: "info",
                      solid: ""
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_VRadio, {
                      modelValue: estado.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => estado.value = $event),
                      value: "Pendiente",
                      label: "Pendiente",
                      name: "solid_radio",
                      color: "info",
                      solid: ""
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_VRadio, {
                      modelValue: estado.value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => estado.value = $event),
                      value: "Rechazado",
                      label: "Rechazado",
                      name: "solid_radio",
                      color: "info",
                      solid: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            estado.value === "Rechazado" ? (openBlock(), createElementBlock("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => comentarios.value = $event),
                  class: "textarea",
                  rows: "4",
                  placeholder: "Comentarios"
                }, null, 512), [
                  [vModelText, comentarios.value]
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[9] || (_cache[9] = ($event) => cambiarEstado())
            }, {
              default: withCtx(() => [
                _hoisted_37
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_component_VModal, {
          title: "Cargar contenido",
          open: mostrarModalCargarVideos.value,
          actions: "center",
          onClose: _cache[14] || (_cache[14] = ($event) => mostrarModalCargarVideos.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_38, [
              createBaseVNode("div", _hoisted_39, [
                _hoisted_40,
                createBaseVNode("div", _hoisted_41, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(video).titulo = $event),
                    type: "text",
                    class: "input"
                  }, null, 512), [
                    [vModelText, unref(video).titulo]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_42, [
                _hoisted_43,
                createBaseVNode("div", _hoisted_44, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(video).link = $event),
                    type: "text",
                    class: "input"
                  }, null, 512), [
                    [vModelText, unref(video).link]
                  ])
                ])
              ])
            ])
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[13] || (_cache[13] = ($event) => guardarContenido())
            }, {
              default: withCtx(() => [
                _hoisted_45
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
    const pageTitle = ref("Gestionar Contenido");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: "Gestionar Contenido" });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Videos = _sfc_main$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Videos)
  ]);
}
var contenido = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { contenido as default };
