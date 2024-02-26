'use client';

import React, { use, useEffect } from 'react';
import styles from '../styles/App.module.css';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import markdownToHtml from '../lib/markdownToHtml';
import { usePreview } from '../app/context';
import { getBlogMetadata } from '../lib/blogFetchers';
import MDEditor, { commands } from '@uiw/react-md-editor/nohighlight';
import '../styles/Markdown.css';


const metadata = {
  title: 'Dynamic Routing and Static Generation',
  excerpt:
    'The @tailwindcss/typography plugin simplifies styling articles and blog posts with Tailwind CSS.',
  coverImage:
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  author: {
    picture:
      'https://www.aiaautd.org/_next/image?url=%2Fofficers%2Fkevin.jpg&w=1080&q=75',
    name: 'AIAA UTD',
  },
  date: 'March 16, 2024',
  readTime: '',
}

export default function Home() {
  const [blogMetadata, setBlogMetadata] = useState();
  const [markdown, setMarkdown] = useState(`---
  title: "${metadata.title}"
  excerpt: "${metadata.excerpt}"
  coverImage: "${metadata.coverImage}"
  date: "${metadata.date}"
  author:
    name: "${metadata.author.name}"
    picture: "${metadata.author.picture}"
---`);
  const [html, setHTML] = useState('');
  const [done, setDone] = useState(false);
  const { state } = usePreview();

  async function convertMarkdownToHTML() {
    const md = await getBlogMetadata(markdown);
    const content = await markdownToHtml(md.content);

    setHTML(content);
    setBlogMetadata(md.metadata);
    setDone(true);
  }

  async function saveToLocalStorage(value) {
    localStorage.setItem("aiaa-curr-blog", value);
  }

  useEffect(() => {
    const savedFromStorage = localStorage.getItem("aiaa-curr-blog");

    if (savedFromStorage) {
      setMarkdown(savedFromStorage);
    }
  }, [])

  useEffect(() => {
    if (state.isPreviewVisible) {
      convertMarkdownToHTML();
    } else {
      setDone(false)
    }
  }, [state.isPreviewVisible]); // Dependency array ensures this effect runs only when state.isPreviewVisible changes

  return (
    <div className={styles.App}>
      <Head>
        <title>American Institute of Aeronautics and Astronautics at UTD</title>
      </Head>
      <main className="markdown text-white">
        {!state.isPreviewVisible && (
          <div className="min-h-[80svh] container py-8">
            <MDEditor
              data-color-mode="light"
              value={markdown}
              preview="edit"
              height={"72svh"}
              enablePreview={false}
              onChange={(value) => {
                setMarkdown(value);
                saveToLocalStorage(value)
              }}
              extraCommands={[commands.fullscreen]}
            />
          </div>
        )}

        {state.isPreviewVisible && done && (
          <div className="min-h-screen max-w-3xl mx-auto text-left py-14 px-4">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
              {blogMetadata.title ?? ""}
            </h1>
            {/* cover image */}
            <Image
              className="mb-5 rounded-lg object-cover"
              src={blogMetadata.coverImage ?? ""}
              alt={blogMetadata.title ?? ""}
              width={1300}
              height={630}
            />

            {/* author */}
            <div className="flex flex-col mb-4 md:flex-row md:items-center">
              <div className="flex items-center">
                <div className="relative w-14 h-14">
                  <Image
                    className="rounded-full w-full object-cover m-0"
                    src={blogMetadata.author.picture ?? ""}
                    alt={blogMetadata.author.name ?? ""}
                    fill
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm my-0">Written by</p>
                  <p className="text-lg font-bold my-0">
                    {blogMetadata.author.name ?? ""}
                  </p>
                </div>
              </div>

              {/* date and read time */}
              <div className="mt-3 md:ml-auto">
                <p className="text-sm my-0">
                  {blogMetadata.date ?? ""} • {blogMetadata.readTime ?? ""} min read
                </p>
              </div>
            </div>

            {/* line */}
            <div className="w-full mb-4 border-b-2 border-gray-500" />

            <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )}
      </main>
    </div>
  );
}
