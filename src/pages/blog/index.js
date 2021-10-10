import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';

export default function Posts({ data }) {
  const posts = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className="prose mt-16">
        <h1>Blog</h1>
        <div className="flex flex-col mt-2">
          {posts.map((post) => (
            <h2 key={post.id} className="">
              <Link
                className="block no-underline"
                to={'/blog/' + post.frontmatter.slug}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PostsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
