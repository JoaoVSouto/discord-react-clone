import React from 'react';

import { Container, Avatar } from './styles';

interface Props {
  nickname: string;
  avatar: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ avatar, nickname, isBot }) => {
  return (
    <Container>
      <Avatar src={avatar} alt={nickname} className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </Container>
  );
};

export default UserRow;
