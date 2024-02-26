import '../styles/globals.css';
import Layout from '../components/Layout';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <Layout>{children}</Layout>
        </body>
    </html>
  );
}
