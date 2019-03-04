import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate: React.FC<{
  title: string;
  content: string;
  contentComponent?: any
}> = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className='section section--gradient'>
      <div className='container content'>
        <h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
          {title}
        </h2>
        <PageContent className='content' content={content} />
      </div>
    </section>
  );
};

const AboutPage: React.FC<{
  data: Record<any, any>
}> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
