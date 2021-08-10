import { mediaBreakpoint } from 'constants/breakpoint';
import styled from 'styled-components';

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 150px;

  font-weight: bold;
  font-size: 16px;
  text-align: right;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-sizing: border-box;
  word-break: word-break;
  white-space: pre-line;

  padding: 12px 12px;
  margin-bottom: 20px;

  box-shadow: 10px 10px 0px 0px ${({ theme }) => theme.color.secondary};
  filter: drop-shadow(0px 5px 10px rgba(117, 70, 0, 0.3));

  ${mediaBreakpoint.md} {
    font-size: 18px;
  }

  ${mediaBreakpoint.lg} {
    font-size: 24px;
    height: 180px;
  }

  ${mediaBreakpoint.xl} {
    font-size: 30px;
    height: 219px;
  }
`;

export default SkillCard;
