'use strict';

const vue = require('vue');
const Select_SelectRoot = require('./SelectRoot.cjs');
const Select_SelectContentImpl = require('./SelectContentImpl.cjs');

const __default__ = {
  compatConfig: {
    MODE: 3
  }
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    Select_SelectRoot.provideSelectRootContext(props.context);
    Select_SelectContentImpl.provideSelectContentContext(Select_SelectContentImpl.SelectContentDefaultContextValue);
    return (_ctx, _cache) => {
      return vue.renderSlot(_ctx.$slots, "default");
    };
  }
});

exports._sfc_main = _sfc_main;
//# sourceMappingURL=SelectProvider.cjs.map
