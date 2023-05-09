import { y as defineComponent, a as useUserSession, a2 as useRouter, z as ref, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, k as normalizeClass, v as withModifiers, D as unref, N as withKeys, q as createVNode, w as withCtx, l as createCommentVNode, T as Transition, t as toDisplayString, m as createTextVNode, aG as VueScrollTo, a3 as _sfc_main$4, B as nextTick } from "./index.4254dce5.js";
import { _ as _sfc_main$3 } from "./VField.30db8514.js";
import { _ as __unplugin_components_2 } from "./VControl.d27e572e.js";
import { _ as _sfc_main$2 } from "./VInput.d3fefb7e.js";
import { _ as _sfc_main$1 } from "./VLabel.3ba45fcc.js";
import { u as useNotyf } from "./useNotyf.57c85443.js";
import { k as updateBienvenida, q as updatePlan, r as actualizarDato } from "./deportista.f81b0247.js";
import { p as paySubscription, s as subscription, a as addClient, b as getTokenCard } from "./epayco.9fceab50.js";
import { s as sliceCard } from "./main.666cbe61.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import "./config.dae7a527.js";
import "./general.c2c525e5.js";
var planS_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "mobile-steps is-active" };
const _hoisted_3 = { class: "steps has-content-centered is-thin is-horizontal is-short" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 1", -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 2", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 3", -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 4", -1);
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 5", -1);
const _hoisted_18 = [
  _hoisted_17
];
const _hoisted_19 = { class: "stepper-form" };
const _hoisted_20 = { class: "form-sections" };
const _hoisted_21 = {
  key: 0,
  id: "form-step-0",
  class: "form-section is-active"
};
const _hoisted_22 = { class: "form-section-title" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Datos Tarjeta", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = { class: "form-section-inner" };
const _hoisted_27 = { class: "fieldset" };
const _hoisted_28 = { class: "columns is-multiline" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode("Tarjeta");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("A\xF1o");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Mes");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("CVC");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-separator" }, null, -1);
const _hoisted_34 = {
  key: 0,
  id: "form-step-1",
  class: "form-section is-active"
};
const _hoisted_35 = { class: "form-section-title" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "Datos Cliente", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_38 = [
  _hoisted_37
];
const _hoisted_39 = { class: "form-section-inner" };
const _hoisted_40 = { class: "fieldset" };
const _hoisted_41 = { class: "columns is-multiline" };
const _hoisted_42 = /* @__PURE__ */ createTextVNode("Nombre");
const _hoisted_43 = /* @__PURE__ */ createTextVNode("Apellido");
const _hoisted_44 = /* @__PURE__ */ createTextVNode("Email");
const _hoisted_45 = /* @__PURE__ */ createTextVNode("Ciudad");
const _hoisted_46 = /* @__PURE__ */ createTextVNode("Telefono");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-separator" }, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("p", null, "Continua en este paso", -1);
const _hoisted_49 = {
  key: 0,
  id: "form-step-2",
  class: "form-section is-active"
};
const _hoisted_50 = { class: "form-section-title" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("span", null, "Plan", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_53 = [
  _hoisted_52
];
const _hoisted_54 = { class: "form-section-inner" };
const _hoisted_55 = { class: "fieldset" };
const _hoisted_56 = { class: "columns is-multiline" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode("Plan");
const _hoisted_58 = /* @__PURE__ */ createTextVNode("Valor");
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-separator" }, null, -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, "Continua en este paso", -1);
const _hoisted_61 = {
  key: 0,
  id: "form-step-3",
  class: "form-section is-active"
};
const _hoisted_62 = { class: "form-section-title" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", null, "Confirmar el pago de suscripci\xF3n", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_65 = [
  _hoisted_64
];
const _hoisted_66 = { class: "form-section-inner" };
const _hoisted_67 = { class: "fieldset" };
const _hoisted_68 = { class: "columns is-multiline" };
const _hoisted_69 = /* @__PURE__ */ createTextVNode(" Por favor continua si deseas confirmar pago y activar la subcripcion a tu plan ");
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-separator" }, null, -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", null, "Continua en este paso", -1);
const _hoisted_72 = {
  key: 0,
  id: "form-step-4",
  class: "form-section is-active"
};
const _hoisted_73 = { class: "form-section-title" };
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("span", null, "Felicidades", -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_76 = [
  _hoisted_75
];
const _hoisted_77 = { class: "form-section-inner" };
const _hoisted_78 = { class: "validation-box" };
const _hoisted_79 = { class: "box-content" };
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("h3", null, "Felicidades", -1);
const _hoisted_81 = { class: "navigation-buttons" };
const _hoisted_82 = { class: "buttons is-right" };
const _hoisted_83 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_84 = { class: "form-stepper" };
const _hoisted_85 = {
  key: 0,
  class: "steps is-vertical is-thin is-short"
};
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "PASO 1"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Datos Tarjeta")
], -1);
const _hoisted_88 = [
  _hoisted_86,
  _hoisted_87
];
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "PASO 2"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Datos Cliente")
], -1);
const _hoisted_91 = [
  _hoisted_89,
  _hoisted_90
];
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "PASO 3"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Plan")
], -1);
const _hoisted_94 = [
  _hoisted_92,
  _hoisted_93
];
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "PASO 4"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Confirmar pago")
], -1);
const _hoisted_97 = [
  _hoisted_95,
  _hoisted_96
];
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "PASO 5"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Felicidades")
], -1);
const _hoisted_100 = [
  _hoisted_98,
  _hoisted_99
];
const _hoisted_101 = {
  key: 1,
  class: "form-help"
};
const _hoisted_102 = {
  key: 0,
  id: "help-section-0",
  class: "form-help-inner is-active"
};
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_104 = [
  _hoisted_103
];
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("h3", null, "Datos Tarjeta", -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ", -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_108 = {
  key: 1,
  id: "help-section-1",
  class: "form-help-inner is-active"
};
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_110 = [
  _hoisted_109
];
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("h3", null, "Datos Cliente", -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_114 = {
  key: 2,
  id: "help-section-2",
  class: "form-help-inner is-active"
};
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_116 = [
  _hoisted_115
];
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("h3", null, "Plan", -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_120 = {
  key: 3,
  id: "help-section-3",
  class: "form-help-inner is-active"
};
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_122 = [
  _hoisted_121
];
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("h3", null, "Options", -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_126 = {
  key: 4,
  id: "help-section-4",
  class: "form-help-inner is-active"
};
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_128 = [
  _hoisted_127
];
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("h3", null, "Validation", -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    planS: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const userSession = useUserSession();
    const router = useRouter();
    const notyf = useNotyf();
    const { scrollTo } = VueScrollTo;
    const parametros = ref({});
    const planSeleccionado = ref({});
    const dataClient = ref({});
    const tokenCard = ref("");
    const tokenClient = ref("");
    const dataSub = ref("");
    const dataPay = ref("");
    const currentStep = ref(0);
    const isLoading = ref(false);
    const currentHelp = ref(-1);
    const dataCard = reactive({ tarjeta: "", year: "", mes: "", cvc: "" });
    const next = async () => {
      await sleep(400);
      currentStep.value += 1;
      nextTick(() => {
        scrollTo(`#form-step-${currentStep.value}`, 1e3);
        isLoading.value = false;
      });
    };
    const validateStep = async () => {
      if (currentStep.value === 4) {
        if (isLoading.value) {
          return;
        }
        isLoading.value = true;
        notyf.success("Completaste el formulario de Bienvenida");
        await sleep(1e3);
        await updateBienvenida({ bienvenida: 0 });
        router.push({
          name: "deportista-profile-profile-view"
        });
        return;
      }
      if (currentStep.value === 3) {
        isLoading.value = true;
        dataPay.value = await paySubscription({
          plan: planSeleccionado.value.id,
          customer: tokenClient.value,
          tokenCard: tokenCard.value,
          identificacion: dataClient.value.identificacion
        });
        if (dataPay.value.status == "active") {
          notyf.success("activaste la suscripcion a tu plan");
          await updatePlan(userSession.userId, planSeleccionado.value.nombre);
          await next();
        } else {
          notyf.error("Ocurrio un error, con el pago de tu suscripci\xF3n.");
          await sleep(400);
        }
        isLoading.value = false;
      }
      if (currentStep.value === 2) {
        isLoading.value = true;
        dataSub.value = await subscription({
          plan: planSeleccionado.value.id,
          customer: tokenClient.value,
          tokenCard: tokenCard.value,
          identificacion: dataClient.value.identificacion
        });
        if (dataSub.value.success) {
          notyf.success("Suscripci\xF3n creada con \xE9xito.");
          await next();
        } else {
          notyf.error("Ocurrio un error, con la suscripci\xF3n.");
          await sleep(400);
        }
        isLoading.value = false;
      }
      if (currentStep.value === 1) {
        isLoading.value = true;
        tokenClient.value = await addClient({
          tokenCard: tokenCard.value,
          cliente: dataClient.value
        });
        if (tokenClient.value != "") {
          await actualizarDato("users", userSession.userId, {
            tokenClient: tokenClient.value
          });
          await next();
        } else {
          notyf.error("Ocurrio un error, verifica los datos y vuelve a intentar.");
          await sleep(400);
        }
        isLoading.value = false;
      }
      if (currentStep.value === 0) {
        isLoading.value = true;
        tokenCard.value = await getTokenCard(dataCard);
        if (tokenCard.value != "") {
          const slice = await sliceCard(dataCard.tarjeta);
          await actualizarDato("users", userSession.userId, {
            tokenCard: tokenCard.value,
            tarjeta: slice
          });
          await next();
        } else {
          notyf.error("Ocurrio un error, verifica los datos y vuelve a intentar.");
          await sleep(400);
        }
        isLoading.value = false;
      }
    };
    onMounted(async () => {
      parametros.value = JSON.parse(props.planS);
      planSeleccionado.value = parametros.value.plan;
      dataClient.value = parametros.value.cliente;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("form", {
        onSubmit: withModifiers(validateStep, ["prevent"])
      }, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("ul", _hoisted_3, [
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 0 && "is-active"], "steps-segment"])
            }, [
              _hoisted_4,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_6)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 1 && "is-active"], "steps-segment"])
            }, [
              _hoisted_7,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_9)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 2 && "is-active"], "steps-segment"])
            }, [
              _hoisted_10,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_12)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 3 && "is-active"], "steps-segment"])
            }, [
              _hoisted_13,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[3] || (_cache[3] = withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_15)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 4 && "is-active"], "steps-segment"])
            }, [
              _hoisted_16,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[4] || (_cache[4] = withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_18)
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            currentStep.value >= 0 ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createBaseVNode("h3", _hoisted_22, [
                _hoisted_23,
                createBaseVNode("button", {
                  type: "button",
                  class: "help-button",
                  tabindex: "0",
                  onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => currentHelp.value === 0 ? currentHelp.value = -1 : currentHelp.value = 0, ["prevent"]), ["space"])),
                  onClick: _cache[6] || (_cache[6] = ($event) => currentHelp.value === 0 ? currentHelp.value = -1 : currentHelp.value = 0)
                }, _hoisted_25, 32)
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(_component_VField, { class: "column is-12" }, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, null, {
                          default: withCtx(() => [
                            _hoisted_29
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dataCard).tarjeta,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(dataCard).tarjeta = $event),
                              type: "text",
                              placeholder: "n\xFAmero de tu tarjeta"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VField, { class: "column is-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, null, {
                          default: withCtx(() => [
                            _hoisted_30
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dataCard).year,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(dataCard).year = $event),
                              type: "text",
                              placeholder: "A\xF1o"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VField, { class: "column is-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, null, {
                          default: withCtx(() => [
                            _hoisted_31
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dataCard).mes,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(dataCard).mes = $event),
                              type: "text",
                              placeholder: "Mes"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VField, { class: "column is-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, null, {
                          default: withCtx(() => [
                            _hoisted_32
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dataCard).cvc,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(dataCard).cvc = $event),
                              type: "text",
                              placeholder: " cvc"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_33
                ])
              ])
            ])) : createCommentVNode("", true),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 1 ? (openBlock(), createElementBlock("div", _hoisted_34, [
                  createBaseVNode("h3", _hoisted_35, [
                    _hoisted_36,
                    createBaseVNode("button", {
                      type: "button",
                      class: "help-button",
                      onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => currentHelp.value === 1 ? currentHelp.value = -1 : currentHelp.value = 1, ["prevent"]), ["space"])),
                      onClick: _cache[12] || (_cache[12] = ($event) => currentHelp.value === 1 ? currentHelp.value = -1 : currentHelp.value = 1)
                    }, _hoisted_38, 32)
                  ]),
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(_component_VField, { class: "column is-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_42
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: dataClient.value.nombres,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => dataClient.value.nombres = $event),
                                  type: "text",
                                  placeholder: "nombres",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VField, { class: "column is-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_43
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: dataClient.value.apellidos,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => dataClient.value.apellidos = $event),
                                  type: "text",
                                  placeholder: "apellidos",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VField, { class: "column is-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_44
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: dataClient.value.email,
                                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => dataClient.value.email = $event),
                                  type: "text",
                                  placeholder: "correo",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VField, { class: "column is-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_45
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: dataClient.value.ciudad,
                                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => dataClient.value.ciudad = $event),
                                  type: "text",
                                  placeholder: "ciudad",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VField, { class: "column is-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_46
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: dataClient.value.telefono,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => dataClient.value.telefono = $event),
                                  type: "text",
                                  placeholder: " telefono",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _hoisted_47,
                      _hoisted_48
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 2 ? (openBlock(), createElementBlock("div", _hoisted_49, [
                  createBaseVNode("h3", _hoisted_50, [
                    _hoisted_51,
                    createBaseVNode("button", {
                      type: "button",
                      class: "help-button",
                      onKeydown: _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => currentHelp.value === 2 ? currentHelp.value = -1 : currentHelp.value = 2, ["prevent"]), ["space"])),
                      onClick: _cache[19] || (_cache[19] = ($event) => currentHelp.value === 2 ? currentHelp.value = -1 : currentHelp.value = 2)
                    }, _hoisted_53, 32)
                  ]),
                  createBaseVNode("div", _hoisted_54, [
                    createBaseVNode("div", _hoisted_55, [
                      createBaseVNode("div", _hoisted_56, [
                        createVNode(_component_VField, { class: "column is-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_57
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: planSeleccionado.value.nombre,
                                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => planSeleccionado.value.nombre = $event),
                                  type: "text",
                                  placeholder: "nombres",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VField, { class: "column is-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_58
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: planSeleccionado.value.valor,
                                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => planSeleccionado.value.valor = $event),
                                  type: "text",
                                  placeholder: "apellidos",
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _hoisted_59,
                      _hoisted_60
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 3 ? (openBlock(), createElementBlock("div", _hoisted_61, [
                  createBaseVNode("h3", _hoisted_62, [
                    _hoisted_63,
                    createBaseVNode("button", {
                      type: "button",
                      class: "help-button",
                      onKeydown: _cache[22] || (_cache[22] = withKeys(withModifiers(($event) => currentHelp.value === 3 ? currentHelp.value = -1 : currentHelp.value = 3, ["prevent"]), ["space"])),
                      onClick: _cache[23] || (_cache[23] = ($event) => currentHelp.value === 3 ? currentHelp.value = -1 : currentHelp.value = 3)
                    }, _hoisted_65, 32)
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    createBaseVNode("div", _hoisted_67, [
                      createBaseVNode("div", _hoisted_68, [
                        createVNode(_component_VField, { class: "column is-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, null, {
                              default: withCtx(() => [
                                _hoisted_69
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _hoisted_70,
                      _hoisted_71
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 4 ? (openBlock(), createElementBlock("div", _hoisted_72, [
                  createBaseVNode("h3", _hoisted_73, [
                    _hoisted_74,
                    createBaseVNode("button", {
                      type: "button",
                      class: "help-button",
                      onKeydown: _cache[24] || (_cache[24] = withKeys(withModifiers(($event) => currentHelp.value === 4 ? currentHelp.value = -1 : currentHelp.value = 4, ["prevent"]), ["space"])),
                      onClick: _cache[25] || (_cache[25] = ($event) => currentHelp.value === 4 ? currentHelp.value = -1 : currentHelp.value = 4)
                    }, _hoisted_76, 32)
                  ]),
                  createBaseVNode("div", _hoisted_77, [
                    createBaseVNode("div", _hoisted_78, [
                      createBaseVNode("div", _hoisted_79, [
                        _hoisted_80,
                        createBaseVNode("p", null, " La suscripcion al plan " + toDisplayString(planSeleccionado.value.nombre) + " se ha completado con exito. ", 1)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_81, [
              createBaseVNode("div", _hoisted_82, [
                createVNode(_component_VButton, {
                  type: "submit",
                  color: "primary",
                  bold: "",
                  loading: isLoading.value,
                  tabindex: "0"
                }, {
                  default: withCtx(() => [
                    _hoisted_83
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_84, [
            currentHelp.value === -1 ? (openBlock(), createElementBlock("ul", _hoisted_85, [
              createBaseVNode("li", {
                id: "step-segment-0",
                class: normalizeClass([[currentStep.value === 0 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[26] || (_cache[26] = withKeys(withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[27] || (_cache[27] = withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_88, 34),
              createBaseVNode("li", {
                id: "step-segment-1",
                class: normalizeClass([[currentStep.value === 1 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[28] || (_cache[28] = withKeys(withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[29] || (_cache[29] = withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_91, 34),
              createBaseVNode("li", {
                id: "step-segment-2",
                class: normalizeClass([[currentStep.value === 2 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[30] || (_cache[30] = withKeys(withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[31] || (_cache[31] = withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_94, 34),
              createBaseVNode("li", {
                id: "step-segment-3",
                class: normalizeClass([[currentStep.value === 3 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[32] || (_cache[32] = withKeys(withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[33] || (_cache[33] = withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_97, 34),
              createBaseVNode("li", {
                id: "step-segment-4",
                class: normalizeClass([[currentStep.value === 4 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[34] || (_cache[34] = withKeys(withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[35] || (_cache[35] = withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_100, 34)
            ])) : (openBlock(), createElementBlock("div", _hoisted_101, [
              currentHelp.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_102, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[36] || (_cache[36] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[37] || (_cache[37] = ($event) => currentHelp.value = -1)
                }, _hoisted_104, 32),
                _hoisted_105,
                _hoisted_106,
                _hoisted_107
              ])) : createCommentVNode("", true),
              currentHelp.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_108, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[38] || (_cache[38] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[39] || (_cache[39] = ($event) => currentHelp.value = -1)
                }, _hoisted_110, 32),
                _hoisted_111,
                _hoisted_112,
                _hoisted_113
              ])) : createCommentVNode("", true),
              currentHelp.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_114, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[40] || (_cache[40] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[41] || (_cache[41] = ($event) => currentHelp.value = -1)
                }, _hoisted_116, 32),
                _hoisted_117,
                _hoisted_118,
                _hoisted_119
              ])) : createCommentVNode("", true),
              currentHelp.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_120, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[42] || (_cache[42] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[43] || (_cache[43] = ($event) => currentHelp.value = -1)
                }, _hoisted_122, 32),
                _hoisted_123,
                _hoisted_124,
                _hoisted_125
              ])) : createCommentVNode("", true),
              currentHelp.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_126, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[44] || (_cache[44] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[45] || (_cache[45] = ($event) => currentHelp.value = -1)
                }, _hoisted_128, 32),
                _hoisted_129,
                _hoisted_130,
                _hoisted_131
              ])) : createCommentVNode("", true)
            ]))
          ])
        ])
      ], 40, _hoisted_1);
    };
  }
});
export { _sfc_main as default };
