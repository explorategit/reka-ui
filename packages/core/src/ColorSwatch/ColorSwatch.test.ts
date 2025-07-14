import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ColorSwatch from './ColorSwatch.vue'

const TEST_COLOR = '#123abc'

describe('colorSwatch.vue', () => {
  it('applies the correct style variable for color', () => {
    const { getByRole } = render(ColorSwatch, { props: { color: TEST_COLOR } })
    const swatch = getByRole('img')
    expect(swatch.style.getPropertyValue('--reka-color-swatch-color')).toBe(TEST_COLOR)
  })

  it('sets the correct aria-label', () => {
    const { getByRole } = render(ColorSwatch, { props: { color: TEST_COLOR } })
    const swatch = getByRole('img')
    expect(swatch.hasAttribute('aria-label')).toBe(true)
  })

  it('sets aria-roledescription to "color swatch"', () => {
    const { getByRole } = render(ColorSwatch, { props: { color: TEST_COLOR } })
    const swatch = getByRole('img')
    expect(swatch.getAttribute('aria-roledescription')).toBe('color swatch')
  })
})
