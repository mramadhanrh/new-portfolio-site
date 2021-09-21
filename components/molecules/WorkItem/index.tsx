import { FC } from 'react';
import Image from 'next/image';
import { Container, Overlay } from './style';
import WorkItemToast from '../WorkItemToast';

interface WorkItemProps {
  src: string;
}

const WorkItem: FC<WorkItemProps> = ({ ...props }) => (
  <>
    <Container>
      <Overlay>
        <WorkItemToast />
      </Overlay>
      <Image layout="fill" {...props} />
    </Container>
  </>
);

export default WorkItem;
