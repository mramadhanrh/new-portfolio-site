import styled, {
  css,
  ButtonSize,
  ButtonVariant,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disableGlow?: boolean;
}

type TButtonConfig = Record<
  ButtonSize,
  FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>
>;

const ButtonConfig: TButtonConfig = {
  lg: css`
    font-size: 24px;
    padding: 14px 20px;

    &:hover {
      box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.color.secondary};
    }
  `,
  md: css`
    font-size: 18px;
    padding: 12px 16px;
  `,
  sm: css`
    font-size: 14px;
    padding: 10px 14px;
  `,
};

const Button = styled.button<ButtonProps>`
  border: none;
  font-weight: bold;
  transition-property: box-shadow, background-color, color;
  transition: 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  box-shadow: 0px 0px 0px 0px #f86f22;

  background-color: ${({ theme, variant }) => theme.buttonColor[variant]};
  color: ${({ theme, variant }) => theme.buttonTextColor[variant]};
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.buttonTextColor.primary};
    box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.color.secondary};
  }

  ${({ size }) => ButtonConfig[size || 'sm']}
  ${({ disableGlow }) =>
    !disableGlow &&
    css`
      filter: drop-shadow(0px 5px 10px rgba(117, 70, 0, 0.3));
    `}
`;

export default Button;
