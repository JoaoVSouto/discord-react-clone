import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-size: 15px;
      color: var(--senary);
      transition: color 0.2s;
    }
  }

  &.active,
  &:hover,
  &:focus {
    background-color: var(--quinary);

    > div svg {
      opacity: 1;
    }

    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  opacity: 0;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s, opacity 0.2s;

  &:hover,
  &:focus {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  opacity: 0;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s, opacity 0.2s;

  &:hover,
  &:focus {
    color: var(--white);
  }
`;
