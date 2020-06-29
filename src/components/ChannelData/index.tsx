import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const messagesContainer = messagesRef.current;

    if (messagesContainer) {
      const messagesContainerHeight = messagesContainer.getBoundingClientRect()
        .height;

      messagesContainer.scroll({
        top: messagesContainerHeight,
        behavior: 'smooth',
      });
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <ChannelMessage
              key={i}
              author="João Vítor"
              date="29/06/2020"
              avatar="https://api.adorable.io/avatars/face/eyes5/nose7/mouth9/6633cc"
              content="Recriando a interface do Discord guys!"
            />
          ))}

        <ChannelMessage
          author="Pedro Lucas"
          date="29/06/2020"
          avatar="https://api.adorable.io/avatars/face/eyes2/nose4/mouth1/008eff"
          content={
            <>
              <Mention>@João Vítor</Mention>, me empresta o controle do
              Playstation pfv??
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
