import styled from 'styled-components';
import ButtonBase from '../Button';

export const Button = styled(ButtonBase)`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.color.secondary};
`;

export const Icon = styled.img`
  width: 28px;
  height: auto;
`;
