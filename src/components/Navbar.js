import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex items-center h-16">
      <h1 className="">
        <Link className="" to="/">
          Ajay.
        </Link>
      </h1>
      <nav className="ml-auto">
        <ul className="flex">
          <li>
            <Link
              className="block p-1 px-3 rounded hover:bg-green-500 hover:text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block p-1 px-3 rounded hover:bg-green-500 hover:text-white"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block p-1 px-3 rounded hover:bg-green-500 hover:text-white"
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
