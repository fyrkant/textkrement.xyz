import * as React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview: React.FC<{
  entry: {getIn: (x: string[])  => any},
  widgetFor: any
}> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default AboutPagePreview;
