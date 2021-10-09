import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function Post({ data }) {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div style={{ border: '2px solid red' }}>
        <h1>{title}</h1>
        <time>{date}</time>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`;
