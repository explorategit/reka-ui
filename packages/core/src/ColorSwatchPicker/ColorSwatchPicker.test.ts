import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ColorSwatchPickerItem from './ColorSwatchPickerItem.vue'
import ColorSwatchPickerRoot from './ColorSwatchPickerRoot.vue'

const TEST_COLOR = '#ff00aa'

describe('colorSwatchPickerRoot.vue', () => {
  it('renders with the correct model value', () => {
    const { getByRole } = render(ColorSwatchPickerRoot, {
      props: { modelValue: TEST_COLOR },
      slots: {
        default: `<div data-testid="slot-content"></div>`,
      },
    })
    expect(getByRole('listbox')).toBeInTheDocument()
  })
})

describe('colorSwatchPickerItem.vue', () => {
  it('applies the correct style variable for color', () => {
    const { getByRole } = render(ColorSwatchPickerItem, {
      props: { value: TEST_COLOR },
      slots: { default: 'item' },
    })
    const item = getByRole('option')
    expect(item.style.getPropertyValue('--reka-color-swatch-picker-item-color')).toBe(TEST_COLOR)
  })
})
