import React from 'react';

import Layout from './components/Layout';
import ServerList from './components/ServerList';
import ServerName from './components/ServerName';
import ChannelInfo from './components/ChannelInfo';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <ServerList />
        <ServerName />
        <ChannelInfo />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
