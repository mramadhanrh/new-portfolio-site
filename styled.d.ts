import 'styled-components';

declare module 'styled-components' {
  export type ColorVariant =
    | 'primary'
    | 'secondary'
    | 'black'
    | 'white'
    | 'coal'
    | 'bridalHeath'
    | 'sandyBeach'
    | 'ecstasy'
    | 'chelseaGem'
    | 'pizzaz'
    | 'tussock'
    | 'grey'
    | 'alto';

  export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'link';

  export type TextColorVariant = 'primary' | 'secondary' | 'tertiary';

  export type ButtonSize = 'lg' | 'md' | 'sm';

  export interface DefaultTheme {
    color: Record<ColorVariant, string>;
    textColor: Record<TextColorVariant, string>;
    buttonColor: Record<ButtonVariant, string>;
    buttonTextColor: Record<ButtonVariant, string>;
  }
}
