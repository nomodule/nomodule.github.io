import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';

export default function Posts({ data }) {
  const posts = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div>Projects</div>
      <div className="flex flex-col border border-red-500">
        {posts.map((post) => (
          <Link to={'/blog/' + post.frontmatter.slug} key={post.id}>
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
      <p>Like what you see? Email me at {contact}</p>
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
