import { _ as _sfc_main$6 } from "./VAvatar.8dd3f809.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.d33aedee.js";
import { _ as _sfc_main$4 } from "./VModal.d5a66cf6.js";
import { x as defineComponent, y as ref, z as onMounted, b as computed, B as watch, m as resolveComponent, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, w as withCtx, Z as withDirectives, a2 as vModelText, F as Fragment, q as renderList, t as toDisplayString, $ as vModelRadio, C as unref, e as createBlock, k as createCommentVNode, l as createTextVNode, N as _sfc_main$3, O as useHead } from "./index.5859d3e2.js";
import { _ as _sfc_main$2 } from "./VField.92bd822f.js";
import { a as __unplugin_components_0 } from "./VControl.f0eb3b3c.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { e as onValue, r as ref$1, d as database, u as update } from "./config.28ac5e58.js";
import { L as LISTAR_DOCUMENTOS_REALTIME } from "./main.a2946418.js";
import { S as Swal } from "./sweetalert2.all.c4d0cd5a.js";
import { u as useViewWrapper } from "./viewWrapper.1dcacd6c.js";
import "./_commonjsHelpers.4e997714.js";
var asignarPlanDeportista_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_4 = { class: "pollitoHijo" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Nombre plan")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Seleccionar")
    ])
  ])
], -1);
const _hoisted_6 = ["value", "onChange"];
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Confirmar");
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
const _hoisted_11 = { class: "card-grid-item" };
const _hoisted_12 = { class: "left" };
const _hoisted_13 = { class: "info" };
const _hoisted_14 = { class: "nombre" };
const _hoisted_15 = { class: "CiudadActual" };
const _hoisted_16 = { class: "card-buttons" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", {
  class: "icon",
  style: { "margin-right": "0.5px" }
}, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check-circle"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Asignar Plan ");
const _hoisted_19 = { class: "pagination" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" ANTERIOR ");
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" SIGUIENTE ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const currentPage = ref(1);
    const itemsPerPage = 15;
    const solicitudActual = ref(void 0);
    const centeredActionsOpen = ref(false);
    const mostrarAsignarPlanDeportista = ref(false);
    const deportistas = ref([]);
    const planes = ref([]);
    const selectedPlan = ref(null);
    const fetchDeportistas = async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        if (snapshot.exists()) {
          const snapshott = snapshot.val();
          Object.keys(snapshott).forEach((Deportista2) => {
            var _a;
            const entre = snapshott[Deportista2];
            if (entre.rol === "Deportista") {
              const planNombre = ((_a = entre.plan) == null ? void 0 : _a.nombre) || "Sin Plan";
              arreglo.push({
                id: Deportista2,
                nombres: entre.nombres,
                apellidos: entre.apellidos,
                ciudadActual: entre.ciudadActual || "No Registra",
                planNombre
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
    };
    onMounted(() => {
      fetchDeportistas();
      obtenerPlanes();
    });
    const abrirVModal = async (deportista) => {
      solicitudActual.value = deportista;
      selectedPlan.value = deportista.planNombre;
      centeredActionsOpen.value = true;
    };
    const seleccionarPlan = (planId) => {
      selectedPlan.value = planId;
    };
    const confirmarAsignacionPlan = async (idDeportista) => {
      Swal.fire({
        title: "\xBFEst\xE1s seguro?",
        text: "\xBFDeseas asignar este plan al deportista?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "S\xED, asignar",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            update(ref$1(database, "users/" + idDeportista.id + "/plan/"), {
              nombre: selectedPlan.value
            });
            Swal.fire({
              icon: "success",
              title: "Plan Asignado",
              text: "El plan fue asignado correctamente."
            }).then(() => {
              centeredActionsOpen.value = false;
              mostrarAsignarPlanDeportista.value = false;
              selectedPlan.value = null;
            });
          } catch (error) {
            console.error("Error al asignar el plan:", error);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Hubo un error al asignar el plan. Por favor, intenta nuevamente."
            });
          }
        }
      });
    };
    const obtenerPlanes = async () => {
      const datos = await LISTAR_DOCUMENTOS_REALTIME("Planes");
      planes.value = datos;
    };
    const cerrarModalAsignarPlan = () => {
      mostrarAsignarPlanDeportista.value = false;
      solicitudActual.value = void 0;
    };
    const filters = ref("");
    const filteredData = computed(() => {
      let filteredItems = deportistas.value;
      if (filters.value) {
        const filterRe = new RegExp(filters.value, "i");
        filteredItems = filteredItems.filter((item) => {
          return item.nombres.match(filterRe) || item.apellidos.match(filterRe) || item.ciudadActual.match(filterRe);
        });
      }
      return filteredItems;
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage);
    });
    const startIndex = ref(0);
    const endIndex = ref(15);
    const displayedItems = computed(() => {
      startIndex.value = (currentPage.value - 1) * itemsPerPage;
      endIndex.value = Math.min(
        startIndex.value + itemsPerPage,
        filteredData.value.length
      );
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
    function getAvatarUrl(foto_url) {
      if (!foto_url || typeof foto_url !== "string" || foto_url.trim() === "" || foto_url === "null" || foto_url === "undefined") {
        return new URL("@/assets/avatars/user.jpg", self.location).href;
      }
      return foto_url;
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VModal = _sfc_main$4;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_ViewModal = resolveComponent("ViewModal");
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
              })
            ]),
            createBaseVNode("div", null, [
              createVNode(_component_VModal, {
                open: centeredActionsOpen.value,
                title: "Asignar Plan",
                noscroll: "",
                actions: "center",
                size: "small",
                onClose: _cache[3] || (_cache[3] = ($event) => centeredActionsOpen.value = false)
              }, {
                content: withCtx(() => [
                  createBaseVNode("table", _hoisted_4, [
                    _hoisted_5,
                    createBaseVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(planes.value, (plan, index) => {
                        return openBlock(), createElementBlock("tr", { key: index }, [
                          createBaseVNode("td", null, toDisplayString(plan.id), 1),
                          createBaseVNode("td", null, [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedPlan.value = $event),
                              type: "radio",
                              value: plan.id,
                              onChange: ($event) => seleccionarPlan(String(plan.id))
                            }, null, 40, _hoisted_6), [
                              [vModelRadio, selectedPlan.value]
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                action: withCtx(() => [
                  createVNode(_component_VButton, {
                    color: "primary",
                    raised: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => solicitudActual.value && confirmarAsignacionPlan(solicitudActual.value))
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open"])
            ]),
            createBaseVNode("div", _hoisted_8, [
              !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
                key: 0,
                title: "No se encuentra deportista registrado."
              }, {
                image: withCtx(() => [
                  _hoisted_9,
                  _hoisted_10
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_11, [
                unref(displayedItems).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(displayedItems), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.UserID,
                    class: "card"
                  }, [
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_VAvatar, {
                        size: "big",
                        class: "card-avatar",
                        picture: getAvatarUrl(item.foto_url),
                        alt: !item.foto_url || item.foto_url === "null" || item.foto_url === "undefined" || item.foto_url.trim() === "" ? "Avatar por defecto" : `Avatar de ${item.nombres} ${item.apellidos}`
                      }, null, 8, ["picture", "alt"]),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("span", null, toDisplayString(item.ciudadActual), 1)
                        ]),
                        createBaseVNode("div", _hoisted_16, [
                          createVNode(_component_VButton, {
                            "dark-outlined": "",
                            rounded: "",
                            onClick: ($event) => abrirVModal(item)
                          }, {
                            default: withCtx(() => [
                              _hoisted_17,
                              _hoisted_18
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ])
                    ])
                  ]);
                }), 128)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createVNode(_component_VButton, {
                disabled: currentPage.value === 1,
                color: "primary",
                outlined: "",
                onClick: previousPage
              }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              }, 8, ["disabled"]),
              createBaseVNode("p", null, [
                createBaseVNode("strong", null, [
                  createBaseVNode("span", null, "P\xC1GINA " + toDisplayString(currentPage.value) + ":", 1),
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
                  _hoisted_21
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ]),
        solicitudActual.value && mostrarAsignarPlanDeportista.value ? (openBlock(), createBlock(_component_ViewModal, {
          key: 0,
          iddeportista: solicitudActual.value.id,
          onCerrar: cerrarModalAsignarPlan
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Asignar Plan");
    useHead({
      title: "Asignar Plan"
    });
    return (_ctx, _cache) => {
      const _component_asignarPlanDeportista = _sfc_main$1;
      return openBlock(), createBlock(_component_asignarPlanDeportista);
    };
  }
});
export { _sfc_main as default };
