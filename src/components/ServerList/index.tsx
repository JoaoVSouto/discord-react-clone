import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentions={27} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
