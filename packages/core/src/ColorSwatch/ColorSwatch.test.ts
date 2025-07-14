import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import ColorSwatch from './story/_ColorSwatch.vue'

describe('given a default ColorSwatch', () => {
  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(ColorSwatch, { attachTo: document.body })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should render ColorSwatch', () => {
    const wrapper = mount(ColorSwatch)
    expect(wrapper.element).toBeTruthy()
  })
})
