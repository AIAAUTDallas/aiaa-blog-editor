import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import header_logo from '../../public/header_logo.png';
import { usePreview } from "../app/context";

const routes = [];

export default function Navbar() {
  const { state, dispatch } = usePreview();

  const togglePreview = () => {
    dispatch({ type: 'toggle_preview' });
  };

  return (
    <nav className="navbar w-full bg-[#0a2647] px-2 md:px-4 flex items-center text-white">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/">
          <Image
            src={header_logo}
            width={120}
            height={120}
            alt="AIAA UTD Logo"
          />
        </Link>
      </div>

      <div>
        <a href='https://www.markdownguide.org/cheat-sheet/' target='_blank' className='p-2 bg-blue-700 rounded-lg mr-3 hover:cursor-pointer hover:bg-blue-800 text-white'>
          Markdown Cheat Sheet
        </a>
        <button className='p-2 bg-blue-700 rounded-lg mr-3 hover:cursor-pointer hover:bg-blue-800' onClick={togglePreview}>
          {state.isPreviewVisible ? 'Hide Preview' : 'Show Preview'}
        </button>
      </div>
    </nav>
  );
}
