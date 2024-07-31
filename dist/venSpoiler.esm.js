import { computed, ref, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withModifiers, renderSlot, toDisplayString, createVNode, Transition, withCtx, createCommentVNode } from 'vue';

const _hoisted_1 = {
  class: "ven-spoiler__title"
};
const _hoisted_2 = /*#__PURE__*/createElementVNode("span", {
  class: "ven-spoiler__angle"
}, [/*#__PURE__*/createElementVNode("span")], -1);
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
    const open = props.modelValue !== undefined ? computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    }) : ref(props.open);
    watch(() => open.value, val => {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ven-spoiler", {
          'ven-active': unref(open)
        }])
      }, [createElementVNode("button", {
        class: "ven-spoiler__button",
        onClick: _cache[0] || (_cache[0] = withModifiers($event => open.value = !unref(open), ["prevent"])),
        type: "button"
      }, [renderSlot(_ctx.$slots, "button", {}, () => [createElementVNode("span", _hoisted_1, [createElementVNode("span", null, toDisplayString(__props.title), 1)])]), renderSlot(_ctx.$slots, "angle", {}, () => [_hoisted_2])]), createVNode(Transition, {
        name: "accordionitem",
        onEnter: startTransition,
        onAfterEnter: endTransition,
        onBeforeLeave: startTransition,
        onAfterLeave: endTransition
      }, {
        default: withCtx(() => [unref(open) ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "default")])])) : createCommentVNode("", true)]),
        _: 3
      })], 2);
    };
  }
};

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
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

export { entry_esm as default };
