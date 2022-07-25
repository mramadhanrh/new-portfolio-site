import { FC } from 'react';
import { Button, Icon } from './style';

const HamburgerButton: FC = () => (
  <Button variant="primary">
    <Icon src="/nav-icon.png" />
  </Button>
);

export default HamburgerButton;
