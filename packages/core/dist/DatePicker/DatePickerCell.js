import { CalendarCell_default } from "../Calendar/CalendarCell.js";
import { createBlock, defineComponent, guardReactiveProps, normalizeProps, openBlock, renderSlot, unref, withCtx } from "vue";

//#region src/DatePicker/DatePickerCell.vue?vue&type=script&setup=true&lang.ts
const __default__ = { compatConfig: { MODE: 3 } };
var DatePickerCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	...__default__,
	__name: "DatePickerCell",
	props: {
		date: {
			type: null,
			required: true
		},
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
			return openBlock(), createBlock(unref(CalendarCell_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});

//#endregion
//#region src/DatePicker/DatePickerCell.vue
var DatePickerCell_default = DatePickerCell_vue_vue_type_script_setup_true_lang_default;

//#endregion
export { DatePickerCell_default };
//# sourceMappingURL=DatePickerCell.js.map