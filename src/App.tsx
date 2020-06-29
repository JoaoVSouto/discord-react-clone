import React from 'react';

import Layout from './components/Layout';
import ServerList from './components/ServerList';
import ServerName from './components/ServerName';
import ChannelInfo from './components/ChannelInfo';
import ChannelList from './components/ChannelList';
import UserInfo from './components/UserInfo';
import UserList from './components/UserList';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <UserInfo />
        <UserList />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
