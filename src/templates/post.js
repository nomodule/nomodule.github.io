import { graphql } from 'gatsby';
import React from 'react';
import dayjs from 'dayjs';
import Layout from '../components/Layout';

export default function Post({ data }) {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className="prose mt-16">
        <time className="text-sm opacity-90">
          {dayjs(date).format('DD/MMM/YYYY')}
        </time>
        <h1>{title}</h1>
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
