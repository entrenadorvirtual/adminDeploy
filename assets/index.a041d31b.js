import { a as _sfc_main$5 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./VTag.a5074be8.js";
import { _ as _sfc_main$2 } from "./VSwitchBlock.ad04fd05.js";
import { y as defineComponent, a as useUserSession, z as ref, az as useWindowScroll, e as computed, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, Q as withKeys, v as withModifiers, k as normalizeClass, f as createBlock, l as createCommentVNode, m as createTextVNode, O as _sfc_main$1 } from "./index.0f5aa7c2.js";
import { u as useNotyf } from "./useNotyf.602f0974.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { d as getDatosDeportista, l as updateDatosDeportista } from "./deportista.892d7693.js";
import "./VInput.144983c9.js";
import "./notyf.es.f84e4201.js";
import "./config.0fd79a34.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Forma de Pago"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon de pago")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosDeportista.value.identificacion) > 0 && Number(datosDeportista.value.telefono) > 0 && datosDeportista.value.genero != null && datosDeportista.value.pais != null && datosDeportista.value.ciudad != null) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      await updateDatosDeportista(userSession.userId, datosDeportista.value);
      emit("update");
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    const datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    onMounted(async () => {
      datosDeportista.value = await getDatosDeportista(userSession.userId);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VSwitchBlock = _sfc_main$2;
      const _component_VTag = _sfc_main$3;
      const _component_VTags = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "deportista-rutinas" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  disabled: unref(activarBoton),
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                  onClick: onSave
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onKeydown"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("form", {
          action: "signup-form",
          onSubmit: onSave
        }, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_VSwitchBlock, {
                            key: 0,
                            modelValue: datosDeportista.value.pagoRecurrente,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosDeportista.value.pagoRecurrente = $event),
                            color: "success",
                            label: "El pago se realizara automaticamente cada mes"
                          }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                          !datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_VSwitchBlock, {
                            key: 1,
                            modelValue: datosDeportista.value.pagoRecurrente,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosDeportista.value.pagoRecurrente = $event),
                            color: "warning",
                            label: "Tendras que pagar manualmente cada mes"
                          }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                          createVNode(_component_VTags, null, {
                            default: withCtx(() => [
                              datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_VTag, {
                                key: 0,
                                color: "green",
                                label: "El pago se realizara automaticamente cada mes"
                              })) : createCommentVNode("", true),
                              !datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_VTag, {
                                key: 1,
                                color: "warning",
                                label: "Tendras que pagar manualmente cada mes"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
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
        ], 32)
      ]);
    };
  }
});
export { _sfc_main as default };