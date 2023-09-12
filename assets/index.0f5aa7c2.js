const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function makeMap$2(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const NOOP$1 = () => {
};
const extend$3 = Object.assign;
const hasOwnProperty$3 = Object.prototype.hasOwnProperty;
const hasOwn$2 = (val, key) => hasOwnProperty$3.call(val, key);
const isArray$5 = Array.isArray;
const isMap$1 = (val) => toTypeString$4(val) === "[object Map]";
const isFunction$5 = (val) => typeof val === "function";
const isString$6 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$6 = (val) => val !== null && typeof val === "object";
const objectToString$5 = Object.prototype.toString;
const toTypeString$4 = (value) => objectToString$5.call(value);
const toRawType = (value) => {
  return toTypeString$4(value).slice(8, -1);
};
const isIntegerKey = (key) => isString$6(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const hasChanged$1 = (value, oldValue) => !Object.is(value, oldValue);
const def$1 = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i2, l;
      for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
        this.effects[i2].stop();
      }
      for (i2 = 0, l = this.cleanups.length; i2 < l; i2++) {
        this.cleanups[i2]();
      }
      if (this.scopes) {
        for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
          this.scopes[i2].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i2 = 0; i2 < deps.length; i2++) {
      const dep = deps[i2];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger$1(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$5(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$5(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap$1(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$5(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap$1(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray$5(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap$2(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol$1)
);
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l = this.length; i2 < l; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$5(target);
    if (!isReadonly2 && targetIsArray && hasOwn$2(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject$6(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray$5(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$5(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$2(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger$1(target, "add", key, value);
      } else if (hasChanged$1(value, oldValue)) {
        trigger$1(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn$2(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger$1(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$5(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend$3({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger$1(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger$1(target, "add", key, value);
  } else if (hasChanged$1(value, oldValue)) {
    trigger$1(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger$1(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger$1(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach3(callback2, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback2.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap$1(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn$2(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$6(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def$1(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$6(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$6(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged$1(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray$5(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$5(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP$1;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function makeMap$1(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeStyle(value) {
  if (isArray$4(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString$5(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$5(value)) {
    return value;
  } else if (isObject$5(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$5(value)) {
    res = value;
  } else if (isArray$4(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$5(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$5(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const toDisplayString$1 = (val) => {
  return isString$5(val) ? val : val == null ? "" : isArray$4(val) || isObject$5(val) && (val.toString === objectToString$4 || !isFunction$4(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet$1(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$5(val) && !isArray$4(val) && !isPlainObject$4(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE$1 = /^on[^a-z]/;
const isOn$1 = (key) => onRE$1.test(key);
const isModelListener$1 = (key) => key.startsWith("onUpdate:");
const extend$2 = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$2.call(val, key);
const isArray$4 = Array.isArray;
const isMap = (val) => toTypeString$3(val) === "[object Map]";
const isSet$1 = (val) => toTypeString$3(val) === "[object Set]";
const isFunction$4 = (val) => typeof val === "function";
const isString$5 = (val) => typeof val === "string";
const isObject$5 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$5(val) && isFunction$4(val.then) && isFunction$4(val.catch);
};
const objectToString$4 = Object.prototype.toString;
const toTypeString$3 = (value) => objectToString$4.call(value);
const isPlainObject$4 = (val) => toTypeString$3(val) === "[object Object]";
const isReservedProp = /* @__PURE__ */ makeMap$1(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction$1 = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction$1((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE$1 = /\B([A-Z])/g;
const hyphenate$1 = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, "-$1").toLowerCase());
const capitalize$1 = cacheStringFunction$1((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction$1((str) => str ? `on${capitalize$1(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber$2 = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
let _globalThis$2;
const getGlobalThis$2 = () => {
  return _globalThis$2 || (_globalThis$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const stack = [];
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$5(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$4(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$4(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i2 = queue.indexOf(job);
  if (i2 > flushIndex) {
    queue.splice(i2, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray$4(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a2, b) => getId(a2) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen2);
  queue.sort((a2, b) => getId(a2) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number2, trim: trim2 } = props[modifiersKey] || EMPTY_OBJ;
    if (trim2) {
      args = rawArgs.map((a2) => a2.trim());
    } else if (number2) {
      args = rawArgs.map(toNumber$2);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate$1(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$2(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, null);
    return null;
  }
  if (isArray$4(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$2(normalized, raw);
  }
  cache2.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn$1(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate$1(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render: render2, renderCache, data: data2, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data2, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render3 = Component;
      if (false)
        ;
      result = normalizeVNode(render3.length > 1 ? render3(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render3(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener$1)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
function filterSingleRoot(children) {
  let singleRoot;
  for (let i2 = 0; i2 < children.length; i2++) {
    const child = children[i2];
    if (isVNode$1(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn$1(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener$1(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
const SuspenseImpl = {
  name: "Suspense",
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if (isFunction$4(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  const { p: patch, o: { createElement: createElement2 } } = rendererInternals;
  const hiddenContainer = createElement2("div");
  const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      isSVG,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve();
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement: createElement2 } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(
          activeBranch,
          newFallback,
          container,
          anchor,
          parentComponent,
          null,
          isSVG,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, newFallback);
      }
    } else {
      suspense.pendingId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement2("div");
      if (isInFallback) {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        suspense.resolve(true);
      } else {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove: remove2 } } = rendererInternals;
  const timeout = toNumber$2(vnode.props && vnode.props.timeout);
  const suspense = {
    vnode,
    parent,
    parentComponent,
    isSVG,
    container,
    hiddenContainer,
    anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false) {
      const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(pendingBranch, container2, anchor2, 0);
            }
          };
        }
        let { anchor: anchor2 } = suspense;
        if (activeBranch) {
          anchor2 = next(activeBranch);
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor2, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent2 = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent2) {
        if (parent2.pendingBranch) {
          parent2.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent2 = parent2.parent;
      }
      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          isSVG2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        true
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          parentNode(hydratedEl || instance.subTree.el),
          hydratedEl ? null : next(instance.subTree),
          suspense,
          isSVG,
          optimized
        );
        if (placeholder) {
          remove2(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }
      if (suspense.pendingBranch) {
        unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
  const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
  if (suspense.deps === 0) {
    suspense.resolve();
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s2) {
  let block;
  if (isFunction$4(s2)) {
    const trackBlock = isBlockTreeEnabled && s2._c;
    if (trackBlock) {
      s2._d = false;
      openBlock();
    }
    s2 = s2();
    if (trackBlock) {
      s2._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if (isArray$4(s2)) {
    const singleChild = filterSingleRoot(s2);
    s2 = singleChild;
  }
  s2 = normalizeVNode(s2);
  if (block && !s2.dynamicChildren) {
    s2.dynamicChildren = block.filter((c2) => c2 !== s2);
  }
  return s2;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$4(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  const el = vnode.el = branch.el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$4(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source2, cb, options) {
  return doWatch(source2, cb, options);
}
function doWatch(source2, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source2)) {
    getter = () => source2.value;
    forceTrigger = isShallow(source2);
  } else if (isReactive(source2)) {
    getter = () => source2;
    deep = true;
  } else if (isArray$4(source2)) {
    isMultiSource = true;
    forceTrigger = source2.some(isReactive);
    getter = () => source2.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return traverse(s2);
      } else if (isFunction$4(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else
        ;
    });
  } else if (isFunction$4(source2)) {
    if (cb) {
      getter = () => callWithErrorHandling(source2, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source2, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source2, value, options) {
  const publicThis = this.proxy;
  const getter = isString$5(source2) ? source2.includes(".") ? createPathGetter(publicThis, source2) : () => publicThis[source2] : source2.bind(publicThis, publicThis);
  let cb;
  if (isFunction$4(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject$5(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray$4(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], seen2);
    }
  } else if (isSet$1(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, seen2);
    });
  } else if (isPlainObject$4(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c2 of children) {
          if (c2.type !== Comment) {
            child = c2;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    let child = children[i2];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i2);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction$4(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
function defineAsyncComponent(source2) {
  if (isFunction$4(source2)) {
    source2 = { loader: source2 };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    suspensible = true,
    onError: userOnError
  } = source2;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded2 = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded2.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded2.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded2.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, { vnode: { ref: ref2, props, children } }) {
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$4(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data2 = dataOptions.call(publicThis, publicThis);
    if (!isObject$5(data2))
      ;
    else {
      instance.data = reactive(data2);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction$4(opt) ? opt.bind(publicThis, publicThis) : isFunction$4(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction$4(opt) && isFunction$4(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v2) => c2.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$4(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$4(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$4(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray$4(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$5(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v2) => injected.value = v2
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray$4(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$5(raw)) {
    const handler = ctx[raw];
    if (isFunction$4(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction$4(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$5(raw)) {
    if (isArray$4(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction$4(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$4(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache2, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache2.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  cache2.set(base2, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$2(isFunction$4(to) ? to.call(this, this) : to, isFunction$4(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$4(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$2(extend$2(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend$2(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn$1(rawProps, key) && ((kebabKey = hyphenate$1(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger$1(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn$1(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction$4(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate$1(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend$2(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray$4(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$4(opt) || isFunction$4(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache2.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a2, b) {
  return getType(a2) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$4(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction$4(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$4(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction$4(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend$2(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (isFunction$4(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$4(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject$5(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction$4(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction$4(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$4(rawRef)) {
    rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray$4(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$5(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn$1(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$4(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$5(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$4(existing) && remove(existing, refValue);
          } else {
            if (!isArray$4(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn$1(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn$1(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (isRef(ref2)) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis$2();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns$1(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns$1(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(instance.update),
      instance.scope
    );
    const update = instance.update = effect.run.bind(effect);
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns$1(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render2 = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$4(ch1) && isArray$4(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j, u2, v2, c2;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i2] = j;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c2 = u2 + v2 >> 1;
        if (arr[result[c2]] < arrI) {
          u2 = c2 + 1;
        } else {
          v2 = c2;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$5(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
    }
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const child = children[i2];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
      target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString$5(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize$1(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize$1(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode$1(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString$5(ref2) || isRef(ref2) || isFunction$4(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$5(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode$1(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$5(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$5(style)) {
      if (isProxy(style) && !isArray$4(style)) {
        style = extend$2({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$5(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$5(type) ? 4 : isFunction$4(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend$2({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray$4(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$4(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$4(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$4(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn$1(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$4(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function renderList(source2, renderItem, cache2, index) {
  let ret;
  const cached = cache2 && cache2[index];
  if (isArray$4(source2) || isString$5(source2)) {
    ret = new Array(source2.length);
    for (let i2 = 0, l = source2.length; i2 < l; i2++) {
      ret[i2] = renderItem(source2[i2], i2, void 0, cached && cached[i2]);
    }
  } else if (typeof source2 === "number") {
    ret = new Array(source2);
    for (let i2 = 0; i2 < source2; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
    }
  } else if (isObject$5(source2)) {
    if (source2[Symbol.iterator]) {
      ret = Array.from(source2, (item, i2) => renderItem(item, i2, void 0, cached && cached[i2]));
    } else {
      const keys = Object.keys(source2);
      ret = new Array(keys.length);
      for (let i2 = 0, l = keys.length; i2 < l; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source2[key], key, i2, cached && cached[i2]);
      }
    }
  } else {
    ret = [];
  }
  if (cache2) {
    cache2[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i2 = 0; i2 < dynamicSlots.length; i2++) {
    const slot = dynamicSlots[i2];
    if (isArray$4(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode$1(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj) {
  const ret = {};
  for (const key in obj) {
    ret[toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend$2(/* @__PURE__ */ Object.create(null), {
  $: (i2) => i2,
  $el: (i2) => i2.vnode.el,
  $data: (i2) => i2.data,
  $props: (i2) => i2.props,
  $attrs: (i2) => i2.attrs,
  $slots: (i2) => i2.slots,
  $refs: (i2) => i2.refs,
  $parent: (i2) => getPublicInstance(i2.parent),
  $root: (i2) => getPublicInstance(i2.root),
  $emit: (i2) => i2.emit,
  $options: (i2) => resolveMergedOptions(i2),
  $forceUpdate: (i2) => () => queueJob(i2.update),
  $nextTick: (i2) => nextTick.bind(i2.proxy),
  $watch: (i2) => instanceWatch.bind(i2)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data: data2, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data2[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data2 !== EMPTY_OBJ && hasOwn$1(data2, key)) {
        accessCache[key] = 2;
        return data2[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data: data2, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data2 !== EMPTY_OBJ && hasOwn$1(data2, key)) {
      data2[key] = value;
      return true;
    } else if (hasOwn$1(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn$1(data2, key) || setupState !== EMPTY_OBJ && hasOwn$1(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e2) => {
          handleError(e2, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$4(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$5(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$2(extend$2({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component) {
  return isFunction$4(Component) ? Component.displayName || Component.name : Component.name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$4(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  const i2 = getCurrentInstance();
  return i2.setupContext || (i2.setupContext = createSetupContext(i2));
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if (isPromise(awaitable)) {
    awaitable = awaitable.catch((e2) => {
      setCurrentInstance(ctx);
      throw e2;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$5(propsOrChildren) && !isArray$4(propsOrChildren)) {
      if (isVNode$1(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode$1(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.33";
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a2, b) {
  if (a2.length !== b.length)
    return false;
  let equal = true;
  for (let i2 = 0; equal && i2 < a2.length; i2++) {
    equal = looseEqual(a2[i2], b[i2]);
  }
  return equal;
}
function looseEqual(a2, b) {
  if (a2 === b)
    return true;
  let aValidType = isDate$2(a2);
  let bValidType = isDate$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a2.getTime() === b.getTime() : false;
  }
  aValidType = isArray$3(a2);
  bValidType = isArray$3(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a2, b) : false;
  }
  aValidType = isObject$4(a2);
  bValidType = isObject$4(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b[key])) {
        return false;
      }
    }
  }
  return String(a2) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const isArray$3 = Array.isArray;
const isSet = (val) => toTypeString$2(val) === "[object Set]";
const isDate$2 = (val) => val instanceof Date;
const isFunction$3 = (val) => typeof val === "function";
const isString$4 = (val) => typeof val === "string";
const isObject$4 = (val) => val !== null && typeof val === "object";
const objectToString$3 = Object.prototype.toString;
const toTypeString$2 = (value) => objectToString$3.call(value);
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const invokeArrayFns = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const toNumber$1 = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector2) => doc.querySelector(selector2),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$4(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$4(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$3(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e2) {
  }
  needRemove && el.removeAttribute(key);
}
const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;
  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = () => performance.now();
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  return [_getNow2, skipTimestampCheck2];
})();
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    const timeStamp = e2.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, invoker.value), instance, 5, [e2]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$3(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn && fn(e3));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction$3(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$4(value)) {
    return false;
  }
  return key in el;
}
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
  watchPostEffect(setVars);
  onMounted(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend$1({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray$3(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$3(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend$1(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$4(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber$1(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e2) => {
    if (e2.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i2) => toMs(d) + toMs(delays[i2])));
}
function toMs(s2) {
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend$1({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c2) => {
        const el = c2.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el._moveCb = (e2) => {
          if (e2 && e2.target !== el) {
            return;
          }
          if (!e2 || /transform$/.test(e2.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        }
      }
      if (prevChildren) {
        for (let i2 = 0; i2 < prevChildren.length; i2++) {
          const child = prevChildren[i2];
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return createVNode(tag, null, children);
    };
  }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c2) {
  const el = c2.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c2) {
  newPositionMap.set(c2, c2.el.getBoundingClientRect());
}
function applyTranslation(c2) {
  const oldPos = positionMap.get(c2);
  const newPos = newPositionMap.get(c2);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s2 = c2.el.style;
    s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
    s2.transitionDuration = "0s";
    return c2;
  }
}
function hasCSSTransform(el, root2, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
    });
  }
  moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
  clone.style.display = "none";
  const container = root2.nodeType === 1 ? root2 : root2.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"];
  return isArray$3(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e2) {
  e2.target.composing = true;
}
function onCompositionEnd(e2) {
  const target = e2.target;
  if (target.composing) {
    target.composing = false;
    trigger(target, "input");
  }
}
function trigger(el, type) {
  const e2 = document.createEvent("HTMLEvents");
  e2.initEvent(type, true, true);
  el.dispatchEvent(e2);
}
const vModelText = {
  created(el, { modifiers: { lazy, trim: trim2, number: number2 } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number2 || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e2) => {
      if (e2.target.composing)
        return;
      let domValue = el.value;
      if (trim2) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = toNumber$1(domValue);
      }
      el._assign(domValue);
    });
    if (trim2) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim: trim2, number: number2 } }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing)
      return;
    if (document.activeElement === el) {
      if (lazy) {
        return;
      }
      if (trim2 && el.value.trim() === value) {
        return;
      }
      if ((number2 || el.type === "number") && toNumber$1(el.value) === value) {
        return;
      }
    }
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
const vModelCheckbox = {
  deep: true,
  created(el, _2, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign2 = el._assign;
      if (isArray$3(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  if (isArray$3(value)) {
    el.checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = looseEqual(value, getCheckboxValue(el, true));
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el._assign(getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  deep: true,
  created(el, { value, modifiers: { number: number2 } }, vnode) {
    const isSetModel = isSet(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o2) => o2.selected).map((o2) => number2 ? toNumber$1(getValue(o2)) : getValue(o2));
      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    setSelected(el, value);
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  if (isMultiple && !isArray$3(value) && !isSet(value)) {
    return;
  }
  for (let i2 = 0, l = el.options.length; i2 < l; i2++) {
    const option = el.options[i2];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArray$3(value)) {
        option.selected = looseIndexOf(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i2)
          el.selectedIndex = i2;
        return;
      }
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e2) => e2.stopPropagation(),
  prevent: (e2) => e2.preventDefault(),
  self: (e2) => e2.target !== e2.currentTarget,
  ctrl: (e2) => !e2.ctrlKey,
  shift: (e2) => !e2.shiftKey,
  alt: (e2) => !e2.altKey,
  meta: (e2) => !e2.metaKey,
  left: (e2) => "button" in e2 && e2.button !== 0,
  middle: (e2) => "button" in e2 && e2.button !== 1,
  right: (e2) => "button" in e2 && e2.button !== 2,
  exact: (e2, modifiers) => systemModifiers.some((m) => e2[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend$1({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const createApp$1 = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction$3(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString$4(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n2 of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n2) ? props.getAttribute(n2) : void 0 : props[n2];
    if (value !== void 0) {
      return { name: n2, value };
    }
  }
};
var injectHead = () => {
  const head = inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a2;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i2 = 0, j = headCountEl.previousElementSibling; i2 < headCount; i2++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a2 = j == null ? void 0 : j.tagName) == null ? void 0 : _a2.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i2 = 0; i2 < oldElements.length; i2++) {
      const oldEl = oldElements[i2];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i2, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t2) => {
    var _a22;
    return (_a22 = t2.parentNode) == null ? void 0 : _a22.removeChild(t2);
  });
  newElements.forEach((t2) => {
    head.insertBefore(t2, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i2 = 0; i2 < deduped.length; i2++) {
                const prev = deduped[i2];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i2;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i2) => previousTags.add(i2));
    }
  };
  return head;
};
var IS_BROWSER = typeof window !== "undefined";
var useHead = (obj) => {
  const headObj = ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    watchEffect(() => {
      head.updateDOM();
    });
    onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var isVue2 = false;
/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$3(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$2 = () => {
};
function addSubscription(subscriptions, callback2, detached, onCleanup = noop$2) {
  subscriptions.push(callback2);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback2);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback2) => {
    callback2(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$3(targetValue) && isPlainObject$3(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject$3(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$3 } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$3(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$3($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot) {
  let scope;
  const buildState2 = options.state;
  const optionsForPlugin = assign$3({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!buildState2 && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    nextTick().then(() => {
      isListening = true;
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop$2;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback2) {
        afterCallbackList.push(callback2);
      }
      function onError(callback2) {
        onErrorCallbackList.push(callback2);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback2, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback2, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback2({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$3({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign$3(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!buildState2) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign$3(store, setupStore);
    assign$3(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$3($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$3(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && buildState2 && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = pinia || currentInstance2 && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = toRef(store, key);
      }
    }
    return refs;
  }
}
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol$1 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol$1 ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol$1 && obj[Symbol.toStringTag] === "Module";
}
const assign$2 = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a2, b) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b.params) && stringifyQuery2(a2.query) === stringifyQuery2(b.query) && a2.hash === b.hash;
}
function isSameRouteRecord(a2, b) {
  return (a2.aliasOf || a2) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a2, b) {
  if (Object.keys(a2).length !== Object.keys(b).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b) {
  return Array.isArray(a2) ? isEquivalentArray(a2, b) : Array.isArray(b) ? isEquivalentArray(b, a2) : a2 === b;
}
function isEquivalentArray(a2, b) {
  return Array.isArray(b) ? a2.length === b.length && a2.every((value, i2) => value === b[i2]) : a2.length === 1 && a2[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback2) {
    listeners.push(callback2);
    const teardown = () => {
      const index = listeners.indexOf(callback2);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign$2({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data2) {
    const state = assign$2({}, history2.state, buildState(
      historyState.value.back,
      to,
      historyState.value.forward,
      true
    ), data2, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data2) {
    const currentState = assign$2(
      {},
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign$2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data2);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$2({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign$2(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse2(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse: parse2,
    stringify
  };
}
function compareScoreArray(a2, b) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b.length) {
    const diff = b[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$2(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign$2({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign$2(
        paramsFromLocation(
          currentLocation.params,
          matcher.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        location2.params
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$2({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$2(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback2) => callback2(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign$2({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data2) {
  if (!slot)
    return null;
  const slotContent = slot(data2);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter$1(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign$2({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$2(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign$2({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign$2({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign$2({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$2({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign$2({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$2({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign$2(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign$2({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data2 = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign$2(locationAsObject(shouldRedirect), {
          state: data2,
          force,
          replace: replace2
        }),
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        true,
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(
            assign$2(locationAsObject(failure2.to), {
              state: data2,
              force,
              replace: replace2
            }),
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data2);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data2) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$2({
          scroll: isFirstNavigation && state && state.scroll
        }, data2));
      else
        routerHistory.push(toLocation.fullPath, data2);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign$2(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(
            error.to,
            toLocation
          ).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "darker" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["minimal-wrapper", [props.theme]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const CssUnitRe = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;
var VPlaceload_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: "100%" },
    height: { default: "10px" },
    mobileWidth: { default: void 0 },
    mobileHeight: { default: void 0 },
    disabled: { type: Boolean },
    centered: { type: Boolean }
  },
  setup(__props) {
    var _a2, _b2;
    const props = __props;
    useCssVars((_ctx) => ({
      "dd2dd28a": props.width,
      "fc2a725c": props.height,
      "44d1027a": unref(mobileWidthValue),
      "c789998a": unref(mobileHeightValue)
    }));
    const mobileWidthValue = (_a2 = props.mobileWidth) != null ? _a2 : props.width;
    const mobileHeightValue = (_b2 = props.mobileHeight) != null ? _b2 : props.height;
    if (props.width.match(CssUnitRe) === null) {
      console.warn(
        `VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`
      );
    }
    if (props.height.match(CssUnitRe) === null) {
      console.warn(
        `VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`
      );
    }
    if (mobileWidthValue.match(CssUnitRe) === null) {
      console.warn(
        `VPlaceload: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`
      );
    }
    if (mobileHeightValue.match(CssUnitRe) === null) {
      console.warn(
        `VPlaceload: invalid "${mobileHeightValue}" mobileHeight. Should be a valid css unit value.`
      );
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["content-shape", [props.centered && "is-centered", !props.disabled && "loads"]])
      }, null, 2);
    };
  }
});
var VPlaceload = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-6922be4e"]]);
var VButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = defineComponent({
  props: {
    to: {
      type: [Object, String],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    iconCaret: {
      type: String,
      default: void 0
    },
    placeload: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (value.match(CssUnitRe) === null) {
          console.warn(
            `VButton: invalid "${value}" placeload. Should be a valid css unit value.`
          );
        }
        return true;
      }
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([
          void 0,
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "white",
          "dark",
          "light"
        ].indexOf(value) === -1) {
          console.warn(
            `VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`
          );
          return false;
        }
        return true;
      }
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "medium", "big", "huge"].indexOf(value) === -1) {
          console.warn(
            `VButton: invalid "${value}" size. Should be big, huge, medium or undefined`
          );
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(
            `VButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
          );
          return false;
        }
        return true;
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    lower: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      var _a2;
      const defaultClasses = (_a2 = attrs == null ? void 0 : attrs.class) != null ? _a2 : [];
      return [
        ...defaultClasses,
        "button",
        "v-button",
        props.disabled && "is-disabled",
        props.rounded && "is-rounded",
        props.bold && "is-bold",
        props.size && `is-${props.size}`,
        props.lower && "is-lower",
        props.fullwidth && "is-fullwidth",
        props.outlined && "is-outlined",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.raised && "is-raised",
        props.elevated && "is-elevated",
        props.loading && !props.placeload && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light",
        props.static && "is-static"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    const isCaretIconify = computed(
      () => props.iconCaret && props.iconCaret.indexOf(":") !== -1
    );
    const getChildrens = () => {
      var _a2;
      const childrens = [];
      let iconWrapper;
      if (isIconify.value) {
        const icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
        iconWrapper = h("span", { class: "icon" }, icon);
      } else if (props.icon) {
        const icon = h("i", { "aria-hidden": true, class: props.icon });
        iconWrapper = h("span", { class: "icon" }, icon);
      }
      let caretWrapper;
      if (isCaretIconify.value) {
        const caret = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.iconCaret
        });
        caretWrapper = h("span", { class: "caret" }, caret);
      } else if (props.iconCaret) {
        const caret = h("i", { "aria-hidden": true, class: props.iconCaret });
        caretWrapper = h("span", { class: "caret" }, caret);
      }
      if (iconWrapper) {
        childrens.push(iconWrapper);
      }
      if (props.placeload) {
        childrens.push(
          h(VPlaceload, {
            width: props.placeload
          })
        );
      } else {
        childrens.push(h("span", (_a2 = slots.default) == null ? void 0 : _a2.call(slots)));
      }
      if (caretWrapper) {
        childrens.push(caretWrapper);
      }
      return childrens;
    };
    return () => {
      if (props.to) {
        return h(
          RouterLink,
          {
            ...attrs,
            "aria-hidden": !!props.placeload && true,
            to: props.to,
            class: ["button", ...classes.value]
          },
          {
            default: getChildrens
          }
        );
      } else if (props.href) {
        return h(
          "a",
          {
            ...attrs,
            "aria-hidden": !!props.placeload && true,
            href: props.href,
            class: classes.value
          },
          {
            default: getChildrens
          }
        );
      }
      return h(
        "button",
        {
          type: "button",
          ...attrs,
          "aria-hidden": !!props.placeload && true,
          disabled: props.disabled,
          class: ["button", ...classes.value]
        },
        {
          default: getChildrens
        }
      );
    };
  }
});
var AnimatedLogo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n2) => (pushScopeId("data-v-02cfd2fb"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$3 = {
  id: "svg104",
  version: "1.1",
  width: "600",
  height: "600",
  viewBox: "0 0 600 600",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("defs", { id: "defs108" }, null, -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", { id: "g110" }, [
  /* @__PURE__ */ createBaseVNode("image", {
    id: "image112",
    width: "652.14703",
    height: "673.4223",
    preserveAspectRatio: "none",
    "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA\nB3RJTUUH5goWAQ8R3+EU1wAAgABJREFUeNrt3XWcZFeZ8PHfLa9qdx13l2TinkwCIZAACRKcxW2B\nZdl3WRZZYHFblsUW2BAsSkLcJzKxmYz7TPe0u5V73feP2z1t1dNW3bdu1fP9bLOT1lO37r3nuec8\n5zkghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII\nIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE\nEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC\nCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQwsAUvRsgMsDnn9C7BUJkpx9t17sFwsAkABBTN3lHbwLM\ngG3w3wz+26x304UwqBgQHfx3HIgA6uC/JyaBgZgCCQDEsKk9yduAEqASKAQKgGIgHygDnINfs6AF\nAeWDnxNCTJ8X6EXr9ENAF1pA0Ab4gH5gAOgZ/OhlOGBIToIDMUgCgGx19s7eCuShdfDFwApgObAU\nqAWKBr+WC7gGv1cIMf+8gB/wDH64gQagETgO1APdg18bQAskkpPAIOtIAJBtknf8FrQn9dXAKmAt\nsGTw31UMD+ObpvZHhBA6SzA8ZdAE1AHH0IKCE4MfPWhTDONJMJAVJADIZBM/5duBGmARcB5wDlqn\nX4o2vG/Ru+lCiDkRAfrQRgWOAi8Be9BGDNqYaPpAAoKMJAFAJhrf8StADtpQ/gXAhcBGtGH9HL2b\nK4TQjQoE0IKB/cBu4AW0EYPguO+WQCCjSACQKZI/7ZeiPdlfAlwFrBn8nE3v5goh0lIYLdHwAPA0\n8CpwBG3UYDQJBgxPAgCjG9/x5wEbgGuBi4EtaMP6QggxXV1oIwNPAo+ijQz4R32HBAKGJQGAEY3v\n9M1oCXyXAm9Em9cvQd5fIURqxNCSBl8C7kebJqhn7KoCCQYMRToIoxnd+ReiJfDdAlyBNscvmfpC\niLkURltN8DRwL7APbTniMAkEDEECACMY/8RfC7weuBHtqT9f7yYKIbJSL7AD+BvaNEHnqK9KIJDW\nJABIV+M7fRPaE/6NwM1oWfx2vZsphBBoeQH7gT8CjwGnkemBtCcBQDoa3fmb0Qry3Ay8Y/DfMswv\nhEhHCeAw8FfgDrSkwWESBKQVCQDSyeiOX0FL7Lt18GMRsqmOEMIY4mi1Bf4M3AOcZOSIgAQCaUEC\ngHQxuvNfAbwTeDva2n15n4QQRjQ0IvB/wF+A9lFflUBAV9Kx6Gn8PH8V2lD/R9AK+MhQvxAiE0SB\nvcDPgYfRlhQOk0BAFxIA6GV0558DXA98Aq1qn9TiF0JkogDa8sGfAc+iLSnUSBAw7yQAmG/j5/m3\nAR9HW8svdfmFENmgB7gL+AVwcNRXJBCYNxIAzJfkw/3vQRvuX6Z384QQQgeH0IKAvwD9o74igcCc\nk6zy+TC687eibczzPeBDaJvzCCFENioHrkFb8dQONJ/5yku36922jCcjAHMp+VP/p4EPAhV6N08I\nIdJII/A/wO+B7jOflZGAOSNZ5vNDQXvqvw34F6TzF0KIsRYB3wR+CZx75rPJtzoXKSAjAHNh/IY9\nHwY+g1bDXwghxNnVAd9Byw0Y3n5YRgNSSgKAVBvd+a8DvoSW4W/Vu2lCCGEgPuB24Lto0wMaCQJS\nRgKAVBlfv/8NwDfQNu0RQggxfSrwHPA1tF0HNRIEpITkAKReHvB54NdI5y+EELOhAJcDv0ObSnUA\nkheQIjICMFujT8RFaEP+7wGcejdNCCEySACtguAPGFlKWEYDZkwCgJkaH4FuRkta2Y6MrAghxFyI\nAn8HvgwcO/NZCQJmRDqq1LgebYjqOuSYCiHEXLECbwV+A5x/5rMyJTAjMgIwXaNPNAvwLrQElcV6\nN00IIbLIUeCLwKNADJCRgGmSp9WZy0HbxOcHSOcvhBDzbQ1a0aB3M1TWXkYCpkVGAKZq9InlAv4Z\n+AKQq3fThBAii3UD30YLBoKAjARMkYwATF8J8O9oAYB0/kIIoa8y4OvA5wA7ICMBUyS7AU7F8MlU\nCnwLbUMfu97NEkIIAWj34/OABLALiHHhe2VHwUnIFMDZjI4iy4H/AP4BLflPCCFEevGiLcf+ERAC\nZDrgLGQKYGpK0Tr/DyOdvxBCpKs84P+hVWOV6YBJyAhAMqNPmCK0BBN58hdCCGMYGgn4MZIYOCEZ\nATg7F1okKZ2/EEIYx9BIwOcAGyAjAUnICMBIo08QB/AvaIUmXHo3TQghxLS5gX9FqxwoxYLGkBGA\n5CzAB9HW+UvnL4QQxlQAfBV455nPyEjAGRIADBl9UrwDbV2prPMXQghjq0Ar136d3g1JNxIAjLcd\n+Apa5r8QQgjjWwp8D9gGyCjAIMkBGH0irAduA7bq3SwhhBAp9xzwfuA0kPX5ADICMKwWbbmfdP5C\nCJGZLkUr5V4MZP1IQHYHAMNvfg5apuj1ejdJCCHEnFGA9wL/iCwPzOIAYPhNN6Gt839fVh8PIYTI\nDma0/VzeduYzWRoESIenJf39P7RRACGEEJmvCC3Z+4Izn8nCICD7qtuNfpNXAd8AqvRulhBCiHm1\nAq1GwEeAZr0bo4dsHgHIQ6v0t03vhgghhNDFduCTZOnGQdkVAIx+c9+LVvBHCCFEdjKjjQDceOYz\nWRQEZE8AMPpNPR9tkwin3s0SQgihqyLgS2h1YLJK9gQAw8qALwPL9G6IEEKItLAJ+CeG9n7JklGA\n7AgAht9MM/Ax4HV6N0kIIURaeQvwdrKoQm52BADDLgA+RDaufhBCCHE2+WijAOuArBgFyPwAYPhN\nLEF7cxfq3SQhhBBpaR3wWYbywzI8CMj8AGDYLcAb9G6EEEKItPZW4Aa9GzEfMjsAGI7eNgCfYaj2\nsxBCCJFcIdpeAYuAjB4FyOwAQONAS/xbo3dDhBBCGMKFwAcZ6iMzNAjI3ABg+A27BC2zUwghhJgK\nE1qxuIyuFJuZAcBw518IfAotAVAIIYSYqsVoq8YyNiEwMwOAYW8CrtW7EUIIIQzprcBlejdirmRe\nADAcpVWh1XiWcr9CCCFmoghts6BSIONGATIvABj2NuA8vRshhBDC0K4GrtK7EXMhswKA4ehsEfAu\nwKp3k4QQQhiaC21FgJZLlkGjAJkVAAx7E7BF70YIIYTICJeh7RWQUTInABiOymqA9yH1/oUQQqSG\nE7gVqNC7IamUOQHAsJvRKv8JIYQQqXIecDmQMdMAmRYALADejZT8FUIIkVou4ANo9WUyIgjIjABg\n+I14HbBZ7+YIIYTISBcAV+jdiFQxfgAwuurf25C5fyGEEHOjEK2fydW7Ialg/ABg2FXAuXo3Qggh\nREa7hqE8M4NPA2RKAOBCW6JRqHdDhBBCZLQy4BZA0bshs2XsAGA4+lpLhlZqEkIIkXauBVYChh4F\nMHYAMOwtQKXejRBCCJEVVgFX6t2I2TJuADAcdVWj1Wo2/HCMEEIIQ7AANwL5ejdkNowbAAy7GFin\ndyOEEEJkEVXdRjSxNddmRlVVvVszI0ZfMucArgdy9G6IEEKIDKQO/o8KKAoWs4LVbqamIrfkioX5\nb/jNjSt36N3EmTJmADB617/L9G6OEEKIDKKe+R+wWajMt7OswEZZZS7XLCrgwpo8CnOslDoslwK1\nQIuqqiiKsWaijRkADLsS7eALIYQQ06cCQ0P4FhO5VhOOPDtrq3O5uCqXhRU5rC51sbXMRZ7NPDbZ\nbD1wDtCi98uYCeMFAMNP/0605D+p+y+EEGJy6ph/mBTMeTY2FDtZXOxkSW0e1y3IZ0WJkwKnlSKb\nGdPZH+pz0ErQPwxE9X5502W8AGDYSmCL3o0QQgiRxtTB+XuTgsNhpshhobDUxfk1eVxYk0d5iZMN\nxU6W5Nsn6+wncjlQDrTq/VKny8gBwHnAUr0bIYQQIk2ow8l6KKDYzVSWODm31EVNRQ6bq/O4qjaP\n0hwbTosJhzklc/ZVaA+jrUbLAzBqAGBDS/4zzpEWQgiRWiPn721myl1WSvNs1FbnsX1BPmsrcqgo\ntLM8306BzTxXrShEq0T7MJDQ+5BMh1EDgAq0EQAhhBDZYGRnb9KW49ny7awtz+H8ihyqKnK4sDqX\nreU5OG1m7DMcz5+h89BGAgw1CmCsAGA4AfACtIMthBAiUw11+mYFe66Npbk2SosdbFxQwJW1eSwq\ncVKea6PGZSU1o/kzth5tWbqh8gCMFQBoFOB8IE/vhgghhEiBMU/3NosJ22Cy3hVVOaytyKW2IoeL\nyl0syrdjNinpNv+bj9Yvvah3Q6bDOAHA8NN/GbBZ7+YIIYSYoVHL8RTIsbKswM7iQgcVlTlcsyCf\nrRW55OdaKXdYyLGkfdV6BbgE+BkQ07sxU2WcAGBYNbBG70YIIYSYgqGnexWwKDhsZvJsZhzFTi6q\nyeOymjwKi52sKXawutCBM/07+4msQytM16B3Q6bKiAHAarQkQCGEEOlkZAldtKV45lwrS4udrC1y\nUFGVywXVeZxfkUNxjpU8m9kIT/dTVQ5sABqMkghotADAhJYAOGfrOYQQQkzRyKd7q4lch4USpwVn\nkYOLa/O5tDqPsmIHCwrsLMu348qczj6ZIrTR6Qf0bshUGS0AsCPV/4QQYv6dKbIDKAomk4I1z8bK\nUhdbSpxUV+WyoTyHCypyKMuxYreYsM3vUrx0sBnIBXx6N2QqjBYALAJq9G6EEEJkvDFFdopcVqpy\nrOQWO7lwQR5X1ORTXminPNfGghwbdp3X4aWJtWgjARIApMzwCoDVQInezRFCiIwxsqNXFExmBZvZ\nhLXQzupSFxeUu1hQmcvqMhfnlLkodVmxmBQyejB/5pYClUCz3g2ZCmMEAMNWopVdFEIIMVNDnb6i\ngMPM4gI7tfl2XCUuLqnN44rqXEry7RQ4LFQ4LVgMkNCWJhzAKmCX3g2ZCiMFAHZgmd6NEEIIQznT\n2YPZasZlNVFY4uLcqlzOr8qlrMTJhjIXa4oc5Izf715MjxXYBPzRCCsBjBQAFKJFVkIIISYyssiO\nomDPs7GpzMXiyhw21+ZzWXUeC4scFDgs5FtlIH8OrEFbqRbXuyGTMVIAkIeMAAghRHIJ7SnfZrdQ\nmmdn+aJ83rykkOWVuWwsd7Ew16Z3C7NFOVAKdOrdkMkYKQCoQBIAhRBimDq4Ls9qYnF5DpcsKuD8\nZYW8fnEh5Xk28jJ73X26KkFbrSYBQAqtNFh7hRBibiRUsJioKXKyekkhH1hfxoaqPNYWO7Bk39r7\ndFOCVrJ+T7rnARipQ11ksPYKIUTqDJbZNdksrFqQz5vXl/GW1SWsL3Nhl04/nRRgkO3q079DHa4B\nsBAkQVUIkYVUldwcGxcuL+I9Wyu5aFEhy/JlTj+NLUDrr9TZ/qK5lP4BgMaMFgAIIUT2UFUcTitX\nrS7hA9uqeN2yYnIlc98IqtCWrof0bsjZGCUAKAXy9W6EEELMC1XFbDNz8fJiPnvJAq5aUkiBXfZA\nMxAJAFJIAgAhRHZQobjYyWcvW8iHzqmiKseqd4vE9A0FAGnNKAFAAZCjdyOEEGJOKQrnry7mS9cs\n4YbFhUhun2FVAGmfpGGUAKAQCQCEEJlKBZPNzLvPr+arVy5iaaFD7xaJ2XGhFa9La0YJAPIAp96N\nEEKIlFMBl4WPX76I71yxkFyrzPVnAAvaKMBRvRsyWSPT1/ASwAK0XZaEECJzqGDLs/H565by5fOq\nyZHKfZnChAHy1tI7ABiW9skUQggxLSpYcq184XXL+NoFNVhlvj+TWND2BEhrRgg3TUCl3o0QQoiU\nUQGHmU9fs5SvnF8tnX/mUTBA/5r2DUQ7kEYZqRBCiMlZTXzs0oX8x4U1UsY3M8kIgBBCiPHesrmC\nb1yxSKr6ZS4TBli5ZoQnaxsGiKSEOKuxFcHloS87qbBuaSFfvWYJpU4j3H7FDKX1HgBDjHAGWoBc\nvRshxKTUM/8DKNr/DXX0OVawmoa/HIpBJK5t5z7y59J461AxS6pKcZGTb1y3lI1lLr1bI4QhAgAw\nSDQlslRCBZOCw2WhOseGs9DOsopcLih1srTQQYnDAg4zmAeHe1UgGicYjHG4N8gznX5aO3x09wXp\n8kUgmkBKwGUgq5nPX7GIG5cX690SIQDjBABCpA8VULVO3+qycs7CfC5YkM/62nwuq86jOs+G1axg\nNSmTjvTfAHwuoRKOJtjd5ef5Jg8v1vXzQn0/AW/kTHAhDE6FS9aU8v5zKuXtFGlDAgAhpkNVUWwW\nVlXmcM2aUt66uoQVZS5qXDPbsEUB7CYFu93MVQvyuWpBPj3nVnKiO8jfj/Xw94NdHO3wQzQu0wNG\npaqUl+Xwn1cvnvF5IsRckABAiKlIqJgcFtYtLuD9W6t408pilhXY5ySXr9RuobQ2j4tq8/jItmr+\nfLibP+xu52SzB+IJCQSMxmzi3RfUcPGCtC8MJ7KMBABCnI2qgtXMlsUFvPv8Gm5ZVcKCedyedWmB\nnS9fVMs715Xxp4Nd3P5KK6fafNo0hMQB6U9VOXdpEZ/eWilrrrNAXFU55Ylwqi+IzxMmJ823cpYA\nQIhkBjvYmvIcPnrpAt6zqYLFufrt7rmswM5XLlnAjSuL+dnLbdz9Wjtub1hGA9KZCk6Xlc9ftpDF\nBVLNPBP5Ygk8oRgn+4I83OShocXL0W4/R7oDxANRsKX3xk4SAAgxlgomm4kbNpbzz5cv4pKa9NnV\nc1N5Dv/9huXcsLqE/3ymgd0n+1ATyGhAWlK5cl0ZN6ws0bshIkUSKjR5w+zpCdDSGeDpFg+7mz34\n+0MMhONarg5ogbkChON6N/msJAAQYiRVxVXg4DNXLOSfz6+h2JF+l4jDrHDTymI2V+bw4xea+dXL\nrYR9ERkNSCeqSl6Rk09eWEOeVPszLF8sQVcgSvtAmEeaPexrdtPWGeBIf5CwN6JNEQ5F3wqGW7GT\nfnc3IfSSUFlamcuX37Cc964rw5zm1/LifDvfu24Zq2rz+cnj9Zxs9RruBpSxFIV3bK5g+8ICvVsi\npiGuQpc/ws6uAHUdPg60enm6xYu3N0AgHEeNJwanBwef8A0edEsAIMSgjUsK+c71y3n98iK9mzJl\ndrPCJzaWs63EyT8/XMezx3ukbJbeVKgocfLhc6uwSkCW1oLxBI2+KN3uEDtbvTzZ6Kanw0+9O4zX\nF4FYYrizh9H/zgASAAiRUNmypJDf3LKGc6qMWXV6W00et719DZ96/DQP7mqTugF6UuCtmyvYVJH2\ne8FkFRUIx1X6AlGea/dxoM1Ha5efZzt8tHX6iYXjqAlVG9YferrP8ABOAgCR3VSVldV5fPeGFYbt\n/Icsyrfzuzcu56u5Vm5/vhlfMJZRTyuGoKrUluXwrs0V2DK88zCCYCzBCU+Ytv4Qe9t8PNjopqfd\nR4c3gjcQHayrwXCwnAHD+tMhAYDIXio4Chx8+Q3L2b60UO/WpESZ3cIPrllCrcvKtx+rxxeMZtUN\nTXeKwhs2lHF+dfqsHMkmkbhKbyDKrk4/TzV7aG/z8WqXn6buAGo4NlzGe2goP8uDNAkARHZSwWw3\n88XtS3jHmlK9W5NSLouJz11Uiwp897F6vBIEzA8VcgodvHdLZdonkGaq24/38o2HT9HvDuMJxbQ5\nfBju6LPsCX8yEgCI7GSCd59bxRe3VWPNwPuBczAIAPjOY/UyHTBPrl9bygaZ+9dNvSdMY5d/OHkv\ny5/wJyMLVEX2SahsWFLIv161mJwMXqPtspj4p4tr+fRVi7HYzLI6YC6pKgUFdm7dWkmeJXPPqXSn\nwODwvnT8UyFnqsg6ebk2/vWKRawqcujdlDnnMJv4p0sWcOOFNci49NzasrSQ7bLhj64kxp0eCQBE\n1nn7tirevDp7yrOW2M18/8pFXLqmVO6Qc8RsM/OhLZUZPaJkBOUuK2aLSc7zKZKzVWQPVWVpTR6f\nvagWhzm7Tv0l+Xa+f91SVtXkDZYvFSmTULlwaRFXLSnUuyVZr8puxiUjXVOWXXfBuaaO+BBpx2Q2\n8f4La1lX6tK7Kbo4vyaPL167BGuuTc7RFDJZzbxuXRlVab71azaQ03p6JACYrjOd/GDFqMTgB4DT\nAjlWcJiHPz/0fRIY6EtVuWRlMR/aUKZ3S3T1zrWlfPKiBZjlKSk1VJWFFS7eti6zlpKK7CDLAKci\noZWGNNvMFFjNOArsLCnPYX2hnSUFdqpybFrWqcuiJVrFEhCIEYgmaPSEOTIQ4lB3AG9PAE84Tnio\nIIUsUZkfKjgcVt5zbjVVuTa9W6Mrp9nEP11Sy7MtHvYe6ZZs6dlSFG7YUM6SgsxPKBWZRwKAiQxu\n86jYzaypzGVzTR4bFxdwVVUuCwod2K0mXBYT9kk68bgKgViCYCxBvz/C0y1eXqjrZ2+Ll6MdPgjH\ngMzaYCL9qJyzpIA3r8mexL+zqc218a2rF/OBDh+dfUEJAmZKVSkudnLzmlIscgjTQqnTgsNswsuI\nbXrFhCQAGEtVUcwmqopdnL+qmFtXl7K+KpdVRY4ZnU5mBfKsJvKsJsqdFlaVuvjY5gqODYTY3+bj\nnkNdPHuij+6B0OBIg5y0qWa1W/iHbdWUOOR0H3Lt4gL+8YpF/PuDJ4lHE3o3x7CuXVHMBQYs+xtX\nVbzhBPl2E6YMuueUOSw4pQ7DlMkdcYiqgsnEsupc3rG1knduKGdZkRPHHMyVKsCaQgdrCh28eVUJ\nuzt93Lavk/sOdNHdHRiuVS1mL6FywbIiXr+yWO+WpBWzovCxbdU8e3qAx/Z2yPk2Ay6nlZs3VWA3\nYD7FwZ4gD5we4PNbKsnJxFKYYkokAABQFBZU5PC+bdXcurGcNSXOefvTdrPCxdV5nF+Zywe3VPLb\nXW3cs7eTfndYRrBSwGQ3c93GcipdkqE9VpHdzL9dsYjDbV5aOv0SBEyHqrJqSQGXLirQuyUz8vDJ\nPv5vXycf21AutQuyWHa/86qK2WnhXRfXcu97N/L1KxfNa+c/ksWkcEFVLr944wr++O71XLChDMwm\nWbM9G6rKgspc3pNhm/2k0qUL8vnEpQsxW8x6N8VYLGbetaGccqfxnqF6gjH+tLeD/nYf7Z6w3s1J\nKW2xldwzpyqrA4DVCwv41S1r+OUNKzi3MictDoZFUbh+WRF3vX0t37hhOcUlLlk+OFOKwrs2VVCb\nl92Z/5P50OYKrl4nVQKnLKGypiqXG1YaM6n04bp+Trd68UXj7Gjz6d2clHJZTFhlddWUpUOfN79U\nMJsV3rCtmjvetZ5/2FRBbhoOgdW6rHz5soX87tZ1XDA0fy036KlTVWpLXdy4uiQLT/LpKXNZ+cJl\nCykvdsiI01SYFK5bW2rIvSTckTj3HugkGIoRjSR4rcWjd5NSqibXhssqG19NVXbdG1WVXJeFL25f\nyu9uXMnGsvSvCHfjkkL++s51vO+iWrBKjeupU7h0ZTFbZGvWKblqcSFvv7BWm3YSE1Mhv8DO29Yb\ns6DUK61eHj/eByiQUOnuDuAOx/VuVkrJ8//UZc/VrkJuvp2vXb+cr1212FBzd4sK7PzXG1fwj69b\nhj3XKk9pU+B0Wbh1c4UMB06RWYEvnlfNhcuL5fw6K5Wr15Syrtx4gWVMVbn9cDdBX0TrJU2wuyfA\n4YGQ3k0TOsmOAEBVyS928JO3rOazF9ZgM+CynXybme9evpBv3bCCqiKn3KTPRlVZvbCA8wy4PltP\ntXk2PnnZAnJyZK+ApFRw5ti4eV0Z+Wk4bTiZA91Bnj3UPXzvUBS6+0N0ZloAIOfulBnvLJ4uVSW/\n0MEP37iSD24sx2zgpU52k8Jnt1Xz/ZtWUlMsQcCEzCbetb7MUKM86eLmlcXcsrVSxlGTUVU21uRx\nrUF3/bv/SDfNvWMqP4bjHOnwZ06fqSgghYCmLLOPlAoul5VvXbeMD20qz4h7mlmBWzeU890bV1Jd\n5BzeiEhoEiqLSl1csVwK/8yE3Wzi85csYFlVrpxbY5lNvGVTBaUGDCybPGHuO9gF8fFVH59q9RCM\nZ0g1SAUotEsAO0WZGwCo4LCZ+fL2pXz43Cq9W5NSCvCO9WV876aV1JTISMAoisK5SwvZVKpPPYdM\nsKHMxa0X1aLYjdfRzRlVpaoq17AVJf9+sp9DLd4kxZ5UGlu8eEMZkgioIJ3/NGRuAKDA67ZV8YkL\nagxZqnMyZkXh1g3lfPONKygukOVbQ6wOM+/eWI5Fkv9m5ZObK7h4eZGcV0MUhZvXlLC22HiBZV84\nzp/3dZCIJOvkFQb8UfZ0+fVuptBBZgYAKmxZUcx3rl5CgT1zK5wpwLs3lvPha5aA0yrJL6rKqoUF\nbKmR5L/ZqhisDVCYb5fzSlWpKHRwy4ZyjPgs8djpAfY0uJOXelagLxTj+fbMKQiU7afrdGReAKCq\nlBU7+Pa1S1lVaNe7NXPOoih8+fxqPnjpQqkTYFJ4y6oSFuVK5b9UeN2yIq7dVKF3M9LCysUFbK3K\n1bsZ0xaMJXjwYBfhoaV/yUTi9HT6Myblw2LgRO/5lnkBgMXEey5dyDUGzdSdiVyLie9dvpBbtlTq\n3RT9qCq1RU7esNqY5VnTkd2s8P8uqmVxRU52B5Z2Cx/ZWkmOAbPLD3UFePRIz6QbPR3pDtAeiOrd\n3FmzKArL8+1IIsDUGO+MPhsVLlxRzD+dU2nIobrZKHFa+I/tS9iyvChLb9YKa5cVssmABVrS2aaK\nHD5wfg0mS5ZdUEMSKucszOeShcbb9U8Ffr+nnT7PJDuLKgr7ewK0+iJ6N3nWTArkWUzS/09R5gQA\nqkp+vo3PXbGI6iwdAl5d4uRL1y2jsCT7kgJNNhPvWleWkQmfejIBH9haycaFBdm5LNBi4vq1ZSw2\n4IZS+3uDPHK8b/L3TYFAf4j2vqDeTZ61LDxDZyVzAgBF4eqN5bxxaaHeLdHVW5cV8u9XLsZmy9zk\nx3ESKuuq8wz5lGYEC/JtfPyiWkyOLFsWqEJVsYO3rzPedtIq8NDxXho6fNpj8SQSCZXn2nxkSDUA\nMUWZEQCoKlWlLr5wfg2OLN/MRAHev7WSa7MpH8Bs4rLVJSwtyPykT728cXUJ25Zl27JAlcvXlLLM\ngEv/OvxRbtvTkbTwzwQvlVc6/cQNPsqjMGm6gxghM3pLk8LNmyrYZsAs3blQ7LDwH1cuZkVNXubf\nsFUoLbBzyzpj7s5mFFUuKx+/uBZXbpbsE6CCK8/OO9aV4TBgTYkHTvbR1OZlypPhqoqvy08gauyC\nQCZFodpl1bsZhmH8AECFimIn79taKTu/jbCl3MUnL1+IKePrA6hsWFzANtn2d869dXkx21YUk+En\nlEZVuXBRAZctyNe7JdPWF45z74EuwsHY1JPhFOjyRTjQY+w8ABNQ5sqyqapZMH4AgMqla0pZX+7S\nuyFp5wMby3mLQfctnzKrmVvXl+My4BIto8m1mvjkedVYs+AJy2Iz88aN5RQZMO9hZ4uHHXX90xwL\nV2gPxtjTa+wAAMiK+DRVjH3XVMGWZ+e9myqwy9P/OPlWM/90+UIqS52ZeVEkVFZW5XLRIuM9pRnV\nVYsLuXJ1aWZPLalQUe7ijSuMV/c/nFD5zb5Owt7I9JbCKUAwxkBPQO+XIOaRwQMAlcuWFHKxlH6d\n0PnVeXz4kgValcBMY1LYvtKY9dmNqsRu5r3bqnDlZHAugALv2FDOwnzjJZXu7fTz6rFeZvTmqCpH\nuvx4DZ4HkKmn5VwwdK9gtZl5w7pSijO43v9sKcCHz6nikhXFmfXUpkJejo2b1hpviZbRvWlpIedn\nasVFVaWs0MHrV5dgtNpHCRXuPthNZ39oZqnwCrzcE6QzGNP7pcyKQ6YDp8y4R0qF4kIHN8i+75Na\nkGPlC5cvxJGXSRu7qGxeUsC5Blj5EUuoxDMo+MqzmvmXi2opKsik82nY5qWFXFhtvFHFUwMh7jvU\nBYkZruZXFHp6AgRDxg4AlhQ4ZCngFBk3AEDl8uVFVBuwQpceti8p5NatlYZ+x0exmrl5XRmFBhj9\n2dnq5ae724nGM6e3vHRBPq/LwNEXi83MuzZVGDKp9O6jPdS1+2a1ED4WiHG029h5AMZ75/Rj3GNl\nNXPNsiJDXqh6cFlMfPqiWpZVZ0BtgITK0vIcLltWpHdLJhVTVe473M13Hj/NrgzactVlMfEP26op\nzM+gXABVZXVNHlcuNF5SaXsgyp0HuiA2u1p+kYTK0x1+vV+OmCfG7D0TKivKXJxvwAtVT5vLXHz6\nkgVg9DLBJoWLVxSxqST9k//q+kPceaCL7t4AP36xhQGDJ1iNdGFtHtevL9e7GaljNvHG9cZM/nug\nrp8jzZ7Zl8FLJKjv8GVMTCfOzpgBgAKra/Ik+3sG3rGhnKsNvozL6bDwrnVlhtjw67ZD3bR1BwCF\nvx3o4tFT/Xo3KWVcFhPv3VpJSYHd0OcTAKpKZZGDN6wxXnJjfzjO3/Z1Eg1EZ78Lngru3iDdGbA1\nsJicIQMAq9XMm9aUYpG1/9NW4bTwhcsWUFToMObQbUJl/dJCNhkgSaveG+Hhg4PDsgrE/RF++lwT\nHf7MublevCCfc5YV6t2MFFC4YHkR5xlwO+ldrV6eP9k3pU1/pqItEOWUO6z3y5o5kwImQ3Zt8854\nR0mFwkIHlxiwRGe6uGpRIe84p8qI7z5YTdyyppRKZ/pXaHvkeC/7mzzDN2ZFYXf9AL/f15kxu67l\nWk18cFs1dqexqwNaHRbes6HCcOXEowmV2/Z14E9VUKkotPoinOgP6f3SZs5uBpfFmA8488x4XYCq\ncu3yIhbIzm8zZjMrfPT8ai0h0Ei7fyVUlpe6eMOq9B+m7QvFuGNfJ4yc81cgFk3w0xebOWDwTOuR\nti8p5JI1pcY6l0ZKqJy3uIALDJhT9GK7jyeP9aZuCkYB1R+l28jnp0lJ2WhIpjNWAKCCYrdw4dJC\nciT7f1Y2lbr4x0sWYDVSrXOTwqYVxawyQO7H4/UDvNYwwLhJWQU6O/z85JVWwhmyLLDYZub951bh\nzDPoigCriSvXlFKdY6xRjJiqct/RHrr6ginfA3d/dwD/LFcUiPRnrF5UVVlW7OCqJYV6tyQjvGND\nORcZqEKg1W7mPevKMKd5cO+JxPnLvg4CEyVlqSp/39PBk6cH9G5qyty0rIjzjbhToKpSU+jk7QZM\n/mtwh7lnf1fqR14UeKXbjzuSOStWRHLGCgAUhVUL81le6NC7JRmhzGnhU5cuIDffAFncCZVzFhWw\nzQD7PrzY4uXJ431MmJKtKPQPhPn5iy30G7zq2pBcq4lPGHSnwMtXl7DSAKNKY915pIe2Tn/Kn/5B\noa8nSCAkAUCmM1QAYLIo3LKm1HCJOunsjUuLuGVL5RzcRFLMIMO0UVXldwe7CEy2G5sCTxzp4fdH\nevRucsqc2SnQKLkAKphdVt66vgybwe4pbf4oDx7sIj4XdSUUiARj1PVnwNbA4qyMEwCoUF7iYqsB\nngCNxG5W+MyFNSwsz0nf0VtVpabYyc1r0r/07O6uAM8d7mYqBzMWifF/O5upGzBwxvUIJXYz79lW\nhSvXILkAqsolSwoNuaLoybp+Xm1wz1mymz8W5/kMqlwpkjNQAKBy9dJCGf6fAxvLc/jgRbUoVlPa\n3rgvXVHMhjSv/KcCd+3vpLN3iklZisLBRjf/u7s97WdgpurGpUVsW2mMXACz1czr15ZSboAlpSN5\nI3F++1o78fDcTR+p0QTHJQDIeMYIAFSwOCyct7QQp2T/p5wJ+NCWCtYvKUzLXADFaeWt68rSfurn\nWG+QBw52Te8YJlR+/2obO9q8ejc/JfKsJj62rRrFkd5TNahQXOzkRgMsKR3r0SYPr50eYPZl/85C\nBZ87jC+DSleL8YzRm6oqtYV2Xr80/Td/MaqaXBufvagWZ7o9DSVUti0s4DwDDNM+dLyXuo5pJmUp\nCp29QX78fDMDGZJ1fdnCfC5YVpj2uQDXry1lscFGFP2xBHfv78TvS0HZ37NR4NhAiOMDBq4IKCZl\njAAAWL+okEVS/GdOvXVVCddtLE+v0VuLiWtWFrMwzZP/2v1R/ry3A3Uma6dVeORwNw+d7NP7ZaRE\ntcvKu8+pwupM02psKuTmWXnr2hIcaT6qNNaeTj8PzUfiqKLQ4A5z2sglgcWk0j4AUBIq2My8dVWJ\n4TJ1jabAbuZTF9ZSWuJMjxu3CmWFdm42wL7z95zo5UDrDPdiVyDmj/DfzzXT5ovo/VJS4pZVJWxc\nUkh6nEhjqCqbagu4qDb9R5VGNRu462AX/oHQ3D79g/b7A1EGjFwSWEwqvQMAVUVt9bJ+cQEba3L1\nbk1WuHxhAW/ZWjn3N5gpUTl/eTGr0jz5rzsU46/7u4gHZzMsq7C7YYDb93WmY5c5bWVOCx/ZVo3i\nSL9RAMVqYvv6MkqMVAUTONEX5OHD3fOXp6OqvNrhI5zmUzli5tI6ALAUOiAc59aN5awxYKEO0KZB\njVTy1aLAR8+tYlFtvr4JgYOJn+9eX44rzRM/X2z28NqpWe7GpkAsGudHO1vY3eHX+yWlxJtWFnNB\nuiWWqlBd6uIdq4r1bsm03XWoe/o5JrP0UneAgJQEzlhpfWf903s38LX/uIx3bKowbPZ/pz/Cj19p\nxR02ToLX1jIXn7igGrPNrF8jVJUttflcvKhA78NxVqF4gj/s6SQUSMGSLEWhq8vPf7/UQjADbrqV\nLitv2ViBSc/zaByV61eVsLjAWMl/jd4Ifz7QBfH5PS883QGiUeOfiyK5tO5V37a4kK9uqmBJrk3v\npszYgU4/333yNLcf6tK7KdPygc2VbFtapN/Tm8XEJatLqM1N7+S/nS1enj3RS8rGuVWV+/d38mhd\nv94vLSXesbaUtbV56TEKoKq48uxctbYUe7pvKDHGI/X9HG/2zHPFTgWfP8JBI+8MKM4qrQOATHDf\naTcD7jA/e7aJ/V3GGdotc1r42MW12HJ0qOqmQkm+nfeuK9P7MJxVNKFy7+FuegdCqbsxKwpuT4Rv\n7WyhPZCiPd51VJtn4wPbqjFZ02MUYMuCPF6/ML1HlcbqC8W4fVc7ifleJqpAfyTO8wa6bwFasJkG\n8aYRSAAwh7yROHWNAxBXOdHq5ZvPNhlqh62bVhRzzTodMvBVlatXl7AizZP/TvQFuedAV+pvNgrs\nPd7LXw4Ya9RoIresK2PDgnzd6wIoJhNvWV9OgT09gpGpevr0AAca3brs16FGEnQYbQQgFAf/HNdJ\nyBASAMyhV7oCvNrhP3OUH9zXyR0GmgoosJn57EULKC12zF9ErYLFZeX1a0rJSfO8j98d6hks+5v6\n352IxPn1Sy0c6TH+hiwL8mzcvLkCRc/3U4WS8hyuXGasYmKBWIJ7Dnbj80f06dASKu3dATwGenAh\noUJC8hamIr3vsAZX3+HDPWJ4OBSI8t0dTezpMk5EfXltHm8/p2r+zhRVZWNVLtctKdT7pZ/VaU+E\nZw53wVwl65kUjrd6+dGutoxYhnXLmlKWVubomAugctPKYtal+ajSWC+3enn4SDe6Pc4qcNITpi0D\npqPEeBIAzJFgPMGTpwdGZ+2aFOrbvPzwuUbDRNQ2k8JHz61iWc08JXKZFc5fVUJVmlf+e+50P/ub\nvXO2GxsACbjr1TbtPDK4FcVObt1apc8ogAp5OTa2rzFWMbFYQuV3+zvxTLa19FxSFE71BWn3GqhA\nlXHeYt1JADBH+gIxXqofYNzZqMKdezq4/VC33k2csg1lLt53fg1Y5njuVIW8PDvvTfPKf75onD/u\n7SQRmbvd2ABQwOMO8eMXmukJzvHfmmMmBW7dVM6Scj1GAVSW1OSxfXGh3odhWl7p8vPEkR59cycU\niHojdPYZZyoqkQEjZvNFAoA58niTh15P8jrasVCMn+1oZG+ncbJr37uxnC3Li+b4ZqRy3aoS1pW7\n9H65Z/VYg5uX6/uZl0cNReHZo73cNR/13+fYymInV64vm/9kNpOJd2woo8hAyX9x4G9HeujqDszt\nKNMUvdIZwCj1zJq9kbRYdWoEEgDMkZ2nBwiGYsn7CEWb3/328814DbLd5qJcG5+/sIacHOvcJASq\nYHZYuWx1CXlpsmQsmXBC5b5D3fjmeje2EWKRGP+zs5mTA8auy24CPrSpgpJS17yWs60udXHdCmNV\n/mtyh7lrT0fa1E94pcNH1CBP1rKF8dRJADAHGr0RDjS7z/60rMIDe9r5k4GWet20uoRr1pQyJxGA\nqrKyMoe3LE/vLO1X2308cHiep28UhUPNHn76apthbsITObcyh7durpjXp9orVxSxoTS9R5XGuuNQ\nN21dAV2W/o2jQl+nD2/YGNNQ6XDIjEICgDlwsjfAwfZJdoZTIBSK8YPnmnjNIFMBuVYzn7p4AYWF\nc7As0KzwpnVlVKdx1ceECn871I27fx52YxsrrnLHy2081+TR+zDMikVR+ODWSsqKnHP/dKtCjsvK\nG9aUYk2DYfSpavVF+PvBLmLp8iSrwEAwxuHe9M8DUAF3WJYATpUEAHPg1WYvoakUolAU6pq9/Ghn\nMyGDTLBdtjCfmzZXpLYDVMGZb+f6VSVpncBbPxDiwYNd+gzLKtAzEORHLzQbal+JZLaUubhyTQlz\nH0WpVFfmctViY1X+e+RkH680DKTF3L9GoTsU47We9F++HFdVGrzh2f+iLCEBQIr5onH+frx3Wp3E\nffs6uXO+h5VnyGZS+MwFtSyuSGE2t6qyfUUxmyrSe5j2jkPdnNJ1WFbhiaM9/OGIMc6VidhMCv9w\nThX5RY65DaZMCu/cWE6ZK72XlI7kDsf57b7O+S/7ezYKJIIxOg0yUimmTgKAFDvWG6K5wzf1H1Ag\n4I3wnWcaOGqQpTaby128/4JaMKfg9FHB4bTyxrVlFKRx8l+DJ8zteztQYzremBWIBqP86tkmTvUb\nOyHwsto8rl09h6MAqkp5kZPty4oMdZP7e8MA+08PzN1xmYWTPUEG0ikwSSKmQlMwJnsBTJGRrg1D\neKzRTZs3Mr2nRJPC0WYPP3iu2RDbwCrA+zaVc86SwhQsC1Sprcjh+mWFer+ss7r/RB8nW736Zxgp\nCodbvPz3q23EDJwQ6DCbePfmCnJy52hVCXDBkkLOrczR+6VOmSea4N59nQR9Ohb+mYgCO7v8NPvT\nuyJgQlVp90eRCGBqJABIIX8sweGGAZhJlJyAO15r545jvXq/jClZXGDnIxfUYHVYZveLFIU3rS+j\nIo2T/7qCMf60pyN9hmUTCf64q42nW4ydEHj14gKuWlXCXNysrXYLb9xYhiMVo1TzZG+7j8eO9JB+\nvT/aLpW9Qfz+NK8IqILJwIHxfDPO1WEAde4wjzXMcNcuBfz+KD946jRHDbIBzFvXlXLR6pKZz+Oq\nKiVFDm5aVUz6Dv7DA3X97GvSZze2pBSF3r4Qv3yxxTAlpZPJtZp53zlVuFK95bSqsrwyl9cvKtT7\nJU5ZLKFy+94OgnqW/Z1EPBJnf0ea5wGogCcsAwBTJAFACp3o9OOZze5wChxu8vCdnc2E4uk/FVBi\nt/CJC2tx5ttnfMFdvLSIcypz9X4pE+oOxfjd7naiabi96CMHu7n3qDFGjCZy5eICLlxSmNpkQEXh\njWtLqUzjUaWx9nT6B5/+07fniidUnu7wkc53pkRCRY2mcwvTiwQAKZJQ4Y6jPcRmO4evwj2727nr\nsDFKv96wtJA3byyfUedotVu4dl0ZrjTe9vfpBjd7TvSm0ZKsQYq2u+RPnm/ipNu4y56KHRbeu60K\n22ynkoaoKoWFDi5bWYw5zd6yicRVuPtQNy29aVL4ZyIJleY2L9E0fjjpDEQJxBJpF6ynq/S98xpM\nVyDKyRbP7J9kFPD7I3zrmUZDrApwWUx88vwaKkud03t4UWFJZS43pXHyny+a4M97OgiF0nSY3aSw\nv9HNb3e1EU+HkrEztH1pEZtTklAKqHBubT5X1eTp/bKm7FR/kL/u7yStH60H9bvDNHnSNw/AH40b\nOjl2vkkAkCI7Wr2c7AulJoJXFI43ufnhc02GWBVwfnUu7zqvBizTeO0KvG1DGVVpPEy7o2GAHcfT\nfIg9nuC3L7XyjIErBFblWLllcwXYzbMeATdZTbx5YznONB5VGutPR3po7vSn/1OronDaF+Xl7vQt\nCNQVjBninpkujHOVpDEVONDoJpDKBB4V/vxaB3ccTf+pALOi8KGtlSyvyZvaCEhicIOWVSVpewL6\nowl+t7td373Yp0JR6OkP8ZPnm+kNGaNWezJvX1vKxoUFsxtBU6GqIoerlxbq/XKmrN4b4b59nWCE\nTkuBsD9CexoHAD2h2GD+VDpftOkjXe+/htIWiPL3+n5SmsCjQNAf4YdPN3DcAFMBq4sc/MMFtZgt\nU8jnV2Dr0kLOr0rf5L/d7V6eTfen/yEKPHyk29BbBi/ItfHmzRUwyyf3N64sYWmBXe+XM2UPHu/l\nYIsn/XJMJhJXOd7pI5imeQDdkThBmQKYMgkAUqClP8TpVl/qE3gUhUNNHv7zhWYtsSXNfXBDGZet\nKp70Kc5mt/DODeVpu0FLJK7yf3s66Ev3p/8R1GCMnz/fzAkDbxn8ttUlLKnOndkogKqSm2fjCgNt\n/NMVjPGb19pnVjdELwq82BmgJ03zYjoDUWJRSQKcKgkAUuCvp/oJBOeoQpYK977axj0GeLord1n5\n5EW15OWeZV23qrKqNp8rFqXvBi2vtHl54GB3Oq/IGs+kcKjFwy9eaSNi0CegtcVObtlUMeMS02ur\ncnn9wny9X8aUPVHXT12TJ70z/8dSFFo7fXgDaVoRMK7qs1mXQUkAMEuhoep/c/WEroDPH+VbOxo5\nZoCpgDesLOa6DeUTf4PJxJvXl1Gdk54btITiCX6zu51ePbb8na24ym9fbeO5ZuMmBN66vpwFpTPY\nKtik8LaN5eTb0rmk1DBPJM5f9nQQTNeO9CwiwRh703VjIE8YpA7AlEkAMEu7ugIcapvG5j8zYdJW\nBfzgufSfCnCYTXzsghoKSpLcxFWVqmIH21cU6d3MCT1x2s0DB7r0bsbMKODtD/LT55rpN+iWwRvK\nXdy8qWJ6T8UqFBS7uGRp+p5XYz3f5ObZun5jPf0PCscTPNbi1bsZSUXjqrFG7nQmAcAsHW730t4f\nnPskngT8YXcbdxlgVcDltfl8dFsVmMafXuctLeLCNE3+80Ti3La7nQG3AZ/+z9C2DP7jQWMGMSbg\n7RvKKS2czlbBKtevLGJjmVPv5k9JKJ7gN7va8XnDxjzP4iodHT7C8fTqaYOxBB1pWLEznUkAMAv+\nWIInT/XPzxIeBaKBKD96uoGjvek9FWBR4EPbqlkzZlmg2W7hXZvKMafpU88LTR4eO9JtyKeyMxQI\nh7QKgUfS/DyZyKbKHN64oXxq74MKTqeV7atLcRpk45+X2ny8cLIPI/dUzb1BTqVZwmkoruIOG3cp\nrB6MccWkqR5flBfq+pm3C1lRONDs4bs7038qYEWRg49eXItiGyzuklBZU5vHttr0TNJyR+L84pVW\nfD7jzcmOoyjUt3r5n5dbiRowIcphNvHuLRUU5k5lkyCVBZU5XG+Qtf+heILf7umg123Qp3/Qzi93\nKO1ykjyROM2+9K1SmI4kAJiFx5vdDMz3UjEV7n6ljTsPdev98if19vVlXLBicFmgxcQt68pYnJee\nlf/uPtHHYwbZinlKEip/2NPBQ/UDerdkRrZV53HBmlImjQAUhTevLaPMlZ5JpWPt6QrwwCGDrTAZ\nS4GIL0pzV3oVBArEE3SH48YNrHQgAcAsPHuyn7AOQ07+QJRvPt3A7nTNxB1U6bLyyYsX4HRZqS5y\n8Ka1pXo3Kak2f5Rfv9RC1Gecdf+TUhQtIfDZRkNWCMyzmvjQOZU48s6y06QKrgI7Vy4vMsSNLA78\n4UAXnr5Z7BiaNlRebvfiT6ORSH80Qac/SgYc3HljhOsmLR13h9nX4tEnkjcp1LV6+c7TDbjTPNv7\nzcuKuHFzBZtXlrCm1KV3c5K682gPu071G6ca21QpCs+f6OO3ezr0bsmMXLEwn/OXFDLhRaaqXLKo\nIK0rSo50qCfAo/s6M2SdusKLTR686VTEKBxHMWpipU4kAJih411+jnT4de00/ra/ix/u6UjJJmpz\nxWU18c+XLuBbly7AnoYd7Mn+EP/7citqNI1uZCkUj8T56c4WXumY46Wqc6DEbuED51ZhsyffKthm\nM3PD2jIKDbD2XwXuOdRNY0+ab/k7Db7+EKfTKA+g0x8hkc43wzQkAcAMxFV4vsGNqvPQaiIS4zdP\nN/DU6QG9D8lZba3MZXNFjt7NGCehwm/3dHC40Z0xN+VxFIW2dh//81Lr4CYpxvL6pYVsWJifpKYE\nFJY4ed1yY6z9P9kX4o49HWDA9yApRUucfXKua6BMQ507TJqtTEx7EgDMgDcS49ETveieyaModPQG\n+NJTpznhDut9WAxnT5efP+1uJxvuGvft6+TBE316N2Payl1W3n9uFSbb+K2CX7eqhNp8Y2z889fD\nXZxon4P9QnSUiMY5liZVJ1XgaH9IRgCmSQKAGTjYHaSzJ0haTDYpCrtP9PHN55rwSwnMKQvEEnzv\nxRZaugywD/tsKeDxhPnOs000eI23TOqGVSWsrx5RU0IFZ46VN68pxWlO/zev1RfhvgNdxtjydzpU\nqO/yp8XSu4QKh7v8GZJfMX8kAJiBh0700p1OGeNxlXteaeV2o5aw1cEjpwd4aH+n7oM488ak8Fp9\nP796tc1wL3lxvp23balEGSr0o6psqsnjwto8vZs2Jfcc6eFAs4G2/J0qRWFvd4Cj/foXBApG40QG\nwtlzPaeIBADT1BuOsb/Jk17RvAKBQJQvP1nPg41uvVuT9nqCMX7+XBMBT5ZlDMcS/O7VNp5K0zru\nZ3PT2lLKyl2gqihmE1esLqHCAGv/O/xRfr+rjXg6ZcunigJhT4TWNKgHcGogRLdf/5EIo5EAYJqO\n94Z4riUNt/BUFHo7A3zn8XpOSz7AWf1+XyfPn5zHCo7pQlHo6gnws+cacRusQ1pV7OTWLZVgUnDl\n2bh5dYneTZqSB+v6OdziTb/7RaokVB5pchPWee798ECY9mAsc4/zHJEAYJr2tHoJDqTpZjEK7Dze\nx1efbsAt+QBJvdbp5+cvNBOLxNLzPZwHDx/s5q8GqCQ5kkWBt64vo6zIycXLi1hanP4b/3QFY9y2\nu41oRtenV9nb7CGgc0DZ3h0gmE7TsgYhAcA0RBMq95zoRU3nvjWhcvuuNn7wahtxSYgZJRBL8JOd\nLTR2ZFY29nTFQjF+8mwTBw22WdD5FTlcu7WSm9aWUmSAtf8PnOzjxVOZP9Lk7Q9xTMdzKRxXqesO\nkNYFUdKUBADTcKwvSEOzN70zTRUgFOeXT57mzsPpv3XwfLr9WC937euQRCGTwrFWDz97sYWIgZZA\nWk0K37pkAdcvL9a7KZMaCMf5391tJEIZPtKkKHQGojymY+5RVyjG0+3ezD7Oc0QCgGl4vtlDszuU\n/k+PCvS4Q3zl0TpeMmDC11yo6w/xq2caCcswoSYBf9nVzj11/Xq3ZFoW5dlYlKYbSo30eJObA6fd\nZMXJFo5zrNGt2w6lvd4IbR3+9L8vpyEJAKYoFFfZ0+AmbpSIXlE41ebjYw+c5IDBhnpTLRRX+fcX\nmtnbMCA3iSEK+Hxh/uvZRlrTYB13JumPxLltVxsBf5YEmyZ4psWrWzGyx5vcBIOZnGcxdyQAmKIW\nb5gnTg8YqwNR4EBdH597rJ6WLL7J33+8l4d3taf31I0eFIWXT/Txm9fas35WJJWeaXTz5NFesqP3\nBxSF7u4AB1rnf7QxllDZcaqfeMxYq1rShQQAU3S40097V8B417QKz+zt4JtPNxhyW9jZ2t8T5P89\neRq3L2ys4G2+xFV+/UILz6RJSVej80UT/M+rbUSy5el/kBpL8OdjvcTmOcg+0h/iVLtP8npmSAKA\nKbr7ZB9Rg+4Yp8ZVfrezhR/tbCGUTgWM5pg7HOd7T52mIZM3+5ktBdr7gnz3uSZ6ZBh11h5sGOCV\n41n09D9EVTnZMMDJ/vmdBnil2cPJDNphcb5JADAFXYEox067jbvMRIFoNMGPnm7ghztbDLkr3HTF\nVPj2K63csVey/qfi6YPd/EZKSc9KfyTOH3a148vGRFOTQn1vkHtP9M7bn/TFEvz9WA+EDZKXlYYk\nAJiCHW0+DvUYcPh/JAVCwRjferyeX+1qN2wsMxUqcMfRbv57RyPxSMLY79s8iUVi/PKFZvZ3+vVu\nimHtaHTz1NGe7H0ajcR5+kgPPfM01XikJ8jObKzomUISAEzBkWYPIV/E+Be2AsFgjC89Wscv93Vk\n7IPxi00evvbgKfzpWrExHSkKTa1evv9CMz6pIjlt/liCnw/N/Wcrk8KLpwfYNU/JgL/b10G/XOOz\nIgHAJDqDMe452Zc5GeQKBDwR/uWBk/zPno6MGwnY3x3gcw+c5FSWV/ubEQX+treTe44Yq0xwOnig\nfoCXT/Tp3QzdhfxRfvVqG8E5zjU62B1gx6Fu407LpgkJACbR5g7R3Jphm3ko4BsI8cUHTvKrfZ0Z\nMxJwaiDEpx46xa76/sx6v+ZRwB/h+882cbxP/y1ejWIgEuf/drfj98hKE1B55lgvT54emLO/EEmo\n/OjVNo63+zJvi+V5JgHAJO492Y8nGNW7GamnKATcIb70WB1/zIAnl1MDIf7h/hO8cEgS2WbFpHCk\nycN/vdhC2EBlgvX0VKObZ4/0SGcEoCh4vBF+9XIbA+G5WTX1eF0/9+5ul+TeFJAA4Cz80QS76/pR\nM3VOVFEY6PLzufuP86dTxioJO9KpgRAfvP8Ezx3skptCCqgJld+/2sZ985jRbVTeaIJfv9pGKJDF\nc/9jKfDokW5+dTD1wfiR/hBfeuI0HrfM/aeCBABncag3wKEOn97NmFuKQm+7n8/ce4w/njTeSMDJ\nwSf/5w9I558yCgS9Yb73VAMnB2Qq4GweOT3Ac8f7kN5otHg4xm+ebeK19tTdP3uCMf7t8XoO1skU\nX6pIAHAWe5u9tPQGM39oT4G+Dh+fu+8EfzJQELC3088H/jb45C9Sy6Swp8HNj3bKVMBEekMxfv5S\nCyFfWPr/sRSFujYvX3i8nsYUlCHvDcX42pOneXiP1PVIJQkAJuCPJbi/vh+yoGgOAIpCT7uPT997\nnF/u70r7RQ/PNAzw4TuPsvOQPPnPmYTKn19u5W8yFZDUvSf6eOl4rzyNnsWOQ9184onTdM6iNsBx\nT5jPP1LHr59vIhKVuh6pJAHABDp9EQ6cHiCrzjYF+jt9fPH+43zv5VZ8kfQrfRxOqPzPvk4+eMdR\nXjtt3LwFQ1DA44/w3WcaOdkvUwEjdQai/GFXG9Es3F9jWhIqD7/cygceOMmpaZ5DkYTKY3X9vOOO\nI/zhxRaicTWrbsfzQQKACTzQ4KZbp+0tdaUoeAfCfOWBE/zTY/Wc9qRPclNXIMq/PXmaf7znGA2d\nss5/XigK++r6+eGLLUTTfVhoHt19uJudJ/rkHJyKaIJHXmnl7X8+xP8e7sYzyYNFMJZgZ6uXzz1c\nx3v+dIh9R3pkvf8csejdgHSUUGHP6QGi4Xh2RpwKREJxfv1cE3vafXx7+xKuWFSARadciLiq8mSD\nm+/uaOS5oz3EY6rceOeTCn/e1caVSwp5+9pSvVujuxP9IX6xswU1GpfzcCoUQIU9df18psPP75cV\nccvaUrZU5mK2mc58SyQYY3e7jwdO9XGqyUN7f0ib3sv0HCwdSQCQxJGBEDsb3Vr1v2y9wBUgobL7\nWC/v6grwnotr+cy5VSzMs81rM5p9EX7yaht/fLGFrr6g9n5k6VuiGwW87jD/+XQDW6tzWVHo0LtF\nuomr8OtdbRxuybDiYPNBUQj6o7x4oJOXDnVhdlrBbj4TIKj+KIlIHHVopEmu9TknUwBJNHQHqO/w\nS+QJoEBXX5AfPlLHtbcd4Nf7Oumeh21je4Ixfr+/k7f84SA/erSOrr6Q3HD1ZFI40DDAt55tIpBF\nW0qP9VSjm/99tQ0S2XsMZkUBFAVVhVggSqwvRKw3RKwvRDwS1/J5FUWu9XkiIwBjxFV4uK4fNZKl\nw//JKEA8wfH6fj7d5uOvy4t49zmVXLO0iJo8G+YU/RkV6A5EeeRUP7ftbuP5U/3EQjF5EkgXCbhn\ndxsXLSrgI5sr9G7NvOsNxfnJc024h0aixOzJYdSVBABjeCMxnj/Vh9Ydydk5iqIQCcV45mAXL53s\no7wyl1vXlXHekgIurs6j3Dmz08kTifNqh58XTw9w58Eu6lq9hEIxbQRGbrTpQwGfP8a/PXGaDRU5\nXFiVq3eL5o0K/Ndr7TxypAe5L4hMIQHAGK+2++mQjVAmNjiEF4rEaWp0851GN/Z8G1vLclhYk8uV\niwrYXOqiKNeGxWIix2LCxHA4FVNVfNEEkXCMY70hnmz2cKzJzcF2H70DoeG8C5l+SU8K9HT4+PbT\nDfz6plVU5lj1btG8eKHFy++fawIZGRQZRAKAMZ461UePV3b1mpLBQxT2RHjJHeal+n7ufakVu0nB\nlGsjJ8/G4hwrVpNypl/3RRPUecKo7jCRaJxQTNWKLQ0GFnLcDUCFBw508fWKHH5y1WLsGR6s9YVi\nfPmZBpq7/XJ+iowiAcAIncEYu5o9WiJAht/UUmqo8waisQRRgN4gnt4g7UnL9I2Z05djbSwKEE1w\n+wvNXFqZy63ry/Ru0ZyJqyo/e6WNVw7L0L/IPLIKYIS6viAvNnqkQ0oFhdFP9aM+9G6cmDUF/O4w\nX334FM83efRuzZy592Q/39/RSFiG/kUGkgBghKca3ER8WVj9T4iZMCmc6vDz8QdPsrc7oHdrUu5A\nV4D/fKwev2w9KzKUBACDogmVp+r6UaXkpBBTp8Dhun4++vApjnkyJ3juCET54hP17GsYkHl/kbEk\nABj0apefU61e2VlOiBnYdbCbTzx0io5AVO+mzJo3muCLzzbx2AHZZlpkNgkABr3a4qV1ICTz/0LM\nRELl+b2dfP3JBnoNvENeJKHyy11t3PlCM0Sl2p/IbBIAAL5Ygl2nB7Q1vkKI6VMgFkvwvy808dUn\nThsyCFCB2/d28u1H6wgHozLvLzKeBABAuzfCU3X9MtcnxGwoEIup/OaFZj72wElOGignQAXuOdLD\nVx6po98XkXuByAoSAAB72324ByTTV4hZUyASTXD3K628/4GTHOpP/6qaQ53/Z/52nLbegHT+Imtk\nfQCQUOGeoz2EIzLfJ0RKDG7v+uK+Tt595xFeafXq3aIJReIqf9jXyWf+dpz23qDkAImskvUBQJM3\nzIkWr1aDXgiROgmV/cd7ec9fjnDnkR6iaXaNBeIJfvpKK5+/9zjtPQEZARRZJ+sDgJfafBzskWE/\nIeaEonCyzctH7jrK559ppDNNlgm2+aN8/PHTfOWhU/T5IvLkL7JSVgcA0YTKy/UDxH0Rif6FmCsK\nuN1h/vuxej5411Gea/HoWm5jV7uPD9x9lD883UAoGJNrX2StrN4MqC8c537J/hdi7ilALMHD+7vY\n1eblMxcv5P1bK6nNnb/thL2ROL8/0MVPdjRyus03vF+FEFkqqwOAfZ1++rv9ejdDiOyhQHd3gK89\ndJJHjvbw2UsXcM2yQorsc3criiRUnm/x8sMXW3jmYBehYFSCfiHI8gDgvhN9eAJS8EOIeaUoxGMJ\nXjzWw2tNbi5fWcwHtlVz/fIi8m3mlP2ZWEJlV4ePP+7t5K69nXT3Bc/8fSFEFgcAfaEYdc1uiKuS\nACSEHkwK4VCMx/d3svNUP5sX5vOWjRVcvaSQZUUOcq0zS1Fq8UU41OXnV/u62HW8l9aegLbYXy5z\nIUbJ2gBgX1eAl1q98jQghN4UBb8/ys4jPbx4oo+SYifXLClkRW0eW6pyOa8shyKXBUVRsCjDl2xC\nhZiqkoirtHgjvNTp52CzhxdOD7Cv2UM0GANU7QfkMhdinOwNAFo8+NxhuTEIkQ4UQFFQEyo93QH+\n2uWH10wU5FipcFiwFTiw59tYmWfDqSiogDeW4JQnTGwgjM8foTMYIxiIapGBaajTlwtciIlkZQDg\njyX4+8k+rfiPjAAIkV4GgwESKm5PBLc7DF1+QOG1oa/D4Nbd6ojh/cFOX6b0hJiSrAwATvUFOdHs\n0bsZQojJDAUDE30NGd4XYqayshDQg40eOnxR5M4hhBAiW2VdABCIJThY148algpgQgghslfWBQDH\nBkI82eSWzl8IIURWy7oA4ESHn77eoCT/CSGEyGpZFQDEVJU/He9FjSb0booQQgihq6wKAHoCMU43\nurXlf0IIIUQWy6oA4IlGN/X9IRn+F0IIkfWyJgCIq7CnYYCgPyIJgEIIIbJe1gQA7f4IOxrdejdD\nCCGESAtZEwCc6A5wtEU2/xFCCCEgiwKAe0/1Ew7H9G6GEEIIkRayIgDwhOPsre/XEgGEEEIIkR0B\nwPMdPo50BST5TwghhBiUFQHAkWYPAwOy/E8IIYQYkvEBQG84zv11/VL8RwghhBgh4wOAdk+YI41u\nZPxfCCGEGJbxAcAjpwfw+KPS/wshhBAjZHQAEEmo7DzVRzwS17spQgghRFrJ6ADgcG+Qg60+vZsh\nhBBCpJ2MDgAOtPmo7wmAScb/hRBCiJEyNgAIxVUer+uDqAz/CyGEEGNlbADQF4jy/Kl+JPtPCCGE\nGC9jA4CnWjz0usN6N0MIIYRISxkZAKjAMyf6CARjMgAghBBCJJGRAUC9N8LeFq9U/xNCCCEmkJEB\nwIkuPwfbvZL9L4QQQkwg4wKABPBE/QDxYEzvpgghhBBpK+MCAH8kzrOy+Y8QQghxVha9G5BqL7X7\naOz0692MqTkTpCgzT1ZUz/xP+m53rJKaZMwRh0sIIcTsZFwA8FyDm15fJH07Q9A6frOJvFw7KOAN\nxiAcm36bVRVsZgpybMRUFb8/qhU+SpfXrqKNMTksEE9AJDG7zttu1n4+HE9dUCHSz1BQO5tBPIX0\nuQ6ESFMZFQD0hePsbXRDLJG+CYAmhUuWl3DzlgqWlLlQFWh1h3nsaC8PHOhEDcUn79hUUBxmbtpY\nzvbVpSwodBBVVZp6g/ztYBfPHu3VOlydrajO433nVVFW4iQcjnP/wS6eOtwzvbapYHNZeO+2as5d\nWgiKQmuXn9/saqej0y9BQIYxmRQqylxctKiQBbnWaf+8AgTjCV7o8HOyyU1YcoGEmFBGBQAnewM8\ne3ogfSN/Fa5dV8YvblrF0kL7qC+9a20ZXyp38T+P10P07B2kYjHxiSsX883LFlJoNw9/YUkhN68u\n4eMPnOSBXe36dY4qLKnK5TdvW8PlC/PPfPpNK4q5NXyYF4/1TPk9UswKH794Ad+5dikO89DPlLG+\nOpeP3nGUAXdYgoAMYTGbuPWCar50xWJq8m3YZxjEJ1QYiMR5ptHNFx46RWurV84RIZLIqCTAl1q8\nBL2RtL3YnblWPn/ZwnGdP0CB1cRXL6zlipXF2h1sIgmVK1cW85WLa0d3/oNqcm187pIF5BU7ZjeE\nOisqt26u4LIRnT/AojwbH7mgBsU+xbhThZoyF5+4oGZE56953dIiLlyQf/ZjJYwjobK8IodvbF/K\nqmIHuRYTVpMyow+7WaHCaeEdq0v47CW1WKwZdZsTImUy5sqIxFXuO95HIqH/0HdSCZVtCwvYXJkz\n4beUOy1cu6YUbOaJf4/FxDVrSyl3TTw8ek5lDpfr2TlaTCwscSaNwy5aXMCqmrwptk3lqpUlLCoY\nHzDl28yUOS3oGOWIVFIgr9xF9QyG/c9mQ6lrXPAohNBkTABwsDdIY6snrfuDc6tyqXCd/QZ32cIC\nKnNtyZcxqiqFeTbWVeee9XfkW80src0Dy4i3d+jXmU2j/3syM/m5mEo4lHzudUW+nWuXF00pR0Ox\nW3jd8qKkQ8H94RidgSigDLfJYtJGf862BFRVteDjbB+TLSFVmfx3TOX3TqfdE70vM/pZVfsZi0l7\nH6YbKCZUMCvaR6qW26oQ90WJxFN7AXeGYsSGfuVU37fZNGHoeFhMw8dnOr9PVbX3xGKa2vfN5P0b\nee6YlNlfL5NdM6m45sScyJgcgJdbvTS4w+k7/28z4ypxTvptm8tzKCt20NEfHP9FFZbk27mwPGfS\n37OqNAe7zUQ4pG2HXFbq5J1bK8kvcNDe7efOXe14/dGzT5eokFdg5x1bKqkoc9HTF+SuXe30eiaZ\nd1dVHm1y895t1RQkGX593epS/vBSKwNnm65JqKyrzOWc2vykXz7eF2JvVwAUKC52cOu5VRQUOQh6\nI/xxbydd7b5xv1uxmFhVk8f6UieWZOeJAsFoghPuMHWdfiKB6GBnqYz6nvxSF+dV5VLmME/tvqVA\nLKGytzfE6TYvibD2nuSVOHnv1kqKih0EfBHu3N1By1QSG1UoyrPxlnOrqC5zEQ5GeexAN/ub3FNo\ni8K2ZUVctaYUi8sC0QT76wd49EgPsUh80vNBsZu5dl0Z25YWkkiovHSij2eOpSDpVFE43e7lrkPd\nvHNjObYUJPG2+aP8375OQhHteOcWO7lwQR6l9uTvW1xVafVHOdgVwD8QIjEUjEyjKcuq83jTxnJc\nBXaUuEp9q5d7DnYR9kWn9Hu2LC5k+6YK7HYzR1q83Levg3hg9J4mJpPCNWvLOG9FMbF4gheP9/H8\nyT7UKQYCzlwr7z63mooKF+FAjHv2dFDf5h3/jRYTq6tz2Viec9YnxbiqcnggzMlWL9GR+6+o2jVX\nU53LtlIXDouS9LgHYgkO9Ido7Q4QDUa1gCBd7+MZJiMCAG8swQt1/RCKpWf2vwp5dgvriycPAGwW\nhXMXFXCwfmD8FxWFiqpcSpyTD5NuLnGQZzUTDsVw5tr4zg0r+ODGcgAiCZX1ZTl85eFTEwcBKhQU\n2vn+jSv54MZyzIpCQoVlRQ6+eN8J1LPd8BWFl071U9cbZGuSKY+Lq3NZWZvHq0d7mPCuaFI4b2kh\nK5PkS6jAE3X9dPUGwGHhK9ct4x+3VZ35+saqXD5551H8QwGGChabiU9fvYRPnVdNqdOCaYIbTDSh\n0heO0e4O8+DxXu7e10ldh+/MU9Prt1TytWuWsLjAjss89QG0hKrSFYrx8NFevvLQKQKxOF/evoQv\nnld95nvOq87jPX8+TDQQPevvMpkVPnTZQr515SKsg+f7tUuLeN+fDtHaE5j45qnC9i0V/OKG5Swr\ndJz59MC2av7rpRa+/Xg9oUlWoVyxrpQ/3Lyacod266jfUM7Nfz7M3pO9s7tpK9Dvi/L5+45z/+kB\n3r68iJpc25kv59jMbKrOTfq+NXnCNPcFzwxshGIJXu7wc8/BLg43ukFVOW9NKd99/TLWlbpwTvC+\nJVQVbzRBpz/CnhYvtx3s4rXjvQSnuDLnvOVF/NdNqzh/xAhdMJZg66ICvvrwKfyeswS8qsrCihx+\ncfNqzq/OA7T7ms1h5i87moafkFWVy1aV8su3rmZJvnZtNG6p5F8freeOXW0kJgsCLCY+ecUivnPl\nYoZmRq5eXMA7bj/EwEDoTPtMVhMf376Ez59bTZnLgnKWA5BQVXrDcZ481ceXHz5FV6/2e8xWE5+7\najEfPL+aapcV81muua5QjE53mHtO9fHQvk7q2rxpPZqbKTIiAOj0R3kinbP/USlzWji3zDXpd1oV\nhesWFvD7wY5rJJNJ4ZpFBVOKcZYVOHBaTZBQ2Vydx3XLCs98zWZS+Ph5VTS5Q/z4qYakQ4gWq4l/\nvmIRH95UMfz3FbhoaSHmPCux/rOMAijQ7w5z19GepAFAvs3MrevLefVY74Ttd9ktvHl1adKvecJx\n7jjYDbEEy2vzuXp50aivv25JIefW5PHs0aHVBiqLy3P4woU1VI/oVCZSZDezLN/OJQvyefemCr72\nTCP3vNaO1WHh/122kPMqJh+BSSbfZuaj26p48VQf+zt8vGVl8aivX7yogE0L8tl9tOesgWxOjpV3\nrS870/kDXLGwgOUL8rUAIBlVZUlFLt+6avGozh+g0G7mcxfVsqPFwzN7OpjojTWbFT64seJM5w+w\ntMDOJatL2FvfP/ucEwX6PBH+9kIz9+9sOXMI4gmVTdV57PzMubis4/NjbjvYzTcfOHHmiV1FeyrV\n2qOgWMx87sJarphgNGnse1STY2VreQ43ryvjtn2d/PtjdXgHznK+q2DNtfLFa5aM6vwBnBYTn91W\nTXN/kJ8+cfosnZrCOcuKObcq78xn8iwmPrulkodfbsV9ZjmjwrUris90/gCL8u1887qlHB0Ise9s\nK2wSKrWFDm5eW8rItIgLavK4aGkhD7/Wrv2sCitr8/m3C2upck0tJyPfZuZDWyrZ1+jmf3Y0gQLr\na/L42AU1LEuSwzNWkd3MqgI7ly3M58Mby/nC0w08trsjLZYzZ7KMyAHY0+bD1xdM2+x/AGeejYqc\nqV1MtaUucgvHZ/GbbSbOrcyd0u+w2sxYS12AQl84hicy+kKym018/pIFbFuefNXB9o3lfGRb9bjP\nRyIJ1OgUCvrEEjx2tIcGXyTpl7ctKaCszDVBrgMsrMphS1XyjvaJRjdN7dqQ5UKXlQrH6Di2wmVl\nRZFjVKXFqoociqcwcjLW+jIXv3rTCt5+XjXYzeQ6Zxcz200KxQ4Ltbk2loy5MRZazSzPmyRAUUHJ\nteEa85pNCqwtz5n45q8oXL+xnHMnyB/Js5n55LZqzGdZoWE2KawcEzwAXFqRwkS7wV+TUFViCe1D\nTahahz5B55lAJRYf/v740Dz+4LFQcqyUFU7eCY1VaDfzj+dX84MbV5JfYJ+481ZVtq8o5qpFBcmP\nmwLv2VRJTv5ZfocCy4sc496+yjwbllyb9nMqYDfjyB//WpYW2Pnx65exsCL3rPPpNTlW1o0ZiXSY\nTaNrLqgq26pyKThbMvIEb13J0HmpwvIC+5Q6/7HWl7r43RtX8vrzqtL4oS4zZEQAcN+xHsKD86rp\nSaG2IgdrksSegUgc75h1/8sK7ZxbnjP6QlZVKstclI+5oAbCcbyR8a/dZlZYWeQAExxv9/Ps6f5x\n31Oba+PrVy+mrMQ5/LcSKssrc/jalYsHs+yHRVWV2w51E/effYhae8kK+1q8vNCYfF56a1kOly0p\nnPDH37qmNOnTejSh8vDRHry+wQTACe4PljHz9svz7ZPmVU2kxGHhK5cvZE2hg8Ntvpn9kkHHBkK8\n2O7DZjZNOCQ6+bFN/mmHeYLjMZg8un11yVnjtnOqcllzlhUaCskHJmxmE+kcfasKqLPoSD64oZx3\nnVs14VSZxW7hmjWlFNkn7jCXFju4ckXxhJ2zomjLZMeeoqpJ0SppnvlGJrxrX7Egn3/fvgSnyzZh\noGE1KTiTXAhjX1qJwzJqhGkqOgJR9g3m5YA64TTbVFQ7LXzvysWsrMmVpb5zyPBTAG3+KKdaveOT\ntdKJAheUuZImNj3V7CHfZmb7guHhyUqXlRWVOew41jP8jSpcUJFL7ZhOcVeXH7MCV40Z3syxmLi0\nIodHASIxfvxcMxctLGRj6ejo/7rlRbz/kgV8/+E6iCUwOy189qrFnJfkSfGxk/3cv6ttamV4FVBD\nUe4/3MNbV5eMm3d1mBWuXV3Kg/s6CY8MYFQVV76DLUsKk/6JY31Bnjjeqx2QM98wtRvE2O+Kqyqv\ndPg56QmjoI0cbCp2UplkpGZtqYvtK4r554dPUdcTYFlNHmUuK3lmBYfFxOYy17gOvdUX4bQnDEB7\nIEb3QIg7D3axv36ABetKmU+Lq3K5uibvrN+zMM/OFcuKOHR6YErH78zn1bN9NX01eMK82OknmlCx\nmE1sKHKwvtg5LsixmBTes7mC3+9qI+QdO6KlUlPs4KYVxWf9W0U2M1ctK+LBfZ1apdIkptvhJvOu\nTRXsaPfxpx2NE3acM32nEioc7AngjcZHXZvtoRhub4QHDnXzyOFuLUqcYDVHLKHyUoefOq92zRU6\nLFxY5kq6rHl9iZPtG8o50eaTIGCOGD4AeLHFw4FOf/p2/oCiKGwud43r0FTgSLOH6jwbLBjdga+r\nzcdqtxANx888ei2pyCFvTFZ9Q5ef/nB8XACgAIsKHYPLfOBEi5cfPdfEf9+wnNwRQ3sm4J/Pq+Zw\ns5eH93fwrm3VvHdjBWMd6w/xL0+cpn9alfcUdpzo5VBPkG1J5s2vW1JAZamLxpGV2lTYWOHiiurk\nndWjJ/tp6R5MdJvl0qFgTOX7L7Zw354OMCkU2c2sLXXxle1LuHZZ0bjv37own18838TXHzgJOVYK\nHBZcJoVlJU4efv8m8kY8AarAXYe6+d4zDSgodIdiWoZzLDH/NzOTwlvWl5EzZki3NxSjwGbGMtjx\nmBTYvrKYP748yQqNDPFo/QCfvv8EsWgczCaW59v5wLlVfO6iWi1/ZoTaQgerq/OSzrFfuqKYmjFT\nNx3BGMV286ig/+qlhSwqdtLY6Zuz+5XTrPCdyxbS2eHjycPdKf07sYTKvz50ij1t3lHBbk84RiQY\nm9I+JMFYgh8/38Tf9neC2YTLaub8yhy+ePViXpfkmnvT0iJus5rxhaWk81ww9BRATIVXGtyE/Wl8\ns1K1Oci8vPFzYaF4gpN9QV5o9REZ0ylcsyCf4hHzaU6XldVjnuAiCZW9bT7qeoNEk3Qqtnw75AzN\nH6r86dU2fr6va9z3lbmsfOaKhdxwXg1funzhuCAjEEvww+ebOVLfP73jrECPO8yfD3cn/XJNno2b\n1pQy6pnEbOLiNaWUJJlr90Ti3HGwK2WJQQlUIuEYBKLgj9LfF2TnsR6+8lg9bUlyF1YV2Cl1WLRj\nEIjh7gvS3hWgozeIOiYYUYGBQJT2zgBt3X6i3oj2VKQozOvJqqqUFzt53dKiUX+1LxTjB7va6R1T\nK/+y2nyqy3Mw4hP9dIXjCZRgVHv/vRFOtXj4xuP1PFI3frqsxG5mU1GS6poOCzeuKR3V0ccSKj9+\ntY2TfaOX8q4tdrJ1aSFz/f7X5tn49+uWUTJJPsB0qapKZ3+Qzk4/bd2DH11+Ip6IFthOIdhIAGo4\nfuaaCwwEeeZIN198/DSnBkfLRlpZ5MBuSdebu/EZOgDoDcX4e7LlculEVVlS5EiaABiMqRxzh9nV\n6iE0ZliwJt9OacXQjVilJsfKlWMSAN2ROE+2eqn3RYgmudAX5FipybGeuQnEIjF+uqOB55s94773\n2tp8fnPDClYmWap426Fu/jg09D9dsQQvHe+jyTu+Q7UoCpesLMaeN5wc5cqxcssEw6nPt3g4nWy9\n8gxpG8YNzpsP7R5nUmgeCHHKPf5mZLeYtNwCdeT3gzLB0K0C2mP10N/QgwqXLC5k7ZgVKK91B/jj\na+2cGtNJ5dvNvGFNSVqPqKXWiPfHpBAKx9nd4Uv2XePzHxIqm2vy2DxmuuxYf4i/H+jk6abR15nF\npHDL6lKUmSajTMOltXl8dfsSXDm2lMZypqHjNXTRmKZ/bitD186Za8jE4d4A7UmWvxq6gzIAQx/f\no11+Otu8pO/jP6DCukIHC5MktEXiCZr7Q/R1B2gc0+Hk2sxcv7TwzH+7SlyUjymT2uON0NPhp9Ed\nJpZkBGBJno0lI/+uotDe4efrTzfSNebJT1Gg0mUZdyT3dvr53pOnCc10lMWksKvJzUtJgg6Aq2rz\nOLcm70y1sI2LCliYJAjRkv966fPO8VbPCShyWKhOErC1+qJ4olNYE55GrA4Ll64uIWdMp7O30U1L\nq5cH60c/7ZqA61cUYz9bxnqmGhygWZgkyz4YT9AxdmdBs8L5y4tZPub7D3f4ONbsYUf9wLjZni01\nuSyrzEnpk3kyCvCRTeV84tIFKClaoaEoCo4SB7bKHFxDH/l2nFaTFkjP9CWpKhVOCwVJlnh2BaJJ\n720iNQwdANxd1487FEvvG7ICFYV28pMsqQmF4yS8EbqDMZ5pGf1ka1Fgc3UeWM2AwhWLCrCPSaTb\n0ebDG4qiusMkYuMvknKXlfKxNzMFnjrczc9ebkk6bTBSRzDGvz/dQEP77OYsE+E4vzvQRTBJYlCx\nw8J5K4u1UsNWE29cVUxVkuH/4/0h7j7ak9JOSQWtcEqCM+VIC4scvPP8GpYWjF/utq/dR48vapyn\nYxUqS5zcuHT03KonEuevx/sgGmf/aTeeMatI1pS6uGhBfsaXZ9VizuFytGabics3lmulqsdo9UV5\neeR1oEJBjo13rh2dzBlNqNx9rBciCY42ezg2EBr19ZVFTq5YXkSqb1qn3WHqxjxE2M0mPnNRLeet\nLzvT5tmwmhX+76ZV7P7IFl7+0GZe/tBmXvnEOTz9iXP54g3LKZxCnRMYUaNh8JrLK3Tw8QtqWV00\n/pp7usmDLyK1AOaKYZMA+8JxTjS6tbmndKz+N8RmJq8s+Xr2Rk+YSCxBLBSjvt0LW0Yn3y0sdVFR\n7KSzJ8AVC/IYG8jvbvcSiyQIR+J0+CMUjuk4FcBe4hysST7iC7E4v3i+mS01ebxlZcmETf/d3g4e\n2t85taz/s1I5VN/Pke4A5yQpDPSe1SX8745G8q1mrlmWfPj/6bp+eqZSJnca7CYTN68rY2WBHZOi\nUJtvZ21NLlcuKhx3SjX5o9x9qFtLdErn822My1YWU5U/evTpUE+A1hYPKAovt3nZ3xPg0hFJlxVO\nC1esKGbHsR7UFNfmTyfbqnL53JWLiMYT5NvMLCvP4drlxVSNGf1Rgb8e7aG/O8DIlSfrF+azaUxZ\n7nZfhH2nB0CBYz0BDnf5WTuiYzMpcNGKYv70ahvBQOoeXo72BfnLgS6+e/XiUctnF+Ta+OH2Jbyv\nJ0jdVEpFn4UCLMtPvq7/goX5VOXZ+PwdR4ZLKCdhNyvctL6cxcVOzCaFyhwb6xbkc82ignGrpDr8\nUe4/2EXcYNeckRghAFCBcQvd93b72dmS5vt8q5BrNXF+afISwKfcYW3uX4UTnX56Q7HhQhrApmIH\nG4udvBCJUz6mAIs7HKe9zQeJBP5YggZPhNWl4yPwLSVO7jKbiI3MMVAUegfCfPHx06wvz0la3OXR\nBjf/vaMRIpNn9k5KUWjrD3Hv0Z6kAcCyYidXrSimNxxnU9n4Y+WPJrj/cDeJFAd7drPC+zaVkxgs\nkTzRMixvJM7PXmhm98k+49yIVLC6LLx5VQmOMW3++8l+uvwRMCn09wU53OodFQAA3LSqhJ8/a6er\nL5Te19gsXFSdx3lV2vy9xTRxsdtH6/r5/fPNWvLp0LVgNvHmtWXjtuR+5PQATX0hUBTUYIzHTvXz\nphXFoza0ev3CAmrLczjZMECqDq4CPHK4G7vdzE+vWTJqyufi6jz+bfsSPnTHkTkd1LmsNh9rro3w\nQHjC73GYTbx3SwXv3lwBilb5NJlIQuWHL7XwSl2/ca45AzLCFEAEGJe6fqLNR2AglPbDsfl2C1tK\nkw+NHewPEoonwAQvd/hpGJMFm2czU1KZw7lVOSwfUwDo8ECI3YN13wOxBM3+5BX31hU7sCebA1Sg\nrmGA23a1j/tSIJbgN6+00t4dSN3xjSW472gP9UmSAfNtZravK+PWc6vGTXMA7GjzsmeOgj2zMryP\n/LgmqyrH+oL8y+P1/HxH44Trt1NHnfYmjRN/g8rWmnwuHLM8tDsUY29dvxbYaTVz+euJPgJjXtvS\nIgfrFhZM5S8ZlqJw5r1Pdmr1h+P8fn8nn/3bcdpH7rGQUFlQ4uSSETk6AOG4yqt1A0SCg8lsqsrT\ndf14xixhK3VZuXZVCSk9oRUgluC2F1q4/cD4lT5vW1vKey9egGI1zdlb2uGLkJjClOyZa05Jds1p\nSZRffLSe/9rRSDwqw/9zyQgjAHFgVKpyIJbgzmO96V38BwAVa76N4glKAPe5w9oZryi4+4K09QU5\nZ8yQ4jWLCzlgM4/bRritN0h3bxAUhVA0wUlP8qh7dYkLu92CP9mGJrEETd3ja8eHYgmC/khqbxQm\nhePNHvY0e1i6dnwRnLevLsGRpPOPq7DjWC8D/fMb7D3f7uPufZ38/Ug3jR1+bSg8xffrsexmk1Z+\ndZLjbjWbME0WuptNXLCiaFwy4ylPmOc9YZTBREtVhab+EAOhGK4RQ8e5VhNvX1fGM4e6Jizqkqk6\ngjH+dKCLhw5382JdP+HgmLwPBTYtKmDrmDnvBl+EHb0BKHQMldTHF41zsi9EWc3w+2BR4HXLi/jl\nC1atqmYKz6uYL8L3nzjNhvIcLq4dHtXJsZj4j0sWcPt+W0p2Ox6pJxjjpTYv//Z0g1a3ZIb2dvi4\nfU8Hdx3vpaV1sPhPOt/eM4ARAoBxxS8bB8KcavHM8NfNr3UVuTiSLPuJJVTC7vCZvdUTCZXHmzy8\nYXXpqBe7fXEB+WPm9mOqtv0xQzX5o3HinuQjADarCWehHdzJA4Sko2sjl+mkUDwc5/aDXdy4umTc\nE3epI/mp2OwJc8+hrqn8+mmLJVT6QjHKXNZxL9UMPHC0h4YW74yWOk16LFQtGWpkQRWrSaEs1zbJ\n31JZmW8nzzI+qTQQH66Xn5dj5R1rxgdaawocPHDLmuFOQNWmQvKT7AGwbUE+S8pytKWXGTgM2xWI\nkmczjyuNazMp7On088yRnqRb01ptFt60rmzcOVztsvLbG1YQGwoWVbCYtBr/Y22tyuWChfnsPNKT\n2sDWBPVdfj71WB33vm0tS0YUKKrNt/GJ86qxzHBVQDSu8tn7j3O00495xGv3hOMc7wvi9kam9Du6\nQzEqXJZxlTODKtxxvI+2Js+cXHPzLAa0z/q3zDEjBAAxYNRapSca3XR6IxjhDDmv3JW09nZvKEZn\nYET0r6q80uojllBHJcMsyLWNe/oPxhI80ejmTHaeCgPeCLGEeqaq25A8m5mtZTm0NrrT4HipvFLX\nz4sdfi6vntqmRvfV92ujFHPQdH8swfdfbeNtK4rZNqbI0kVVufzPm1by8XuPaasgUtkBKtAfitET\niI2rD1FY4kSxW1AjEyw3VOG88hxKHKMDgIQKRz3hwQBAZdPSIlYkmXoqtJsnLQk8ZEOpk40L8znd\nnrraC+nkvrp+AoEYn9pWNeq6Kbab+dHViwl6I/xtz5h7uArVFS62Lx6/8U+e1cQVVVM7r6tdVs5b\nUsjO431zstpi39FefvxcE99/3dIz02oKjMtZmI6EqvJig5t9De7R18PIOhqTCMQSfP/FFm5YUczV\nY47hRVW5/PeNK/jwnUfp7Urv6q5TOVyMGblOR0bIAQDoG/pHKJ7glbp+oum+/A/ApLC82Jn0ILcH\nYjSN3FRHBXe3n+YxQ/mKwrg5/A5vmP4u/4hv0jbicCfZFCjHatKW16TDKK6i0NkX4qkTvVP69kAs\nwRMHu4nP0UZPJgUOtXn5xEOnkk6hvG55Ed95wwoqi5wpP36tgSgNSfI2Xr+kkNpROxmOoII1x8qm\npYWjNztCG82I9Ye0n7OYuHl1CSWzuNmDNiJx49pS7NPcFc4oAuE433y6gT8c7Rn3tYocKz++YTmv\nX1827r24YWXJlLaVnsxNq0ooyLXOzbWZUPntSy38en9Xyn69gpYsiXnMx1Cxqyn+kvp2L195rJ7T\nY5ZIArx5aRH/deNKioqdRl+GqiIBwOwowydVGC2i4sRAmB1N7vTv/FUw59rImWA7zPZgVAsAhl6j\notDojbCjffLd5p5s89HlH9wNb1CLP8JAkgDAoigsKXamzxBuIsH9h3to9U0+XLir3ccrc/xem1HY\nfbyXrzzdkHRXxZvXlvL1NyynIM+WuhuSotDkCVPXN/4GuKbEyXsvrEFxWM6skx4qkoQCb95Qzk3L\nCsf9XL07RM9ASEtQK3Vx4dLCydsxBZcvLCC/xDVpJ5V0f8gza71Tc9hSzaTAwECIrz1WzytJrrtF\nBXa+/YblXLii+Ew57bw8G1etLE66sdd0bazIYdPiQubkACkQCET5jydO83yKpktVtOHYpF+Iq1O+\nPkyKwovHe/inpxqS3rPevrqEb79uGQV5diMHAVFkCiBlBgA/kHe8w0d7Vwqz0+eKqrI4z87iCfZ3\nj4dixEdW11MgHIjS3OGHNWffKe5wo5twMDbqZ0/6onSH4izLH//9znwbJqeFRArXHc+YonCsxcPO\nZi9vWzNxDYKYCn8/3kvvXCf/KUBC5b6XWzmnxMU/Xbpg1CEyK/D+LRUc9YX5yaP1WvZ8Kv5mIMaL\npwe4ZVXxqGxoE/BvF9Zis5i497V2Tg6EURMqi/NsXLu6lM9dUktRkvn6Jxs9nBgIgVnhgsWFnDPB\n0tPpqsq18cZVxfyu3TfhqbOw2MFNlywgPCZZUPFFaO0Nsrfdp01ppBkVLQhobvHw74+c4n9vXjOu\nCuCm8hy+dcMK3n3nUdqaPayqyuWqhQUz+4NjFNrMvHFFMc8d6pqby1JR6On085WH67jt7WtZNMHD\nyFSZTApXbqmkenHBqK1+lWicYF+IXZ1+3P2TLxtVABJw3652Vpc4+eqlC0eNcpoVhX/YWokvHOOr\nD9XhN8Jo73iGGAEwSgDgRstxyvvLiT7UWCL9TwgVlubbWDpB4Yxud1hL4hspoXKk048nmiDfmnxw\npsUXYU+LZ/QKCEUh4osQjyTfMWtBro1Sp5WuwOhRg4nM9aGNhOPce6ibm1eXTDgw0eGLcO+h7pSt\n9Eie0zi4/EuBUCTON546TUWJk/eMWaVgMyl8/aJaWruD3PVSS8qOw90Huvjwtio2jZmrd1pNfOWi\nWt63vpx9/UESCZU1BXaWFzrG5XgAdIVi3Lm/E4IxbHYzb1tfNi7BqtkT5htPNRAOJT9HEirUFtr5\n5ysXUzwi6dRpVrhiRQm3vdqOOsH5tbU8h7tvWJH0a62+CN/e1c4vnzxNPDjLG/nc9JKAwhNHevjX\npxv4+fXLKRwz5XHlgny+ft1SPnPXUS5fVTJuHr0nHOM/nmvG3RNI+hdUIM9p4SOXLBj3Xl+4pIDq\nEidtPcE5e3nPHu/l33Y08qs3LB9XEno6rCaFH12+MOnXgrEEDze4+ebDp7QcgSm0S43E+OWORtaX\nurh1qFrhIItJ4aPn1fBiV4B7X2ieiyMz16JAh96NmIxRAgAPEOgNRjl+esAAy/8AVArtlqQlgOMq\nHOoNjq+wpyjsaPXS7o+Qn6Q4D8DJ3iCvtSbJyg7F8AWS36AX59mocFroSlLRL9lRTKiDJXLn7NCo\nvFDXxyudPi6sTJ409Wh9Px1dfqYWsEzyPSoMxBJaXfYR3xpNqPQMrdFWFDyeCF94+BSLC+xcOiZR\nLt9q5tPnV/P80R46+oOjzr+J/vpZT1EFOrv9fPelVn77+mVJE0UX5dtYlD/5XPMdh7p5+VgvKAqW\nAgerkmy9/Gj9AL/Z2TxxLQMVnPl2tq4s4ZYxpXAvrM5lTbGDo+2+aV92Nbk2vnlxLa8d7ubluv4Z\nX7fxhEokrpJk2/gzQdx0KSP/kYC/vNrGklIXX7uodlyg9c5VJTy/qYKbkkytHO0M8Otnmwh7J9gq\nWwVsZmqr88YFAFvKc1hbnkNbV4DeZFveqsx+90sV7n61jfOrcvnUedVTOlTTPZxOi4m3Li9i15YK\n9rV4YIJDMepzikK/J8z/e6SO6kIHV9SOvuZyrSb+5YIanjrQhXta25CnhX4gNOvfMsfSOgdghD7A\n+2izh3oDFP/RKPij8XEFVgCCsTjPNQ1l8Y/6Edy9AU71Tjxy9Ez9ABH/+BnXuKrySkfy/IH2QDT5\nzQWFUFzVanOP0BMak6CYaiaF1t4gT53qT/plfyzBw0d7CE3hiTEQSxAcc4P0RuN0BEauElGpd4fH\nbcwSTSRocIeHv0+BrjYv33q0ntYkS5q2VuRQnSRpK5ZQ8Y8ZzYkmVBp8kxzDBDz4Siu37e0gNsO5\nzr/W9fO1pxqIReKASnGuDceY0aNYQuXvRweXtJlNyT8sJoKBKHsaxz+9Lcy1Ueq0kEioeGaQkJln\nMeGyzKIAjQL9kThH+5PfT0/2h85afvZMLsIYde4w0aFzRwE1FOfXTzVw//HxSao5VhMbFuRhTRLQ\n33a0h3Aoqq35m+DYEkvwWv0AnjHnictiwlnoAEXLbxp7dBPRBAydiwoQjqMmuTZ9MZXwREG7AuFg\nlO8+eZodjVN7Oj/tixCaQf0Hm9V8ZrgtFE+M22+kLxwffW9RFJrbffzTI6c4nuT9rcyzYZnl1IVO\nutGK2KU1wwQACfAdanAT8qW2cMacMcG+Tj+72sZ3yk80eznRknwXw0gozs93tY3rUACavRHuOdCZ\nPDEmoXLv0R66guNvDs83umkbCI8fNVBgV6efQ2OS0U70BjnRM8d5FvEEv3+tg8Yk2fdPN7p57Hjf\n5H9fUTjaHeBYz+iA6WRfiN3t/lFnt6fTT6t39N9q6g8TGZuIpyg8dqSbf3minv4xnV1XIJpkYxKF\njkCUx8Zs/eoOx9nZPEnylQLeQJQvPXiKr+9oSrod6kT8sQS/3tfJJ+45Rt+ZPRIU+geC9I/pIHa2\n+3itYWDyX6qqPHa0h/oxNSMaPWG6AjHUhModx3uJTHN06JlmD8d6gzO/2ygK7Z4ID53sG/elJm+E\nI6cHknbwQ8dY9UU4NuY69EUTnGz2jh4RUaB7IMS/PFzHC62jlz7GVWjpDNA4Jjiv94TZdbx38mJJ\nisLjp/rY2zm+Hb5+LXlzX4tnXNXAJ1o9eEcW8UqovNDswTPmweJgqwef/ywbVSkKrT0BPvFIHXvH\nbAHtjyc45omMGhJ5vtGdNEv/bHrCcfY0De7Poijs6w6wb8y0SH1/iCNjl/gpsOdYL996ugH3mGsu\nEkugTjBtleZa0ZLX01rar+/52te+BhA52h+64Yc7m1e39xogARBAUfAGYxwaCLGiPIeESatp/3Kb\nl395pI6Ws2xs09YbJKoolBU6CMVV3JE4p71hfvJ8M48f7kmeGKso9LvDBOJQU+IknFDpCkZ56Hgv\nP3yygQFvku18FYV+f5QIsLjEiS+e4HBPkG8+1aAVwJnLw6woDHgjeIAtVbk4rWZCcZXD3QG+9Hg9\n9c2eKQQAEA7HaYklWFbqJKxCvTvC155r4rUTvQw/2Su4QzG8UZXaEifRBBzq9vOtpxs4MEEnfbDd\nR3s4zupyFw6LmRZfhO8/38yTx3tHH38ForEEpzxhFpe6UM0Kzd4IP36xhScOdKJO1lkq2h70OxsG\neKXdj91iRrWYsJtN4wpIBWIJGr0RXm718q87GvnVM414RiZdKRANxemOJlhTkUNEVTnUG+Rzj9Vr\nG2dNmp2l0OEN0wWsKHESSajUucN8f0cjzwy+7qPdAeq8EaKxBMFwnDZPeMKPg11+frG3k+8/3UBz\nT2Dyv382iQT1/WFKC+w4HRa80QSnBkJ8+5lGnjray1kPswoN3jALip1YrSY6AjH+8FoHf9zVSjQ2\nptqcotDvjfByh5+VZS4KXRYCsQT3HOnhBzsaONETZHllDpgUGr1hvv9sE08c7p58cEOBSDBGSzDG\nsvIcEmgrgX79Sit37ekgGk9o16LZREWBg0BM5dU2L99+8jRtPcER77HC6f4QeS4rJbk2+qJxnqwf\n4Ac7mnB7JtmyW1Ho6Q/xck+AZSVOip0WBqIJHjzWy//ubCYaHR4NCQei7O3040+oxKMJuryRCd/n\nhoEQD9f18/UXmnli/2DlSEXBHYwRUFWWlDjxx1WO9ob4xlOnOdHoGd9OVdvevT8SZ2GZVjulxRvl\nGy8088rRqS0bTjOPA48ACV66Xe+2TMgAPSmoqsqPX2r50ZceOvW5UNB40aCzwM7iEicOk8KprgBe\nzySBoQqYFcrKXCzI00p3Nnoj9HUFJl0WoygK5VU51OTYcIdiNHT6tXX0Z3mnFZNCSYmT4lwbjX0h\nwu55nLqymNi2qIBNFTkEogl2Nrlp7PRP73cokFPgoLLIQac3jK8vlPyJUIHCEhcLC+zU9wTwuc/y\nPgymiC+pyuXc6lyO9QY51OzRElAnYMu1UV3qpD8Q0xLCpvOkPFjAx2wzU1Tq4uLKHFYXOc/MRcdV\nlVZflFc6/Zzu8BEdug6STrQqVJW5qMy30ewO09MdmGorNGaFqrIcKnOtNHsj9Iw87wbzKCwmBbNJ\nSdrxDRbBQ1VVbQg4kaKcHRXMDjO1FbkUWk009Yfo7w9OeWrB5rSwrCIXdyROR5dfG15XJv5b+QV2\nLlpcQExVeem0G//gUHxesYPFJU46fVG6uvzTe58VyCt2srjIQX84TlubT9vkaqgdJoXiMhdlLiuN\nPQFCyarrqWCymaguz8FqMdHc6Sc2zQTLoiIHFy7IZyCWYPdpN5FANGmnbDIrWBTlTGnjJC8HdbCq\nZTzpNadQUuKgNN9OY1+IkDs08fulAiZYVJvPueUuTvQGOdjsMWop6i8APwTgR9v1bsuEDBEAcNWf\nKLuk9rM9vsgPVAOMWoyjnvkfYBolLgfXHms/Np2fU4cTDKd64z3TRh1KcKqqVuVhNiWIp9r+6b7O\n6R5LNQXHcOhvjr3vTaPi2plzZzbHczY/P5fUGVxLY392OscQRk+fpeLYcpZ2DH19sjZO57VM9bXN\nhbm+5tJPBHg/8BcgrQMAQ6wCMG+toNsbbkRR4hgxAJhNmvJMLoCZ3Jhm2sZUUJTZv6tTbf90X+d0\nj2Uqblip6HRne/NM55vvrF7XdN77Cb4/Fcf2rENyk3w9Jcdhlj+fyteb7HWl6ak3Rf1AJ5DWnT8Y\nJAkwrg0h1qEVAxJCCCHSVT8GqAIIBgkABg0AhqwIIYQQImt0A6mrGDaHjBQAeIDTejdCCCGEOIt6\nYPJNXdKA0QKAU3o3QgghhJhAAjhK2m6BNZqRAoAEUMcEG1IJIYQQOosCh4G0TwAEYwUAoEVWPbP+\nLUIIIUTq9aA9qBqCMQKA4UjqKFqChRBCCJFujgOGKV1ojABgWB9wUu9GCCGEEEkcQeunDMFoAUAU\n2Kt3I4QQQogxosBBDJSnZrQAAGAXBthnWQghRFbpAg4AhkgABGMGAPVIPQAhhBDppRVtCsAwjBMA\nDEdULcg0gBBCiPTyMuDVuxHTYZwAYFgQ2AfE9W6IEEIIgTbv/xIGKQA0xIgBAMALSD0AIYQQ6aEF\nLQHQUIwVAAxPAxxGlgMKIYRID3uAJr0bMV3GCgCG+dBGAYQQQgg9xdGG/7X5f4OsAADjBgAJ4Cm0\nDYKEEEIIvXQDzwKG6vzBuAEAaGWBDTfnIoQQIqMcQOuPDMd4AcBwhNUK7NS7OUIIIbLaY2jT0oZj\nvABgtKcAt96NEEIIkZXagBf1bsRMGTMAGB4FeA1t9yUhhBBivu1CW5VmSMYMAIb1AX/XuxFCCCGy\nTgR4FANm/w8xegCgAk+j5QMIIYQQ86UFeBwwZOcPRg4Ahg/4XrQ1mEIIIcR8eQRo1rsRs2HcAGBY\nCLgHCOvdECGEEFmhD3gQiOrdkNkwdgAwPArwAgZdhymEEMJw9gCv6N2I2TJ2ADCsFbgXg+3EJIQQ\nwnCiaP1NP2DY+X/InABARRuOadC7IUIIITLaMbT5f0N3/pA5AQBo5Rgf1bsRQgghMtrfMODOf8kY\nPwAYjsDiwF/RNmYQQgghUu0kcBfahnSGZ/wAAMZWBnxc7+YIIYTISA8BR/RuRKpkRgAwzA/cwVBy\nhhBCCJEabWj9i/b0b/D5f8ikAGD4zXgKeEbv5gghhMgof0MrPJcRnT9kUgAwLAD8DvDo3RAhhBAZ\noQX4IxlWcC4TAwCA5xlapiGEEELMzt+B3UDGPP1DpgUAw2+MB/gl0KV3k4QQQhjaSeC3QEzvhqRa\nZgUAMDIIeAl4QO/mCCGEMKwE2vLyfXo3ZC5kXgAwLAz8BqjTuyFCCCEM6TDwf2RQ5v9ImRwAgDZn\n8ycypGiDEEKIeRMBfg3UAxnX+UOmBgCjqwPehrZzkxBCCDFVz6FV/ctYmRkAwMggoB74H7TlgUII\nIcRk3MB/AZ1ARj79QyYHAKPApjfmAAAIL0lEQVTdDTysdyOEEEIYwp+BJ4CM7fwh0wOA4TfOC/wQ\nrZiDEEIIMZGDaKPGIb0bMtcyOwCAkUHALuDnaIkdQgghxFgh4KfAIb0bMh8yPwAYFkcrEfyk3g0R\nQgiRlu5FmzLWZPDwP2RLADD8JnYB3wOa9W6SEEKItHIC+D5aAmDGd/6QLQHAaDvRygRH9W6IEEKI\ntOBHyxPbp3dD5lP2BADD0VwMrbjDQ3o3SQghRFq4E63kryYLnv4BFL0bMO8+/8TQv85F295xld5N\nEkIIoZvXgHeibfqTNZ0/ZNMIwHi7ge+iLREUQgiRfbqAbzLU+WeZ7AsARkd3fwV+j7ZCQAghRPaI\noVX7G941Noue/iEbAwAY+SYH0RI/npj5LxNCCGEwKlqd/18w9ACYZZ0/ZGsAMFoT8FXguN4NEUII\nMS9eBL4G9AFZ2flDNgcAo9/wV9GCgA69myWEEGJONaDd70/o3RC9ZW8AAGODgLvRpgMyvv6zEEJk\nqX7gG8DTZz6TpU//kO0BAIx88+PAr9DmhGJ6N0sIIURKRYAfoS3/VoGs7vxBAgDN6F0DvwP8Xe8m\nCSGESJk48Fu0rH9tQ7gs7/whGwsBnc1wkaDlaKMBV+ndJCGEELN2F/CPQDsgnf8gGQFI7hTwRbTk\nQCGEEMb1JPCvDHX+4gwZARjr86NKAlyENmy0Wu9mCSGEmLbngU8CB898Rp7+z5ARgLFGnxwvAZ8l\nS8tECiGEge0FvoB0/hOSACCZ4ZNEBR4DPo0EAUIIYRRH0Tr/4Wlc6fzHkQBgIqNPlseAzyBBgBBC\npLvDaPdrWes/CckBmMzonIDrgJ8BK/RulhBCiHGOonX+T575jHT+E5IAYCokCBBCiHS3G/gXhp78\npeOflEwBTMX46YBPo0WaQggh9Pc88FFGDvuLSUkAMFXjg4D3AS/r3SwhhMhyjwGfAPac+Yw8/U+J\nBADTMfqk2gV8DHiYobrSQggh5ksMuBP4OHDozGel858yCQCma/TJtR/4FHA7Wq1pIYQQcy+EtnHb\np4DTZz4rnf+0SBLgTI1ODCxFSz75KJCnd9OEECKD9aFt3f4ztA3cNNL5T5sEALM1HAg4gX8AvgRU\n6d0sIYTIQHXAV9GG/qNnPiud/4xIAJAKw0GACXg98A1gi97NEkKIDJEAXgC+jJbxr5GOf1YkAEiV\n0VMCm9FO1DcCNr2bJoQQBhYB/oL2YFV35rPS+c+aBACpNDoIKENLUPn44L+FEEJMTxvafP9vAfeZ\nz0rnnxISAKTa6CDABtwI/BuwSe+mCSGEQajAi8B/Ao+iTQFopPNPGQkA5sroQGA98M/AO5ApASGE\nOBsvcBvwY6D+zGel4085CQDm0uggoAB4L1oZYdlHQAghRlOBg2hD/ncDgTNfkc5/TkgAMB9GBwLn\notUMuAFw6N00IYRIAz7gDrTOf3ifFen455RUApx/u4EPo21ZeWiWv0sIIYwsjlZW/SPA55DOf17J\nCMB8Gj0SALABbZXA24ASvZsnhBDzqAv4P+CXjCznC9L5zxMJAPQwOhCwA9vRcgMuH/xvIYTIVD7g\ncbRSvi+irfPXSMc/ryQA0Mv40YBS4Ga0HQbXA2a9myiEECkUQ5sC/QVwP7KuX3cSAOhtfCCwFHg3\n8L7BfwshhNHtB/4M/BGtuI9GOn5dSQCQLkYHAma0UYB3AW9FAgEhhPGoaKV770Dr+I+N+qp0/rqT\nACDdjA4ETGiBwLuBW4DFejdPCCGmYKjj/xNaxy+V/NKQBADpaPy0gAVYhxYI3IBWSEhyBIQQ6SQG\nHAbuHfw4irbMb5h0/mlFAoB0NzoYUIDVaPsLvAVtfwEpLSyE0FMALbnvbuBBZEmfYUgAYBTjA4Ea\n4Cq0qYHzgHK9myiEyCqtwAvAnYP/v2vUV6XjT3sSABjN+OmBXGAbcB1wPbAMcOndTCFERvIDJ4C/\no+3Stx8IjvoO6fgNQwIAIxu/cqAKuAx4A3AOWq6AlHsWQsxGDDiF9pT/CLAT6EYS+wxPAgCjGz8i\nAFo1weVoIwPbgYuACsCpd3OFEIbgB9qBV4GHgb3AcSSpL6NIAJBJJg4GFgKXApcAm9ESCSUYEEKM\n5AWOAHvQSvTuRJvnj4z6Lun0M4YEAJkoeSAAYAVq0fIELgYuGPx3OVCgd7OFEPOqH20o/wTwHPAy\nWgZ/B9qw/2jS8WccCQCyxfigQEELCBah7Uq4EW1kYDVaUOBAyyuQc0QIY1PROnQf0IBWmGcf2jr9\nw0ALY5/yQTr8LCA392wz8egAQB5QiJYvsAEtEFgPVKJtV1ww+HWr3i9DCJFUFO3Jvm/woxmtKt8+\ntDn8/sEP34S/QTr+rCEBgJgsKDABRWhTB2VowUH14EfV4H8XoAUJdrSqhcrgz1n0fmlCZIgYWta9\nitbJh4BOoBdtGL8VbZOdrsGPof/2DP5MctLZZzUJAMTEzh4YWNE6fNvgv22D/101+N85aLkFsgxR\niNlR0TLyg2gdfxtaNn4YLRiIDP47lvSnpZMXE5AAQEzP2YMCIYTepMMXQgghhBBCCCGEEEIIIYQQ\nQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII\nIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE\nEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC\nCCGEEEIIIbLB/wdxkvOs6voxkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMC0yMlQwMToxNTow\nMCswMDowMO4G7JEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTAtMjFUMjE6MDY6NDYrMDA6MDCa\n3ntxAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTEwLTIyVDAxOjE1OjE3KzAwOjAwwUNL4gAA\nABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=\n",
    x: "-28.982998",
    y: "-38.430904"
  })
], -1));
const _hoisted_4$2 = [
  _hoisted_2$3,
  _hoisted_3$3
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const isLoading = ref(false);
    router.beforeEach(() => {
      isLoading.value = true;
    });
    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-02cfd2fb"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}
const isClient = typeof window !== "undefined";
const isString$3 = (val) => typeof val === "string";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = unref(ms);
    const maxDuration = unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source2, exclude) => {
  var target = {};
  for (var prop in source2)
    if (__hasOwnProp$5.call(source2, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source2[prop];
  if (source2 != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source2)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source2, prop))
        target[prop] = source2[prop];
    }
  return target;
};
function watchWithFilter(source2, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source2, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a2, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps$1 = (a2, b) => __defProps$1(a2, __getOwnPropDescs$1(b));
var __objRest$1 = (source2, exclude) => {
  var target = {};
  for (var prop in source2)
    if (__hasOwnProp$1.call(source2, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source2[prop];
  if (source2 != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source2)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source2, prop))
        target[prop] = source2[prop];
    }
  return target;
};
function watchPausable(source2, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source2, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$3(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e2.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
function useStorage(key, initialValue, storage2, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    }
  } = options;
  const data2 = (shallow ? shallowRef : ref)(initialValue);
  if (!storage2) {
    try {
      storage2 = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage2)
    return data2;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data2, () => write(data2.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data2;
  function write(v2) {
    try {
      if (v2 == null)
        storage2.removeItem(key);
      else
        storage2.setItem(key, serializer.write(v2));
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage2.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage2.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e2) {
      onError(e2);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data2.value = read(event);
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useCssVar(prop, target, { window: window2 = defaultWindow } = {}) {
  const variable = ref("");
  const elRef = computed(() => {
    var _a2;
    return unrefElement(target) || ((_a2 = window2 == null ? void 0 : window2.document) == null ? void 0 : _a2.documentElement);
  });
  watch([elRef, () => unref(prop)], ([el, prop2]) => {
    if (el && window2)
      variable.value = window2.getComputedStyle(el).getPropertyValue(prop2);
  }, { immediate: true });
  watch(variable, (val) => {
    var _a2;
    if ((_a2 = elRef.value) == null ? void 0 : _a2.style)
      elRef.value.style.setProperty(unref(prop), val);
  });
  return variable;
}
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window2.pageXOffset);
  const y = ref(window2.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window2.pageXOffset;
    y.value = window2.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var vueScrollto = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source2 = arguments[i2];
          for (var key in source2) {
            if (Object.prototype.hasOwnProperty.call(source2, key)) {
              target[key] = source2[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 1e-3;
    var SUBDIVISION_PRECISION = 1e-7;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    var float32ArraySupported = typeof Float32Array === "function";
    function A(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i2 = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i2 < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i2 = 0; i2 < NEWTON_ITERATIONS; ++i2) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function LinearEasing(x) {
      return x;
    }
    var src = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      }
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      for (var i2 = 0; i2 < kSplineTableSize; ++i2) {
        sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function BezierEasing(x) {
        if (x === 0) {
          return 0;
        }
        if (x === 1) {
          return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
    var easings = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    };
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get2() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e2) {
    }
    var _2 = {
      $: function $(selector2) {
        if (typeof selector2 !== "string") {
          return selector2;
        }
        return document.querySelector(selector2);
      },
      on: function on(element, events, handler) {
        var opts2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: false
        };
        if (!(events instanceof Array)) {
          events = [events];
        }
        for (var i2 = 0; i2 < events.length; i2++) {
          element.addEventListener(events[i2], handler, supportsPassive ? opts2 : false);
        }
      },
      off: function off(element, events, handler) {
        if (!(events instanceof Array)) {
          events = [events];
        }
        for (var i2 = 0; i2 < events.length; i2++) {
          element.removeEventListener(events[i2], handler);
        }
      },
      cumulativeOffset: function cumulativeOffset(element) {
        var top = 0;
        var left = 0;
        do {
          top += element.offsetTop || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
        } while (element);
        return {
          top,
          left
        };
      }
    };
    var abortEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];
    var defaults2 = {
      container: "body",
      duration: 500,
      lazy: true,
      easing: "ease",
      offset: 0,
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true
    };
    function setDefaults(options) {
      defaults2 = _extends({}, defaults2, options);
    }
    var scroller = function scroller2() {
      var element;
      var container;
      var duration;
      var easing;
      var lazy;
      var offset;
      var force;
      var cancelable;
      var onStart;
      var onDone;
      var onCancel;
      var x;
      var y;
      var initialX;
      var targetX;
      var initialY;
      var targetY;
      var diffX;
      var diffY;
      var abort;
      var cumulativeOffsetContainer;
      var cumulativeOffsetElement;
      var abortEv;
      var abortFn = function abortFn2(e2) {
        if (!cancelable)
          return;
        abortEv = e2;
        abort = true;
      };
      var easingFn;
      var timeStart;
      var timeElapsed;
      var progress;
      function scrollTop(container2) {
        var scrollTop2 = container2.scrollTop;
        if (container2.tagName.toLowerCase() === "body") {
          scrollTop2 = scrollTop2 || document.documentElement.scrollTop;
        }
        return scrollTop2;
      }
      function scrollLeft(container2) {
        var scrollLeft2 = container2.scrollLeft;
        if (container2.tagName.toLowerCase() === "body") {
          scrollLeft2 = scrollLeft2 || document.documentElement.scrollLeft;
        }
        return scrollLeft2;
      }
      function recalculateTargets() {
        cumulativeOffsetContainer = _2.cumulativeOffset(container);
        cumulativeOffsetElement = _2.cumulativeOffset(element);
        if (x) {
          targetX = cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset;
          diffX = targetX - initialX;
        }
        if (y) {
          targetY = cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset;
          diffY = targetY - initialY;
        }
      }
      function step(timestamp) {
        if (abort)
          return done();
        if (!timeStart)
          timeStart = timestamp;
        if (!lazy) {
          recalculateTargets();
        }
        timeElapsed = timestamp - timeStart;
        progress = Math.min(timeElapsed / duration, 1);
        progress = easingFn(progress);
        topLeft(container, initialY + diffY * progress, initialX + diffX * progress);
        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
      }
      function done() {
        if (!abort)
          topLeft(container, targetY, targetX);
        timeStart = false;
        _2.off(container, abortEvents, abortFn);
        if (abort && onCancel)
          onCancel(abortEv, element);
        if (!abort && onDone)
          onDone(element);
      }
      function topLeft(element2, top, left) {
        if (y)
          element2.scrollTop = top;
        if (x)
          element2.scrollLeft = left;
        if (element2.tagName.toLowerCase() === "body") {
          if (y)
            document.documentElement.scrollTop = top;
          if (x)
            document.documentElement.scrollLeft = left;
        }
      }
      function scrollTo(target, _duration) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (_typeof(_duration) === "object") {
          options = _duration;
        } else if (typeof _duration === "number") {
          options.duration = _duration;
        }
        element = _2.$(target);
        if (!element) {
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + target);
        }
        container = _2.$(options.container || defaults2.container);
        duration = options.hasOwnProperty("duration") ? options.duration : defaults2.duration;
        lazy = options.hasOwnProperty("lazy") ? options.lazy : defaults2.lazy;
        easing = options.easing || defaults2.easing;
        offset = options.hasOwnProperty("offset") ? options.offset : defaults2.offset;
        force = options.hasOwnProperty("force") ? options.force !== false : defaults2.force;
        cancelable = options.hasOwnProperty("cancelable") ? options.cancelable !== false : defaults2.cancelable;
        onStart = options.onStart || defaults2.onStart;
        onDone = options.onDone || defaults2.onDone;
        onCancel = options.onCancel || defaults2.onCancel;
        x = options.x === void 0 ? defaults2.x : options.x;
        y = options.y === void 0 ? defaults2.y : options.y;
        if (typeof offset === "function") {
          offset = offset(element, container);
        }
        initialX = scrollLeft(container);
        initialY = scrollTop(container);
        recalculateTargets();
        abort = false;
        if (!force) {
          var containerHeight = container.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : container.offsetHeight;
          var containerTop = initialY;
          var containerBottom = containerTop + containerHeight;
          var elementTop = targetY - offset;
          var elementBottom = elementTop + element.offsetHeight;
          if (elementTop >= containerTop && elementBottom <= containerBottom) {
            if (onDone)
              onDone(element);
            return;
          }
        }
        if (onStart)
          onStart(element);
        if (!diffY && !diffX) {
          if (onDone)
            onDone(element);
          return;
        }
        if (typeof easing === "string") {
          easing = easings[easing] || easings["ease"];
        }
        easingFn = src.apply(src, easing);
        _2.on(container, abortEvents, abortFn, {
          passive: true
        });
        window.requestAnimationFrame(step);
        return function() {
          abortEv = null;
          abort = true;
        };
      }
      return scrollTo;
    };
    var _scroller = scroller();
    var bindings = [];
    function deleteBinding(el) {
      for (var i2 = 0; i2 < bindings.length; ++i2) {
        if (bindings[i2].el === el) {
          bindings.splice(i2, 1);
          return true;
        }
      }
      return false;
    }
    function findBinding(el) {
      for (var i2 = 0; i2 < bindings.length; ++i2) {
        if (bindings[i2].el === el) {
          return bindings[i2];
        }
      }
    }
    function getBinding(el) {
      var binding = findBinding(el);
      if (binding) {
        return binding;
      }
      bindings.push(binding = {
        el,
        binding: {}
      });
      return binding;
    }
    function handleClick(e2) {
      var ctx = getBinding(this).binding;
      if (!ctx.value)
        return;
      e2.preventDefault();
      if (typeof ctx.value === "string") {
        return _scroller(ctx.value);
      }
      _scroller(ctx.value.el || ctx.value.element, ctx.value);
    }
    var directiveHooks = {
      bind: function bind3(el, binding) {
        getBinding(el).binding = binding;
        _2.on(el, "click", handleClick);
      },
      unbind: function unbind(el) {
        deleteBinding(el);
        _2.off(el, "click", handleClick);
      },
      update: function update(el, binding) {
        getBinding(el).binding = binding;
      }
    };
    var VueScrollTo2 = {
      bind: directiveHooks.bind,
      unbind: directiveHooks.unbind,
      update: directiveHooks.update,
      beforeMount: directiveHooks.bind,
      unmounted: directiveHooks.unbind,
      updated: directiveHooks.update,
      scrollTo: _scroller,
      bindings
    };
    var install = function install2(Vue, options) {
      if (options)
        setDefaults(options);
      Vue.directive("scroll-to", VueScrollTo2);
      var properties = Vue.config.globalProperties || Vue.prototype;
      properties.$scrollTo = VueScrollTo2.scrollTo;
    };
    if (typeof window !== "undefined" && window.Vue) {
      window.VueScrollTo = VueScrollTo2;
      window.VueScrollTo.setDefaults = setDefaults;
      window.VueScrollTo.scroller = scroller;
      if (window.Vue.use)
        window.Vue.use(install);
    }
    VueScrollTo2.install = install;
    return VueScrollTo2;
  });
})(vueScrollto);
var VueScrollTo = vueScrollto.exports;
const isLargeScreen = useMediaQuery("(min-width: 1023px)");
useMediaQuery("(min-width: 767px)");
useMediaQuery("(max-width: 767px)");
const DARK_MODE_BODY_CLASS = "is-dark";
const initDarkmode = () => {
  const darkmode = useDarkmode();
  watchEffect(() => {
    const body = document.documentElement;
    if (darkmode.isDark) {
      body.classList.add(DARK_MODE_BODY_CLASS);
    } else {
      body.classList.remove(DARK_MODE_BODY_CLASS);
    }
  });
};
const useDarkmode = defineStore("darkmode", () => {
  const preferredDark = usePreferredDark();
  const colorSchema = useStorage("color-schema", "auto");
  const isDark = computed({
    get() {
      return colorSchema.value === "auto" ? preferredDark.value : colorSchema.value === "dark";
    },
    set(v2) {
      if (v2 === preferredDark.value)
        colorSchema.value = "auto";
      else
        colorSchema.value = v2 ? "dark" : "light";
    }
  });
  const onChange = (event) => {
    const target = event.target;
    isDark.value = !target.checked;
  };
  return {
    isDark,
    onChange
  };
});
var LandingEmptyNavigation_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "navbar-brand" };
const _hoisted_2$2 = { class: "brand-icon" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_6$1 = [
  _hoisted_3$2,
  _hoisted_4$1,
  _hoisted_5$1
];
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "navbar-start" }, null, -1);
const _hoisted_8$1 = { class: "navbar-end" };
const _hoisted_9$1 = { class: "navbar-item is-theme-toggle" };
const _hoisted_10$1 = { class: "theme-toggle" };
const _hoisted_11$1 = /* @__PURE__ */ createStaticVNode('<span class="toggler"><span class="dark"><i aria-hidden="true" class="iconify" data-icon="feather:moon"></i></span><span class="light"><i aria-hidden="true" class="iconify" data-icon="feather:sun"></i></span></span>', 1);
const _hoisted_12$1 = { class: "navbar-item" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("strong", null, " Iniciar Sesi\xF3n", -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const isMobileNavOpen = ref(false);
    const scrollTo = VueScrollTo.scrollTo;
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    watchEffect(() => {
      if (isLargeScreen.value) {
        isMobileNavOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$7;
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["navbar is-fixed-top is-transparent", [!unref(isScrolling) && "is-docked", isMobileNavOpen.value && "is-solid"]]),
        "aria-label": "main navigation"
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("a", {
            href: "/",
            class: "navbar-item",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(scrollTo)("#app", 800), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2$2, [
              createVNode(_component_AnimatedLogo, {
                width: "34px",
                height: "34px"
              })
            ])
          ]),
          createBaseVNode("a", {
            role: "button",
            class: normalizeClass([[isMobileNavOpen.value && "is-active"], "navbar-burger burger"]),
            "aria-label": "menu",
            tabindex: "0",
            "aria-expanded": "false",
            onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => isMobileNavOpen.value = !isMobileNavOpen.value, ["prevent"]), ["space"])),
            onClick: _cache[2] || (_cache[2] = ($event) => isMobileNavOpen.value = !isMobileNavOpen.value)
          }, _hoisted_6$1, 34)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["navbar-menu", [isMobileNavOpen.value && "is-active"]])
        }, [
          _hoisted_7$1,
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("label", _hoisted_10$1, [
                withDirectives(createBaseVNode("input", {
                  id: "navbar-night-toggle--daynight",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(darkmode).isDark = $event),
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, unref(darkmode).isDark]
                ]),
                _hoisted_11$1
              ])
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              createVNode(_component_VButton, {
                class: "btn-degrade-blue",
                to: { name: "auth-login" },
                color: "primary",
                rounded: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-login" },
                    class: "nav-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_13$1
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ], 2)
      ], 2);
    };
  }
});
var _imports_0 = "/images/icons/hexagons/accent.svg";
var _imports_1 = "/images/icons/hexagons/accent-heavy.svg";
var _imports_2 = "/images/icons/hexagons/green.svg";
var _imports_3 = "/images/icons/hexagons/green-heavy.svg";
var _imports_4 = "/images/icons/hexagons/purple.svg";
var _imports_5 = "/images/icons/hexagons/purple-heavy.svg";
var _imports_6 = "/assets/app-2.e0bbbcb4.png";
var _imports_7 = "/assets/app-2-dark.8d461e24.png";
var _imports_8 = "/assets/footer.70a0057a.png";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "landing-page-wrapper" };
const _hoisted_2$1 = {
  id: "Vuero-marketing",
  class: "hero marketing-hero is-left is-fullheight"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-1 light-image-l",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-1 dark-image-l",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-2 light-image-l",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-2 dark-image-l",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-3 light-image-l",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-3 dark-image-l",
  src: _imports_3,
  alt: ""
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-4 light-image-l",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-4 dark-image-l",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "hero-body" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "container" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
        /* @__PURE__ */ createBaseVNode("h1", { class: "title is-1 is-bold" }, "Comienza tu entrenamiento profesional"),
        /* @__PURE__ */ createBaseVNode("h3", { class: "subtitle is-4 pt-2 light-text" }, " Encuentra los mejores entrenadores y planes de entrenamiento adecuados a tus objetivos de manera profesional y personalizada "),
        /* @__PURE__ */ createBaseVNode("div", { class: "buttons" })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-7" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "light-image-l hero-mockup",
          src: _imports_6,
          alt: ""
        }),
        /* @__PURE__ */ createBaseVNode("img", {
          class: "dark-image-l hero-mockup",
          src: _imports_7,
          alt: ""
        })
      ])
    ])
  ])
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { id: "img-body" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: "#"
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { id: "backtotop" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    "aria-label": "back to top"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-angle-up"
    })
  ])
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "My Virtual Trainer"
    });
    return (_ctx, _cache) => {
      const _component_LandingEmptyNavigation = _sfc_main$5;
      const _component_LandingLayout = _sfc_main$9;
      return openBlock(), createBlock(_component_LandingLayout, { theme: "light" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_LandingEmptyNavigation),
              _hoisted_3$1,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8,
              _hoisted_9,
              _hoisted_10,
              _hoisted_11,
              _hoisted_12
            ]),
            _hoisted_13
          ])
        ]),
        _: 1
      });
    };
  }
});
const __pages_import_0__ = () => __vitePreload(() => import("./_...all_.47b6e09f.js"), true ? ["assets/_...all_.47b6e09f.js","assets/_...all_.23dbd238.css"] : void 0);
const __pages_import_1__ = () => __vitePreload(() => import("./administrador.dfe4cbac.js"), true ? ["assets/administrador.dfe4cbac.js","assets/administrador.c8bcafe0.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/route-block.89f12ae7.js"] : void 0);
const __pages_import_2__ = () => __vitePreload(() => import("./index.475b1c39.js"), true ? ["assets/index.475b1c39.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_3__ = () => __vitePreload(() => import("./administracionCiudades.5fa599bf.js"), true ? ["assets/administracionCiudades.5fa599bf.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/administracion.915f3778.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VInput.144983c9.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_4__ = () => __vitePreload(() => import("./index.8b646ae7.js"), true ? ["assets/index.8b646ae7.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/administracion.915f3778.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_5__ = () => __vitePreload(() => import("./administracionEntrenadores.4eeb1527.js"), true ? ["assets/administracionEntrenadores.4eeb1527.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VIconBox.44c86f2c.js","assets/VIconBox.5ddb8f32.css","assets/administracion.915f3778.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_6__ = () => __vitePreload(() => import("./manualesEntrenadores.c29a93ed.js"), true ? ["assets/manualesEntrenadores.c29a93ed.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/VField.2f4065eb.js","assets/VInput.144983c9.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/administracion.915f3778.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_7__ = () => __vitePreload(() => import("./paginarEntrenadores.d97ef89d.js"), true ? [] : void 0);
const __pages_import_8__ = () => __vitePreload(() => import("./cargarImagenes.6d4c26e3.js"), true ? ["assets/cargarImagenes.6d4c26e3.js","assets/cargarImagenes.024bdf3e.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VIconBox.44c86f2c.js","assets/VIconBox.5ddb8f32.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/managePictures.1bd844b7.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_9__ = () => __vitePreload(() => import("./index.e113d3c7.js"), true ? ["assets/index.e113d3c7.js","assets/index.404066bb.css","assets/VLoader.5e1067ae.js","assets/VLoader.9a8a8544.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/managePictures.1bd844b7.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_10__ = () => __vitePreload(() => import("./index.dfefa362.js"), true ? ["assets/index.dfefa362.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/administracion.915f3778.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VInput.144983c9.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_11__ = () => __vitePreload(() => import("./deporindex.2b871419.js"), true ? ["assets/deporindex.2b871419.js","assets/deporindex.ef4e9943.css","assets/config.0fd79a34.js","assets/datatables.net-vue3.ac640298.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_12__ = () => __vitePreload(() => import("./index.e68a073e.js"), true ? ["assets/index.e68a073e.js","assets/deporindex.ef4e9943.css","assets/config.0fd79a34.js","assets/datatables.net-vue3.ac640298.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_13__ = () => __vitePreload(() => import("./index.436dd9e0.js"), true ? ["assets/index.436dd9e0.js","assets/index.f99877d8.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VInput.144983c9.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/config.0fd79a34.js","assets/administracion.915f3778.js","assets/main.cf1f8e20.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_14__ = () => __vitePreload(() => import("./app.410e1a90.js"), true ? ["assets/app.410e1a90.js","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/route-block.89f12ae7.js"] : void 0);
const __pages_import_15__ = () => __vitePreload(() => import("./auth.74e9d812.js"), true ? ["assets/auth.74e9d812.js","assets/auth.4a9d4d8a.css"] : void 0);
const __pages_import_16__ = () => __vitePreload(() => import("./index.c6498f99.js"), true ? ["assets/index.c6498f99.js","assets/route-block.89f12ae7.js"] : void 0);
const __pages_import_17__ = () => __vitePreload(() => import("./login.052915e0.js"), true ? ["assets/login.052915e0.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/vuero-banking-dark.0d53719b.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/auth.a1887b9f.js","assets/config.0fd79a34.js","assets/managePictures.1bd844b7.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js"] : void 0);
const __pages_import_18__ = () => __vitePreload(() => import("./recuperar.d49526fb.js"), true ? ["assets/recuperar.d49526fb.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/vuero-banking-dark.0d53719b.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/auth.a1887b9f.js","assets/config.0fd79a34.js","assets/managePictures.1bd844b7.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js"] : void 0);
const __pages_import_19__ = () => __vitePreload(() => import("./signup.0b0c01bc.js"), true ? ["assets/signup.0b0c01bc.js","assets/signup.7675a064.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/vee-validate-zod.esm.9452dbca.js","assets/sleep.2a252ff4.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/auth.a1887b9f.js","assets/config.0fd79a34.js","assets/managePictures.1bd844b7.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js"] : void 0);
const __pages_import_21__ = () => __vitePreload(() => import("./superentrenador.d57988ff.js"), true ? ["assets/superentrenador.d57988ff.js","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/route-block.89f12ae7.js"] : void 0);
const __pages_import_22__ = () => __vitePreload(() => import("./index.c9f6f076.js"), true ? ["assets/index.c9f6f076.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_23__ = () => __vitePreload(() => import("./index.8e5d355e.js"), true ? ["assets/index.8e5d355e.js","assets/index.5b9dbe06.css","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/config.0fd79a34.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/superentrenador.95c310b7.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_24__ = () => __vitePreload(() => import("./index.dc024970.js"), true ? ["assets/index.dc024970.js","assets/index.76467a00.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/ViewProfile.caa3b932.js","assets/ViewProfile.21aaed12.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/Salud.26898872.js","assets/Salud.3fc31c65.css","assets/Deportivo.fd57a343.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/VTextarea.9bbf9d4d.js","assets/Rendimiento.65cd5510.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/CapacidadFisica.0f1b2686.js","assets/Morfologico.6ac21918.js","assets/Personales.0393f986.js","assets/Personales.2c7ef17f.css","assets/Calendario.d2f36cee.js","assets/Calendario.e4b0110b.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/auth.a1887b9f.js","assets/managePictures.1bd844b7.js","assets/administracion.915f3778.js","assets/rutinas.f6dc35e6.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/match.1a597960.js","assets/superentrenador.95c310b7.js"] : void 0);
const __pages_import_25__ = () => __vitePreload(() => import("./index.b10cdf83.js"), true ? ["assets/index.b10cdf83.js","assets/index.a84a5eb0.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0);
const __pages_import_26__ = () => __vitePreload(() => import("./index.6168a0f2.js"), true ? ["assets/index.6168a0f2.js","assets/index.c555ea2a.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VIconButton.039d85a4.js","assets/VTextarea.9bbf9d4d.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0);
const __pages_import_27__ = () => __vitePreload(() => import("./index.3dc16b7f.js"), true ? ["assets/index.3dc16b7f.js","assets/index.d63ae7c6.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/SesionRutinaGratuita.34f9a71c.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/superentrenador.95c310b7.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/constantes.e793b8cd.js"] : void 0);
const __pages_import_28__ = () => __vitePreload(() => import("./index.ea613561.js"), true ? ["assets/index.ea613561.js","assets/index.623ebb97.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0);
const __pages_import_29__ = () => __vitePreload(() => import("./index.3a7be408.js"), true ? ["assets/index.3a7be408.js","assets/index.b86af72a.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/VLoader.5e1067ae.js","assets/VLoader.9a8a8544.css","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/epayco.1ab8131e.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/vee-validate-zod.esm.9452dbca.js","assets/Entrenadores.5ace0ea0.js","assets/Salud.3fc31c65.css","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/ModalCancelar.17c0d3ff.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/match.1a597960.js","assets/VTag.a5074be8.js","assets/VTag.3926743a.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/viewWrapper.218364e8.js","assets/entrenador.6ead06d4.js","assets/Objetivos.41a47914.js","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VIconButton.039d85a4.js","assets/VTextarea.9bbf9d4d.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/managePictures.1bd844b7.js","assets/administracion.915f3778.js","assets/auth.a1887b9f.js"] : void 0);
const __pages_import_30__ = () => __vitePreload(() => import("./index.1f7c0b4f.js"), true ? ["assets/index.1f7c0b4f.js","assets/EditProfileEntrenadorDeporte.bebed202.js","assets/EditProfileEntrenadorDeporte.c680ea09.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/vee-validate-zod.esm.9452dbca.js","assets/entrenador.6ead06d4.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/EditProfileGeneralEntrenador.ff8a54df.js","assets/EditProfileGeneralEntrenador.65846f5f.css","assets/VTextarea.9bbf9d4d.js","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VIconButton.039d85a4.js","assets/fechas.6bd42486.js","assets/managePictures.1bd844b7.js","assets/general.8b156443.js","assets/administracion.915f3778.js","assets/deportista.892d7693.js"] : void 0);
const __pages_import_31__ = () => __vitePreload(() => import("./planS.5c941c36.js"), true ? ["assets/planS.5c941c36.js","assets/planS.d3c0c268.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/epayco.1ab8131e.js","assets/sleep.2a252ff4.js"] : void 0);
const __pages_import_32__ = () => __vitePreload(() => import("./configuracionEdit.465b461a.js"), true ? ["assets/configuracionEdit.465b461a.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_33__ = () => __vitePreload(() => import("./showAcerca.cdfd97d9.js"), true ? ["assets/showAcerca.cdfd97d9.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_34__ = () => __vitePreload(() => import("./showAyuda.bda59a8b.js"), true ? ["assets/showAyuda.bda59a8b.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_35__ = () => __vitePreload(() => import("./showConexion.8c76dfa8.js"), true ? ["assets/showConexion.8c76dfa8.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_36__ = () => __vitePreload(() => import("./miEntrenamiento.4e22d9a1.js"), true ? ["assets/miEntrenamiento.4e22d9a1.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_37__ = () => __vitePreload(() => import("./tuEntrenador.1daadbb8.js"), true ? ["assets/tuEntrenador.1daadbb8.js","assets/Salud.3fc31c65.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/ViewEntrenador.ec9eb7b4.js","assets/ViewEntrenador.7bf61fe3.css","assets/ModalCancelar.17c0d3ff.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/config.0fd79a34.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/viewWrapper.218364e8.js","assets/entrenador.6ead06d4.js"] : void 0);
const __pages_import_38__ = () => __vitePreload(() => import("./metodo.ae1f0f7e.js"), true ? ["assets/metodo.ae1f0f7e.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_39__ = () => __vitePreload(() => import("./index.a041d31b.js"), true ? ["assets/index.a041d31b.js","assets/Personales.2c7ef17f.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VTag.a5074be8.js","assets/VTag.3926743a.css","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js"] : void 0);
const __pages_import_40__ = () => __vitePreload(() => import("./misDatosEdit.a339d1fb.js"), true ? ["assets/misDatosEdit.a339d1fb.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_41__ = () => __vitePreload(() => import("./contactoEdit.d0f968c5.js"), true ? ["assets/contactoEdit.d0f968c5.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_42__ = () => __vitePreload(() => import("./personalesEdit.2dec9e46.js"), true ? ["assets/personalesEdit.2dec9e46.js","assets/Personales.0393f986.js","assets/Personales.2c7ef17f.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_43__ = () => __vitePreload(() => import("./usuarioEdit.2122ad54.js"), true ? ["assets/usuarioEdit.2122ad54.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_44__ = () => __vitePreload(() => import("./index.b70a3eb5.js"), true ? ["assets/index.b70a3eb5.js","assets/Salud.3fc31c65.css","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/epayco.1ab8131e.js"] : void 0);
const __pages_import_45__ = () => __vitePreload(() => import("./perfilEdit.44f7c532.js"), true ? ["assets/perfilEdit.44f7c532.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_46__ = () => __vitePreload(() => import("./capacidadEdit.f1ecd039.js"), true ? ["assets/capacidadEdit.f1ecd039.js","assets/CapacidadFisica.0f1b2686.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_47__ = () => __vitePreload(() => import("./deportivoEdit.b8d1c778.js"), true ? ["assets/deportivoEdit.b8d1c778.js","assets/Deportivo.fd57a343.js","assets/Salud.3fc31c65.css","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/VField.2f4065eb.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VTextarea.9bbf9d4d.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_48__ = () => __vitePreload(() => import("./morfologicoEdit.fe14db60.js"), true ? ["assets/morfologicoEdit.fe14db60.js","assets/Morfologico.6ac21918.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_49__ = () => __vitePreload(() => import("./objetivosEdit.883a1ce0.js"), true ? ["assets/objetivosEdit.883a1ce0.js","assets/Objetivos.41a47914.js","assets/Salud.3fc31c65.css","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VField.2f4065eb.js","assets/VInput.144983c9.js","assets/VIconButton.039d85a4.js","assets/VTextarea.9bbf9d4d.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_50__ = () => __vitePreload(() => import("./rendimientoEdit.5bf7f128.js"), true ? ["assets/rendimientoEdit.5bf7f128.js","assets/Rendimiento.65cd5510.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_51__ = () => __vitePreload(() => import("./saludEdit.245eac61.js"), true ? ["assets/saludEdit.245eac61.js","assets/Salud.26898872.js","assets/Salud.3fc31c65.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_52__ = () => __vitePreload(() => import("./planesEdit.a3e875e9.js"), true ? ["assets/planesEdit.a3e875e9.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_53__ = () => __vitePreload(() => import("./facturacionEdit.97c150e5.js"), true ? ["assets/facturacionEdit.97c150e5.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_54__ = () => __vitePreload(() => import("./suscripcionEdit.aef75047.js"), true ? ["assets/suscripcionEdit.aef75047.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_55__ = () => __vitePreload(() => import("./preViewEntrenador.93be2fae.js"), true ? ["assets/preViewEntrenador.93be2fae.js","assets/ViewEntrenador.ec9eb7b4.js","assets/ViewEntrenador.7bf61fe3.css","assets/ModalCancelar.17c0d3ff.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/config.0fd79a34.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_56__ = () => __vitePreload(() => import("./profile-view.039f452c.js"), true ? ["assets/profile-view.039f452c.js","assets/ViewProfile.caa3b932.js","assets/ViewProfile.21aaed12.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/Salud.26898872.js","assets/Salud.3fc31c65.css","assets/Deportivo.fd57a343.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/VTextarea.9bbf9d4d.js","assets/Rendimiento.65cd5510.js","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/CapacidadFisica.0f1b2686.js","assets/Morfologico.6ac21918.js","assets/Personales.0393f986.js","assets/Personales.2c7ef17f.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_57__ = () => __vitePreload(() => import("./index.c0f8f1de.js"), true ? ["assets/index.c0f8f1de.js","assets/Calendario.d2f36cee.js","assets/Calendario.e4b0110b.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VField.2f4065eb.js","assets/VInput.144983c9.js","assets/config.0fd79a34.js","assets/auth.a1887b9f.js","assets/managePictures.1bd844b7.js","assets/main.cf1f8e20.js","assets/general.8b156443.js","assets/administracion.915f3778.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/deportista.892d7693.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_58__ = () => __vitePreload(() => import("./entrenadores.b59ebfbb.js"), true ? ["assets/entrenadores.b59ebfbb.js","assets/Salud.3fc31c65.css"] : void 0);
const __pages_import_59__ = () => __vitePreload(() => import("./index.39717f85.js"), true ? ["assets/index.39717f85.js","assets/Entrenadores.5ace0ea0.js","assets/Salud.3fc31c65.css","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/ModalCancelar.17c0d3ff.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/config.0fd79a34.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/VTag.a5074be8.js","assets/VTag.3926743a.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VPlaceholderPage.215025c9.js","assets/VPlaceholderPage.247b5532.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/viewWrapper.218364e8.js","assets/entrenador.6ead06d4.js"] : void 0);
const __pages_import_60__ = () => __vitePreload(() => import("./profile-deporte.428a0d13.js"), true ? ["assets/profile-deporte.428a0d13.js","assets/Salud.3fc31c65.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css"] : void 0);
const __pages_import_61__ = () => __vitePreload(() => import("./index.0e8b4e38.js"), true ? ["assets/index.0e8b4e38.js","assets/EditProfileEntrenadorDeporte.bebed202.js","assets/EditProfileEntrenadorDeporte.c680ea09.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/vee-validate-zod.esm.9452dbca.js","assets/entrenador.6ead06d4.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_62__ = () => __vitePreload(() => import("./profile-edit.7b1d0f20.js"), true ? ["assets/profile-edit.7b1d0f20.js","assets/Salud.3fc31c65.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css"] : void 0);
const __pages_import_63__ = () => __vitePreload(() => import("./index.826b593b.js"), true ? ["assets/index.826b593b.js","assets/EditProfileGeneralEntrenador.ff8a54df.js","assets/EditProfileGeneralEntrenador.65846f5f.css","assets/VTextarea.9bbf9d4d.js","assets/VField.2f4065eb.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/VIconButton.039d85a4.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/sleep.2a252ff4.js","assets/vee-validate-zod.esm.9452dbca.js","assets/entrenador.6ead06d4.js","assets/config.0fd79a34.js","assets/main.cf1f8e20.js","assets/fechas.6bd42486.js","assets/managePictures.1bd844b7.js","assets/general.8b156443.js","assets/administracion.915f3778.js","assets/deportista.892d7693.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_64__ = () => __vitePreload(() => import("./index.168c8823.js"), true ? ["assets/index.168c8823.js","assets/CrudPlanesGratuitos.ec66852c.js","assets/ModalOptions.b434cda6.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/PlanGratuito.d5a3c7a9.js","assets/SesionRutinaGratuita.34f9a71c.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/notyf.es.f84e4201.js","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/DeportesDisponibles.778c1af8.js","assets/constantes.e793b8cd.js","assets/viewWrapper.218364e8.js"] : void 0);
const __pages_import_65__ = () => __vitePreload(() => import("./index.2cc84758.js"), true ? ["assets/index.2cc84758.js","assets/VerPerfilDeportista.8d4f5c0e.js","assets/VerPerfilDeportista.f68f0dfc.css","assets/VField.2f4065eb.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/Calendario.d2f36cee.js","assets/Calendario.e4b0110b.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/auth.a1887b9f.js","assets/managePictures.1bd844b7.js","assets/administracion.915f3778.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/match.1a597960.js"] : void 0);
const __pages_import_66__ = () => __vitePreload(() => import("./index.71134c71.js"), true ? ["assets/index.71134c71.js","assets/VerPerfilDeportista.8d4f5c0e.js","assets/VerPerfilDeportista.f68f0dfc.css","assets/VField.2f4065eb.js","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/deportista.892d7693.js","assets/config.0fd79a34.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/DeportesDisponibles.778c1af8.js"] : void 0);
const __pages_import_67__ = () => __vitePreload(() => import("./index.08fd86f0.js"), true ? ["assets/index.08fd86f0.js","assets/PlanGratuito.d5a3c7a9.js","assets/ModalOptions.b434cda6.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/SesionRutinaGratuita.34f9a71c.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/notyf.es.f84e4201.js","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/DeportesDisponibles.778c1af8.js","assets/constantes.e793b8cd.js"] : void 0);
const __pages_import_68__ = () => __vitePreload(() => import("./index.1f80ddfd.js"), true ? ["assets/index.1f80ddfd.js","assets/SemanaComodin.b35b854a.js","assets/ModalOptions.b434cda6.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/notyf.es.f84e4201.js","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/DeportesDisponibles.778c1af8.js","assets/constantes.e793b8cd.js"] : void 0);
const __pages_import_69__ = () => __vitePreload(() => import("./index.c4a6a63b.js"), true ? ["assets/index.c4a6a63b.js","assets/CrudPlanesGratuitos.ec66852c.js","assets/ModalOptions.b434cda6.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/PlanGratuito.d5a3c7a9.js","assets/SesionRutinaGratuita.34f9a71c.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/notyf.es.f84e4201.js","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/DeportesDisponibles.778c1af8.js","assets/constantes.e793b8cd.js"] : void 0);
const __pages_import_70__ = () => __vitePreload(() => import("./index.54bda621.js"), true ? ["assets/index.54bda621.js","assets/ModalOptions.b434cda6.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/SemanaComodin.b35b854a.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/notyf.es.f84e4201.js","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/DeportesDisponibles.778c1af8.js","assets/constantes.e793b8cd.js"] : void 0);
const routes = [{ "name": "all", "path": "/:all(.*)*", "component": __pages_import_0__, "props": true }, { "path": "/administrador", "component": __pages_import_1__, "children": [{ "name": "administrador", "path": "", "component": __pages_import_2__, "props": true }, { "name": "administrador-adminCiudades-administracionCiudades", "path": "adminciudades/administracionciudades", "component": __pages_import_3__, "props": true }, { "name": "administrador-adminDistancias", "path": "admindistancias", "component": __pages_import_4__, "props": true }, { "name": "administrador-adminEntrenadores-administracionEntrenadores", "path": "adminentrenadores/administracionentrenadores", "component": __pages_import_5__, "props": true }, { "name": "administrador-adminEntrenadores-manualesEntrenadores", "path": "adminentrenadores/manualesentrenadores", "component": __pages_import_6__, "props": true }, { "name": "administrador-adminEntrenadores-paginarEntrenadores", "path": "adminentrenadores/paginarentrenadores", "component": __pages_import_7__, "props": true }, { "name": "administrador-adminImagenes-cargarImagenes", "path": "adminimagenes/cargarimagenes", "component": __pages_import_8__, "props": true }, { "name": "administrador-adminImagenes", "path": "adminimagenes", "component": __pages_import_9__, "props": true }, { "name": "administrador-adminNacionalidad", "path": "adminnacionalidad", "component": __pages_import_10__, "props": true }, { "name": "administrador-adminReportes-deporindex", "path": "adminreportes/deporindex", "component": __pages_import_11__, "props": true }, { "name": "administrador-adminReportes", "path": "adminreportes", "component": __pages_import_12__, "props": true }, { "name": "administrador-adminVariables", "path": "adminvariables", "component": __pages_import_13__, "props": true }], "props": true, "meta": { "requiresAuth": true } }, { "name": "app", "path": "/app", "component": __pages_import_14__, "props": true, "meta": { "requiresAuth": true } }, { "path": "/auth", "component": __pages_import_15__, "children": [{ "name": "auth", "path": "", "component": __pages_import_16__, "props": true, "redirect": { "name": "auth-login" } }, { "name": "auth-login", "path": "login", "component": __pages_import_17__, "props": true }, { "name": "auth-recuperar", "path": "recuperar", "component": __pages_import_18__, "props": true }, { "name": "auth-signup", "path": "signup", "component": __pages_import_19__, "props": true }], "props": true }, { "name": "index", "path": "/", "component": _sfc_main$4, "props": true }, { "path": "/superentrenador", "component": __pages_import_21__, "children": [{ "name": "superentrenador", "path": "", "component": __pages_import_22__, "props": true }, { "name": "superentrenador-entrenadores", "path": "entrenadores", "component": __pages_import_23__, "props": true }, { "name": "superentrenador-entrenadores-deportistas", "path": "entrenadores/deportistas", "component": __pages_import_24__, "props": true }, { "name": "superentrenador-entrenadores-documentos", "path": "entrenadores/documentos", "component": __pages_import_25__, "props": true }, { "name": "superentrenador-entrenadores-perfil", "path": "entrenadores/perfil", "component": __pages_import_26__, "props": true }, { "name": "superentrenador-entrenadores-plan", "path": "entrenadores/plan", "component": __pages_import_27__, "props": true }, { "name": "superentrenador-entrenadores-planes", "path": "entrenadores/planes", "component": __pages_import_28__, "props": true }], "props": true, "meta": { "requiresAuth": false } }, { "name": "deportista", "path": "/deportista", "component": __pages_import_29__, "props": true }, { "name": "entrenador", "path": "/entrenador", "component": __pages_import_30__, "props": true }, { "name": "deportista-Subscribe-planS", "path": "/deportista/subscribe/plans", "component": __pages_import_31__, "props": true }, { "name": "deportista-configuracion-configuracionEdit", "path": "/deportista/configuracion/configuracionedit", "component": __pages_import_32__, "children": [{ "name": "deportista-configuracion-configuracionEdit-showAcerca", "path": "showacerca", "component": __pages_import_33__, "props": true }, { "name": "deportista-configuracion-configuracionEdit-showAyuda", "path": "showayuda", "component": __pages_import_34__, "props": true }, { "name": "deportista-configuracion-configuracionEdit-showConexion", "path": "showconexion", "component": __pages_import_35__, "props": true }], "props": true }, { "name": "deportista-entrenamiento-miEntrenamiento", "path": "/deportista/entrenamiento/mientrenamiento", "component": __pages_import_36__, "children": [{ "name": "deportista-entrenamiento-miEntrenamiento-tuEntrenador", "path": "tuentrenador", "component": __pages_import_37__, "props": true }], "props": true }, { "path": "/deportista/metodopago/metodo", "component": __pages_import_38__, "children": [{ "name": "deportista-metodoPago-metodo", "path": "", "component": __pages_import_39__, "props": true }], "props": true }, { "name": "deportista-misDatos-misDatosEdit", "path": "/deportista/misdatos/misdatosedit", "component": __pages_import_40__, "children": [{ "name": "deportista-misDatos-misDatosEdit-contactoEdit", "path": "contactoedit", "component": __pages_import_41__, "props": true }, { "name": "deportista-misDatos-misDatosEdit-personalesEdit", "path": "personalesedit", "component": __pages_import_42__, "props": true }, { "name": "deportista-misDatos-misDatosEdit-usuarioEdit", "path": "usuarioedit", "component": __pages_import_43__, "props": true }], "props": true }, { "name": "deportista-pago", "path": "/deportista/pago", "component": __pages_import_44__, "props": true }, { "name": "deportista-perfil-perfilEdit", "path": "/deportista/perfil/perfiledit", "component": __pages_import_45__, "children": [{ "name": "deportista-perfil-perfilEdit-capacidadEdit", "path": "capacidadedit", "component": __pages_import_46__, "props": true }, { "name": "deportista-perfil-perfilEdit-deportivoEdit", "path": "deportivoedit", "component": __pages_import_47__, "props": true }, { "name": "deportista-perfil-perfilEdit-morfologicoEdit", "path": "morfologicoedit", "component": __pages_import_48__, "props": true }, { "name": "deportista-perfil-perfilEdit-objetivosEdit", "path": "objetivosedit", "component": __pages_import_49__, "props": true }, { "name": "deportista-perfil-perfilEdit-rendimientoEdit", "path": "rendimientoedit", "component": __pages_import_50__, "props": true }, { "name": "deportista-perfil-perfilEdit-saludEdit", "path": "saludedit", "component": __pages_import_51__, "props": true }], "props": true }, { "name": "deportista-planes-planesEdit", "path": "/deportista/planes/planesedit", "component": __pages_import_52__, "children": [{ "name": "deportista-planes-planesEdit-facturacionEdit", "path": "facturacionedit", "component": __pages_import_53__, "props": true }, { "name": "deportista-planes-planesEdit-suscripcionEdit", "path": "suscripcionedit", "component": __pages_import_54__, "props": true }], "props": true }, { "name": "deportista-profile-preViewEntrenador", "path": "/deportista/profile/previewentrenador", "component": __pages_import_55__, "props": true }, { "name": "deportista-profile-profile-view", "path": "/deportista/profile/profile-view", "component": __pages_import_56__, "props": true }, { "name": "deportista-rutinas", "path": "/deportista/rutinas", "component": __pages_import_57__, "props": true }, { "path": "/deportista/solicitud/entrenadores", "component": __pages_import_58__, "children": [{ "name": "deportista-solicitud-entrenadores", "path": "", "component": __pages_import_59__, "props": true }], "props": true }, { "path": "/entrenador/profile/profile-deporte", "component": __pages_import_60__, "children": [{ "name": "entrenador-profile-profile-deporte", "path": "", "component": __pages_import_61__, "props": true }], "props": true }, { "path": "/entrenador/profile/profile-edit", "component": __pages_import_62__, "children": [{ "name": "entrenador-profile-profile-edit", "path": "", "component": __pages_import_63__, "props": true }], "props": true }, { "name": "deportista-rutinasGratis-edit", "path": "/deportista/rutinasgratis/edit", "component": __pages_import_64__, "props": true }, { "name": "entrenador-deportistas-aprobados", "path": "/entrenador/deportistas/aprobados", "component": __pages_import_65__, "props": true }, { "name": "entrenador-deportistas-solicitudes", "path": "/entrenador/deportistas/solicitudes", "component": __pages_import_66__, "props": true }, { "name": "entrenador-rutinas-crear-plan-gratuito", "path": "/entrenador/rutinas/crear-plan-gratuito", "component": __pages_import_67__, "props": true }, { "name": "entrenador-rutinas-crear-semana-comodin", "path": "/entrenador/rutinas/crear-semana-comodin", "component": __pages_import_68__, "props": true }, { "name": "entrenador-rutinas-ver-planes-gratuitos", "path": "/entrenador/rutinas/ver-planes-gratuitos", "component": __pages_import_69__, "props": true }, { "name": "entrenador-rutinas-ver-semanas-comodin", "path": "/entrenador/rutinas/ver-semanas-comodin", "component": __pages_import_70__, "props": true }];
const rutaPerfil = {
  component: () => __vitePreload(() => import("./index.6168a0f2.js"), true ? ["assets/index.6168a0f2.js","assets/index.c555ea2a.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/VIconButton.039d85a4.js","assets/VTextarea.9bbf9d4d.js","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VInput.144983c9.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0),
  name: "superentrenador-perfil-entrenador",
  path: "/perfil-entrenador/profile=:id",
  props: true
};
const rutaPlanes = {
  component: () => __vitePreload(() => import("./index.ea613561.js"), true ? ["assets/index.ea613561.js","assets/index.623ebb97.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0),
  name: "superentrenador-planes-entrenador",
  path: "/planes-entrenador/profile=:id",
  props: true
};
const rutaDeportistas = {
  component: () => __vitePreload(() => import("./index.dc024970.js"), true ? ["assets/index.dc024970.js","assets/index.76467a00.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/ViewProfile.caa3b932.js","assets/ViewProfile.21aaed12.css","assets/VField.2f4065eb.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VSwitchBlock.ad04fd05.js","assets/VSwitchBlock.e16aa0e5.css","assets/VInput.144983c9.js","assets/fechas.6bd42486.js","assets/Salud.26898872.js","assets/Salud.3fc31c65.css","assets/Deportivo.fd57a343.js","assets/VCheckbox.fc5c4564.js","assets/VCheckbox.ebec2934.css","assets/VTextarea.9bbf9d4d.js","assets/Rendimiento.65cd5510.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/CapacidadFisica.0f1b2686.js","assets/Morfologico.6ac21918.js","assets/Personales.0393f986.js","assets/Personales.2c7ef17f.css","assets/Calendario.d2f36cee.js","assets/Calendario.e4b0110b.css","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/VBlock.1ac07329.js","assets/VBlock.1200d85e.css","assets/auth.a1887b9f.js","assets/managePictures.1bd844b7.js","assets/administracion.915f3778.js","assets/rutinas.f6dc35e6.js","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/match.1a597960.js","assets/superentrenador.95c310b7.js"] : void 0),
  name: "superentrenador-deportistas-entrenador",
  path: "/deportistas/profile=:id",
  props: true
};
const rutaPlanGratuito = {
  component: () => __vitePreload(() => import("./index.3dc16b7f.js"), true ? ["assets/index.3dc16b7f.js","assets/index.d63ae7c6.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/SesionRutinaGratuita.34f9a71c.js","assets/VModal.86fed773.js","assets/VModal.9128698f.css","assets/BloquesTiempo.c11a0b08.js","assets/BloquesTiempo.790b1a91.css","assets/VIconButton.039d85a4.js","assets/VFlexTable.29eeadad.js","assets/VFlexTable.599961b3.css","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VField.2f4065eb.js","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/VTextarea.9bbf9d4d.js","assets/VInput.144983c9.js","assets/VControl.f1021bc2.js","assets/VControl.4c7030cd.css","assets/VOption.63c661e6.js","assets/VOption.fe90f78a.css","assets/convert.prod.5d6dde81.js","assets/convert.prod.402edca8.css","assets/vee-validate-zod.esm.9452dbca.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js","assets/superentrenador.95c310b7.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/constantes.e793b8cd.js"] : void 0),
  name: "superentrenador-plan-entrenador",
  path: "/plan-gratuito/plan=:id",
  props: true
};
const rutaDocumentos = {
  component: () => __vitePreload(() => import("./index.b10cdf83.js"), true ? ["assets/index.b10cdf83.js","assets/index.a84a5eb0.css","assets/SuperentrenadorLayout.62e99b0b.js","assets/SuperentrenadorLayout.7ec603dc.css","assets/NotificationsMobileDropdown.6891f5d0.js","assets/NotificationsMobileDropdown.6b0e8f6c.css","assets/viewWrapper.218364e8.js","assets/VDropdown.8f5c2ced.js","assets/VDropdown.4bffdbfa.css","assets/VAvatar.c41d574f.js","assets/VAvatar.c5fd7dc4.css","assets/config.0fd79a34.js","assets/useNotyf.602f0974.js","assets/notyf.es.f84e4201.js","assets/VFlex.0f2837f4.js","assets/VFlex.0f74d4a7.css","assets/VFlexItem.cf6f9427.js","assets/VFlexItem.663f5cca.css","assets/superentrenador.95c310b7.js","assets/main.cf1f8e20.js","assets/match.1a597960.js","assets/deportista.892d7693.js","assets/general.8b156443.js","assets/rutinas.f6dc35e6.js","assets/fechas.6bd42486.js"] : void 0),
  name: "superentrenador-documentos-entrenador",
  path: "/documentos/profile=:id",
  props: true
};
routes.push(rutaPerfil);
routes.push(rutaPlanes);
routes.push(rutaDeportistas);
routes.push(rutaPlanGratuito);
routes.push(rutaDocumentos);
function createRouter() {
  const router = createRouter$1({
    history: createWebHistory(),
    routes
  });
  return router;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    radius: { default: void 0 },
    color: { default: void 0 },
    elevated: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const cardRadius = computed(() => {
      if (props.radius === "smooth") {
        return "s-card";
      } else if (props.radius === "rounded") {
        return "l-card";
      }
      return "r-card";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(cardRadius), __props.elevated && "is-raised", props.color && `is-${props.color}`])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    align: { default: void 0 },
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["buttons", [props.addons && "has-addons", props.align && `is-${props.align}`]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
try {
  self["workbox:window:6.5.4"] && _();
} catch (n2) {
}
function n(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r(n2, t2) {
  (null == t2 || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e(n2, t2) {
  var e2;
  if ("undefined" == typeof Symbol || null == n2[Symbol.iterator]) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if ("string" == typeof n3)
          return r(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return "Object" === e3 && n3.constructor && (e3 = n3.constructor.name), "Map" === e3 || "Set" === e3 ? Array.from(n3) : "Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && "number" == typeof n2.length) {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.5.4"] && _();
} catch (n2) {
}
var i = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c) : Promise.resolve();
}
var v = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return void 0 === t2 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i(), e3.en = new i(), e3.on = new i(), e3.un = 0, e3.an = /* @__PURE__ */ new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u(i2, a2)), "installed" === i2 ? e3.wn = self.setTimeout(function() {
        "installed" === i2 && t3.waiting === r3 && e3.dispatchEvent(new u("waiting", a2));
      }, 200) : "activating" === i2 && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h2, l, w = v2.prototype;
  return w.register = function(n2) {
    var t2 = (void 0 === n2 ? {} : n2).immediate, r3 = void 0 !== t2 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && "complete" !== document.readyState)
          return s(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.getSW = function() {
    return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t2) {
    try {
      return a(this.getSW(), function(r3) {
        return n(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h2 = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h2.prototype, l), v2;
}(function() {
  function n2() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, /* @__PURE__ */ new Set()), this.Pn.get(n3);
  }, n2;
}());
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await n(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/", type: "classic" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r2) => {
      registration = r2;
      onRegistered == null ? void 0 : onRegistered(r2);
    }).catch((e2) => {
      onRegisterError == null ? void 0 : onRegisterError(e2);
    });
  }
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  const needRefresh = ref(false);
  const offlineReady = ref(false);
  const updateServiceWorker = registerSW({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
/*!
  * shared v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = typeof window !== "undefined";
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const isNumber$2 = (val) => typeof val === "number" && isFinite(val);
const isRegExp$1 = (val) => toTypeString$1(val) === "[object RegExp]";
const isEmptyObject$1 = (val) => isPlainObject$2(val) && Object.keys(val).length === 0;
const assign$1 = Object.assign;
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty$1.call(obj, key);
}
const isArray$2 = Array.isArray;
const isFunction$2 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isBoolean$1 = (val) => typeof val === "boolean";
const isObject$3 = (val) => val !== null && typeof val === "object";
const objectToString$2 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$2.call(value);
const isPlainObject$2 = (val) => toTypeString$1(val) === "[object Object]";
/*!
  * shared v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const generateFormatCacheKey = (locale, key, source2) => friendlyJSONstringify({ l: locale, k: key, s: source2 });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$1 = (val) => typeof val === "number" && isFinite(val);
const isDate$1 = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$2 = (val) => val !== null && typeof val === "object";
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject$1(val) && val.toString === objectToString$1 ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * message-compiler v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * devtools-if v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a2 === b && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c2;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c2 = path[index];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache$1 = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$2(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$2(obj)) {
    return null;
  }
  let hit = cache$1.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache$1.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber$1(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n)) ? isNumber$1(options.named.count) ? options.named.count : isNumber$1(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$2(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject$1(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const linked = (key, modifier) => {
    const msg = message(key)(ctx);
    return isString$1(modifier) ? _modifier(modifier)(msg) : msg;
  };
  const type = isPlainObject$1(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: linked,
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray$1(fallback) ? fallback : isObject$2(fallback) ? Object.keys(fallback) : isString$1(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString$1(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray$1(fallback) || !isPlainObject$1(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString$1(defaults2) ? [defaults2] : defaults2;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale = block[i2];
    if (isString$1(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$1(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$2 = "9.2.0-beta.35";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$1(val) ? val.toUpperCase() : val,
    lower: (val) => isString$1(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString$1(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString$1(options.version) ? options.version : VERSION$2;
  const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject$1(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$1(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject$2(options.fallbackContext) ? options.fallbackContext : void 0;
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$2(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$2(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$2(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString$1(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$1,
  INVALID_DATE_ARGUMENT: inc$1(),
  INVALID_ISO_DATE_ARGUMENT: inc$1(),
  __EXTEND_POINT__: inc$1()
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let format = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString$1(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  if (!resolvedMessage && (!(isString$1(format) || isMessageFunction(format)) || !isString$1(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
  if (occurred) {
    return format;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString$1(key) ? key : isMessageFunction(format) ? format.key : "",
      locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
      format: isString$1(format) ? format : isMessageFunction(format) ? format.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
  } else if (isObject$2(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString$1(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    message = messages[targetLocale] || {};
    if ((format = resolveValue2(message, key)) === null) {
      format = message[key];
    }
    if (isString$1(format) || isFunction$1(format))
      break;
    const missingRet = handleMissing(
      context,
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format = missingRet;
    }
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format)) {
    const msg2 = format;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$1(arg1) && !isNumber$1(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber$1(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$1(arg2)) {
    options.plural = arg2;
  } else if (isString$1(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber$1(arg3)) {
    options.plural = arg3;
  } else if (isString$1(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$1(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source2, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source3) => generateFormatCacheKey(locale, key, source3)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString$1(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$1(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString$1(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$1(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e2) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate$1(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber$1(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString$1(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber$1(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION$1 = "9.2.0-beta.35";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis$1().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject$3(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$3(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        currentObj = currentObj[subKeys[i2]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$3(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject$2(messages) ? messages : isArray$2(__i18n) ? {} : { [locale]: {} };
  if (isArray$2(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString$2(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$3(val) || isArray$2(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject$3(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject$3(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$3(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean$1(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    __root && _inheritLocale ? __root.locale.value : isString$2(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    __root && _inheritLocale ? __root.fallbackLocale.value : isString$2(options.fallbackLocale) || isArray$2(options.fallbackLocale) || isPlainObject$2(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$2(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$2(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean$1(options.missingWarn) || isRegExp$1(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean$1(options.fallbackWarn) || isRegExp$1(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean$1(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$2(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$2(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean$1(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$2(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION$1,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject$2(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject$2(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$2(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber$2(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  }
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root2) => Reflect.apply(root2.t, root2, [...args]), (key) => key, (val) => isString$2(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$3(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root2) => Reflect.apply(root2.d, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$2(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root2) => Reflect.apply(root2.n, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$2(val));
  }
  function normalize(values) {
    return values.map((val) => isString$2(val) ? createTextNode(val) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      (root2) => root2[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray$2(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      (root2) => root2[NumberPartsSymbol](...args),
      () => [],
      (val) => isString$2(val) || isArray$2(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      (root2) => root2[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString$2(val) || isArray$2(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString$2(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = assign$1(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = assign$1(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray$2(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const Translation = {
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber$2(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$2(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString$2(props.tag) || isObject$3(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
};
function isVNode(target) {
  return isArray$2(target) && !isString$2(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$2(props.format)) {
      options.key = props.format;
    } else if (isObject$3(props.format)) {
      if (isString$2(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$2(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString$2(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString$2(props.tag) || isObject$3(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const bind3 = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = Reflect.apply(composer.t, composer, [
      ...makeParams(parsedValue)
    ]);
  };
  return {
    beforeMount: bind3,
    beforeUpdate: bind3
  };
}
function parseValue(value) {
  if (isString$2(value)) {
    return { path: value };
  } else if (isPlainObject$2(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$2(locale)) {
    options.locale = locale;
  }
  if (isNumber$2(choice)) {
    options.plural = choice;
  }
  if (isNumber$2(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject$2(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean$1(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean$1(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (__globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject$1(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root2 = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root2 === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    onMounted(() => {
    }, target);
    onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis$1();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
var VReloadPrompt_vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " ist bereit, offline zu arbeiten"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Eine neue Version von ", _interpolate(_named("appName")), " ist verf\xFCgbar, klicken Sie auf die Schaltfl\xE4che Neu laden, um sie zu aktualisieren."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Neu laden"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Schlie\xDFen"]);
        }
      },
      "en": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " is ready to work offline"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["A new version of ", _interpolate(_named("appName")), " is available, click on reload button to update."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reload"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Close"]);
        }
      },
      "es-MX": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "es": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "fr": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est pr\xEAt \xE0 \xEAtre utilis\xE9 hors ligne"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Une nouvelle version de ", _interpolate(_named("appName")), " est disponible, cliquez sur le bouton Recharger pour la mettre \xE0 jour."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recharger"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fermer"]);
        }
      },
      "zh-CN": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), "\u5DF2\u51C6\u5907\u597D\u8131\u673A\u5DE5\u4F5C"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u65B0\u7248\u672C\u7684", _interpolate(_named("appName")), "\u5DF2\u7ECF\u53EF\u7528\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D\u6309\u94AE\u6765\u66F4\u65B0\u3002"]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u91CD\u65B0\u52A0\u8F7D"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5173\u95ED"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "pwa-message" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    appName: null
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const { t: t2 } = useI18n();
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      loading.value = false;
      offlineReady.value = false;
      needRefresh.value = false;
    };
    const update = async () => {
      loading.value = true;
      await updateServiceWorker();
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$7;
      const _component_VButtons = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      return openBlock(), createBlock(Transition, { name: "from-bottom" }, {
        default: withCtx(() => [
          unref(offlineReady) || unref(needRefresh) ? (openBlock(), createBlock(_component_VCard, {
            key: 0,
            class: "pwa-toast",
            role: "alert",
            radius: "smooth"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                unref(offlineReady) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString$1(unref(t2)("offline-ready", { appName: props.appName })), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString$1(unref(t2)("need-refresh", { appName: props.appName })), 1))
              ]),
              createVNode(_component_VButtons, { align: "right" }, {
                default: withCtx(() => [
                  unref(needRefresh) ? (openBlock(), createBlock(_component_VButton, {
                    key: 0,
                    color: "primary",
                    icon: "ion:reload-outline",
                    loading: loading.value,
                    onClick: _cache[0] || (_cache[0] = () => update())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString$1(unref(t2)("reload-button")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true),
                  createVNode(_component_VButton, {
                    icon: "feather:x",
                    onClick: close
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString$1(unref(t2)("close-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    initDarkmode();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_VReloadPrompt = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            createVNode(_component_RouterView, null, {
              default: withCtx(({ Component }) => [
                createVNode(Transition, {
                  name: "fade-slow",
                  mode: "out-in"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(Component)))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ]),
          _: 1
        })),
        createVNode(_component_VReloadPrompt, { "app-name": "MVT" })
      ]);
    };
  }
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDom = canUseDOM;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject$1(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDom) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
function getElementWindow$1(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
var getOptions$1 = function(obj) {
  var initialObj = {};
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(_2, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, initialObj);
  return options;
};
function addClasses$1(el, classes) {
  var _a2;
  if (!el)
    return;
  (_a2 = el.classList).add.apply(_a2, classes.split(" "));
}
function removeClasses$1(el, classes) {
  if (!el)
    return;
  classes.split(" ").forEach(function(className) {
    el.classList.remove(className);
  });
}
function classNamesToQuery$1(classNames) {
  return ".".concat(classNames.split(" ").join("."));
}
var helpers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementWindow: getElementWindow$1,
  getElementDocument: getElementDocument$1,
  getOptions: getOptions$1,
  addClasses: addClasses$1,
  removeClasses: removeClasses$1,
  classNamesToQuery: classNamesToQuery$1
});
var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions$2 = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = function() {
  function SimpleBarCore2(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = this;
    this.removePreventClickId = null;
    this.minScrollbarWidth = 20;
    this.stopScrollDelay = 175;
    this.isScrolling = false;
    this.isMouseEntering = false;
    this.scrollXTicking = false;
    this.scrollYTicking = false;
    this.wrapperEl = null;
    this.contentWrapperEl = null;
    this.contentEl = null;
    this.offsetEl = null;
    this.maskEl = null;
    this.placeholderEl = null;
    this.heightAutoObserverWrapperEl = null;
    this.heightAutoObserverEl = null;
    this.rtlHelpers = null;
    this.scrollbarWidth = 0;
    this.resizeObserver = null;
    this.mutationObserver = null;
    this.elStyles = null;
    this.isRtl = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.onMouseMove = function() {
    };
    this.onWindowResize = function() {
    };
    this.onStopScrolling = function() {
    };
    this.onMouseEntered = function() {
    };
    this.onScroll = function() {
      var elWindow = getElementWindow(_this.el);
      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }
      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
      if (!_this.isScrolling) {
        _this.isScrolling = true;
        addClasses(_this.el, _this.classNames.scrolling);
      }
      _this.showScrollbar("x");
      _this.showScrollbar("y");
      _this.onStopScrolling();
    };
    this.scrollX = function() {
      if (_this.axis.x.isOverflowing) {
        _this.positionScrollbar("x");
      }
      _this.scrollXTicking = false;
    };
    this.scrollY = function() {
      if (_this.axis.y.isOverflowing) {
        _this.positionScrollbar("y");
      }
      _this.scrollYTicking = false;
    };
    this._onStopScrolling = function() {
      removeClasses(_this.el, _this.classNames.scrolling);
      if (_this.options.autoHide) {
        _this.hideScrollbar("x");
        _this.hideScrollbar("y");
      }
      _this.isScrolling = false;
    };
    this.onMouseEnter = function() {
      if (!_this.isMouseEntering) {
        addClasses(_this.el, _this.classNames.mouseEntered);
        _this.showScrollbar("x");
        _this.showScrollbar("y");
        _this.isMouseEntering = true;
      }
      _this.onMouseEntered();
    };
    this._onMouseEntered = function() {
      removeClasses(_this.el, _this.classNames.mouseEntered);
      if (_this.options.autoHide) {
        _this.hideScrollbar("x");
        _this.hideScrollbar("y");
      }
      _this.isMouseEntering = false;
    };
    this._onMouseMove = function(e2) {
      _this.mouseX = e2.clientX;
      _this.mouseY = e2.clientY;
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis("x");
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis("y");
      }
    };
    this.onMouseLeave = function() {
      _this.onMouseMove.cancel();
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis("x");
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis("y");
      }
      _this.mouseX = -1;
      _this.mouseY = -1;
    };
    this._onWindowResize = function() {
      _this.scrollbarWidth = _this.getScrollbarWidth();
      _this.hideNativeScrollbar();
    };
    this.onPointerEvent = function(e2) {
      if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
        return;
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      }
      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        e2.stopPropagation();
        if (e2.type === "pointerdown" && e2.pointerType !== "touch") {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e2, "x");
            } else {
              _this.onTrackClick(e2, "x");
            }
          }
          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e2, "y");
            } else {
              _this.onTrackClick(e2, "y");
            }
          }
        }
      }
    };
    this.drag = function(e2) {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      if (!_this.draggedAxis || !_this.contentWrapperEl)
        return;
      var eventOffset;
      var track2 = _this.axis[_this.draggedAxis].track;
      var trackSize = (_b2 = (_a2 = track2.rect) === null || _a2 === void 0 ? void 0 : _a2[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
      var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
      e2.preventDefault();
      e2.stopPropagation();
      if (_this.draggedAxis === "y") {
        eventOffset = e2.pageY;
      } else {
        eventOffset = e2.pageX;
      }
      var dragPos = eventOffset - ((_h = (_g = track2.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
      dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track2.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
      var dragPerc = dragPos / (trackSize - scrollbar.size);
      var scrollPos = dragPerc * (contentSize - hostSize);
      if (_this.draggedAxis === "x" && _this.isRtl) {
        scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
      }
      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };
    this.onEndDrag = function(e2) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e2.preventDefault();
      e2.stopPropagation();
      removeClasses(_this.el, _this.classNames.dragging);
      elDocument.removeEventListener("mousemove", _this.drag, true);
      elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function() {
        elDocument.removeEventListener("click", _this.preventClick, true);
        elDocument.removeEventListener("dblclick", _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };
    this.preventClick = function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
    };
    this.el = element;
    this.options = __assign(__assign({}, SimpleBarCore2.defaultOptions), options);
    this.classNames = __assign(__assign({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: "scrollLeft",
        sizeAttr: "width",
        scrollSizeAttr: "scrollWidth",
        offsetSizeAttr: "offsetWidth",
        offsetAttr: "left",
        overflowAttr: "overflowX",
        dragOffset: 0,
        isOverflowing: true,
        forceVisible: false,
        track: { size: null, el: null, rect: null, isVisible: false },
        scrollbar: { size: null, el: null, rect: null, isVisible: false }
      },
      y: {
        scrollOffsetAttr: "scrollTop",
        sizeAttr: "height",
        scrollSizeAttr: "scrollHeight",
        offsetSizeAttr: "offsetHeight",
        offsetAttr: "top",
        overflowAttr: "overflowY",
        dragOffset: 0,
        isOverflowing: true,
        forceVisible: false,
        track: { size: null, el: null, rect: null, isVisible: false },
        scrollbar: { size: null, el: null, rect: null, isVisible: false }
      }
    };
    if (typeof this.el !== "object" || !this.el.nodeName) {
      throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
    }
    this.onMouseMove = throttle(this._onMouseMove, 64);
    this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
    this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
    this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
    this.init();
  }
  SimpleBarCore2.getRtlHelpers = function() {
    if (SimpleBarCore2.rtlHelpers) {
      return SimpleBarCore2.rtlHelpers;
    }
    var dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
    if (!dummyChild)
      return null;
    document.body.appendChild(scrollbarDummyEl);
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
    var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
    scrollbarDummyEl.scrollLeft = -999;
    var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
    document.body.removeChild(scrollbarDummyEl);
    SimpleBarCore2.rtlHelpers = {
      isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
      isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
    };
    return SimpleBarCore2.rtlHelpers;
  };
  SimpleBarCore2.prototype.getScrollbarWidth = function() {
    try {
      if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth();
      }
    } catch (e2) {
      return scrollbarWidth();
    }
  };
  SimpleBarCore2.getOffset = function(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };
  SimpleBarCore2.prototype.init = function() {
    if (canUseDom) {
      this.initDOM();
      this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };
  SimpleBarCore2.prototype.initDOM = function() {
    var _a2, _b2;
    this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
    this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
    this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
    this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
    this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
    this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
    this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
    this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
    this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
    this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
    this.axis.x.scrollbar.el = ((_a2 = this.axis.x.track.el) === null || _a2 === void 0 ? void 0 : _a2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
    this.axis.y.scrollbar.el = ((_b2 = this.axis.y.track.el) === null || _b2 === void 0 ? void 0 : _b2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
    if (!this.options.autoHide) {
      addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
      addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
    }
  };
  SimpleBarCore2.prototype.initListeners = function() {
    var _this = this;
    var _a2;
    var elWindow = getElementWindow(this.el);
    this.el.addEventListener("mouseenter", this.onMouseEnter);
    this.el.addEventListener("pointerdown", this.onPointerEvent, true);
    this.el.addEventListener("mousemove", this.onMouseMove);
    this.el.addEventListener("mouseleave", this.onMouseLeave);
    (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("scroll", this.onScroll);
    elWindow.addEventListener("resize", this.onWindowResize);
    if (!this.contentEl)
      return;
    if (window.ResizeObserver) {
      var resizeObserverStarted_1 = false;
      var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
      this.resizeObserver = new resizeObserver(function() {
        if (!resizeObserverStarted_1)
          return;
        elWindow.requestAnimationFrame(function() {
          _this.recalculate();
        });
      });
      this.resizeObserver.observe(this.el);
      this.resizeObserver.observe(this.contentEl);
      elWindow.requestAnimationFrame(function() {
        resizeObserverStarted_1 = true;
      });
    }
    this.mutationObserver = new elWindow.MutationObserver(function() {
      elWindow.requestAnimationFrame(function() {
        _this.recalculate();
      });
    });
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };
  SimpleBarCore2.prototype.recalculate = function() {
    if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
      return;
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === "rtl";
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
    this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
    this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
    this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
    this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
    this.hideNativeScrollbar();
    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize("x");
    this.axis.y.scrollbar.size = this.getScrollbarSize("y");
    if (this.axis.x.scrollbar.el)
      this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
    if (this.axis.y.scrollbar.el)
      this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
    this.positionScrollbar("x");
    this.positionScrollbar("y");
    this.toggleTrackVisibility("x");
    this.toggleTrackVisibility("y");
  };
  SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
    var _a2, _b2;
    if (axis === void 0) {
      axis = "y";
    }
    if (!this.axis[axis].isOverflowing || !this.contentEl) {
      return 0;
    }
    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = (_b2 = (_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
    var scrollbarRatio = trackSize / contentSize;
    var scrollbarSize;
    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }
    return scrollbarSize;
  };
  SimpleBarCore2.prototype.positionScrollbar = function(axis) {
    var _a2, _b2, _c;
    if (axis === void 0) {
      axis = "y";
    }
    var scrollbar = this.axis[axis].scrollbar;
    if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
      return;
    }
    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = ((_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) || 0;
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === "x" && this.isRtl && ((_b2 = SimpleBarCore2.getRtlHelpers()) === null || _b2 === void 0 ? void 0 : _b2.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
    if (axis === "x" && this.isRtl) {
      scrollOffset = ((_c = SimpleBarCore2.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
    }
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
  };
  SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
    if (axis === void 0) {
      axis = "y";
    }
    var track2 = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;
    if (!track2 || !scrollbar || !this.contentWrapperEl)
      return;
    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track2.style.visibility = "visible";
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
      this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
    } else {
      track2.style.visibility = "hidden";
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
      this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
    }
    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = "block";
    } else {
      scrollbar.style.display = "none";
    }
  };
  SimpleBarCore2.prototype.showScrollbar = function(axis) {
    if (axis === void 0) {
      axis = "y";
    }
    if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
      addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
      this.axis[axis].scrollbar.isVisible = true;
    }
  };
  SimpleBarCore2.prototype.hideScrollbar = function(axis) {
    if (axis === void 0) {
      axis = "y";
    }
    if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
      removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
      this.axis[axis].scrollbar.isVisible = false;
    }
  };
  SimpleBarCore2.prototype.hideNativeScrollbar = function() {
    if (!this.offsetEl)
      return;
    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
  };
  SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
    if (axis === void 0) {
      axis = "y";
    }
    var currentAxis = this.axis[axis];
    if (!currentAxis.track.el || !currentAxis.scrollbar.el)
      return;
    currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
    currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
    if (this.isWithinBounds(currentAxis.track.rect)) {
      this.showScrollbar(axis);
      addClasses(currentAxis.track.el, this.classNames.hover);
      if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
        addClasses(currentAxis.scrollbar.el, this.classNames.hover);
      } else {
        removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
      }
    } else {
      removeClasses(currentAxis.track.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(axis);
      }
    }
  };
  SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
    if (axis === void 0) {
      axis = "y";
    }
    removeClasses(this.axis[axis].track.el, this.classNames.hover);
    removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
    if (this.options.autoHide) {
      this.hideScrollbar(axis);
    }
  };
  SimpleBarCore2.prototype.onDragStart = function(e2, axis) {
    var _a2;
    if (axis === void 0) {
      axis = "y";
    }
    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar;
    var eventOffset = axis === "y" ? e2.pageY : e2.pageX;
    this.axis[axis].dragOffset = eventOffset - (((_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) || 0);
    this.draggedAxis = axis;
    addClasses(this.el, this.classNames.dragging);
    elDocument.addEventListener("mousemove", this.drag, true);
    elDocument.addEventListener("mouseup", this.onEndDrag, true);
    if (this.removePreventClickId === null) {
      elDocument.addEventListener("click", this.preventClick, true);
      elDocument.addEventListener("dblclick", this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  };
  SimpleBarCore2.prototype.onTrackClick = function(e2, axis) {
    var _this = this;
    var _a2, _b2, _c, _d;
    if (axis === void 0) {
      axis = "y";
    }
    var currentAxis = this.axis[axis];
    if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
      return;
    e2.preventDefault();
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = (_b2 = (_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
    var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t2 = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t2 < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
    var speed = 40;
    var scrollTo = function() {
      if (!_this.contentWrapperEl)
        return;
      if (dir === -1) {
        if (scrolled > scrollSize) {
          scrolled -= speed;
          _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          scrolled += speed;
          _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };
    scrollTo();
  };
  SimpleBarCore2.prototype.getContentElement = function() {
    return this.contentEl;
  };
  SimpleBarCore2.prototype.getScrollElement = function() {
    return this.contentWrapperEl;
  };
  SimpleBarCore2.prototype.removeListeners = function() {
    var elWindow = getElementWindow(this.el);
    this.el.removeEventListener("mouseenter", this.onMouseEnter);
    this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
    this.el.removeEventListener("mousemove", this.onMouseMove);
    this.el.removeEventListener("mouseleave", this.onMouseLeave);
    if (this.contentWrapperEl) {
      this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
    }
    elWindow.removeEventListener("resize", this.onWindowResize);
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.onMouseMove.cancel();
    this.onWindowResize.cancel();
    this.onStopScrolling.cancel();
    this.onMouseEntered.cancel();
  };
  SimpleBarCore2.prototype.unMount = function() {
    this.removeListeners();
  };
  SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  };
  SimpleBarCore2.prototype.findChild = function(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function(child) {
      return matches.call(child, query);
    })[0];
  };
  SimpleBarCore2.rtlHelpers = null;
  SimpleBarCore2.defaultOptions = {
    forceVisible: false,
    clickOnTrack: true,
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    ariaLabel: "scrollable content",
    classNames: {
      contentEl: "simplebar-content",
      contentWrapper: "simplebar-content-wrapper",
      offset: "simplebar-offset",
      mask: "simplebar-mask",
      wrapper: "simplebar-wrapper",
      placeholder: "simplebar-placeholder",
      scrollbar: "simplebar-scrollbar",
      track: "simplebar-track",
      heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
      heightAutoObserverEl: "simplebar-height-auto-observer",
      visible: "simplebar-visible",
      horizontal: "simplebar-horizontal",
      vertical: "simplebar-vertical",
      hover: "simplebar-hover",
      dragging: "simplebar-dragging",
      scrolling: "simplebar-scrolling",
      scrollable: "simplebar-scrollable",
      mouseEntered: "simplebar-mouse-entered"
    },
    scrollableNode: null,
    contentNode: null,
    autoHide: true
  };
  SimpleBarCore2.getOptions = getOptions$2;
  SimpleBarCore2.helpers = helpers;
  return SimpleBarCore2;
}();
var getOptions = function getOptions2(obj) {
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(x, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, {});
  return options;
};
SimpleBarCore.initDOMLoadedElements = function() {
  document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
  window.removeEventListener("load", this.initDOMLoadedElements);
  Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(el) {
    if (el.getAttribute("data-simplebar") !== "init" && !SimpleBarCore.instances.has(el))
      new SimpleBarCore(el, getOptions(el.attributes));
  });
};
SimpleBarCore.removeObserver = function() {
  this.globalObserver.disconnect();
};
SimpleBarCore.initHtmlApi = function() {
  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
  if (typeof MutationObserver !== "undefined") {
    this.globalObserver = new MutationObserver(SimpleBarCore.handleMutations);
    this.globalObserver.observe(document, {
      childList: true,
      subtree: true
    });
  }
  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    window.setTimeout(this.initDOMLoadedElements);
  } else {
    document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
    window.addEventListener("load", this.initDOMLoadedElements);
  }
};
SimpleBarCore.handleMutations = function(mutations) {
  mutations.forEach(function(mutation) {
    Array.prototype.forEach.call(mutation.addedNodes, function(addedNode) {
      if (addedNode.nodeType === 1) {
        if (addedNode.hasAttribute("data-simplebar")) {
          !SimpleBarCore.instances.has(addedNode) && new SimpleBarCore(addedNode, getOptions(addedNode.attributes));
        } else {
          Array.prototype.forEach.call(addedNode.querySelectorAll("[data-simplebar]"), function(el) {
            if (el.getAttribute("data-simplebar") !== "init" && !SimpleBarCore.instances.has(el))
              new SimpleBarCore(el, getOptions(el.attributes));
          });
        }
      }
    });
    Array.prototype.forEach.call(mutation.removedNodes, function(removedNode) {
      if (removedNode.nodeType === 1) {
        if (removedNode.hasAttribute("data-simplebar")) {
          SimpleBarCore.instances.has(removedNode) && SimpleBarCore.instances.get(removedNode).unMount();
        } else {
          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function(el) {
            SimpleBarCore.instances.has(el) && SimpleBarCore.instances.get(el).unMount();
          });
        }
      }
    });
  });
};
SimpleBarCore.getOptions = getOptions;
SimpleBarCore.default = SimpleBarCore;
if (canUseDom) {
  SimpleBarCore.initHtmlApi();
}
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
* @version 2.2.1
*/
const matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const iconDefaults = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  vFlip: false,
  hFlip: false
});
function fullIcon(data2) {
  return { ...iconDefaults, ...data2 };
}
function mergeIconData(icon, alias) {
  const result = { ...icon };
  for (const key in iconDefaults) {
    const prop = key;
    if (alias[prop] !== void 0) {
      const value = alias[prop];
      if (result[prop] === void 0) {
        result[prop] = value;
        continue;
      }
      switch (prop) {
        case "rotate":
          result[prop] = (result[prop] + value) % 4;
          break;
        case "hFlip":
        case "vFlip":
          result[prop] = value !== result[prop];
          break;
        default:
          result[prop] = value;
      }
    }
  }
  return result;
}
function getIconData$1(data2, name, full = false) {
  function getIcon2(name2, iteration) {
    if (data2.icons[name2] !== void 0) {
      return Object.assign({}, data2.icons[name2]);
    }
    if (iteration > 5) {
      return null;
    }
    const aliases = data2.aliases;
    if (aliases && aliases[name2] !== void 0) {
      const item = aliases[name2];
      const result2 = getIcon2(item.parent, iteration + 1);
      if (result2) {
        return mergeIconData(result2, item);
      }
      return result2;
    }
    const chars = data2.chars;
    if (!iteration && chars && chars[name2] !== void 0) {
      return getIcon2(chars[name2], iteration + 1);
    }
    return null;
  }
  const result = getIcon2(name, 0);
  if (result) {
    for (const key in iconDefaults) {
      if (result[key] === void 0 && data2[key] !== void 0) {
        result[key] = data2[key];
      }
    }
  }
  return result && full ? fullIcon(result) : result;
}
function isVariation(item) {
  for (const key in iconDefaults) {
    if (item[key] !== void 0) {
      return true;
    }
  }
  return false;
}
function parseIconSet(data2, callback2, options) {
  options = options || {};
  const names = [];
  if (typeof data2 !== "object" || typeof data2.icons !== "object") {
    return names;
  }
  if (data2.not_found instanceof Array) {
    data2.not_found.forEach((name) => {
      callback2(name, null);
      names.push(name);
    });
  }
  const icons = data2.icons;
  Object.keys(icons).forEach((name) => {
    const iconData = getIconData$1(data2, name, true);
    if (iconData) {
      callback2(name, iconData);
      names.push(name);
    }
  });
  const parseAliases = options.aliases || "all";
  if (parseAliases !== "none" && typeof data2.aliases === "object") {
    const aliases = data2.aliases;
    Object.keys(aliases).forEach((name) => {
      if (parseAliases === "variations" && isVariation(aliases[name])) {
        return;
      }
      const iconData = getIconData$1(data2, name, true);
      if (iconData) {
        callback2(name, iconData);
        names.push(name);
      }
    });
  }
  return names;
}
const optionalProperties = {
  provider: "string",
  aliases: "object",
  not_found: "object"
};
for (const prop in iconDefaults) {
  optionalProperties[prop] = typeof iconDefaults[prop];
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data2 = obj;
  if (typeof data2.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  for (const prop in optionalProperties) {
    if (obj[prop] !== void 0 && typeof obj[prop] !== optionalProperties[prop]) {
      return null;
    }
  }
  const icons = data2.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchName) || typeof icon.body !== "string") {
      return null;
    }
    for (const prop in iconDefaults) {
      if (icon[prop] !== void 0 && typeof icon[prop] !== typeof iconDefaults[prop]) {
        return null;
      }
    }
  }
  const aliases = data2.aliases;
  if (aliases) {
    for (const name in aliases) {
      const icon = aliases[name];
      const parent = icon.parent;
      if (!name.match(matchName) || typeof parent !== "string" || !icons[parent] && !aliases[parent]) {
        return null;
      }
      for (const prop in iconDefaults) {
        if (icon[prop] !== void 0 && typeof icon[prop] !== typeof iconDefaults[prop]) {
          return null;
        }
      }
    }
  }
  return data2;
}
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIcon(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIcon(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIcon(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIcon = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchName)) && icon.name.match(matchName));
};
const storageVersion = 1;
let storage$1 = /* @__PURE__ */ Object.create(null);
try {
  const w = window || self;
  if (w && w._iconifyStorage.version === storageVersion) {
    storage$1 = w._iconifyStorage.storage;
  }
} catch (err) {
}
function shareStorage() {
  try {
    const w = window || self;
    if (w && !w._iconifyStorage) {
      w._iconifyStorage = {
        version: storageVersion,
        storage: storage$1
      };
    }
  } catch (err) {
  }
}
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ Object.create(null)
  };
}
function getStorage(provider, prefix) {
  if (storage$1[provider] === void 0) {
    storage$1[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerStorage = storage$1[provider];
  if (providerStorage[prefix] === void 0) {
    providerStorage[prefix] = newStorage(provider, prefix);
  }
  return providerStorage[prefix];
}
function addIconSet(storage2, data2) {
  if (!quicklyValidateIconSet(data2)) {
    return [];
  }
  const t2 = Date.now();
  return parseIconSet(data2, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing[name] = t2;
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = Object.freeze(fullIcon(icon));
      return true;
    }
  } catch (err) {
  }
  return false;
}
function getIconFromStorage(storage2, name) {
  const value = storage2.icons[name];
  return value === void 0 ? null : value;
}
function listIcons(provider, prefix) {
  let allIcons = [];
  let providers;
  if (typeof provider === "string") {
    providers = [provider];
  } else {
    providers = Object.keys(storage$1);
  }
  providers.forEach((provider2) => {
    let prefixes2;
    if (typeof provider2 === "string" && typeof prefix === "string") {
      prefixes2 = [prefix];
    } else {
      prefixes2 = storage$1[provider2] === void 0 ? [] : Object.keys(storage$1[provider2]);
    }
    prefixes2.forEach((prefix2) => {
      const storage2 = getStorage(provider2, prefix2);
      const icons = Object.keys(storage2.icons).map((name) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name);
      allIcons = allIcons.concat(icons);
    });
  });
  return allIcons;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  return icon ? getIconFromStorage(getStorage(icon.provider, icon.prefix), icon.name) : null;
}
function addIcon(name, data2) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data2);
}
function addCollection(data2, provider) {
  if (typeof data2 !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = typeof data2.provider === "string" ? data2.provider : "";
  }
  if (simpleNames && provider === "" && (typeof data2.prefix !== "string" || data2.prefix === "")) {
    let added = false;
    if (quicklyValidateIconSet(data2)) {
      data2.prefix = "";
      parseIconSet(data2, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  if (typeof data2.prefix !== "string" || !validateIcon({
    provider,
    prefix: data2.prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, data2.prefix);
  return !!addIconSet(storage2, data2);
}
function iconExists(name) {
  return getIconData(name) !== null;
}
function getIcon(name) {
  const result = getIconData(name);
  return result ? { ...result } : null;
}
const defaults$4 = Object.freeze({
  inline: false,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: false,
  hFlip: false,
  vFlip: false,
  rotate: 0
});
function mergeCustomisations(defaults2, item) {
  const result = {};
  for (const key in defaults2) {
    const attr = key;
    result[attr] = defaults2[attr];
    if (item[attr] === void 0) {
      continue;
    }
    const value = item[attr];
    switch (attr) {
      case "inline":
      case "slice":
        if (typeof value === "boolean") {
          result[attr] = value;
        }
        break;
      case "hFlip":
      case "vFlip":
        if (value === true) {
          result[attr] = !result[attr];
        }
        break;
      case "hAlign":
      case "vAlign":
        if (typeof value === "string" && value !== "") {
          result[attr] = value;
        }
        break;
      case "width":
      case "height":
        if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
          result[attr] = value;
        }
        break;
      case "rotate":
        if (typeof value === "number") {
          result[attr] += value;
        }
        break;
    }
  }
  return result;
}
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size2, ratio, precision) {
  if (ratio === 1) {
    return size2;
  }
  precision = precision === void 0 ? 100 : precision;
  if (typeof size2 === "number") {
    return Math.ceil(size2 * ratio * precision) / precision;
  }
  if (typeof size2 !== "string") {
    return size2;
  }
  const oldParts = size2.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size2;
  }
  const newParts = [];
  let code2 = oldParts.shift();
  let isNumber2 = unitsTest.test(code2);
  while (true) {
    if (isNumber2) {
      const num = parseFloat(code2);
      if (isNaN(num)) {
        newParts.push(code2);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code2);
    }
    code2 = oldParts.shift();
    if (code2 === void 0) {
      return newParts.join("");
    }
    isNumber2 = !isNumber2;
  }
}
function preserveAspectRatio(props) {
  let result = "";
  switch (props.hAlign) {
    case "left":
      result += "xMin";
      break;
    case "right":
      result += "xMax";
      break;
    default:
      result += "xMid";
  }
  switch (props.vAlign) {
    case "top":
      result += "YMin";
      break;
    case "bottom":
      result += "YMax";
      break;
    default:
      result += "YMid";
  }
  result += props.slice ? " slice" : " meet";
  return result;
}
function iconToSVG(icon, customisations) {
  const box = {
    left: icon.left,
    top: icon.top,
    width: icon.width,
    height: icon.height
  };
  let body = icon.body;
  [icon, customisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== 0 || box.top !== 0) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  let width, height;
  if (customisations.width === null && customisations.height === null) {
    height = "1em";
    width = calculateSize(height, box.width / box.height);
  } else if (customisations.width !== null && customisations.height !== null) {
    width = customisations.width;
    height = customisations.height;
  } else if (customisations.height !== null) {
    height = customisations.height;
    width = calculateSize(height, box.width / box.height);
  } else {
    width = customisations.width;
    height = calculateSize(width, box.height / box.width);
  }
  if (width === "auto") {
    width = box.width;
  }
  if (height === "auto") {
    height = box.height;
  }
  width = typeof width === "string" ? width : width.toString() + "";
  height = typeof height === "string" ? height : height.toString() + "";
  const result = {
    attributes: {
      width,
      height,
      preserveAspectRatio: preserveAspectRatio(customisations),
      viewBox: box.left.toString() + " " + box.top.toString() + " " + box.width.toString() + " " + box.height.toString()
    },
    body
  };
  if (customisations.inline) {
    result.inline = true;
  }
  return result;
}
function buildIcon(icon, customisations) {
  return iconToSVG(fullIcon(icon), customisations ? mergeCustomisations(defaults$4, customisations) : defaults$4);
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + "$3");
  });
  return body;
}
const cacheVersion = "iconify2";
const cachePrefix = "iconify";
const countKey = cachePrefix + "-count";
const versionKey = cachePrefix + "-version";
const hour = 36e5;
const cacheExpiration = 168;
const config = {
  local: true,
  session: true
};
let loaded = false;
const count = {
  local: 0,
  session: 0
};
const emptyList = {
  local: [],
  session: []
};
let _window = typeof window === "undefined" ? {} : window;
function getGlobal(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  config[key] = false;
  return null;
}
function setCount(storage2, key, value) {
  try {
    storage2.setItem(countKey, value.toString());
    count[key] = value;
    return true;
  } catch (err) {
    return false;
  }
}
function getCount(storage2) {
  const count2 = storage2.getItem(countKey);
  if (count2) {
    const total = parseInt(count2);
    return total ? total : 0;
  }
  return 0;
}
function initCache(storage2, key) {
  try {
    storage2.setItem(versionKey, cacheVersion);
  } catch (err) {
  }
  setCount(storage2, key, 0);
}
function destroyCache(storage2) {
  try {
    const total = getCount(storage2);
    for (let i2 = 0; i2 < total; i2++) {
      storage2.removeItem(cachePrefix + i2.toString());
    }
  } catch (err) {
  }
}
const loadCache = () => {
  if (loaded) {
    return;
  }
  loaded = true;
  const minTime = Math.floor(Date.now() / hour) - cacheExpiration;
  function load(key) {
    const func = getGlobal(key);
    if (!func) {
      return;
    }
    const getItem = (index) => {
      const name = cachePrefix + index.toString();
      const item = func.getItem(name);
      if (typeof item !== "string") {
        return false;
      }
      let valid = true;
      try {
        const data2 = JSON.parse(item);
        if (typeof data2 !== "object" || typeof data2.cached !== "number" || data2.cached < minTime || typeof data2.provider !== "string" || typeof data2.data !== "object" || typeof data2.data.prefix !== "string") {
          valid = false;
        } else {
          const provider = data2.provider;
          const prefix = data2.data.prefix;
          const storage2 = getStorage(provider, prefix);
          valid = addIconSet(storage2, data2.data).length > 0;
        }
      } catch (err) {
        valid = false;
      }
      if (!valid) {
        func.removeItem(name);
      }
      return valid;
    };
    try {
      const version2 = func.getItem(versionKey);
      if (version2 !== cacheVersion) {
        if (version2) {
          destroyCache(func);
        }
        initCache(func, key);
        return;
      }
      let total = getCount(func);
      for (let i2 = total - 1; i2 >= 0; i2--) {
        if (!getItem(i2)) {
          if (i2 === total - 1) {
            total--;
          } else {
            emptyList[key].push(i2);
          }
        }
      }
      setCount(func, key, total);
    } catch (err) {
    }
  }
  for (const key in config) {
    load(key);
  }
};
const storeCache = (provider, data2) => {
  if (!loaded) {
    loadCache();
  }
  function store(key) {
    if (!config[key]) {
      return false;
    }
    const func = getGlobal(key);
    if (!func) {
      return false;
    }
    let index = emptyList[key].shift();
    if (index === void 0) {
      index = count[key];
      if (!setCount(func, key, index + 1)) {
        return false;
      }
    }
    try {
      const item = {
        cached: Math.floor(Date.now() / hour),
        provider,
        data: data2
      };
      func.setItem(cachePrefix + index.toString(), JSON.stringify(item));
    } catch (err) {
      return false;
    }
    return true;
  }
  if (!Object.keys(data2.icons).length) {
    return;
  }
  if (data2.not_found) {
    data2 = Object.assign({}, data2);
    delete data2.not_found;
  }
  if (!store("local")) {
    store("session");
  }
};
const cache = {};
function toggleBrowserCache(storage2, value) {
  switch (storage2) {
    case "local":
    case "session":
      config[storage2] = value;
      break;
    case "all":
      for (const key in config) {
        config[key] = value;
      }
      break;
  }
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source2) {
  let resources;
  if (typeof source2.resources === "string") {
    resources = [source2.resources];
  } else {
    resources = source2.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    resources,
    path: source2.path === void 0 ? "/" : source2.path,
    maxURL: source2.maxURL ? source2.maxURL : 500,
    rotate: source2.rotate ? source2.rotate : 750,
    timeout: source2.timeout ? source2.timeout : 5e3,
    random: source2.random === true,
    index: source2.index ? source2.index : 0,
    dataAfterTimeout: source2.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config2 = createAPIConfig(customConfig);
  if (config2 === null) {
    return false;
  }
  configStorage[provider] = config2;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage);
}
const mergeParams = (base2, params) => {
  let result = base2, hasParams = result.indexOf("?") !== -1;
  function paramToString(value) {
    switch (typeof value) {
      case "boolean":
        return value ? "true" : "false";
      case "number":
        return encodeURIComponent(value);
      case "string":
        return encodeURIComponent(value);
      default:
        throw new Error("Invalid parameter");
    }
  }
  Object.keys(params).forEach((key) => {
    let value;
    try {
      value = paramToString(params[key]);
    } catch (err) {
      return;
    }
    result += (hasParams ? "&" : "?") + encodeURIComponent(key) + "=" + value;
    hasParams = true;
  });
  return result;
};
const maxLengthCache = {};
const pathCache = {};
const detectFetch = () => {
  let callback2;
  try {
    callback2 = fetch;
    if (typeof callback2 === "function") {
      return callback2;
    }
  } catch (err) {
  }
  return null;
};
let fetchModule = detectFetch();
function setFetch(fetch2) {
  fetchModule = fetch2;
}
function getFetch() {
  return fetchModule;
}
function calculateMaxLength(provider, prefix) {
  const config2 = getAPIConfig(provider);
  if (!config2) {
    return 0;
  }
  let result;
  if (!config2.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config2.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = mergeParams(prefix + ".json", {
      icons: ""
    });
    result = config2.maxURL - maxHostLength - config2.path.length - url.length;
  }
  const cacheKey = provider + ":" + prefix;
  pathCache[provider] = config2.path;
  maxLengthCache[cacheKey] = result;
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  let maxLength = maxLengthCache[prefix];
  if (maxLength === void 0) {
    maxLength = calculateMaxLength(provider, prefix);
  }
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    if (pathCache[provider] === void 0) {
      const config2 = getAPIConfig(provider);
      if (!config2) {
        return "/";
      }
      pathCache[provider] = config2.path;
    }
    return pathCache[provider];
  }
  return "/";
}
const send = (host, params, callback2) => {
  if (!fetchModule) {
    callback2("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      path += mergeParams(prefix + ".json", {
        icons: iconsList
      });
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback2("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback2(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data2) => {
    if (typeof data2 !== "object" || data2 === null) {
      setTimeout(() => {
        callback2("next", defaultError);
      });
      return;
    }
    setTimeout(() => {
      callback2("success", data2);
    });
  }).catch(() => {
    callback2("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a2, b) => {
    if (a2.provider !== b.provider) {
      return a2.provider.localeCompare(b.provider);
    }
    if (a2.prefix !== b.prefix) {
      return a2.prefix.localeCompare(b.prefix);
    }
    return a2.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    if (storage2[provider] === void 0) {
      storage2[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerStorage = storage2[provider];
    if (providerStorage[prefix] === void 0) {
      providerStorage[prefix] = getStorage(provider, prefix);
    }
    const localStorage = providerStorage[prefix];
    let list;
    if (localStorage.icons[name] !== void 0) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing[name] !== void 0) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
const callbacks = /* @__PURE__ */ Object.create(null);
const pendingUpdates = /* @__PURE__ */ Object.create(null);
function removeCallback(sources, id) {
  sources.forEach((source2) => {
    const provider = source2.provider;
    if (callbacks[provider] === void 0) {
      return;
    }
    const providerCallbacks = callbacks[provider];
    const prefix = source2.prefix;
    const items = providerCallbacks[prefix];
    if (items) {
      providerCallbacks[prefix] = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(provider, prefix) {
  if (pendingUpdates[provider] === void 0) {
    pendingUpdates[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerPendingUpdates = pendingUpdates[provider];
  if (!providerPendingUpdates[prefix]) {
    providerPendingUpdates[prefix] = true;
    setTimeout(() => {
      providerPendingUpdates[prefix] = false;
      if (callbacks[provider] === void 0 || callbacks[provider][prefix] === void 0) {
        return;
      }
      const items = callbacks[provider][prefix].slice(0);
      if (!items.length) {
        return;
      }
      const storage2 = getStorage(provider, prefix);
      let hasPending = false;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name] !== void 0) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing[name] !== void 0) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([
              {
                provider,
                prefix
              }
            ], item.id);
          }
          item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback2, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback: callback2,
    abort
  };
  pendingSources.forEach((source2) => {
    const provider = source2.provider;
    const prefix = source2.prefix;
    if (callbacks[provider] === void 0) {
      callbacks[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerCallbacks = callbacks[provider];
    if (providerCallbacks[prefix] === void 0) {
      providerCallbacks[prefix] = [];
    }
    providerCallbacks[prefix].push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, false, simpleNames2) : item;
    if (!validate || validateIcon(icon, simpleNames2)) {
      result.push({
        provider: icon.provider,
        prefix: icon.prefix,
        name: icon.name
      });
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config2, payload, query, done) {
  const resourcesCount = config2.resources.length;
  const startIndex = config2.random ? Math.floor(Math.random() * resourcesCount) : config2.index;
  let resources;
  if (config2.random) {
    let list = config2.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config2.resources.slice(startIndex).concat(config2.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue2 = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue2.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue2 = [];
  }
  function subscribe2(callback2, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback2 === "function") {
      doneCallbacks.push(callback2);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue2.length,
      subscribe: subscribe2,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback2) => {
      callback2(void 0, lastError);
    });
  }
  function clearQueue() {
    queue2.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue2 = [];
  }
  function moduleResponse(item, response, data2) {
    const isError = response !== "success";
    queue2 = queue2.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config2.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data2;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data2;
      if (!queue2.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config2.random) {
      const index = config2.resources.indexOf(item.resource);
      if (index !== -1 && index !== config2.index) {
        config2.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback2) => {
      callback2(data2);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue2.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config2.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data2) => {
        moduleResponse(item, status2, data2);
      }
    };
    queue2.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config2.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function setConfig(config2) {
  if (typeof config2 !== "object" || typeof config2.resources !== "object" || !(config2.resources instanceof Array) || !config2.resources.length) {
    throw new Error("Invalid Reduncancy configuration");
  }
  const newConfig = /* @__PURE__ */ Object.create(null);
  let key;
  for (key in defaultConfig) {
    if (config2[key] !== void 0) {
      newConfig[key] = config2[key];
    } else {
      newConfig[key] = defaultConfig[key];
    }
  }
  return newConfig;
}
function initRedundancy(cfg) {
  const config2 = setConfig(cfg);
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(config2, payload, queryCallback, (data2, error) => {
      cleanup();
      if (doneCallback) {
        doneCallback(data2, error);
      }
    });
    queries.push(query2);
    return query2;
  }
  function find(callback2) {
    const result = queries.find((value) => {
      return callback2(value);
    });
    return result !== void 0 ? result : null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config2.index = index;
    },
    getIndex: () => config2.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (redundancyCache[provider] === void 0) {
    const config2 = getAPIConfig(provider);
    if (!config2) {
      return;
    }
    const redundancy = initRedundancy(config2);
    const cachedReundancy = {
      config: config2,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback2) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api2 = getAPIModule(target);
    if (!api2) {
      callback2(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api2.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config2 = createAPIConfig(target);
    if (config2) {
      redundancy = initRedundancy(config2);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api2 = getAPIModule(moduleKey);
      if (api2) {
        send2 = api2.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback2(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback2)().abort;
}
function emptyCallback() {
}
const pendingIcons = /* @__PURE__ */ Object.create(null);
const iconsToLoad = /* @__PURE__ */ Object.create(null);
const loaderFlags = /* @__PURE__ */ Object.create(null);
const queueFlags = /* @__PURE__ */ Object.create(null);
function loadedNewIcons(provider, prefix) {
  if (loaderFlags[provider] === void 0) {
    loaderFlags[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerLoaderFlags = loaderFlags[provider];
  if (!providerLoaderFlags[prefix]) {
    providerLoaderFlags[prefix] = true;
    setTimeout(() => {
      providerLoaderFlags[prefix] = false;
      updateCallbacks(provider, prefix);
    });
  }
}
const errorsCache = /* @__PURE__ */ Object.create(null);
function loadNewIcons(provider, prefix, icons) {
  function err() {
    const key = (provider === "" ? "" : "@" + provider + ":") + prefix;
    const time = Math.floor(Date.now() / 6e4);
    if (errorsCache[key] < time) {
      errorsCache[key] = time;
      console.error('Unable to retrieve icons for "' + key + '" because API is not configured properly.');
    }
  }
  if (iconsToLoad[provider] === void 0) {
    iconsToLoad[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerIconsToLoad = iconsToLoad[provider];
  if (queueFlags[provider] === void 0) {
    queueFlags[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerQueueFlags = queueFlags[provider];
  if (pendingIcons[provider] === void 0) {
    pendingIcons[provider] = /* @__PURE__ */ Object.create(null);
  }
  const providerPendingIcons = pendingIcons[provider];
  if (providerIconsToLoad[prefix] === void 0) {
    providerIconsToLoad[prefix] = icons;
  } else {
    providerIconsToLoad[prefix] = providerIconsToLoad[prefix].concat(icons).sort();
  }
  if (!providerQueueFlags[prefix]) {
    providerQueueFlags[prefix] = true;
    setTimeout(() => {
      providerQueueFlags[prefix] = false;
      const icons2 = providerIconsToLoad[prefix];
      delete providerIconsToLoad[prefix];
      const api2 = getAPIModule(provider);
      if (!api2) {
        err();
        return;
      }
      const params = api2.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data2, error) => {
          const storage2 = getStorage(provider, prefix);
          if (typeof data2 !== "object") {
            if (error !== 404) {
              return;
            }
            const t2 = Date.now();
            item.icons.forEach((name) => {
              storage2.missing[name] = t2;
            });
          } else {
            try {
              const parsed = addIconSet(storage2, data2);
              if (!parsed.length) {
                return;
              }
              const pending = providerPendingIcons[prefix];
              parsed.forEach((name) => {
                delete pending[name];
              });
              if (cache.store) {
                cache.store(provider, data2);
              }
            } catch (err2) {
              console.error(err2);
            }
          }
          loadedNewIcons(provider, prefix);
        });
      });
    });
  }
}
const isPending = (icon) => {
  const provider = icon.provider;
  const prefix = icon.prefix;
  return pendingIcons[provider] && pendingIcons[provider][prefix] && pendingIcons[provider][prefix][icon.name] !== void 0;
};
const loadIcons = (icons, callback2) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback2) {
      setTimeout(() => {
        if (callCallback) {
          callback2(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push({
      provider,
      prefix
    });
    if (pendingIcons[provider] === void 0) {
      pendingIcons[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerPendingIcons = pendingIcons[provider];
    if (providerPendingIcons[prefix] === void 0) {
      providerPendingIcons[prefix] = /* @__PURE__ */ Object.create(null);
    }
    if (newIcons[provider] === void 0) {
      newIcons[provider] = /* @__PURE__ */ Object.create(null);
    }
    const providerNewIcons = newIcons[provider];
    if (providerNewIcons[prefix] === void 0) {
      providerNewIcons[prefix] = [];
    }
  });
  const time = Date.now();
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const pendingQueue = pendingIcons[provider][prefix];
    if (pendingQueue[name] === void 0) {
      pendingQueue[name] = time;
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((source2) => {
    const provider = source2.provider;
    const prefix = source2.prefix;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(provider, prefix, newIcons[provider][prefix]);
    }
  });
  return callback2 ? storeCallback(callback2, sortedIcons, sources) : emptyCallback;
};
const loadIcon = (icon) => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon(icon) : icon;
    loadIcons([iconObj || icon], (loaded2) => {
      if (loaded2.length && iconObj) {
        const storage2 = getStorage(iconObj.provider, iconObj.prefix);
        const data2 = getIconFromStorage(storage2, iconObj.name);
        if (data2) {
          fulfill(data2);
          return;
        }
      }
      reject(icon);
    });
  });
};
const elementFinderProperty = "iconifyFinder" + Date.now();
const elementDataProperty = "iconifyData" + Date.now();
function renderIconInPlaceholder(placeholder, customisations, iconData, returnString) {
  let span;
  try {
    span = document.createElement("span");
  } catch (err) {
    return returnString ? "" : null;
  }
  const data2 = iconToSVG(iconData, mergeCustomisations(defaults$4, customisations));
  const placeholderElement = placeholder.element;
  const finder2 = placeholder.finder;
  const name = placeholder.name;
  const placeholderClassName = placeholderElement ? placeholderElement.getAttribute("class") : "";
  const filteredClassList = finder2 ? finder2.classFilter(placeholderClassName ? placeholderClassName.split(/\s+/) : []) : [];
  const className = "iconify iconify--" + name.prefix + (name.provider === "" ? "" : " iconify--" + name.provider) + (filteredClassList.length ? " " + filteredClassList.join(" ") : "");
  const html = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="' + className + '">' + replaceIDs(data2.body) + "</svg>";
  span.innerHTML = html;
  const svg = span.childNodes[0];
  const svgStyle = svg.style;
  const svgAttributes = data2.attributes;
  Object.keys(svgAttributes).forEach((attr) => {
    svg.setAttribute(attr, svgAttributes[attr]);
  });
  if (data2.inline) {
    svgStyle.verticalAlign = "-0.125em";
  }
  if (placeholderElement) {
    const placeholderAttributes = placeholderElement.attributes;
    for (let i2 = 0; i2 < placeholderAttributes.length; i2++) {
      const item = placeholderAttributes.item(i2);
      if (item) {
        const name2 = item.name;
        if (name2 !== "class" && name2 !== "style" && svgAttributes[name2] === void 0) {
          try {
            svg.setAttribute(name2, item.value);
          } catch (err) {
          }
        }
      }
    }
    const placeholderStyle = placeholderElement.style;
    for (let i2 = 0; i2 < placeholderStyle.length; i2++) {
      const attr = placeholderStyle[i2];
      svgStyle[attr] = placeholderStyle[attr];
    }
  }
  if (finder2) {
    const elementData = {
      name,
      status: "loaded",
      customisations
    };
    svg[elementDataProperty] = elementData;
    svg[elementFinderProperty] = finder2;
  }
  const result = returnString ? span.innerHTML : svg;
  if (placeholderElement && placeholderElement.parentNode) {
    placeholderElement.parentNode.replaceChild(svg, placeholderElement);
  } else {
    span.removeChild(svg);
  }
  return result;
}
let nodes = [];
function findRootNode(node) {
  for (let i2 = 0; i2 < nodes.length; i2++) {
    const item = nodes[i2];
    const root2 = typeof item.node === "function" ? item.node() : item.node;
    if (root2 === node) {
      return item;
    }
  }
}
function addRootNode(root2, autoRemove = false) {
  let node = findRootNode(root2);
  if (node) {
    if (node.temporary) {
      node.temporary = autoRemove;
    }
    return node;
  }
  node = {
    node: root2,
    temporary: autoRemove
  };
  nodes.push(node);
  return node;
}
function addBodyNode() {
  if (document.documentElement) {
    return addRootNode(document.documentElement);
  }
  nodes.push({
    node: () => {
      return document.documentElement;
    }
  });
}
function removeRootNode(root2) {
  nodes = nodes.filter((node) => {
    const element = typeof node.node === "function" ? node.node() : node.node;
    return root2 !== element;
  });
}
function listRootNodes() {
  return nodes;
}
function onReady(callback2) {
  const doc2 = document;
  if (doc2.readyState === "complete" || doc2.readyState !== "loading" && !doc2.documentElement.doScroll) {
    callback2();
  } else {
    doc2.addEventListener("DOMContentLoaded", callback2);
    window.addEventListener("load", callback2);
  }
}
let callback = null;
const observerParams = {
  childList: true,
  subtree: true,
  attributes: true
};
function queueScan(node) {
  if (!node.observer) {
    return;
  }
  const observer = node.observer;
  if (!observer.pendingScan) {
    observer.pendingScan = setTimeout(() => {
      delete observer.pendingScan;
      if (callback) {
        callback(node);
      }
    });
  }
}
function checkMutations(node, mutations) {
  if (!node.observer) {
    return;
  }
  const observer = node.observer;
  if (!observer.pendingScan) {
    for (let i2 = 0; i2 < mutations.length; i2++) {
      const item = mutations[i2];
      if (item.addedNodes && item.addedNodes.length > 0 || item.type === "attributes" && item.target[elementFinderProperty] !== void 0) {
        if (!observer.paused) {
          queueScan(node);
        }
        return;
      }
    }
  }
}
function continueObserving(node, root2) {
  node.observer.instance.observe(root2, observerParams);
}
function startObserver(node) {
  let observer = node.observer;
  if (observer && observer.instance) {
    return;
  }
  const root2 = typeof node.node === "function" ? node.node() : node.node;
  if (!root2) {
    return;
  }
  if (!observer) {
    observer = {
      paused: 0
    };
    node.observer = observer;
  }
  observer.instance = new MutationObserver(checkMutations.bind(null, node));
  continueObserving(node, root2);
  if (!observer.paused) {
    queueScan(node);
  }
}
function startObservers() {
  listRootNodes().forEach(startObserver);
}
function stopObserver(node) {
  if (!node.observer) {
    return;
  }
  const observer = node.observer;
  if (observer.pendingScan) {
    clearTimeout(observer.pendingScan);
    delete observer.pendingScan;
  }
  if (observer.instance) {
    observer.instance.disconnect();
    delete observer.instance;
  }
}
function initObserver(cb) {
  const isRestart = callback !== null;
  if (callback !== cb) {
    callback = cb;
    if (isRestart) {
      listRootNodes().forEach(stopObserver);
    }
  }
  if (isRestart) {
    startObservers();
    return;
  }
  onReady(startObservers);
}
function pauseObservingNode(node) {
  (node ? [node] : listRootNodes()).forEach((node2) => {
    if (!node2.observer) {
      node2.observer = {
        paused: 1
      };
      return;
    }
    const observer = node2.observer;
    observer.paused++;
    if (observer.paused > 1 || !observer.instance) {
      return;
    }
    const instance = observer.instance;
    instance.disconnect();
  });
}
function pauseObserver(root2) {
  if (root2) {
    const node = findRootNode(root2);
    if (node) {
      pauseObservingNode(node);
    }
  } else {
    pauseObservingNode();
  }
}
function resumeObservingNode(observer) {
  (observer ? [observer] : listRootNodes()).forEach((node) => {
    if (!node.observer) {
      startObserver(node);
      return;
    }
    const observer2 = node.observer;
    if (observer2.paused) {
      observer2.paused--;
      if (!observer2.paused) {
        const root2 = typeof node.node === "function" ? node.node() : node.node;
        if (!root2) {
          return;
        } else if (observer2.instance) {
          continueObserving(node, root2);
        } else {
          startObserver(node);
        }
      }
    }
  });
}
function resumeObserver(root2) {
  if (root2) {
    const node = findRootNode(root2);
    if (node) {
      resumeObservingNode(node);
    }
  } else {
    resumeObservingNode();
  }
}
function observe(root2, autoRemove = false) {
  const node = addRootNode(root2, autoRemove);
  startObserver(node);
  return node;
}
function stopObserving(root2) {
  const node = findRootNode(root2);
  if (node) {
    stopObserver(node);
    removeRootNode(root2);
  }
}
const finders = [];
function addFinder(finder2) {
  if (finders.indexOf(finder2) === -1) {
    finders.push(finder2);
  }
}
function cleanIconName(name) {
  if (typeof name === "string") {
    name = stringToIcon(name);
  }
  return name === null || !validateIcon(name) ? null : name;
}
function compareCustomisations(list1, list2) {
  const keys1 = Object.keys(list1);
  const keys2 = Object.keys(list2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i2 = 0; i2 < keys1.length; i2++) {
    const key = keys1[i2];
    if (list2[key] !== list1[key]) {
      return false;
    }
  }
  return true;
}
function findPlaceholders(root2) {
  const results = [];
  finders.forEach((finder2) => {
    const elements2 = finder2.find(root2);
    Array.prototype.forEach.call(elements2, (item) => {
      const element = item;
      if (element[elementFinderProperty] !== void 0 && element[elementFinderProperty] !== finder2) {
        return;
      }
      const name = cleanIconName(finder2.name(element));
      if (name === null) {
        return;
      }
      element[elementFinderProperty] = finder2;
      const placeholder = {
        element,
        finder: finder2,
        name
      };
      results.push(placeholder);
    });
  });
  const elements = root2.querySelectorAll("svg.iconify");
  Array.prototype.forEach.call(elements, (item) => {
    const element = item;
    const finder2 = element[elementFinderProperty];
    const data2 = element[elementDataProperty];
    if (!finder2 || !data2) {
      return;
    }
    const name = cleanIconName(finder2.name(element));
    if (name === null) {
      return;
    }
    let updated = false;
    let customisations;
    if (name.prefix !== data2.name.prefix || name.name !== data2.name.name) {
      updated = true;
    } else {
      customisations = finder2.customisations(element);
      if (!compareCustomisations(data2.customisations, customisations)) {
        updated = true;
      }
    }
    if (updated) {
      const placeholder = {
        element,
        finder: finder2,
        name,
        customisations
      };
      results.push(placeholder);
    }
  });
  return results;
}
let scanQueued = false;
function checkPendingIcons() {
  if (!scanQueued) {
    scanQueued = true;
    setTimeout(() => {
      if (scanQueued) {
        scanQueued = false;
        scanDOM();
      }
    });
  }
}
const compareIcons = (icon1, icon2) => {
  return icon1 !== null && icon2 !== null && icon1.name === icon2.name && icon1.prefix === icon2.prefix;
};
function scanElement(root2) {
  const node = findRootNode(root2);
  if (!node) {
    scanDOM({
      node: root2,
      temporary: true
    }, true);
  } else {
    scanDOM(node);
  }
}
function scanDOM(node, addTempNode = false) {
  scanQueued = false;
  const iconsToLoad2 = /* @__PURE__ */ Object.create(null);
  (node ? [node] : listRootNodes()).forEach((node2) => {
    const root2 = typeof node2.node === "function" ? node2.node() : node2.node;
    if (!root2 || !root2.querySelectorAll) {
      return;
    }
    let hasPlaceholders = false;
    let paused = false;
    findPlaceholders(root2).forEach((item) => {
      const element = item.element;
      const iconName = item.name;
      const provider = iconName.provider;
      const prefix = iconName.prefix;
      const name = iconName.name;
      let data2 = element[elementDataProperty];
      if (data2 !== void 0 && compareIcons(data2.name, iconName)) {
        switch (data2.status) {
          case "missing":
            return;
          case "loading":
            if (isPending({
              provider,
              prefix,
              name
            })) {
              hasPlaceholders = true;
              return;
            }
        }
      }
      const storage2 = getStorage(provider, prefix);
      if (storage2.icons[name] !== void 0) {
        if (!paused && node2.observer) {
          pauseObservingNode(node2);
          paused = true;
        }
        const customisations = item.customisations !== void 0 ? item.customisations : item.finder.customisations(element);
        renderIconInPlaceholder(item, customisations, getIconFromStorage(storage2, name));
        return;
      }
      if (storage2.missing[name]) {
        data2 = {
          name: iconName,
          status: "missing",
          customisations: {}
        };
        element[elementDataProperty] = data2;
        return;
      }
      if (!isPending({ provider, prefix, name })) {
        if (iconsToLoad2[provider] === void 0) {
          iconsToLoad2[provider] = /* @__PURE__ */ Object.create(null);
        }
        const providerIconsToLoad = iconsToLoad2[provider];
        if (providerIconsToLoad[prefix] === void 0) {
          providerIconsToLoad[prefix] = /* @__PURE__ */ Object.create(null);
        }
        providerIconsToLoad[prefix][name] = true;
      }
      data2 = {
        name: iconName,
        status: "loading",
        customisations: {}
      };
      element[elementDataProperty] = data2;
      hasPlaceholders = true;
    });
    if (node2.temporary && !hasPlaceholders) {
      stopObserving(root2);
    } else if (addTempNode && hasPlaceholders) {
      observe(root2, true);
    } else if (paused && node2.observer) {
      resumeObservingNode(node2);
    }
  });
  Object.keys(iconsToLoad2).forEach((provider) => {
    const providerIconsToLoad = iconsToLoad2[provider];
    Object.keys(providerIconsToLoad).forEach((prefix) => {
      loadIcons(Object.keys(providerIconsToLoad[prefix]).map((name) => {
        const icon = {
          provider,
          prefix,
          name
        };
        return icon;
      }), checkPendingIcons);
    });
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function alignmentFromString(custom, align) {
  align.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "left":
      case "center":
      case "right":
        custom.hAlign = value;
        break;
      case "top":
      case "middle":
      case "bottom":
        custom.vAlign = value;
        break;
      case "slice":
      case "crop":
        custom.slice = true;
        break;
      case "meet":
        custom.slice = false;
    }
  });
}
function hasAttribute(element, key) {
  return element.hasAttribute(key);
}
function getAttribute(element, key) {
  return element.getAttribute(key);
}
function getBooleanAttribute(element, key) {
  const value = element.getAttribute(key);
  if (value === key || value === "true") {
    return true;
  }
  if (value === "" || value === "false") {
    return false;
  }
  return null;
}
const booleanAttributes = [
  "inline",
  "hFlip",
  "vFlip"
];
const stringAttributes = [
  "width",
  "height"
];
const mainClass = "iconify";
const inlineClass = "iconify-inline";
const selector = "i." + mainClass + ", span." + mainClass + ", i." + inlineClass + ", span." + inlineClass;
const finder = {
  find: (root2) => root2.querySelectorAll(selector),
  name: (element) => {
    if (hasAttribute(element, "data-icon")) {
      return getAttribute(element, "data-icon");
    }
    return null;
  },
  customisations: (element, defaultValues = {
    inline: false
  }) => {
    const result = defaultValues;
    const className = element.getAttribute("class");
    const classList = className ? className.split(/\s+/) : [];
    if (classList.indexOf(inlineClass) !== -1) {
      result.inline = true;
    }
    if (hasAttribute(element, "data-rotate")) {
      const value = rotateFromString(getAttribute(element, "data-rotate"));
      if (value) {
        result.rotate = value;
      }
    }
    if (hasAttribute(element, "data-flip")) {
      flipFromString(result, getAttribute(element, "data-flip"));
    }
    if (hasAttribute(element, "data-align")) {
      alignmentFromString(result, getAttribute(element, "data-align"));
    }
    booleanAttributes.forEach((attr) => {
      if (hasAttribute(element, "data-" + attr)) {
        const value = getBooleanAttribute(element, "data-" + attr);
        if (typeof value === "boolean") {
          result[attr] = value;
        }
      }
    });
    stringAttributes.forEach((attr) => {
      if (hasAttribute(element, "data-" + attr)) {
        const value = getAttribute(element, "data-" + attr);
        if (value !== "") {
          result[attr] = value;
        }
      }
    });
    return result;
  },
  classFilter: (classList) => {
    const result = [];
    classList.forEach((className) => {
      if (className !== "iconify" && className !== "" && className.slice(0, 9) !== "iconify--") {
        result.push(className);
      }
    });
    return result;
  }
};
function generateIcon(name, customisations, returnString) {
  const iconData = getIconData(name);
  if (!iconData) {
    return null;
  }
  const iconName = stringToIcon(name);
  const changes = mergeCustomisations(defaults$4, typeof customisations === "object" ? customisations : {});
  return renderIconInPlaceholder({
    name: iconName
  }, changes, iconData, returnString);
}
function getVersion() {
  return "2.2.1";
}
function renderSVG(name, customisations) {
  return generateIcon(name, customisations, false);
}
function renderHTML(name, customisations) {
  return generateIcon(name, customisations, true);
}
function renderIcon(name, customisations) {
  const iconData = getIconData(name);
  if (!iconData) {
    return null;
  }
  const changes = mergeCustomisations(defaults$4, typeof customisations === "object" ? customisations : {});
  return iconToSVG(iconData, changes);
}
function scan(root2) {
  if (root2) {
    scanElement(root2);
  } else {
    scanDOM();
  }
}
if (typeof document !== "undefined" && typeof window !== "undefined") {
  addBodyNode();
  addFinder(finder);
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload2 = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload2 === "object" && preload2 !== null) {
      (preload2 instanceof Array ? preload2 : [preload2]).forEach((item) => {
        try {
          if (typeof item !== "object" || item === null || item instanceof Array || typeof item.icons !== "object" || typeof item.prefix !== "string" || !addCollection(item)) {
            console.error(err);
          }
        } catch (e2) {
          console.error(err);
        }
      });
    }
  }
  setTimeout(() => {
    initObserver(scanDOM);
    scanDOM();
  });
}
function enableCache(storage2, enable) {
  toggleBrowserCache(storage2, enable !== false);
}
function disableCache(storage2) {
  toggleBrowserCache(storage2, true);
}
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  cache.store = storeCache;
  loadCache();
  const _window2 = window;
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (const key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e2) {
          console.error(err);
        }
      }
    }
  }
}
const _api = {
  getAPIConfig,
  setAPIModule,
  sendAPIQuery,
  setFetch,
  getFetch,
  listAPIProviders,
  mergeParams
};
const Iconify$1 = {
  _api,
  addAPIProvider,
  loadIcons,
  loadIcon,
  iconExists,
  getIcon,
  listIcons,
  addIcon,
  addCollection,
  shareStorage,
  replaceIDs,
  calculateSize,
  buildIcon,
  getVersion,
  renderSVG,
  renderHTML,
  renderIcon,
  scan,
  observe,
  stopObserving,
  pauseObserver,
  resumeObserver,
  enableCache,
  disableCache
};
try {
  if (self.Iconify === void 0) {
    self.Iconify = Iconify$1;
  }
} catch (err) {
}
const Iconify = Iconify$1.default || Iconify$1;
const collections = JSON.parse('[{"prefix":"ri","width":24,"height":24,"icons":{}},{"prefix":"ion","width":512,"height":512,"icons":{"reload-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\"/><path fill=\\"currentColor\\" d=\\"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42Z\\"/>"}}},{"prefix":"feather","width":24,"height":24,"icons":{"activity":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 12h-4l-3 9L9 3l-3 9H2\\"/>"},"airplay":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\\"/><path d=\\"m12 15l5 6H7l5-6z\\"/></g>"},"alert-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v4m0 4h.01\\"/></g>"},"alert-octagon":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4m0 4h.01\\"/>"},"alert-triangle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01\\"/>"},"align-center":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 10H6m15-4H3m18 8H3m15 4H6\\"/>"},"align-justify":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 10H3m18-4H3m18 8H3m18 4H3\\"/>"},"align-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 10H3m18-4H3m18 8H3m14 4H3\\"/>"},"align-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 10H7m14-4H3m18 8H3m18 4H7\\"/>"},"anchor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"5\\" r=\\"3\\"/><path d=\\"M12 22V8m-7 4H2a10 10 0 0 0 20 0h-3\\"/></g>"},"aperture":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\\"/></g>"},"archive":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 8v13H3V8M1 3h22v5H1zm9 9h4\\"/>"},"arrow-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 5v14m7-7l-7 7l-7-7\\"/>"},"arrow-down-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m8 12l4 4l4-4m-4-4v8\\"/></g>"},"arrow-down-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 7L7 17m10 0H7V7\\"/>"},"arrow-down-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m7 7l10 10m0-10v10H7\\"/>"},"arrow-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 12H5m7 7l-7-7l7-7\\"/>"},"arrow-left-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m12 8l-4 4l4 4m4-4H8\\"/></g>"},"arrow-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 12h14m-7-7l7 7l-7 7\\"/>"},"arrow-right-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m12 16l4-4l-4-4m-4 4h8\\"/></g>"},"arrow-up":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 19V5m-7 7l7-7l7 7\\"/>"},"arrow-up-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m16 12l-4-4l-4 4m4 4V8\\"/></g>"},"arrow-up-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 17L7 7m0 10V7h10\\"/>"},"arrow-up-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7 17L17 7M7 7h10v10\\"/>"},"at-sign":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\\"/></g>"},"award":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"8\\" r=\\"7\\"/><path d=\\"M8.21 13.89L7 23l5-3l5 3l-1.21-9.12\\"/></g>"},"bar-chart":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 20V10m6 10V4M6 20v-4\\"/>"},"bar-chart-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 20V10m-6 10V4M6 20v-6\\"/>"},"battery":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"12\\" x=\\"1\\" y=\\"6\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M23 13v-2\\"/></g>"},"battery-charging":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6\\"/>"},"bell":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0\\"/>"},"bell-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13.73 21a2 2 0 0 1-3.46 0m8.36-8A17.89 17.89 0 0 1 18 8M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14m1-9a6 6 0 0 0-9.33-5M1 1l22 22\\"/>"},"bluetooth":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m6.5 6.5l11 11L12 23V1l5.5 5.5l-11 11\\"/>"},"bold":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 4h8a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6zm0 8h9a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6z\\"/>"},"book":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\\"/><path d=\\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\\"/></g>"},"book-open":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\\"/>"},"bookmark":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m19 21l-7-5l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\\"/>"},"box":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12\\"/></g>"},"briefcase":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"14\\" x=\\"2\\" y=\\"7\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\"/></g>"},"calendar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"4\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 2v4M8 2v4m-5 4h18\\"/></g>"},"camera":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\"/><circle cx=\\"12\\" cy=\\"13\\" r=\\"4\\"/></g>"},"camera-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m1 1l22 22m-2-2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\\"/>"},"cast":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01\\"/>"},"check":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20 6L9 17l-5-5\\"/>"},"check-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\"/><path d=\\"M22 4L12 14.01l-3-3\\"/></g>"},"check-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m9 11l3 3L22 4\\"/><path d=\\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\\"/></g>"},"chevron-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m6 9l6 6l6-6\\"/>"},"chevron-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m15 18l-6-6l6-6\\"/>"},"chevron-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m9 18l6-6l-6-6\\"/>"},"chevron-up":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m18 15l-6-6l-6 6\\"/>"},"chevrons-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m7 13l5 5l5-5M7 6l5 5l5-5\\"/>"},"chevrons-left":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m11 17l-5-5l5-5m7 10l-5-5l5-5\\"/>"},"chevrons-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m13 17l5-5l-5-5M6 17l5-5l-5-5\\"/>"},"chevrons-up":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m17 11l-5-5l-5 5m10 7l-5-5l-5 5\\"/>"},"chrome":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M21.17 8H12M3.95 6.06L8.54 14m2.34 7.94L15.46 14\\"/></g>"},"circle":{"body":"<circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"/>"},"clipboard":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\"/><rect width=\\"8\\" height=\\"4\\" x=\\"8\\" y=\\"2\\" rx=\\"1\\" ry=\\"1\\"/></g>"},"clock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 6v6l4 2\\"/></g>"},"cloud-drizzle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M8 19v2m0-8v2m8 4v2m0-8v2m-4 6v2m0-8v2m8-.42A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/>"},"cloud-lightning":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\\"/><path d=\\"m13 11l-4 6h6l-4 6\\"/></g>"},"cloud-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3M1 1l22 22\\"/>"},"cloud-rain":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M16 13v8m-8-8v8m4-6v8m8-6.42A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/>"},"cloud-snow":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01\\"/>"},"code":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m16 18l6-6l-6-6M8 6l-6 6l6 6\\"/>"},"codepen":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m12 2l10 6.5v7L12 22L2 15.5v-7L12 2zm0 20v-6.5\\"/><path d=\\"m22 8.5l-10 7l-10-7\\"/><path d=\\"m2 15.5l10-7l10 7M12 2v6.5\\"/></g>"},"codesandbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"m7.5 4.21l4.5 2.6l4.5-2.6m-9 15.58V14.6L3 12m18 0l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12\\"/></g>"},"coffee":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zm4-7v3m4-3v3m4-3v3\\"/>"},"columns":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\\"/>"},"command":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a3 3 0 0 0-3-3z\\"/>"},"compass":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m16.24 7.76l-2.12 6.36l-6.36 2.12l2.12-6.36l6.36-2.12z\\"/></g>"},"copy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"13\\" height=\\"13\\" x=\\"9\\" y=\\"9\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\"/></g>"},"corner-down-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m9 10l-5 5l5 5\\"/><path d=\\"M20 4v7a4 4 0 0 1-4 4H4\\"/></g>"},"corner-down-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m15 10l5 5l-5 5\\"/><path d=\\"M4 4v7a4 4 0 0 0 4 4h12\\"/></g>"},"corner-left-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m14 15l-5 5l-5-5\\"/><path d=\\"M20 4h-7a4 4 0 0 0-4 4v12\\"/></g>"},"corner-left-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M14 9L9 4L4 9\\"/><path d=\\"M20 20h-7a4 4 0 0 1-4-4V4\\"/></g>"},"corner-right-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m10 15l5 5l5-5\\"/><path d=\\"M4 4h7a4 4 0 0 1 4 4v12\\"/></g>"},"corner-right-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m10 9l5-5l5 5\\"/><path d=\\"M4 20h7a4 4 0 0 0 4-4V4\\"/></g>"},"corner-up-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M9 14L4 9l5-5\\"/><path d=\\"M20 20v-7a4 4 0 0 0-4-4H4\\"/></g>"},"corner-up-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m15 14l5-5l-5-5\\"/><path d=\\"M4 20v-7a4 4 0 0 1 4-4h12\\"/></g>"},"cpu":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"16\\" height=\\"16\\" x=\\"4\\" y=\\"4\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3\\"/></g>"},"credit-card":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"22\\" height=\\"16\\" x=\\"1\\" y=\\"4\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M1 10h22\\"/></g>"},"crop":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M6.13 1L6 16a2 2 0 0 0 2 2h15\\"/><path d=\\"M1 6.13L16 6a2 2 0 0 1 2 2v15\\"/></g>"},"crosshair":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M22 12h-4M6 12H2m10-6V2m0 20v-4\\"/></g>"},"database":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><ellipse cx=\\"12\\" cy=\\"5\\" rx=\\"9\\" ry=\\"3\\"/><path d=\\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\\"/><path d=\\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\\"/></g>"},"delete":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 4H8l-7 8l7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3 5l-6 6m0-6l6 6\\"/>"},"disc":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"dollar-sign":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\"/>"},"download":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3\\"/>"},"download-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m8 17l4 4l4-4m-4-5v9\\"/><path d=\\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\\"/></g>"},"droplet":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\\"/>"},"edit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\"/><path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z\\"/></g>"},"edit-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5L17 3z\\"/>"},"edit-3":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1l1-4L16.5 3.5z\\"/>"},"external-link":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3\\"/>"},"eye":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"eye-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22\\"/>"},"facebook":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\"/>"},"fast-forward":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m13 19l9-7l-9-7v14zM2 19l9-7l-9-7v14z\\"/>"},"feather":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22m15.5-7H9\\"/>"},"figma":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\\"/><path d=\\"M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0zm-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0zm0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\\"/></g>"},"file":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\\"/><path d=\\"M13 2v7h7\\"/></g>"},"file-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6M9 15h6\\"/></g>"},"file-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6m-8 10v-6m-3 3h6\\"/></g>"},"file-text":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6m-4 5H8m8 4H8m2-8H8\\"/></g>"},"film":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"20\\" x=\\"2\\" y=\\"2\\" rx=\\"2.18\\" ry=\\"2.18\\"/><path d=\\"M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5\\"/></g>"},"filter":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 3H2l8 9.46V19l4 2v-8.54L22 3z\\"/>"},"flag":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 15s1-1 4-1s5 2 8 2s4-1 4-1V3s-1 1-4 1s-5-2-8-2s-4 1-4 1zm0 7v-7\\"/>"},"folder":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/>"},"folder-minus":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2zM9 14h6\\"/>"},"folder-plus":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2zm-10-8v6m-3-3h6\\"/>"},"framer":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\\"/>"},"frown":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16 16s-1.5-2-4-2s-4 2-4 2m1-7h.01M15 9h.01\\"/></g>"},"gift":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20 12v10H4V12M2 7h20v5H2zm10 15V7m0 0H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\\"/>"},"git-branch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M6 3v12\\"/><circle cx=\\"18\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M18 9a9 9 0 0 1-9 9\\"/></g>"},"git-commit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M1.05 12H7m10.01 0h5.95\\"/></g>"},"git-merge":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M6 21V9a9 9 0 0 0 9 9\\"/></g>"},"git-pull-request":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M13 6h3a2 2 0 0 1 2 2v7M6 9v12\\"/></g>"},"github":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\"/>"},"gitlab":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22.65 14.39L12 22.13L1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78l2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\\"/>"},"globe":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M2 12h20M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z\\"/></g>"},"grid":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z\\"/>"},"hard-drive":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zM6 16h.01M10 16h.01\\"/>"},"hash":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 9h16M4 15h16M10 3L8 21m8-18l-2 18\\"/>"},"headphones":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M3 18v-6a9 9 0 0 1 18 0v6\\"/><path d=\\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\\"/></g>"},"heart":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\"/>"},"help-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\\"/></g>"},"hexagon":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/>"},"home":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"/><path d=\\"M9 22V12h6v10\\"/></g>"},"image":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\"/><path d=\\"m21 15l-5-5L5 21\\"/></g>"},"inbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M22 12h-6l-2 3h-4l-2-3H2\\"/><path d=\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\"/></g>"},"info":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 16v-4m0-4h.01\\"/></g>"},"instagram":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"20\\" x=\\"2\\" y=\\"2\\" rx=\\"5\\" ry=\\"5\\"/><path d=\\"M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37zm1.5-4.87h.01\\"/></g>"},"italic":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 4h-9m4 16H5M15 4L9 20\\"/>"},"key":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778a5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\\"/>"},"layers":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5\\"/>"},"layout":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M3 9h18M9 21V9\\"/></g>"},"life-buoy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"m4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24m-4.24-9.9l4.24-4.24m-4.24 4.24l3.53-3.53M4.93 19.07l4.24-4.24\\"/></g>"},"link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\"/><path d=\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\"/></g>"},"link-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 7h3a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5a5 5 0 0 1 5-5h3m-1 5h8\\"/>"},"linkedin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z\\"/><circle cx=\\"4\\" cy=\\"4\\" r=\\"2\\"/></g>"},"list":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01\\"/>"},"loader":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83\\"/>"},"lock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"11\\" x=\\"3\\" y=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 10 0v4\\"/></g>"},"log-in":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4l5-5l-5-5m5 5H3\\"/>"},"log-out":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9\\"/>"},"mail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/><path d=\\"m22 6l-10 7L2 6\\"/></g>"},"map":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M1 6v16l7-4l8 4l7-4V2l-7 4l-8-4l-7 4zm7-4v16m8-12v16\\"/>"},"map-pin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\"/><circle cx=\\"12\\" cy=\\"10\\" r=\\"3\\"/></g>"},"maximize":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\\"/>"},"maximize-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7\\"/>"},"meh":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 15h8M9 9h.01M15 9h.01\\"/></g>"},"menu":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 12h18M3 6h18M3 18h18\\"/>"},"message-circle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\"/>"},"message-square":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\"/>"},"mic":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\\"/><path d=\\"M19 10v2a7 7 0 0 1-14 0v-2m7 9v4m-4 0h8\\"/></g>"},"mic-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\\"/><path d=\\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23M12 19v4m-4 0h8\\"/></g>"},"minimize":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\\"/>"},"minimize-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 14h6v6m10-10h-6V4m0 6l7-7M3 21l7-7\\"/>"},"minus":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 12h14\\"/>"},"minus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 12h8\\"/></g>"},"minus-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 12h8\\"/></g>"},"monitor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"14\\" x=\\"2\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 21h8m-4-4v4\\"/></g>"},"moon":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\\"/>"},"more-horizontal":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\"/></g>"},"more-vertical":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"5\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"19\\" r=\\"1\\"/></g>"},"mouse-pointer":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m3 3l7.07 16.97l2.51-7.39l7.39-2.51L3 3zm10 10l6 6\\"/>"},"move":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m5 9l-3 3l3 3M9 5l3-3l3 3m0 14l-3 3l-3-3M19 9l3 3l-3 3M2 12h20M12 2v20\\"/>"},"music":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M9 18V5l12-2v13\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"16\\" r=\\"3\\"/></g>"},"navigation":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m3 11l19-9l-9 19l-2-8l-8-2z\\"/>"},"navigation-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m12 2l7 19l-7-4l-7 4l7-19z\\"/>"},"octagon":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/>"},"package":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12\\"/></g>"},"paperclip":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\\"/>"},"pause":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 4h4v16H6zm8 0h4v16h-4z\\"/>"},"pause-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M10 15V9m4 6V9\\"/></g>"},"pen-tool":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m12 19l7-7l3 3l-7 7l-3-3z\\"/><path d=\\"m18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586\\"/><circle cx=\\"11\\" cy=\\"11\\" r=\\"2\\"/></g>"},"percent":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M19 5L5 19\\"/><circle cx=\\"6.5\\" cy=\\"6.5\\" r=\\"2.5\\"/><circle cx=\\"17.5\\" cy=\\"17.5\\" r=\\"2.5\\"/></g>"},"phone":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"phone-call":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"phone-forwarded":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m19 1l4 4l-4 4m-4-4h8m-1 11.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"phone-incoming":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M16 2v6h6m1-7l-7 7m6 8.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"phone-missed":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m23 1l-6 6m0-6l6 6m-1 9.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"phone-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7a2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91M23 1L1 23\\"/>"},"phone-outgoing":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M23 7V1h-6m-1 7l7-7m-1 15.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>"},"pie-chart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M21.21 15.89A10 10 0 1 1 8 2.83\\"/><path d=\\"M22 12A10 10 0 0 0 12 2v10z\\"/></g>"},"play":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m5 3l14 9l-14 9V3z\\"/>"},"play-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m10 8l6 4l-6 4V8z\\"/></g>"},"plus":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 5v14m-7-7h14\\"/>"},"plus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v8m-4-4h8\\"/></g>"},"pocket":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\\"/><path d=\\"m8 10l4 4l4-4\\"/></g>"},"power":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10\\"/>"},"printer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\\"/><path d=\\"M6 14h12v8H6z\\"/></g>"},"radio":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/><path d=\\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\\"/></g>"},"refresh-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M1 4v6h6m16 10v-6h-6\\"/><path d=\\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\\"/></g>"},"refresh-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M23 4v6h-6M1 20v-6h6\\"/><path d=\\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\\"/></g>"},"repeat":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m17 1l4 4l-4 4\\"/><path d=\\"M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4l4-4\\"/><path d=\\"M21 13v2a4 4 0 0 1-4 4H3\\"/></g>"},"rewind":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m11 19l-9-7l9-7v14zm11 0l-9-7l9-7v14z\\"/>"},"rotate-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M1 4v6h6\\"/><path d=\\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\\"/></g>"},"rotate-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M23 4v6h-6\\"/><path d=\\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\\"/></g>"},"rss":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16\\"/><circle cx=\\"5\\" cy=\\"19\\" r=\\"1\\"/></g>"},"save":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\\"/><path d=\\"M17 21v-8H7v8M7 3v5h8\\"/></g>"},"scissors":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M20 4L8.12 15.88m6.35-1.4L20 20M8.12 8.12L12 12\\"/></g>"},"search":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"m21 21l-4.35-4.35\\"/></g>"},"send":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M22 2L11 13M22 2l-7 20l-4-9l-9-4l20-7z\\"/>"},"server":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"8\\" x=\\"2\\" y=\\"2\\" rx=\\"2\\" ry=\\"2\\"/><rect width=\\"20\\" height=\\"8\\" x=\\"2\\" y=\\"14\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M6 6h.01M6 18h.01\\"/></g>"},"settings":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/><path d=\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\"/></g>"},"share":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4l-4 4m4-4v13\\"/>"},"share-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"18\\" cy=\\"5\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"12\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"19\\" r=\\"3\\"/><path d=\\"m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98\\"/></g>"},"shield":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z\\"/>"},"shield-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3l-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38M1 1l22 22\\"/>"},"shopping-bag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18\\"/><path d=\\"M16 10a4 4 0 0 1-8 0\\"/></g>"},"shopping-cart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"9\\" cy=\\"21\\" r=\\"1\\"/><circle cx=\\"20\\" cy=\\"21\\" r=\\"1\\"/><path d=\\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\\"/></g>"},"shuffle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M16 3h5v5M4 20L21 3m0 13v5h-5m-1-6l6 6M4 4l5 5\\"/>"},"sidebar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 3v18\\"/></g>"},"skip-back":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 20L9 12l10-8v16zM5 19V5\\"/>"},"skip-forward":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m5 4l10 8l-10 8V4zm14 1v14\\"/>"},"slack":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm6 0H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 4c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zm-6 0H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5S2.67 14 3.5 14zm10.5.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zm1.5 4.5H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5zM8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5S7.67 5 8.5 5z\\"/>"},"slash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m4.93 4.93l14.14 14.14\\"/></g>"},"sliders":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6\\"/>"},"smartphone":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"14\\" height=\\"20\\" x=\\"5\\" y=\\"2\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"smile":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01\\"/></g>"},"speaker":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"16\\" height=\\"20\\" x=\\"4\\" y=\\"2\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"12\\" cy=\\"14\\" r=\\"4\\"/><path d=\\"M12 6h.01\\"/></g>"},"square":{"body":"<rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" rx=\\"2\\" ry=\\"2\\"/>"},"star":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z\\"/>"},"stop-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9 9h6v6H9z\\"/></g>"},"sun":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"/><path d=\\"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\\"/></g>"},"sunrise":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 18a5 5 0 0 0-10 0m5-16v7m-7.78 1.22l1.42 1.42M1 18h2m18 0h2m-4.64-6.36l1.42-1.42M23 22H1M8 6l4-4l4 4\\"/>"},"sunset":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 18a5 5 0 0 0-10 0m5-9V2m-7.78 8.22l1.42 1.42M1 18h2m18 0h2m-4.64-6.36l1.42-1.42M23 22H1M16 5l-4 4l-4-4\\"/>"},"tablet":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"16\\" height=\\"20\\" x=\\"4\\" y=\\"2\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"tag":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01\\"/>"},"target":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"6\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/></g>"},"terminal":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m4 17l6-6l-6-6m8 14h8\\"/>"},"thermometer":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\\"/>"},"thumbs-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\"/>"},"thumbs-up":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\"/>"},"toggle-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"22\\" height=\\"14\\" x=\\"1\\" y=\\"5\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"8\\" cy=\\"12\\" r=\\"3\\"/></g>"},"toggle-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"22\\" height=\\"14\\" x=\\"1\\" y=\\"5\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"16\\" cy=\\"12\\" r=\\"3\\"/></g>"},"tool":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\\"/>"},"trash":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/>"},"trash-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6\\"/>"},"trello":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 7h3v9H7zm7 0h3v5h-3z\\"/></g>"},"trending-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m23 18l-9.5-9.5l-5 5L1 6\\"/><path d=\\"M17 18h6v-6\\"/></g>"},"trending-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m23 6l-9.5 9.5l-5-5L1 18\\"/><path d=\\"M17 6h6v6\\"/></g>"},"triangle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"/>"},"truck":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M1 3h15v13H1zm15 5h4l3 3v5h-7V8z\\"/><circle cx=\\"5.5\\" cy=\\"18.5\\" r=\\"2.5\\"/><circle cx=\\"18.5\\" cy=\\"18.5\\" r=\\"2.5\\"/></g>"},"tv":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"15\\" x=\\"2\\" y=\\"7\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"m17 2l-5 5l-5-5\\"/></g>"},"twitch":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\\"/>"},"twitter":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\"/>"},"type":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 7V4h16v3M9 20h6M12 4v16\\"/>"},"umbrella":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\\"/>"},"underline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 3v7a6 6 0 0 0 6 6a6 6 0 0 0 6-6V3M4 21h16\\"/>"},"unlock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"11\\" x=\\"3\\" y=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 9.9-1\\"/></g>"},"upload":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5l-5 5m5-5v12\\"/>"},"upload-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m16 16l-4-4l-4 4m4-4v9\\"/><path d=\\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\\"/><path d=\\"m16 16l-4-4l-4 4\\"/></g>"},"user":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/></g>"},"user-check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"m17 11l2 2l4-4\\"/></g>"},"user-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 11h-6\\"/></g>"},"user-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M20 8v6m3-3h-6\\"/></g>"},"user-x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"m18 8l5 5m0-5l-5 5\\"/></g>"},"users":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"9\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75\\"/></g>"},"video":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"m23 7l-7 5l7 5V7z\\"/><rect width=\\"15\\" height=\\"14\\" x=\\"1\\" y=\\"5\\" rx=\\"2\\" ry=\\"2\\"/></g>"},"video-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10M1 1l22 22\\"/>"},"voicemail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"5.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><circle cx=\\"18.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><path d=\\"M5.5 16h13\\"/></g>"},"volume":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/>"},"volume-1":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M11 5L6 9H2v6h4l5 4V5zm4.54 3.46a5 5 0 0 1 0 7.07\\"/>"},"volume-2":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M11 5L6 9H2v6h4l5 4V5zm8.07-.07a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\\"/>"},"volume-x":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M11 5L6 9H2v6h4l5 4V5zm12 4l-6 6m0-6l6 6\\"/>"},"watch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"7\\"/><path d=\\"M12 9v3l1.5 1.5m3.01 3.85l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\\"/></g>"},"wifi":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01\\"/>"},"wifi-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m1 1l22 22m-6.28-11.94A10.94 10.94 0 0 1 19 12.55m-14 0a10.94 10.94 0 0 1 5.17-2.39m.54-5.11A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88m2.41 9.99a6 6 0 0 1 6.95 0M12 20h.01\\"/>"},"wind":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\\"/>"},"x":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 6L6 18M6 6l12 12\\"/>"},"x-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m15 9l-6 6m0-6l6 6\\"/></g>"},"x-octagon":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6m0-6l6 6\\"/>"},"x-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"18\\" height=\\"18\\" x=\\"3\\" y=\\"3\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"m9 9l6 6m0-6l-6 6\\"/></g>"},"youtube":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z\\"/><path d=\\"m9.75 15.02l5.75-3.27l-5.75-3.27v6.54z\\"/></g>"},"zap":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 2L3 14h9l-1 8l10-12h-9l1-8z\\"/>"},"zap-off":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12.41 6.75L13 2l-2.43 2.92m8 7.99L21 10h-5.34M8 8l-5 6h9l-1 8l5-6M1 1l22 22\\"/>"},"zoom-in":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"m21 21l-4.35-4.35M11 8v6m-3-3h6\\"/></g>"},"zoom-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"m21 21l-4.35-4.35M8 11h6\\"/></g>"}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"angle-down":{"body":"<path fill=\\"currentColor\\" d=\\"M1011 480q0 13-10 23L535 969q-10 10-23 10t-23-10L23 503q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393l393-393q10-10 23-10t23 10l50 50q10 10 10 23z\\"/>","width":1024,"height":1280},"angle-up":{"body":"<path fill=\\"currentColor\\" d=\\"M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\\"/>","width":1024,"height":1280},"sort":{"body":"<path fill=\\"currentColor\\" d=\\"M1024 896q0 26-19 45l-448 448q-19 19-45 19t-45-19L19 941Q0 922 0 896t19-45t45-19h896q26 0 45 19t19 45zm0-384q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45z\\"/>","width":1024,"height":1408},"sort-asc":{"body":"<path fill=\\"currentColor\\" d=\\"M1024 512q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45z\\"/>","width":1024,"height":1344}}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"amazon":{"body":"<path fill=\\"currentColor\\" d=\\"M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5c0 109.5 138.3 114 183.5 43.2c6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32C140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5c40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2c0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31c-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2c-10.8 1-13 2-14-.3c-2.3-5.7 21.7-15.5 37.5-17.5c15.7-1.8 41-.8 46 5.7c3.7 5.1 0 27.1-6.5 43.1z\\"/>"},"dribbble":{"body":"<path fill=\\"currentColor\\" d=\\"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978z\\"/>","width":512},"facebook-f":{"body":"<path fill=\\"currentColor\\" d=\\"m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\\"/>","width":320},"github-alt":{"body":"<path fill=\\"currentColor\\" d=\\"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1s10.9-55.1 36.7-55.1s36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95c-37.9 76.6-142.1 74.8-216.7 74.8c-75.8 0-186.2 2.7-225.6-74.8c-14.6-29-20.2-63.1-20.2-95c0-41.9 13.9-81.5 41.5-113.6c-5.2-15.8-7.7-32.4-7.7-48.8c0-21.5 4.9-32.3 14.6-51.8c45.3 0 74.3 9 108.8 36c29-6.9 58.8-10 88.7-10c27 0 54.2 2.9 80.4 9.2c34-26.7 63-35.2 107.8-35.2c9.8 19.5 14.6 30.3 14.6 51.8c0 16.4-2.6 32.7-7.7 48.2c27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6c-18.9 0-37 3.4-56 6c-14.9 2.3-29.8 3.2-45.1 3.2c-15.2 0-30.1-.9-45.1-3.2c-18.7-2.6-37-6-56-6c-46.8 0-73.5 38.7-73.5 82.6c0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1s36.7-34.2 36.7-55.1s-10.9-55.1-36.7-55.1z\\"/>","width":480},"google-plus-g":{"body":"<path fill=\\"currentColor\\" d=\\"M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z\\"/>","width":640},"instagram":{"body":"<path fill=\\"currentColor\\" d=\\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\\"/>"},"invision":{"body":"<path fill=\\"currentColor\\" d=\\"M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4c-14.9 0-27.1-12-27.1-27c.1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6c14.1-46.4-45.2-59-59.9.7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3c.1-14.3.9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2c0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38c-14.2 51.1-14.6 50.7-14.9 58.8c0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z\\"/>"},"linkedin-in":{"body":"<path fill=\\"currentColor\\" d=\\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z\\"/>"},"reddit-alien":{"body":"<path fill=\\"currentColor\\" d=\\"M440.3 203.5c-15 0-28.2 6.2-37.9 15.9c-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2c22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8c-9.7-10.1-23.4-16.3-38.4-16.3c-55.6 0-73.8 74.6-22.9 100.1c-1.8 7.9-2.6 16.3-2.6 24.7c0 83.8 94.4 151.7 210.3 151.7c116.4 0 210.8-67.9 210.8-151.7c0-8.4-.9-17.2-3.1-25.1c49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7c21.6 0 39.2 17.6 39.2 39.7c0 21.6-17.6 39.2-39.2 39.2c-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0c-4-3.5-4-9.7 0-13.7c3.5-3.5 9.7-3.5 13.2 0c27.8 28.5 120 29 149 0c3.5-3.5 9.7-3.5 13.2 0c4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2c0-22 17.6-39.7 39.2-39.7c22 0 39.7 17.6 39.7 39.7c-.1 21.5-17.7 39.2-39.7 39.2z\\"/>","width":512},"tumblr":{"body":"<path fill=\\"currentColor\\" d=\\"M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7c-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16c62-21.8 81.5-76 84.3-117.1c.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8c4.8-1.9 9-3.2 12.7-2.2c3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z\\"/>","width":320},"twitter":{"body":"<path fill=\\"currentColor\\" d=\\"M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z\\"/>","width":512},"youtube":{"body":"<path fill=\\"currentColor\\" d=\\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z\\"/>","width":576}}},{"prefix":"fa-solid","width":512,"height":512,"icons":{"biking":{"body":"<path fill=\\"currentColor\\" d=\\"M400 96a48 48 0 1 0-48-48a48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57l58.25-49.92zm116 39a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64z\\"/>","width":640},"dumbbell":{"body":"<path fill=\\"currentColor\\" d=\\"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z\\"/>","width":640},"running":{"body":"<path fill=\\"currentColor\\" d=\\"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z\\"/>","width":416},"skiing":{"body":"<path fill=\\"currentColor\\" d=\\"M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48s21.5 48 48 48zm73 356.1c-9.4-9.4-24.6-9.4-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7l-135.8-70.2l49.2-73.8c12.7-19 10.2-44.5-6-60.6L293 215.7l-107-53.1c-2.9 19.9 3.4 40 17.7 54.4l75.1 75.2l-45.9 68.8L35 258.7c-11.7-6-26.2-1.5-32.3 10.3c-6.1 11.8-1.5 26.3 10.3 32.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1c23.2 0 46-9 63-26c9.3-9.3 9.3-24.5 0-33.8zM120 91.6l-11.5 22.5c14.4 7.3 31.2 4.9 42.8-4.8l47.2 23.4c-.1.1-.1.2-.2.3l114.5 56.8l32.4-13l6.4 19.1c4 12.1 12.6 22 24 27.7l58.1 29c15.9 7.9 35 1.5 42.9-14.3c7.9-15.8 1.5-35-14.3-42.9l-52.1-26.1l-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.2 32.5l-62.5-31c.3-14.5-7.2-28.6-20.9-35.6l-11.1 21.7h-.2l-34.4-7c-1.8-.4-3.7.2-5 1.7c-1.9 2.2-1.7 5.5.5 7.4l26.2 23z\\"/>"},"swimmer":{"body":"<path fill=\\"currentColor\\" d=\\"M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6l18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88c5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58zM624 352h-16c-26.04 0-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80s-80 35.82-80 80s35.82 80 80 80z\\"/>","width":640}}},{"prefix":"ps","width":512,"height":512,"icons":{}}]');
collections.forEach((c2) => Iconify.addCollection(c2));
var nprogress = "";
var _default$1 = "";
var _default = "";
var simplebar = "";
var tinySlider = "";
var notyf_min = "";
var tippy = "";
var svgArrow = "";
var border = "";
var backdrop = "";
var light = "";
var main = "";
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l = obj.length; i2 < l; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a2, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a2[key] = bind$1(val, thisArg);
    } else {
      a2[key] = val;
    }
  });
  return a2;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue2(v2) {
        if (utils$d.isDate(v2)) {
          v2 = v2.toISOString();
        } else if (utils$d.isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config2, code2, request2, response) {
  error.config = config2;
  if (code2) {
    error.code = code2;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config2, code2, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config2, code2, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve2, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve2(response);
  } else {
    reject(createError$1(
      "Request failed with status code " + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove2(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove2() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i2)).toLowerCase();
    val = utils$9.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var transitionalDefaults$1 = transitional;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve2, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    var onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL$1(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve2(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config2, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError2() {
      reject(createError2("Network Error", config2, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      var transitional3 = config2.transitional || transitionalDefaults$1;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(createError2(
        timeoutErrorMessage,
        config2,
        transitional3.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
        request2
      ));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var transitionalDefaults = transitional;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw enhanceError2(e2, this, "E_JSON_PARSE");
          }
          throw e2;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData2.call(
    config2,
    config2.data,
    config2.headers,
    config2.transformRequest
  );
  config2.headers = utils$4.merge(
    config2.headers.common || {},
    config2.headers[config2.method] || {},
    config2.headers
  );
  utils$4.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method) {
      delete config2.headers[method];
    }
  );
  var adapter = config2.adapter || defaults$1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData2.call(
      config2,
      response.data,
      response.headers,
      config2.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(
          config2,
          reason.response.data,
          reason.response.headers,
          config2.transformResponse
        );
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data = {
  "version": "0.26.1"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")));
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config2) {
  if (typeof configOrUrl === "string") {
    config2 = config2 || {};
    config2.url = configOrUrl;
  } else {
    config2 = configOrUrl || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional3 = config2.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  return buildURL2(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve2) {
    resolvePromise = resolve2;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l = token._listeners.length;
    for (i2 = 0; i2 < l; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve2) {
      token.subscribe(resolve2);
      _resolve = resolve2;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c2) {
    cancel = c2;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback2) {
  return function wrap(arr) {
    return callback2.apply(null, arr);
  };
};
var utils$1 = utils$e;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig2) {
  var context = new Axios(defaultConfig2);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig2, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
const useUserSession = defineStore("userSession", () => {
  const token = useStorage("token", "");
  const userData = ref();
  const userId = ref("");
  const userEmail = ref("");
  const userRol = ref("");
  const userEspecial = ref("");
  const loading = ref(true);
  const isLoggedIn = computed(() => token.value !== void 0 && token.value !== "");
  function setUserData(data2, id, email, rol, especial) {
    userData.value = data2;
    userId.value = id;
    userEmail.value = email;
    userRol.value = rol;
    userEspecial.value = especial;
  }
  const imagenUrl = computed(() => {
    var _a2, _b2;
    if ((_a2 = userData.value) == null ? void 0 : _a2.foto_url) {
      return (_b2 = userData.value) == null ? void 0 : _b2.foto_url;
    }
    return "/images/avatars/svg/vuero-1.svg";
  });
  function setToken(newToken) {
    token.value = newToken;
  }
  function setLoading(newLoading) {
    loading.value = newLoading;
  }
  async function logoutUser() {
    token.value = void 0;
    userData.value = void 0;
  }
  return {
    userData,
    userId,
    userEmail,
    userRol,
    token,
    userEspecial,
    imagenUrl,
    isLoggedIn,
    loading,
    logoutUser,
    setUserData,
    setToken,
    setLoading
  };
});
let api;
function createApi() {
  api = axios.create({
    baseURL: {}.VITE_API_BASE_URL
  });
  api.interceptors.request.use((config2) => {
    const userSession = useUserSession();
    if (userSession.isLoggedIn) {
      config2.headers = {
        ...config2.headers,
        Authorization: `Bearer ${userSession.token}`
      };
    }
    return config2;
  });
  return api;
}
const plugins = { "./plugins/directives.ts": () => true ? __vitePreload(() => import("./directives.fcd82dd4.js"), []) : null, "./plugins/i18n.ts": () => true ? __vitePreload(() => import("./i18n.e2bfb81e.js"), []) : null, "./plugins/naviguation-guards.ts": () => true ? __vitePreload(() => import("./naviguation-guards.5deaf324.js"), ["assets/naviguation-guards.5deaf324.js","assets/general.8b156443.js","assets/main.cf1f8e20.js","assets/config.0fd79a34.js"]) : null, "./plugins/nprogress.ts": () => true ? __vitePreload(() => import("./nprogress.47a40db7.js"), []) : null, "./plugins/v-calendar.ts": () => true ? __vitePreload(() => import("./v-calendar.cb004cdb.js"), ["assets/v-calendar.cb004cdb.js","assets/v-calendar.639d3d78.css"]) : null, "./plugins/vue-tippy.ts": () => true ? __vitePreload(() => import("./vue-tippy.744e0ade.js"), []) : null, "./plugins/vueform.ts": () => true ? __vitePreload(() => import("./vueform.a3af2e0a.js"), []) : null };
function definePlugin(plugin) {
  return plugin;
}
async function createApp() {
  const app = createApp$1(_sfc_main);
  const router = createRouter();
  const api2 = createApi();
  const head = createHead();
  app.use(head);
  const pinia = createPinia();
  app.use(pinia);
  const vuero = {
    app,
    api: api2,
    router,
    head,
    pinia
  };
  app.provide("vuero", vuero);
  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]();
      await plugin(vuero);
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`);
      console.error(error);
    }
  }
  app.use(vuero.router);
  return vuero;
}
createApp().then(async (vuero) => {
  await vuero.router.isReady();
  vuero.app.mount("#app");
});
export { useRouter as $, onMounted as A, nextTick as B, watch as C, unref as D, onUnmounted as E, Fragment as F, isRef as G, isReactive as H, getCurrentInstance as I, isVNode$1 as J, render as K, defineAsyncComponent as L, useRoute as M, onBeforeMount as N, _sfc_main$7 as O, useHead as P, withKeys as Q, RouterLink as R, watchPostEffect as S, Transition as T, defineStore as U, _export_sfc as V, useDarkmode as W, useI18n as X, withDirectives as Y, vModelRadio as Z, __vitePreload as _, useUserSession as a, createStaticVNode as a0, vModelText as a1, toRef as a2, resolveDynamicComponent as a3, warn$1 as a4, provide as a5, watchEffect as a6, inject as a7, onBeforeUnmount as a8, markRaw as a9, setBlockTracking as aA, commonjsRequire as aB, __unplugin_components_0 as aC, vShow as aD, toHandlers as aE, axios as aF, VueScrollTo as aG, toRefs as aH, readonly as aa, normalizeProps as ab, guardReactiveProps as ac, useSlots as ad, pushScopeId as ae, popScopeId as af, useCssVars as ag, Teleport as ah, onClickOutside as ai, createSharedComposable as aj, useCssVar as ak, _sfc_main$2 as al, TransitionGroup as am, _sfc_main$3 as an, createApp$1 as ao, withAsyncContext as ap, vModelCheckbox as aq, useAttrs as ar, vModelSelect as as, storeToRefs as at, refDebounced as au, toRaw as av, createSlots as aw, _sfc_main$9 as ax, resolveDirective as ay, useWindowScroll as az, commonjsGlobal as b, createI18n as c, definePlugin as d, computed as e, createBlock as f, renderSlot as g, h, createElementBlock as i, createBaseVNode as j, normalizeClass as k, createCommentVNode as l, createTextVNode as m, normalizeStyle as n, openBlock as o, resolveComponent as p, createVNode as q, reactive as r, renderList as s, toDisplayString$1 as t, useStorage as u, withModifiers as v, withCtx as w, mergeProps as x, defineComponent as y, ref as z };
