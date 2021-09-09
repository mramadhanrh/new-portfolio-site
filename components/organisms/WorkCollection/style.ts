import styled from 'styled-components';
import { mediaBreakpoint } from 'constants/breakpoint';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 96px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: 0;

  margin-top: 80px;
`;

export const Subtitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.tussock};
`;

export const GridContainer = styled.div`
  columns: 1;
  column-gap: 1rem;

  & div {
    width: 150px;
    color: white;
    margin: 0 1rem 1rem 0;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: system-ui;
    font-weight: 900;
    font-size: 2rem;
  }

  ${mediaBreakpoint.md} {
    columns: 2;
  }

  ${mediaBreakpoint.xl} {
    columns: 3;
  }
`;

export const WorkItem = styled.div`
  & > img {
    width: 100%;
  }
`;
