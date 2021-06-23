import 'styled-components';

declare module 'styled-components' {
  export type ColorVariant = 'primary' | 'secondary';

  export type ButtonVariant = ColorVariant | 'text';

  export type TextColorVariant = ColorVariant | 'black' | 'white' | 'coal';

  export type ButtonSize = 'lg' | 'md' | 'sm';

  export interface DefaultTheme {
    color: Record<ColorVariant, string>;
    textColor: Record<TextColorVariant, string>;
    buttonColor: Record<ButtonVariant, string>;
    buttonTextColor: Record<ButtonVariant, string>;
  }
}
