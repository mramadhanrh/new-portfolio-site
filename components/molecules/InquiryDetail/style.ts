import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.grey};
  }

  & > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme }) => theme.textColor.tertiary};
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    margin-right: 8px;
  }
`;
