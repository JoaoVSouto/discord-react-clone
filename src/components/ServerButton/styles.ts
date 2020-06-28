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

  ${(props) =>
    props.mentions &&
    css`
      &::after {
        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${props.mentions >= 1000 ? '999+' : props.mentions}';
      }
    `}

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
