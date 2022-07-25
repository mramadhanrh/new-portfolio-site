import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  & > div {
    height: 100%;

    & span {
      position: unset !important;

      & > img {
        width: 100% !important;
        position: relative !important;
        height: unset !important;
      }
    }
  }
`;
