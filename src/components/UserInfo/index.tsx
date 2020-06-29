import React from 'react';
import { Mic, Headset, Settings } from 'styled-icons/material';

import { Container, Profile, Avatar, UserData, Icons } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          src="https://api.adorable.io/avatars/face/eyes5/nose7/mouth9/6633cc"
          alt="meu perfil"
        />
        <UserData>
          <strong>João Vítor</strong>
          <span>#3249</span>
        </UserData>
      </Profile>

      <Icons>
        <Mic />
        <Headset />
        <Settings />
      </Icons>
    </Container>
  );
};

export default UserInfo;
