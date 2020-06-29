import styled from 'styled-components';

export const Container = styled.div`
  grid-area: user-info;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 1;
    }

    + svg {
      margin-left: 7px;
    }
  }
`;
