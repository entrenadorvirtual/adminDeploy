import { _ as _sfc_main$8 } from "./VModal.3ed19e4b.js";
import { U as defineStore, y as defineComponent, o as openBlock, f as createBlock, w as withCtx, j as createBaseVNode, t as toDisplayString, q as createVNode, m as createTextVNode, D as unref, O as _sfc_main$7, z as ref, i as createElementBlock, g as renderSlot, k as normalizeClass, s as renderList, l as createCommentVNode, F as Fragment, e as computed, A as onMounted, aw as createSlots, N as onBeforeMount, P as useHead } from "./index.81c578a3.js";
import { _ as _sfc_main$9 } from "./VDropdown.bb3dd0c4.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, T as TIPO_MEDICION_RUTINA, c as TIPO_TERRENO, _ as __unplugin_components_5, a as __unplugin_components_6, d as _sfc_main$f } from "./BloquesDistancia.c7b48bc2.js";
import { _ as _sfc_main$e } from "./VTextarea.8fb3c7a4.js";
import { _ as _sfc_main$c, a as _sfc_main$d } from "./VOption.315f5aab.js";
import { c as useForm, a as __unplugin_components_2, b as _sfc_main$b } from "./VControl.0351758b.js";
import { _ as _sfc_main$a } from "./VInput.c13b1748.js";
import { N as Notyf } from "./notyf.es.f84e4201.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { g as CREAR_RUTINA_COMODIN, h as ACTUALIZAR_RUTINA_COMODIN, i as ELIMINAR_RUTINA_COMODIN, j as LISTAR_RUTINAS_COMODIN } from "./rutinas.5a00d2f9.js";
import { u as useViewWrapper } from "./viewWrapper.e18c6213.js";
import "./VFlex.82603e9e.js";
import "./VFlexItem.7fc46327.js";
import "./VFlexTable.49c23410.js";
import "./VIconButton.d74a809b.js";
import "./general.a67d6d2f.js";
import "./main.03abd8f7.js";
import "./config.9bf2e6c5.js";
const loadingStore = defineStore("loadingStore", {
  state: () => ({
    isLoading: false
  }),
  actions: {
    setLoading(estado) {
      this.isLoading = estado;
    }
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: null,
    classconfirm: null,
    confirmMsm: null,
    classcancel: null,
    cancelMsm: null,
    mostrar: { type: Boolean }
  },
  emits: ["aceptar", "cancelar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = loadingStore();
    const aceptar = () => {
      emits("aceptar");
    };
    const cancelar = () => {
      emits("cancelar");
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$7;
      const _component_VModal = _sfc_main$8;
      return openBlock(), createBlock(_component_VModal, {
        open: props.mostrar,
        noclosebutton: "",
        title: props.title || "Confirmac\xEDon",
        size: "small",
        actions: "center",
        noscroll: "",
        noclose: ""
      }, {
        content: withCtx(() => [
          createBaseVNode("div", null, [
            createBaseVNode("h2", null, toDisplayString(props.subtitle), 1)
          ])
        ]),
        action: withCtx(() => [
          createVNode(_component_VButton, {
            color: props.classconfirm || "primary",
            raised: "",
            loading: unref(loading).isLoading,
            onClick: aceptar
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.confirmMsm || "Aceptar"), 1)
            ]),
            _: 1
          }, 8, ["color", "loading"])
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            color: props.classcancel,
            raised: "",
            onClick: cancelar
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.cancelMsm || "Cancelar"), 1)
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
var ListWidgetTabbed_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "widget-head" };
const _hoisted_2$4 = { class: "dark-inverted" };
const _hoisted_3$4 = { class: "inner-list" };
const _hoisted_4$4 = { class: "inner-list" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "List Widget" },
    labels: { default: () => ["Recent", "Popular"] },
    straight: { type: Boolean },
    toggled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const state = ref(props.toggled);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget tabbed-widget", [__props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("h3", _hoisted_2$4, toDisplayString(__props.title), 1)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [!state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_3$4, [
            renderSlot(_ctx.$slots, "tab1")
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_4$4, [
            renderSlot(_ctx.$slots, "tab2")
          ])
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:eye",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Ver"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver rutina comodin")
], -1);
const _hoisted_3$3 = [
  _hoisted_1$3,
  _hoisted_2$3
];
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:edit",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Editar"),
  /* @__PURE__ */ createBaseVNode("span", null, "Editar rutina comodin")
], -1);
const _hoisted_6$3 = [
  _hoisted_4$3,
  _hoisted_5$3
];
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:delete",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Eliminar"),
  /* @__PURE__ */ createBaseVNode("span", null, "Eliminar rutina comodin")
], -1);
const _hoisted_10$1 = [
  _hoisted_8$1,
  _hoisted_9$1
];
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:copy"
  })
], -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Duplicar"),
  /* @__PURE__ */ createBaseVNode("span", null, "Duplicar rutina comodin")
], -1);
const _hoisted_13$1 = [
  _hoisted_11$1,
  _hoisted_12$1
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["operation-selected"],
  setup(__props, { emit: emits }) {
    const selectOperation = (action) => {
      emits("operation-selected", action);
    };
    return (_ctx, _cache) => {
      const _component_VDropdown = _sfc_main$9;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        dots: "",
        right: "",
        spaced: ""
      }, {
        content: withCtx(() => [
          createBaseVNode("a", {
            href: "#",
            class: "dropdown-item is-media",
            onClick: _cache[0] || (_cache[0] = () => selectOperation("show"))
          }, _hoisted_3$3),
          createBaseVNode("a", {
            href: "#",
            class: "dropdown-item is-media",
            onClick: _cache[1] || (_cache[1] = () => selectOperation("edit"))
          }, _hoisted_6$3),
          _hoisted_7$2,
          createBaseVNode("a", {
            href: "#",
            class: "dropdown-item is-media",
            onClick: _cache[2] || (_cache[2] = () => selectOperation("delete"))
          }, _hoisted_10$1),
          createBaseVNode("a", {
            href: "#",
            class: "dropdown-item is-media",
            onClick: _cache[3] || (_cache[3] = () => selectOperation("copy"))
          }, _hoisted_13$1)
        ]),
        _: 1
      });
    };
  }
});
const rutinaComodinStore = defineStore("rutinaComodinStore", {
  state: () => ({
    rutina: null
  }),
  actions: {
    setRutina(payload) {
      this.rutina = payload;
    }
  }
});
var ListWidgetFileList_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "fas fa-clock tiempo",
  "aria-hidden": "true"
};
const _hoisted_2$2 = {
  key: 1,
  class: "fas fa-ruler-horizontal distancia",
  "aria-hidden": "true"
};
const _hoisted_3$2 = { class: "flex-meta is-light" };
const _hoisted_4$2 = { class: "titulo-rutina-comodin" };
const _hoisted_5$2 = { style: { "text-align": "justify" } };
const _hoisted_6$2 = { class: "flex-end" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    rutinas: { default: () => [] }
  },
  emits: ["action-rutine"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const rutinaComodin = rutinaComodinStore();
    const rutinaSelect = ref();
    const rutineSelected = (rut) => {
      rutinaSelect.value = rut;
    };
    const operationSelected = (action) => {
      emits("action-rutine", action, rutinaSelect.value);
    };
    return (_ctx, _cache) => {
      const _component_ListWidgetFileDropdown = _sfc_main$4;
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.rutinas, (rutina) => {
        return openBlock(), createElementBlock("div", {
          key: rutina.id
        }, [
          createBaseVNode("div", {
            class: normalizeClass(
              unref(rutinaComodin).rutina === rutina ? "inner-list-item media-flex-center item-copy" : "inner-list-item media-flex-center"
            )
          }, [
            rutina.tipo_medicion === "Tiempo" ? (openBlock(), createElementBlock("i", _hoisted_1$2)) : rutina.tipo_medicion === "Distancia" ? (openBlock(), createElementBlock("i", _hoisted_2$2)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("h2", _hoisted_4$2, toDisplayString(rutina.titulo), 1),
              createBaseVNode("span", _hoisted_5$2, toDisplayString(rutina.descripcion), 1)
            ]),
            createBaseVNode("div", _hoisted_6$2, [
              createVNode(_component_ListWidgetFileDropdown, {
                onClick: () => rutineSelected(rutina),
                onOperationSelected: operationSelected
              }, null, 8, ["onClick"])
            ])
          ], 2)
        ]);
      }), 128);
    };
  }
});
var SesionSemanaComodin_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "columns is-multiline is-mobile is-vcentered" };
const _hoisted_2$1 = { class: "column is-full-mobile is-one-quarter-table is-one-quarter-desktop" };
const _hoisted_3$1 = { class: "columns is-mobile is-multiline" };
const _hoisted_4$1 = { class: "column is-12" };
const _hoisted_5$1 = {
  key: 0,
  class: "item-show"
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Titulo", -1);
const _hoisted_7$1 = { class: "column is-half" };
const _hoisted_8 = {
  key: 0,
  class: "item-show"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Tipo esfuerzo", -1);
const _hoisted_10 = { class: "item-description" };
const _hoisted_11 = { class: "column is-half" };
const _hoisted_12 = {
  key: 0,
  class: "item-show"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Tipo medici\xF3n", -1);
const _hoisted_14 = { class: "column is-half" };
const _hoisted_15 = {
  key: 0,
  class: "item-show"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Tipo terreno", -1);
const _hoisted_17 = { class: "column is-full-mobile is-three-quarters-table is-three-quarters-desktop" };
const _hoisted_18 = { class: "columns is-mobile is-multiline" };
const _hoisted_19 = { class: "column is-half" };
const _hoisted_20 = {
  key: 0,
  class: "item-show"
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Descripcion", -1);
const _hoisted_22 = { class: "item-description" };
const _hoisted_23 = {
  key: 0,
  class: "help has-text-danger"
};
const _hoisted_24 = {
  key: 1,
  class: "help has-text-danger"
};
const _hoisted_25 = { class: "column is-half" };
const _hoisted_26 = {
  key: 0,
  class: "item-show"
};
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("h1", { class: "item-title" }, "Objetivos", -1);
const _hoisted_28 = { class: "item-description" };
const _hoisted_29 = {
  key: 0,
  class: "help has-text-danger"
};
const _hoisted_30 = {
  key: 1,
  class: "help has-text-danger"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Cancelar");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    opcionactual: { default: void 0 },
    isOpen: { type: Boolean, default: void 0 },
    rutinaSelected: { default: void 0 }
  },
  emits: ["close", "crear-rutina"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = loadingStore();
    const notyf = new Notyf();
    const title = ref(null);
    const tiposBloques = ref([]);
    const tiposIntensidad = GET_TIPOS_INTENSIDAD_RUTINAS();
    const tiposMedicion = TIPO_MEDICION_RUTINA;
    const tiposTerreno = TIPO_TERRENO;
    const datosRutina = ref({
      titulo: "",
      tipo_esfuerzo: "",
      tipo_medicion: "",
      tipo_terreno: "",
      descripcion: "",
      objetivos: "",
      bloques: [],
      id: "",
      fecha: new Date(),
      id_deportista: "",
      id_entrenador: "",
      comentarios: []
    });
    const isValidTitle = computed(() => {
      const titulo = datosRutina.value.titulo;
      return titulo !== void 0 && titulo.length > 0 && titulo.length < 60;
    });
    const descShort = computed(() => {
      return datosRutina.value.descripcion.length < 4 ? true : false;
    });
    const descLong = computed(() => {
      return datosRutina.value.descripcion.length > 500 ? true : false;
    });
    const objShort = computed(() => {
      return datosRutina.value.objetivos.length < 4 ? true : false;
    });
    const objLong = computed(() => {
      return datosRutina.value.objetivos.length > 500 ? true : false;
    });
    const allValid = () => {
      return isValidTitle.value && !descShort.value && !descLong.value && !objShort.value && !objLong.value ? true : false;
    };
    const { handleSubmit } = useForm({
      initialValues: {
        semicooper: ""
      }
    });
    const validacionCrearRutina = ref(false);
    onMounted(() => {
      if (props.opcionactual === "ver" || props.opcionactual === "editar") {
        if (!datosRutina.value.hasOwnProperty("tipo_terreno")) {
          datosRutina.value.tipo_terreno = "Por asignar";
        }
        datosRutina.value = props.rutinaSelected;
      } else {
        datosRutina.value.tipo_esfuerzo = tiposIntensidad[0];
        datosRutina.value.tipo_medicion = tiposMedicion[1];
        datosRutina.value.tipo_terreno = tiposTerreno[5];
      }
    });
    const agregarBloque = (bloque) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.push({ ...bloque });
    };
    const eliminarBloque = (index) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.splice(index, 1);
    };
    const cerrarRutina = () => {
      emits("close");
    };
    const syncValidacionCrearRutina = (valor) => {
      validacionCrearRutina.value = valor;
    };
    const crearRutina = handleSubmit(async () => {
      if (allValid()) {
        emits("crear-rutina", datosRutina.value);
      } else {
        title.value.reference.focus();
        notyf.error("Completa todos los campos");
      }
    });
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$b;
      const _component_VOption = _sfc_main$c;
      const _component_VSelect = _sfc_main$d;
      const _component_VTextarea = _sfc_main$e;
      const _component_BloquesDistancia = __unplugin_components_5;
      const _component_BloquesTiempo = __unplugin_components_6;
      const _component_VButton = _sfc_main$7;
      const _component_VModal = _sfc_main$8;
      return openBlock(), createBlock(_component_VModal, {
        open: props.isOpen,
        noclosebutton: "",
        title: props.rutinaSelected ? props.rutinaSelected.titulo : "Creando rutina",
        size: "big",
        actions: "center",
        noscroll: "",
        noclose: ""
      }, createSlots({
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                    _hoisted_6$1,
                    createTextVNode(" " + toDisplayString(datosRutina.value.titulo ? datosRutina.value.titulo : "Rutina"), 1)
                  ])) : createCommentVNode("", true),
                  __props.opcionactual !== "ver" ? (openBlock(), createBlock(_component_VField, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, {
                        "is-valid": unref(isValidTitle),
                        "has-error": !unref(isValidTitle)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            ref_key: "title",
                            ref: title,
                            modelValue: datosRutina.value.titulo,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosRutina.value.titulo = $event),
                            class: "is-rounded",
                            type: "text",
                            placeholder: "T\xEDtulo",
                            required: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["is-valid", "has-error"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_7$1, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    _hoisted_9,
                    createBaseVNode("span", _hoisted_10, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)
                  ])) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_VSelect, {
                        modelValue: datosRutina.value.tipo_esfuerzo,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosRutina.value.tipo_esfuerzo = $event)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposIntensidad), (intensidad, index) => {
                            return openBlock(), createBlock(_component_VOption, {
                              key: index,
                              value: intensidad
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(intensidad), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }))
                ]),
                createBaseVNode("div", _hoisted_11, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    _hoisted_13,
                    createTextVNode(" " + toDisplayString(datosRutina.value.tipo_medicion), 1)
                  ])) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_VSelect, {
                        modelValue: datosRutina.value.tipo_medicion,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosRutina.value.tipo_medicion = $event),
                        disabled: datosRutina.value.bloques.length > 0
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposMedicion), (deporte, index) => {
                            return openBlock(), createBlock(_component_VOption, {
                              key: index,
                              value: deporte
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(deporte), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  }))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                    _hoisted_16,
                    createTextVNode(" " + toDisplayString(datosRutina.value.tipo_terreno), 1)
                  ])) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_VSelect, {
                        modelValue: datosRutina.value.tipo_terreno,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosRutina.value.tipo_terreno = $event)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposTerreno), (tipo, index) => {
                            return openBlock(), createBlock(_component_VOption, {
                              key: index,
                              value: tipo
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tipo), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_20, [
                    _hoisted_21,
                    createBaseVNode("span", _hoisted_22, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1)
                  ])) : (openBlock(), createBlock(_component_VField, {
                    key: 1,
                    id: "descripcion"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VTextarea, {
                            modelValue: datosRutina.value.descripcion,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosRutina.value.descripcion = $event),
                            rows: "4",
                            placeholder: "Descripci\xF3n"
                          }, null, 8, ["modelValue"]),
                          unref(descShort) ? (openBlock(), createElementBlock("p", _hoisted_23, " La descripci\xF3n es muy corta ")) : createCommentVNode("", true),
                          unref(descLong) ? (openBlock(), createElementBlock("p", _hoisted_24, " La descripci\xF3n es muy extensa ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ]),
                createBaseVNode("div", _hoisted_25, [
                  __props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_26, [
                    _hoisted_27,
                    createBaseVNode("span", _hoisted_28, toDisplayString(datosRutina.value.objetivos ? datosRutina.value.objetivos : "Sin Objetivos"), 1)
                  ])) : (openBlock(), createBlock(_component_VField, {
                    key: 1,
                    id: "objetivos"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VTextarea, {
                            modelValue: datosRutina.value.objetivos,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosRutina.value.objetivos = $event),
                            rows: "4",
                            placeholder: "Objetivos"
                          }, null, 8, ["modelValue"]),
                          unref(objShort) ? (openBlock(), createElementBlock("p", _hoisted_29, " El objetivos es muy corto ")) : createCommentVNode("", true),
                          unref(objLong) ? (openBlock(), createElementBlock("p", _hoisted_30, " El objetivo es muy extenso ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ])
              ])
            ])
          ]),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[1] ? (openBlock(), createBlock(_component_BloquesDistancia, {
            key: 0,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            tiposbloques: tiposBloques.value,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual", "tiposbloques"])) : createCommentVNode("", true),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[0] ? (openBlock(), createBlock(_component_BloquesTiempo, {
            key: 1,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual"])) : createCommentVNode("", true)
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            raised: "",
            onClick: cerrarRutina
          }, {
            default: withCtx(() => [
              _hoisted_31
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        props.opcionactual !== "ver" ? {
          name: "action",
          fn: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              disabled: !validacionCrearRutina.value,
              raised: "",
              loading: unref(loading).isLoading,
              onClick: unref(crearRutina)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.opcionactual === "crear" ? "Crear Rutina" : "Actualizar Rutina"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading", "onClick"])
          ])
        } : void 0
      ]), 1032, ["open", "title"]);
    };
  }
});
var RutinasComodin_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "content-message-body" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "message-body" }, " Se ha creado una copia de una rutina comod\xEDn. Por favor, selecciona el rango en el que deseas replicar esta rutina. ", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Cancelar copia");
const _hoisted_4 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_5 = { class: "column is-4 card-rango" };
const _hoisted_6 = { class: "column is-4 card-rango" };
const _hoisted_7 = { class: "column is-4 card-rango" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const loading = loadingStore();
    const rutinaComodin = rutinaComodinStore();
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const isOpenCrearSesion = ref(false);
    const rango = ref("");
    const rutina_selected = ref();
    const rutinas_comodin_bajo = ref([]);
    const rutinas_comodin_medio = ref([]);
    const rutinas_comodin_alto = ref([]);
    const mostrarCofirmarEliminar = ref(false);
    const openModalNewRutineComodin = async (rangoParam) => {
      rango.value = rangoParam;
      if (!rutinaComodin.rutina) {
        opcionactual.value = ENOpcionesCru.CREAR;
        isOpenCrearSesion.value = true;
      } else {
        loading.setLoading(true);
        rutinaComodin.rutina.rango = rango.value;
        await CREAR_RUTINA_COMODIN(rutinaComodin.rutina);
        await loadDataViewRutinesComodin();
        cancelarCopia();
        loading.setLoading(false);
      }
    };
    const createRoutine = async (rutina) => {
      loading.setLoading(true);
      rutina.rango = rango.value;
      if (opcionactual.value === ENOpcionesCru.CREAR) {
        await CREAR_RUTINA_COMODIN(rutina);
      } else if (opcionactual.value === ENOpcionesCru.EDITAR) {
        await ACTUALIZAR_RUTINA_COMODIN(rutina.id, rutina);
      }
      await loadDataViewRutinesComodin();
      isOpenCrearSesion.value = false;
      loading.setLoading(false);
    };
    const deleteRutine = async () => {
      var _a;
      loading.setLoading(true);
      if (rutina_selected.value) {
        await ELIMINAR_RUTINA_COMODIN((_a = rutina_selected.value) == null ? void 0 : _a.id);
        await loadDataViewRutinesComodin();
        mostrarCofirmarEliminar.value = false;
      }
      loading.setLoading(false);
    };
    const cancelarCopia = () => {
      rutinaComodin.setRutina(null);
    };
    const actionRutine = (action, rutine) => {
      rutina_selected.value = rutine;
      rango.value = rutina_selected.value.rango;
      if (action === "show") {
        isOpenCrearSesion.value = true;
        opcionactual.value = ENOpcionesCru.VER;
      } else if (action === "edit") {
        isOpenCrearSesion.value = true;
        opcionactual.value = ENOpcionesCru.EDITAR;
      } else if (action === "delete") {
        mostrarCofirmarEliminar.value = true;
      } else if (action === "copy") {
        rutinaComodin.setRutina(rutina_selected.value);
      }
    };
    const loadDataViewRutinesComodin = async () => {
      rutinas_comodin_bajo.value = await LISTAR_RUTINAS_COMODIN("bajo");
      rutinas_comodin_bajo.value.sort((a, b) => {
        return a.numero - b.numero;
      });
      rutinas_comodin_medio.value = await LISTAR_RUTINAS_COMODIN("medio");
      rutinas_comodin_medio.value.sort((a, b) => {
        return a.numero - b.numero;
      });
      rutinas_comodin_alto.value = await LISTAR_RUTINAS_COMODIN("alto");
      rutinas_comodin_alto.value.sort((a, b) => {
        return a.numero - b.numero;
      });
    };
    onBeforeMount(async () => {
      await loadDataViewRutinesComodin();
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$7;
      const _component_VMessage = _sfc_main$f;
      const _component_listWidgetFileList = _sfc_main$3;
      const _component_ListWidgetTabbed = _sfc_main$5;
      const _component_ModalOptions = _sfc_main$6;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          unref(rutinaComodin).rutina ? (openBlock(), createBlock(_component_VMessage, {
            key: 0,
            class: "sticky-message",
            color: "primary"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _hoisted_2,
                createVNode(_component_VButton, {
                  color: "danger",
                  onClick: cancelarCopia
                }, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VButton, {
                class: "btn-nueva-rutina",
                color: unref(rutinaComodin).rutina ? "warning" : "primary",
                rounded: "",
                loading: unref(loading).isLoading,
                onClick: _cache[0] || (_cache[0] = () => openModalNewRutineComodin("bajo"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(rutinaComodin).rutina ? "Duplicar aqui" : "Nuevo"), 1)
                ]),
                _: 1
              }, 8, ["color", "loading"]),
              createVNode(_component_ListWidgetTabbed, {
                title: "Rango Bajo",
                straight: "",
                class: "list-widget-v2"
              }, {
                tab1: withCtx(() => [
                  createVNode(_component_listWidgetFileList, {
                    rutinas: rutinas_comodin_bajo.value,
                    onActionRutine: actionRutine
                  }, null, 8, ["rutinas"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_VButton, {
                class: "btn-nueva-rutina",
                color: unref(rutinaComodin).rutina ? "warning" : "primary",
                rounded: "",
                loading: unref(loading).isLoading,
                onClick: _cache[1] || (_cache[1] = () => openModalNewRutineComodin("medio"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(rutinaComodin).rutina ? "Duplicar aqui" : "Nuevo"), 1)
                ]),
                _: 1
              }, 8, ["color", "loading"]),
              createVNode(_component_ListWidgetTabbed, {
                title: "Rango Medio",
                straight: "",
                class: "list-widget-v2"
              }, {
                tab1: withCtx(() => [
                  createVNode(_component_listWidgetFileList, {
                    rutinas: rutinas_comodin_medio.value,
                    onActionRutine: actionRutine
                  }, null, 8, ["rutinas"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VButton, {
                class: "btn-nueva-rutina",
                color: unref(rutinaComodin).rutina ? "warning" : "primary",
                rounded: "",
                loading: unref(loading).isLoading,
                onClick: _cache[2] || (_cache[2] = () => openModalNewRutineComodin("alto"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(rutinaComodin).rutina ? "Duplicar aqui" : "Nuevo"), 1)
                ]),
                _: 1
              }, 8, ["color", "loading"]),
              createVNode(_component_ListWidgetTabbed, {
                title: "Rango Alto",
                straight: "",
                class: "list-widget-v2"
              }, {
                tab1: withCtx(() => [
                  createVNode(_component_listWidgetFileList, {
                    rutinas: rutinas_comodin_alto.value,
                    onActionRutine: actionRutine
                  }, null, 8, ["rutinas"])
                ]),
                _: 1
              })
            ])
          ])
        ]),
        isOpenCrearSesion.value ? (openBlock(), createBlock(_sfc_main$2, {
          key: 0,
          "is-open": isOpenCrearSesion.value,
          opcionactual: opcionactual.value,
          "rutina-selected": rutina_selected.value,
          onCrearRutina: createRoutine,
          onClose: _cache[3] || (_cache[3] = ($event) => isOpenCrearSesion.value = false)
        }, null, 8, ["is-open", "opcionactual", "rutina-selected"])) : createCommentVNode("", true),
        createVNode(_component_ModalOptions, {
          title: "Confirmaci\xF3n",
          subtitle: "Desea Eliminar esta rutina?",
          mostrar: mostrarCofirmarEliminar.value,
          classconfirm: "danger",
          "confirm-msm": "Eliminar Rutina",
          onAceptar: deleteRutine,
          onCancelar: _cache[4] || (_cache[4] = ($event) => mostrarCofirmarEliminar.value = false)
        }, null, 8, ["mostrar"])
      ], 64);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Gesti\xF3n rutinas comodin");
    useHead({
      title: "Rutinas comodin"
    });
    return (_ctx, _cache) => {
      const _component_RutinasComodin = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_RutinasComodin)
      ]);
    };
  }
});
export { _sfc_main as default };
