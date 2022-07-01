import { mediaBreakpoint } from 'constants/breakpoint';
import { Col, Modal, Row } from 'antd';
import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const ModalContainer = styled(Modal)`
  top: 0px;
  width: 100%;
  height: 100%;
  max-width: unset;
  margin: 0;
  padding: 0;
  padding: 20px;

  & .ant-modal-body {
    display: flex;
    padding: 0;
    height: 100%;
  }

  & .ant-modal-content {
    height: 100%;
    overflow: hidden;
  }

  ${mediaBreakpoint.lg} {
    padding: 50px;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 9999;

  & > .ant-row,
  > .ant-row > .ant-col {
    height: 100%;
  }
`;

export const CoverImage = styled.div<{ src: string }>`
  position: relative;
  background: url(${({ src }) => src}) center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    360deg,
    rgba(117, 73, 7, 0.56) 0%,
    rgba(117, 73, 7, 0) 100%
  );
  z-index: 1;
  opacity: 0.7;
  transition: 0.3s opacity cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const ContentCol = styled(Col)`
  padding: 25px 30px 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  ${mediaBreakpoint.lg} {
    padding: 48px 30px 25px;
  }
`;

export const ProductRow = styled(Row)`
  width: 100%;
  flex-flow: column;
  flex-direction: column;

  & > .ant-col {
    flex: auto;
  }

  & > .ant-col:first-child {
    flex: none;
  }

  ${mediaBreakpoint.lg} {
    flex-flow: row;
    flex-direction: row;

    & > .ant-col:first-child {
      flex: auto;
    }
  }
`;

export const Description = styled.p`
  flex: 1;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`;

export const ProductName = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;
  text-align: right;
  color: ${({ theme }) => theme.textColor.primary};
`;

export const ProductTech = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.textColor.secondary};
`;

export const CreationDate = styled.h6`
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.color.alto};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 7px;
  top: 7px;
  font-size: 18px;
  padding: 8px;
  z-index: 1;

  & svg {
    fill: ${({ theme }) => theme.color.grey};
  }
`;
