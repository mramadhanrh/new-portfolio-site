import styled from 'styled-components';
import { Row } from 'antd';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

export const Wrapper = styled(Row)`
  background-color: ${({ theme }) => theme.color.white};
  border-right: inset 29px ${({ theme }) => theme.color.pizzaz};
  padding: 16px;
  box-sizing: border-box;
  opacity: 0;
`;

export const Title = styled.h1`
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: ${({ theme }) => theme.textColor.primary};

  text-shadow: 2px 2px 0px ${({ theme }) => theme.color.secondary};
  margin: 0;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin: 5px 5px 0 0;
  }
`;
