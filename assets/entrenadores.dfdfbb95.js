import { _ as _sfc_main$9 } from "./VModal.1900abc7.js";
import { a as _sfc_main$8 } from "./VFlexTable.0cb0e440.js";
import { _ as _sfc_main$7 } from "./VTag.86fec6a2.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.cf7fe017.js";
import { y as defineComponent, z as ref, e as computed, C as watch, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, D as unref, f as createBlock, l as createCommentVNode, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode, an as TransitionGroup, am as _sfc_main$4, O as _sfc_main$5, A as onMounted, V as _export_sfc, P as useHead } from "./index.7bbae714.js";
import { _ as _sfc_main$3 } from "./VField.74eec4bb.js";
import { a as __unplugin_components_0 } from "./VControl.329fee09.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as utils, w as writeFileSync } from "./xlsx.86b9426e.js";
import { e as onValue, r as ref$1, d as database } from "./config.cf3a8941.js";
import { u as useViewWrapper } from "./viewWrapper.e8abb625.js";
var TablaEntrenadores_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_4 = { class: "botones-container" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("LIMPIAR BUSQUEDAS");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" IMPRIMIR");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" EXCEL");
const _hoisted_8 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "custom-table" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "USUARIO")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "CEDULA")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "NOMBRES")
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "APELLIDOS")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "NOMBRE DE USUARIO")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "FECHA DE NACIMIENTO")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "CELULAR")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "FECHA DE REGISTRO")
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "table-cell-header" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "ESTADO")
], -1);
const _hoisted_21 = { class: "table-cell" };
const _hoisted_22 = { class: "table-cell light-text" };
const _hoisted_23 = { class: "table-cell light-text" };
const _hoisted_24 = { class: "table-cell light-text" };
const _hoisted_25 = { class: "table-cell light-text" };
const _hoisted_26 = { class: "table-cell light-text" };
const _hoisted_27 = { class: "table-cell light-text" };
const _hoisted_28 = { class: "table-cell light-text" };
const _hoisted_29 = { class: "table-cell" };
const _hoisted_30 = { class: "pagination" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" ANTERIOR ");
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" SIGUIENTE ");
const _hoisted_33 = { class: "modal-content" };
const _hoisted_34 = { class: "modal-body" };
const _hoisted_35 = { class: "modal-columns" };
const _hoisted_36 = { class: "modal-column" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("strong", null, "UserID:", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("strong", null, "Identificaci\xF3n:", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("strong", null, "Nombres:", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("strong", null, "Apellidos:", -1);
const _hoisted_41 = { class: "modal-column" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("strong", null, "Nombre de Usuario:", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("strong", null, "Fecha de Nacimiento:", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("strong", null, "Tel\xE9fono:", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("strong", null, "Fecha de Registro:", -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("strong", null, "estado:", -1);
const _hoisted_47 = /* @__PURE__ */ createTextVNode(" cerrar ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    entrenadores: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const usuarioSeleccionado = ref({});
    const currentPage = ref(1);
    const itemsPerPage = 15;
    const filters = ref("");
    const abrilModal = ref(false);
    const startIndex = ref(0);
    const endIndex = ref(15);
    const fechaInicial = ref("");
    const fechaFinal = ref("");
    const filteredData = computed(() => {
      let filteredItems = props.entrenadores;
      if (filters.value) {
        const filterRe = new RegExp(filters.value, "i");
        filteredItems = filteredItems.filter((item) => {
          return item.UserID.toString().match(filterRe) || item.identificacion.toString().match(filterRe) || item.nombres.match(filterRe) || item.apellidos.match(filterRe) || item.nameUser.match(filterRe) || item.fecha_nacimiento.toString().match(filterRe) || item.telefono.toString().match(filterRe) || item.fecha_registro.toString().match(filterRe);
        });
      }
      if (fechaInicial.value && fechaFinal.value) {
        filteredItems = filteredItems.filter((item) => {
          const fechaRegistro = new Date(item.fecha_registro);
          return fechaRegistro >= new Date(fechaInicial.value) && fechaRegistro <= new Date(fechaFinal.value);
        });
      }
      return filteredItems;
    });
    function imprimirTabla() {
      window.print();
    }
    function exportToExcel() {
      const data = [];
      const headerRow = [
        "ID",
        "Cedula",
        "Nombres",
        "Apellidos",
        "Nombre de Usuario",
        "Fecha de Nacimiento",
        "Celular",
        "Fecha de Registro",
        "Estado"
      ];
      data.push(headerRow);
      filteredData.value.forEach((item) => {
        const row = [
          item.UserID,
          item.identificacion,
          item.nombres,
          item.apellidos,
          item.nameUser,
          item.fecha_nacimiento,
          item.telefono,
          item.fecha_registro,
          item.estado
        ];
        data.push(row);
      });
      const ws = utils.aoa_to_sheet(data);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Tabla de Datos");
      writeFileSync(wb, "tabla_de_datos.xlsx");
    }
    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage);
    });
    const displayedItems = computed(() => {
      startIndex.value = (currentPage.value - 1) * itemsPerPage;
      endIndex.value = startIndex.value + itemsPerPage;
      return filteredData.value.slice(startIndex.value, endIndex.value);
    });
    function previousPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }
    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    }
    function limpiarFiltros() {
      fechaInicial.value = "";
      fechaFinal.value = "";
      filters.value = "";
      currentPage.value = 1;
    }
    watch(
      () => filters.value,
      () => {
        startIndex.value = 0;
        endIndex.value = 15;
        currentPage.value = 1;
      }
    );
    function getPaginatedInfo(currentPage2) {
      const itemsPerPage2 = 15;
      const totalItems = filteredData.value.length;
      const startIndex2 = (currentPage2 - 1) * itemsPerPage2 + 1;
      const endIndex2 = Math.min(currentPage2 * itemsPerPage2, totalItems);
      return `${startIndex2}-${endIndex2} DE ${totalItems}`;
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$3;
      const _component_VButtons = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$7;
      const _component_VFlexTable = _sfc_main$8;
      const _component_VModal = _sfc_main$9;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VField, null, {
                default: withCtx(() => [
                  createVNode(_component_VControl, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                        class: "input custom-text-filter",
                        placeholder: " Buscar..."
                      }, null, 512), [
                        [vModelText, filters.value]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => fechaInicial.value = $event),
                      type: "date",
                      class: "vbutton fechInic"
                    }, null, 512), [
                      [vModelText, fechaInicial.value]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => fechaFinal.value = $event),
                      type: "date",
                      class: "vbutton fechFinal"
                    }, null, 512), [
                      [vModelText, fechaFinal.value]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "danger",
                      icon: "fas fa-backspace",
                      onClick: limpiarFiltros
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      icon: "fas fa-file-excel",
                      elevated: "",
                      onClick: imprimirTabla
                    }, {
                      default: withCtx(() => [
                        _hoisted_6
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "success",
                      icon: "fas fa-file-csv",
                      elevated: "",
                      onClick: exportToExcel
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
                key: 0,
                title: "We couldn't find any matching results.",
                subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_9,
                  _hoisted_10
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(displayedItems).length ? (openBlock(), createBlock(_component_VFlexTable, { key: 1 }, {
                body: withCtx(() => [
                  createVNode(TransitionGroup, {
                    name: "list",
                    tag: "div",
                    class: "flex-list-inner"
                  }, {
                    default: withCtx(() => [
                      unref(displayedItems).length ? (openBlock(), createBlock(_component_VFlexTable, { key: 0 }, {
                        body: withCtx(() => [
                          createBaseVNode("div", _hoisted_11, [
                            _hoisted_12,
                            _hoisted_13,
                            _hoisted_14,
                            _hoisted_15,
                            _hoisted_16,
                            _hoisted_17,
                            _hoisted_18,
                            _hoisted_19,
                            _hoisted_20,
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(displayedItems), (item, index) => {
                              return openBlock(), createElementBlock("div", {
                                key: index,
                                class: "table-row"
                              }, [
                                createBaseVNode("span", _hoisted_21, [
                                  createVNode(_component_RouterLink, {
                                    to: {
                                      name: "superentrenador-perfil-entrenador",
                                      params: { id: item.id }
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", null, [
                                        createBaseVNode("span", null, toDisplayString(item.UserID), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createBaseVNode("span", _hoisted_22, toDisplayString(item.identificacion), 1),
                                createBaseVNode("span", _hoisted_23, toDisplayString(item.nombres), 1),
                                createBaseVNode("span", _hoisted_24, toDisplayString(item.apellidos), 1),
                                createBaseVNode("span", _hoisted_25, toDisplayString(item.nameUser), 1),
                                createBaseVNode("span", _hoisted_26, toDisplayString(item.fecha_nacimiento), 1),
                                createBaseVNode("span", _hoisted_27, toDisplayString(item.telefono), 1),
                                createBaseVNode("span", _hoisted_28, toDisplayString(item.fecha_registro), 1),
                                createBaseVNode("span", _hoisted_29, [
                                  item.estado === "Aprobado" ? (openBlock(), createBlock(_component_VTag, {
                                    key: 0,
                                    color: "success",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.estado), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : (openBlock(), createBlock(_component_VTag, {
                                    key: 1,
                                    color: "danger",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.estado), 1)
                                    ]),
                                    _: 2
                                  }, 1024))
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_30, [
                createVNode(_component_VButton, {
                  disabled: currentPage.value === 1,
                  color: "primary",
                  outlined: "",
                  onClick: previousPage
                }, {
                  default: withCtx(() => [
                    _hoisted_31
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createBaseVNode("p", null, [
                  createBaseVNode("strong", null, [
                    createBaseVNode("span", null, "P\xC1GINA " + toDisplayString(currentPage.value) + ":", 1),
                    createTextVNode(" ( " + toDisplayString(getPaginatedInfo(currentPage.value)) + " DISPONIBLES)", 1)
                  ])
                ]),
                createVNode(_component_VButton, {
                  disabled: currentPage.value >= unref(totalPages),
                  color: "primary",
                  outlined: "",
                  onClick: nextPage
                }, {
                  default: withCtx(() => [
                    _hoisted_32
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: abrilModal.value,
          title: "Perfil Entrenador",
          actions: "center",
          size: "medium",
          noscroll: "",
          onClose: _cache[4] || (_cache[4] = ($event) => abrilModal.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("div", null, [
                      _hoisted_37,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.UserID), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_38,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.identificacion), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_39,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.nombres), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_40,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.apellidos), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("div", null, [
                      _hoisted_42,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.nameUser), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_43,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.fecha_nacimiento), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_44,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.telefono), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_45,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.fecha_registro), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_46,
                      createTextVNode(" " + toDisplayString(usuarioSeleccionado.value.estado), 1)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          cancel: withCtx(() => [
            createVNode(_component_VButton, {
              outlined: "",
              raised: "",
              color: "danger",
              onClick: _cache[3] || (_cache[3] = ($event) => abrilModal.value = false)
            }, {
              default: withCtx(() => [
                _hoisted_47
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
var reportesEntrenador_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const entrenadores2 = ref([]);
    onMounted(async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        if (snapshot.exists()) {
          const snapshott = snapshot.val();
          Object.keys(snapshott).forEach((Entrenador) => {
            const entre = snapshott[Entrenador];
            if (entre.rol === "Entrenador") {
              arreglo.push({
                id: Entrenador,
                UserID: entre.UserID,
                identificacion: entre.identificacion || "No Registra",
                nombres: entre.nombres,
                apellidos: entre.apellidos,
                nameUser: entre.nameUser,
                fecha_nacimiento: fechaReg(entre.fecha_nacimiento),
                telefono: entre.telefono || "No Registra",
                fecha_registro: fechaReg(entre.fecha_registro),
                estado: entre.estado
              });
            }
          });
        }
        entrenadores2.value = arreglo;
        entrenadores2.value.sort((a, b) => {
          if (a.nombres < b.nombres) {
            return -1;
          }
          if (a.nombres > b.nombres) {
            return 1;
          }
          return 0;
        });
      });
    });
    function fechaReg(fechaISO) {
      const fecha = new Date(fechaISO);
      if (isNaN(Number(fecha))) {
        return "No Registra";
      }
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return fecha.toLocaleDateString("es", options);
    }
    return (_ctx, _cache) => {
      const _component_TablaEntrenadores = _sfc_main$2;
      return openBlock(), createBlock(_component_TablaEntrenadores, { entrenadores: entrenadores2.value }, null, 8, ["entrenadores"]);
    };
  }
});
const _sfc_main = {
  setup() {
    const pageTitle = ref("Reportes de Entrenadores");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: "Reportes de Entrenadores" });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_reportes_entrenador = _sfc_main$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_reportes_entrenador)
  ]);
}
var entrenadores = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { entrenadores as default };
