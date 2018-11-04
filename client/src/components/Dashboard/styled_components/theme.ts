export interface ThemeInterface {
  colours: Colours
  radii: Radii
  sizes: Sizes
  shadows: Shadows
}

interface Colours {
  lightGray: '#EFF3F5'
  lightishGray: '#E5E9EB'
  gray: '#CCD9DF'
  darkGray: '#7E9AA8'
  green: '#15BD76'
  lightBlue: '#D9E3ED'
  blue: '#0F7AD8'
  red: '#FF4F56'
  orange: '#FF8934'
  dark: '#0C344B'
}

interface Radii {
  small: '4px'
  normal: '6px'
  ellipse: '99px'
}

interface Sizes {
  small16: '16px'
}

interface Shadows {
  small: '0px 1px 3px rgba(12, 52, 75, 0.05)'
  normal: '0px 3px 3px rgba(12, 52, 75, 0.05)'
}

export const colours: Colours = {
  lightGray: '#EFF3F5',
  lightishGray: '#E5E9EB',
  gray: '#CCD9DF',
  darkGray: '#7E9AA8',
  green: '#15BD76',
  lightBlue: '#D9E3ED',
  blue: '#0F7AD8',
  red: '#FF4F56',
  orange: '#FF8934',
  dark: '#0C344B'
}

const radii: Radii = {
  small: '4px',
  normal: '6px',
  ellipse: '99px'
}

const sizes: Sizes = {
  small16: '16px',
}

const shadows: Shadows = {
  small: '0px 1px 3px rgba(12, 52, 75, 0.05)',
  normal: '0px 3px 3px rgba(12, 52, 75, 0.05)'
}

export const theme: ThemeInterface = {
  colours,
  radii,
  sizes,
  shadows
}