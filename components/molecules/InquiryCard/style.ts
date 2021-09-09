import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  margin-bottom: 111px;

  width: 100%;
  min-height: 283px;
  background-color: ${({ theme }) => theme.color.bridalHeath};
  box-shadow: 25px 25px 0px #fb8c00;

  & > div > h1 {
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    color: ${({ theme }) => theme.textColor.primary};
    margin: 0;
  }

  & > div > h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.tussock};
    margin: 0;
  }

  & > button {
    padding: 14px 30px;
  }
`;
