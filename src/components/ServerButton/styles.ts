import styled, { css } from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  cursor: pointer;
  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.hasNotifications &&
    css`
      &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;

        background-color: var(--white);
        border-radius: 50%;

        content: '';
      }
    `}

  &::after {
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover,
  &:focus {
    border-radius: 16px;
    ${(props) =>
      !props.isHome &&
      css`
        background-color: var(--discord);
      `}
  }
`;
