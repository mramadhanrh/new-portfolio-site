import { FC } from 'react';
import Image from 'next/image';
import { Container, Overlay } from './style';

interface WorkItemProps {
  src: string;
}

const WorkItem: FC<WorkItemProps> = ({ ...props }) => (
  <>
    <Container>
      <Overlay />
      <Image layout="fill" {...props} />
    </Container>
  </>
);

export default WorkItem;
