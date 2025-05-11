import { _ as _sfc_main$8 } from "./ViewProfile.919bfb87.js";
import { a as _sfc_main$7 } from "./VFlexTable.fb38fd2d.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.c55835e8.js";
import { y as defineComponent, z as ref, e as computed, C as watch, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, D as unref, f as createBlock, l as createCommentVNode, F as Fragment, s as renderList, t as toDisplayString, an as TransitionGroup, m as createTextVNode, am as _sfc_main$4, O as _sfc_main$5, A as onMounted, V as _export_sfc, P as useHead } from "./index.7ac0c9d2.js";
import { _ as _sfc_main$3 } from "./VField.44da70b8.js";
import { a as __unplugin_components_0 } from "./VControl.f6d74c4b.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as utils, w as writeFileSync } from "./xlsx.86b9426e.js";
import { e as onValue, r as ref$1, d as database } from "./config.cf3a8941.js";
import { u as useViewWrapper } from "./viewWrapper.22429616.js";
import "./VInput.85dd5294.js";
import "./fechas.5f05a473.js";
import "./VTextarea.c3d16e44.js";
import "./deportista.721fdc30.js";
import "./general.436cc3e4.js";
import "./main.abb91ed8.js";
import "./VAvatar.df463660.js";
var TablaDeportistas_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "-inner"
};
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
const _hoisted_20 = { class: "table-cell" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = { class: "table-cell light-text" };
const _hoisted_23 = { class: "table-cell light-text" };
const _hoisted_24 = { class: "table-cell light-text" };
const _hoisted_25 = { class: "table-cell light-text" };
const _hoisted_26 = { class: "table-cell light-text" };
const _hoisted_27 = { class: "table-cell light-text" };
const _hoisted_28 = { class: "table-cell light-text" };
const _hoisted_29 = { class: "pagination" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" ANTERIOR ");
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" SIGUIENTE ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    deportistas: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const currentPage = ref(1);
    const itemsPerPage = 15;
    const solicitudActual = ref(void 0);
    const mostrarVerPerfilDeportista = ref(false);
    const verPerfil = async (solicitud) => {
      solicitudActual.value = solicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    const cerrarPerfil = () => {
      mostrarVerPerfilDeportista.value = false;
      solicitudActual.value = void 0;
    };
    const filters = ref("");
    const fechaInicial = ref("");
    const fechaFinal = ref("");
    const filteredData = computed(() => {
      let filteredItems = props.deportistas;
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
        "Fecha de Registro"
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
          item.fecha_registro
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
    const startIndex = ref(0);
    const endIndex = ref(15);
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
      const _component_VFlexTable = _sfc_main$7;
      const _component_ViewProfile = _sfc_main$8;
      return openBlock(), createElementBlock(Fragment, null, [
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(displayedItems), (item, index) => {
                              return openBlock(), createElementBlock("div", {
                                key: index,
                                class: "table-row"
                              }, [
                                createBaseVNode("span", _hoisted_20, [
                                  createBaseVNode("a", {
                                    href: "#",
                                    onClick: ($event) => verPerfil(item)
                                  }, toDisplayString(item.UserID), 9, _hoisted_21)
                                ]),
                                createBaseVNode("span", _hoisted_22, toDisplayString(item.identificacion), 1),
                                createBaseVNode("span", _hoisted_23, toDisplayString(item.nombres), 1),
                                createBaseVNode("span", _hoisted_24, toDisplayString(item.apellidos), 1),
                                createBaseVNode("span", _hoisted_25, toDisplayString(item.nameUser), 1),
                                createBaseVNode("span", _hoisted_26, toDisplayString(item.fecha_nacimiento), 1),
                                createBaseVNode("span", _hoisted_27, toDisplayString(item.telefono), 1),
                                createBaseVNode("span", _hoisted_28, toDisplayString(item.fecha_registro), 1)
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
              createBaseVNode("div", _hoisted_29, [
                createVNode(_component_VButton, {
                  disabled: currentPage.value === 1,
                  color: "primary",
                  outlined: "",
                  onClick: previousPage
                }, {
                  default: withCtx(() => [
                    _hoisted_30
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createBaseVNode("p", null, [
                  createBaseVNode("strong", null, [
                    createBaseVNode("span", null, "P\xC1GINA" + toDisplayString(currentPage.value) + ":", 1),
                    createTextVNode("( " + toDisplayString(getPaginatedInfo(currentPage.value)) + " DISPONIBLES)", 1)
                  ])
                ]),
                createVNode(_component_VButton, {
                  disabled: currentPage.value >= unref(totalPages),
                  color: "primary",
                  outlined: "",
                  onClick: nextPage
                }, {
                  default: withCtx(() => [
                    _hoisted_31
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_ViewProfile, {
          key: 1,
          iddeportista: solicitudActual.value.id,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const deportistas = ref([]);
    onMounted(async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        if (snapshot.exists()) {
          const snapshott = snapshot.val();
          Object.keys(snapshott).forEach((Deportista2) => {
            const entre = snapshott[Deportista2];
            if (entre.rol === "Deportista") {
              arreglo.push({
                id: Deportista2,
                UserID: entre.UserID,
                identificacion: entre.identificacion || "No Registra",
                nombres: entre.nombres,
                apellidos: entre.apellidos,
                nameUser: entre.nameUser || "No Registra",
                fecha_nacimiento: fechaReg(entre.fecha_nacimiento),
                telefono: entre.telefono || "No Registra",
                fecha_registro: fechaReg(entre.fecha_registro),
                estado: entre.estado,
                plan: entre.plan
              });
            }
          });
        }
        deportistas.value = arreglo;
        deportistas.value.sort((a, b) => {
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
      if (isNaN(fecha)) {
        return "No Registra";
      }
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return fecha.toLocaleDateString(void 0, options);
    }
    return (_ctx, _cache) => {
      const _component_TablaDeportistas = _sfc_main$2;
      return deportistas.value.length > 0 ? (openBlock(), createBlock(_component_TablaDeportistas, {
        key: 0,
        deportistas: deportistas.value
      }, null, 8, ["deportistas"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main = {
  setup() {
    const pageTitle = ref("Reportes de Deportistas");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: pageTitle.value });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_reportes_deportista = _sfc_main$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_reportes_deportista)
  ]);
}
var deporindex = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { deporindex as default };
