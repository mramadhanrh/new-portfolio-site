import styled, { ColorVariant } from 'styled-components';

interface TagProps {
  backgroundColor?: ColorVariant;
  shadowColor?: ColorVariant;
}

const Tag = styled.div<TagProps>`
  font-weight: bold;
  font-size: 9px;
  line-height: 13px;

  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  box-shadow: 2px 2px 0px 0px
    ${({ theme, shadowColor }) => theme.color[shadowColor]};
  color: ${({ theme }) => theme.color.white};

  padding: 4px 11px;

  width: fit-content;
`;

export default Tag;
