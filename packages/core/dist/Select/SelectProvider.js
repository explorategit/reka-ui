import { defineComponent, renderSlot } from 'vue';
import { p as provideSelectRootContext } from './SelectRoot.js';
import { p as provideSelectContentContext, S as SelectContentDefaultContextValue } from './SelectContentImpl.js';

const __default__ = {
  compatConfig: {
    MODE: 3
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  ...{
    inheritAttrs: false
  },
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(__props) {
    const props = __props;
    provideSelectRootContext(props.context);
    provideSelectContentContext(SelectContentDefaultContextValue);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=SelectProvider.js.map
