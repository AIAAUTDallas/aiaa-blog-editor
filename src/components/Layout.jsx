'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PreviewProvider } from "../app/context";

export default function Layout({ children }) {
  return (
    <>
      <PreviewProvider>
        <Navbar />
        {children}
        <Footer />
      </PreviewProvider>
    </>
  );
}
