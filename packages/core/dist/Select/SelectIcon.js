import { Primitive } from "../Primitive/Primitive.js";
import { createBlock, createTextVNode, defineComponent, openBlock, renderSlot, unref, withCtx } from "vue";

//#region src/Select/SelectIcon.vue?vue&type=script&setup=true&lang.ts
const __default__ = { compatConfig: { MODE: 3 } };
var SelectIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	...__default__,
	__name: "SelectIcon",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				"aria-hidden": "true",
				as: _ctx.as,
				"as-child": _ctx.asChild
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("▼"))])]),
				_: 3
			}, 8, ["as", "as-child"]);
		};
	}
});

//#endregion
//#region src/Select/SelectIcon.vue
var SelectIcon_default = SelectIcon_vue_vue_type_script_setup_true_lang_default;

//#endregion
export { SelectIcon_default };
//# sourceMappingURL=SelectIcon.js.map