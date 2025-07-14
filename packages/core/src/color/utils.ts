/**
 * Converts a hex color string to RGB (Red, Green, Blue).
 * @param hex
 * @returns
 */
export function hexToRGB(hex: string): { r: number, g: number, b: number } {
  hex = hex.replace(/^#/, '')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

/**
 * Converts a hex color string to HSL (Hue, Saturation, Lightness).
 * @param hex Hex color string (e.g., "#ff5733")
 * @returns An object containing hue, saturation, and lightness values.
 */
export function hexToHSL(hex: string): { h: number, s: number, l: number } {
  let { r, g, b } = hexToRGB(hex)

  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number
  let s: number
  let l: number = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  }
  else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0)
    }
    else if (max === g) {
      h = (b - r) / d + 2
    }
    else {
      h = (r - g) / d + 4
    }
    h /= 6
    h *= 360
    s *= 100
    l *= 100
  }

  return { h, s, l }
}

/**
 * Converts a hex color string to a human-readable color name.
 * @param hex Hex color string (e.g., "#ff5733")
 * @returns A human-readable color name based on the hue, saturation, and lightness.
 */
export function getColorName(hex: string) {
  const { h, s, l } = hexToHSL(hex)

  // Handle achromatic colors (low saturation)
  if (s < 0.1) {
    if (l < 0.1)
      return 'black'
    if (l > 0.95)
      return 'white'
    if (l < 0.2)
      return 'very dark gray'
    if (l < 0.35)
      return 'dark gray'
    if (l < 0.65)
      return 'gray'
    if (l < 0.8)
      return 'light gray'
    return 'very light gray'
  }

  // Determine base color by hue
  let baseName
  if (h < 15 || h >= 345)
    baseName = 'red'
  else if (h < 45)
    baseName = 'orange'
  else if (h < 75)
    baseName = 'yellow'
  else if (h < 105)
    baseName = 'yellow-green'
  else if (h < 135)
    baseName = 'green'
  else if (h < 165)
    baseName = 'green-cyan'
  else if (h < 195)
    baseName = 'cyan'
  else if (h < 225)
    baseName = 'blue'
  else if (h < 255)
    baseName = 'blue-violet'
  else if (h < 285)
    baseName = 'violet'
  else if (h < 315)
    baseName = 'magenta'
  else baseName = 'red-magenta'

  // Add descriptors based on saturation and lightness
  const descriptors = []
  if (s > 0.8)
    descriptors.push('vibrant')
  else if (s < 0.3)
    descriptors.push('muted')

  if (l > 0.8)
    descriptors.push('light')
  else if (l < 0.3)
    descriptors.push('dark')

  return descriptors.length > 0
    ? `${descriptors.join(' ')} ${baseName}`
    : baseName
}

export function getColorContrast(hex: string): 'light' | 'dark' {
  const { r, g, b } = hexToRGB(hex)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? 'dark' : 'light'
}
