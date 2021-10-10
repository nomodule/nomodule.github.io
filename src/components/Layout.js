import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-2">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <footer className="h-16">&nbsp;</footer>
    </div>
  );
}
