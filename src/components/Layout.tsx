import * as React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='✍💩 textkrement.xyz' meta={[
      { name: 'description', content: 'Inget särskilt.' },
      { name: 'keywords', content: 'text, blogg, mattias, wikström, programmering' },
    ]}>
      <html lang='sv' />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
