import React from 'react';

import Layout from './components/Layout';
import ServerList from './components/ServerList';
import ServerName from './components/ServerName';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <ServerList />
        <ServerName />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
