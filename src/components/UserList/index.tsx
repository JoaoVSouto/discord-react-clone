import React, { useState } from 'react';

import { Container, Role } from './styles';

import UserRow from '../UserRow';

const UserList: React.FC = () => {
  const [janesDoe] = useState(Array(16).fill(0));

  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow
        nickname="João Vítor"
        avatar="https://api.adorable.io/avatars/face/eyes5/nose7/mouth9/6633cc"
      />

      <Role>Offline - 18</Role>
      <UserRow
        nickname="Pedro Lucas"
        avatar="https://api.adorable.io/avatars/face/eyes2/nose4/mouth1/008eff"
        isBot
      />
      <UserRow
        nickname="John Doe"
        avatar="https://api.adorable.io/avatars/face/eyes8/nose1/mouth5/00cbfe"
      />
      {janesDoe.map((_, i) => (
        <UserRow
          key={i}
          nickname="Jane Doe"
          avatar="https://api.adorable.io/avatars/face/eyes1/nose2/mouth3/4efce0"
        />
      ))}
    </Container>
  );
};

export default UserList;
