import { _ as _sfc_main$6 } from "./VModal.72068d4c.js";
import { _ as _sfc_main$5 } from "./VAvatar.df463660.js";
import { y as defineComponent, z as ref, $ as useRouter, X as useI18n, r as reactive, e as computed, P as useHead, N as onBeforeMount, A as onMounted, E as onUnmounted, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, k as normalizeClass, D as unref, t as toDisplayString, l as createCommentVNode, Y as withDirectives, Z as vModelRadio, ap as vModelCheckbox, aA as vShow, v as withModifiers, Q as withKeys, F as Fragment, m as createTextVNode, aB as __unplugin_components_0, O as _sfc_main$4 } from "./index.7ac0c9d2.js";
import { _ as _sfc_main$3 } from "./VField.44da70b8.js";
import { b as useForm, _ as _sfc_main$2, a as __unplugin_components_0$1 } from "./VControl.f6d74c4b.js";
import { _ as _sfc_main$1 } from "./VInput.85dd5294.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useNotyf } from "./useNotyf.edf649d6.js";
import { C as CREARUSER } from "./auth.28cac464.js";
import { g as getImagenesSignUp, s as signUpImagen, p as preview } from "./managePictures.db7c7df1.js";
import "./useThemeColors.31c9a907.js";
import "./config.cf3a8941.js";
import "./main.abb91ed8.js";
import "./general.436cc3e4.js";
import "./administracion.ca6b4075.js";
var _imports_0 = "/assets/signup-fondo.ecde8aad.webp";
var _imports_1 = "/images/avatars/svg/vuero-1.svg";
var win$1 = window;
var raf = win$1.requestAnimationFrame || win$1.webkitRequestAnimationFrame || win$1.mozRequestAnimationFrame || win$1.msRequestAnimationFrame || function(cb) {
  return setTimeout(cb, 16);
};
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function(id) {
  clearTimeout(id);
};
function extend() {
  var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];
        if (target === copy) {
          continue;
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
function checkStorageValue(value) {
  return ["true", "false"].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {
    }
  }
  return value;
}
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return "tns" + window.tnsId;
}
function getBody() {
  var doc = document, body = doc.body;
  if (!body) {
    body = doc.createElement("body");
    body.fake = true;
  }
  return body;
}
var docElement = document.documentElement;
function setFakeBody(body) {
  var docOverflow = "";
  if (body.fake) {
    docOverflow = docElement.style.overflow;
    body.style.background = "";
    body.style.overflow = docElement.style.overflow = "hidden";
    docElement.appendChild(body);
  }
  return docOverflow;
}
function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    docElement.offsetHeight;
  }
}
function calc() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
  body.appendChild(div);
  try {
    var str = "(10px * 10)", vals = ["calc" + str, "-moz-calc" + str, "-webkit-calc" + str], val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) {
        result = val.replace(str, "");
        break;
      }
    }
  } catch (e) {
  }
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  return result;
}
function percentageLayout() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";
  for (var i = 0; i < count; i++) {
    str += "<div></div>";
  }
  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
  return supported;
}
function mediaquerySupport() {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
  style.type = "text/css";
  div.className = "tns-mq-test";
  body.appendChild(style);
  body.appendChild(div);
  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }
  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  return position === "absolute";
}
function createStyleSheet(media, nonce) {
  var style = document.createElement("style");
  if (media) {
    style.setAttribute("media", media);
  }
  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
  document.querySelector("head").appendChild(style);
  return style.sheet ? style.sheet : style.styleSheet;
}
function addCSSRule(sheet, selector, rules, index) {
  "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
}
function removeCSSRule(sheet, index) {
  "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
}
function getCssRulesLength(sheet) {
  var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}
function getTouchDirection(angle, range) {
  var direction = false, gap = Math.abs(90 - Math.abs(angle));
  if (gap >= 90 - range) {
    direction = "horizontal";
  } else if (gap <= range) {
    direction = "vertical";
  }
  return direction;
}
function forEach(arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}
var classListSupport = "classList" in document.createElement("_");
var hasClass = classListSupport ? function(el, str) {
  return el.classList.contains(str);
} : function(el, str) {
  return el.className.indexOf(str) >= 0;
};
var addClass = classListSupport ? function(el, str) {
  if (!hasClass(el, str)) {
    el.classList.add(str);
  }
} : function(el, str) {
  if (!hasClass(el, str)) {
    el.className += " " + str;
  }
};
var removeClass = classListSupport ? function(el, str) {
  if (hasClass(el, str)) {
    el.classList.remove(str);
  }
} : function(el, str) {
  if (hasClass(el, str)) {
    el.className = el.className.replace(str, "");
  }
};
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}
function getAttr(el, attr) {
  return el.getAttribute(attr);
}
function isNodeList(el) {
  return typeof el.item !== "undefined";
}
function setAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  if (Object.prototype.toString.call(attrs) !== "[object Object]") {
    return;
  }
  for (var i = els.length; i--; ) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}
function removeAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;
  for (var i = els.length; i--; ) {
    for (var j = attrLength; j--; ) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}
function arrayFromNodeList(nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}
function hideElement(el, forceHide) {
  if (el.style.display !== "none") {
    el.style.display = "none";
  }
}
function showElement(el, forceHide) {
  if (el.style.display === "none") {
    el.style.display = "";
  }
}
function isVisible(el) {
  return window.getComputedStyle(el).display !== "none";
}
function whichProperty(props) {
  if (typeof props === "string") {
    var arr = [props], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = ["Webkit", "Moz", "ms", "O"];
    prefixes.forEach(function(prefix) {
      if (prefix !== "ms" || props === "transform") {
        arr.push(prefix + Props);
      }
    });
    props = arr;
  }
  var el = document.createElement("fakeelement");
  props.length;
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (el.style[prop] !== void 0) {
      return prop;
    }
  }
  return false;
}
function has3DTransforms(tf) {
  if (!tf) {
    return false;
  }
  if (!window.getComputedStyle) {
    return false;
  }
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
  cssTF += "transform";
  body.insertBefore(el, null);
  el.style[tf] = "translate3d(1px,1px,1px)";
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  body.fake ? resetFakeBody(body, docOverflow) : el.remove();
  return has3d !== void 0 && has3d.length > 0 && has3d !== "none";
}
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = "webkit" + propOut + "End";
  } else if (/^O/.test(propIn)) {
    endProp = "o" + propOut + "End";
  } else if (propIn) {
    endProp = propOut.toLowerCase() + "end";
  }
  return endProp;
}
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {
}
var passiveOption = supportsPassive ? { passive: true } : false;
function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}
function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}
function Events() {
  return {
    topics: {},
    on: function(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function(eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
}
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick;
  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
var tns = function(options) {
  options = extend({
    container: ".slider",
    mode: "carousel",
    axis: "horizontal",
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: "top",
    controlsText: ["prev", "next"],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: "top",
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: "top",
    autoplayTimeout: 5e3,
    autoplayDirection: "forward",
    autoplayText: ["start", "stop"],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: "tns-fadeIn",
    animateOut: "tns-fadeOut",
    animateNormal: "tns-normal",
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: ".tns-lazy-img",
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});
  var doc = document, win2 = window, KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
  if (localStorageAccess) {
    var browserInfo = navigator.userAgent;
    var uid = new Date();
    try {
      tnsStorage = win2.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) {
        tnsStorage = {};
      }
    } catch (e) {
      localStorageAccess = false;
    }
    if (localStorageAccess) {
      if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) {
        ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(item) {
          tnsStorage.removeItem(item);
        });
      }
      localStorage["tnsApp"] = browserInfo;
    }
  }
  var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess);
  var supportConsoleWarn = win2.console && typeof win2.console.warn === "function", tnsList = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], optionsElements = {};
  tnsList.forEach(function(item) {
    if (typeof options[item] === "string") {
      var str = options[item], el = doc.querySelector(str);
      optionsElements[item] = str;
      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn("Can't find", options[item]);
        }
        return;
      }
    }
  });
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn("No slides found in", options.container);
    }
    return;
  }
  var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
  if (responsive) {
    if (0 in responsive) {
      options = extend(options, responsive[0]);
      delete responsive[0];
    }
    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      val = typeof val === "number" ? { items: val } : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }
  function updateOptions(obj) {
    for (var key2 in obj) {
      if (!carousel) {
        if (key2 === "slideBy") {
          obj[key2] = "page";
        }
        if (key2 === "edgePadding") {
          obj[key2] = false;
        }
        if (key2 === "autoHeight") {
          obj[key2] = false;
        }
      }
      if (key2 === "responsive") {
        updateOptions(obj[key2]);
      }
    }
  }
  if (!carousel) {
    updateOptions(options);
  }
  if (!carousel) {
    options.axis = "horizontal";
    options.slideBy = "page";
    options.edgePadding = false;
    var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
  }
  var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
  if (responsive) {
    setBreakpointZone();
  }
  if (carousel) {
    container.className += " tns-vpfix";
  }
  var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", getIndexMax = function() {
    if (fixedWidth) {
      return function() {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function() {
        for (var i = 0; i < slideCountNew; i++) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function() {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  }(), index = getStartIndex(getOption("startIndex")), indexCached = index;
  getCurrentSlide();
  var indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
    "click": onControlsClick,
    "keydown": onControlsKeydown
  }, navEvents = {
    "click": onNavClick,
    "keydown": onNavKeydown
  }, hoverEvents = {
    "mouseover": mouseoverPause,
    "mouseout": mouseoutRestart
  }, visibilityEvent = { "visibilitychange": onVisibilityChange }, docmentKeydownEvent = { "keydown": onDocumentKeydown }, touchEvents = {
    "touchstart": onPanStart,
    "touchmove": onPanMove,
    "touchend": onPanEnd,
    "touchcancel": onPanEnd
  }, dragEvents = {
    "mousedown": onPanStart,
    "mousemove": onPanMove,
    "mouseup": onPanEnd,
    "mouseleave": onPanEnd
  }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
    "load": onImgLoaded,
    "error": onImgFailed
  }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false;
  if (hasControls) {
    var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
  }
  if (hasNav) {
    var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
  }
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", " animation</span>"], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
  }
  if (hasTouch || hasMouseDrag) {
    var initPosition = {}, lastPosition = {}, translateInit, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
      return a.x - b.x;
    } : function(a, b) {
      return a.y - b.y;
    };
  }
  if (!autoWidth) {
    resetVariblesWhenDisable(disable || freeze);
  }
  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = "translate";
    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? "3d(" : "3d(0px, ";
      transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
    } else {
      transformPrefix += horizontal ? "X(" : "Y(";
      transformPostfix = ")";
    }
  }
  if (carousel) {
    container.className = container.className.replace("tns-vpfix", "");
  }
  initStructure();
  initSheet();
  initSliderTransform();
  function resetVariblesWhenDisable(condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }
  function getCurrentSlide() {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) {
      tem += slideCount;
    }
    return tem % slideCount + 1;
  }
  function getStartIndex(ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }
  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }
    if (carousel) {
      i -= cloneCount;
    }
    while (i < 0) {
      i += slideCount;
    }
    return Math.floor(i % slideCount);
  }
  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(), result;
    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);
    if (!loop && carousel && index === indexMax) {
      result = pages - 1;
    }
    return result;
  }
  function getItemsMax() {
    if (autoWidth || fixedWidth && !viewportMax) {
      return slideCount - 1;
    } else {
      var str = fixedWidth ? "fixedWidth" : "items", arr = [];
      if (fixedWidth || options[str] < slideCount) {
        arr.push(options[str]);
      }
      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) {
            arr.push(tem);
          }
        }
      }
      if (!arr.length) {
        arr.push(0);
      }
      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }
  function getCloneCountForLoop() {
    var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
    result = Math.max(itemsMax, result);
    return hasOption("edgePadding") ? result + 1 : result;
  }
  function getWindowWidth() {
    return win2.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }
  function getInsertPosition(pos) {
    return pos === "top" ? "afterbegin" : "beforeend";
  }
  function getClientWidth(el) {
    if (el == null) {
      return;
    }
    var div = doc.createElement("div"), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }
  function getViewportWidth() {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }
  function hasOption(item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) {
            return true;
          }
        }
      }
      return false;
    }
  }
  function getOption(item, ww) {
    if (ww == null) {
      ww = windowWidth;
    }
    if (item === "items" && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
    } else {
      var result = options[item];
      if (responsive) {
        for (var bp in responsive) {
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) {
              result = responsive[bp][item];
            }
          }
        }
      }
      if (item === "slideBy" && result === "page") {
        result = getOption("items");
      }
      if (!carousel && (item === "slideBy" || item === "items")) {
        result = Math.floor(result);
      }
      return result;
    }
  }
  function getSlideMarginLeft(i) {
    return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
  }
  function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = "";
    if (edgePaddingTem !== void 0) {
      var gap = edgePaddingTem;
      if (gutterTem) {
        gap -= gutterTem;
      }
      str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
      str = "margin: 0 " + dir + ";";
    }
    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
      str += getTransitionDurationStyle(speedTem);
    }
    return str;
  }
  function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + "px";
    } else {
      return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
    }
  }
  function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
    var width;
    if (fixedWidthTem) {
      width = fixedWidthTem + gutterTem + "px";
    } else {
      if (!carousel) {
        itemsTem = Math.floor(itemsTem);
      }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
    }
    width = "width:" + width;
    return nested !== "inner" ? width + ";" : width + " !important;";
  }
  function getSlideGutterStyle(gutterTem) {
    var str = "";
    if (gutterTem !== false) {
      var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
      str = prop + dir + ": " + gutterTem + "px;";
    }
    return str;
  }
  function getCSSPrefix(name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) {
      prefix = "-" + prefix + "-";
    }
    return prefix;
  }
  function getTransitionDurationStyle(speed2) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed2 / 1e3 + "s;";
  }
  function getAnimationDurationStyle(speed2) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed2 / 1e3 + "s;";
  }
  function initStructure() {
    var classOuter = "tns-outer", classInner = "tns-inner";
    hasOption("gutter");
    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + "-ow";
    innerWrapper.id = slideId + "-iw";
    if (container.id === "") {
      container.id = slideId;
    }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
    newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
    if (autoWidth) {
      newContainerClasses += " tns-autowidth";
    }
    newContainerClasses += " tns-" + options.axis;
    container.className += newContainerClasses;
    if (carousel) {
      middleWrapper = doc.createElement("div");
      middleWrapper.id = slideId + "-mw";
      middleWrapper.className = "tns-ovh";
      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }
    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += " tns-ah";
    }
    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);
    forEach(slideItems, function(item, i) {
      addClass(item, "tns-item");
      if (!item.id) {
        item.id = slideId + "-item" + i;
      }
      if (!carousel && animateNormal) {
        addClass(item, animateNormal);
      }
      setAttrs(item, {
        "aria-hidden": "true",
        "tabindex": "-1"
      });
    });
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
      for (var j = cloneCount; j--; ) {
        var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
        addClass(cloneFirst, slideClonedClass);
        removeAttrs(cloneFirst, "id");
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          addClass(cloneLast, slideClonedClass);
          removeAttrs(cloneLast, "id");
          fragmentBefore.appendChild(cloneLast);
        }
      }
      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }
  function initSliderTransform() {
    if (hasOption("autoHeight") || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll("img");
      forEach(imgs, function(img) {
        var src = img.src;
        if (!lazyload) {
          if (src && src.indexOf("data:image") < 0) {
            img.src = "";
            addEvents(img, imgEvents);
            addClass(img, "loading");
            img.src = src;
          } else {
            imgLoaded(img);
          }
        }
      });
      raf(function() {
        imgsLoadedCheck(arrayFromNodeList(imgs), function() {
          imgsComplete = true;
        });
      });
      if (hasOption("autoHeight")) {
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
      }
      lazyload ? initSliderTransformStyleCheck() : raf(function() {
        imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
      });
    } else {
      if (carousel) {
        doContainerTransformSilent();
      }
      initTools();
      initEvents();
    }
  }
  function initSliderTransformStyleCheck() {
    if (autoWidth && slideCount > 1) {
      var num = loop ? index : slideCount - 1;
      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;
        Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
          stylesApplicationCheck();
        }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }
  function initSliderTransformCore() {
    if (!horizontal || autoWidth) {
      setSlidePositions();
      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) {
          freeze = getFreeze();
        }
        indexMax = getIndexMax();
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }
    if (carousel) {
      doContainerTransformSilent();
    }
    initTools();
    initEvents();
  }
  function initSheet() {
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + "%";
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win2.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
        addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
      } else if (carousel) {
        forEach(slideItems, function(slide, i2) {
          slide.style.marginLeft = getSlideMarginLeft(i2);
        });
      }
    }
    if (CSSMQ) {
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
        addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
      }
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet));
      if (carousel) {
        str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }
        addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
      }
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
      if (options.gutter) {
        str += getSlideGutterStyle(options.gutter);
      }
      if (!carousel) {
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }
        if (ANIMATIONDURATION) {
          str += getAnimationDurationStyle(speed);
        }
      }
      if (str) {
        addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
      }
    } else {
      update_carousel_transition_duration();
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
      if (gutter) {
        str += getSlideGutterStyle(gutter);
      }
      if (str) {
        addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
      }
    }
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        bp = parseInt(bp);
        var opts = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp);
        if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts) {
          middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
        }
        if ("edgePadding" in opts || "gutter" in opts) {
          innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
        }
        if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts || "items" in opts || fixedWidth && "gutter" in opts)) {
          containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
        }
        if (TRANSITIONDURATION && "speed" in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = "#" + slideId + "{" + containerStr + "}";
        }
        if ("fixedWidth" in opts || fixedWidth && "gutter" in opts || !carousel && "items" in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ("gutter" in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        if (!carousel && "speed" in opts) {
          if (TRANSITIONDURATION) {
            slideStr += getTransitionDurationStyle(speedBP);
          }
          if (ANIMATIONDURATION) {
            slideStr += getAnimationDurationStyle(speedBP);
          }
        }
        if (slideStr) {
          slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
        }
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
        if (str) {
          sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
        }
      }
    }
  }
  function initTools() {
    updateSlideStatus();
    outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
    liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current");
    if (hasAutoplay) {
      var txt = autoplay ? "stop" : "start";
      if (autoplayButton) {
        setAttrs(autoplayButton, { "data-action": txt });
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
        autoplayButton = outerWrapper.querySelector("[data-action]");
      }
      if (autoplayButton) {
        addEvents(autoplayButton, { "click": toggleAutoplay });
      }
      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) {
          addEvents(container, hoverEvents);
        }
        if (autoplayResetOnVisibility) {
          addEvents(container, visibilityEvent);
        }
      }
    }
    if (hasNav) {
      if (navContainer) {
        setAttrs(navContainer, { "aria-label": "Carousel Pagination" });
        navItems = navContainer.children;
        forEach(navItems, function(item, i2) {
          setAttrs(item, {
            "data-nav": i2,
            "tabindex": "-1",
            "aria-label": navStr + (i2 + 1),
            "aria-controls": slideId
          });
        });
      } else {
        var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
        navContainer = outerWrapper.querySelector(".tns-nav");
        navItems = navContainer.children;
      }
      updateNavVisibility();
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1e3 + "s";
        if (prefix) {
          str = "-" + prefix + "-" + str;
        }
        addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
      }
      setAttrs(navItems[navCurrentIndex], { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
      removeAttrs(navItems[navCurrentIndex], "tabindex");
      addClass(navItems[navCurrentIndex], navActiveClass);
      addEvents(navContainer, navEvents);
    }
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
        controlsContainer = outerWrapper.querySelector(".tns-controls");
      }
      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }
      if (options.controlsContainer) {
        setAttrs(controlsContainer, {
          "aria-label": "Carousel Navigation",
          "tabindex": "0"
        });
      }
      if (options.controlsContainer || options.prevButton && options.nextButton) {
        setAttrs([prevButton, nextButton], {
          "aria-controls": slideId,
          "tabindex": "-1"
        });
      }
      if (options.controlsContainer || options.prevButton && options.nextButton) {
        setAttrs(prevButton, { "data-controls": "prev" });
        setAttrs(nextButton, { "data-controls": "next" });
      }
      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);
      updateControlsStatus();
      if (controlsContainer) {
        addEvents(controlsContainer, controlsEvents);
      } else {
        addEvents(prevButton, controlsEvents);
        addEvents(nextButton, controlsEvents);
      }
    }
    disableUI();
  }
  function initEvents() {
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }
    if (touch) {
      addEvents(container, touchEvents, options.preventScrollOnTouch);
    }
    if (mouseDrag) {
      addEvents(container, dragEvents);
    }
    if (arrowKeys) {
      addEvents(doc, docmentKeydownEvent);
    }
    if (nested === "inner") {
      events.on("outerResized", function() {
        resizeTasks();
        events.emit("innerLoaded", info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      addEvents(win2, { "resize": onResize });
    }
    if (autoHeight) {
      if (nested === "outer") {
        events.on("innerLoaded", doAutoHeight);
      } else if (!disable) {
        doAutoHeight();
      }
    }
    doLazyLoad();
    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }
    events.on("indexChanged", additionalUpdates);
    if (nested === "inner") {
      events.emit("innerLoaded", info());
    }
    if (typeof onInit === "function") {
      onInit(info());
    }
    isOn = true;
  }
  function destroy() {
    sheet.disabled = true;
    if (sheet.ownerNode) {
      sheet.ownerNode.remove();
    }
    removeEvents(win2, { "resize": onResize });
    if (arrowKeys) {
      removeEvents(doc, docmentKeydownEvent);
    }
    if (controlsContainer) {
      removeEvents(controlsContainer, controlsEvents);
    }
    if (navContainer) {
      removeEvents(navContainer, navEvents);
    }
    removeEvents(container, hoverEvents);
    removeEvents(container, visibilityEvent);
    if (autoplayButton) {
      removeEvents(autoplayButton, { "click": toggleAutoplay });
    }
    if (autoplay) {
      clearInterval(autoplayTimer);
    }
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      removeEvents(container, eve);
    }
    if (touch) {
      removeEvents(container, touchEvents);
    }
    if (mouseDrag) {
      removeEvents(container, dragEvents);
    }
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
    tnsList.forEach(function(item, i) {
      var el = item === "container" ? outerWrapper : options[item];
      if (typeof el === "object" && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = panStart = rafIndex = getDist = touch = mouseDrag = null;
    for (var a in this) {
      if (a !== "rebuild") {
        this[a] = null;
      }
    }
    isOn = false;
  }
  function onResize(e) {
    raf(function() {
      resizeTasks(getEvent(e));
    });
  }
  function resizeTasks(e) {
    if (!isOn) {
      return;
    }
    if (nested === "outer") {
      events.emit("outerResized", info(e));
    }
    windowWidth = getWindowWidth();
    var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      if (bpChanged) {
        events.emit("newBreakpointStart", info(e));
      }
    }
    var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
    if (bpChanged) {
      var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
      if (!CSSMQ) {
        var gutterTem = gutter, edgePaddingTem = edgePadding;
      }
    }
    arrowKeys = getOption("arrowKeys");
    controls = getOption("controls");
    nav = getOption("nav");
    touch = getOption("touch");
    center = getOption("center");
    mouseDrag = getOption("mouseDrag");
    autoplay = getOption("autoplay");
    autoplayHoverPause = getOption("autoplayHoverPause");
    autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
    if (bpChanged) {
      disable = getOption("disable");
      fixedWidth = getOption("fixedWidth");
      speed = getOption("speed");
      autoHeight = getOption("autoHeight");
      controlsText = getOption("controlsText");
      autoplayText = getOption("autoplayText");
      autoplayTimeout = getOption("autoplayTimeout");
      if (!CSSMQ) {
        edgePadding = getOption("edgePadding");
        gutter = getOption("gutter");
      }
    }
    resetVariblesWhenDisable(disable);
    viewport = getViewportWidth();
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight();
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary();
      indexMax = getIndexMax();
    }
    if (bpChanged || fixedWidth) {
      items = getOption("items");
      slideBy = getOption("slideBy");
      itemsChanged = items !== itemsTem;
      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) {
          indexMax = getIndexMax();
        }
        updateIndex();
      }
    }
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider();
        }
      }
    }
    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze();
      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }
    resetVariblesWhenDisable(disable || freeze);
    if (!autoplay) {
      autoplayHoverPause = autoplayResetOnVisibility = false;
    }
    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) {
            showElement(prevButton);
          }
          if (nextButton) {
            showElement(nextButton);
          }
        }
      } else {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) {
            hideElement(prevButton);
          }
          if (nextButton) {
            hideElement(nextButton);
          }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        showElement(navContainer);
        updateNavVisibility();
      } else {
        hideElement(navContainer);
      }
    }
    if (touch !== touchTem) {
      touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) {
          showElement(autoplayButton);
        }
        if (!animating && !autoplayUserPaused) {
          startAutoplay();
        }
      } else {
        if (autoplayButton) {
          hideElement(autoplayButton);
        }
        if (animating) {
          stopAutoplay();
        }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
    }
    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) {
        needContainerTransform = true;
      }
      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) {
          innerWrapper.style.height = "";
        }
      }
      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }
      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) {
        needContainerTransform = true;
      }
    }
    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }
    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit("indexChanged", info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) {
        additionalUpdates();
      }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }
    if (itemsChanged && !carousel) {
      updateGallerySlidePositions();
    }
    if (!disable && !freeze) {
      if (bpChanged && !CSSMQ) {
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }
        if (horizontal) {
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);
          removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
        }
      }
      if (autoHeight) {
        doAutoHeight();
      }
      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }
    if (bpChanged) {
      events.emit("newBreakpointEnd", info(e));
    }
  }
  function getFreeze() {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return slideCount <= a;
    }
    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }
    return width <= vp;
  }
  function setBreakpointZone() {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp);
      if (windowWidth >= bp) {
        breakpointZone = bp;
      }
    }
  }
  var updateIndex = function() {
    return loop ? carousel ? function() {
      var leftEdge = indexMin, rightEdge = indexMax;
      leftEdge += slideBy;
      rightEdge -= slideBy;
      if (edgePadding) {
        leftEdge += 1;
        rightEdge -= 1;
      } else if (fixedWidth) {
        if ((viewport + gutter) % (fixedWidth + gutter)) {
          rightEdge -= 1;
        }
      }
      if (cloneCount) {
        if (index > rightEdge) {
          index -= slideCount;
        } else if (index < leftEdge) {
          index += slideCount;
        }
      }
    } : function() {
      if (index > indexMax) {
        while (index >= indexMin + slideCount) {
          index -= slideCount;
        }
      } else if (index < indexMin) {
        while (index <= indexMax - slideCount) {
          index += slideCount;
        }
      }
    } : function() {
      index = Math.max(indexMin, Math.min(indexMax, index));
    };
  }();
  function disableUI() {
    if (!autoplay && autoplayButton) {
      hideElement(autoplayButton);
    }
    if (!nav && navContainer) {
      hideElement(navContainer);
    }
    if (!controls) {
      if (controlsContainer) {
        hideElement(controlsContainer);
      } else {
        if (prevButton) {
          hideElement(prevButton);
        }
        if (nextButton) {
          hideElement(nextButton);
        }
      }
    }
  }
  function enableUI() {
    if (autoplay && autoplayButton) {
      showElement(autoplayButton);
    }
    if (nav && navContainer) {
      showElement(navContainer);
    }
    if (controls) {
      if (controlsContainer) {
        showElement(controlsContainer);
      } else {
        if (prevButton) {
          showElement(prevButton);
        }
        if (nextButton) {
          showElement(nextButton);
        }
      }
    }
  }
  function freezeSlider() {
    if (frozen) {
      return;
    }
    if (edgePadding) {
      innerWrapper.style.margin = "0px";
    }
    if (cloneCount) {
      var str = "tns-transparent";
      for (var i = cloneCount; i--; ) {
        if (carousel) {
          addClass(slideItems[i], str);
        }
        addClass(slideItems[slideCountNew - i - 1], str);
      }
    }
    disableUI();
    frozen = true;
  }
  function unfreezeSlider() {
    if (!frozen) {
      return;
    }
    if (edgePadding && CSSMQ) {
      innerWrapper.style.margin = "";
    }
    if (cloneCount) {
      var str = "tns-transparent";
      for (var i = cloneCount; i--; ) {
        if (carousel) {
          removeClass(slideItems[i], str);
        }
        removeClass(slideItems[slideCountNew - i - 1], str);
      }
    }
    enableUI();
    frozen = false;
  }
  function disableSlider() {
    if (disabled) {
      return;
    }
    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), "");
    removeAttrs(container, ["style"]);
    if (loop) {
      for (var j = cloneCount; j--; ) {
        if (carousel) {
          hideElement(slideItems[j]);
        }
        hideElement(slideItems[slideCountNew - j - 1]);
      }
    }
    if (!horizontal || !carousel) {
      removeAttrs(innerWrapper, ["style"]);
    }
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        removeAttrs(item, ["style"]);
        removeClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }
    disableUI();
    disabled = true;
  }
  function enableSlider() {
    if (!disabled) {
      return;
    }
    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();
    if (loop) {
      for (var j = cloneCount; j--; ) {
        if (carousel) {
          showElement(slideItems[j]);
        }
        showElement(slideItems[slideCountNew - j - 1]);
      }
    }
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + "%";
        addClass(item, classN);
      }
    }
    enableUI();
    disabled = false;
  }
  function updateLiveRegion() {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) {
      liveregionCurrent.innerHTML = str;
    }
  }
  function getLiveRegionStr() {
    var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
    return start === end ? start + "" : start + " to " + end;
  }
  function getVisibleSlideRange(val2) {
    if (val2 == null) {
      val2 = getContainerTransformValue();
    }
    var start = index, end, rangestart, rangeend;
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = -(parseFloat(val2) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }
          if (rangeend - point >= 0.5) {
            end = i;
          }
        }
      });
    } else {
      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart / cell);
          end = Math.ceil(rangeend / cell - 1);
        } else {
          end = start + Math.ceil(viewport / cell) - 1;
        }
      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }
          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }
          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }
      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }
    return [start, end];
  }
  function doLazyLoad() {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);
      getImageArray.apply(null, arg).forEach(function(img) {
        if (!hasClass(img, imgCompleteClass)) {
          var eve = {};
          eve[TRANSITIONEND] = function(e) {
            e.stopPropagation();
          };
          addEvents(img, eve);
          addEvents(img, imgEvents);
          img.src = getAttr(img, "data-src");
          var srcset = getAttr(img, "data-srcset");
          if (srcset) {
            img.srcset = srcset;
          }
          addClass(img, "loading");
        }
      });
    }
  }
  function onImgLoaded(e) {
    imgLoaded(getTarget(e));
  }
  function onImgFailed(e) {
    imgFailed(getTarget(e));
  }
  function imgLoaded(img) {
    addClass(img, "loaded");
    imgCompleted(img);
  }
  function imgFailed(img) {
    addClass(img, "failed");
    imgCompleted(img);
  }
  function imgCompleted(img) {
    addClass(img, imgCompleteClass);
    removeClass(img, "loading");
    removeEvents(img, imgEvents);
  }
  function getImageArray(start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) {
      imgSelector = "img";
    }
    while (start <= end) {
      forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
        imgs.push(img);
      });
      start++;
    }
    return imgs;
  }
  function doAutoHeight() {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    raf(function() {
      imgsLoadedCheck(imgs, updateInnerWrapperHeight);
    });
  }
  function imgsLoadedCheck(imgs, cb) {
    if (imgsComplete) {
      return cb();
    }
    imgs.forEach(function(img, index2) {
      if (!lazyload && img.complete) {
        imgCompleted(img);
      }
      if (hasClass(img, imgCompleteClass)) {
        imgs.splice(index2, 1);
      }
    });
    if (!imgs.length) {
      return cb();
    }
    raf(function() {
      imgsLoadedCheck(imgs, cb);
    });
  }
  function additionalUpdates() {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }
  function update_carousel_transition_duration() {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1e3 + "s";
    }
  }
  function getMaxSlideHeight(slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    return Math.max.apply(null, heights);
  }
  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + "px";
    }
  }
  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
    forEach(slideItems, function(item, i) {
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      }
      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  }
  function updateSlideStatus() {
    var range = getVisibleSlideRange(), start = range[0], end = range[1];
    forEach(slideItems, function(item, i) {
      if (i >= start && i <= end) {
        if (hasAttr(item, "aria-hidden")) {
          removeAttrs(item, ["aria-hidden", "tabindex"]);
          addClass(item, slideActiveClass);
        }
      } else {
        if (!hasAttr(item, "aria-hidden")) {
          setAttrs(item, {
            "aria-hidden": "true",
            "tabindex": "-1"
          });
          removeClass(item, slideActiveClass);
        }
      }
    });
  }
  function updateGallerySlidePositions() {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--; ) {
      var item = slideItems[i];
      if (i >= index && i < l) {
        addClass(item, "tns-moving");
        item.style.left = (i - index) * 100 / items + "%";
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = "";
        addClass(item, animateNormal);
        removeClass(item, animateIn);
      }
      removeClass(item, animateOut);
    }
    setTimeout(function() {
      forEach(slideItems, function(el) {
        removeClass(el, "tns-moving");
      });
    }, 300);
  }
  function updateNavStatus() {
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;
      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
        setAttrs(navPrev, {
          "tabindex": "-1",
          "aria-label": navStr + (navCurrentIndexCached + 1)
        });
        removeClass(navPrev, navActiveClass);
        setAttrs(navCurrent, { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
        removeAttrs(navCurrent, "tabindex");
        addClass(navCurrent, navActiveClass);
        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }
  function getLowerCaseNodeName(el) {
    return el.nodeName.toLowerCase();
  }
  function isButton(el) {
    return getLowerCaseNodeName(el) === "button";
  }
  function isAriaDisabled(el) {
    return el.getAttribute("aria-disabled") === "true";
  }
  function disEnableElement(isButton2, el, val2) {
    if (isButton2) {
      el.disabled = val2;
    } else {
      el.setAttribute("aria-disabled", val2.toString());
    }
  }
  function updateControlsStatus() {
    if (!controls || rewind || loop) {
      return;
    }
    var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }
  function resetDuration(el, str) {
    if (TRANSITIONDURATION) {
      el.style[TRANSITIONDURATION] = str;
    }
  }
  function getSliderWidth() {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }
  function getCenterGap(num) {
    if (num == null) {
      num = index;
    }
    var gap = edgePadding ? gutter : 0;
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
  }
  function getRightBoundary() {
    var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
    if (center && !loop) {
      result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) {
      result = 0;
    }
    return result;
  }
  function getContainerTransformValue(num) {
    if (num == null) {
      num = index;
    }
    var val2;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val2 = -(fixedWidth + gutter) * num;
        if (center) {
          val2 += getCenterGap();
        }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) {
          num -= getCenterGap();
        }
        val2 = -num * 100 / denominator;
      }
    } else {
      val2 = -slidePositions[num];
      if (center && autoWidth) {
        val2 += getCenterGap();
      }
    }
    if (hasRightDeadZone) {
      val2 = Math.max(val2, rightBoundary);
    }
    val2 += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
    return val2;
  }
  function doContainerTransformSilent(val2) {
    resetDuration(container, "0s");
    doContainerTransform(val2);
  }
  function doContainerTransform(val2) {
    if (val2 == null) {
      val2 = getContainerTransformValue();
    }
    container.style[transformAttr] = transformPrefix + val2 + transformPostfix;
  }
  function animateSlide(number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) {
      l = Math.min(l, slideCountNew);
    }
    for (var i = number; i < l; i++) {
      var item = slideItems[i];
      if (!isOut) {
        item.style.left = (i - index) * 100 / items + "%";
      }
      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1e3 + "s";
      }
      removeClass(item, classOut);
      addClass(item, classIn);
      if (isOut) {
        slideItemsOut.push(item);
      }
    }
  }
  var transformCore = function() {
    return carousel ? function() {
      resetDuration(container, "");
      if (TRANSITIONDURATION || !speed) {
        doContainerTransform();
        if (!speed || !isVisible(container)) {
          onTransitionEnd();
        }
      } else {
        jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
      }
      if (!horizontal) {
        updateContentWrapperHeight();
      }
    } : function() {
      slideItemsOut = [];
      var eve = {};
      eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
      removeEvents(slideItems[indexCached], eve);
      addEvents(slideItems[index], eve);
      animateSlide(indexCached, animateIn, animateOut, true);
      animateSlide(index, animateNormal, animateIn);
      if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
        onTransitionEnd();
      }
    };
  }();
  function render(e, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    }
    if (index !== indexCached || sliderMoved) {
      events.emit("indexChanged", info());
      events.emit("transitionStart", info());
      if (autoHeight) {
        doAutoHeight();
      }
      if (animating && e && ["click", "keydown"].indexOf(e.type) >= 0) {
        stopAutoplay();
      }
      running = true;
      transformCore();
    }
  }
  function strTrans(str) {
    return str.toLowerCase().replace(/-/g, "");
  }
  function onTransitionEnd(event) {
    if (carousel || running) {
      events.emit("transitionEnd", info(event));
      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          item.style.left = "";
          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = "";
            item.style[TRANSITIONDELAY] = "";
          }
          removeClass(item, animateOut);
          addClass(item, animateNormal);
        }
      }
      if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit("indexChanged", info());
            doContainerTransformSilent();
          }
        }
        if (nested === "inner") {
          events.emit("innerLoaded", info());
        }
        running = false;
        indexCached = index;
      }
    }
  }
  function goTo(targetIndex, e) {
    if (freeze) {
      return;
    }
    if (targetIndex === "prev") {
      onControlsClick(e, -1);
    } else if (targetIndex === "next") {
      onControlsClick(e, 1);
    } else {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }
      var absIndex = getAbsIndex(), indexGap = 0;
      if (targetIndex === "first") {
        indexGap = -absIndex;
      } else if (targetIndex === "last") {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== "number") {
          targetIndex = parseInt(targetIndex);
        }
        if (!isNaN(targetIndex)) {
          if (!e) {
            targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
          }
          indexGap = targetIndex - absIndex;
        }
      }
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }
      index += indexGap;
      if (carousel && loop) {
        if (index < indexMin) {
          index += slideCount;
        }
        if (index > indexMax) {
          index -= slideCount;
        }
      }
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }
    }
  }
  function onControlsClick(e, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    var passEventObject;
    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);
      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
        target = target.parentNode;
      }
      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }
    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo("last", e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo("first", e);
        return;
      }
    }
    if (dir) {
      index += slideBy * dir;
      if (autoWidth) {
        index = Math.floor(index);
      }
      render(passEventObject || e && e.type === "keydown" ? e : null);
    }
  }
  function onNavClick(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    e = getEvent(e);
    var target = getTarget(e), navIndex;
    while (target !== navContainer && !hasAttr(target, "data-nav")) {
      target = target.parentNode;
    }
    if (hasAttr(target, "data-nav")) {
      var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);
      if (navCurrentIndex === navIndex) {
        if (animating) {
          stopAutoplay();
        }
        navClicked = -1;
      }
    }
  }
  function setAutoplayTimer() {
    autoplayTimer = setInterval(function() {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);
    animating = true;
  }
  function stopAutoplayTimer() {
    clearInterval(autoplayTimer);
    animating = false;
  }
  function updateAutoplayButton(action, txt) {
    setAttrs(autoplayButton, { "data-action": action });
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }
  function startAutoplay() {
    setAutoplayTimer();
    if (autoplayButton) {
      updateAutoplayButton("stop", autoplayText[1]);
    }
  }
  function stopAutoplay() {
    stopAutoplayTimer();
    if (autoplayButton) {
      updateAutoplayButton("start", autoplayText[0]);
    }
  }
  function play() {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }
  function toggleAutoplay() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function onVisibilityChange() {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }
  function mouseoverPause() {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }
  function mouseoutRestart() {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }
  function onDocumentKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }
  function onControlsKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }
  function setFocus(el) {
    el.focus();
  }
  function onNavKeydown(e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, "data-nav")) {
      return;
    }
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) {
          setFocus(navItems[navIndex - 1]);
        }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) {
          setFocus(navItems[navIndex + 1]);
        }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }
  function getEvent(e) {
    e = e || win2.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget(e) {
    return e.target || win2.event.srcElement;
  }
  function isTouchEvent(e) {
    return e.type.indexOf("touch") >= 0;
  }
  function preventDefaultBehavior(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
  function getMoveDirectionExpected() {
    return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }
  function onPanStart(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    if (autoplay && animating) {
      stopAutoplayTimer();
    }
    panStart = true;
    if (rafIndex) {
      caf(rafIndex);
      rafIndex = null;
    }
    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
    if (!isTouchEvent(e) && ["img", "a"].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }
    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
      resetDuration(container, "0s");
    }
  }
  function onPanMove(e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      if (carousel) {
        if (!rafIndex) {
          rafIndex = raf(function() {
            panUpdate(e);
          });
        }
      } else {
        if (moveDirectionExpected === "?") {
          moveDirectionExpected = getMoveDirectionExpected();
        }
        if (moveDirectionExpected) {
          preventScroll = true;
        }
      }
      if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }
  function panUpdate(e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) {
      rafIndex = raf(function() {
        panUpdate(e);
      });
    }
    if (moveDirectionExpected === "?") {
      moveDirectionExpected = getMoveDirectionExpected();
    }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) {
        preventScroll = true;
      }
      try {
        if (e.type) {
          events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
        }
      } catch (err) {
      }
      var x = translateInit, dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += "px";
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
        x += percentageX;
        x += "%";
      }
      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }
  function onPanEnd(e) {
    if (panStart) {
      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }
      if (carousel) {
        resetDuration(container, "");
      }
      panStart = false;
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);
      if (Math.abs(dist)) {
        if (!isTouchEvent(e)) {
          var target = getTarget(e);
          addEvents(target, { "click": function preventClick(e2) {
            preventDefaultBehavior(e2);
            removeEvents(target, { "click": preventClick });
          } });
        }
        if (carousel) {
          rafIndex = raf(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }
                  i++;
                }
              }
            }
            render(e, dist);
            events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }
    if (options.preventScrollOnTouch === "auto") {
      preventScroll = false;
    }
    if (swipeAngle) {
      moveDirectionExpected = "?";
    }
    if (autoplay && !animating) {
      setAutoplayTimer();
    }
  }
  function updateContentWrapperHeight() {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
  }
  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }
  function updateNavVisibility() {
    if (!nav || navAsThumbnails) {
      return;
    }
    if (pages !== pagesCached) {
      var min = pagesCached, max = pages, fn = showElement;
      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = hideElement;
      }
      while (min < max) {
        fn(navItems[min]);
        min++;
      }
      pagesCached = pages;
    }
  }
  function info(e) {
    return {
      container,
      slideItems,
      navContainer,
      navItems,
      controlsContainer,
      hasControls,
      prevButton,
      nextButton,
      items,
      slideBy,
      cloneCount,
      slideCount,
      slideCountNew,
      index,
      indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex,
      navCurrentIndexCached,
      pages,
      pagesCached,
      sheet,
      isOn,
      event: e || {}
    };
  }
  return {
    version: "2.9.4",
    getInfo: info,
    events,
    goTo,
    play,
    pause,
    isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy,
    rebuild: function() {
      return tns(extend(options, optionsElements));
    }
  };
};
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
const getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
const ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
const quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
const uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
const emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
class ZodString extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
const getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}
class ZodMap extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
const custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
const NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});
/**
  * vee-validate v4.11.0
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
const isObject = (obj) => obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);
function isIndex(value) {
  return Number(value) >= 0;
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key])) {
      if (!target[key]) {
        target[key] = {};
      }
      merge(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
  return target;
}
function normalizeFormPath(path) {
  const pathArr = path.split(".");
  if (!pathArr.length) {
    return "";
  }
  let fullPath = String(pathArr[0]);
  for (let i = 1; i < pathArr.length; i++) {
    if (isIndex(pathArr[i])) {
      fullPath += `[${pathArr[i]}]`;
      continue;
    }
    fullPath += `.${pathArr[i]}`;
  }
  return fullPath;
}
function toTypedSchema(zodSchema, opts) {
  const schema = {
    __type: "VVTypedSchema",
    async parse(value) {
      const result = await zodSchema.safeParseAsync(value, opts);
      if (result.success) {
        return {
          value: result.data,
          errors: []
        };
      }
      const errors = {};
      processIssues(result.error.issues, errors);
      return {
        errors: Object.values(errors)
      };
    },
    cast(values) {
      try {
        return zodSchema.parse(values);
      } catch (_a) {
        const defaults = getDefaults(zodSchema);
        if (isObject(defaults) && isObject(values)) {
          return merge(defaults, values);
        }
        return values;
      }
    }
  };
  return schema;
}
function processIssues(issues, errors) {
  issues.forEach((issue) => {
    const path = normalizeFormPath(issue.path.join("."));
    if (issue.code === "invalid_union") {
      processIssues(issue.unionErrors.flatMap((ue) => ue.issues), errors);
      if (!path) {
        return;
      }
    }
    if (!errors[path]) {
      errors[path] = { errors: [], path };
    }
    errors[path].errors.push(issue.message);
  });
}
function getDefaults(schema) {
  if (!(schema instanceof ZodObject)) {
    return void 0;
  }
  return Object.fromEntries(Object.entries(schema.shape).map(([key, value]) => {
    if (value instanceof ZodDefault) {
      return [key, value._def.defaultValue()];
    }
    if (value instanceof ZodObject) {
      return [key, getDefaults(value)];
    }
    return [key, void 0];
  }));
}
const toFormValidator = toTypedSchema;
var signup_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "signup-nav" };
const _hoisted_2 = { class: "signup-nav-inner" };
const _hoisted_3 = {
  id: "vuero-signup",
  class: "signup-wrapper"
};
const _hoisted_4 = { class: "steps-container" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Paso 1", -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:shield"
  })
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Imagen Perfil", -1);
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Registro", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = ["value"];
const _hoisted_15 = { class: "hero is-fullheight" };
const _hoisted_16 = { class: "hero-body" };
const _hoisted_17 = { class: "container" };
const _hoisted_18 = { class: "column is-4 is-offset-1" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "main-signup-title",
  class: "title is-3 signup-title"
}, " Bienvenido a My Virtual Trainer ", -1);
const _hoisted_20 = { class: "signup-card" };
const _hoisted_21 = { class: "columns is-multiline" };
const _hoisted_22 = { class: "column is-6" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("PRIMER NOMBRE");
const _hoisted_24 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode("PRIMER APELLIDO");
const _hoisted_27 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode("USUARIO");
const _hoisted_30 = { class: "column is-12" };
const _hoisted_31 = { class: "signup-type" };
const _hoisted_32 = { class: "box-wrap" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "signup-box" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-coffee-cup"
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Deportista")
  ])
], -1);
const _hoisted_34 = { class: "box-wrap" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "signup-box" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-crown-alt-1"
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Entrenador")
  ])
], -1);
const _hoisted_36 = { class: "control is-agree" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("a", { rel: "noopener noreferrer" }, " Terminos y Condiciones ", -1);
const _hoisted_38 = [
  _hoisted_37
];
const _hoisted_39 = { class: "control is-agree" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("a", { rel: "noopener noreferrer" }, " Terminos y Condiciones Adicionales ", -1);
const _hoisted_41 = [
  _hoisted_40
];
const _hoisted_42 = { class: "control is-agree" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("a", { rel: "noopener noreferrer" }, " Politica de Privacidad ", -1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = { class: "button-wrap has-help" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" Continuar ");
const _hoisted_47 = /* @__PURE__ */ createTextVNode(" o ");
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" INGRESA ");
const _hoisted_49 = /* @__PURE__ */ createTextVNode(" con tu cuenta. ");
const _hoisted_50 = { class: "signup-profile-wrapper" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, " Agregar imagen de Perfil ", -1);
const _hoisted_52 = { class: "picture-selector" };
const _hoisted_53 = { class: "image-container" };
const _hoisted_54 = ["src"];
const _hoisted_55 = {
  key: 1,
  src: _imports_1,
  alt: ""
};
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_57 = [
  _hoisted_56
];
const _hoisted_58 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_59 = /* @__PURE__ */ createTextVNode(" Continuar ");
const _hoisted_60 = { class: "column is-4 is-offset-4 username-form" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, " Nombre de Usuario ", -1);
const _hoisted_62 = { class: "columns is-multiline" };
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode("Correo Electronico");
const _hoisted_65 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_66 = { class: "column is-12" };
const _hoisted_67 = /* @__PURE__ */ createTextVNode("Contrase\xF1a");
const _hoisted_68 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_69 = { class: "column is-12" };
const _hoisted_70 = /* @__PURE__ */ createTextVNode("Confirmar Contrase\xF1a");
const _hoisted_71 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_72 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_73 = /* @__PURE__ */ createTextVNode(" Finalizar ");
const _hoisted_74 = { class: "has-text-centered" };
const _hoisted_75 = { class: "upload-demo-wrap" };
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_77 = { class: "file" };
const _hoisted_78 = { class: "file-label" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Escoge un archivo\u2026 ")
], -1);
const _hoisted_80 = /* @__PURE__ */ createTextVNode(" Confirmar ");
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("iframe", {
  src: "https://drive.google.com/file/d/1EB6NDN65pBubMpcFa9ZT2t56Mg4yv8lF/preview",
  title: "Terminos y Condiciones",
  width: "770",
  height: "400",
  allow: "autoplay"
}, null, -1);
const _hoisted_82 = /* @__PURE__ */ createTextVNode(" Estoy de Acuerdo ");
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("iframe", {
  src: "https://drive.google.com/file/d/1Xrw3OSqvSTtSsTuLl0-Og-Nhmg2zIka8/preview",
  title: "Terminos Entrenador",
  width: "770",
  height: "400",
  allow: "autoplay"
}, null, -1);
const _hoisted_84 = /* @__PURE__ */ createTextVNode(" Estoy de Acuerdo ");
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("iframe", {
  src: "https://drive.google.com/file/d/1OpZgDoYoDGSWsEvMiRJBPsmZIQVRJvRw/preview",
  title: "Politica de Privacidad",
  width: "770",
  height: "400",
  allow: "autoplay"
}, null, -1);
const _hoisted_86 = /* @__PURE__ */ createTextVNode(" Estoy de Acuerdo ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let slider;
    const sliderElement = ref();
    const router = useRouter();
    const notif = useNotyf();
    const step = ref(0);
    const selectedAvatar = ref(2);
    const isLoading = ref(false);
    const terminos = ref(false);
    const terminosEntrenador = ref(false);
    const politica = ref(false);
    const modalTerminosOpen = ref(false);
    const modalEntrenadorOpen = ref(false);
    const modalPoliticaOpen = ref(false);
    const uploadModalOpen = ref(false);
    const mensajeNombre = ref("");
    const mensajeApellido = ref("");
    const { t } = useI18n();
    const validationSchema = toFormValidator(
      z.object({
        email: z.string({
          required_error: t("auth.errors.email.required")
        }).email(t("auth.errors.email.format")),
        password: z.string({
          required_error: t("auth.errors.password.required")
        }).min(8, t("auth.errors.password.length")),
        passwordCheck: z.string({
          required_error: t("auth.errors.passwordCheck.required")
        })
      }).refine((data) => data.password === data.passwordCheck, {
        message: t("auth.errors.passwordCheck.match"),
        path: ["passwordCheck"]
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        email: "",
        password: "",
        passwordCheck: ""
      }
    });
    const dataUserSignUp = reactive({
      firstName: "",
      lastName: "",
      email: "",
      perfil: "Deportista",
      nameUser: "",
      passwd: "",
      passwordCheck: "",
      picture: ""
    });
    let imagen = reactive({
      accept: false,
      message: "",
      dataUrl: ""
    });
    const previewImage = async (event) => {
      const prevImagen = await preview(event);
      dataUserSignUp.picture = prevImagen.file;
      if (prevImagen.accept) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
          imagen.dataUrl = e.target.result;
          imagen.message = prevImagen.message;
          imagen.accept = prevImagen.accept;
        };
      } else {
        imagen.accept = false;
        imagen.message = "";
        imagen.dataUrl = "";
        notif.error("La extension de archivo o tama\xF1o no cumple con los requisitos");
      }
    };
    const onAvatarChanged = (info) => {
      const indexPrev = info.indexCached;
      const indexCurrent = info.index;
      info.slideItems[indexPrev].classList.remove("active");
      info.slideItems[indexCurrent].classList.add("active");
      if (info.displayIndex) {
        selectedAvatar.value = info.displayIndex - 1;
      }
    };
    const getRandomNumber = async (max) => {
      return Math.floor(Math.random() * max);
    };
    const verificarEstado = computed(() => {
      let disabled = true;
      if (dataUserSignUp.perfil == "Deportista") {
        if (dataUserSignUp.firstName != "" && dataUserSignUp.lastName != "" && terminos.value === true && politica.value === true) {
          disabled = false;
        } else {
          disabled = true;
        }
      } else if (dataUserSignUp.perfil == "Entrenador") {
        if (dataUserSignUp.firstName != "" && dataUserSignUp.lastName != "" && terminos.value === true && terminosEntrenador.value === true && politica.value === true) {
          disabled = false;
        } else {
          disabled = true;
        }
      }
      return disabled;
    });
    const confirmarTerminos = () => {
      terminos.value = true;
      modalTerminosOpen.value = false;
    };
    const confirmarTerminosE = () => {
      terminosEntrenador.value = true;
      modalEntrenadorOpen.value = false;
    };
    const confirmarPolitica = () => {
      politica.value = true;
      modalPoliticaOpen.value = false;
    };
    const validarNombre = () => {
      let estado = false;
      if (dataUserSignUp.firstName == "") {
        mensajeNombre.value = '"Nombre requerido"';
        estado = true;
      }
      return estado;
    };
    const validarApellido = () => {
      let estado = false;
      if (dataUserSignUp.lastName == "") {
        mensajeApellido.value = '"Apellido requerido"';
        estado = true;
      }
      return estado;
    };
    const returnNombre = () => {
      dataUserSignUp.firstName = dataUserSignUp.firstName.replace(/[0-9]/g, "");
      return dataUserSignUp.firstName;
    };
    const returnApellido = () => {
      dataUserSignUp.lastName = dataUserSignUp.lastName.replace(/[0-9]/gi, "");
      return dataUserSignUp.lastName;
    };
    const onSignup = handleSubmit(async () => {
      CREARUSER(dataUserSignUp);
      if (!isLoading.value) {
        step.value++;
        isLoading.value = true;
        await sleep(2e3);
        notif.dismissAll();
        notif.success("Welcome");
        router.push({ name: "auth-login" });
        isLoading.value = false;
      }
    });
    useHead({
      title: "Auth Signup"
    });
    onBeforeMount(async () => {
      const imagenes = await getImagenesSignUp();
      const numero = await getRandomNumber(Object.keys(imagenes).length);
      const ancho = window.innerWidth;
      if (ancho <= 450) {
        signUpImagen("signUpMovil", imagenes[numero], true);
      } else {
        signUpImagen("signUp", imagenes[numero]);
      }
    });
    onMounted(() => {
      if (sliderElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: false,
          nav: false,
          mouseDrag: true,
          startIndex: 0,
          fixedWidth: 100,
          gutter: 40,
          slideBy: 1,
          swipeAngle: false,
          center: false,
          loop: true,
          edgePadding: 325
        });
        slider.events.on("indexChanged", onAvatarChanged);
        onAvatarChanged(slider.getInfo());
      }
    });
    onUnmounted(() => {
      if (slider) {
        slider.events.off("indexChanged", onAvatarChanged);
        slider.destroy();
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VInput = _sfc_main$1;
      const _component_VLabel = _sfc_main$2;
      const _component_VControl = __unplugin_components_0$1;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VModal = _sfc_main$6;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_RouterLink, {
                to: { name: "index" },
                class: "logo"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AnimatedLogo, {
                    width: "36px",
                    height: "36px"
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", {
              class: normalizeClass(["signup-steps", [step.value === 0 && "is-hidden"]])
            }, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-icon is-active", [step.value >= 1 && "is-active", step.value < 1 && "is-inactive"]]),
                  onKeydown: _cache[0] || (_cache[0] = ($event) => step.value = 0),
                  onClick: _cache[1] || (_cache[1] = ($event) => step.value = 0)
                }, _hoisted_7, 34),
                createBaseVNode("div", {
                  class: normalizeClass(["step-icon", [step.value >= 2 && "is-active", step.value < 2 && "is-inactive"]]),
                  onKeydown: _cache[2] || (_cache[2] = ($event) => step.value = 1),
                  onClick: _cache[3] || (_cache[3] = ($event) => step.value = 1)
                }, _hoisted_10, 34),
                createBaseVNode("div", {
                  class: normalizeClass(["step-icon", [step.value >= 3 && "is-active", step.value < 3 && "is-inactive"]]),
                  onKeydown: _cache[4] || (_cache[4] = ($event) => step.value = 2),
                  onClick: _cache[5] || (_cache[5] = ($event) => step.value = 2)
                }, _hoisted_13, 34),
                createBaseVNode("progress", {
                  class: "progress",
                  value: step.value - 1,
                  max: 2
                }, "25%", 8, _hoisted_14)
              ])
            ], 2),
            createBaseVNode("img", {
              id: "signUpImagen",
              class: normalizeClass([[step.value != 0 && "is-hidden"], "card-bg-init"]),
              src: "",
              alt: ""
            }, null, 2),
            createBaseVNode("img", {
              class: normalizeClass([[step.value == 0 && "is-hidden"], "card-bg"]),
              src: _imports_0,
              alt: ""
            }, null, 2),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", {
                    class: normalizeClass(["columns signup-columns", [step.value !== 0 && "is-hidden"]])
                  }, [
                    createBaseVNode("div", _hoisted_18, [
                      _hoisted_19,
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("form", {
                          class: "signup-form is-mobile-spaced",
                          onSubmit: _cache[24] || (_cache[24] = (...args) => unref(onSignup) && unref(onSignup)(...args))
                        }, [
                          createBaseVNode("div", _hoisted_21, [
                            createBaseVNode("div", _hoisted_22, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        modelValue: unref(dataUserSignUp).firstName,
                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(dataUserSignUp).firstName = $event),
                                        type: "text",
                                        autocomplete: "given-name",
                                        value: returnNombre()
                                      }, null, 8, ["modelValue", "value"]),
                                      createVNode(_component_VLabel, {
                                        raw: "",
                                        class: "auth-label"
                                      }, {
                                        default: withCtx(() => [
                                          _hoisted_23
                                        ]),
                                        _: 1
                                      }),
                                      validarNombre() ? (openBlock(), createElementBlock("p", _hoisted_24, toDisplayString(mensajeNombre.value), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_25, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        modelValue: unref(dataUserSignUp).lastName,
                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(dataUserSignUp).lastName = $event),
                                        type: "text",
                                        autocomplete: "family-name",
                                        value: returnApellido()
                                      }, null, 8, ["modelValue", "value"]),
                                      createVNode(_component_VLabel, {
                                        raw: "",
                                        class: "auth-label"
                                      }, {
                                        default: withCtx(() => [
                                          _hoisted_26
                                        ]),
                                        _: 1
                                      }),
                                      validarApellido() ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(mensajeApellido.value), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_28, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        modelValue: unref(dataUserSignUp).nameUser,
                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(dataUserSignUp).nameUser = $event),
                                        type: "text",
                                        autocomplete: "username"
                                      }, null, 8, ["modelValue"]),
                                      createVNode(_component_VLabel, {
                                        raw: "",
                                        class: "auth-label"
                                      }, {
                                        default: withCtx(() => [
                                          _hoisted_29
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
                            createBaseVNode("div", _hoisted_30, [
                              createBaseVNode("div", _hoisted_31, [
                                createBaseVNode("div", _hoisted_32, [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(dataUserSignUp).perfil = $event),
                                    type: "radio",
                                    name: "signup_type",
                                    value: "Deportista",
                                    checked: ""
                                  }, null, 512), [
                                    [vModelRadio, unref(dataUserSignUp).perfil]
                                  ]),
                                  _hoisted_33
                                ]),
                                createBaseVNode("div", _hoisted_34, [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(dataUserSignUp).perfil = $event),
                                    type: "radio",
                                    name: "signup_type",
                                    value: "Entrenador"
                                  }, null, 512), [
                                    [vModelRadio, unref(dataUserSignUp).perfil]
                                  ]),
                                  _hoisted_35
                                ])
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_36, [
                            terminos.value === true ? withDirectives((openBlock(), createElementBlock("input", {
                              key: 0,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => terminos.value = $event),
                              type: "checkbox"
                            }, null, 512)), [
                              [vModelCheckbox, terminos.value]
                            ]) : withDirectives((openBlock(), createElementBlock("input", {
                              key: 1,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => terminos.value = $event),
                              type: "checkbox",
                              disabled: ""
                            }, null, 512)), [
                              [vModelCheckbox, terminos.value]
                            ]),
                            createBaseVNode("span", {
                              class: "px-2",
                              onClick: _cache[13] || (_cache[13] = ($event) => modalTerminosOpen.value = true),
                              onKeydown: _cache[14] || (_cache[14] = ($event) => modalTerminosOpen.value = true)
                            }, _hoisted_38, 32)
                          ]),
                          withDirectives(createBaseVNode("div", _hoisted_39, [
                            terminosEntrenador.value === true ? withDirectives((openBlock(), createElementBlock("input", {
                              key: 0,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => terminosEntrenador.value = $event),
                              type: "checkbox"
                            }, null, 512)), [
                              [vModelCheckbox, terminosEntrenador.value]
                            ]) : withDirectives((openBlock(), createElementBlock("input", {
                              key: 1,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => terminosEntrenador.value = $event),
                              disabled: "",
                              type: "checkbox"
                            }, null, 512)), [
                              [vModelCheckbox, terminosEntrenador.value]
                            ]),
                            createBaseVNode("span", {
                              class: "px-2",
                              onClick: _cache[17] || (_cache[17] = ($event) => modalEntrenadorOpen.value = true),
                              onKeydown: _cache[18] || (_cache[18] = ($event) => modalEntrenadorOpen.value = true)
                            }, _hoisted_41, 32)
                          ], 512), [
                            [vShow, unref(dataUserSignUp).perfil === "Entrenador"]
                          ]),
                          createBaseVNode("div", _hoisted_42, [
                            politica.value === true ? withDirectives((openBlock(), createElementBlock("input", {
                              key: 0,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => politica.value = $event),
                              type: "checkbox"
                            }, null, 512)), [
                              [vModelCheckbox, politica.value]
                            ]) : withDirectives((openBlock(), createElementBlock("input", {
                              key: 1,
                              id: "checkbox",
                              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => politica.value = $event),
                              disabled: "",
                              type: "checkbox"
                            }, null, 512)), [
                              [vModelCheckbox, politica.value]
                            ]),
                            createBaseVNode("span", {
                              class: "px-2",
                              onClick: _cache[21] || (_cache[21] = ($event) => modalPoliticaOpen.value = true),
                              onKeydown: _cache[22] || (_cache[22] = ($event) => modalPoliticaOpen.value = true)
                            }, _hoisted_44, 32)
                          ]),
                          createBaseVNode("div", _hoisted_45, [
                            createVNode(_component_VButton, {
                              class: "btn-degrade-blue",
                              color: "primary",
                              size: "big",
                              disabled: unref(verificarEstado),
                              bold: "",
                              fullwidth: "",
                              rounded: "",
                              onClick: _cache[23] || (_cache[23] = ($event) => step.value++)
                            }, {
                              default: withCtx(() => [
                                _hoisted_46
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            createBaseVNode("span", null, [
                              _hoisted_47,
                              createVNode(_component_RouterLink, { to: { name: "auth-login" } }, {
                                default: withCtx(() => [
                                  _hoisted_48
                                ]),
                                _: 1
                              }),
                              _hoisted_49
                            ])
                          ])
                        ], 32)
                      ])
                    ])
                  ], 2),
                  createBaseVNode("div", {
                    class: normalizeClass(["columns signup-columns", [step.value !== 1 && "is-hidden"]])
                  }, [
                    createBaseVNode("form", {
                      class: "column is-8",
                      onSubmit: _cache[28] || (_cache[28] = withModifiers(() => {
                      }, ["prevent"]))
                    }, [
                      createBaseVNode("div", _hoisted_50, [
                        _hoisted_51,
                        createBaseVNode("div", _hoisted_52, [
                          createBaseVNode("div", _hoisted_53, [
                            unref(imagen).accept ? (openBlock(), createElementBlock("img", {
                              key: 0,
                              src: unref(imagen).dataUrl,
                              alt: ""
                            }, null, 8, _hoisted_54)) : (openBlock(), createElementBlock("img", _hoisted_55)),
                            createBaseVNode("div", {
                              class: "upload-button",
                              role: "button",
                              tabindex: "0",
                              onKeydown: _cache[25] || (_cache[25] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                              onClick: _cache[26] || (_cache[26] = ($event) => uploadModalOpen.value = true)
                            }, _hoisted_57, 32)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_58, [
                        createVNode(_component_VButton, {
                          color: "primary",
                          size: "big",
                          rounded: "",
                          lower: "",
                          onClick: _cache[27] || (_cache[27] = ($event) => step.value++)
                        }, {
                          default: withCtx(() => [
                            _hoisted_59
                          ]),
                          _: 1
                        })
                      ])
                    ], 32)
                  ], 2),
                  createBaseVNode("div", {
                    class: normalizeClass(["columns signup-columns", [step.value !== 2 && "is-hidden"]])
                  }, [
                    createBaseVNode("div", _hoisted_60, [
                      _hoisted_61,
                      createBaseVNode("form", {
                        class: "signup-form",
                        onSubmit: _cache[32] || (_cache[32] = (...args) => unref(onSignup) && unref(onSignup)(...args))
                      }, [
                        createBaseVNode("div", _hoisted_62, [
                          createBaseVNode("div", _hoisted_63, [
                            createVNode(_component_VField, { id: "email" }, {
                              default: withCtx(({ field }) => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: unref(dataUserSignUp).email,
                                      "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => unref(dataUserSignUp).email = $event),
                                      type: "text",
                                      autocomplete: "email"
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_VLabel, {
                                      raw: "",
                                      class: "auth-label"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_64
                                      ]),
                                      _: 1
                                    }),
                                    (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_65, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_66, [
                            createVNode(_component_VField, { id: "password" }, {
                              default: withCtx(({ field }) => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: unref(dataUserSignUp).passwd,
                                      "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => unref(dataUserSignUp).passwd = $event),
                                      type: "password",
                                      autocomplete: "new-password"
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_VLabel, {
                                      raw: "",
                                      class: "auth-label"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_67
                                      ]),
                                      _: 1
                                    }),
                                    (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_68, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_69, [
                            createVNode(_component_VField, { id: "passwordCheck" }, {
                              default: withCtx(({ field }) => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: unref(dataUserSignUp).passwordCheck,
                                      "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => unref(dataUserSignUp).passwordCheck = $event),
                                      type: "password"
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_VLabel, {
                                      raw: "",
                                      class: "auth-label"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_70
                                      ]),
                                      _: 1
                                    }),
                                    (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_71, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_72, [
                          createVNode(_component_VButton, {
                            size: "big",
                            color: "primary",
                            type: "submit",
                            rounded: "",
                            primary: "",
                            lower: "",
                            loading: isLoading.value
                          }, {
                            default: withCtx(() => [
                              _hoisted_73
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ])
                      ], 32)
                    ])
                  ], 2)
                ])
              ])
            ])
          ]),
          createVNode(_component_VModal, {
            open: uploadModalOpen.value,
            title: "Sube tu foto",
            actions: "center",
            size: "small",
            onClose: _cache[36] || (_cache[36] = ($event) => uploadModalOpen.value = false)
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_74, [
                createBaseVNode("div", _hoisted_75, [
                  createVNode(_component_VAvatar, {
                    size: "big",
                    picture: unref(imagen).dataUrl
                  }, null, 8, ["picture"])
                ])
              ])
            ]),
            cancel: withCtx(() => [
              _hoisted_76
            ]),
            action: withCtx(() => [
              createVNode(_component_VField, { grouped: "" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_77, [
                        createBaseVNode("label", _hoisted_78, [
                          createBaseVNode("input", {
                            class: "file-input",
                            type: "file",
                            name: "resume",
                            onChange: _cache[33] || (_cache[33] = ($event) => previewImage($event))
                          }, null, 32),
                          _hoisted_79
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
                        onKeydown: _cache[34] || (_cache[34] = withKeys(withModifiers(($event) => uploadModalOpen.value = false, ["prevent"]), ["space"])),
                        onClick: _cache[35] || (_cache[35] = ($event) => uploadModalOpen.value = false)
                      }, {
                        default: withCtx(() => [
                          _hoisted_80
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
        ]),
        createVNode(_component_VModal, {
          open: modalTerminosOpen.value,
          title: "Terminos y Condiciones",
          size: "big",
          actions: "center",
          onClose: _cache[37] || (_cache[37] = ($event) => modalTerminosOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_81
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: confirmarTerminos
            }, {
              default: withCtx(() => [
                _hoisted_82
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_component_VModal, {
          open: modalEntrenadorOpen.value,
          size: "big",
          title: "Terminos Entrenador",
          actions: "center",
          onClose: _cache[38] || (_cache[38] = ($event) => modalEntrenadorOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_83
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: confirmarTerminosE
            }, {
              default: withCtx(() => [
                _hoisted_84
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_component_VModal, {
          open: modalPoliticaOpen.value,
          size: "big",
          title: "Politica de Privacidad",
          actions: "center",
          onClose: _cache[39] || (_cache[39] = ($event) => modalPoliticaOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_85
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: confirmarPolitica
            }, {
              default: withCtx(() => [
                _hoisted_86
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
export { _sfc_main as default };
