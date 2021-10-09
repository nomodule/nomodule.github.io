import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-red-500">Hi, I'm Ajay</h1>
        <StaticImage src={'../images/ajay.jpg'} alt="" />
      </div>
    </Layout>
  );
};

export default IndexPage;
