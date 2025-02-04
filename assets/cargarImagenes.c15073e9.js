import { _ as _sfc_main$7 } from "./VModal.f3344cad.js";
import { y as defineComponent, z as ref, ay as useWindowScroll, P as useHead, r as reactive, e as computed, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Q as withKeys, v as withModifiers, D as unref, k as normalizeClass, l as createCommentVNode, m as createTextVNode, O as _sfc_main$4, am as _sfc_main$6 } from "./index.a70cc630.js";
import { _ as _sfc_main$5 } from "./VBlock.0985cd01.js";
import { _ as _sfc_main$3 } from "./VIconBox.6eb66af9.js";
import { a as __unplugin_components_0, b as _sfc_main$2 } from "./VControl.98993b64.js";
import { _ as _sfc_main$1 } from "./VInput.6b1f9cb4.js";
import { u as useNotyf } from "./useNotyf.629a4adf.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { p as preview, a as agregarImagenes } from "./managePictures.92d6157b.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
import "./useThemeColors.11afe8e0.js";
import "./config.f3ec4a91.js";
import "./main.9958a253.js";
import "./general.502a4700.js";
import "./administracion.cc08a79c.js";
var cargarImagenes_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "table is-striped is-fullwidth" };
const _hoisted_2 = { class: "centrar" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:chrome"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Subir Archivo");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:moon"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Subir Archivo");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar Cambios ");
const _hoisted_8 = { class: "account-box is-form is-footerless" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "right" })
], -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "has-text-centered" };
const _hoisted_12 = { class: "upload-demo-wrap" };
const _hoisted_13 = ["src"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("small", { class: "help-text" }, "Use the slider to resize the image:", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_16 = { class: "file" };
const _hoisted_17 = { class: "file-label" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _hoisted_20 = { class: "has-text-centered" };
const _hoisted_21 = { class: "upload-demo-wrap" };
const _hoisted_22 = ["src"];
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("small", { class: "help-text" }, "Use the slider to resize the image:", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_25 = { class: "file" };
const _hoisted_26 = { class: "file-label" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const uploadModalOpen = ref(false);
    const uploadModalOpenMovil = ref(false);
    const notyf = useNotyf();
    const nombre = ref("");
    const { y } = useWindowScroll();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Imagenes para Movil");
    useHead({
      title: "Visualizar imagenes"
    });
    let imagen = reactive({
      accept: false,
      message: "",
      dataUrl: ""
    });
    let imagenMovil = reactive({
      accept: false,
      message: "",
      dataUrl: ""
    });
    const imgPc = reactive({
      picture: ""
    });
    const imgMovil = reactive({
      picture: ""
    });
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const previewImage = async (event) => {
      var _a;
      const prevImagen = await preview(event);
      if (prevImagen.file !== null) {
        imgPc.picture = (_a = prevImagen.file) != null ? _a : "";
        if (prevImagen.accept) {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async (e) => {
            var _a2, _b;
            if (e.target) {
              imagen.dataUrl = (_b = (_a2 = e.target) == null ? void 0 : _a2.result) != null ? _b : null;
              imagen.message = prevImagen.message;
              imagen.accept = prevImagen.accept;
              const imgElement = document.getElementById("ImageUser");
              if (imgElement) {
                imgElement.src = e.target.result;
              }
            }
          };
        } else {
          imagen.accept = false;
          imagen.message = "";
          imagen.dataUrl = "";
          notyf.error("La extension de archivo o tama\xF1o no cumple con los requisitos");
        }
      }
    };
    const previewImageMovil = async (event) => {
      var _a;
      const prevImagen = await preview(event);
      if (prevImagen.file !== null) {
        imgMovil.picture = (_a = prevImagen.file) != null ? _a : "";
        if (prevImagen.accept) {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async (e) => {
            var _a2, _b;
            if (e.target) {
              imagenMovil.dataUrl = (_b = (_a2 = e.target) == null ? void 0 : _a2.result) != null ? _b : null;
              imagenMovil.message = prevImagen.message;
              imagenMovil.accept = prevImagen.accept;
              const imgElement = document.getElementById("ImageUserMovil");
              if (imgElement) {
                imgElement.src = e.target.result;
              }
            }
          };
        }
      } else {
        imagenMovil.accept = false;
        imagenMovil.message = "";
        imagenMovil.dataUrl = "";
        notyf.error("La extension de archivo o tama\xF1o no cumple con los requisitos");
      }
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      if (imgPc.picture && imgMovil.picture && nombre.value !== "") {
        agregarImagenes(imgPc.picture, imgMovil.picture, nombre.value);
        isLoading.value = false;
      } else {
        notyf.error("Ocurrio un error");
      }
    };
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$1;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VBlock = _sfc_main$5;
      const _component_VButtons = _sfc_main$6;
      const _component_VModal = _sfc_main$7;
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
                          modelValue: nombre.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nombre.value = $event),
                          type: "text",
                          placeholder: "Nombre de imagen"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VBlock, {
            title: "Imagen para pc",
            center: ""
          }, {
            icon: withCtx(() => [
              createVNode(_component_VIconBox, {
                color: "info",
                size: "medium",
                rounded: ""
              }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              })
            ]),
            action: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => uploadModalOpen.value = true)
              }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VBlock, {
            title: "Imagen para Movil",
            center: ""
          }, {
            icon: withCtx(() => [
              createVNode(_component_VIconBox, {
                color: "warning",
                size: "medium",
                rounded: ""
              }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            action: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => uploadModalOpenMovil.value = true, ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => uploadModalOpenMovil.value = true)
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VButtons, { style: { "justify-content": "center" } }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                disabled: unref(imagen).dataUrl && unref(imagenMovil).dataUrl && nombre.value !== "" ? false : true,
                color: "success",
                icon: "fas fa-check",
                raised: "",
                rounded: "",
                onClick: onSave
              }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", {
            class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
          }, _hoisted_10, 2),
          createVNode(_component_VModal, {
            open: uploadModalOpen.value,
            title: "Upload and crop your picture",
            actions: "center",
            size: "small",
            onClose: _cache[7] || (_cache[7] = ($event) => uploadModalOpen.value = false)
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  unref(imagen).dataUrl ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    id: "ImageUser",
                    class: "imagen",
                    src: unref(imagen).dataUrl,
                    alt: "/images/avatars/svg/vuero-1.svg"
                  }, null, 8, _hoisted_13)) : createCommentVNode("", true)
                ]),
                _hoisted_14
              ])
            ]),
            cancel: withCtx(() => [
              _hoisted_15
            ]),
            action: withCtx(() => [
              createVNode(_component_VField, { grouped: "" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("label", _hoisted_17, [
                          createBaseVNode("input", {
                            class: "file-input",
                            type: "file",
                            name: "resume",
                            onChange: _cache[5] || (_cache[5] = ($event) => previewImage($event))
                          }, null, 32),
                          _hoisted_18
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_VButton, {
                        class: "upload-result",
                        size: "big",
                        outlined: "",
                        onClick: _cache[6] || (_cache[6] = ($event) => uploadModalOpen.value = false)
                      }, {
                        default: withCtx(() => [
                          _hoisted_19
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["open"]),
          createVNode(_component_VModal, {
            open: uploadModalOpenMovil.value,
            title: "Upload and crop your picture",
            actions: "center",
            size: "small",
            onClose: _cache[10] || (_cache[10] = ($event) => uploadModalOpenMovil.value = false)
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  unref(imagenMovil).dataUrl ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    id: "ImageUser",
                    class: "imagen",
                    src: unref(imagenMovil).dataUrl,
                    alt: "/images/avatars/svg/vuero-1.svg"
                  }, null, 8, _hoisted_22)) : createCommentVNode("", true)
                ]),
                _hoisted_23
              ])
            ]),
            cancel: withCtx(() => [
              _hoisted_24
            ]),
            action: withCtx(() => [
              createVNode(_component_VField, { grouped: "" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("label", _hoisted_26, [
                          createBaseVNode("input", {
                            class: "file-input",
                            type: "file",
                            name: "resume",
                            onChange: _cache[8] || (_cache[8] = ($event) => previewImageMovil($event))
                          }, null, 32),
                          _hoisted_27
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_VButton, {
                        class: "upload-result",
                        size: "big",
                        outlined: "",
                        onClick: _cache[9] || (_cache[9] = ($event) => uploadModalOpenMovil.value = false)
                      }, {
                        default: withCtx(() => [
                          _hoisted_28
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["open"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
