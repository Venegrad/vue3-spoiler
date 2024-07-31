'use strict';var vue=require('vue');const _hoisted_1 = {
  class: "ven-spoiler__title"
};
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("span", {
  class: "ven-spoiler__angle"
}, [/*#__PURE__*/vue.createElementVNode("span")], -1);
const _hoisted_3 = {
  key: 0,
  class: "ven-spoiler__hidden"
};
const _hoisted_4 = {
  class: "ven-spoiler__hidden-wrap"
};
var script = {
  __name: 'venSpoiler',
  props: {
    title: [String, Number],
    open: Boolean,
    modelValue: {
      type: Boolean,
      default: undefined
    }
  },
  emits: ['update:modelValue', 'open', 'close', 'changed'],
  setup(__props, _ref) {
    let {
      emit: __emit
    } = _ref;
    const props = __props;
    const emit = __emit;
    const open = props.modelValue !== undefined ? vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    }) : vue.ref(props.open);
    vue.watch(() => open.value, val => {
      emit('changed', val);
      val ? emit("open", new Date()) : emit("close", new Date());
    });
    const startTransition = el => {
      el.style.height = el.scrollHeight + "px";
    };
    const endTransition = el => {
      el.style.height = "";
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["ven-spoiler", {
          'ven-active': vue.unref(open)
        }])
      }, [vue.createElementVNode("button", {
        class: "ven-spoiler__button",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers($event => open.value = !vue.unref(open), ["prevent"])),
        type: "button"
      }, [vue.renderSlot(_ctx.$slots, "button", {}, () => [vue.createElementVNode("span", _hoisted_1, [vue.createElementVNode("span", null, vue.toDisplayString(__props.title), 1)])]), vue.renderSlot(_ctx.$slots, "angle", {}, () => [_hoisted_2])]), vue.createVNode(vue.Transition, {
        name: "accordionitem",
        onEnter: startTransition,
        onAfterEnter: endTransition,
        onBeforeLeave: startTransition,
        onAfterLeave: endTransition
      }, {
        default: vue.withCtx(() => [vue.unref(open) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [vue.createElementVNode("div", _hoisted_4, [vue.renderSlot(_ctx.$slots, "default")])])) : vue.createCommentVNode("", true)]),
        _: 3
      })], 2);
    };
  }
};// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script;

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.component('venSpoiler', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// iife/cjs usage extends esm default export - so import it all

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(_ref => {
  let [exportName, exported] = _ref;
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;