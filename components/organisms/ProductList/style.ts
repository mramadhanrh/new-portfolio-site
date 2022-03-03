import styled from 'styled-components';
import { mediaBreakpoint } from 'constants/breakpoint';

export const Title = styled.h3`
  font-style: normal;
  font-size: 21px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: 0;

  margin-top: 80px;

  ${mediaBreakpoint.lg} {
    font-size: 64px;
  }
`;

export const Subtitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: ;
  color: ${({ theme }) => theme.color.tussock};

  ${mediaBreakpoint.lg} {
    font-size: 24px;
  }
`;

export const GridContainer = styled.div`
  columns: 1;
  column-gap: 1rem;

  & > div {
    margin: 0 1rem 1rem 0;
    width: 100%;
  }

  ${mediaBreakpoint.md} {
    columns: 2;
  }

  ${mediaBreakpoint.xl} {
    columns: 3;
  }
`;

export const WorkItem = styled.div`
  & > div {
    position: unset !important;

    & > img {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
`;
