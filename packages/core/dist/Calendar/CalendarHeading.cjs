'use strict';

const vue = require('vue');
const Primitive_Primitive = require('../Primitive/Primitive.cjs');
const Calendar_CalendarRoot = require('./CalendarRoot.cjs');

const __default__ = {
  compatConfig: {
    MODE: 3
  }
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(__props) {
    const props = __props;
    const rootContext = Calendar_CalendarRoot.injectCalendarRootContext();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(Primitive_Primitive.Primitive), vue.mergeProps(props, {
        "data-disabled": vue.unref(rootContext).disabled.value ? "" : void 0
      }), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {
            headingValue: vue.unref(rootContext).headingValue.value
          }, () => [
            vue.createTextVNode(vue.toDisplayString(vue.unref(rootContext).headingValue.value), 1)
          ])
        ]),
        _: 3
      }, 16, ["data-disabled"]);
    };
  }
});

exports._sfc_main = _sfc_main;
//# sourceMappingURL=CalendarHeading.cjs.map
