import { _ as _sfc_main$5 } from "./VModal.beb5e0f8.js";
import { _ as _sfc_main$d, a as _sfc_main$e } from "./VOption.8d45dac1.js";
import { _ as _sfc_main$c } from "./VInput.d2257343.js";
import { a as __unplugin_components_2, b as _sfc_main$6, _ as _sfc_main$b } from "./VControl.1b3fb414.js";
import { _ as _sfc_main$3 } from "./VFlex.d624fd0b.js";
import { y as defineComponent, X as useI18n, M as useRoute, e as computed, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, j as createBaseVNode, g as renderSlot, q as createVNode, k as normalizeClass, D as unref, Q as withKeys, v as withModifiers, i as createElementBlock, l as createCommentVNode, s as renderList, m as createTextVNode, t as toDisplayString, F as Fragment, z as ref, O as _sfc_main$4, r as reactive, A as onMounted, ay as resolveDirective, Y as withDirectives, a1 as vModelText, ap as TransitionGroup, al as _sfc_main$8 } from "./index.b73b5b5a.js";
import { _ as _sfc_main$9, a as _sfc_main$a } from "./VFlexTable.a2ab2f0f.js";
import { _ as _sfc_main$7 } from "./VPlaceholderPage.0307ee9e.js";
import { p as previewFilesManuales, E as ELIMINAR_MANUALES_ENTRENADOR, j as ACTUALIZAR_MANUAL_DOCUMENTO, k as ACTUALIZAR_MANUAL, s as saveFilesManuales } from "./administracion.32bff706.js";
import { u as useNotyf } from "./useNotyf.e18afbdb.js";
import { u as useViewWrapper } from "./viewWrapper.ceba3981.js";
import { j as df, _ as _h, f as firestore } from "./config.9bf2e6c5.js";
import "./main.03abd8f7.js";
import "./notyf.es.f84e4201.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Gehe zu Seite ", _interpolate(_named("page"))]);
        }
      },
      "en": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Goto page ", _interpolate(_named("page"))]);
        }
      },
      "es-MX": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "es": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "fr-FR": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Aller \xE0 la page ", _interpolate(_named("page"))]);
        }
      },
      "zh-CN": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u8F6C\u5230\u7B2C", _interpolate(_named("page")), "\u9875"]);
        }
      }
    }
  });
}
const _hoisted_1$2 = { class: "pagination-list" };
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" 1 ");
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_8$1 = [
  _hoisted_7$1
];
const _hoisted_9$1 = { key: 2 };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    itemPerPage: null,
    totalItems: null,
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 4 },
    noRouter: { type: Boolean },
    routerQueryKey: { default: "page" }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const route = useRoute();
    const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1);
    const totalPageDisplayed = computed(
      () => lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value
    );
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    const showLastLink = computed(() => lastPage.value > 1);
    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }
      const _page = Math.max(1, Math.min(page, lastPage.value));
      const query = {
        ...route.query
      };
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = _page <= 1 ? void 0 : _page;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    const handleLinkClick = (e, page = 1) => {
      const _page = Math.max(1, Math.min(page, lastPage.value));
      emits("update:currentPage", _page);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VFlex = _sfc_main$3;
      return openBlock(), createBlock(_component_VFlex, {
        role: "navigation",
        class: "flex-pagination pagination is-rounded",
        "aria-label": "pagination",
        "justify-content": "space-between"
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_1$2, [
            renderSlot(_ctx.$slots, "before-pagination"),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(1),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === 1 && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: 1 }),
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = (e) => handleLinkClick(e, 1))
              }, {
                default: withCtx(() => [
                  _hoisted_2$2
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ]),
            unref(showLastLink) && (unref(pages).length === 0 || unref(pages)[0] > 2) ? (openBlock(), createElementBlock("li", _hoisted_3$1, _hoisted_5$1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pages), (page) => {
              return openBlock(), createElementBlock("li", { key: page }, [
                createVNode(_component_RouterLink, {
                  to: paginatedLink(page),
                  tabindex: "0",
                  class: normalizeClass(["pagination-link", [__props.currentPage === page && "is-current"]]),
                  "aria-label": unref(t)("goto-page-title", { page }),
                  "aria-current": __props.currentPage === page ? "page" : void 0,
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                  onClick: (e) => handleLinkClick(e, page)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(page), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "aria-label", "aria-current", "class", "onClick"])
              ]);
            }), 128)),
            unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1 ? (openBlock(), createElementBlock("li", _hoisted_6$1, _hoisted_8$1)) : createCommentVNode("", true),
            unref(showLastLink) ? (openBlock(), createElementBlock("li", _hoisted_9$1, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(unref(lastPage)),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === unref(lastPage) && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: unref(lastPage) }),
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = (e) => handleLinkClick(e, unref(lastPage)))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(lastPage)), 1)
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "after-pagination")
          ]),
          renderSlot(_ctx.$slots, "before-navigation"),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage - 1),
            tabindex: "0",
            class: "pagination-previous has-chevron",
            onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[6] || (_cache[6] = (e) => handleLinkClick(e, __props.currentPage - 1))
          }, {
            default: withCtx(() => [
              _hoisted_10$1
            ]),
            _: 1
          }, 8, ["to"]),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage + 1),
            tabindex: "0",
            class: "pagination-next has-chevron",
            onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[8] || (_cache[8] = (e) => handleLinkClick(e, __props.currentPage + 1))
          }, {
            default: withCtx(() => [
              _hoisted_11$1
            ]),
            _: 1
          }, 8, ["to"]),
          renderSlot(_ctx.$slots, "after-navigation")
        ]),
        _: 3
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$2);
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_2$1 = ["src"];
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
    const closeModal = () => {
      centeredActionsOpen.value = false;
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$4;
      const _component_VModal = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VButton, {
          color: "primary",
          fullwidth: false,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          "onUpdate:open": _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = $event),
          title: "Vista",
          size: "big",
          noscroll: "",
          actions: "center",
          onClose: closeModal
        }, {
          content: withCtx(() => [
            createBaseVNode("iframe", {
              src: props.data.url,
              title: "Terminos y Condiciones",
              width: "100%",
              height: "400"
            }, null, 8, _hoisted_2$1)
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Agregar manual ");
const _hoisted_4 = { class: "tab-content is-active" };
const _hoisted_5 = { class: "flex-table-item" };
const _hoisted_6 = { class: "item-name dark-inverted" };
const _hoisted_7 = { class: "item-meta" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_9 = { class: "light-text" };
const _hoisted_10 = { class: "light-text" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Eliminar");
const _hoisted_13 = { class: "has-text-centered" };
const _hoisted_14 = { action: "signup-form" };
const _hoisted_15 = { class: "form-body" };
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "column is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Categoria ");
const _hoisted_19 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Tipo ");
const _hoisted_25 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27 = [
  _hoisted_26
];
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode("Estado ");
const _hoisted_30 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32 = [
  _hoisted_31
];
const _hoisted_33 = { class: "column is-6" };
const _hoisted_34 = /* @__PURE__ */ createTextVNode("Version ");
const _hoisted_35 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37 = [
  _hoisted_36
];
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_40 = { class: "account-box is-form is-footerless" };
const _hoisted_41 = { action: "signup-form" };
const _hoisted_42 = { class: "form-body" };
const _hoisted_43 = { class: "columns is-multiline" };
const _hoisted_44 = { class: "column is-12" };
const _hoisted_45 = { class: "file" };
const _hoisted_46 = { class: "file-label" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" Confirmar ");
const _hoisted_49 = { class: "has-text-centered" };
const _hoisted_50 = { action: "signup-form" };
const _hoisted_51 = { class: "form-body" };
const _hoisted_52 = { class: "columns is-multiline" };
const _hoisted_53 = { class: "column is-6" };
const _hoisted_54 = /* @__PURE__ */ createTextVNode("Categoria ");
const _hoisted_55 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_57 = [
  _hoisted_56
];
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_59 = { class: "column is-6" };
const _hoisted_60 = /* @__PURE__ */ createTextVNode("Tipo ");
const _hoisted_61 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_63 = [
  _hoisted_62
];
const _hoisted_64 = { class: "column is-6" };
const _hoisted_65 = /* @__PURE__ */ createTextVNode("Estado ");
const _hoisted_66 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_68 = [
  _hoisted_67
];
const _hoisted_69 = { class: "column is-6" };
const _hoisted_70 = /* @__PURE__ */ createTextVNode("Version ");
const _hoisted_71 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_73 = [
  _hoisted_72
];
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_76 = { class: "account-box is-form is-footerless" };
const _hoisted_77 = { action: "signup-form" };
const _hoisted_78 = { class: "form-body" };
const _hoisted_79 = { class: "columns is-multiline" };
const _hoisted_80 = { class: "column is-12" };
const _hoisted_81 = { class: "file" };
const _hoisted_82 = { class: "file-label" };
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_84 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administraci\xF3n de manuales");
    const filters = ref("");
    const xpag = 1;
    ref(0);
    ref(xpag);
    const page = ref(1);
    const uploadModalOpen = ref(false);
    ref(false);
    const notyf = useNotyf();
    const uploadModalOpenActualizar = ref(false);
    ref("");
    const botonDeshabilitado = ref(true);
    const categoria = ref("");
    const tipo = ref("");
    const estado = ref("");
    const version = ref("");
    const categoriaActualizar = ref("");
    const tipoActualizar = ref("");
    const estadoActualizar = ref("");
    const versionActualizar = ref("");
    const idActualizar = ref("");
    const urlActualizar = ref("");
    const state = reactive({
      nombreManuales: "",
      tipoManuales: ["Entrenador", "Deportista"],
      estado: [true, false]
    });
    const cargarDocumento = reactive({
      file: null,
      estado: false
    });
    let manualesEntrenadorReactive = reactive({
      manuales: []
    });
    const columns = {
      manual: {
        nombre: "Nombre",
        grow: true,
        media: true
      },
      version: "version",
      tipo: "tipo",
      visualizar: "visualizar",
      actualizar: "actualizar",
      eliminar: "eliminar"
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return manualesEntrenadorReactive.manuales;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return manualesEntrenadorReactive.manuales.filter((item) => {
          return item.nombre.match(filterRe);
        });
      }
    });
    const obtenerManuales = async () => {
      const querySnapshot = await df(_h(firestore, "manuales"));
      const nuevosManuales = [];
      querySnapshot.forEach((doc) => {
        const manual = {
          id: doc.id,
          estado: doc.data().estado,
          nombre: doc.data().nombre,
          fecha: doc.data().fecha,
          tipo: doc.data().tipo,
          url: doc.data().url,
          version: doc.data().version
        };
        nuevosManuales.push(manual);
      });
      manualesEntrenadorReactive.manuales = nuevosManuales;
    };
    onMounted(obtenerManuales);
    const previewImage = async (event) => {
      const prevImagen = await previewFilesManuales(event);
      cargarDocumento.file = event.target.files[0];
      if (prevImagen.file !== null && prevImagen.accept && cargarDocumento.file != null) {
        cargarDocumento.estado = true;
      } else {
        notyf.error("La extension de archivo o el tama\xF1o no cumple con los requisitos ");
      }
    };
    const eliminarManual = async (manual) => {
      botonDeshabilitado.value = false;
      await ELIMINAR_MANUALES_ENTRENADOR(manual);
      await obtenerManuales();
      notyf.success("Se elimino satisfactoriamente el manual ");
      botonDeshabilitado.value = true;
    };
    const abrirModalActualizar = (manual) => {
      idActualizar.value = manual.id;
      categoriaActualizar.value = manual.nombre;
      tipoActualizar.value = manual.tipo;
      estadoActualizar.value = manual.estado;
      versionActualizar.value = manual.version;
      urlActualizar.value = manual.url;
      uploadModalOpenActualizar.value = true;
    };
    const actualizarManual = async () => {
      try {
        botonDeshabilitado.value = false;
        if (cargarDocumento.estado) {
          await ACTUALIZAR_MANUAL_DOCUMENTO(
            idActualizar.value,
            cargarDocumento.file,
            categoriaActualizar.value,
            tipoActualizar.value,
            estadoActualizar.value,
            versionActualizar.value,
            urlActualizar.value
          );
          obtenerManuales();
          cargarDocumento.file = null;
          cargarDocumento.estado = false;
          notyf.success("Se actualizo satisfactoriamente el manual ");
        } else {
          await ACTUALIZAR_MANUAL(
            idActualizar.value,
            categoriaActualizar.value,
            tipoActualizar.value,
            estadoActualizar.value,
            versionActualizar.value
          );
          obtenerManuales();
          cargarDocumento.file = null;
          cargarDocumento.estado = false;
          notyf.success("Se actualizo satisfactoriamente el manual ");
        }
      } catch (error) {
        console.log(error);
        notyf.error("Error al cargar el documento");
      }
      botonDeshabilitado.value = true;
      uploadModalOpenActualizar.value = false;
    };
    const guardarManual = async () => {
      if (cargarDocumento.estado && cargarDocumento.file != null) {
        botonDeshabilitado.value = false;
        await saveFilesManuales(
          cargarDocumento.file,
          categoria.value,
          tipo.value,
          estado.value,
          version.value
        );
        await obtenerManuales();
        cargarDocumento.file = null;
        cargarDocumento.estado = false;
      } else {
        notyf.error("Algo salio mal ");
      }
      botonDeshabilitado.value = true;
      uploadModalOpen.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$6;
      const _component_VPlaceholderPage = _sfc_main$7;
      const _component_VButton = _sfc_main$4;
      const _component_VButtons = _sfc_main$8;
      const _component_VFlexTableCell = _sfc_main$9;
      const _component_modalManualesEntrenador = _sfc_main$1;
      const _component_VFlexTable = _sfc_main$a;
      const _component_VFlexPagination = _sfc_main$2;
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$c;
      const _component_VOption = _sfc_main$d;
      const _component_VSelect = _sfc_main$e;
      const _component_VModal = _sfc_main$5;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
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
            title: "No pudimos encontrar ning\xFAn resultado coincidente.",
            subtitle: "Parece que no pudimos encontrar ning\xFAn resultado que coincida con los t\xE9rminos de b\xFAsqueda que ingres\xF3. Pruebe diferentes t\xE9rminos o criterios de b\xFAsqueda.",
            larger: ""
          })) : createCommentVNode("", true),
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                icon: "fas fa-plus",
                elevated: "",
                bold: true,
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => uploadModalOpen.value = true)
              }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
            key: 0,
            columns: unref(columns),
            compact: "",
            data: unref(filteredData),
            class: "tabestilos"
          }, {
            body: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "list",
                tag: "div",
                class: "flex-list-inner"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (elemento) => {
                    return openBlock(), createElementBlock("div", _hoisted_5, [
                      createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_6, toDisplayString(elemento.nombre), 1),
                            createBaseVNode("span", _hoisted_7, [
                              createBaseVNode("span", null, [
                                _hoisted_8,
                                createTextVNode("Estado: " + toDisplayString(elemento.estado), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_9, toDisplayString(elemento.version), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_10, toDisplayString(elemento.tipo), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_modalManualesEntrenador, { data: elemento }, null, 8, ["data"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            size: "medium",
                            onClick: ($event) => abrirModalActualizar(elemento),
                            color: "success"
                          }, {
                            default: withCtx(() => [
                              _hoisted_11
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            size: "medium",
                            color: "danger",
                            disabled: !botonDeshabilitado.value,
                            onClick: ($event) => eliminarManual(elemento)
                          }, {
                            default: withCtx(() => [
                              _hoisted_12
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 256))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["columns", "data"])) : createCommentVNode("", true),
          unref(filteredData).length > 1 ? (openBlock(), createBlock(_component_VFlexPagination, {
            key: 1,
            "current-page": page.value,
            "onUpdate:current-page": _cache[3] || (_cache[3] = ($event) => page.value = $event),
            "item-per-page": 1,
            "total-items": unref(filteredData).length,
            "max-links-displayed": 1,
            "no-router": false
          }, null, 8, ["current-page", "total-items"])) : createCommentVNode("", true),
          createVNode(_component_VModal, {
            open: uploadModalOpen.value,
            title: "Cargar manuales",
            actions: "center",
            size: "large",
            noscroll: "",
            onClose: _cache[9] || (_cache[9] = ($event) => uploadModalOpen.value = false)
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("form", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_18,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_19, _hoisted_21)), [
                                  [
                                    _directive_tooltip,
                                    "Categor\xEDa a la que pertenece el manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:activity"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  modelValue: categoria.value,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => categoria.value = $event),
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_22
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_23, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_24,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_25, _hoisted_27)), [
                                  [
                                    _directive_tooltip,
                                    "A que tipo de usuario pertenece el manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:clipboard"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: tipo.value,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => tipo.value = $event)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).tipoManuales, (element, index) => {
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
                      createBaseVNode("div", _hoisted_28, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_29,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_30, _hoisted_32)), [
                                  [
                                    _directive_tooltip,
                                    "Estado para poner activo o no al manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:check-circle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: estado.value,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => estado.value = $event)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).estado, (element, index) => {
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
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_34,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_35, _hoisted_37)), [
                                  [
                                    _directive_tooltip,
                                    "Para posible facturaci\xF3n",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  type: "number",
                                  min: "0",
                                  modelValue: version.value,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => version.value = $event),
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_38
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            cancel: withCtx(() => [
              _hoisted_39
            ]),
            action: withCtx(() => [
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("form", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("div", _hoisted_43, [
                      createBaseVNode("div", _hoisted_44, [
                        createVNode(_component_VField, {
                          grouped: "",
                          class: "estilo-botones"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_45, [
                                  createBaseVNode("label", _hoisted_46, [
                                    createBaseVNode("input", {
                                      class: "file-input",
                                      type: "file",
                                      name: "resume",
                                      onChange: _cache[8] || (_cache[8] = ($event) => previewImage($event))
                                    }, null, 32),
                                    _hoisted_47
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  size: "big",
                                  color: "primary",
                                  disabled: categoria.value != "" && tipo.value != "" && estado.value != "" && version.value != "" && botonDeshabilitado.value && unref(cargarDocumento).file != null ? false : true,
                                  onClick: guardarManual
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_48
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["open"]),
          createVNode(_component_VModal, {
            open: uploadModalOpenActualizar.value,
            title: "Cargar manuales",
            actions: "center",
            size: "large",
            noscroll: "",
            onClose: _cache[15] || (_cache[15] = ($event) => uploadModalOpenActualizar.value = false)
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("form", _hoisted_50, [
                  createBaseVNode("div", _hoisted_51, [
                    createBaseVNode("div", _hoisted_52, [
                      createBaseVNode("div", _hoisted_53, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_54,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_55, _hoisted_57)), [
                                  [
                                    _directive_tooltip,
                                    "Categor\xEDa a la que pertenece el manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:activity"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  modelValue: categoriaActualizar.value,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => categoriaActualizar.value = $event),
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_58
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_59, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_60,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_61, _hoisted_63)), [
                                  [
                                    _directive_tooltip,
                                    "A que tipo de usuario pertenece el manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:clipboard"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: tipoActualizar.value,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => tipoActualizar.value = $event)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).tipoManuales, (element, index) => {
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
                      createBaseVNode("div", _hoisted_64, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_65,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_66, _hoisted_68)), [
                                  [
                                    _directive_tooltip,
                                    "Estado para poner activo o no al manual",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              class: "has-icons-left",
                              icon: "feather:check-circle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: estadoActualizar.value,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => estadoActualizar.value = $event)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).estado, (element, index) => {
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
                      createBaseVNode("div", _hoisted_69, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_70,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_71, _hoisted_73)), [
                                  [
                                    _directive_tooltip,
                                    "Para posible facturaci\xF3n",
                                    void 0,
                                    {
                                      primary: true,
                                      bubble: true
                                    }
                                  ]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  type: "number",
                                  min: "0",
                                  modelValue: versionActualizar.value,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => versionActualizar.value = $event),
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_74
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            cancel: withCtx(() => [
              _hoisted_75
            ]),
            action: withCtx(() => [
              createBaseVNode("div", _hoisted_76, [
                createBaseVNode("form", _hoisted_77, [
                  createBaseVNode("div", _hoisted_78, [
                    createBaseVNode("div", _hoisted_79, [
                      createBaseVNode("div", _hoisted_80, [
                        createVNode(_component_VField, {
                          grouped: "",
                          class: "estilo-botones"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_81, [
                                  createBaseVNode("label", _hoisted_82, [
                                    createBaseVNode("input", {
                                      class: "file-input",
                                      type: "file",
                                      name: "resume",
                                      onChange: _cache[14] || (_cache[14] = ($event) => previewImage($event))
                                    }, null, 32),
                                    _hoisted_83
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  size: "big",
                                  color: "primary",
                                  disabled: categoriaActualizar.value != "" && tipoActualizar.value != "" && estadoActualizar.value != "" && versionActualizar.value != "" && botonDeshabilitado.value ? false : true,
                                  onClick: actualizarManual
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_84
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["open"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
