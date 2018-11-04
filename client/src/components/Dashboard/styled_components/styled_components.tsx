import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { ThemeInterface } from './theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled

export { styled }

export const withProps = <U>() => <P, T, O>(
  fn: styledComponents.ThemedStyledFunction<P, T, O>,
) => fn as styledComponents.ThemedStyledFunction<P & U, T, O & U>
