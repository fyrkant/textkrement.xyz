import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

interface Post {
  node: {
    id: number;
    excerpt: string;
    fields: {
      slug: string;
    }
    frontmatter: {
      title: string;
      date: string;
    }
  };
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Post[]
    }
  };
}

export default class IndexPage extends React.Component<Props, any> {
  public static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  };

  public render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='has-text-weight-bold is-size-4'>Senaste blogginläggen</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className='content'
                  key={post.id}
                >
                  <p>
                    <Link className='has-text-dark' to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className='button is-small' to={post.fields.slug}>
                      Visa mer →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "HH:mm, DD MMMM, YYYY", locale: "sv")
          }
        }
      }
    }
  }
`;
