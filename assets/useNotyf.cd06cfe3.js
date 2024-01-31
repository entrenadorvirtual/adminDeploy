import { N as Notyf } from "./notyf.es.f84e4201.js";
import { aj as createSharedComposable, ak as useCssVar, r as reactive, e as computed } from "./index.aedac316.js";
const hslRe = /hsl\(\s*(\d+)((?:deg)|(?:turn)|(?:rad))?\s*,?\s*(\d+(?:\.\d+)?%)\s*,?\s*(\d+(?:\.\d+)?%)\s*\)/;
function HSLToHex(hslCss) {
  if (!hslCss) {
    return "#fff";
  }
  const res = hslRe.exec(hslCss);
  if (res === null) {
    return "#fff";
  }
  const [hueString, hueUnit, saturationString, luminanceString] = res.slice(1);
  if (!hueString || !saturationString || !luminanceString) {
    return "#fff";
  }
  let h = 0;
  let s = parseFloat(saturationString != null ? saturationString : "0");
  let l = parseFloat(luminanceString != null ? luminanceString : "0");
  switch (hueUnit) {
    case "deg":
      h = parseFloat(hueString.substr(0, hueString.length - 3));
      break;
    case "turn":
      h = Math.round(parseFloat(hueString.substr(0, hueString.length - 4)) * 360);
      break;
    case "rad":
      h = Math.round(
        parseFloat(hueString.substr(0, hueString.length - 3)) * (180 / Math.PI)
      );
      break;
    default:
      h = parseFloat(hueString);
      break;
  }
  if (h >= 360)
    h %= 360;
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  let rString = Math.round((r + m) * 255).toString(16);
  let gString = Math.round((g + m) * 255).toString(16);
  let bString = Math.round((b + m) * 255).toString(16);
  if (rString.length == 1)
    rString = "0" + rString;
  if (gString.length == 1)
    gString = "0" + gString;
  if (bString.length == 1)
    bString = "0" + bString;
  return "#" + rString + gString + bString;
}
const useThemeColors = createSharedComposable(() => {
  const primary = useCssVar("--primary", document.documentElement);
  const success = useCssVar("--success", document.documentElement);
  const info = useCssVar("--info", document.documentElement);
  const warning = useCssVar("--warning", document.documentElement);
  const danger = useCssVar("--danger", document.documentElement);
  const purple = useCssVar("--purple", document.documentElement);
  const blue = useCssVar("--blue", document.documentElement);
  const green = useCssVar("--green", document.documentElement);
  const yellow = useCssVar("--yellow", document.documentElement);
  const orange = useCssVar("--orange", document.documentElement);
  const themeColors = reactive({
    primary: computed(() => HSLToHex(primary.value)),
    primaryMedium: "#b4e4ce",
    primaryLight: "#f7fcfa",
    secondary: "#ff227d",
    accent: "#797bf2",
    accentMedium: "#d4b3ff",
    accentLight: "#b8ccff",
    success: computed(() => HSLToHex(success.value)),
    info: computed(() => HSLToHex(info.value)),
    warning: computed(() => HSLToHex(warning.value)),
    danger: computed(() => HSLToHex(danger.value)),
    purple: computed(() => HSLToHex(purple.value)),
    blue: computed(() => HSLToHex(blue.value)),
    green: computed(() => HSLToHex(green.value)),
    yellow: computed(() => HSLToHex(yellow.value)),
    orange: computed(() => HSLToHex(orange.value)),
    lightText: "#a2a5b9",
    fadeGrey: "#ededed"
  });
  return themeColors;
});
const useNotyf = createSharedComposable(() => {
  const themeColors = useThemeColors();
  const notyf = new Notyf({
    duration: 2e3,
    position: {
      x: "right",
      y: "bottom"
    },
    types: [
      {
        type: "warning",
        background: themeColors.warning,
        icon: {
          className: "fas fa-hand-paper",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "info",
        background: themeColors.info,
        icon: {
          className: "fas fa-info-circle",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "primary",
        background: themeColors.primary,
        icon: {
          className: "fas fa-car-crash",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "accent",
        background: themeColors.accent,
        icon: {
          className: "fas fa-car-crash",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "purple",
        background: themeColors.purple,
        icon: {
          className: "fas fa-check",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "blue",
        background: themeColors.blue,
        icon: {
          className: "fas fa-check",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "green",
        background: themeColors.green,
        icon: {
          className: "fas fa-check",
          tagName: "i",
          text: ""
        }
      },
      {
        type: "orange",
        background: themeColors.orange,
        icon: {
          className: "fas fa-check",
          tagName: "i",
          text: ""
        }
      }
    ]
  });
  return {
    dismiss: (notification) => {
      notyf.dismiss(notification);
    },
    dismissAll: () => {
      notyf.dismissAll();
    },
    success: (payload) => {
      return notyf.success(payload);
    },
    error: (payload) => {
      return notyf.error(payload);
    },
    info: (payload) => {
      const options = {
        type: "info"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    warning: (payload) => {
      const options = {
        type: "warning"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    primary: (payload) => {
      const options = {
        type: "primary"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    purple: (payload) => {
      const options = {
        type: "purple"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    blue: (payload) => {
      const options = {
        type: "blue"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    green: (payload) => {
      const options = {
        type: "green"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    orange: (payload) => {
      const options = {
        type: "orange"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    }
  };
});
export { useThemeColors as a, useNotyf as u };
