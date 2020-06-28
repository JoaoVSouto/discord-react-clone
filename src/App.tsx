import React from 'react';

import Layout from './components/Layout';
import ServerList from './components/ServerList';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <ServerList />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
