import { CalendarHeadCell_default } from "../Calendar/CalendarHeadCell.js";
import { createBlock, defineComponent, guardReactiveProps, normalizeProps, openBlock, renderSlot, unref, withCtx } from "vue";

//#region src/DatePicker/DatePickerHeadCell.vue?vue&type=script&setup=true&lang.ts
const __default__ = { compatConfig: { MODE: 3 } };
var DatePickerHeadCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	...__default__,
	__name: "DatePickerHeadCell",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CalendarHeadCell_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});

//#endregion
//#region src/DatePicker/DatePickerHeadCell.vue
var DatePickerHeadCell_default = DatePickerHeadCell_vue_vue_type_script_setup_true_lang_default;

//#endregion
export { DatePickerHeadCell_default };
//# sourceMappingURL=DatePickerHeadCell.js.map