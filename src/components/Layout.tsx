import * as React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

export const Layout = ({ children }) => (
  <div>
    <Helmet title='textkrement.xyz' meta={[
      { name: 'description', content: 'Inget särskilt.' },
      { name: 'keywords', content: 'text, blogg, mattias, wikström, programmering' },
    ]}>
      <html lang='sv' />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);
